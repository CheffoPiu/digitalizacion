#!/bin/bash

echo "🚀 Iniciando servidor web..."
echo "📂 Directorio: $(pwd)"
echo ""
echo "✅ El servidor está corriendo en: http://localhost:8000"
echo "🌐 Abre tu navegador y ve a: http://localhost:8000"
echo ""
echo "⏹️  Presiona Ctrl+C para detener el servidor"
echo ""

python3 -m http.server 8000
