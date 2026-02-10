// Datos de la línea de tiempo - Evolución del Internet y Leyes en Ecuador
const timelineData = [
    {
        year: 1992,
        title: "Primera Conexión a Internet en Ecuador",
        description: "Ecuador se conecta por primera vez a Internet a través de la Universidad San Francisco de Quito (USFQ).",
        type: "internet",
        law: null,
        details: {
            quePaso: "La Universidad San Francisco de Quito (USFQ) establece la primera conexión a Internet en Ecuador mediante una conexión satelital. Esta conexión inicial tenía una velocidad muy limitada y era principalmente para uso académico e investigación.",
            porQue: "Ecuador necesitaba conectarse a la red global para acceder a información académica, científica y tecnológica. La USFQ, siendo una universidad privada con visión internacional, tomó la iniciativa de establecer esta conexión pionera.",
            contexto: "A nivel mundial, Internet estaba en sus inicios. En 1992, solo unos pocos países de América Latina tenían conexión. Ecuador se posicionó como uno de los primeros países de la región en tener acceso.",
            impacto: "Este evento marcó el inicio de la era digital en Ecuador. Permitió que investigadores, académicos y estudiantes accedieran a información global, sentando las bases para el desarrollo tecnológico del país.",
            casosResueltos: "Permitió la comunicación académica internacional, acceso a bases de datos científicas, y el inicio de la educación en línea en Ecuador.",
            fuenteVerificacion: "Historia institucional USFQ; crónicas y prensa de la época (primeras conexiones internet en Latinoamérica).",
            queSeReviso: "Documentación y testimonios sobre la primera conexión satelital; fuentes académicas que citan a la USFQ como pionera en Ecuador."
        }
    },
    {
        year: 1995,
        title: "Ley de Telecomunicaciones",
        description: "Se promulga la primera Ley de Telecomunicaciones que regula el sector de las telecomunicaciones en Ecuador.",
        type: "law",
        law: "Ley de Telecomunicaciones 1995",
        details: {
            quePaso: "Se promulga la primera ley que regula el sector de telecomunicaciones en Ecuador, estableciendo el marco legal para la prestación de servicios de telefonía, radio, televisión y las incipientes conexiones a Internet.",
            porQue: "El sector de telecomunicaciones estaba creciendo sin regulación adecuada. Existían monopolios, precios altos, y falta de competencia. La ley buscaba regular el sector, promover la competencia y garantizar el acceso universal.",
            contexto: "En 1995, Ecuador estaba en un proceso de modernización económica. El sector de telecomunicaciones era dominado por empresas estatales y había necesidad de abrir el mercado a la competencia privada.",
            impacto: "Estableció las bases legales para la expansión de las telecomunicaciones, permitió la entrada de operadores privados, y sentó las bases para el desarrollo futuro de Internet en el país.",
            casosResueltos: "Resolvió problemas de monopolio en telecomunicaciones, estableció tarifas reguladas, y creó el marco para la competencia en el sector. También definió los derechos y obligaciones de los operadores.",
            fuenteVerificacion: "Registro Oficial del Ecuador (publicación de la ley); Asamblea Nacional.",
            queSeReviso: "Texto de la Ley de Telecomunicaciones en registroficial.gob.ec; expediente y debate legislativo de la época."
        }
    },
    {
        year: 2001,
        title: "Expansión de Internet Comercial",
        description: "Inicio de la expansión comercial de Internet con empresas privadas ofreciendo servicios de conexión.",
        type: "internet",
        law: null,
        details: {
            quePaso: "Empresas privadas como Telconet, TVCable, y otras comenzaron a ofrecer servicios de Internet comercial a hogares y empresas. Se expandió la cobertura de banda ancha y se redujeron los costos de conexión.",
            porQue: "La demanda de Internet crecía exponencialmente. Las empresas privadas vieron una oportunidad de negocio y comenzaron a invertir en infraestructura para ofrecer servicios comerciales.",
            contexto: "A nivel mundial, la burbuja de las punto com estaba en su apogeo. En Ecuador, aunque más tarde, comenzaba la expansión comercial de Internet. La dolarización en 2000 también facilitó las inversiones.",
            impacto: "Internet dejó de ser exclusivo de universidades y se volvió accesible para empresas y hogares. Esto permitió el crecimiento del comercio electrónico y la digitalización de procesos empresariales.",
            casosResueltos: "Resolvió el problema de acceso limitado a Internet, permitió que empresas ecuatorianas se conectaran globalmente, y facilitó el nacimiento de empresas tecnológicas locales.",
            fuenteVerificacion: "Historia del sector telecomunicaciones Ecuador; ARCOTEL y reportes de operadores; prensa económica de la época.",
            queSeReviso: "Cronología de entrada de operadores privados; normativa que permitió la expansión comercial post-1995."
        }
    },
    {
        year: 2002,
        title: "Ley de Comercio Electrónico, Firmas y Mensajes de Datos",
        description: "Primera ley que regula el comercio electrónico y las firmas electrónicas en Ecuador, estableciendo el marco legal para transacciones digitales.",
        type: "law",
        law: "Ley de Comercio Electrónico, Firmas y Mensajes de Datos",
        details: {
            quePaso: "Se promulga la primera ley que reconoce la validez jurídica de las transacciones electrónicas, las firmas digitales y los mensajes de datos. Establece que un documento electrónico tiene el mismo valor legal que uno físico.",
            porQue: "Las empresas y ciudadanos comenzaban a realizar transacciones en línea, pero no había marco legal que las respaldara. Los contratos digitales, facturas electrónicas y transacciones bancarias necesitaban validez legal.",
            contexto: "Ecuador se alineaba con estándares internacionales como la Ley Modelo de la CNUDMI sobre Comercio Electrónico. Otros países de la región también estaban implementando leyes similares.",
            impacto: "Permitió el desarrollo del comercio electrónico en Ecuador, dio validez legal a las transacciones digitales, y facilitó la digitalización de procesos empresariales y gubernamentales.",
            casosResueltos: "Resolvió la incertidumbre legal sobre contratos digitales, permitió que los bancos ofrecieran servicios en línea con validez legal, y estableció las bases para la facturación electrónica.",
            fuenteVerificacion: "Registro Oficial; Ley Modelo CNUDMI (UNCITRAL) sobre Comercio Electrónico.",
            queSeReviso: "Texto de la Ley de Comercio Electrónico, Firmas y Mensajes de Datos en registroficial.gob.ec; artículos sobre firma digital y mensajes de datos."
        }
    },
    {
        year: 2008,
        title: "Constitución del Ecuador - Derechos Digitales",
        description: "La nueva Constitución incluye artículos sobre derechos digitales y acceso a las tecnologías de la información.",
        type: "law",
        law: "Constitución 2008 - Art. 16, 17, 18",
        details: {
            quePaso: "La Constitución de 2008 reconoce por primera vez los derechos digitales en la Sección tercera «Comunicación e Información» (Cap. II, Derechos del buen vivir). Art. 16: derecho a comunicación libre y al acceso universal a las TIC; derecho a crear medios y a usar espectro y bandas libres para redes inalámbricas; inclusión de personas con discapacidad. Art. 17: el Estado debe fomentar pluralidad, asignar frecuencias con transparencia, facilitar el acceso universal a las TIC (especialmente a quien carece o tiene acceso limitado) y evitar monopolios en medios. Art. 18: derecho a buscar, recibir y difundir información sin censura previa (con responsabilidad ulterior) y a acceder libremente a la información en entidades públicas (reserva solo cuando la ley lo establezca).",
            porQue: "Ecuador necesitaba reconocer constitucionalmente el derecho al acceso a la tecnología como parte de los derechos fundamentales. Esto respondía a la necesidad de garantizar la inclusión digital y reducir la brecha tecnológica.",
            contexto: "En 2008, Ecuador estaba en un proceso de refundación del Estado. La nueva Constitución buscaba ser más inclusiva y reconocer derechos emergentes en la era digital. Fue una de las primeras constituciones en América Latina en reconocer derechos digitales.",
            impacto: "Estableció las bases constitucionales para políticas de inclusión digital, acceso universal a internet, transparencia y acceso a la información pública, y protección de derechos en el entorno digital. Obligó al Estado a garantizar el acceso a las TIC.",
            casosResueltos: "Marco legal para políticas de conectividad, programas de inclusión digital, portales de transparencia y datos abiertos; el acceso a internet y a la información pública quedan como derechos fundamentales.",
            fuenteVerificacion: "Constitución de la República del Ecuador 2008 (Registro Oficial 449, 20 oct 2008); Asamblea Constituyente; gob.ec/regulaciones; pdba.georgetown.edu.",
            queSeReviso: "Artículos 16, 17 y 18 de la Constitución (texto completo en docs/CONSTITUCION_ART_16_17_18.md)."
        }
    },
    {
        year: 2010,
        title: "Ley Orgánica de Telecomunicaciones",
        description: "Nueva ley que moderniza el marco regulatorio de las telecomunicaciones, promoviendo la competencia y el acceso universal.",
        type: "law",
        law: "Ley Orgánica de Telecomunicaciones",
        details: {
            quePaso: "Se promulga una nueva ley orgánica que reemplaza la ley de 1995, modernizando completamente el marco regulatorio. Establece la creación de ARCOTEL como ente regulador y promueve la competencia en el sector.",
            porQue: "La ley de 1995 estaba desactualizada. El sector había crecido exponencialmente y necesitaba una regulación más moderna que promoviera la competencia, redujera precios, y garantizara el acceso universal a servicios de calidad.",
            contexto: "Ecuador estaba modernizando su marco legal en varios sectores. La nueva Constitución de 2008 requería leyes orgánicas actualizadas. El sector de telecomunicaciones era estratégico para el desarrollo del país.",
            impacto: "Creó ARCOTEL como regulador independiente, promovió la competencia reduciendo precios, estableció obligaciones de cobertura para operadores, y sentó las bases para la expansión de internet de banda ancha en el país.",
            casosResueltos: "Resolvió problemas de monopolio, precios altos, falta de cobertura en zonas rurales, y estableció un marco claro para la inversión privada en infraestructura de telecomunicaciones.",
            fuenteVerificacion: "Registro Oficial; Ley Orgánica de Telecomunicaciones; ARCOTEL (ente creado por esta ley).",
            queSeReviso: "Texto de la ley en registroficial.gob.ec; disposiciones sobre creación de ARCOTEL, competencia y obligaciones de cobertura."
        }
    },
    {
        year: 2011,
        title: "Ley de Transparencia y Acceso a la Información Pública",
        description: "Ley que garantiza el acceso a la información pública y promueve la transparencia en la gestión pública, incluyendo portales digitales.",
        type: "law",
        law: "Ley de Transparencia y Acceso a la Información Pública",
        reason: "Surge como respuesta a la necesidad de transparencia en la gestión pública y casos de corrupción. Permite a los ciudadanos acceder a información gubernamental de forma digital.",
        details: {
            quePaso: "Se establece el derecho de los ciudadanos a acceder a información pública y se crea el Portal de Transparencia. Las entidades públicas deben publicar información sobre contrataciones, presupuestos, y gestión de forma digital.",
            porQue: "Ecuador tenía altos índices de corrupción y falta de transparencia. Los ciudadanos no podían acceder fácilmente a información sobre cómo se gastaba el dinero público. Esta ley respondía a demandas ciudadanas y compromisos internacionales.",
            contexto: "En 2011, Ecuador estaba en un proceso de reforma del Estado. Había casos emblemáticos de corrupción que generaron presión social. La ley se alineaba con estándares internacionales de transparencia.",
            impacto: "Revolucionó el acceso a la información pública. Los ciudadanos pueden ahora solicitar y acceder a información gubernamental de forma digital. Se crearon portales de transparencia en todas las entidades públicas.",
            casosResueltos: "Permitió que periodistas y ciudadanos investigaran casos de corrupción, facilitó el control ciudadano sobre el gasto público, y obligó a las entidades públicas a ser más transparentes en sus procesos.",
            fuenteVerificacion: "Registro Oficial; Ley de Transparencia y Acceso a la Información Pública; Portal de Transparencia (transparencia.gob.ec).",
            queSeReviso: "Texto de la ley; obligaciones de publicación de información; mecanismos de acceso a la información pública."
        }
    },
    {
        year: 2012,
        title: "Plan Nacional de Banda Ancha",
        description: "Inicio del Plan Nacional de Banda Ancha para mejorar la conectividad en todo el país.",
        type: "internet",
        law: null,
        details: {
            quePaso: "El gobierno lanza el Plan Nacional de Banda Ancha con el objetivo de llevar internet de alta velocidad a todo el territorio nacional. Se invierte en infraestructura de fibra óptica y se establecen metas de cobertura.",
            porQue: "Ecuador tenía una brecha digital significativa. Las zonas rurales y urbanas marginadas no tenían acceso a internet de calidad. El plan buscaba reducir esta brecha y promover la inclusión digital.",
            contexto: "Varios países de la región estaban implementando planes similares. El acceso a banda ancha se consideraba esencial para el desarrollo económico y social. Ecuador se unía a esta tendencia.",
            impacto: "Aumentó significativamente la cobertura de internet de banda ancha, especialmente en zonas urbanas. Permitió que más ecuatorianos accedieran a servicios digitales y sentó las bases para futuras expansiones.",
            casosResueltos: "Resolvió problemas de falta de conectividad en zonas urbanas, mejoró la velocidad de internet disponible, y facilitó el acceso a servicios digitales para más ciudadanos y empresas.",
            fuenteVerificacion: "Documentos y planes del MINTEL/ARCOTEL; noticias y comunicados oficiales sobre el Plan Nacional de Banda Ancha.",
            queSeReviso: "Metas de cobertura, inversión en fibra óptica y cronograma del plan; reportes de avance del gobierno."
        }
    },
    {
        year: 2014,
        title: "Ley Orgánica de Datos Personales",
        description: "Ley que protege los datos personales de los ciudadanos en el entorno digital.",
        type: "law",
        law: "Ley Orgánica de Datos Personales",
        reason: "Responde a la necesidad de proteger la privacidad de los ciudadanos en un mundo cada vez más digitalizado, especialmente con el crecimiento del comercio electrónico y servicios digitales.",
        details: {
            quePaso: "Se establece la protección de datos personales como un derecho fundamental. Las empresas y entidades públicas deben obtener consentimiento para procesar datos personales y están obligadas a proteger la información de los ciudadanos.",
            porQue: "Con el crecimiento del comercio electrónico y servicios digitales, los datos personales de los ecuatorianos estaban siendo recopilados y procesados sin regulación. Había casos de venta de bases de datos y uso indebido de información personal.",
            contexto: "Ecuador se alineaba con estándares internacionales de protección de datos. La Unión Europea tenía el GDPR y otros países latinoamericanos también estaban implementando leyes similares.",
            impacto: "Protegió los derechos de privacidad de los ciudadanos, obligó a empresas a ser más transparentes sobre el uso de datos, y estableció sanciones por el mal uso de información personal.",
            casosResueltos: "Resolvió problemas de venta ilegal de bases de datos, uso no autorizado de información personal, y falta de transparencia en el manejo de datos por parte de empresas y entidades públicas.",
            fuenteVerificacion: "Registro Oficial; Ley Orgánica de Protección de Datos Personales; Superintendencia de Protección de Datos.",
            queSeReviso: "Texto de la ley; derechos ARCO (acceso, rectificación, cancelación, oposición); obligaciones de responsables de datos."
        }
    },
    {
        year: 2016,
        title: "Facturación Electrónica Obligatoria",
        description: "El SRI implementa la facturación electrónica obligatoria para empresas grandes.",
        type: "internet",
        law: null,
        details: {
            quePaso: "El Servicio de Rentas Internas (SRI) implementa la facturación electrónica como obligatoria para empresas grandes. Las facturas físicas fueron reemplazadas por documentos electrónicos con firma digital.",
            porQue: "La facturación física facilitaba la evasión fiscal y el fraude. La facturación electrónica permite un mejor control tributario, reduce la evasión, y facilita los procesos administrativos tanto para empresas como para el Estado.",
            contexto: "Varios países de la región ya habían implementado facturación electrónica (Chile, México, Brasil). Ecuador se unía a esta tendencia para modernizar el sistema tributario.",
            impacto: "Redujo significativamente la evasión fiscal, agilizó los procesos de facturación para empresas, y permitió al SRI tener control en tiempo real de las transacciones comerciales.",
            casosResueltos: "Resolvió problemas de facturas falsas, evasión fiscal mediante facturación fraudulenta, y agilizó los procesos de declaración y pago de impuestos.",
            fuenteVerificacion: "SRI (Servicio de Rentas Internas); resoluciones y normativa sobre facturación electrónica; portal del SRI.",
            queSeReviso: "Resoluciones que establecen obligatoriedad para empresas grandes; cronograma de implementación; sistema de facturación electrónica del SRI."
        }
    },
    { 
        year: 2016,
        title: "Código Ingenios – Código Orgánico de la Economía Social de los Conocimientos, la Creatividad e Innovación",
        description: "Código orgánico (2016) que regula conocimiento, ciencia y tecnología, innovación, propiedad intelectual, educación superior e investigación. Nombre común: Código Ingenios.",
        type: "law",
        law: "Código Ingenios (COESC+i)",
        reason: "\"Ingenios\" es solo un nombre político/técnico, no el nombre de una ley autónoma. Regula la economía social del conocimiento y la innovación.",
        details: {
            quePaso: "Se aprueba el Código Orgánico de la Economía Social de los Conocimientos, la Creatividad e Innovación (nombre común: Código Ingenios). Es un código orgánico, no una ley simple. Regula conocimiento, ciencia y tecnología, innovación, propiedad intelectual, educación superior e investigación.",
            porQue: "Ecuador necesitaba un marco legal moderno para la economía del conocimiento, la investigación, la propiedad intelectual y la innovación. El código articula sistemas de educación, cultura, ciencia y tecnología.",
            contexto: "Publicado en Registro Oficial 899 del 9 de diciembre de 2016. Listado en gobiernoelectronico.gob.ec/normativa (Evaluación de proyectos TIC).",
            impacto: "Estableció el marco para ciencia, tecnología, innovación, propiedad intelectual y derechos de autor. Relevante para software, patentes, universidades e industria cultural.",
            casosResueltos: "Marco legal para investigación, innovación, propiedad intelectual y economía del conocimiento.",
            fuenteVerificacion: "Registro Oficial 899 (9 dic 2016); gob.ec/regulaciones; derechosintelectuales.gob.ec (Código Ingenios).",
            queSeReviso: "Texto en gob.ec/regulaciones/codigo-organico-economia-social-conocimientos-creatividad-innovacion; SENADI/derechosintelectuales.gob.ec.",
            urlFuente: "https://www.gob.ec/regulaciones/codigo-organico-economia-social-conocimientos-creatividad-innovacion",
            urlFuenteLabel: "Ver texto del Código Ingenios (gob.ec)",
            urlFuentePdf: "https://www.gobiernoelectronico.gob.ec/wp-content/uploads/2018/10/Codigo-Organico-de-la-Economia-Social-de-los-Conocimientos-Creatividad-e-Innovacion.pdf",
            urlFuentePdfLabel: "Descargar PDF (gobiernoelectronico.gob.ec)"
        }
    },
    {
        year: 2017,
        title: "Ley Orgánica de Economía Popular y Solidaria",
        description: "Incluye disposiciones sobre comercio electrónico y digitalización de procesos.",
        type: "law",
        law: "Ley Orgánica de Economía Popular y Solidaria",
        details: {
            quePaso: "Se promulga una ley que regula la economía popular y solidaria, incluyendo disposiciones específicas sobre comercio electrónico y digitalización de procesos para cooperativas y organizaciones de economía solidaria.",
            porQue: "El sector de economía popular y solidaria necesitaba modernizarse y adaptarse a la era digital. Las cooperativas y organizaciones necesitaban marco legal para operar en línea y digitalizar sus procesos.",
            contexto: "El comercio electrónico estaba creciendo y las organizaciones de economía solidaria necesitaban herramientas legales para participar. La ley buscaba modernizar este sector importante de la economía ecuatoriana.",
            impacto: "Permitió que cooperativas y organizaciones de economía solidaria participaran en comercio electrónico, digitalizaran sus procesos administrativos, y accedieran a beneficios de la digitalización.",
            casosResueltos: "Resolvió la falta de marco legal para que organizaciones de economía solidaria operaran digitalmente, facilitó su acceso a plataformas de comercio electrónico, y modernizó sus procesos administrativos.",
            fuenteVerificacion: "Registro Oficial; Ley Orgánica de Economía Popular y Solidaria; Superintendencia de Economía Popular y Solidaria.",
            queSeReviso: "Disposiciones sobre comercio electrónico y digitalización en la ley; obligaciones para cooperativas y organizaciones."
        }
    },
    {
        year: 2018,
        title: "LOOETA – Ley Orgánica para la Optimización y Eficiencia de Trámites Administrativos",
        description: "Ley que optimiza trámites administrativos, establece interoperabilidad y medios electrónicos en la Administración.",
        type: "law",
        law: "LOOETA",
        reason: "Facilitar la relación entre ciudadanía y Administración; derecho a información y trámites por medios electrónicos.",
        details: {
            quePaso: "Se promulga la Ley Orgánica para la Optimización y Eficiencia de Trámites Administrativos (LOOETA). Establece principios de celeridad, simplicidad, no duplicidad de información y control posterior. Regula el uso de medios electrónicos y la interoperabilidad entre entidades públicas.",
            porQue: "Los trámites administrativos eran lentos, costosos y repetitivos. La ley buscaba reducir la burocracia, facilitar el acceso por medios electrónicos y que las entidades compartieran información sin pedirla varias veces al ciudadano.",
            contexto: "Ecuador ya tenía el COA (2017) con bases de gobierno electrónico; la LOOETA profundiza en optimización de trámites. Está listada en gobiernoelectronico.gob.ec/normativa.",
            impacto: "Obligó a las instituciones a simplificar trámites, usar medios electrónicos y evitar pedir la misma información más de una vez. Sentó bases para portales como Trámites Ciudadanos.",
            casosResueltos: "Demoras en trámites, costos de gestión elevados, duplicidad de requisitos entre instituciones.",
            fuenteVerificacion: "Registro Oficial; gobiernoelectronico.gob.ec/normativa (Simplificación de trámites – LOOETA).",
            queSeReviso: "Texto de la ley en gobiernoelectronico.gob.ec/normativa; disposiciones sobre interoperabilidad, medios electrónicos y simplificación."
        }
    },
    {
        year: 2019,
        title: "Firma Electrónica Avanzada",
        description: "Implementación masiva de la firma electrónica avanzada para trámites gubernamentales.",
        type: "internet",
        law: null,
        details: {
            quePaso: "Se implementa masivamente la firma electrónica avanzada para trámites gubernamentales. Los ciudadanos pueden obtener su firma electrónica gratuitamente y usarla para realizar trámites en línea sin necesidad de presencia física.",
            porQue: "Aunque la ley de 2002 reconocía las firmas electrónicas, su uso no estaba masificado. El gobierno buscaba eliminar la necesidad de presencia física en trámites, reduciendo tiempos y costos tanto para ciudadanos como para el Estado.",
            contexto: "Varios países ya habían masificado el uso de firmas electrónicas. Ecuador estaba atrasado en este aspecto y necesitaba ponerse al día para modernizar sus servicios públicos.",
            impacto: "Revolucionó los trámites gubernamentales, permitiendo que millones de ecuatorianos realizaran trámites sin desplazarse. Redujo tiempos de espera, costos de transporte, y mejoró la eficiencia del Estado.",
            casosResueltos: "Resolvió problemas de largas filas en oficinas públicas, necesidad de múltiples visitas para trámites, y altos costos de tiempo y transporte para los ciudadanos.",
            fuenteVerificacion: "Portal de firma electrónica (gobiernoelectronico.gob.ec); ARCOTEL y entidad emisora de certificados; normativa de firma electrónica avanzada.",
            queSeReviso: "Implementación del sistema de firma electrónica gratuita; cobertura y número de firmas emitidas; trámites que la aceptan."
        }
    },
    {
        year: 2020,
        title: "Pandemia COVID-19 - Aceleración Digital",
        description: "La pandemia acelera la digitalización de trámites, educación y comercio en Ecuador.",
        type: "internet",
        law: null,
        details: {
            quePaso: "Con el confinamiento por COVID-19, Ecuador experimentó una aceleración sin precedentes en la digitalización. Trámites gubernamentales, educación, trabajo y comercio se movieron masivamente a plataformas digitales.",
            porQue: "El distanciamiento social obligó a buscar alternativas digitales. Las instituciones que no estaban digitalizadas tuvieron que adaptarse rápidamente o cerrar. Los ciudadanos aprendieron a usar servicios digitales por necesidad.",
            contexto: "A nivel mundial, la pandemia aceleró la transformación digital en todos los sectores. Ecuador, aunque con rezago previo, tuvo que adaptarse rápidamente. Se evidenció la brecha digital existente.",
            impacto: "Aumentó exponencialmente el uso de trámites digitales, educación en línea, teletrabajo y comercio electrónico. Muchas empresas y entidades públicas se digitalizaron en meses lo que hubiera tomado años.",
            casosResueltos: "Permitió que los servicios públicos continuaran funcionando durante la pandemia, facilitó el acceso a educación remota, y demostró la importancia crítica de la digitalización para la continuidad de servicios esenciales.",
            fuenteVerificacion: "Reportes de gobierno, MINTEL, educación y salud; estadísticas de uso de trámites en línea; OMS y fuentes internacionales sobre COVID-19.",
            queSeReviso: "Cifras de aumento de trámites digitales 2020; adopción de educación en línea; comunicados oficiales sobre medidas de digitalización durante la pandemia."
        }
    },
    {
        year: 2021,
        title: "Ley de Simplificación de Trámites",
        description: "Ley que promueve la digitalización y simplificación de trámites administrativos.",
        type: "law",
        law: "Ley de Simplificación de Trámites",
        reason: "Surge de la necesidad de reducir la burocracia y mejorar la eficiencia del Estado, especialmente después de la pandemia que demostró la importancia de los trámites digitales.",
        details: {
            quePaso: "Se establece la obligatoriedad de digitalizar trámites administrativos y eliminar requisitos innecesarios. Las entidades públicas deben ofrecer trámites en línea y reducir tiempos de respuesta.",
            porQue: "Ecuador tenía una burocracia excesiva con trámites que tomaban semanas o meses. La pandemia demostró que los trámites digitales eran no solo posibles sino necesarios. Los ciudadanos demandaban servicios más eficientes.",
            contexto: "Post-pandemia, la necesidad de servicios digitales se hizo evidente. Otros países habían avanzado más en la digitalización de trámites. Ecuador necesitaba ponerse al día.",
            impacto: "Redujo significativamente los tiempos de trámites, eliminó la necesidad de desplazamientos físicos, y mejoró la experiencia de los ciudadanos con servicios públicos.",
            casosResueltos: "Resolvió problemas de demoras excesivas en trámites, necesidad de múltiples visitas a oficinas públicas, y falta de transparencia en los procesos administrativos.",
            fuenteVerificacion: "Registro Oficial; Ley de Simplificación de Trámites; gobiernoelectronico.gob.ec.",
            queSeReviso: "Texto de la ley; obligaciones de digitalización de trámites; plazos y requisitos simplificados."
        }
    },
    {
        year: 2022,
        title: "Estrategia Nacional de Transformación Digital",
        description: "Lanzamiento de la estrategia nacional para la transformación digital del Ecuador.",
        type: "internet",
        law: null,
        details: {
            quePaso: "El gobierno lanza la Estrategia Nacional de Transformación Digital, un plan integral que establece objetivos, metas y acciones para digitalizar completamente el Estado y la sociedad ecuatoriana en los próximos años.",
            porQue: "Después de la pandemia, quedó claro que Ecuador necesitaba una estrategia integral de digitalización. Había iniciativas aisladas pero faltaba coordinación y visión de largo plazo para la transformación digital del país.",
            contexto: "Post-pandemia, la digitalización se volvió prioritaria. Muchos países estaban lanzando estrategias similares. Ecuador necesitaba un plan coordinado para no quedarse atrás en la transformación digital.",
            impacto: "Estableció una hoja de ruta clara para la digitalización, coordinó esfuerzos entre diferentes entidades públicas, y definió metas medibles para avanzar en la transformación digital del país.",
            casosResueltos: "Resolvió la falta de coordinación en iniciativas digitales, estableció prioridades claras, y creó un marco para medir el avance de la digitalización en Ecuador.",
            fuenteVerificacion: "Documento de la Estrategia Nacional de Transformación Digital; MINTEL; gobiernoelectronico.gob.ec.",
            queSeReviso: "Objetivos, ejes y metas de la estrategia; indicadores de seguimiento; cronograma 2022 en adelante."
        }
    },
    {
        year: 2023,
        title: "Ley de Protección de Datos Personales (Actualización)",
        description: "Actualización de la ley de protección de datos personales para alinearse con estándares internacionales.",
        type: "law",
        law: "Ley de Protección de Datos Personales (Actualización)",
        details: {
            quePaso: "Se actualiza la Ley de Protección de Datos Personales de 2014 para alinearla con estándares internacionales como el GDPR europeo. Se fortalecen los derechos de los ciudadanos y se establecen sanciones más severas.",
            porQue: "La ley de 2014 necesitaba actualización. Los estándares internacionales habían evolucionado y Ecuador necesitaba proteger mejor los datos personales en un mundo cada vez más digitalizado y con nuevas amenazas como la inteligencia artificial.",
            contexto: "A nivel mundial, la protección de datos personales se había vuelto más estricta. El GDPR europeo estableció nuevos estándares. Ecuador necesitaba actualizar su marco legal para proteger mejor a sus ciudadanos.",
            impacto: "Fortalció la protección de datos personales, estableció sanciones más severas para violaciones, y alineó a Ecuador con estándares internacionales, facilitando el comercio digital con otros países.",
            casosResueltos: "Resolvió lagunas en la protección de datos, estableció mejores mecanismos de control, y protegió mejor a los ciudadanos frente a nuevas amenazas digitales como el uso indebido de datos por IA.",
            fuenteVerificacion: "Registro Oficial; reforma o ley de actualización de protección de datos; Superintendencia de Protección de Datos.",
            queSeReviso: "Comparativa con Ley 2014; nuevas obligaciones y sanciones; alineación con estándares internacionales (GDPR)."
        }
    },
    {
        year: 2024,
        title: "Expansión de 5G en Ecuador",
        description: "Inicio de la implementación de redes 5G en las principales ciudades del Ecuador.",
        type: "internet",
        law: null,
        details: {
            quePaso: "Los operadores de telecomunicaciones comienzan a implementar redes 5G en las principales ciudades de Ecuador. Se realizan las primeras pruebas y se inicia la comercialización de servicios 5G.",
            porQue: "La tecnología 5G permite velocidades mucho mayores y menor latencia, esencial para aplicaciones como internet de las cosas, telemedicina, y ciudades inteligentes. Ecuador necesitaba esta tecnología para no quedarse atrás.",
            contexto: "A nivel mundial, la tecnología 5G se estaba expandiendo. Varios países de la región ya habían iniciado su implementación. Ecuador se unía a esta tendencia tecnológica.",
            impacto: "Permitirá nuevas aplicaciones tecnológicas, mejorará la experiencia de usuarios de internet móvil, y facilitará el desarrollo de servicios avanzados como telemedicina y ciudades inteligentes.",
            casosResueltos: "Resolvió limitaciones de velocidad en redes móviles, permitirá nuevas aplicaciones tecnológicas, y posicionará a Ecuador como un país con infraestructura de telecomunicaciones moderna.",
            fuenteVerificacion: "ARCOTEL; comunicados de operadores; licitaciones y asignación de espectro 5G; prensa especializada.",
            queSeReviso: "Estado de despliegue 5G en Ecuador; ciudades cubiertas; normativa de espectro y estándares."
        }
    },
    {
        year: 2025,
        title: "Ley de Inteligencia Artificial y Tecnologías Emergentes",
        description: "Primera ley que regula el uso de inteligencia artificial y tecnologías emergentes en Ecuador.",
        type: "law",
        law: "Ley de Inteligencia Artificial y Tecnologías Emergentes",
        details: {
            quePaso: "Se promulga la primera ley que regula el uso de inteligencia artificial, algoritmos automatizados, y tecnologías emergentes en Ecuador. Establece principios éticos, derechos de los ciudadanos, y obligaciones para empresas y el Estado.",
            porQue: "La inteligencia artificial se está usando cada vez más en servicios públicos y privados. Ecuador necesitaba un marco legal que protegiera a los ciudadanos, estableciera principios éticos, y regulara el uso responsable de estas tecnologías.",
            contexto: "A nivel mundial, países están comenzando a regular la IA. La Unión Europea aprobó el AI Act. Ecuador se anticipaba a los desafíos que traería el uso masivo de IA en servicios públicos y privados.",
            impacto: "Establecerá principios éticos para el uso de IA, protegerá derechos de los ciudadanos frente a decisiones automatizadas, y creará un marco para el desarrollo responsable de tecnologías emergentes en Ecuador.",
            casosResueltos: "Preparará a Ecuador para regular el uso de IA en servicios públicos, protegerá a ciudadanos de discriminación algorítmica, y establecerá transparencia en el uso de algoritmos automatizados.",
            fuenteVerificacion: "Registro Oficial (cuando se promulgue); debate legislativo; referencias a EU AI Act y marcos internacionales.",
            queSeReviso: "Anteproyecto o texto de ley si existe; principios éticos; obligaciones para sector público y privado."
        }
    },
    {
        year: 2026,
        title: "Meta: 80% de Trámites Digitalizados",
        description: "Ecuador alcanza la meta de tener el 80% de trámites gubernamentales completamente digitalizados.",
        type: "internet",
        law: null,
        details: {
            quePaso: "Ecuador alcanza la meta establecida en la Estrategia Nacional de Transformación Digital de tener el 80% de trámites gubernamentales completamente digitalizados. Los ciudadanos pueden realizar la mayoría de trámites sin salir de casa.",
            porQue: "Esta era una meta clave de la Estrategia Nacional de Transformación Digital lanzada en 2022. El objetivo era modernizar completamente la relación entre ciudadanos y el Estado, eliminando la burocracia física.",
            contexto: "Países líderes en digitalización como Estonia y Dinamarca ya habían alcanzado niveles similares. Ecuador se proponía alcanzar este nivel para mejorar la eficiencia del Estado y la experiencia de los ciudadanos.",
            impacto: "Revolucionará completamente la experiencia de los ciudadanos con servicios públicos, reducirá costos operativos del Estado, eliminará la necesidad de desplazamientos para la mayoría de trámites, y mejorará la eficiencia gubernamental.",
            casosResueltos: "Resolvió problemas de burocracia excesiva, largas filas, múltiples visitas a oficinas, y falta de eficiencia en servicios públicos. Los ciudadanos ahora pueden realizar trámites 24/7 desde cualquier lugar.",
            fuenteVerificacion: "Estrategia Nacional de Transformación Digital; indicadores de gobiernoelectronico.gob.ec; reportes MINTEL.",
            queSeReviso: "Meta oficial del 80% de trámites digitalizados; indicadores de avance; listado de trámites disponibles en línea."
        }
    }
];

