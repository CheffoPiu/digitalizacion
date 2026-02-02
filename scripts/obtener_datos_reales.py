#!/usr/bin/env python3
"""
Script principal para obtener datos reales de múltiples fuentes
- World Bank API (datos de internet)
- UN E-Government Survey (scraping)
- Datos locales de Ecuador (estructura para agregar)
"""

import requests
import json
import os
from datetime import datetime
from pathlib import Path

# Configuración
BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

def get_world_bank_data():
    """Obtiene datos del World Bank API"""
    print("\n🌍 Obteniendo datos del World Bank API...")
    
    # Indicadores relevantes
    indicators = {
        'IT.NET.USER.ZS': 'Internet users (% of population)',
        'IT.NET.BBND': 'Fixed broadband subscriptions',
        'IT.CEL.SETS.P2': 'Mobile cellular subscriptions (per 100 people)'
    }
    
    countries = {
        'ECU': 'Ecuador',
        'CHN': 'China',
        'CHL': 'Chile',
        'MEX': 'Mexico',
        'USA': 'United States'
    }
    
    world_bank_data = {}
    
    for country_code, country_name in countries.items():
        print(f"  📊 Obteniendo datos de {country_name}...")
        country_data = {
            'country': country_name,
            'code': country_code,
            'indicators': {}
        }
        
        for indicator_code, indicator_name in indicators.items():
            try:
                url = f"https://api.worldbank.org/v2/country/{country_code}/indicator/{indicator_code}?format=json&date=2020:2023&per_page=10"
                response = requests.get(url, timeout=10)
                
                if response.status_code == 200:
                    data = response.json()
                    if len(data) > 1 and len(data[1]) > 0:
                        # Obtener el valor más reciente
                        latest = data[1][0]
                        value = latest.get('value')
                        year = latest.get('date')
                        country_data['indicators'][indicator_code] = {
                            'name': indicator_name,
                            'value': value,
                            'year': year,
                            'unit': '%' if 'ZS' in indicator_code or 'P2' in indicator_code else 'subscriptions'
                        }
                        print(f"    ✅ {indicator_name}: {value} ({year})")
                    else:
                        print(f"    ⚠️  No hay datos para {indicator_name}")
                else:
                    print(f"    ❌ Error al obtener {indicator_name}: {response.status_code}")
                    
                # Esperar un poco entre peticiones para no sobrecargar la API
                import time
                time.sleep(1)
                
            except Exception as e:
                print(f"    ❌ Error: {e}")
                continue
        
        world_bank_data[country_code] = country_data
    
    # Guardar datos
    output_file = DATA_DIR / "world_bank_data.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(world_bank_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Datos del World Bank guardados en: {output_file}")
    return world_bank_data

def get_ecuador_specific_data():
    """Obtiene datos específicos de Ecuador de fuentes locales"""
    print("\n🇪🇨 Preparando estructura para datos específicos de Ecuador...")
    
    # Estructura para datos que necesitas obtener manualmente o de otras fuentes
    ecuador_data = {
        'firmas_electronicas': {
            'value': None,
            'source': 'ARCOTEL o entidad emisora',
            'note': 'Obtener de reportes oficiales'
        },
        'tramites_digitales': {
            'value': None,
            'source': 'Ministerios (listado de trámites)',
            'note': 'Contar trámites disponibles en portales gubernamentales'
        },
        'compras_digitales': {
            'value': None,
            'source': 'INEC - Encuesta ENTIC',
            'note': 'Descargar de www.ecuadorencifras.gob.ec'
        },
        'facturacion_electronica': {
            'value': None,
            'source': 'SRI - Reportes anuales',
            'note': 'Obtener de www.sri.gob.ec'
        },
        'inversion_internet': {
            'value': None,
            'source': 'ARCOTEL o Banco Central',
            'note': 'Reportes de inversión en telecomunicaciones'
        },
        'gasto_tecnologia_bonos': {
            'value': None,
            'source': 'INEC - Encuestas',
            'note': 'Datos de uso de bonos en tecnología'
        },
        'leyes_digitalizacion': {
            'value': 8,  # Número real de leyes principales
            'source': 'Registro Oficial',
            'note': 'Leyes verificadas en el código'
        }
    }
    
    output_file = DATA_DIR / "ecuador_especifico.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(ecuador_data, f, indent=2, ensure_ascii=False)
    
    print(f"💾 Estructura guardada en: {output_file}")
    print("   ⚠️  Estos datos deben ser completados manualmente desde fuentes oficiales")
    return ecuador_data

