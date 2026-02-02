# Scripts para Obtener Datos del UN E-Government Survey

## 📋 Scripts Disponibles

### 1. `scraper_un_egov_ecuador.py` ⭐ RECOMENDADO

Script básico que intenta API primero, luego web scraping.

**Cómo usar:**
```bash
python3 scripts/scraper_un_egov_ecuador.py
```

**Qué hace:**
- ✅ Verifica si hay API disponible
- ✅ Si no hay API, hace web scraping de la página de Ecuador
- ✅ Extrae datos del HTML
- ✅ Guarda datos en JSON

**Ventajas:**
- No requiere instalaciones adicionales
- Rápido y simple
- Funciona con requests y BeautifulSoup

**Limitaciones:**
- Puede no funcionar si la página carga contenido con JavaScript
- Necesita que la página tenga datos en el HTML inicial

### 2. `scraper_un_egov_selenium.py` 🔥 AVANZADO

Script con Selenium para contenido dinámico (JavaScript).

**Cómo usar:**
```bash
# 1. Instalar Selenium
pip install selenium

# 2. Instalar ChromeDriver
# macOS: brew install chromedriver
# O descargar de: https://chromedriver.chromium.org/

# 3. Ejecutar
python3 scripts/scraper_un_egov_selenium.py
```

**Qué hace:**
- ✅ Abre un navegador real (Chrome)
- ✅ Espera a que JavaScript cargue el contenido
- ✅ Extrae datos después de que todo esté cargado
- ✅ Puede ejecutar JavaScript para obtener datos

**Ventajas:**
- Funciona con contenido dinámico
- Puede interactuar con la página
- Más robusto para páginas modernas

**Limitaciones:**
- Requiere Chrome y ChromeDriver instalados
- Más lento (abre navegador)
- Más recursos

## 🚀 Flujo de Trabajo Recomendado

### Opción 1: Script Básico (Más Simple)

```bash
# 1. Ejecutar scraper básico
python3 scripts/scraper_un_egov_ecuador.py

# 2. Si funciona, los datos estarán en:
#    data/un_egov_ecuador_scraped.json

# 3. Integrar en el proyecto
python3 scripts/integrar_un_egov.py
```

### Opción 2: Script con Selenium (Más Robusto)

```bash
# 1. Instalar dependencias
pip install selenium

# 2. Ejecutar scraper con Selenium
python3 scripts/scraper_un_egov_selenium.py

# 3. Integrar en el proyecto
python3 scripts/integrar_un_egov.py
```

## 📊 Datos que Se Pueden Obtener

De la página del UN E-Government Survey puedes obtener:

- ✅ **EGDI 2024**: E-Government Development Index (0.7800)
- ✅ **Rank 2024**: Posición de Ecuador (67 de 193)
- ✅ **E-Participation Index**: 0.8767 (rank 21)
- ✅ **Datos históricos**: Desde 2003 hasta 2024
- ✅ **Sub-componentes**: Human Capital, Online Service, Telecommunication
- ✅ **Comparación**: Con líderes mundiales y regionales

## ⚙️ Configuración

### Dependencias Básicas
```bash
pip install requests beautifulsoup4
```

### Dependencias Avanzadas (Selenium)
```bash
pip install selenium
# También necesitas ChromeDriver
```

## 🔧 Solución de Problemas

### Error: "No se encontró API"
✅ **Normal** - El sitio no tiene API pública, usa web scraping

### Error: "Error al acceder a la página"
- Verifica tu conexión a internet
- La página puede estar bloqueando requests automatizados
- Prueba con Selenium (simula navegador real)

### Error: "No se encontraron datos estructurados"
- La página puede cargar datos con JavaScript
- Usa el script con Selenium
- Revisa el HTML guardado en `data/un_egov_ecuador_raw.html`

### Error: "ChromeDriver not found" (Selenium)
- Instala ChromeDriver:
  ```bash
  # macOS
  brew install chromedriver
  
  # O descarga manualmente de:
  # https://chromedriver.chromium.org/
  ```

## 📝 Notas Importantes

1. **Respeto a los Términos de Servicio**: 
   - El scraping debe ser responsable
   - No hagas demasiadas peticiones muy rápido
   - Respeta los robots.txt

2. **Datos Actualizados**:
   - Los datos se actualizan cada 2 años (2024, 2022, 2020...)
   - Verifica la fecha de los datos obtenidos

3. **Alternativa Manual**:
   - Si los scripts no funcionan, puedes copiar manualmente los datos
   - Los datos ya están en `data/un_egov_ecuador.json` (copiados manualmente)

## 🎯 Próximos Pasos

1. Ejecuta el script básico primero
2. Si no funciona, prueba con Selenium
3. Si ninguno funciona, usa los datos manuales ya guardados
4. Integra los datos con `scripts/integrar_un_egov.py`