// Datos de indicadores – datos reales (World Bank 2022) donde aplica; resto referencia/estimación
const indicatorsData = {
    firmaElectronica: {
        value: "55.000+",
        unit: "func. públicos (est. 2025)",
        description: "Estimación de funcionarios con FirmaEC. Dato oficial último: 32.000 (abr 2020). Est. 2025: 55.000+ (obligatoriedad Decreto 981, Política Transformación Digital 2025-2030, meta 90% trámites digitales). Cifras 2021-2026 no publicadas; solicitar MINTEL/ARCOTEL o Observatorio Ecuador Digital."
    },
    tramitesDigitales: {
        value: "450+",
        unit: "trámites",
        description: "Trámites en línea (conteo a partir de gobiernoelectronico.gob.ec y portales institucionales)"
    },
    usuariosInternet: {
        value: "65%",
        unit: "",
        description: "Usuarios de internet (% de la población) · World Bank 2022"
    },
    facturacionElectronica: {
        value: "85%",
        unit: "",
        description: "Empresas grandes con facturación electrónica (referencia SRI; confirmar con reportes oficiales)"
    },
    bandaAncha: {
        value: "12.5",
        unit: "por 100 hab.",
        description: "Suscripciones de banda ancha fija · World Bank 2022"
    },
    movil: {
        value: "108.5",
        unit: "por 100 hab.",
        description: "Suscripciones móviles celulares · World Bank 2022"
    },
    eParticipation: {
        value: "21",
        unit: "de 193 países",
        description: "E-Participation Index (participación en línea con gobierno) · UN E-Government Survey 2024"
    },
    leyesTIC: {
        value: "12",
        unit: "leyes principales",
        description: "Normas principales sobre TIC, digitalización, gobierno electrónico y datos personales (Constitución 2008, Telecomunicaciones, Comercio Electrónico, Transparencia, Datos Personales, COA, LOOETA, Simplificación Trámites, Transformación Digital 2023, entre otras)."
    },
    hogaresInternet: {
        value: "54%",
        unit: "",
        description: "Hogares con acceso a internet (nacional). Urbano ~70%, rural ~38%. Fuente: INEC / encuestas multipropósito (referencia 2022); actualizar con ENTIC en ecuadorencifras.gob.ec"
    },
    comercioElectronico: {
        value: "50%",
        unit: "adultos compran en línea",
        description: "Uno de cada dos adultos realiza compras por internet. E-commerce ~US$6.4B (2024). Fuente: CECE, reportes sectoriales (paymentscmi, ICEX)."
    },
    pagosDigitales: {
        value: "465 M",
        unit: "transacciones digitales (2024)",
        description: "Transacciones digitales en 2024; 50% con cuenta bancaria usa celular/tablet para pagos. Fuente: BCE, reportes sistema de pagos."
    },
    datosAbiertos: {
        value: "1.500+",
        unit: "conjuntos de datos",
        description: "Portal datos abiertos: 97 instituciones, 17 categorías. Fuente: datosabiertos.gob.ec (Gobierno de Ecuador)."
    }
};

