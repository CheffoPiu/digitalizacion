// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeTimelineFilters();
    initializeModal();
    initializeIndicators();
    initializeEgdiVisual();
    initializeComparison();
    initializeLaws();
    initializeDataCharts();
    initializeTabs();
    initializeFuentes();
    initializeRevealOnScroll();
    initializeSabiasQue();
});

// ¿Sabías que? – rotar dato curioso al hacer clic
var sabiasQueIndex = 0;
var sabiasQueFacts = [
    'Ecuador ocupa el <strong>lugar 21</strong> en E-Participation a nivel mundial (ONU 2024).',
    'El <strong>65%</strong> de la población es usuaria de internet (World Bank 2022).',
    'Hay más de <strong>450 trámites</strong> disponibles en línea en el Estado ecuatoriano.',
    'La primera conexión a internet en Ecuador fue en <strong>1992</strong> (USFQ).',
    'El <strong>54%</strong> de los hogares tiene acceso a internet (INEC).',
    'Ecuador está en el grupo de <strong>muy alto desarrollo</strong> de gobierno electrónico (ONU).'
];
function initializeSabiasQue() {
    var btn = document.getElementById('sabiasQueBtn');
    var text = document.getElementById('sabiasQueText');
    if (!btn || !text) return;
    btn.addEventListener('click', function() {
        sabiasQueIndex = (sabiasQueIndex + 1) % sabiasQueFacts.length;
        text.innerHTML = sabiasQueFacts[sabiasQueIndex];
    });
}

// Navegación suave
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    // Asegurar que la sección se muestre al ir con el enlace (evita línea de tiempo en blanco)
                    setTimeout(function() {
                        targetSection.classList.add('revealed');
                    }, 400);
                }
            }
        });
    });
}

