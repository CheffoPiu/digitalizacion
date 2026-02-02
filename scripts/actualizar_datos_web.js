/**
 * Script para actualizar los datos en data.js con datos reales obtenidos
 * Ejecutar después de obtener datos con obtener_datos_reales.py
 */

const fs = require('fs');
const path = require('path');

// Rutas
const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_JS_FILE = path.join(__dirname, '..', 'js', 'data.js');
const INTEGRATED_DATA_FILE = path.join(DATA_DIR, 'datos_integrados.json');

function updateDataJS() {
    console.log('🔄 Actualizando data.js con datos reales...\n');
    
    // Leer datos integrados
    if (!fs.existsSync(INTEGRATED_DATA_FILE)) {
        console.log('❌ No se encontró datos_integrados.json');
        console.log('   Ejecuta primero: python3 scripts/obtener_datos_reales.py');
        return;
    }
    
    const integratedData = JSON.parse(fs.readFileSync(INTEGRATED_DATA_FILE, 'utf-8'));
    
    // Leer data.js actual
    let dataJS = fs.readFileSync(DATA_JS_FILE, 'utf-8');
    
    // Actualizar indicadores con datos reales
    if (integratedData.indicators) {
        const indicators = integratedData.indicators;
        
        // Actualizar porcentaje de usuarios de internet
        if (indicators.internet_users_percent) {
            const newValue = indicators.internet_users_percent;
            dataJS = dataJS.replace(
                /comprasDigitales:\s*{\s*value:\s*"[^"]*"/,
                `comprasDigitales: { value: "${newValue}%"`
            );
            console.log(`✅ Actualizado: Internet users = ${newValue}%`);
        }
    }
    
    // Actualizar comparación internacional
    if (integratedData.comparison) {
        console.log('\n📊 Datos de comparación internacional:');
        for (const [code, data] of Object.entries(integratedData.comparison)) {
            const countryMap = {
                'ECU': 'ecuador',
                'CHN': 'china',
                'CHL': 'chile',
                'MEX': 'mexico',
                'USA': 'usa'
            };
            
            const countryKey = countryMap[code];
            if (countryKey && data.internet_users_percent) {
                // Actualizar en comparisonData
                const regex = new RegExp(
                    `(${countryKey}:\\s*{[^}]*digitalizacion:\\s*")[^"]*(")`,
                    's'
                );
                dataJS = dataJS.replace(
                    regex,
                    `$1${data.internet_users_percent}%$2`
                );
                console.log(`   ✅ ${data.country}: ${data.internet_users_percent}%`);
            }
        }
    }
    
    // Guardar data.js actualizado
    fs.writeFileSync(DATA_JS_FILE, dataJS, 'utf-8');
    console.log('\n💾 data.js actualizado con datos reales');
    console.log('   ⚠️  Revisa los cambios antes de usar en producción');
}

// Ejecutar
updateDataJS();
