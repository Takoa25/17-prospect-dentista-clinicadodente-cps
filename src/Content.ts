import { ContentConfig } from './types';

// ==================================================================================
// 1. CENTRALIZAÇÃO DE IMAGENS 
// (Organizadas por seção com recomendações de dimensões)
// ==================================================================================
const images = {
    logo: "", // Opcional - deixe vazio para usar o logo padrão (Diamante). PNG/SVG Transparente.
    seo: {
        preview: "/images/preview.webp", // 1200x630px
    },
    hero: {
        backgroundMobile: "/images/hero-mobile.webp", // 1080x1920px (Retrato)
        backgroundDesktop: "/images/hero-desktop-v2.webp", // 1920x1080px (Paisagem)
    },
    beforeAfter: [ // 826x368px (Horizontal)
        "/images/before_after1.webp",
        "/images/before_after2.webp",
        "/images/before_after3.webp",
        "/images/before_after4.webp",

    ],
    about: {
        main: "/images/about.webp", // 800x1000px (4:5)
    },
    features: { // 800x600px (4:3)
        card1: "/images/service1.webp",
        card2: "/images/service2.webp",
        card3: "/images/service3.webp",
        card4: "/images/service4.webp",
        card5: "/images/service5.webp",
    },
    team: [ // 800x1066px (3:4)
        "/images/team1.webp",
        "/images/team2.webp",
        "/images/team3.webp",
    ],
    testimonials: [ // 300x300px (Quadrado 1:1)
        "/images/testimonial1.webp",
        "/images/testimonial2.webp",
        "/images/testimonial3.webp",
        "/images/testimonial4.webp",
        "/images/testimonial5.webp",
    ]
};