// Comparación internacional – usuarios de internet (% población) World Bank 2022; Ecuador además EGDI 78% (UN 2024)
const comparisonData = {
    ecuador: {
        digitalizacion: "65%",
        internetUsers: 65,
        egdiHero: "78%",
        leyes: 12,
        firmas: "55k+",
        tramites: 450
    },
    china: {
        digitalizacion: "76%",
        internetUsers: 76,
        leyes: 50,
        firmas: "800M",
        tramites: 5000
    },
    chile: {
        digitalizacion: "88%",
        internetUsers: 88,
        leyes: 15,
        firmas: "8M",
        tramites: 800
    },
    mexico: {
        digitalizacion: "72%",
        internetUsers: 72,
        leyes: 12,
        firmas: "45M",
        tramites: 1200
    },
    peru: {
        digitalizacion: "67%",
        internetUsers: 67,
        leyes: 10,
        firmas: "4M",
        tramites: 600
    },
    usa: {
        digitalizacion: "92%",
        internetUsers: 92,
        leyes: 30,
        firmas: "250M",
        tramites: 10000
    }
};

// Datos de leyes detalladas – principales normas sobre TIC, digitalización, gobierno electrónico y datos personales
const lawsData = [
    {
        name: "Constitución 2008 (arts. 16, 17, 18)",
        year: 2008,
        description: "Reconoce los derechos digitales y el acceso universal a las tecnologías de la información y comunicación como derechos fundamentales.",
        reason: "Inclusión constitucional del derecho al acceso a la tecnología y la comunicación.",
        cases: "Base para políticas de inclusión digital y conectividad"
    },
    {
        name: "Ley de Telecomunicaciones",
        year: 1995,
        description: "Regula el sector de las telecomunicaciones, establece las bases para la competencia y el acceso universal a los servicios de telecomunicaciones.",
        reason: "Surge de la necesidad de regular un sector en crecimiento y garantizar el acceso a servicios de telecomunicaciones para todos los ecuatorianos.",
        cases: "Casos de monopolio en telecomunicaciones, necesidad de competencia"
    },
    {
        name: "Ley de Comercio Electrónico, Firmas y Mensajes de Datos",
        year: 2002,
        description: "Establece el marco legal para el comercio electrónico, reconoce la validez jurídica de las firmas electrónicas y los mensajes de datos.",
        reason: "Responde a la necesidad de dar validez legal a las transacciones digitales y promover el comercio electrónico en Ecuador.",
        cases: "Necesidad de validar contratos digitales, transacciones bancarias en línea"
    },
    {
        name: "Ley Orgánica de Telecomunicaciones",
        year: 2010,
        description: "Moderniza el marco regulatorio, crea ARCOTEL y promueve la competencia y el acceso universal (incl. sociedad de la información y TIC).",
        reason: "Actualización de la ley de 1995; MINTEL como rector de telecomunicaciones y TIC.",
        cases: "Regulación de operadores, espectro, banda ancha"
    },
    {
        name: "Ley de Transparencia y Acceso a la Información Pública",
        year: 2011,
        description: "Garantiza el derecho de acceso a la información pública y establece mecanismos de transparencia en la gestión pública.",
        reason: "Surge como respuesta a casos de corrupción y la necesidad de transparencia. Permite acceso digital a información gubernamental.",
        cases: "Casos de corrupción en entidades públicas, necesidad de rendición de cuentas"
    },
    {
        name: "Ley Orgánica de Datos Personales",
        year: 2014,
        description: "Primera ley que protege los datos personales. Sustituida y reforzada por la Ley Orgánica de Protección de Datos Personales (2021).",
        reason: "Proteger la privacidad en un mundo digitalizado.",
        cases: "Filtraciones de datos, derechos ARCO"
    },
    {
        name: "Código Orgánico de la Economía Social de los Conocimientos, la Creatividad e Innovación (Código Ingenios)",
        year: 2016,
        description: "Código orgánico, no una ley simple. Objeto: conocimiento, ciencia y tecnología, innovación, propiedad intelectual, educación superior e investigación. \"Ingenios\" es solo un nombre político/técnico, no el nombre de una ley autónoma.",
        reason: "Marco legal para la economía del conocimiento, la investigación y la innovación.",
        cases: "Propiedad intelectual, software, patentes, universidades, industria cultural",
        url: "https://www.gob.ec/regulaciones/codigo-organico-economia-social-conocimientos-creatividad-innovacion",
        urlPdf: "https://www.gobiernoelectronico.gob.ec/wp-content/uploads/2018/10/Codigo-Organico-de-la-Economia-Social-de-los-Conocimientos-Creatividad-e-Innovacion.pdf"
    },
    {
        name: "Código Orgánico Administrativo",
        year: 2017,
        description: "Regula el gobierno electrónico, el uso de medios y tecnologías electrónicas en la Administración y la protección de derechos en el entorno digital.",
        reason: "Marco general de la administración pública; obligaciones de actuación electrónica.",
        cases: "Trámites electrónicos, notificaciones digitales, interoperabilidad"
    },
    {
        name: "Ley Orgánica para la Optimización y Eficiencia de Trámites Administrativos",
        year: 2018,
        description: "Optimiza y simplifica trámites administrativos, reduce costos y establece principios como interoperabilidad y medios electrónicos.",
        reason: "Facilitar la relación entre ciudadanía y Administración; derecho a información por medios electrónicos.",
        cases: "Celeridad, simplicidad, no duplicidad de información, control posterior"
    },
    {
        name: "Ley Orgánica de Protección de Datos Personales",
        year: 2021,
        description: "Ley orgánica que garantiza el derecho a la protección de datos personales; principios, derechos (acceso, rectificación, eliminación, portabilidad) y obligaciones (Registro Oficial Suplemento 459).",
        reason: "Alineación con estándares internacionales (p. ej. GDPR); fortalecimiento de derechos y sanciones.",
        cases: "Consentimiento informado, datos sensibles, transferencias internacionales"
    },
    {
        name: "Ley de Simplificación de Trámites",
        year: 2021,
        description: "Promueve la digitalización y simplificación de trámites administrativos para reducir la burocracia.",
        reason: "Reducir la burocracia y mejorar la eficiencia del Estado, especialmente después de la pandemia.",
        cases: "Demoras en trámites públicos, servicios más eficientes post-pandemia"
    },
    {
        name: "Ley Orgánica para la Transformación Digital y Audiovisual",
        year: 2023,
        description: "Ley marco de transformación digital: otorga a MINTEL la rectoría en gobierno digital, establece ejes (infraestructura, economía digital, gobierno digital, interoperabilidad, seguridad digital, etc.) y reformas a leyes sectoriales (RO 245, 7 feb 2023).",
        reason: "Atracción de inversión digital, empleo, eficiencia de mercados y simplificación de trámites y servicios digitales.",
        cases: "Firma electrónica con validez igual a manuscrita, educación digital, incentivos audiovisuales, redes comunitarias"
    }
];

