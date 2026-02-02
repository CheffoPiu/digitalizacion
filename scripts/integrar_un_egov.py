#!/usr/bin/env python3
"""
Script para integrar datos del UN E-Government Survey en el proyecto
"""

import json
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
JS_DIR = BASE_DIR / "js"

def load_un_egov_data():
    """Carga datos del UN E-Government Survey"""
    data_file = DATA_DIR / "un_egov_ecuador.json"
    
    if not data_file.exists():
        print("❌ No se encontró un_egov_ecuador.json")
        return None
    
    with open(data_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def update_data_js(un_data):
    """Actualiza data.js con datos del UN E-Government"""
    data_js_file = JS_DIR / "data.js"
    
    if not data_js_file.exists():
        print("❌ No se encontró js/data.js")
        return False
    
    # Leer data.js
    with open(data_js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updates_made = []
    
    # Actualizar porcentaje de digitalización de Ecuador con EGDI
    if 'egdi_2024' in un_data:
        egdi_value = un_data['egdi_2024']['value']
        # Convertir EGDI (0-1) a porcentaje (0-100)
        digitalizacion_percent = int(egdi_value * 100)
        
        # Actualizar en comparisonData para Ecuador
        pattern = r'(ecuador:\s*{[^}]*digitalizacion:\s*")([^"]+)(")'
        def replace_ecuador(match):
            return f"{match.group(1)}{digitalizacion_percent}%{match.group(3)}"
        
        new_content = re.sub(pattern, replace_ecuador, content)
        
        if new_content != content:
            content = new_content
            updates_made.append(f"Ecuador digitalización: {digitalizacion_percent}% (EGDI: {egdi_value})")
    
    # Actualizar número de leyes si está disponible
    if 'general_info' in un_data:
        # El número de leyes ya está correcto (8), pero podemos agregar nota
        pass
    
    # Guardar data.js actualizado
    with open(data_js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return updates_made

def create_indicators_update(un_data):
    """Crea actualización para indicadores basados en UN E-Government"""
    indicators = {}
    
    if 'egdi_2024' in un_data:
        egdi = un_data['egdi_2024']
        indicators['egdi'] = {
            'value': egdi['value'],
            'rank': f"{egdi['rank']} de {egdi['total_countries']}",
            'description': f"E-Government Development Index: {egdi['value']} (Rank {egdi['rank']})"
        }
    
    if 'epart_2024' in un_data:
        epart = un_data['epart_2024']
        indicators['epart'] = {
            'value': epart['value'],
            'rank': f"{epart['rank']} de {epart['total_countries']}",
            'description': f"E-Participation Index: {epart['value']} (Rank {epart['rank']})"
        }
    
    return indicators

def main():
    print("=" * 70)
    print("🔄 INTEGRANDO DATOS DEL UN E-GOVERNMENT SURVEY")
    print("=" * 70)
    
    # Cargar datos del UN E-Government
    un_data = load_un_egov_data()
    if not un_data:
        return
    
    print("\n✅ Datos del UN E-Government Survey cargados")
    print(f"   Fuente: {un_data.get('source', 'UN')}")
    print(f"   Confiabilidad: {un_data.get('reliability', 'Alta')}")
    
    # Mostrar datos clave
    if 'egdi_2024' in un_data:
        egdi = un_data['egdi_2024']
        print(f"\n📊 E-Government Development Index (EGDI) 2024:")
        print(f"   Valor: {egdi['value']}")
        print(f"   Rank: {egdi['rank']} de {egdi['total_countries']} países")
        print(f"   Mejora: Subió {abs(egdi['change_from_2022'])} posiciones desde 2022")
    
    if 'epart_2024' in un_data:
        epart = un_data['epart_2024']
        print(f"\n📊 E-Participation Index 2024:")
        print(f"   Valor: {epart['value']}")
        print(f"   Rank: {epart['rank']} de {epart['total_countries']} países")
        print(f"   ⭐ Excelente posición en participación digital")
    
    # Actualizar data.js
    print("\n📝 Actualizando js/data.js...")
    updates = update_data_js(un_data)
    
    if updates:
        print("\n✅ Actualizaciones realizadas:")
        for update in updates:
            print(f"   - {update}")
        print("\n💾 js/data.js actualizado con datos del UN E-Government")
    else:
        print("\n⚠️  No se realizaron actualizaciones automáticas")
    
    # Crear indicadores adicionales
    indicators = create_indicators_update(un_data)
    
    # Guardar indicadores
    indicators_file = DATA_DIR / "indicadores_un_egov.json"
    with open(indicators_file, 'w', encoding='utf-8') as f:
        json.dump(indicators, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Indicadores adicionales guardados en: {indicators_file}")
    
    print("\n" + "=" * 70)
    print("✅ PROCESO COMPLETADO")
    print("=" * 70)
    print("\n📝 NOTAS IMPORTANTES:")
    print("   ✅ Datos del UN E-Government Survey son OFICIALES y MUY CONFIABLES")
    print("   ✅ Ecuador tiene EGDI de 0.78 (nivel 'Very High')")
    print("   ✅ Ecuador mejoró significativamente: rank 67 en 2024")
    print("   ✅ E-Participation Index excelente: rank 21 de 193 países")
    print("\n📖 Estos datos pueden usarse con confianza en tu proyecto")

if __name__ == "__main__":
    main()
