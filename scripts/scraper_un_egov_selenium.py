#!/usr/bin/env python3
"""
Script avanzado con Selenium para obtener datos del UN E-Government Survey
Útil cuando la página carga contenido dinámico con JavaScript
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import json
import time
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

ECUADOR_URL = "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador"

def scrape_with_selenium():
    """Hace scraping usando Selenium para contenido dinámico"""
    print("🌐 Iniciando Selenium para contenido dinámico...")
    
    # Configurar Chrome en modo headless
    chrome_options = Options()
    chrome_options.add_argument('--headless')  # Ejecutar sin abrir ventana
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    
    driver = None
    try:
        driver = webdriver.Chrome(options=chrome_options)
        print(f"✅ Navegador iniciado, accediendo a: {ECUADOR_URL}")
        
        driver.get(ECUADOR_URL)
        
        # Esperar a que la página cargue
        print("⏳ Esperando a que la página cargue...")
        time.sleep(5)  # Esperar 5 segundos para que cargue el contenido dinámico
        
        # Intentar esperar a elementos específicos
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
        except:
            pass
        
        # Obtener el HTML después de que JavaScript haya cargado
        html = driver.page_source
        
        # Buscar datos en el HTML
        data = extract_data_from_html(html)
        
        # También intentar obtener datos de JavaScript ejecutado
        try:
            # Ejecutar JavaScript para obtener datos
            js_data = driver.execute_script("""
                // Buscar datos en variables globales o en el DOM
                var data = {};
                
                // Buscar en window
                if (window.egovData) {
                    data.egovData = window.egovData;
                }
                
                // Buscar elementos con datos
                var egdiElements = document.querySelectorAll('[data-egdi], .egdi-value, #egdi-value');
                if (egdiElements.length > 0) {
                    data.egdiElements = Array.from(egdiElements).map(el => el.textContent);
                }
                
                return data;
            """)
            
            if js_data:
                print("✅ Datos encontrados en JavaScript")
                data['js_data'] = js_data
        except Exception as e:
            print(f"⚠️  No se pudieron extraer datos de JavaScript: {e}")
        
        return data
        
    except Exception as e:
        print(f"❌ Error con Selenium: {e}")
        print("\n💡 Asegúrate de tener:")
        print("   1. Chrome instalado")
        print("   2. ChromeDriver instalado y en PATH")
        print("   3. Ejecutar: pip install selenium")
        return None
    finally:
        if driver:
            driver.quit()
            print("✅ Navegador cerrado")

def extract_data_from_html(html):
    """Extrae datos del HTML"""
    from bs4 import BeautifulSoup
    import re
    
    soup = BeautifulSoup(html, 'html.parser')
    data = {
        'country': 'Ecuador',
        'source': 'UN E-Government Survey',
        'url': ECUADOR_URL,
        'scraped_at': time.strftime('%Y-%m-%d %H:%M:%S'),
        'method': 'Selenium'
    }
    
    # Buscar valores específicos
    # EGDI value: 0.7800
    egdi_patterns = [
        r'0\.78\d*',
        r'EGDI[^0-9]*([0-9]\.[0-9]+)',
        r'"egdi"[^0-9]*([0-9]\.[0-9]+)',
    ]
    
    for pattern in egdi_patterns:
        matches = re.findall(pattern, html, re.IGNORECASE)
        if matches:
            try:
                value = float(matches[0])
                if 0.7 <= value <= 0.8:  # Rango esperado para Ecuador
                    data['egdi_2024'] = {'value': value}
                    print(f"✅ EGDI encontrado: {value}")
                    break
            except:
                pass
    
    # Buscar rank: 67
    rank_patterns = [
        r'rank[^0-9]*(\d+)',
        r'#(\d+)',
        r'position[^0-9]*(\d+)',
    ]
    
    for pattern in rank_patterns:
        matches = re.findall(pattern, html, re.IGNORECASE)
        if matches:
            try:
                rank = int(matches[0])
                if 50 <= rank <= 100:  # Rango esperado
                    if 'egdi_2024' not in data:
                        data['egdi_2024'] = {}
                    data['egdi_2024']['rank'] = rank
                    print(f"✅ Rank encontrado: {rank}")
                    break
            except:
                pass
    
    return data

def main():
    print("=" * 70)
    print("🔍 SCRAPER AVANZADO - UN E-GOVERNMENT SURVEY (SELENIUM)")
    print("=" * 70)
    
    try:
        from selenium import webdriver
    except ImportError:
        print("❌ Selenium no está instalado")
        print("   Instala con: pip install selenium")
        print("   También necesitas ChromeDriver: https://chromedriver.chromium.org/")
        return
    
    data = scrape_with_selenium()
    
    if data:
        output_file = DATA_DIR / "un_egov_ecuador_selenium.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"\n💾 Datos guardados en: {output_file}")
        
        if 'egdi_2024' in data:
            print(f"\n📊 Datos extraídos:")
            if 'value' in data['egdi_2024']:
                print(f"   EGDI 2024: {data['egdi_2024']['value']}")
            if 'rank' in data['egdi_2024']:
                print(f"   Rank: {data['egdi_2024']['rank']}")
    else:
        print("\n❌ No se pudieron obtener datos")

if __name__ == "__main__":
    main()
