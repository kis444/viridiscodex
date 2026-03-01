"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Lang = "en" | "ro" | "ru"

const translations = {
  en: {
    // Header
    navAbout: "About",
    navPortfolio: "Portfolio",
    navServices: "Services",
    navTestimonials: "Testimonials",
    navContact: "Contact",

    // Hero
    heroLabel: "Full Stack Developer & Designer",
    heroTitle: "I understand composition like an artist and structure like an engineer.",
    heroDescription:
      "With a background in Visual Arts and Information Technology, I create responsive, pixel-perfect web experiences that combine creative vision with solid engineering. Fast delivery, individual approach, unique design.",
    heroCTAPortfolio: "View Portfolio",
    heroCTAContact: "Contact Me",
    heroPhotoAlt: "Profile photo of viridiscodex, a full stack developer and designer",

    // About
    aboutLabel: "About Me",
    aboutTitle: "Where art meets engineering",
    aboutDescription:
      "Educated in Visual Arts and Information Technology, I bring a rare blend of creative sensibility and technical precision to every project. I have spent years refining my craft across frontend, backend, and design, building solutions that are not only functional but beautiful and intuitive to use.",
    skillFrontendTitle: "Frontend Development",
    skillFrontendDesc:
      "React, Next.js, TypeScript, Tailwind CSS, responsive layouts, and modern UI frameworks.",
    skillBackendTitle: "Backend Development",
    skillBackendDesc:
      "Node.js, REST APIs, databases, server-side rendering, and secure authentication systems.",
    skillDesignTitle: "Web Design",
    skillDesignDesc:
      "UI/UX design, composition, color theory, typography, and creative prototyping from concept to code.",
    skillDeliveryTitle: "Fast Delivery",
    skillDeliveryDesc:
      "Efficient workflows and deep expertise mean your project is delivered quickly without cutting corners.",
    skillApproachTitle: "Individual Approach",
    skillApproachDesc:
      "Every project is unique. I tailor each solution to fit your brand, goals, and audience perfectly.",
    skillUniqueTitle: "Unique Design",
    skillUniqueDesc:
      "No templates or cookie-cutter layouts. Every design is handcrafted and one-of-a-kind.",

    // Portfolio
portfolioLabel: "Portfolio",
portfolioTitle: "Selected work",
portfolioSubtitle:
  "A curated selection of recent projects showcasing creative design and robust full-stack development.",
viewProject: "View Project",
project1Title: "ARTPIN",
project1Desc:
  "A premium corporate website for a furniture and decorative items manufacturer. Built with Next.js and TypeScript, the site features a clean, elegant design that showcases their extensive product catalog, company history, and manufacturing capabilities. The intuitive interface reflects the quality and craftsmanship of their handmade pieces.",
project2Title: "Botanica Studio",
project2Desc:
  "Portfolio and booking system for a botanical photography studio. Custom gallery with lightbox, client dashboard, and integrated calendar scheduling.",
project3Title: "Velo Analytics",
project3Desc:
  "Real-time analytics dashboard for a cycling performance startup. Complex data visualizations, user segmentation, and export functionality.",
project4Title: "Mesa Restaurant",
project4Desc:
  "Full-stack restaurant website with online reservations, dynamic menu management, and a custom CMS for the owner to update content independently.",
project5Title: "Prisma Wellness",
project5Desc:
  "Health and wellness platform featuring personalized programs, progress tracking, and a subscription-based content library with video streaming.",

    // Services
    servicesLabel: "Services",
    servicesTitle: "What I offer",
    servicesSubtitle:
      "Premium web development services with a personal touch. Every project receives my full creative and technical attention.",
    serviceCustomTitle: "Custom Website Development",
    serviceCustomDesc:
      "From concept to launch, I build fully custom websites tailored to your brand and goals. Every site is responsive, fast, and built with modern technologies.",
    serviceCustomF1: "Custom UI/UX design",
    serviceCustomF2: "Mobile-first responsive layout",
    serviceCustomF3: "SEO optimized structure",
    serviceCustomF4: "Performance tuning",
    serviceMaintenanceTitle: "Monthly Maintenance",
    serviceMaintenanceDesc:
      "Keep your website running smoothly with ongoing support, updates, and content changes. Your first 30 days of maintenance are completely free.",
    serviceMaintenanceF1: "Bug fixes & updates",
    serviceMaintenanceF2: "Content changes on request",
    serviceMaintenanceF3: "Performance monitoring",
    serviceMaintenanceF4: "Security patches",
    guaranteeFast: "Fast delivery with clear timelines",
    guaranteeUnique: "Unique, handcrafted design for every client",
    guaranteeFree: "First 30 days of support and fixes included free",

    // Testimonials
    testimonialsLabel: "Testimonials",
    testimonialsTitle: "What clients say",
    testimonialsSubtitle:
      "Hear from those who have trusted me with their digital presence.",
    testimonial1Text:
      "Working with viridiscodex was an absolute pleasure. She took our vague ideas and transformed them into a stunning, fully functional website that exceeded all expectations. The attention to detail is remarkable.",
    testimonial1Name: "Andrei D.",
    testimonial1Role: "Founder, ARTPIN",
    testimonial2Text:
      "The combination of artistic vision and technical expertise is rare. Our analytics dashboard is not only powerful but genuinely beautiful to use. Delivery was faster than promised, and communication was seamless throughout.",
    testimonial2Name: "Andrei V.",
    testimonial2Role: "CTO, Velo Analytics",
    testimonial3Text:
      "She completely redesigned our restaurant website and the result is breathtaking. Reservations increased by 40% in the first month. The ongoing maintenance service keeps everything running perfectly. Highly recommended!",
    testimonial3Name: "Maria I.",
    testimonial3Role: "Owner, Mesa Restaurant",

    // Contact
    contactLabel: "Contact",
    contactTitle: "Let's work together",
    contactDescription:
      "Have a project in mind or just want to say hello? Fill out the form and I will get back to you within 24 hours. I am always open to discussing new opportunities and creative ideas.",
    contactEmail: "viridiscodex@gmail.com",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "you@example.com",
    formMessage: "Message",
    formMessagePlaceholder: "Tell me about your project...",
    formSubmit: "Send Message",
    formSuccessTitle: "Message sent!",
    formSuccessText: "Thank you for reaching out. I will respond shortly.",

    // Footer
    footerTagline: "Full Stack Developer & Designer",
    footerCopyright: "viridiscodex. All rights reserved.",
  },

  ro: {
    // Header
    navAbout: "Despre",
    navPortfolio: "Portofoliu",
    navServices: "Servicii",
    navTestimonials: "Testimoniale",
    navContact: "Contact",

    // Hero
    heroLabel: "Full Stack Developer & Designer",
    heroTitle: "Inteleg compozitia ca un artist si structura ca un inginer.",
    heroDescription:
      "Cu studii in Arte Vizuale si Tehnologia Informatiei, creez experiente web responsive, pixel-perfect, care combina viziunea creativa cu ingineria solida. Livrare rapida, abordare individuala, design unic.",
    heroCTAPortfolio: "Vezi Portofoliul",
    heroCTAContact: "Contacteaza-ma",
    heroPhotoAlt: "Fotografia de profil a viridiscodex, full stack developer si designer",

    // About
    aboutLabel: "Despre Mine",
    aboutTitle: "Unde arta intalneste ingineria",
    aboutDescription:
      "Educata in Arte Vizuale si Tehnologia Informatiei, aduc o combinatie rara de sensibilitate creativa si precizie tehnica in fiecare proiect. Am petrecut ani perfectionandu-mi meseria in frontend, backend si design, construind solutii care nu sunt doar functionale, ci si frumoase si intuitive.",
    skillFrontendTitle: "Dezvoltare Frontend",
    skillFrontendDesc:
      "React, Next.js, TypeScript, Tailwind CSS, layout-uri responsive si framework-uri UI moderne.",
    skillBackendTitle: "Dezvoltare Backend",
    skillBackendDesc:
      "Node.js, REST API-uri, baze de date, server-side rendering si sisteme de autentificare securizate.",
    skillDesignTitle: "Web Design",
    skillDesignDesc:
      "Design UI/UX, compozitie, teorie a culorilor, tipografie si prototipare creativa de la concept la cod.",
    skillDeliveryTitle: "Livrare Rapida",
    skillDeliveryDesc:
      "Fluxuri de lucru eficiente si expertiza profunda inseamna ca proiectul tau este livrat rapid fara compromisuri.",
    skillApproachTitle: "Abordare Individuala",
    skillApproachDesc:
      "Fiecare proiect este unic. Personalizez fiecare solutie pentru a se potrivi brandului, obiectivelor si publicului tau.",
    skillUniqueTitle: "Design Unic",
    skillUniqueDesc:
      "Fara template-uri sau layout-uri generice. Fiecare design este creat manual si unic.",

    // Portfolio
portfolioLabel: "Portofoliu",
portfolioTitle: "Lucrări selectate",
portfolioSubtitle:
  "O selecție de proiecte recente care demonstrează design creativ și dezvoltare full-stack robustă.",
viewProject: "Vezi Proiectul",
project1Title: "ARTPIN",
project1Desc:
  "Un site corporate premium pentru un producător de mobilă și obiecte decorative. Construit cu Next.js și TypeScript, site-ul prezintă un design curat și elegant care evidențiază catalogul extins de produse, istoria companiei și capacitățile de producție. Interfața intuitivă reflectă calitatea și măiestria pieselor lucrate manual.",
project2Title: "Botanica Studio",
project2Desc:
  "Portofoliu și sistem de rezervări pentru un studio de fotografie botanică. Galerie personalizată cu lightbox, dashboard client și programare integrată.",
project3Title: "Velo Analytics",
project3Desc:
  "Dashboard de analitică în timp real pentru un startup de performanță ciclism. Vizualizări complexe de date, segmentare utilizatori și funcționalitate de export.",
project4Title: "Mesa Restaurant",
project4Desc:
  "Website full-stack pentru restaurant cu rezervări online, gestionare dinamică a meniului și un CMS personalizat pentru proprietar.",
project5Title: "Prisma Wellness",
project5Desc:
  "Platformă de sănătate și wellness cu programe personalizate, urmărirea progresului și o bibliotecă de conținut bazată pe abonament cu streaming video.",

    // Services
    servicesLabel: "Servicii",
    servicesTitle: "Ce ofer",
    servicesSubtitle:
      "Servicii premium de dezvoltare web cu o nota personala. Fiecare proiect primeste intreaga mea atentie creativa si tehnica.",
    serviceCustomTitle: "Dezvoltare Website Personalizat",
    serviceCustomDesc:
      "De la concept la lansare, construiesc website-uri complet personalizate, adaptate brandului si obiectivelor tale. Fiecare site este responsive, rapid si construit cu tehnologii moderne.",
    serviceCustomF1: "Design UI/UX personalizat",
    serviceCustomF2: "Layout responsive mobile-first",
    serviceCustomF3: "Structura optimizata SEO",
    serviceCustomF4: "Optimizare performanta",
    serviceMaintenanceTitle: "Mentenanta Lunara",
    serviceMaintenanceDesc:
      "Mentine website-ul tau functional cu suport continuu, actualizari si modificari de continut. Primele 30 de zile de mentenanta sunt complet gratuite.",
    serviceMaintenanceF1: "Corectarea erorilor si actualizari",
    serviceMaintenanceF2: "Modificari de continut la cerere",
    serviceMaintenanceF3: "Monitorizare performanta",
    serviceMaintenanceF4: "Patch-uri de securitate",
    guaranteeFast: "Livrare rapida cu termene clare",
    guaranteeUnique: "Design unic, creat manual pentru fiecare client",
    guaranteeFree: "Primele 30 de zile de suport si corectii incluse gratuit",

    // Testimonials
    testimonialsLabel: "Testimoniale",
    testimonialsTitle: "Ce spun clientii",
    testimonialsSubtitle:
      "Asculta de la cei care mi-au incredintat prezenta lor digitala.",
    testimonial1Text:
      "Lucrul cu viridiscodex a fost o placere absoluta. A luat ideile noastre vagi si le-a transformat intr-un website uimitor si complet functional, care a depasit toate asteptarile. Atentia la detalii este remarcabila.",
    testimonial1Name: "Andrei D.",
    testimonial1Role: "Fondator, ARTPIN",
    testimonial2Text:
      "Combinatia de viziune artistica si expertiza tehnica este rara. Dashboard-ul nostru de analitica nu este doar puternic, ci si frumos de utilizat. Livrarea a fost mai rapida decat s-a promis, iar comunicarea a fost perfecta.",
    testimonial2Name: "Andrei V.",
    testimonial2Role: "CTO, Velo Analytics",
    testimonial3Text:
      "A redesignat complet website-ul restaurantului nostru si rezultatul este impresionant. Rezervarile au crescut cu 40% in prima luna. Serviciul de mentenanta continua mentine totul functional perfect. Recomand cu incredere!",
    testimonial3Name: "Maria I.",
    testimonial3Role: "Proprietar, Mesa Restaurant",

    // Contact
    contactLabel: "Contact",
    contactTitle: "Sa lucram impreuna",
    contactDescription:
      "Ai un proiect in minte sau vrei doar sa saluti? Completeaza formularul si voi raspunde in 24 de ore. Sunt mereu deschisa sa discut oportunitati noi si idei creative.",
    contactEmail: "viridiscodex@gmail.com",
    formName: "Nume",
    formNamePlaceholder: "Numele tau",
    formEmail: "Email",
    formEmailPlaceholder: "tu@exemplu.com",
    formMessage: "Mesaj",
    formMessagePlaceholder: "Spune-mi despre proiectul tau...",
    formSubmit: "Trimite Mesajul",
    formSuccessTitle: "Mesaj trimis!",
    formSuccessText: "Multumesc ca ai scris. Voi raspunde in curand.",

    // Footer
    footerTagline: "Full Stack Developer & Designer",
    footerCopyright: "viridiscodex. Toate drepturile rezervate.",
  },

  ru: {
    // Header
    navAbout: "Обо мне",
    navPortfolio: "Портфолио",
    navServices: "Услуги",
    navTestimonials: "Отзывы",
    navContact: "Контакт",

    // Hero
    heroLabel: "Full Stack Разработчик & Дизайнер",
    heroTitle: "Я понимаю композицию как художник и структуру как инженер.",
    heroDescription:
      "С образованием в области визуального искусства и информационных технологий я создаю адаптивные, идеальные до пикселя веб-решения, сочетающие творческое видение с надёжной инженерией. Быстрая доставка, индивидуальный подход, уникальный дизайн.",
    heroCTAPortfolio: "Смотреть Портфолио",
    heroCTAContact: "Связаться",
    heroPhotoAlt: "Фото профиля viridiscodex, full stack разработчика и дизайнера",

    // About
    aboutLabel: "Обо мне",
    aboutTitle: "Где искусство встречает инженерию",
    aboutDescription:
      "С образованием в области визуального искусства и информационных технологий я привношу редкое сочетание творческой чувствительности и технической точности в каждый проект. Я годами оттачивала мастерство во фронтенде, бэкенде и дизайне, создавая решения, которые не только функциональны, но и красивы и интуитивно понятны.",
    skillFrontendTitle: "Фронтенд Разработка",
    skillFrontendDesc:
      "React, Next.js, TypeScript, Tailwind CSS, адаптивные макеты и современные UI-фреймворки.",
    skillBackendTitle: "Бэкенд Разработка",
    skillBackendDesc:
      "Node.js, REST API, базы данных, серверный рендеринг и безопасные системы аутентификации.",
    skillDesignTitle: "Веб Дизайн",
    skillDesignDesc:
      "UI/UX дизайн, композиция, теория цвета, типографика и креативное прототипирование от концепта до кода.",
    skillDeliveryTitle: "Быстрая Доставка",
    skillDeliveryDesc:
      "Эффективные рабочие процессы и глубокая экспертиза означают, что ваш проект будет доставлен быстро без компромиссов.",
    skillApproachTitle: "Индивидуальный Подход",
    skillApproachDesc:
      "Каждый проект уникален. Я адаптирую каждое решение под ваш бренд, цели и аудиторию.",
    skillUniqueTitle: "Уникальный Дизайн",
    skillUniqueDesc:
      "Никаких шаблонов или типовых макетов. Каждый дизайн создан вручную и единственный в своём роде.",

    // Portfolio
portfolioLabel: "Портфолио",
portfolioTitle: "Избранные работы",
portfolioSubtitle:
  "Подборка недавних проектов, демонстрирующих креативный дизайн и надёжную full-stack разработку.",
viewProject: "Смотреть Проект",
project1Title: "ARTPIN",
project1Desc:
  "Премиальный корпоративный сайт для производителя мебели и декоративных изделий. Созданный с использованием Next.js и TypeScript, сайт отличается чистым, элегантным дизайном, который представляет обширный каталог продукции, историю компании и производственные возможности. Интуитивный интерфейс отражает качество и мастерство их изделий ручной работы.",
project2Title: "Botanica Studio",
project2Desc:
  "Портфолио и система бронирования для студии ботанической фотографии. Пользовательская галерея с лайтбоксом, панель клиента и интегрированное расписание.",
project3Title: "Velo Analytics",
project3Desc:
  "Панель аналитики в реальном времени для стартапа велосипедной производительности. Сложные визуализации данных, сегментация пользователей и функции экспорта.",
project4Title: "Mesa Restaurant",
project4Desc:
  "Full-stack сайт ресторана с онлайн бронированием, динамическим управлением меню и пользовательской CMS для владельца.",
project5Title: "Prisma Wellness",
project5Desc:
  "Платформа здоровья и велнеса с персонализированными программами, отслеживанием прогресса и библиотекой контента с видеостримингом по подписке.",

    // Services
    servicesLabel: "Услуги",
    servicesTitle: "Что я предлагаю",
    servicesSubtitle:
      "Премиальные услуги веб-разработки с индивидуальным подходом. Каждый проект получает моё полное творческое и техническое внимание.",
    serviceCustomTitle: "Разработка Сайта на Заказ",
    serviceCustomDesc:
      "От концепта до запуска — я создаю полностью индивидуальные сайты, адаптированные под ваш бренд и цели. Каждый сайт адаптивный, быстрый и построен на современных технологиях.",
    serviceCustomF1: "Индивидуальный UI/UX дизайн",
    serviceCustomF2: "Адаптивный mobile-first макет",
    serviceCustomF3: "SEO-оптимизированная структура",
    serviceCustomF4: "Оптимизация производительности",
    serviceMaintenanceTitle: "Ежемесячное Обслуживание",
    serviceMaintenanceDesc:
      "Поддерживайте ваш сайт в отличном состоянии с постоянной поддержкой, обновлениями и изменениями контента. Первые 30 дней обслуживания совершенно бесплатны.",
    serviceMaintenanceF1: "Исправление ошибок и обновления",
    serviceMaintenanceF2: "Изменения контента по запросу",
    serviceMaintenanceF3: "Мониторинг производительности",
    serviceMaintenanceF4: "Патчи безопасности",
    guaranteeFast: "Быстрая доставка с чёткими сроками",
    guaranteeUnique: "Уникальный, ручной дизайн для каждого клиента",
    guaranteeFree: "Первые 30 дней поддержки и исправлений бесплатно",

    // Testimonials
    testimonialsLabel: "Отзывы",
    testimonialsTitle: "Что говорят клиенты",
    testimonialsSubtitle:
      "Послушайте тех, кто доверил мне своё цифровое присутствие.",
    testimonial1Text:
      "Работа с viridiscodex была абсолютным удовольствием. Она взяла наши размытые идеи и превратила их в потрясающий, полностью функциональный сайт, превзошедший все ожидания. Внимание к деталям поразительно.",
    testimonial1Name: "Андрей Д.",
    testimonial1Role: "Основатель, ARTPIN",
    testimonial2Text:
      "Сочетание художественного видения и технической экспертизы — это редкость. Наша аналитическая панель не только мощная, но и красивая в использовании. Доставка была быстрее обещанного, а коммуникация — безупречной.",
    testimonial2Name: "Андрей В.",
    testimonial2Role: "CTO, Velo Analytics",
    testimonial3Text:
      "Она полностью переделала сайт нашего ресторана, и результат потрясающий. Бронирования выросли на 40% за первый месяц. Постоянное обслуживание поддерживает всё в идеальном состоянии. Очень рекомендую!",
    testimonial3Name: "Мария И.",
    testimonial3Role: "Владелец, Mesa Restaurant",

    // Contact
    contactLabel: "Контакт",
    contactTitle: "Давайте работать вместе",
    contactDescription:
      "Есть проект на уме или просто хотите поздороваться? Заполните форму, и я отвечу в течение 24 часов. Я всегда открыта для обсуждения новых возможностей и креативных идей.",
    contactEmail: "viridiscodex@gmail.com",
    formName: "Имя",
    formNamePlaceholder: "Ваше имя",
    formEmail: "Email",
    formEmailPlaceholder: "вы@пример.com",
    formMessage: "Сообщение",
    formMessagePlaceholder: "Расскажите о вашем проекте...",
    formSubmit: "Отправить Сообщение",
    formSuccessTitle: "Сообщение отправлено!",
    formSuccessText: "Спасибо за обращение. Я скоро отвечу.",

    // Footer
    footerTagline: "Full Stack Разработчик & Дизайнер",
    footerCopyright: "viridiscodex. Все права защищены.",
  },
} as const

export type TranslationKey = keyof (typeof translations)["en"]

type I18nContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations.en[key] ?? key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