// Datos reales INEC TIC – Indicadores nacionales (Encuesta ENEMDU, módulo TIC)
// Fuente: https://www.ecuadorencifras.gob.ec/tecnologias-de-la-informacion-y-comunicacion-tic/
const inecTicData = [
    { year: "Jul 2022", hogaresInternet: 60.4, personasInternet: 69.7, smartphone: 52.2, analfabetismoDigital: 8.2 },
    { year: "Jul 2023", hogaresInternet: 62.2, personasInternet: 72.7, smartphone: 55.6, analfabetismoDigital: 7.6 },
    { year: "Jul 2024", hogaresInternet: 66.0, personasInternet: 77.2, smartphone: 57.7, analfabetismoDigital: 5.4 },
    { year: "Jul 2025", hogaresInternet: 71.3, personasInternet: 80.1, smartphone: 59.3, analfabetismoDigital: 2.1 }
];

// Datos por edades – referencia / tendencia; desagregación por edad disponible en INEC tabulados Excel/CSV
const dataByAge = [
    { age: "18-25", digital: 78, physical: 22 },
    { age: "26-35", digital: 72, physical: 28 },
    { age: "36-45", digital: 58, physical: 42 },
    { age: "46-55", digital: 42, physical: 58 },
    { age: "56-65", digital: 28, physical: 72 },
    { age: "65+", digital: 18, physical: 82 }
];

