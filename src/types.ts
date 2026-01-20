// ==================================================================================
// INTERFACES TYPESCRIPT PARA CONFIGURAÇÃO DO TEMPLATE
// ==================================================================================

import { LucideIcon } from 'lucide-react';

// Cores do Tema
export interface ColorsConfig {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    text: string;
    textMuted: string;
    accent: string;
    whatsapp: string;
    whatsappHover: string;
    whatsappText: string;
}

// SEO e Meta Tags
export interface SEOConfig {
    title: string;
    description: string;
    domain: string;
    path: string;
    themeColor: string;
    keywords: string;
    og: {
        title: string;
        description: string;
        type: string;
        siteName: string;
        image: string;
        locale: string;
    };
    twitter: {
        card: string;
    };
}

// Informações da Empresa
export interface InfosConfig {
    name: string;
    cnpj: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    miniAddress: string;
    mapsLink: string;
    mapsEmbed: string;
    defaultWhatsappMessage: string;
}

// Imagens
export interface ImagesConfig {
    logo?: string;
    seo: {
        preview: string;
    };
    hero: {
        backgroundMobile: string;
        backgroundDesktop: string;
    };
    beforeAfter: string[];
    about: {
        main: string;
    };
    features: {
        card1: string;
        card2: string;
        card3: string;
        card4: string;
        card5: string;
    };
    team: string[];
    testimonials: string[];
}

// Hero Section
export interface HeroConfig {
    enabled: boolean;
    badge: {
        memberCount: string;
        subtitle: string;
        avatars: number;
    };
    headline: {
        line1: string;
        line2: string;
        line3: string;
    };
    floatingStats: {
        left: {
            value: string;
            label: string;
        };
        topRight: {
            value: string;
            label: string;
        };
    };
    bottomStats: Array<{
        value: string;
        label: string;
    }>;
    ctaPrimary: {
        text: string;
        link: string;
    };
    ctaSecondary: {
        text: string;
        link: string;
    };
}



// About Section
export interface AboutConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    description: string;
    features: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;
}

// Features Section Configuration (Bento Grid Layout)
export interface FeaturesConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    subHeadline: string;
    cards: {
        card1: CardData;
        card2: CardData;
        card3: CardData;
        card4: CardData;
        card5: CardData;
    };
    secondaryServices: Array<{
        title: string;
        description: string;
        icon: string;
        whatsappMessage?: string;
    }>;
    viewMoreText: string;
    viewLessText: string;
}

export interface CardData {
    title: string;
    description: string;
    subtitle?: string; // Optional for stacking effect
    image: string;
    icon?: string;
    color?: string;
    tagText?: string;
    price?: string;
    text?: string;
    whatsappMessage?: string;
}

// Team Section (Former Categories)
export interface TeamConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    subHeadline: string;
    members: Array<{
        name: string;
        role: string;
        image: string;
        cro?: string;
        socialUrl?: string; // Opcional: Link para perfil/instagram
    }>;
}



// Testimonials Section
export interface TestimonialsConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    items: Array<{
        id: number;
        name: string;
        role: string;
        content: string;
        rating: number;
        image: string;
    }>;
}

// FAQ Section
export interface FAQConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    headlineHighlight: string;
    subHeadline: string;
    buttonText: string;
    items: Array<{
        question: string;
        answer: string;
    }>;
}

// Location Section
export interface LocationConfig {
    enabled: boolean;
    pill: string;
    title: string;
    description: string;
    hours: Array<{
        label: string;
        time: string;
    }>;
}

// Footer Section
export interface FooterConfig {
    enabled: boolean;
    description: string;
    socialLinks: {
        instagram?: string;
        facebook?: string;
        youtube?: string;
        linkedin?: string;
    };
    quickLinks: Array<{
        label: string;
        href: string;
    }>;
    policies: Array<{
        label: string;
        href: string;
    }>;
    copyright: string;
    developedBy: string;
    developerName: string;
    developerUrl: string;
}

// Navbar Config
export interface NavbarConfig {
    enabled: boolean;
    logoText: string;
    showLogo: boolean;
    menuItems: Array<{
        label: string;
        href: string;
    }>;
    ctaButtonText: string;
    ctaButtonLink: string;
}

// Before and After Section
export interface BeforeAfterConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    description: string;
    images: string[];
}

// Configuração Completa
export interface ContentConfig {
    colors: ColorsConfig;
    fonts: {
        display: string;
        headings: string;
        body: string;
    };
    seo: SEOConfig;
    infos: InfosConfig;
    images: ImagesConfig;
    navbar: NavbarConfig;
    hero: HeroConfig;
    about: AboutConfig;
    beforeAfter: BeforeAfterConfig;
    features: FeaturesConfig;
    team: TeamConfig;
    testimonials: TestimonialsConfig;
    faq: FAQConfig;
    location: LocationConfig;
    footer: FooterConfig;
}
