export const clinic = {
  name: "Osteopathic Massage Therapist",
  logo: "/images/logo.png",
  tagline: "Osteopatía y masaje terapéutico en Alcázar de San Juan",
  description: "Osteopathic Massage Therapist es tu centro de osteopatía y masaje terapéutico en Alcázar de San Juan, Ciudad Real. Cande, osteópata especializada con 4.9 estrellas en Google, ofrece tratamientos personalizados para artritis, epicondilitis, contracturas y dolencias musculares. Masajes adaptados a tu intensidad preferida y atención de urgencias cuando lo necesitas.",
  colors: {
    primary: "#b6d780",
    secondary: "#374126",
    accent: "#ebf3e5",
    neutral: "#f9fcf5"
  },
  phone: "652 90 67 12",
  whatsapp: "+34652906712",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Francisco Quiralte Romero, 3, 13600 Alcázar de San Juan, Ciudad Real, Spain",
    city: "Alcázar de San Juan",
    province: "Ciudad Real",
    postalCode: "13600",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=183495137265596215&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Osteopathic%20Massage%20Therapist%20%4039.3847%2C-3.19733&z=16&output=embed",
  coordinates: {
    lat: 39.3847,
    lng: -3.19733
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–21:00"
    },
    {
      days: "sábado",
      hours: "9:00–13:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 34,
    url: "https://maps.google.com/?cid=183495137265596215&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Alii",
        rating: 5,
        text: "Una profesional excelente! Llevo siendo su paciente varios años y tras cada sesión salgo como nueva. Siempre recomiendo a Cande, porque aparte de ser una osteópata buenísima, es una persona increíble! Es un gusto poder acudir siempre a ella para tratarme☺️❤️",
        date: "Hace 3 semanas"
      },
      {
        author: "Sonia García-Quintero",
        rating: 5,
        text: "Una chica muy profesional. La recomiendo 100%. Alivió mi dolencias con mucha efectividad y se adaptó muy bien a mis necesidades. A mí me gustan los masajes cañeros, fue decírselo y encontró el punto justo, ni demasiado fuerte ni demasiado flojo.",
        date: "Hace 2 semanas"
      },
      {
        author: "Myriam B.A.",
        rating: 5,
        text: "Ponerte en sus manos es sentirte cuidada de verdad. Es una gran profesional y una persona maravillosa. Su trato cercano y su forma de trabajar hacen que cada sesión sea un alivio físico y mental. Gracias por cuidarnos tan bien.",
        date: "Hace una semana"
      },
      {
        author: "Sonia",
        rating: 5,
        text: "Una profesional muy simpática y sobre todo muy buena en su trabajo… con los problemas de mi artritis y epicondilitis para mí es mi salvación….la recomiendo 100x100",
        date: "Hace 2 semanas"
      },
      {
        author: "Luis Miguel Logroño Alcañiz",
        rating: 5,
        text: "Una gran profesional y de confianza. Y también te atiende, si lo necesitas, de urgencias. A mi me ha solucionado todos mis problemas musculares. Recomendable al 💯",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "osteopatia",
      name: "Osteopatía",
      description: "Tratamiento osteopático integral que aborda las causas profundas de tus dolencias. Técnicas manuales especializadas para restaurar el equilibrio del cuerpo y mejorar tu movilidad. Cada sesión está diseñada para que salgas renovado física y mentalmente.",
      benefits: [
        "Alivio efectivo del dolor crónico",
        "Mejora de la movilidad articular",
        "Tratamiento personalizado según tus necesidades"
      ],
      icon: "Hand"
    },
    {
      id: "masaje-terapeutico",
      name: "Masaje Terapéutico",
      description: "Masajes terapéuticos adaptados a tu preferencia de intensidad, desde suaves hasta cañeros. Nos adaptamos completamente a lo que tu cuerpo necesita, encontrando el punto justo de presión. Ideales para liberar tensiones musculares y contracturas.",
      benefits: [
        "Intensidad personalizada según tus preferencias",
        "Eliminación de contracturas y tensiones",
        "Alivio inmediato tras cada sesión"
      ],
      icon: "Activity"
    },
    {
      id: "artritis",
      name: "Tratamiento de Artritis",
      description: "Especialización en el tratamiento del dolor y limitaciones causadas por la artritis. Técnicas específicas para reducir la inflamación y mejorar la funcionalidad de las articulaciones afectadas. Seguimiento continuo para mantener tu calidad de vida.",
      benefits: [
        "Reducción del dolor articular",
        "Mejora de la movilidad diaria",
        "Tratamiento continuo y efectivo"
      ],
      icon: "Heart"
    },
    {
      id: "epicondilitis",
      name: "Tratamiento de Epicondilitis",
      description: "Tratamiento especializado para el codo de tenista y otras tendinitis. Combinamos técnicas manuales con terapias específicas para eliminar el dolor y restaurar la función completa del brazo. Resultados efectivos y duraderos.",
      benefits: [
        "Eliminación del dolor en el codo",
        "Recuperación de la fuerza y movilidad",
        "Prevención de recaídas"
      ],
      icon: "Target"
    },
    {
      id: "problemas-musculares",
      name: "Problemas Musculares",
      description: "Solución integral para todo tipo de problemas musculares: contracturas, sobrecargas, lesiones deportivas y tensiones crónicas. Valoración detallada y tratamiento específico para cada caso. Atención de urgencias disponible cuando lo necesitas.",
      benefits: [
        "Diagnóstico preciso de la lesión",
        "Tratamiento efectivo y rápido",
        "Atención de urgencias disponible"
      ],
      icon: "Zap"
    },
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas de fisioterapia manual avanzadas para tratar disfunciones del sistema musculoesquelético. Abordaje integral que combina diferentes métodos según tu patología específica. Tratamiento manos a manos para resultados óptimos.",
      benefits: [
        "Técnicas manuales especializadas",
        "Mejora de la funcionalidad corporal",
        "Tratamiento sin medicación"
      ],
      icon: "Hand"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu recuperación. Seguimiento continuo hasta alcanzar tus objetivos de salud. Combinamos diferentes técnicas para acelerar tu proceso de recuperación.",
      benefits: [
        "Plan personalizado de recuperación",
        "Seguimiento continuo del progreso",
        "Vuelta a tu actividad normal"
      ],
      icon: "Activity"
    },
    {
      id: "bienestar-integral",
      name: "Bienestar Integral",
      description: "Cada sesión va más allá del tratamiento físico, cuidando también tu bienestar mental. Ambiente de confianza donde te sentirás cuidado de verdad. Trato cercano que hace de cada visita una experiencia de alivio completo.",
      benefits: [
        "Alivio físico y mental",
        "Ambiente de confianza y cercanía",
        "Cuidado integral de tu salud"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Solicita tu Cita",
      description: "Llama al 652 90 67 12 para reservar tu sesión. Si tienes una urgencia, también ofrecemos atención prioritaria para que no tengas que esperar con dolor."
    },
    {
      step: 2,
      title: "Valoración Personalizada",
      description: "En la primera sesión evaluamos tu caso específico: artritis, epicondilitis, contracturas o cualquier dolencia muscular. Escuchamos tus necesidades y preferencias, incluyendo la intensidad de masaje que prefieres."
    },
    {
      step: 3,
      title: "Tratamiento Adaptado",
      description: "Aplicamos las técnicas osteopáticas y de masaje terapéutico más adecuadas para tu caso. Nos adaptamos completamente a lo que tu cuerpo necesita, ajustando la intensidad y el enfoque en cada sesión."
    },
    {
      step: 4,
      title: "Seguimiento Continuo",
      description: "Mantenemos un seguimiento de tu evolución a lo largo de las sesiones. Muchos pacientes llevan años confiando en nosotros porque cada tratamiento les hace sentir renovados y cuidados de verdad."
    }
  ],
  whyUs: [
    {
      title: "Valoración Excelente de 4.9 Estrellas",
      description: "Con 4.9 estrellas en Google y 34 reseñas, nuestros pacientes avalan la calidad de nuestros tratamientos. Destacan nuestra efectividad, profesionalidad y el trato cercano que hace que cada sesión sea una experiencia de alivio físico y mental.",
      icon: "Heart"
    },
    {
      title: "Tratamiento Totalmente Personalizado",
      description: "Nos adaptamos completamente a tus necesidades: desde la intensidad del masaje que prefieres hasta el enfoque específico para tu patología. Ya sea artritis, epicondilitis o contracturas, diseñamos cada sesión para lo que tu cuerpo necesita en ese momento.",
      icon: "Target"
    },
    {
      title: "Atención de Urgencias Disponible",
      description: "Entendemos que el dolor no siempre puede esperar. Por eso ofrecemos atención de urgencias cuando lo necesitas, sin que tengas que sufrir esperando días para una cita. Tu bienestar es nuestra prioridad.",
      icon: "Zap"
    },
    {
      title: "Experiencia y Confianza a Largo Plazo",
      description: "Muchos pacientes llevan años confiando en nosotros para su cuidado continuo. Esa fidelidad habla de la efectividad de nuestros tratamientos y del ambiente de confianza que creamos. Ponerte en nuestras manos es sentirte cuidado de verdad.",
      icon: "Hand"
    }
  ],
  team: [
    {
      name: "Cande",
      role: "Osteópata y Terapeuta de Masaje",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Osteopathic Massage Therapist nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Osteopathic Massage Therapist - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Osteopathic Massage Therapist - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Qué diferencia a Osteopathic Massage Therapist de otros centros?",
      answer: "Nuestro enfoque combina osteopatía profesional con un trato cercano y personalizado. Con 4.9 estrellas en Google y 34 reseñas, nuestros pacientes destacan la efectividad de los tratamientos y la capacidad de adaptarnos completamente a sus necesidades, desde la intensidad del masaje hasta la atención de urgencias. Cada sesión está diseñada para que salgas renovado física y mentalmente."
    },
    {
      question: "¿Puedo elegir la intensidad del masaje?",
      answer: "Absolutamente. Nos adaptamos a tus preferencias, ya sea que te gusten los masajes suaves o más intensos. En la primera sesión establecemos juntos el punto justo de presión que necesitas, y podemos ajustarlo en cada visita según cómo te sientas. Tu comodidad y efectividad del tratamiento son nuestra prioridad."
    },
    {
      question: "¿Tratáis casos de artritis y epicondilitis?",
      answer: "Sí, somos especialistas en el tratamiento de artritis y epicondilitis. Muchos de nuestros pacientes habituales acuden específicamente por estas patologías y encuentran alivio efectivo con nuestras técnicas. Diseñamos un plan de tratamiento continuo que se adapta a la evolución de tu condición, mejorando tu calidad de vida y movilidad."
    },
    {
      question: "¿Ofrecéis atención de urgencias?",
      answer: "Sí, entendemos que a veces el dolor no puede esperar. Si necesitas atención urgente por una lesión o dolor agudo, contacta con nosotros en el 652 90 67 12 y haremos lo posible por atenderte lo antes posible. Nuestros pacientes valoran especialmente esta disponibilidad cuando más lo necesitan."
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer: "Depende de tu caso específico y tus objetivos. En la valoración inicial te daremos una estimación personalizada. Algunos pacientes notan mejora significativa desde la primera sesión, mientras que otros con condiciones crónicas como artritis prefieren un seguimiento regular. Muchos de nuestros pacientes llevan años confiando en nosotros para su bienestar continuo."
    },
    {
      question: "¿Cómo solicito una cita en Osteopathic Massage Therapist?",
      answer: "Puedes llamarnos directamente al 652 90 67 12 para reservar tu cita. Te atenderemos personalmente para encontrar el horario que mejor te convenga. Si tienes dudas sobre qué tratamiento necesitas, estaremos encantados de orientarte por teléfono antes de tu primera visita."
    },
    {
      question: "¿Los tratamientos son solo para lesiones o también para prevención?",
      answer: "Ofrecemos ambos enfoques. Tratamos lesiones y dolencias específicas como problemas musculares, artritis o epicondilitis, pero también trabajamos en prevención y mantenimiento del bienestar. Muchos pacientes acuden regularmente para mantener su salud física y mental, no solo cuando tienen dolor. Cada sesión aporta alivio y cuidado integral."
    },
    {
      question: "¿Qué puedo esperar de mi primera sesión?",
      answer: "En tu primera visita a Osteopathic Massage Therapist realizaremos una valoración completa de tu caso, escucharemos tus necesidades y estableceremos juntos el mejor plan de tratamiento. Aplicaremos las técnicas más adecuadas para tu situación y te sentirás cuidado desde el primer momento. Nuestro objetivo es que salgas de esa primera sesión notando ya una mejora y con confianza en tu recuperación."
    }
  ],
  seo: {
    titleTemplate: "%s | Osteopathic Massage Therapist",
    defaultTitle: "Osteopatía Alcázar de San Juan | Osteopathic Massage",
    defaultDescription: "Osteopatía y masaje terapéutico en Alcázar de San Juan. Tratamiento de artritis, epicondilitis y problemas musculares. 4.9★ en Google. Atención urgencias. ☎ 652 90 67 12",
    keywords: [
      "osteopatía Alcázar de San Juan",
      "masaje terapéutico Alcázar de San Juan",
      "Osteopathic Massage Therapist",
      "fisioterapia Alcázar de San Juan",
      "tratamiento artritis Ciudad Real",
      "epicondilitis Alcázar de San Juan",
      "osteópata Alcázar de San Juan",
      "problemas musculares Ciudad Real",
      "masaje deportivo Alcázar de San Juan",
      "fisioterapeuta Alcázar de San Juan",
      "Cande osteópata",
      "urgencias fisioterapia Ciudad Real"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Osteopathic Massage Therapist",
    cif: "",
    registeredAddress: "C. Francisco Quiralte Romero, 3, 13600 Alcázar de San Juan, Ciudad Real, Spain, Alcázar de San Juan, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Alcázar de San Juan"
  ],
  heroDescription: "Centro especializado en osteopatía y masaje terapéutico en Alcázar de San Juan. Tratamientos personalizados que combinan técnicas manuales efectivas con un trato cercano y profesional. Cada sesión está diseñada para aliviar tus dolencias y mejorar tu bienestar físico y mental.",
  specialty: "Osteopatía y Masaje Terapéutico",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para sentirte como nuevo tras cada sesión?",
  ctaDescription: "Solicita tu cita llamando al 652 90 67 12. Atendemos también urgencias cuando lo necesitas. Tratamientos personalizados que se adaptan a tus necesidades específicas.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