// Inicializar línea de tiempo
function initializeTimeline() {
    const timeline = document.getElementById('timeline');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        const typeClass = item.type === 'law' ? 'timeline-item--law' : 'timeline-item--internet';
        timelineItem.className = 'timeline-item ' + typeClass;
        timelineItem.setAttribute('data-type', item.type === 'law' ? 'law' : 'internet');
        timelineItem.setAttribute('data-year', String(item.year));
        timelineItem.setAttribute('data-index', String(index));
        timelineItem.style.cursor = item.details ? 'pointer' : 'default';
        
        const typeIcon = item.type === 'law' ? '📜' : '🌐';
        const typeLabel = item.type === 'law' ? 'Ley' : 'Internet';
        
        const fuente = (item.details && item.details.fuenteVerificacion) ? item.details.fuenteVerificacion : '';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-title">${typeIcon} ${item.title}</div>
            <div class="timeline-description">${item.description}</div>
            ${item.law ? `<span class="timeline-law">${item.law}</span>` : ''}
            ${fuente ? `<div class="timeline-fuente"><i class="fas fa-book-open"></i> Dónde se obtuvo: ${fuente}</div>` : ''}
            ${item.details ? '<div class="timeline-more"><i class="fas fa-info-circle"></i> Haz clic para más detalles</div>' : ''}
        `;
        
        if (item.details) {
            timelineItem.addEventListener('click', () => openTimelineModal(item));
        }
        
        timeline.appendChild(timelineItem);
    });

    initializeTimelineDecades();
    initializeTimelineScrollProgress();
    /* animation-delay escalonado por índice */
    var items = timeline.querySelectorAll('.timeline-item');
    items.forEach(function(el, i) {
        el.style.animationDelay = (i % 16) * 0.04 + 's';
    });
}

// Filtros de línea de tiempo: Todos / Solo leyes / Solo internet
function initializeTimelineFilters() {
    const buttons = document.querySelectorAll('.timeline-filter-btn');
    const items = document.querySelectorAll('.timeline-item');
    if (!buttons.length || !items.length) return;
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            items.forEach(function(el, i) {
                const type = el.getAttribute('data-type');
                const show = filter === 'all' || (filter === 'law' && type === 'law') || (filter === 'internet' && type === 'internet');
                el.style.display = show ? '' : 'none';
                if (show) el.style.animationDelay = (i % 12) * 0.04 + 's';
            });
        });
    });
}

// Navegación por década: scroll al primer evento de esa década
function initializeTimelineDecades() {
    var section = document.getElementById('linea-tiempo');
    var items = document.querySelectorAll('.timeline-item[data-year]');
    var decadeBtns = document.querySelectorAll('.timeline-decade-btn');
    if (!section || !items.length || !decadeBtns.length) return;
    decadeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var decade = parseInt(this.getAttribute('data-decade'), 10);
            for (var i = 0; i < items.length; i++) {
                var y = parseInt(items[i].getAttribute('data-year'), 10);
                if (y >= decade && y < decade + 10) {
                    items[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    items[i].focus({ preventScroll: true });
                    return;
                }
            }
        });
    });
}

// Barra de progreso de la línea según scroll (cuánto de la sección ya pasó)
function initializeTimelineScrollProgress() {
    var progressEl = document.getElementById('timelineLineProgress');
    var section = document.getElementById('linea-tiempo');
    if (!progressEl || !section) return;
    function updateProgress() {
        var rect = section.getBoundingClientRect();
        var h = rect.height;
        if (h <= 0) return;
        var pct = rect.top > 0 ? 0 : Math.min(100, (Math.abs(rect.top) / h) * 100);
        progressEl.style.height = Math.round(pct) + '%';
    }
    window.addEventListener('scroll', function() { requestAnimationFrame(updateProgress); });
    window.addEventListener('resize', updateProgress);
    updateProgress();
}


// Barra EGDI animada y bloque "¿Qué es el EGDI?"
function initializeEgdiVisual() {
    const barFill = document.getElementById('egdiBarFill');
    const barValue = document.getElementById('egdiBarValue');
    const explainBtn = document.getElementById('egdiExplainBtn');
    const explainContent = document.getElementById('egdiExplainContent');
    if (barFill) {
        const pct = parseInt(barFill.getAttribute('data-value') || '78', 10);
        setTimeout(function() {
            barFill.style.width = pct + '%';
            if (barValue) barValue.textContent = '0.' + (pct < 10 ? '0' + pct : String(pct));
        }, 300);
    }
    if (explainBtn && explainContent) {
        explainBtn.addEventListener('click', function() {
            const isOpen = explainContent.hidden;
            explainContent.hidden = !isOpen;
            explainBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            explainBtn.classList.toggle('is-open', isOpen);
        });
    }
}

// Reveal suave al hacer scroll
function initializeRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    function setRevealed(el) {
        if (el && el.classList.contains('reveal')) el.classList.add('revealed');
    }

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Al cargar: revelar todo lo que ya está en viewport
    reveals.forEach(function(el) {
        if (isInViewport(el)) setRevealed(el);
    });

    // Observer: revelar cuando la sección entra en vista
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) setRevealed(entry.target);
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });
    reveals.forEach(function(el) { observer.observe(el); });

    // Fallback: tras 800 ms revelar cualquier .reveal que siga oculto (evita pantalla en blanco)
    setTimeout(function() {
        reveals.forEach(function(el) {
            if (isInViewport(el) && !el.classList.contains('revealed')) setRevealed(el);
        });
    }, 800);

    // Si la URL tiene hash (ej. #linea-tiempo), revelar esa sección de inmediato
    var hash = window.location.hash;
    if (hash) {
        var target = document.getElementById(hash.slice(1));
        if (target) setRevealed(target);
    }
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
        var fuente = item.details.fuenteVerificacion || '';
        var queReviso = item.details.queSeReviso || '';
        var urlFuente = item.details.urlFuente || '';
        var urlFuenteLabel = item.details.urlFuenteLabel || 'Ver texto de la ley';
        var urlFuentePdf = item.details.urlFuentePdf || '';
        var urlFuentePdfLabel = item.details.urlFuentePdfLabel || 'Descargar PDF';
        if (urlFuente || urlFuentePdf) {
            var links = [];
            if (urlFuente) links.push('<a href="' + urlFuente + '" target="_blank" rel="noopener" class="modal-fuente-link">' + urlFuenteLabel + ' →</a>');
            if (urlFuentePdf) links.push('<a href="' + urlFuentePdf + '" target="_blank" rel="noopener" class="modal-fuente-link">' + urlFuentePdfLabel + ' →</a>');
            var linkHtml = (fuente ? fuente + ' ' : '') + links.join(' ');
            document.getElementById('modalFuente').innerHTML = linkHtml;
        } else {
            document.getElementById('modalFuente').textContent = fuente || '—';
        }
        document.getElementById('modalQueReviso').textContent = queReviso || '—';
        var enlaceWrap = document.getElementById('modalEnlaceWrap');
        if (enlaceWrap) enlaceWrap.style.display = urlFuente ? 'none' : 'none';
        document.getElementById('modalSectionFuente').style.display = (fuente || queReviso || urlFuente) ? 'block' : 'none';
        document.getElementById('modalSectionQueReviso').style.display = queReviso ? 'block' : 'none';
    } else {
        // Si no hay detalles, mostrar la descripción básica
        document.getElementById('modalQuePaso').textContent = item.description;
        document.getElementById('modalPorQue').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalContexto').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalImpacto').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalCasos').textContent = 'Información detallada no disponible para este evento.';
        document.getElementById('modalFuente').textContent = '—';
        document.getElementById('modalQueReviso').textContent = '—';
        document.getElementById('modalSectionFuente').style.display = 'none';
        document.getElementById('modalSectionQueReviso').style.display = 'none';
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
    // Hero: EGDI para Ecuador (78%), resto desde comparisonData
    var heroPct = (comparisonData.ecuador.egdiHero != null) ? comparisonData.ecuador.egdiHero : comparisonData.ecuador.digitalizacion;
    document.getElementById('porcentaje-digitalizacion').textContent = heroPct;
    document.getElementById('firmas-electronicas').textContent = comparisonData.ecuador.firmas;
    document.getElementById('tramites-digitales').textContent = comparisonData.ecuador.tramites + '+';
    
    // Actualizar indicadores en la sección
    document.getElementById('ind-firma').textContent = indicatorsData.firmaElectronica.value + ' ' + (indicatorsData.firmaElectronica.unit || '');
    document.getElementById('ind-tramites').textContent = indicatorsData.tramitesDigitales.value + ' ' + (indicatorsData.tramitesDigitales.unit || '');
    var indUsuarios = document.getElementById('ind-usuarios-internet');
    if (indUsuarios) indUsuarios.textContent = indicatorsData.usuariosInternet.value + (indicatorsData.usuariosInternet.unit ? ' ' + indicatorsData.usuariosInternet.unit : '');
    document.getElementById('ind-facturacion').textContent = indicatorsData.facturacionElectronica.value + (indicatorsData.facturacionElectronica.unit ? ' ' + indicatorsData.facturacionElectronica.unit : '');
    var indBanda = document.getElementById('ind-banda-ancha');
    if (indBanda) indBanda.textContent = indicatorsData.bandaAncha.value + (indicatorsData.bandaAncha.unit ? ' ' + indicatorsData.bandaAncha.unit : '');
    var indMovil = document.getElementById('ind-movil');
    if (indMovil) indMovil.textContent = indicatorsData.movil.value + (indicatorsData.movil.unit ? ' ' + indicatorsData.movil.unit : '');
    var indEpart = document.getElementById('ind-eparticipation');
    if (indEpart) indEpart.textContent = (indicatorsData.eParticipation ? 'Rank ' + indicatorsData.eParticipation.value + (indicatorsData.eParticipation.unit ? ' ' + indicatorsData.eParticipation.unit : '') : '—');
    var indLeyesTic = document.getElementById('ind-leyes-tic');
    if (indLeyesTic) indLeyesTic.textContent = indicatorsData.leyesTIC ? indicatorsData.leyesTIC.value + (indicatorsData.leyesTIC.unit ? ' ' + indicatorsData.leyesTIC.unit : '') : '—';
    var indHogares = document.getElementById('ind-hogares-internet');
    if (indHogares) indHogares.textContent = indicatorsData.hogaresInternet ? (indicatorsData.hogaresInternet.value + (indicatorsData.hogaresInternet.unit ? ' ' + indicatorsData.hogaresInternet.unit : '')) : '—';
    var indComercio = document.getElementById('ind-comercio-electronico');
    if (indComercio) indComercio.textContent = indicatorsData.comercioElectronico ? (indicatorsData.comercioElectronico.value + (indicatorsData.comercioElectronico.unit ? ' ' + indicatorsData.comercioElectronico.unit : '')) : '—';
    var indPagos = document.getElementById('ind-pagos-digitales');
    if (indPagos) indPagos.textContent = indicatorsData.pagosDigitales ? (indicatorsData.pagosDigitales.value + (indicatorsData.pagosDigitales.unit ? ' ' + indicatorsData.pagosDigitales.unit : '')) : '—';
    var indDatosAbiertos = document.getElementById('ind-datos-abiertos');
    if (indDatosAbiertos) indDatosAbiertos.textContent = indicatorsData.datosAbiertos ? (indicatorsData.datosAbiertos.value + (indicatorsData.datosAbiertos.unit ? ' ' + indicatorsData.datosAbiertos.unit : '')) : '—';
    
    // Actualizar total de trámites en sección entidades públicas
    const totalTramitesEl = document.getElementById('total-tramites-display');
    if (totalTramitesEl) totalTramitesEl.textContent = comparisonData.ecuador.tramites + '+';
}

// Nombres de países para la comparación
var comparisonCountryNames = {
    ecuador: 'Ecuador',
    china: 'China',
    chile: 'Chile',
    mexico: 'México',
    peru: 'Perú',
    usa: 'USA'
};

// Inicializar comparación
function initializeComparison() {
    // Actualizar tabla de comparación
    const countries = ['ecuador', 'china', 'chile', 'mexico', 'peru', 'usa'];
    const countryCodes = ['ec', 'cn', 'cl', 'mx', 'pe', 'us'];
    
    countryCodes.forEach((code, index) => {
        const country = countries[index];
        const data = comparisonData[country];
        
        document.getElementById(`${code}-digitalizacion`).textContent = data.digitalizacion;
        document.getElementById(`${code}-leyes`).textContent = data.leyes;
        document.getElementById(`${code}-firmas`).textContent = data.firmas;
        document.getElementById(`${code}-tramites`).textContent = data.tramites;
    });

    // Ranking: ¿cuál es el más digitalizado? (por % usuarios internet)
    var ranking = countries.map(function(c) {
        var d = comparisonData[c];
        var pct = d.internetUsers != null ? d.internetUsers : parseFloat(String(d.digitalizacion).replace('%', ''));
        return { key: c, name: comparisonCountryNames[c] || c, pct: pct };
    });
    ranking.sort(function(a, b) { return b.pct - a.pct; });

    var elRank1 = document.getElementById('rank1-country');
    var elRank1Pct = document.getElementById('rank1-pct');
    if (elRank1 && ranking[0]) { elRank1.textContent = ranking[0].name; }
    if (elRank1Pct && ranking[0]) { elRank1Pct.textContent = ranking[0].pct + '%'; }
    var rankRest = document.getElementById('rank-rest');
    if (rankRest && ranking.length > 1) {
        var rest = ranking.slice(1).map(function(r) { return '<strong>' + r.name + '</strong> (' + r.pct + '%)'; });
        rankRest.innerHTML = rest.join(', ');
    }

    var badgesEl = document.getElementById('comparisonRankingBadges');
    if (badgesEl) {
        var labels = ['1°', '2°', '3°', '4°', '5°', '6°'];
        badgesEl.innerHTML = ranking.map(function(r, i) {
            var isEcuador = r.key === 'ecuador';
            return '<span class="comparison-badge' + (isEcuador ? ' comparison-badge-ecuador' : '') + '">' + (labels[i] || (i + 1) + '°') + ' ' + r.name + ' <strong>' + r.pct + '%</strong></span>';
        }).join('');
    }
    
    // Crear gráfico de comparación
    const ctx = document.getElementById('comparisonChart');
    if (ctx) {
        // Usar internetUsers (World Bank) si existe; si no, digitalizacion
        const getChartValue = (country) => {
            const d = comparisonData[country];
            if (d.internetUsers != null) return d.internetUsers;
            const value = d.digitalizacion;
            return parseFloat(String(value).replace('%', ''));
        };
        
        const chartLabels = countries.map(c => comparisonCountryNames[c] || c);
        const chartData = countries.map(c => getChartValue(c));
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: '% Usuarios de internet (WB 2022)',
                    data: chartData,
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(234, 88, 12, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(239, 68, 68, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(234, 88, 12, 1)',
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
                        text: 'Usuarios de internet (% población) · World Bank 2022',
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
                ${law.url || law.urlPdf ? `<p>${law.url ? `<a href="${law.url}" target="_blank" rel="noopener" class="law-link"><i class="fas fa-external-link-alt"></i> Ver texto de la ley</a>` : ''}${law.url && law.urlPdf ? ' · ' : ''}${law.urlPdf ? `<a href="${law.urlPdf}" target="_blank" rel="noopener" class="law-link"><i class="fas fa-file-pdf"></i> Descargar PDF</a>` : ''}</p>` : ''}
            </div>
        `;
        
        lawsContainer.appendChild(lawCard);
    });
}

