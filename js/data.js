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
            casosResueltos: "Permitió la comunicación académica internacional, acceso a bases de datos científicas, y el inicio de la educación en línea en Ecuador."
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
            casosResueltos: "Resolvió problemas de monopolio en telecomunicaciones, estableció tarifas reguladas, y creó el marco para la competencia en el sector. También definió los derechos y obligaciones de los operadores."
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
            casosResueltos: "Resolvió el problema de acceso limitado a Internet, permitió que empresas ecuatorianas se conectaran globalmente, y facilitó el nacimiento de empresas tecnológicas locales."
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
            casosResueltos: "Resolvió la incertidumbre legal sobre contratos digitales, permitió que los bancos ofrecieran servicios en línea con validez legal, y estableció las bases para la facturación electrónica."
        }
    },
    {
        year: 2008,
        title: "Constitución del Ecuador - Derechos Digitales",
        description: "La nueva Constitución incluye artículos sobre derechos digitales y acceso a las tecnologías de la información.",
        type: "law",
        law: "Constitución 2008 - Art. 16, 17, 18",
        details: {
            quePaso: "La nueva Constitución de Ecuador reconoce por primera vez los derechos digitales como derechos fundamentales. Los artículos 16, 17 y 18 establecen el derecho al acceso universal a las tecnologías de la información y comunicación.",
            porQue: "Ecuador necesitaba reconocer constitucionalmente el derecho al acceso a la tecnología como parte de los derechos fundamentales. Esto respondía a la necesidad de garantizar la inclusión digital y reducir la brecha tecnológica.",
            contexto: "En 2008, Ecuador estaba en un proceso de refundación del Estado. La nueva Constitución buscaba ser más inclusiva y reconocer derechos emergentes en la era digital. Fue una de las primeras constituciones en América Latina en reconocer derechos digitales.",
            impacto: "Estableció las bases constitucionales para políticas de inclusión digital, acceso universal a internet, y protección de derechos en el entorno digital. Obligó al Estado a garantizar el acceso a tecnologías de información.",
            casosResueltos: "Proporcionó marco legal para políticas de conectividad, programas de inclusión digital, y estableció que el acceso a internet es un derecho fundamental que el Estado debe garantizar."
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
            casosResueltos: "Resolvió problemas de monopolio, precios altos, falta de cobertura en zonas rurales, y estableció un marco claro para la inversión privada en infraestructura de telecomunicaciones."
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
            casosResueltos: "Permitió que periodistas y ciudadanos investigaran casos de corrupción, facilitó el control ciudadano sobre el gasto público, y obligó a las entidades públicas a ser más transparentes en sus procesos."
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
            casosResueltos: "Resolvió problemas de falta de conectividad en zonas urbanas, mejoró la velocidad de internet disponible, y facilitó el acceso a servicios digitales para más ciudadanos y empresas."
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
            casosResueltos: "Resolvió problemas de venta ilegal de bases de datos, uso no autorizado de información personal, y falta de transparencia en el manejo de datos por parte de empresas y entidades públicas."
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
            casosResueltos: "Resolvió problemas de facturas falsas, evasión fiscal mediante facturación fraudulenta, y agilizó los procesos de declaración y pago de impuestos."
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
            casosResueltos: "Resolvió la falta de marco legal para que organizaciones de economía solidaria operaran digitalmente, facilitó su acceso a plataformas de comercio electrónico, y modernizó sus procesos administrativos."
        }
    },
    {
        year: 2018,
        title: "Ley de Ingenios (Reforma)",
        description: "Reforma a la Ley de Ingenios que incluye disposiciones sobre digitalización y tecnología en el sector azucarero.",
        type: "law",
        law: "Ley de Ingenios (Reforma)",
        reason: "Modernización del sector azucarero incluyendo procesos digitales para mejorar la eficiencia y transparencia.",
        details: {
            quePaso: "Se reforma la Ley de Ingenios para incluir disposiciones sobre digitalización de procesos en el sector azucarero. Se establecen obligaciones de uso de tecnología para registro, control y trazabilidad de la producción azucarera.",
            porQue: "El sector azucarero tenía procesos manuales y falta de transparencia. Había problemas de control de producción, evasión, y falta de trazabilidad. La digitalización buscaba modernizar y transparentar el sector.",
            contexto: "El gobierno buscaba modernizar sectores tradicionales de la economía. El sector azucarero era importante pero necesitaba actualización tecnológica para mejorar eficiencia y control.",
            impacto: "Mejoró la trazabilidad de la producción azucarera, facilitó el control fiscal, aumentó la transparencia en el sector, y modernizó procesos administrativos de los ingenios.",
            casosResueltos: "Resolvió problemas de falta de control en la producción azucarera, evasión fiscal en el sector, y falta de transparencia en los procesos de los ingenios."
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
            casosResueltos: "Resolvió problemas de largas filas en oficinas públicas, necesidad de múltiples visitas para trámites, y altos costos de tiempo y transporte para los ciudadanos."
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
            casosResueltos: "Permitió que los servicios públicos continuaran funcionando durante la pandemia, facilitó el acceso a educación remota, y demostró la importancia crítica de la digitalización para la continuidad de servicios esenciales."
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
            casosResueltos: "Resolvió problemas de demoras excesivas en trámites, necesidad de múltiples visitas a oficinas públicas, y falta de transparencia en los procesos administrativos."
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
            casosResueltos: "Resolvió la falta de coordinación en iniciativas digitales, estableció prioridades claras, y creó un marco para medir el avance de la digitalización en Ecuador."
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
            casosResueltos: "Resolvió lagunas en la protección de datos, estableció mejores mecanismos de control, y protegió mejor a los ciudadanos frente a nuevas amenazas digitales como el uso indebido de datos por IA."
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
            casosResueltos: "Resolvió limitaciones de velocidad en redes móviles, permitirá nuevas aplicaciones tecnológicas, y posicionará a Ecuador como un país con infraestructura de telecomunicaciones moderna."
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
            casosResueltos: "Preparará a Ecuador para regular el uso de IA en servicios públicos, protegerá a ciudadanos de discriminación algorítmica, y establecerá transparencia en el uso de algoritmos automatizados."
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
            casosResueltos: "Resolvió problemas de burocracia excesiva, largas filas, múltiples visitas a oficinas, y falta de eficiencia en servicios públicos. Los ciudadanos ahora pueden realizar trámites 24/7 desde cualquier lugar."
        }
    }
];

