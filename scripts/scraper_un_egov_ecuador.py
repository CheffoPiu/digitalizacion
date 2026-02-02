#!/usr/bin/env python3
"""
Script para obtener datos de Ecuador del UN E-Government Survey
Intenta API primero, luego web scraping de la página específica
"""

import requests
from bs4 import BeautifulSoup
import json
import re
import time
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

# URL específica de Ecuador
ECUADOR_URL = "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador"

def check_api():
    """Verifica si hay API disponible"""
    print("🔍 Verificando si hay API disponible...")
    
    # Posibles endpoints de API
    api_endpoints = [
        "https://publicadministration.un.org/egovkb/api/country/52",
        "https://publicadministration.un.org/egovkb/api/v1/country/52",
        "https://publicadministration.un.org/egovkb/api/data/ecuador",
    ]
    
    for endpoint in api_endpoints:
        try:
            response = requests.get(endpoint, timeout=5, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            })
            if response.status_code == 200:
                try:
                    data = response.json()
                    print(f"✅ API encontrada en: {endpoint}")
                    return endpoint, data
                except:
                    pass
        except:
            continue
    
    print("❌ No se encontró API pública")
    return None, None

def scrape_ecuador_page():
    """Hace web scraping de la página de Ecuador"""
    print(f"\n🌐 Haciendo web scraping de: {ECUADOR_URL}")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
    }
    
    try:
        response = requests.get(ECUADOR_URL, headers=headers, timeout=15)
        response.raise_for_status()
        
        print(f"✅ Página cargada exitosamente (Status: {response.status_code})")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extraer datos
        data = {
            'country': 'Ecuador',
            'source': 'UN E-Government Survey',
            'url': ECUADOR_URL,
            'scraped_at': time.strftime('%Y-%m-%d %H:%M:%S'),
            'egdi_2024': {},
            'epart_2024': {},
            'historical_data': {},
            'sub_components': {},
            'comparison': {}
        }
        
        # Buscar datos en el HTML
        html_text = str(soup)
        
        # Extraer EGDI 2024
        egdi_pattern = r'EGDI[^"]*["\']?\s*:\s*["\']?([0-9.]+)'
        egdi_match = re.search(egdi_pattern, html_text, re.IGNORECASE)
        if egdi_match:
            data['egdi_2024']['value'] = float(egdi_match.group(1))
            print(f"✅ EGDI 2024 encontrado: {data['egdi_2024']['value']}")
        
        # Buscar rank
        rank_pattern = r'rank[^"]*["\']?\s*:\s*["\']?(\d+)'
        rank_matches = re.findall(rank_pattern, html_text, re.IGNORECASE)
        if rank_matches:
            data['egdi_2024']['rank'] = int(rank_matches[0])
            print(f"✅ Rank encontrado: {data['egdi_2024']['rank']}")
        
        # Buscar datos en scripts JavaScript (muchas páginas cargan datos así)
        scripts = soup.find_all('script')
        for script in scripts:
            if script.string:
                script_text = script.string
                
                # Buscar datos JSON embebidos
                json_patterns = [
                    r'egdi["\']?\s*:\s*([0-9.]+)',
                    r'EGDI["\']?\s*:\s*([0-9.]+)',
                    r'"egdi"\s*:\s*([0-9.]+)',
                    r'value["\']?\s*:\s*([0-9.]+)',
                ]
                
                for pattern in json_patterns:
                    matches = re.findall(pattern, script_text, re.IGNORECASE)
                    if matches and 'egdi_2024' in data and 'value' not in data['egdi_2024']:
                        try:
                            value = float(matches[0])
                            if 0 < value <= 1:  # EGDI está entre 0 y 1
                                data['egdi_2024']['value'] = value
                                print(f"✅ EGDI encontrado en script: {value}")
                                break
                        except:
                            pass
                
                # Buscar objetos JSON completos
                json_obj_pattern = r'\{[^{}]*"egdi"[^{}]*\}'
                json_matches = re.findall(json_obj_pattern, script_text, re.IGNORECASE)
                for json_str in json_matches:
                    try:
                        json_data = json.loads(json_str)
                        if 'egdi' in json_data or 'EGDI' in json_data:
                            print("✅ Datos JSON encontrados en script")
                            data['raw_json'] = json_data
                            break
                    except:
                        pass
        
        # Buscar en tablas
        tables = soup.find_all('table')
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all(['td', 'th'])
                if len(cells) >= 2:
                    text = ' '.join([cell.get_text(strip=True) for cell in cells])
                    # Buscar valores de EGDI
                    if 'egdi' in text.lower() or '0.78' in text or '0.7' in text:
                        print(f"📊 Datos encontrados en tabla: {text[:100]}")
        
        # Buscar elementos con datos específicos
        # Buscar el valor 0.7800 o similar
        value_elements = soup.find_all(string=re.compile(r'0\.\d{4}'))
        for elem in value_elements:
            parent = elem.parent
            if parent:
                parent_text = parent.get_text()
                if 'egdi' in parent_text.lower() or 'government' in parent_text.lower():
                    try:
                        value = float(re.search(r'0\.\d+', elem).group())
                        if 'egdi_2024' in data and 'value' not in data['egdi_2024']:
                            data['egdi_2024']['value'] = value
                            print(f"✅ EGDI encontrado en elemento: {value}")
                    except:
                        pass
        
        # Si no encontramos datos, guardar el HTML para análisis
        if 'value' not in data.get('egdi_2024', {}):
            print("⚠️  No se encontraron datos estructurados en el HTML")
            print("   Guardando HTML para análisis manual...")
            html_file = DATA_DIR / "un_egov_ecuador_raw.html"
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(response.text)
            print(f"   HTML guardado en: {html_file}")
            print("   Puedes revisar el HTML para encontrar los selectores correctos")
        
        return data
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error al acceder a la página: {e}")
        return None
    except Exception as e:
        print(f"❌ Error durante el scraping: {e}")
        import traceback
        traceback.print_exc()
        return None