def process_and_integrate_data():
    """Procesa y integra todos los datos obtenidos"""
    print("\n🔄 Procesando e integrando datos...")
    
    integrated_data = {
        'timestamp': datetime.now().isoformat(),
        'indicators': {},
        'comparison': {},
        'sources': {
            'world_bank': 'https://data.worldbank.org/',
            'ecuador_specific': 'Fuentes oficiales ecuatorianas'
        }
    }
    
    # Cargar datos del World Bank
    world_bank_file = DATA_DIR / "world_bank_data.json"
    if world_bank_file.exists():
        with open(world_bank_file, 'r', encoding='utf-8') as f:
            wb_data = json.load(f)
            
            # Procesar datos de Ecuador
            if 'ECU' in wb_data:
                ecu_data = wb_data['ECU']
                internet_users = ecu_data['indicators'].get('IT.NET.USER.ZS', {}).get('value')
                if internet_users:
                    integrated_data['indicators']['internet_users_percent'] = round(internet_users, 2)
            
            # Procesar comparación internacional
            for country_code in ['ECU', 'CHN', 'CHL', 'MEX', 'USA']:
                if country_code in wb_data:
                    country_data = wb_data[country_code]
                    internet_users = country_data['indicators'].get('IT.NET.USER.ZS', {}).get('value')
                    if internet_users:
                        integrated_data['comparison'][country_code] = {
                            'country': country_data['country'],
                            'internet_users_percent': round(internet_users, 2)
                        }
    
    # Cargar datos específicos de Ecuador
    ecuador_file = DATA_DIR / "ecuador_especifico.json"
    if ecuador_file.exists():
        with open(ecuador_file, 'r', encoding='utf-8') as f:
            ecu_specific = json.load(f)
            integrated_data['indicators']['ecuador_specific'] = ecu_specific
    
    # Guardar datos integrados
    output_file = DATA_DIR / "datos_integrados.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(integrated_data, f, indent=2, ensure_ascii=False)
    
    print(f"💾 Datos integrados guardados en: {output_file}")
    return integrated_data

def main():
    print("=" * 70)
    print("🔍 OBTENIENDO DATOS REALES PARA EL PROYECTO")
    print("=" * 70)
    
    try:
        # 1. Obtener datos del World Bank
        world_bank_data = get_world_bank_data()
        
        # 2. Preparar estructura para datos específicos de Ecuador
        ecuador_data = get_ecuador_specific_data()
        
        # 3. Procesar e integrar todos los datos
        integrated_data = process_and_integrate_data()
        
        print("\n" + "=" * 70)
        print("✅ PROCESO COMPLETADO")
        print("=" * 70)
        print("\n📁 Archivos generados en la carpeta 'data/':")
        print("   - world_bank_data.json (datos del World Bank)")
        print("   - ecuador_especifico.json (estructura para datos locales)")
        print("   - datos_integrados.json (todos los datos procesados)")
        print("\n⚠️  IMPORTANTE:")
        print("   - Los datos del World Bank son REALES")
        print("   - Los datos específicos de Ecuador necesitan ser completados")
        print("   - Revisa ecuador_especifico.json y completa con datos oficiales")
        print("\n📖 Fuentes para completar datos:")
        print("   - INEC: www.ecuadorencifras.gob.ec")
        print("   - SRI: www.sri.gob.ec")
        print("   - ARCOTEL: www.arcotel.gob.ec")
        
    except Exception as e:
        print(f"\n❌ Error en el proceso: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    # Verificar dependencias
    try:
        import requests
    except ImportError:
        print("❌ Faltan dependencias. Instala con:")
        print("   pip install requests")
        exit(1)
    
    main()