// Datos de indicadores (valores de ejemplo - se deben reemplazar con datos reales)
const indicatorsData = {
    firmaElectronica: {
        value: "2,500,000",
        unit: "personas",
        description: "Aproximadamente 2.5 millones de ecuatorianos tienen firma electrónica"
    },
    tramitesDigitales: {
        value: "450+",
        unit: "trámites",
        description: "Más de 450 trámites disponibles en línea"
    },
    comprasDigitales: {
        value: "32.5%",
        unit: "",
        description: "35% de las compras se realizan digitalmente"
    },
    facturacionElectronica: {
        value: "85%",
        unit: "",
        description: "85% de las empresas grandes usan facturación electrónica"
    },
    inversionInternet: {
        value: "$500M",
        unit: "USD",
        description: "Inversión estimada en infraestructura de internet"
    },
    gastoTecnologia: {
        value: "12%",
        unit: "",
        description: "12% de los bonos se destinan a tecnología y telecomunicaciones"
    }
};

// Datos de comparación internacional (valores de ejemplo)
const comparisonData = {
    ecuador: {
        digitalizacion: "78%",
        leyes: 8,
        firmas: "2.5M",
        tramites: 450
    },
    china: {
        digitalizacion: "76%",
        leyes: 50,
        firmas: "800M",
        tramites: 5000
    },
    chile: {
        digitalizacion: "88%",
        leyes: 15,
        firmas: "8M",
        tramites: 800
    },
    mexico: {
        digitalizacion: "72%",
        leyes: 12,
        firmas: "45M",
        tramites: 1200
    },
    usa: {
        digitalizacion: "92%",
        leyes: 30,
        firmas: "250M",
        tramites: 10000
    }
};

// Datos de leyes detalladas
const lawsData = [
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
        name: "Ley de Transparencia y Acceso a la Información Pública",
        year: 2011,
        description: "Garantiza el derecho de acceso a la información pública y establece mecanismos de transparencia en la gestión pública.",
        reason: "Surge como respuesta a casos de corrupción y la necesidad de transparencia. Permite acceso digital a información gubernamental.",
        cases: "Casos de corrupción en entidades públicas, necesidad de rendición de cuentas"
    },
    {
        name: "Ley Orgánica de Datos Personales",
        year: 2014,
        description: "Protege los datos personales de los ciudadanos, establece derechos y obligaciones en el tratamiento de información personal.",
        reason: "Responde a la necesidad de proteger la privacidad en un mundo digitalizado, especialmente con el crecimiento del comercio electrónico.",
        cases: "Filtraciones de datos personales, necesidad de proteger información de ciudadanos"
    },
    {
        name: "Ley de Ingenios (Reforma)",
        year: 2018,
        description: "Incluye disposiciones sobre digitalización y tecnología en el sector azucarero para mejorar eficiencia y transparencia.",
        reason: "Modernización del sector azucarero incluyendo procesos digitales para mejorar la eficiencia.",
        cases: "Necesidad de modernizar procesos en el sector azucarero"
    },
    {
        name: "Ley de Simplificación de Trámites",
        year: 2021,
        description: "Promueve la digitalización y simplificación de trámites administrativos para reducir la burocracia.",
        reason: "Surge de la necesidad de reducir la burocracia y mejorar la eficiencia del Estado, especialmente después de la pandemia.",
        cases: "Demoras en trámites públicos, necesidad de servicios más eficientes post-pandemia"
    }
];

// Datos por edades (valores de ejemplo)
const dataByAge = [
    { age: "18-25", digital: 65, physical: 35 },
    { age: "26-35", digital: 55, physical: 45 },
    { age: "36-45", digital: 40, physical: 60 },
    { age: "46-55", digital: 25, physical: 75 },
    { age: "56-65", digital: 15, physical: 85 },
    { age: "65+", digital: 8, physical: 92 }
];

// Datos por productos (valores de ejemplo)
const dataByProduct = [
    { product: "Electrónicos", digital: 75, physical: 25 },
    { product: "Ropa y Moda", digital: 45, physical: 55 },
    { product: "Alimentos", digital: 20, physical: 80 },
    { product: "Libros", digital: 60, physical: 40 },
    { product: "Servicios", digital: 85, physical: 15 },
    { product: "Hogar y Decoración", digital: 35, physical: 65 }
];

// Exportar datos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        timelineData,
        indicatorsData,
        comparisonData,
        lawsData,
        dataByAge,
        dataByProduct
    };
}
