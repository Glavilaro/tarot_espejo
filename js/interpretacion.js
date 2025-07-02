export function mostrarDescripcion(tipo) {
    const descripciones = {
        amor: "Esta tirada refleja los sentimientos y vínculos afectivos.",
        salud: "Indica el bienestar físico, mental y espiritual.",
        dinero: "Habla sobre economía, trabajo y oportunidades.",
        general: "Visión general de tu presente y futuro."
    };

    const parrafo = document.querySelector("#descripcion-tirada p");
    if (parrafo) {
        parrafo.innerText = descripciones[tipo];
    }
}

export const significados = {
    "La Luna": {
        amor: "Confusión emocional, intuición agitada. Posibles ilusiones o verdades ocultas en la relación.",
        salud: "Aspectos psíquicos o hormonales. Escuchá tu cuerpo con sensibilidad.",
        dinero: "Cautela ante lo incierto. No todo es lo que parece en lo financiero.",
        general: "Periodo de introspección, intuición y revelaciones a través de los sueños o el inconsciente."
    },
    "La Fuerza": {
        amor: "Dominio emocional, relaciones con paciencia y madurez. Fortaleza interior para sanar vínculos.",
        salud: "Buena recuperación. Salud estable mediante actitud positiva y autocontrol.",
        dinero: "Capacidad para superar obstáculos económicos con coraje y estrategia.",
        general: "Confianza, control de los instintos, poder interno para afrontar desafíos sin agresividad."
    },
    "La Estrella": {
        amor: "Esperanza renovada, conexión espiritual en la pareja o ideal romántico por alcanzar.",
        salud: "Curación en proceso. Buen momento para cuidar cuerpo y alma con fe.",
        dinero: "Inspiración financiera. Posibilidad de encontrar soluciones creativas a tus problemas.",
        general: "Guía interior y alineación con tus deseos más puros. Fe en el futuro y renovación emocional."
    },


    "El Diablo": {
        amor: "Relación pasional, posiblemente tóxica o basada en la dependencia. Tentaciones y ataduras.",
        salud: "Malos hábitos, adicciones o bloqueos emocionales que impactan el bienestar.",
        dinero: "Apego excesivo a lo material. Riesgo de caer en trampas por ambición.",
        general: "Situaciones que atan o nublan el juicio. Se requiere voluntad para liberarse."
    },

    "El Colgado": {
        amor: "Estancamiento emocional o necesidad de ver la relación desde otra perspectiva. Tiempo de pausa.",
        salud: "Requiere introspección, posible necesidad de descanso o tratamiento alternativo.",
        dinero: "Suspensión de avances. Momento para reevaluar decisiones antes de actuar.",
        general: "Tiempo de reflexión profunda. Lo externo se detiene para que lo interno se transforme."
    },

    "El Carro": {
        amor: "Impulso y avance en la relación, aunque puede haber lucha de voluntades. Requiere dirección clara.",
        salud: "Energía elevada, recuperación con disciplina. Cuidado con el exceso de actividad.",
        dinero: "Determinación y progreso financiero. Buena racha si mantenés el control.",
        general: "Movimiento decidido hacia tus metas. Triunfo si sabés guiar tu impulso."
    },

    "El Loco": {
        amor: "Nuevos comienzos, emociones intensas y relaciones impredecibles.",
        salud: "Energía renovada pero cuidado con la imprudencia.",
        dinero: "Oportunidades espontáneas, pero riesgos si no hay planificación.",
        general: "Etapa de exploración personal, libertad y decisiones audaces."
    },
    "El Mago": {
        amor: "Conexión magnética, habilidad para comunicar sentimientos.",
        salud: "Vitalidad, buena salud si se enfoca la energía.",
        dinero: "Capacidad para materializar objetivos, buen momento para actuar.",
        general: "Dominio de tus herramientas, momento de manifestación consciente."
    },
    "La Torre": {
        amor: "Una ruptura inesperada, revelación que transforma la relación. Puede traer una liberación necesaria.",
        salud: "Crisis o cambios abruptos que requieren atención inmediata. Puede ser un llamado a reconstruirte.",
        dinero: "Pérdida o shock financiero. Un colapso que puede ser la base para un nuevo comienzo.",
        general: "Transformación forzada, caída de estructuras obsoletas. Aunque dolorosa, trae claridad y renovación."
    },
    "El Juicio": {
        amor: "Reencuentros, decisiones que afectan el vínculo emocional. Evaluación de lo vivido para avanzar.",
        salud: "Recuperación espiritual o física. Renacimiento o reconciliación con uno mismo.",
        dinero: "Oportunidades para corregir errores financieros. Evaluación de tus decisiones y sus consecuencias.",
        general: "Llamado a despertar. Cierre de etapas y apertura hacia algo más auténtico y consciente."
    },
    "El Emperador": {
        amor: "Relación basada en estructura, autoridad o necesidad de control. Puede faltar espontaneidad si no se equilibra.",
        salud: "Estabilidad física. Requiere disciplina y constancia en los cuidados.",
        dinero: "Logros financieros a través de estrategia y liderazgo. Buen momento para tomar decisiones prácticas.",
        general: "Energía de orden y dominio. Llamado a asumir responsabilidad y estructurar tus metas."
    },
    "El Sumosacerdote": {
        amor: "Relación tradicional o búsqueda de guía espiritual en el amor. Puede estar influenciada por normas sociales o familiares.",
        salud: "Bienestar vinculado al equilibrio espiritual. Sanación mediante prácticas tradicionales o fe.",
        dinero: "Estabilidad económica mediante instituciones o consejos sabios. Evitá decisiones impulsivas.",
        general: "Conexión con lo sagrado, sabiduría ancestral y aprendizaje profundo. Escuchar la voz interior o de un mentor."
    },
    "La Muerte": {
        amor: "Fin de una etapa emocional, posible cierre de ciclo. Transformación que puede dar lugar a un nuevo comienzo.",
        salud: "Cambio radical en hábitos. Posible recuperación profunda o necesidad de soltar lo viejo.",
        dinero: "Fin de una situación financiera o forma de trabajo. Renacimiento económico si sabés adaptarte.",
        general: "Renovación. Algo llega a su fin para que puedas avanzar con más conciencia y autenticidad."
    },
    "La Templanza": {
        amor: "Relación equilibrada y madura. Buen momento para armonizar diferencias y sanar emociones.",
        salud: "Estado de bienestar sostenido. La clave está en la moderación y los cuidados constantes.",
        dinero: "Gestión financiera prudente. Avances lentos pero seguros gracias a la paciencia.",
        general: "Proceso de integración. Fusión de opuestos, paz interior y evolución consciente."
    },
    "La Sacerdotisa": {
        amor: "Relación espiritual o intuitiva. Puede haber emociones no expresadas o misterios por descubrir.",
        salud: "Bienestar emocional profundo. Escuchá tu cuerpo y prestá atención a lo que no se dice.",
        dinero: "Finanzas silenciosas o bajo control intuitivo. Valor en la discreción.",
        general: "Sabiduría interna, conexión con lo invisible. Momento para contemplar y no apresurar decisiones."
    },
    "La Rueda": {
        amor: "Cambios súbitos en la relación. El destino interviene con giros inesperados.",
        salud: "Fluctuaciones de energía. Prestá atención a los ciclos físicos y emocionales.",
        dinero: "Suerte cambiante. Puede traer oportunidades o desafíos económicos inesperados.",
        general: "Cierre y apertura de ciclos. Aprender a fluir con el ritmo de la vida y confiar en el movimiento."
    },
    "El Mundo": {
        amor: "Relación plena, sensación de realización afectiva. Puede marcar el inicio de una etapa estable.",
        salud: "Equilibrio corporal y mental. Buen cierre de tratamientos o logros en salud personal.",
        dinero: "Cumplimiento de metas financieras. Recompensa por esfuerzo sostenido.",
        general: "Fin de un ciclo con éxito. Momento de expansión, celebración y alineación con el propósito vital."
    },
    "La Emperatriz": {
        amor: "Conexión profunda, fertilidad emocional. Presencia de amor nutritivo y creativo.",
        salud: "Vitalidad, bienestar físico, posible gestación o renovación interna.",
        dinero: "Abundancia material y creatividad en lo laboral. Buen momento para proyectos artísticos o personales.",
        general: "Fertilidad en todos los planos. Energía maternal que impulsa crecimiento y belleza."
    },
    "La Justicia": {
        amor: "Relación basada en equilibrio y honestidad. Decisiones éticas en lo afectivo.",
        salud: "Estabilidad física, aunque puede señalar necesidad de ajustes o tratamientos justos.",
        dinero: "Evaluación financiera objetiva. Buen momento para contratos, acuerdos o trámites.",
        general: "Claridad mental y rendición de cuentas. Lo que se siembra se cosecha en justa medida."
    },
    "El Sol": {
        amor: "Relación feliz y luminosa. Claridad, conexión genuina y expresión plena de afecto.",
        salud: "Vitalidad, recuperación y bienestar. Momento de plenitud física y emocional.",
        dinero: "Éxito financiero. Buena racha y reconocimiento por tu esfuerzo.",
        general: "Alegría, triunfo y expansión. El camino está despejado, y brilla tu autenticidad."
    },
    "Los Amantes": {
        amor: "Decisiones importantes en el vínculo afectivo. Conexión profunda, pero también dualidad.",
        salud: "Equilibrio emocional que influye en el cuerpo. Armonía entre mente, alma y corazón.",
        dinero: "Oportunidades que exigen elegir con el corazón y la razón. Puede implicar asociaciones laborales.",
        general: "Elección consciente entre caminos. Unión de opuestos y armonía si actuás con verdad."
    },
    "El Ermitaño": {
        amor: "Búsqueda interior. Puede indicar una etapa de soledad elegida o necesidad de introspección en la relación.",
        salud: "Tiempo de reflexión sobre tu bienestar. Escuchá tu cuerpo sin apuros.",
        dinero: "Gestión reservada y analítica. Buen momento para revisar finanzas con criterio.",
        general: "Sabiduría interna. Retiro necesario para encontrar respuestas y recuperar claridad."
    }


};

export function obtenerInterpretacion(carta, tipo) {
    return significados[carta]?.[tipo] || "Interpretación no disponible.";
}