// Inicializar gráficos de datos
function initializeDataCharts() {
    // Datos reales INEC TIC
    if (typeof inecTicData !== 'undefined') {
        const inecCtx = document.getElementById('inecChart');
        if (inecCtx) {
            new Chart(inecCtx, {
                type: 'line',
                data: {
                    labels: inecTicData.map(d => d.year),
                    datasets: [
                        {
                            label: 'Hogares con internet (%)',
                            data: inecTicData.map(d => d.hogaresInternet),
                            borderColor: 'rgb(59, 130, 246)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Personas que usan internet (%)',
                            data: inecTicData.map(d => d.personasInternet),
                            borderColor: 'rgb(16, 185, 129)',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Teléfono inteligente (%)',
                            data: inecTicData.map(d => d.smartphone),
                            borderColor: 'rgb(245, 158, 11)',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            fill: true,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Indicadores TIC en Ecuador (INEC) · Julio 2022 - Julio 2025',
                            font: { size: 16 }
                        },
                        legend: { display: true, position: 'top' }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { callback: function(v) { return v + '%'; } }
                        }
                    }
                }
            });
        }
        const inecTableBody = document.getElementById('inecTableBody');
        if (inecTableBody) {
            inecTicData.forEach(function(d) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${d.year}</td>
                    <td>${d.hogaresInternet}%</td>
                    <td>${d.personasInternet}%</td>
                    <td>${d.smartphone}%</td>
                    <td>${d.analfabetismoDigital}%</td>
                `;
                inecTableBody.appendChild(row);
            });
        }
    }

    // Gráfico por edades (referencia)
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

// Inicializar sección Fuentes y metodología (Parte 1 + sección global)
function initializeFuentes() {
    if (typeof fuentesYMetodologia === 'undefined') return;

    // Parte 1 solo se llena en index si existe el bloque (ahora el detalle está en fuentes.html)
    const parte1 = fuentesYMetodologia.cuanDigitalesSomos;
    const ulCuan = document.getElementById('fuentes-datos-cuan');
    if (parte1 && ulCuan) {
        if (parte1.datosUtilizados) {
            ulCuan.innerHTML = parte1.datosUtilizados.map(d =>
                `<li><span class="dato-nombre">${d.nombre}</span><span class="dato-valor">${d.valor}</span><span class="dato-origen">${d.origen}</span></li>`
            ).join('');
        }
        const donde = document.getElementById('fuentes-donde-cuan');
        if (donde) donde.textContent = parte1.dondeSeEncontro;
        const urlLink = document.getElementById('fuentes-url-cuan');
        if (urlLink) {
            urlLink.href = parte1.urlFuente;
            urlLink.textContent = 'Ver perfil de Ecuador en UN E-Government Survey →';
        }
        const que = document.getElementById('fuentes-que-se-hizo-cuan');
        if (que) que.textContent = parte1.queSeHizo;
        const indagar = document.getElementById('fuentes-indagar-cuan');
        if (indagar) indagar.textContent = parte1.comoIndagarMas;
    }

    // Sección global en index (contenedor ya no existe; detalle en fuentes.html)
    const contenedor = document.getElementById('fuentes-contenedor');
    if (!contenedor) return;

    const partes = [
        'cuanDigitalesSomos',
        'indicadorEGDI',
        'firmaElectronica',
        'tramitesDigitales',
        'leyes'
    ];

    partes.forEach(key => {
        const f = fuentesYMetodologia[key];
        if (!f) return;

        const card = document.createElement('div');
        card.className = 'fuente-card';

        let datosHtml = '';
        if (f.datosUtilizados && f.datosUtilizados.length) {
            datosHtml = '<ul>' + f.datosUtilizados.map(d =>
                `<li><strong>${d.nombre}:</strong> ${d.valor} <span class="origen">(${d.origen})</span></li>`
            ).join('') + '</ul>';
        }

        card.innerHTML = `
            <h3>${f.titulo}</h3>
            <div class="fuente-card-body">
                <p><strong>Dónde se encontró:</strong> ${f.dondeSeEncontro}</p>
                ${datosHtml ? `<p><strong>Datos utilizados:</strong></p>${datosHtml}` : ''}
                <p><strong>Qué se hizo:</strong> ${f.queSeHizo}</p>
                <p><strong>Cómo indagar más:</strong> ${f.comoIndagarMas}</p>
                <a href="${f.urlFuente}" target="_blank" rel="noopener" class="fuente-link">Ver fuente →</a>
                ${f.fechaConsulta ? `<p class="fuente-fecha">Fecha de consulta: ${f.fechaConsulta}</p>` : ''}
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para actualizar datos (se puede llamar cuando se obtengan datos reales)
function updateData(newData) {
    // Esta función se puede usar para actualizar los datos cuando se obtengan de APIs
    console.log('Actualizando datos:', newData);
}