def extract_from_html_file():
    """Extrae datos de un archivo HTML guardado previamente"""
    html_file = DATA_DIR / "un_egov_ecuador_raw.html"
    
    if not html_file.exists():
        return None
    
    print(f"\n📄 Leyendo HTML guardado: {html_file}")
    
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Aquí puedes agregar selectores específicos una vez que identifiques
    # la estructura exacta de la página
    
    return None

def main():
    print("=" * 70)
    print("🔍 OBTENIENDO DATOS DE ECUADOR - UN E-GOVERNMENT SURVEY")
    print("=" * 70)
    
    # 1. Intentar API
    api_url, api_data = check_api()
    
    if api_url and api_data:
        print("\n✅ Usando API (método preferido)")
        output_file = DATA_DIR / "un_egov_ecuador_api.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(api_data, f, indent=2, ensure_ascii=False)
        print(f"💾 Datos guardados en: {output_file}")
        return api_data
    
    # 2. Hacer web scraping
    print("\n⚠️  No se encontró API, usando web scraping")
    scraped_data = scrape_ecuador_page()
    
    if scraped_data:
        # Guardar datos
        output_file = DATA_DIR / "un_egov_ecuador_scraped.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(scraped_data, f, indent=2, ensure_ascii=False)
        
        print(f"\n💾 Datos guardados en: {output_file}")
        
        # Mostrar resumen
        if 'egdi_2024' in scraped_data and 'value' in scraped_data['egdi_2024']:
            print(f"\n📊 Datos extraídos:")
            print(f"   EGDI 2024: {scraped_data['egdi_2024']['value']}")
            if 'rank' in scraped_data['egdi_2024']:
                print(f"   Rank: {scraped_data['egdi_2024']['rank']}")
        
        return scraped_data
    else:
        print("\n❌ No se pudieron obtener datos")
        print("\n💡 SUGERENCIAS:")
        print("   1. Verifica que la URL sea correcta")
        print("   2. La página puede requerir JavaScript (necesitarías Selenium)")
        print("   3. Revisa el HTML guardado para encontrar los selectores correctos")
        return None

if __name__ == "__main__":
    # Verificar dependencias
    try:
        import requests
        import bs4
    except ImportError:
        print("❌ Faltan dependencias. Instala con:")
        print("   pip install requests beautifulsoup4")
        exit(1)
    
    main()