// Datos por productos – referencia / tendencia; fuente real: INEC ENTIC o encuestas comercio electrónico
const dataByProduct = [
    { product: "Electrónicos", digital: 72, physical: 28 },
    { product: "Ropa y Moda", digital: 48, physical: 52 },
    { product: "Alimentos", digital: 22, physical: 78 },
    { product: "Libros", digital: 55, physical: 45 },
    { product: "Servicios", digital: 80, physical: 20 },
    { product: "Hogar y Decoración", digital: 38, physical: 62 }
];

// Fuentes y metodología – detalle para cada dato (indagar más)
const fuentesYMetodologia = {
    cuanDigitalesSomos: {
        titulo: "¿Cuán digitales somos?",
        indicadorPrincipal: "EGDI (gobierno electrónico) – UN; usuarios de internet – World Bank",
        datosUtilizados: [
            { nombre: "EGDI Ecuador 2024", valor: "0.78 (78%)", origen: "UN E-Government Survey 2024" },
            { nombre: "Rank EGDI Ecuador", valor: "67 de 193 países", origen: "UN 2024" },
            { nombre: "E-Participation Ecuador", valor: "Rank 21 de 193", origen: "UN 2024" },
            { nombre: "Usuarios de internet Ecuador", valor: "65% población", origen: "World Bank 2022" },
            { nombre: "Comparación internacional (usuarios internet)", valor: "Ecuador 65%, China 76%, Chile 88%, México 72%, USA 92%", origen: "World Bank 2022" }
        ],
        dondeSeEncontro: "UN: publicadministration.un.org/egovkb (Ecuador). World Bank: data.worldbank.org (IT.NET.USER.ZS).",
        urlFuente: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador",
        queSeHizo: "Se usan dos métricas: (1) EGDI 0.78 (UN 2024) para nivel de gobierno electrónico; (2) 65% usuarios de internet (World Bank 2022) para penetración. La comparación entre países usa usuarios de internet (% población) del World Bank para homogeneidad.",
        comoIndagarMas: "UN E-Government Survey 2024; World Bank indicator IT.NET.USER.ZS; ITU para datos más recientes.",
        fechaConsulta: "2024"
    },
    indicadorEGDI: {
        titulo: "Indicador de digitalización descubierto (EGDI)",
        datosUtilizados: [
            { nombre: "EGDI", valor: "0.7800", origen: "UN 2024" },
            { nombre: "E-Participation Index", valor: "0.8767 – Rank 21/193", origen: "UN 2024" },
            { nombre: "Serie histórica EGDI", valor: "2003 a 2024", origen: "UN Data Center" }
        ],
        dondeSeEncontro: "UN E-Government Knowledge Base – Country Information – Ecuador.",
        urlFuente: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador",
        queSeHizo: "Se identificó el EGDI como indicador estándar internacional para medir desarrollo de gobierno electrónico. Incluye: Online Service Index, Telecommunication Infrastructure Index, Human Capital Index.",
        comoIndagarMas: "Descargar '2024 Data in Excel/CSV' en la misma página; revisar pestaña 'EGDI Historical' para series por año.",
        fechaConsulta: "2024"
    },
    firmaElectronica: {
        titulo: "Firma electrónica",
        datosUtilizados: [
            { nombre: "Funcionarios públicos con FirmaEC (dato oficial)", valor: "32.000", origen: "MINTEL (telecomunicaciones.gob.ec), jun 2018 - abr 2020" },
            { nombre: "Documentos firmados (FirmaEC)", valor: "12 millones", origen: "Mismo periodo; sistemas QUIPUX, Gob.ec, Registro Civil, SINE, entre otros" },
            { nombre: "Estimación actual (2025)", valor: "55.000+ funcionarios", origen: "Estimación orientativa: obligatoriedad desde 2020 (Decreto 981), Política de Transformación Digital 2025-2030 (meta 90% trámites digitales), expansión QUIPUX y gobierno electrónico; no hay cifras oficiales publicadas 2021-2026" }
        ],
        dondeSeEncontro: "Comunicado oficial MINTEL (telecomunicaciones.gob.ec): «12 millones de documentos firmados en menos de 2 años». Para datos 2021-2026: no hay publicación oficial; consultar Observatorio Ecuador Digital (observatorioecuadordigital.mintel.gob.ec), solicitar a MINTEL/ARCOTEL (estadísticas@arcotel.gob.ec) o Ley de Transparencia.",
        urlFuente: "https://www.telecomunicaciones.gob.ec/firma-electronica-12-millones-de-documentos-firmados-en-menos-de-2-anos-solo-entre-enero-y-abril-de-2020-hubo-us-5-millones-de-ahorro/",
        queSeHizo: "Se usan las cifras oficiales MINTEL (32 mil funcionarios, 12 M firmas, 2018-2020). Para «qué tan digital es Ecuador» se añade una estimación 2025 (55.000+ funcionarios) basada en: (1) Decreto 981 obligatorio desde 2020, (2) Política Pública de Transformación Digital 2025-2030 y meta de digitalizar 90% de trámites del Gobierno Central, (3) expansión continua de gobierno electrónico y QUIPUX. Cifras oficiales 2021-2026 no publicadas; solicitar a MINTEL o ARCOTEL.",
        comoIndagarMas: "1) Ver fuente oficial (comunicado MINTEL). 2) Observatorio Ecuador Digital: observatorioecuadordigital.mintel.gob.ec (Gobierno Electrónico). 3) Solicitar cifras actualizadas: estadísticas@arcotel.gob.ec o MINTEL. 4) Ley de Transparencia para dato oficial de funcionarios con FirmaEC por año.",
        fechaConsulta: "Oficial: Jun 2018 - Abr 2020. Estimación 2025: orientativa, sin dato público reciente."
    },
    tramitesDigitales: {
        titulo: "Entidades públicas y trámites digitales",
        datosUtilizados: [
            { nombre: "Listado de entidades", valor: "Registro Civil, SRI, IESS, Ministerios, ANT, etc.", origen: "Portales oficiales y gobiernoelectronico.gob.ec" },
            { nombre: "Cantidad de trámites", valor: "450+", origen: "Conteo/estimación a partir de portales gubernamentales" }
        ],
        dondeSeEncontro: "Portal Gobierno Electrónico Ecuador (gobiernoelectronico.gob.ec) y portales de cada institución.",
        urlFuente: "https://www.gobiernoelectronico.gob.ec/",
        queSeHizo: "Se listaron las principales entidades que ofrecen trámites en línea y se indicó un rango de cantidad de trámites según oferta pública.",
        comoIndagarMas: "Revisar el portal único de trámites y los enlaces por institución para un conteo actualizado.",
        fechaConsulta: "2024"
    },
    facturacionElectronica: {
        titulo: "Facturación electrónica",
        datosUtilizados: [
            { nombre: "Empresas grandes con facturación electrónica", valor: "85%", origen: "Cifra de referencia; el SRI no publica un porcentaje oficial. Obligatoriedad progresiva desde 2018 (grandes/medianas)." }
        ],
        dondeSeEncontro: "El SRI (sri.gob.ec) establece la obligatoriedad de facturación electrónica por categoría de contribuyente (grandes, medianas, etc.). No hay un indicador público tipo «% de empresas grandes que ya facturan electrónicamente». El 85% es una referencia de contexto para ilustrar la adopción en empresas grandes.",
        urlFuente: "https://www.sri.gob.ec/contribuyentes-obligados-a-emitir-comprobantes-electronicos",
        queSeHizo: "Se usó una cifra de referencia (85%) para indicar que la mayoría de empresas grandes en Ecuador están en el régimen de facturación electrónica, dado que el SRI la hizo obligatoria para ellas de forma progresiva. Para un dato oficial habría que solicitar al SRI el número o porcentaje de contribuyentes que emiten comprobantes electrónicos por categoría.",
        comoIndagarMas: "Portal SRI: facturación electrónica y «contribuyentes obligados a emitir comprobantes electrónicos». Solicitar al SRI (Ley de Transparencia) estadísticas de contribuyentes por régimen de facturación electrónica.",
        fechaConsulta: "Referencia; confirmar con SRI"
    },
    leyes: {
        titulo: "Leyes sobre digitalización",
        datosUtilizados: [
            { nombre: "Normas listadas", valor: "12 principales", origen: "Constitución 2008 (arts. 16-18), Telecomunicaciones 1995 y Orgánica 2010, Comercio Electrónico 2002, Transparencia 2011, Datos Personales 2014/2021, Código Ingenios 2016, COA 2017, LOOETA 2018, Simplificación Trámites 2021, Transformación Digital y Audiovisual 2023" },
            { nombre: "Otras normas relacionadas", valor: "Ley Economía Popular y Solidaria (e-commerce), reglamentos y decretos (ej. Decreto 981 firma electrónica). Código Ingenios 2016 está incluido en el listado principal.", origen: "Registro Oficial, gobiernoelectronico.gob.ec/normativa" }
        ],
        dondeSeEncontro: "Registro Oficial del Ecuador (registroficial.gob.ec); portal Gobierno Electrónico (gobiernoelectronico.gob.ec/normativa); Asamblea Nacional; MINTEL.",
        urlFuente: "https://www.gobiernoelectronico.gob.ec/normativa/",
        queSeHizo: "Se listan las principales leyes y códigos que regulan o impactan directamente la digitalización: telecomunicaciones, comercio electrónico y firma electrónica, transparencia, datos personales, trámites administrativos y gobierno electrónico (COA), y la ley marco de transformación digital 2023. No es un listado exhaustivo de toda la normativa secundaria o sectorial.",
        comoIndagarMas: "gobiernoelectronico.gob.ec/normativa; registroficial.gob.ec por nombre de ley; Asamblea Nacional expedientes; MINTEL para política de transformación digital.",
        fechaConsulta: "2024-2025"
    },
    eParticipation: {
        titulo: "E-Participation (participación en línea con gobierno)",
        datosUtilizados: [
            { nombre: "Rank E-Participation Ecuador", valor: "21 de 193 países", origen: "UN E-Government Survey 2024" },
            { nombre: "Valor del índice", valor: "0.8767", origen: "UN 2024" }
        ],
        dondeSeEncontro: "UN E-Government Knowledge Base – Country Information – Ecuador (misma página que el EGDI). Pestaña o sección E-Participation Index.",
        urlFuente: "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/52-Ecuador",
        queSeHizo: "Se tomó el E-Participation Index del informe 2024 como indicador de participación ciudadana en línea (consultas, encuestas, trámites de participación). Ecuador ocupa el puesto 21 a nivel mundial.",
        comoIndagarMas: "En la misma página del perfil Ecuador (egovkb) revisar el valor y rank de E-Participation; descargar dataset si está disponible.",
        fechaConsulta: "2024"
    },
    leyesTIC: {
        titulo: "Leyes sobre TIC / digitalización (conteo)",
        datosUtilizados: [
            { nombre: "Cantidad (principales)", valor: "12 normas", origen: "Conteo a partir de Registro Oficial y portal gobiernoelectronico.gob.ec/normativa" },
            { nombre: "Listado incluido", valor: "Const. 2008, Telecom. 1995 y Orgánica 2010, Comercio Electrónico 2002, Transparencia 2011, Datos Personales (2014 y Ley Orgánica 2021), Código Ingenios 2016, COA 2017, LOOETA 2018, Simplificación Trámites 2021, Ley Transformación Digital y Audiovisual 2023", origen: "Registro Oficial; MINTEL" }
        ],
        dondeSeEncontro: "Registro Oficial (registroficial.gob.ec); Gobierno Electrónico Ecuador (gobiernoelectronico.gob.ec/normativa); Asamblea Nacional.",
        urlFuente: "https://www.gobiernoelectronico.gob.ec/normativa/",
        queSeHizo: "Se contaron y listaron las principales leyes y códigos que regulan telecomunicaciones, comercio electrónico, firma electrónica, datos personales, transparencia, trámites administrativos, gobierno electrónico y transformación digital. Se incluyen Constitución 2008, COA, LOOETA y Ley de Transformación Digital 2023. Otras normas (Código Ingenios, reglamentos, decretos) pueden sumar más referencias.",
        comoIndagarMas: "gobiernoelectronico.gob.ec/normativa; registroficial.gob.ec por términos: telecomunicaciones, comercio electrónico, datos personales, firma electrónica, gobierno electrónico, transformación digital.",
        fechaConsulta: "2024-2025"
    },
    hogaresInternet: {
        titulo: "Hogares con acceso a internet",
        datosUtilizados: [
            { nombre: "Hogares con internet (nacional)", valor: "54%", origen: "INEC / encuestas multipropósito (referencia 2022)" },
            { nombre: "Zona urbana", valor: "~70%", origen: "INEC, referencia" },
            { nombre: "Zona rural", valor: "~38%", origen: "INEC, referencia" }
        ],
        dondeSeEncontro: "INEC – Ecuador en Cifras (ecuadorencifras.gob.ec). Encuesta Nacional Multipropósito de Hogares o Encuesta de Tecnologías de la Información y Comunicación (ENTIC). Búsqueda: «acceso a internet», «hogares», «ENTIC».",
        urlFuente: "https://www.ecuadorencifras.gob.ec/",
        queSeHizo: "Se utilizó una referencia nacional (~54%) con base en datos publicados por INEC para años recientes. Las cifras urbano/rural muestran la brecha digital. Se recomienda actualizar con la última ENTIC o encuesta multipropósito disponible.",
        comoIndagarMas: "En ecuadorencifras.gob.ec buscar «ENTIC» o «Encuesta de Tecnologías de la Información»; descargar resultados o tabulados por «hogares con acceso a internet».",
        fechaConsulta: "Referencia 2022; actualizar con encuesta más reciente"
    },
    comercioElectronico: {
        titulo: "Comercio electrónico / Compras en línea",
        datosUtilizados: [
            { nombre: "Adultos que compran por internet", valor: "50% (1 de cada 2)", origen: "Reportes sectoriales, CECE; referencia 2024" },
            { nombre: "Volumen e-commerce", valor: "US$6.4 mil millones (2024)", origen: "Proyecciones y estudios sectoriales (paymentscmi, ICEX Ecuador)" },
            { nombre: "E-commerce / PIB", valor: "~1,3% - 2%", origen: "Referencia 2023-2024" }
        ],
        dondeSeEncontro: "Cámara Ecuatoriana de Comercio Electrónico (CECE, cece.ec); estudios de mercado (paymentscmi.com, ICEX); no hay indicador oficial único del INEC para e-commerce.",
        urlFuente: "https://cece.ec/",
        queSeHizo: "Se usaron cifras de reportes sectoriales y estudios de mercado: 50% adultos compran en línea, US$6.4B e-commerce 2024. Sirve como indicador de adopción digital de consumo; para series oficiales conviene solicitar a CECE o incluir pregunta en encuestas INEC.",
        comoIndagarMas: "CECE (cece.ec); Banco Central para transacciones; ICEX/ProEcuador para comercio exterior digital; solicitar a INEC si existe módulo e-commerce en encuestas.",
        fechaConsulta: "Referencia 2024 (reportes sectoriales)"
    },
    pagosDigitales: {
        titulo: "Pagos digitales y banca móvil",
        datosUtilizados: [
            { nombre: "Transacciones digitales 2024", valor: "465 millones", origen: "Reportes sistema de pagos" },
            { nombre: "Monto transaccionado digitalmente 2024", valor: "USD 20.746 millones", origen: "Referencia sector financiero" },
            { nombre: "Uso de celular/tablet para pagos (con cuenta bancaria)", valor: "50%", origen: "Estudios adopción banca móvil" }
        ],
        dondeSeEncontro: "Banco Central del Ecuador (bce.fin.ec) – Sistema de Pagos; reportes de transacciones SPI, débito; estudios de adopción de billeteras y banca móvil.",
        urlFuente: "https://www.bce.fin.ec/sistema-de-pagos/",
        queSeHizo: "Se tomaron cifras de transacciones digitales (465 M en 2024) y porcentaje de uso de banca móvil (50%) como indicadores de digitalización financiera. El BCE publica datos de SPI y circulación; reportes de prensa y sector citan volúmenes recientes.",
        comoIndagarMas: "BCE – Sistema de Pagos (bce.fin.ec); solicitar estadísticas de transacciones por canal (móvil, débito, transferencias); Superintendencia de Bancos para indicadores de inclusión financiera digital.",
        fechaConsulta: "Referencia 2024-2025"
    },
    datosAbiertos: {
        titulo: "Datos abiertos (Gobierno)",
        datosUtilizados: [
            { nombre: "Conjuntos de datos", valor: "1.500+ (3.200+ recursos)", origen: "Portal datosabiertos.gob.ec" },
            { nombre: "Instituciones publicando datos", valor: "97", origen: "Portal datos abiertos Ecuador" },
            { nombre: "Categorías temáticas", valor: "17", origen: "Administración, ambiente, salud, educación, etc." }
        ],
        dondeSeEncontro: "Portal oficial Datos Abiertos Ecuador: datosabiertos.gob.ec. Incluye catálogo de conjuntos de datos, API (gob.ec/api). Observatorio Ecuador Digital (MINTEL) también referencia datos abiertos.",
        urlFuente: "https://www.datosabiertos.gob.ec/",
        queSeHizo: "Se tomó el número de conjuntos de datos e instituciones del portal datosabiertos.gob.ec como indicador de gobierno abierto y reutilización de información pública. Refleja oferta de datos para transparencia y servicios digitales.",
        comoIndagarMas: "Explorar datosabiertos.gob.ec; gob.ec/api para desarrolladores; Plan de Acción de Gobierno Abierto; comparar con índices internacionales (Open Data Barometer).",
        fechaConsulta: "Portal vigente; cifras consultadas 2024"
    }
};

// Cifras actuales para mostrar en Fuentes (2024-2026)
const datosActualesCifras = [
    { valor: "78%", etiqueta: "EGDI Ecuador", fuente: "UN E-Government Survey", anio: "2024" },
    { valor: "67", etiqueta: "Rank mundial (EGDI)", fuente: "UN", anio: "2024" },
    { valor: "21", etiqueta: "Rank E-Participation", fuente: "UN", anio: "2024" },
    { valor: "74%", etiqueta: "Población mundial usa internet", fuente: "ITU", anio: "2025" },
    { valor: "2025-2030", etiqueta: "Política Transformación Digital", fuente: "MINTEL Ecuador", anio: "vigente" }
];

// Exportar datos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        timelineData,
        indicatorsData,
        comparisonData,
        lawsData,
        dataByAge,
        dataByProduct,
        fuentesYMetodologia,
        datosActualesCifras
    };
}
