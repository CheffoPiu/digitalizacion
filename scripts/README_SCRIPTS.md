# Scripts para Obtener Datos Reales

## 📋 Scripts Disponibles

### 1. `obtener_datos_reales.py` ⭐ PRINCIPAL

Script principal que obtiene datos reales de múltiples fuentes.

**Qué hace:**
- Obtiene datos del World Bank API (usuarios de internet, banda ancha, etc.)
- Crea estructura para datos específicos de Ecuador
- Integra todos los datos en un solo archivo JSON

**Cómo usar:**
```bash
# Instalar dependencias
pip install -r requirements_scraper.txt

# Ejecutar script
python3 scripts/obtener_datos_reales.py
```

**Datos que obtiene:**
- ✅ Usuarios de internet (% de población) - **REAL del World Bank**
- ✅ Suscripciones de banda ancha - **REAL del World Bank**
- ✅ Suscripciones móviles - **REAL del World Bank**
- ✅ Comparación con China, Chile, México, USA - **REAL del World Bank**

**Archivos generados:**
- `data/world_bank_data.json` - Datos del World Bank
- `data/ecuador_especifico.json` - Estructura para datos locales
- `data/datos_integrados.json` - Todos los datos procesados

### 2. `scraper_un_egov.py`

Script para obtener datos del UN E-Government Survey.

**Cómo usar:**
```bash
python3 scripts/scraper_un_egov.py
```

### 3. `actualizar_datos_web.js` (Opcional)

Script Node.js para actualizar automáticamente `data.js` con datos reales.

**Cómo usar:**
```bash
node scripts/actualizar_datos_web.js
```

## 🚀 Flujo de Trabajo Recomendado

### Paso 1: Obtener Datos del World Bank
```bash
python3 scripts/obtener_datos_reales.py
```

Esto generará:
- Datos reales de internet para Ecuador y países de comparación
- Estructura para completar datos específicos de Ecuador

### Paso 2: Completar Datos Específicos de Ecuador

Edita manualmente `data/ecuador_especifico.json` con datos de:
- INEC (www.ecuadorencifras.gob.ec)
- SRI (www.sri.gob.ec)
- ARCOTEL (www.arcotel.gob.ec)

### Paso 3: Integrar Datos en la Web

**Opción A: Manual**
- Abre `data/datos_integrados.json`
- Copia los valores a `js/data.js`

**Opción B: Automático (Node.js)**
```bash
node scripts/actualizar_datos_web.js
```

## 📊 Datos que Obtienes

### ✅ Datos Reales (del World Bank):
- Porcentaje de usuarios de internet por país
- Suscripciones de banda ancha
- Suscripciones móviles
- Comparación internacional

### ⚠️ Datos que Necesitas Completar:
- Firmas electrónicas (ARCOTEL)
- Trámites digitales (Ministerios)
- Compras digitales (INEC - ENTIC)
- Facturación electrónica (SRI)
- Inversión en internet (ARCOTEL/Banco Central)
- Gasto en tecnología de bonos (INEC)

## 🔄 Actualización Periódica

Los datos del World Bank se pueden actualizar periódicamente ejecutando:
```bash
python3 scripts/obtener_datos_reales.py
```

## ⚠️ Notas Importantes

1. **Rate Limiting**: El script espera 1 segundo entre peticiones para no sobrecargar la API
2. **Datos Específicos**: Los datos específicos de Ecuador deben obtenerse manualmente de fuentes oficiales
3. **Verificación**: Siempre verifica los datos obtenidos antes de usarlos en producción
4. **Backup**: Mantén un backup de `data.js` original antes de actualizar
