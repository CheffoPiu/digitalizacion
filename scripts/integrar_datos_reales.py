#!/usr/bin/env python3
"""
Script para integrar datos reales en el proyecto web
Lee datos de world_bank_data_reales.json y actualiza data.js
"""

import json
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
JS_DIR = BASE_DIR / "js"

def load_real_data():
    """Carga datos reales del World Bank"""
    data_file = DATA_DIR / "world_bank_data_reales.json"
    
    if not data_file.exists():
        print("❌ No se encontró world_bank_data_reales.json")
        return None
    
    with open(data_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def update_data_js(wb_data):
    """Actualiza data.js con datos reales"""
    data_js_file = JS_DIR / "data.js"
    
    if not data_js_file.exists():
        print("❌ No se encontró js/data.js")
        return False
    
    # Leer data.js
    with open(data_js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Actualizar comparación internacional
    country_map = {
        'ECU': 'ecuador',
        'CHN': 'china',
        'CHL': 'chile',
        'MEX': 'mexico',
        'USA': 'usa'
    }
    
    updates_made = []
    
    for code, country_key in country_map.items():
        if code in wb_data:
            country_data = wb_data[code]
            internet_users = country_data['indicators'].get('IT.NET.USER.ZS', {}).get('value')
            
            if internet_users:
                # Convertir a entero si es decimal
                internet_users_str = f"{int(internet_users)}%"
                
                # Actualizar porcentaje de digitalización usando función de reemplazo
                pattern = f"({country_key}:\\s*{{[^}}]*digitalizacion:\\s*\")([^\"]+)(\")"
                def replace_func(match):
                    return f"{match.group(1)}{internet_users_str}{match.group(3)}"
                
                new_content = re.sub(pattern, replace_func, content)
                
                if new_content != content:
                    content = new_content
                    updates_made.append(f"{country_data['country']}: {internet_users_str}")
    
    # Actualizar indicador de compras digitales con dato de internet de Ecuador
    if 'ECU' in wb_data:
        ecu_internet = wb_data['ECU']['indicators'].get('IT.NET.USER.ZS', {}).get('value')
        if ecu_internet:
            # Estimar compras digitales como porcentaje de usuarios de internet
            # (aproximadamente 50% de usuarios de internet hacen compras online)
            estimated_digital_purchases = round(ecu_internet * 0.5, 1)
            
            pattern = r'(comprasDigitales:\s*{\s*value:\s*")([^"]+)(")'
            def replace_purchases(match):
                return f"{match.group(1)}{estimated_digital_purchases}%{match.group(3)}"
            new_content = re.sub(pattern, replace_purchases, content)
            
            if new_content != content:
                content = new_content
                updates_made.append(f"Compras digitales (estimado): {estimated_digital_purchases}%")
    
    # Guardar data.js actualizado
    with open(data_js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return updates_made

def main():
    print("=" * 70)
    print("🔄 INTEGRANDO DATOS REALES EN EL PROYECTO")
    print("=" * 70)
    
    # Cargar datos reales
    wb_data = load_real_data()
    if not wb_data:
        return
    
    print("\n✅ Datos reales cargados del World Bank")
    
    # Actualizar data.js
    print("\n📝 Actualizando js/data.js...")
    updates = update_data_js(wb_data)
    
    if updates:
        print("\n✅ Actualizaciones realizadas:")
        for update in updates:
            print(f"   - {update}")
        print("\n💾 js/data.js actualizado con datos reales")
        print("\n⚠️  IMPORTANTE:")
        print("   - Los datos de internet son REALES del World Bank")
        print("   - Los demás indicadores siguen siendo ejemplos")
        print("   - Completa los datos faltantes desde fuentes oficiales")
    else:
        print("\n⚠️  No se realizaron actualizaciones")
        print("   Verifica que los datos estén en el formato correcto")

if __name__ == "__main__":
    main()
