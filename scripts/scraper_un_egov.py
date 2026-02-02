#!/usr/bin/env python3
"""
Script para obtener datos del UN E-Government Survey
Verifica si hay API disponible, si no, hace web scraping
"""

import requests
from bs4 import BeautifulSoup
import json
import time

def check_api_availability():
    """Verifica si el sitio tiene una API disponible"""
    print("🔍 Verificando si hay API disponible...")
    
    # URLs comunes para APIs de UN
    api_urls = [
        "https://publicadministration.un.org/egovkb/api",
        "https://publicadministration.un.org/egovkb/api/data",
        "https://publicadministration.un.org/egovkb/en-us/Data-Center/api"
    ]
    
    for url in api_urls:
        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                print(f"✅ API encontrada en: {url}")
                return url, response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text
        except:
            continue
    
    print("❌ No se encontró API pública")
    return None, None

def scrape_egov_data():
    """Hace web scraping del Data Center de UN E-Government"""
    print("\n🌐 Intentando web scraping...")
    
    url = "https://publicadministration.un.org/egovkb/en-us/Data-Center"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Buscar datos de Ecuador
        data = {
            'ecuador': {},
            'comparison_countries': {}
        }
        
        # Buscar tablas o elementos con datos
        tables = soup.find_all('table')
        if tables:
            print("✅ Tablas encontradas en la página")
            # Aquí puedes extraer datos específicos de las tablas
        
        # Buscar datos en formato JSON embebido
        scripts = soup.find_all('script')
        for script in scripts:
            if script.string and 'data' in script.string.lower():
                # Intentar extraer JSON
                try:
                    # Buscar objetos JSON en el script
                    import re
                    json_match = re.search(r'\{.*\}', script.string, re.DOTALL)
                    if json_match:
                        json_data = json.loads(json_match.group())
                        print("✅ Datos JSON encontrados en la página")
                        return json_data
                except:
                    continue
        
        # Si hay iframes o contenido dinámico, podría necesitar Selenium
        print("⚠️  La página puede tener contenido dinámico (JavaScript)")
        print("   Podría necesitar Selenium para contenido cargado dinámicamente")
        
        return {
            'html_content_length': len(response.text),
            'tables_found': len(tables),
            'note': 'Datos extraídos del HTML. Revisar estructura de la página.'
        }
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error al acceder a la página: {e}")
        return None

def get_ecuador_data():
    """Obtiene datos específicos de Ecuador"""
    print("\n🇪🇨 Buscando datos de Ecuador...")
    
    # Intentar buscar datos específicos de Ecuador
    # Esto dependería de la estructura real del sitio
    
    ecuador_data = {
        'country': 'Ecuador',
        'egov_index': None,
        'online_service_index': None,
        'telecommunication_index': None,
        'human_capital_index': None,
        'year': None
    }
    
    return ecuador_data

def main():
    print("=" * 60)
    print("UN E-Government Survey - Data Extractor")
    print("=" * 60)
    
    # 1. Verificar API
    api_url, api_data = check_api_availability()
    
    if api_url:
        print("\n✅ Usando API (método recomendado)")
        print(f"URL: {api_url}")
        if api_data:
            print("Datos obtenidos:")
            print(json.dumps(api_data, indent=2)[:500] + "...")
        return api_data
    
    # 2. Si no hay API, hacer scraping
    print("\n⚠️  No se encontró API, usando web scraping")
    scraped_data = scrape_egov_data()
    
    if scraped_data:
        print("\n✅ Datos obtenidos mediante scraping")
        print(json.dumps(scraped_data, indent=2)[:500] + "...")
        
        # Guardar en archivo
        with open('un_egov_data.json', 'w', encoding='utf-8') as f:
            json.dump(scraped_data, f, indent=2, ensure_ascii=False)
        print("\n💾 Datos guardados en: un_egov_data.json")
        
        return scraped_data
    else:
        print("\n❌ No se pudieron obtener datos")
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
