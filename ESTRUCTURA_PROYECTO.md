# Estructura del Proyecto

```
digitalizacion/
│
├── index.html              # Página principal
│
├── css/                    # Estilos
│   └── styles.css         # Estilos principales
│
├── js/                     # JavaScript
│   ├── data.js            # Datos del proyecto (línea de tiempo, indicadores, etc.)
│   └── script.js          # Lógica principal de la aplicación
│
├── data/                   # Datos externos (JSON, CSV, etc.)
│   └── (archivos de datos obtenidos de APIs/scraping)
│
├── scripts/                # Scripts de utilidad
│   ├── iniciar.sh         # Script para iniciar el servidor local
│   ├── scraper_un_egov.py # Script para obtener datos de UN E-Government
│   └── requirements_scraper.txt # Dependencias de Python
│
├── docs/                   # Documentación
│   ├── README.md          # Documentación principal
│   ├── APIS_Y_FUENTES.md  # Fuentes de datos y APIs
│   ├── ACLARACION_DATOS.md # Aclaración sobre datos reales vs ejemplos
│   └── obtener_datos_un.md # Guía para obtener datos de UN
│
├── assets/                 # Recursos estáticos
│   └── (imágenes, iconos, etc.)
│
└── ESTRUCTURA_PROYECTO.md  # Este archivo
```

## Descripción de Carpetas

### `/` (Raíz)
- `index.html`: Página principal de la aplicación web

### `/css`
Contiene todos los archivos de estilos CSS
- `styles.css`: Estilos principales de la aplicación

### `/js`
Contiene todos los archivos JavaScript
- `data.js`: Datos del proyecto (línea de tiempo, indicadores, comparaciones)
- `script.js`: Lógica principal (inicialización, eventos, gráficos)

### `/data`
Carpeta para almacenar datos obtenidos de fuentes externas
- JSON files de APIs
- CSV files descargados
- Datos procesados

### `/scripts`
Scripts de utilidad y automatización
- `iniciar.sh`: Script para iniciar servidor local
- `scraper_un_egov.py`: Script para obtener datos de UN E-Government
- `requirements_scraper.txt`: Dependencias de Python

### `/docs`
Documentación del proyecto
- README.md: Documentación principal
- APIS_Y_FUENTES.md: Fuentes de datos disponibles
- ACLARACION_DATOS.md: Explicación de datos reales vs ejemplos
- obtener_datos_un.md: Guía para obtener datos

### `/assets`
Recursos estáticos (imágenes, iconos, etc.)
- Por ahora vacía, lista para agregar recursos

## Flujo de Trabajo

1. **Desarrollo**: Editar archivos en sus carpetas correspondientes
2. **Datos**: Los datos obtenidos de APIs/scraping van en `/data`
3. **Documentación**: Mantener documentación actualizada en `/docs`
4. **Scripts**: Scripts de utilidad en `/scripts`

## Convenciones

- **CSS**: Todos los estilos en `/css`
- **JavaScript**: Separar datos (`data.js`) de lógica (`script.js`)
- **Documentación**: Todo en `/docs` con nombres descriptivos
- **Scripts**: Scripts de Python y shell en `/scripts`