export const content: ContentConfig = {
    // ==================================================================================
    // 2. CONFIGURAÇÕES VISUAIS (CORES E FONTES)
    // ==================================================================================
    colors: {
        primary: '#0ea5e9',     // Azul Céu (Confiança/Saúde)
        primaryDark: '#0284c7',
        secondary: '#0f172a',
        background: '#ffffff',
        text: '#1e293b',
        textMuted: '#64748b',
        accent: '#38bdf8',
        whatsapp: '#0284c7',
        whatsappHover: '#128C7E',
        whatsappText: '#ffffff',
    },

    fonts: {
        display: 'Bebas Neue, sans-serif',      // Títulos grandes
        headings: 'Space Grotesk, sans-serif',  // Subtítulos e headings
        body: 'Inter, sans-serif',              // Corpo de texto
    },

    // ==================================================================================
    // 3. SEO E INFORMAÇÕES GERAIS
    // ==================================================================================
    seo: {
        title: "Clínica do Dente - Sorrisos que Transformam Vidas",
        description: "Clínica Odontológica Especializada em Implantes, Lentes de Contato e Estética Avançada em Campinas.",
        domain: "https://clinicadodente.netlify.app",
        path: "/",
        themeColor: "#0ea5e9",
        keywords: "dentista, implantes, lentes de contato dental, odontologia estética, clareamento, campinas",
        og: {
            title: "Clínica do Dente - Estética Dental Avançada",
            description: "Recupere sua autoestima com tratamentos odontológicos de ponta e tecnologia avançada.",
            type: "website",
            siteName: "Clínica do Dente",
            image: images.seo.preview,
            locale: "pt_BR",
        },
        twitter: {
            card: "summary_large_image",
        },
    },

    infos: {
        name: "Clínica do Dente",
        cnpj: "00.000.000/0001-00",
        phone: "(19) 3232-1050",
        whatsapp: "5519998020686",
        email: "contato@clinicadodente.com.br",
        address: "R. Cônego Nery, 350 - Jardim Guanabara, Campinas - SP, 13073-180",
        miniAddress: "R. Cônego Nery, 350 - Jardim Guanabara",
        mapsLink: "https://maps.app.goo.gl/uBUHCpm4ZYhpVmnGA",
        mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7589878405365!2d-47.059537399999996!3d-22.885359899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4e958d6ff5%3A0x923e92b3894c3212!2sCl%C3%ADnica%20do%20Dente%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1768926564689!5m2!1spt-BR!2sbr",
        defaultWhatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma avaliação na clínica.",
    },

    images: images,

    // ==================================================================================
    // 4. ESTRUTURA DA PÁGINA (ORDEM DE LEITURA)
    // ==================================================================================

    navbar: {
        enabled: false,
        logoText: "Clínica do Dente",
        showLogo: true,
        menuItems: [],
        ctaButtonText: "Agendar Consulta",
        ctaButtonLink: "#contact",
    },

    // --- 01. HERO ---
    hero: {
        enabled: true,
        badge: {
            memberCount: "4.9/5.0",
            subtitle: "AVALIAÇÕES NO GOOGLE",
            avatars: 4,
        },
        headline: {
            line1: "CLÍNICA",
            line2: "ODONTOLÓGICA",
            line3: "EM CAMPINAS",
        },
        floatingStats: {
            left: {
                value: "15K+",
                label: "Procedimentos",
            },
            topRight: {
                value: "18+",
                label: "Anos de Experiência",
            },
        },
        bottomStats: [
            { value: "+15000", label: "Sorrisos Renovados" },
            { value: "Desde 2007", label: "Transformando Vidas" },
        ],
        ctaPrimary: {
            text: "Agendar Agora",
            link: "#contact",
        },
        ctaSecondary: {
            text: "Nossos Casos",
            link: "#results",
        },
    },

    // --- 02. ANTES E DEPOIS ---
    beforeAfter: {
        enabled: true,
        pill: "Resultados",
        headline: "VEJA OS RESULTADOS DOS NOSSOS PACIENTES",
        description: "Transformações reais feitas na Clínica do Dente. Todos os casos foram realizados por nossa equipe com autorização dos pacientes para publicação.",
        images: images.beforeAfter,
    },

    // --- 03. SOBRE NÓS ---
    about: {
        enabled: true,
        pill: "Sobre Nós",
        headline: "Referência em Odontologia Estética e Reabilitação",
        description: "Na Clínica do Dente, nosso objetivo é proporcionar a você não apenas um sorriso bonito, mas saúde e qualidade de vida. Nossa equipe é especializada em transformar vidas através da odontologia moderna.",
        features: [
            {
                title: "ATENDIMENTO HUMANIZADO",
                description: "Sabemos que ir ao dentista pode causar ansiedade. Nossa equipe cuida de você com atenção, paciência e respeito do início ao fim.",
                icon: "Smile"
            },
            {
                title: "ODONTOLOGIA SEM DOR",
                description: "Técnicas de anestesia computadorizada e sedação consciente para que você tenha uma experiência tranquila e confortável.",
                icon: "ShieldCheck"
            },
            {
                title: "TECNOLOGIA DE PONTA",
                description: "Utilizamos scanners e softwares 3D para planejar seu novo sorriso antes mesmo de começar o tratamento.",
                icon: "Sparkles"
            },
        ],
    },

    // --- 04. ESPECIALIDADES (BENTO GRID) ---
    features: {
        enabled: true,
        pill: "Serviços",
        headline: "Tratamentos de Alta Performance",
        subHeadline: "Soluções completas para todos os tipos de necessidades odontológicas, com foco em durabilidade e estética.",
        cards: {
            card1: {
                tagText: "Durabilidade Real",
                title: "IMPLANTES DENTÁRIOS",
                description: "Recupere dentes perdidos com implantes de titânio de alta durabilidade. Tecnologia 3D para planejamento cirúrgico preciso.",
                image: images.features.card1,
                icon: "Dna",
                whatsappMessage: "Olá! Gostaria de saber mais sobre Implantes Dentários."
            },
            card2: {
                tagText: "Mais Procurado",
                title: "ORTODONTIA (APARELHOS)",
                description: "Alinhe seus dentes com aparelhos fixos metálicos, estéticos (porcelana) ou invisíveis (alinhadores).",
                subtitle: "Sorriso Perfeito",
                image: images.features.card2,
                icon: "Smile",
                whatsappMessage: "Olá! Gostaria de saber mais sobre Ortodontia."
            },
            card3: {
                tagText: "Invisível e Eficaz",
                title: "CLAREAMENTO DENTAL",
                description: "Dentes até 8 tons mais brancos em 1 sessão. Utilizamos gel clareador de última geração com LED ativador.",
                image: images.features.card3,
                icon: "Sparkles",
                whatsappMessage: "Olá! Gostaria de saber mais sobre Clareamento Dental."
            },
            card4: {
                tagText: "Estética Premium",
                title: "LENTES DE CONTATO DENTAL",
                description: "Transforme seu sorriso sem desgastar dentes. Lâminas ultrafinas de porcelana que corrigem cor, forma e tamanho.",
                image: images.features.card4,
                icon: "Diamond",
                whatsappMessage: "Olá! Gostaria de saber mais sobre Lentes de Contato Dental."
            },
            card5: {
                tagText: "Saúde Completa",
                title: "REABILITAÇÃO ORAL",
                description: "Um conjunto de procedimentos que visam restabelecer a saúde bucal, funcionalidade e a estética do seu sorriso.",
                image: images.features.card5,
                icon: "HeartPulse",
                whatsappMessage: "Olá! Gostaria de saber mais sobre Reabilitação Oral."
            }
        },
        secondaryServices: [
            {
                title: "TRATAMENTO DE CANAL",
                description: "Equipamento microscópico para precisão máxima. Mínimo desconforto durante e após o procedimento.",
                icon: "Zap",
            },
            {
                title: "LIMPEZA E PROFILAXIA",
                description: "Previna cáries e tártaro com limpeza profunda por ultrassom. Recomendamos a cada 6 meses.",
                icon: "Stethoscope",
            },
            {
                title: "PRÓTESES DENTÁRIAS",
                description: "Recupere a função mastigatória com próteses fixas ou removíveis de alta qualidade.",
                icon: "Smile",
            },
            {
                title: "ODONTOPEDIATRIA",
                description: "Cuidados especiais para a saúde bucal infantil, desde bebês até a adolescência.",
                icon: "Baby",
            },
            {
                title: "CIRURGIA ORAL",
                description: "Extrações, enxertos ósseos e cirurgias bucais complexas com o máximo de conforto.",
                icon: "Scissors",
            },
            {
                title: "TRATAMENTO DE BRUXISMO",
                description: "Placas miorrelaxantes personalizadas para quem range os dentes durante o sono.",
                icon: "Moon",
            },
            {
                title: "PERIODONTIA",
                description: "Tratamento especializado para gengivas inflamadas e prevenção de doenças periodontais.",
                icon: "HeartPulse",
            },
            {
                title: "HARMONIZAÇÃO OROFACIAL",
                description: "Procedimentos para rejuvenescimento facial que complementam um sorriso perfeito.",
                icon: "Star",
            }
        ],
        viewMoreText: "Ver Mais Serviços",
        viewLessText: "Ocultar Serviços"
    },

    // --- 05. EQUIPE ---
    team: {
        enabled: true,
        pill: "Nossa Equipe",
        headline: "ESPECIALISTAS AO SEU DISPOR",
        subHeadline: "Nossa equipe é formada por mestres e doutores nas áreas mais avançadas da odontologia.",
        members: [
            {
                name: "Dr. Vinicius S. Martins",
                role: "Especialista em implantes",
                cro: "CRO-SP 106.302",
                image: images.team[0],
                socialUrl: "#"
            },
            {
                name: "Dra. Gabriella Ferreira",
                role: "Especialista em Cirurgia",
                cro: "CRO-SP 158.065",
                image: images.team[1],
                socialUrl: "#"
            },
            {
                name: "Dra. Andreia Vilela",
                role: "Especialista em Ortodontia",
                cro: "CRO-SP 157.259",
                image: images.team[2],
                socialUrl: "#"
            }
        ]
    },

    // --- 06. DEPOIMENTOS ---
    testimonials: {
        enabled: true,
        pill: "Depoimentos",
        headline: "HISTÓRIAS DE SUPERAÇÃO E AUTOESTIMA",
        headlineHighlight: "",
        subtitle: "Veja o que nossos pacientes dizem sobre sua experiência na Clínica do Dente.",
        items: [
            {
                id: 1,
                name: "Mariano R.",
                role: "Empresário",
                content: "Sempre tive pânico de dentista, mas a equipe me passou tanta segurança que fiz minhas lentes de contato sem medo nenhum.",
                rating: 5,
                image: images.testimonials[0],
            },
            {
                id: 2,
                name: "João P.",
                role: "Advogado",
                content: "O Dr. Vinicius resolveu meu problema de implantes que outros dentistas disseram ser impossível.",
                rating: 5,
                image: images.testimonials[1],
            },
            {
                id: 3,
                name: "Luciana M.",
                role: "Vendedora",
                content: "A tecnologia da clínica é impressionante. Fiz o escaneamento e vi meu sorriso novo na tela na hora.",
                rating: 5,
                image: images.testimonials[2],
            },
            {
                id: 4,
                name: "Juliana K.",
                role: "Contadora",
                content: "Atendimento impecável desde a recepção até a consulta com a Dra. Andreia. Pontualidade e profissionalismo nota 10.",
                rating: 5,
                image: images.testimonials[3],
            },
            {
                id: 5,
                name: "Regina M.",
                role: "Estudante",
                content: "Fiz Invisalign aqui e o acompanhamento foi perfeito. Já terminei o tratamento e meus dentes estão perfeitos.",
                rating: 5,
                image: images.testimonials[4],
            },
        ],
    },

    // --- 07. FAQ ---
    faq: {
        enabled: true,
        pill: "Dúvidas",
        headline: "SUAS PERGUNTAS, RESPONDIDAS",
        headlineHighlight: "",
        subHeadline: "Tire suas dúvidas sobre nossos procedimentos e entenda como funciona nosso atendimento.",
        buttonText: "Agendar uma Consulta",
        items: [
            {
                question: "As lentes de contato dental desgastam os dentes?",
                answer: "Hoje utilizamos técnicas minimamente invasivas com lâminas ultrafinas, preservando ao máximo a estrutura natural.",
            },
            {
                question: "O implante dentário dói?",
                answer: "Não! Com as técnicas modernas e a sedação consciente, o procedimento e o pós-operatório são muito tranquilos.",
            },
            {
                question: "Aceitam convênios odontológicos?",
                answer: "Atendemos de forma particular com foco em alta performance, mas emitimos documentação para reembolso.",
            },
            {
                question: "Quanto tempo dura um tratamento completo?",
                answer: "Varia de acordo com o caso. Graças ao laboratório digital, muitos tratamentos são concluídos em poucos dias.",
            },
        ],
    },

    // --- 08. LOCALIZAÇÃO ---
    location: {
        enabled: true,
        pill: "Onde Estamos",
        title: "NOSSA UNIDADE",
        description: "",
        hours: [
            { label: "Seg - Sex", time: "08:00 - 19:00" },
            { label: "Sáb", time: "Fechado" },
            { label: "Dom", time: "Fechado" }
        ]
    },

    // --- 09. FOOTER ---
    footer: {
        enabled: true,
        description: "Excelência em odontologia estética e reabilitação oral. Transformando sorrisos com tecnologia e humanização.",
        socialLinks: {
            instagram: "https://instagram.com/clinicadodentecampinas",
            facebook: "https://facebook.com/clinicadodentecampinas",
            youtube: "https://youtube.com/clinicadodentecampinas",
        },
        quickLinks: [
            { label: "Início", href: "#hero" },
            { label: "Resultados", href: "#results" },
            { label: "Serviços", href: "#features" },
            { label: "Localização", href: "#location" },
        ],
        policies: [
            { label: "Termos de Uso", href: "#" },
            { label: "Política de Privacidade", href: "#" },
        ],
        copyright: "Todos os direitos reservados.",
        developedBy: "Desenvolvido com ❤️ & ☕ pela ",
        developerName: "TAKOA",
        developerUrl: "https://takoadigital.com",
    },
};
