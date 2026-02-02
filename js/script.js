// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeModal();
    initializeIndicators();
    initializeComparison();
    initializeLaws();
    initializeDataCharts();
    initializeTabs();
});

// Navegación suave
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Inicializar línea de tiempo
function initializeTimeline() {
    const timeline = document.getElementById('timeline');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.cursor = item.details ? 'pointer' : 'default';
        
        const typeIcon = item.type === 'law' ? '📜' : '🌐';
        const typeLabel = item.type === 'law' ? 'Ley' : 'Internet';
        
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-title">${typeIcon} ${item.title}</div>
            <div class="timeline-description">${item.description}</div>
            ${item.law ? `<span class="timeline-law">${item.law}</span>` : ''}
            ${item.details ? '<div class="timeline-more"><i class="fas fa-info-circle"></i> Haz clic para más detalles</div>' : ''}
        `;
        
        // Agregar evento de clic si tiene detalles
        if (item.details) {
            timelineItem.addEventListener('click', () => openTimelineModal(item));
        }
        
        timeline.appendChild(timelineItem);
    });
}

// Abrir modal de detalles de línea de tiempo
function openTimelineModal(item) {
    const modal = document.getElementById('timelineModal');
    const typeIcon = item.type === 'law' ? '📜' : '🌐';
    const typeLabel = item.type === 'law' ? 'Ley' : 'Evento de Internet';
    
    document.getElementById('modalYear').textContent = item.year;
    document.getElementById('modalTitle').textContent = `${typeIcon} ${item.title}`;
    document.getElementById('modalType').textContent = typeLabel;
    
    if (item.details) {
        document.getElementById('modalQuePaso').textContent = item.details.quePaso || item.description;
        document.getElementById('modalPorQue').textContent = item.details.porQue || 'Información no disponible';
        document.getElementById('modalContexto').textContent = item.details.contexto || 'Información no disponible';
        document.getElementById('modalImpacto').textContent = item.details.impacto || 'Información no disponible';
        document.getElementById('modalCasos').textContent = item.details.casosResueltos || 'Información no disponible';
    } else {
        // Si no hay detalles, mostrar la descripción básica
        document.getElementById('modalQuePaso').textContent = item.description;
        document.getElementById('modalPorQue').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalContexto').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalImpacto').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalCasos').textContent = 'Información detallada no disponible para este evento.';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Cerrar modal
function closeTimelineModal() {
    const modal = document.getElementById('timelineModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Inicializar eventos del modal
function initializeModal() {
    const modal = document.getElementById('timelineModal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeTimelineModal);
    
    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTimelineModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeTimelineModal();
        }
    });
}

// Inicializar indicadores
function initializeIndicators() {
    // Actualizar valores en el hero
    document.getElementById('porcentaje-digitalizacion').textContent = '35%';
    document.getElementById('firmas-electronicas').textContent = '2.5M';
    document.getElementById('tramites-digitales').textContent = '450+';
    
    // Actualizar indicadores en la sección
    document.getElementById('ind-firma').textContent = indicatorsData.firmaElectronica.value + ' ' + indicatorsData.firmaElectronica.unit;
    document.getElementById('ind-tramites').textContent = indicatorsData.tramitesDigitales.value + ' ' + indicatorsData.tramitesDigitales.unit;
    document.getElementById('ind-compras').textContent = indicatorsData.comprasDigitales.value;
    document.getElementById('ind-facturacion').textContent = indicatorsData.facturacionElectronica.value;
    document.getElementById('ind-inversion').textContent = indicatorsData.inversionInternet.value + ' ' + indicatorsData.inversionInternet.unit;
    document.getElementById('ind-gasto-tech').textContent = indicatorsData.gastoTecnologia.value;
}

// Inicializar comparación
function initializeComparison() {
    // Actualizar tabla de comparación
    const countries = ['ecuador', 'china', 'chile', 'mexico', 'usa'];
    const countryCodes = ['ec', 'cn', 'cl', 'mx', 'us'];
    
    countryCodes.forEach((code, index) => {
        const country = countries[index];
        const data = comparisonData[country];
        
        document.getElementById(`${code}-digitalizacion`).textContent = data.digitalizacion;
        document.getElementById(`${code}-leyes`).textContent = data.leyes;
        document.getElementById(`${code}-firmas`).textContent = data.firmas;
        document.getElementById(`${code}-tramites`).textContent = data.tramites;
    });
    
    // Crear gráfico de comparación
    const ctx = document.getElementById('comparisonChart');
    if (ctx) {
        // Extraer valores numéricos de comparisonData
        const getDigitalizationValue = (country) => {
            const value = comparisonData[country].digitalizacion;
            // Remover el % y convertir a número
            return parseFloat(value.replace('%', ''));
        };
        
        const chartData = [
            getDigitalizationValue('ecuador'),
            getDigitalizationValue('china'),
            getDigitalizationValue('chile'),
            getDigitalizationValue('mexico'),
            getDigitalizationValue('usa')
        ];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Ecuador', 'China', 'Chile', 'México', 'USA'],
                datasets: [{
                    label: '% Digitalización',
                    data: chartData,
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(239, 68, 68, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(139, 92, 246, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Comparación de Digitalización por País',
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Inicializar sección de leyes
function initializeLaws() {
    const lawsContainer = document.getElementById('lawsContainer');
    
    lawsData.forEach(law => {
        const lawCard = document.createElement('div');
        lawCard.className = 'law-card';
        
        lawCard.innerHTML = `
            <div class="law-header">
                <div>
                    <div class="law-title">${law.name}</div>
                </div>
                <div class="law-year">${law.year}</div>
            </div>
            <div class="law-description">${law.description}</div>
            <div class="law-reason">
                <h4>¿Por qué surge esta ley?</h4>
                <p>${law.reason}</p>
                ${law.cases ? `<p><strong>Casos relevantes:</strong> ${law.cases}</p>` : ''}
            </div>
        `;
        
        lawsContainer.appendChild(lawCard);
    });
}

// Inicializar gráficos de datos
function initializeDataCharts() {
    // Gráfico por edades
    const edadesCtx = document.getElementById('edadesChart');
    if (edadesCtx) {
        new Chart(edadesCtx, {
            type: 'bar',
            data: {
                labels: dataByAge.map(d => d.age),
                datasets: [
                    {
                        label: 'Compras Digitales (%)',
                        data: dataByAge.map(d => d.digital),
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Compras Físicas (%)',
                        data: dataByAge.map(d => d.physical),
                        backgroundColor: 'rgba(239, 68, 68, 0.8)',
                        borderColor: 'rgba(239, 68, 68, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Compras Digitales vs Físicas por Edad',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Llenar tabla de edades
    const edadesTableBody = document.getElementById('edadesTableBody');
    dataByAge.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.age}</td>
            <td>${data.digital}%</td>
            <td>${data.physical}%</td>
            <td>100%</td>
        `;
        edadesTableBody.appendChild(row);
    });
    
    // Gráfico por productos
    const productosCtx = document.getElementById('productosChart');
    if (productosCtx) {
        new Chart(productosCtx, {
            type: 'bar',
            data: {
                labels: dataByProduct.map(d => d.product),
                datasets: [
                    {
                        label: 'Compras Digitales (%)',
                        data: dataByProduct.map(d => d.digital),
                        backgroundColor: 'rgba(16, 185, 129, 0.8)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Compras Físicas (%)',
                        data: dataByProduct.map(d => d.physical),
                        backgroundColor: 'rgba(245, 158, 11, 0.8)',
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Compras Digitales vs Físicas por Producto',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Llenar tabla de productos
    const productosTableBody = document.getElementById('productosTableBody');
    dataByProduct.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.product}</td>
            <td>${data.digital}%</td>
            <td>${data.physical}%</td>
            <td>100%</td>
        `;
        productosTableBody.appendChild(row);
    });
}

// Inicializar tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar active al botón y contenido seleccionado
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Función para actualizar datos (se puede llamar cuando se obtengan datos reales)
function updateData(newData) {
    // Esta función se puede usar para actualizar los datos cuando se obtengan de APIs
    console.log('Actualizando datos:', newData);
}
