import React, { useRef, useState } from 'react';
import { useScroll, motion, AnimatePresence, useTransform } from 'framer-motion';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { cn } from '../lib/utils';
import {
    ChevronRight,
    Plus,
    ChevronDown
} from 'lucide-react';

// Importando ícones especializados da react-icons (Versões estáveis)
import {
    FaTooth,
    FaTeeth,
    FaTeethOpen,
    FaMicroscope,
    FaRegSmileBeam,
    FaStethoscope,
    FaMagic,
    FaProcedures
} from 'react-icons/fa';
import {
    GiTooth,
    GiMouthWatering,
    GiSparkles
} from 'react-icons/gi';
import {
    MdHealthAndSafety,
    MdCleanHands,
    MdChildCare,
    MdBloodtype
} from 'react-icons/md';
import {
    RiStarSmileLine,
    RiShieldCrossLine
} from 'react-icons/ri';
import {
    BsScissors,
    BsStars
} from 'react-icons/bs';

import { StackingCard } from '@/components/ui/stacking-card';

// Mapeamento de ícones Premium e Específicos para Odontologia
const IconMap: { [key: string]: any } = {
    // Especialidades Principais (Cards)
    'Implantes': GiTooth,
    'Ortodontia': FaTeethOpen,
    'Clareamento': BsStars,
    'Lentes': FaMagic,
    'Reabilitacao': MdHealthAndSafety,

    // Serviços Secundários
    'Canal': FaMicroscope,
    'Limpeza': MdCleanHands,
    'Proteses': FaTeeth,
    'Odontopediatria': MdChildCare,
    'Cirurgia': BsScissors,
    'Bruxismo': RiShieldCrossLine,
    'Periodontia': MdBloodtype,
    'Harmonizacao': RiStarSmileLine,

    // Fallbacks
    'Default': FaTooth,
    'Dna': FaTooth,
    'Smile': FaRegSmileBeam,
    'Sparkles': GiSparkles,
    'Diamond': BsStars,
    'HeartPulse': MdHealthAndSafety,
    'Zap': FaMicroscope,
    'Stethoscope': FaStethoscope,
    'Baby': MdChildCare,
    'Scissors': BsScissors,
    'Moon': RiShieldCrossLine,
    'Star': RiStarSmileLine
};

const ServiceIcon = ({ name, className }: { name?: string, className?: string }) => {
    // Proteção contra crash: se o nome não existe no mapa ou o componente é nulo, usa o dente padrão
    const IconComponent = name ? (IconMap[name] || IconMap['Default']) : IconMap['Default'];

    if (!IconComponent) {
        return <FaTooth className={className} />;
    }

    return <IconComponent className={className} />;
};

const DesktopFeatures: React.FC = () => {
    const { features, infos } = content;
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const { cards, secondaryServices } = features;
    const mainCards = [cards.card1, cards.card2, cards.card3, cards.card4, cards.card5];
    const mainCardIcons = ['Implantes', 'Ortodontia', 'Clareamento', 'Lentes', 'Reabilitacao'];
    const secondaryServiceIcons = ['Canal', 'Limpeza', 'Proteses', 'Odontopediatria', 'Cirurgia', 'Bruxismo', 'Periodontia', 'Harmonizacao'];

    const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

    return (
        <section className="w-full relative overflow-visible" id="features">
            <div
                ref={containerRef}
                className="relative w-full overflow-visible"
                style={{ height: '400vh' }}
            >
                <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start overflow-visible bg-slate-50/50">
                    <motion.div
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="container-custom absolute top-[16vh] z-0"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-white shadow-sm">
                                {features.pill}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                            <div className="h-px bg-neutral-200 flex-1"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-[1.05] uppercase tracking-tighter max-w-2xl">
                                {features.headline}
                            </h2>
                            <p className="text-neutral-500 text-base md:text-lg leading-relaxed font-inter max-w-md md:pt-2">
                                {features.subHeadline}
                            </p>
                        </div>
                    </motion.div>

                    {mainCards.map((card, i) => {
                        const totalSlots = mainCards.length;
                        const totalEnd = 0.85;
                        const startOffset = 0.08;
                        const slotSize = (totalEnd - startOffset) / totalSlots;

                        const start = startOffset + (i * slotSize);
                        const end = startOffset + ((i + 1) * slotSize);

                        return (
                            <StackingCard
                                key={`main_${i}`}
                                i={i}
                                total={mainCards.length}
                                title={card.title}
                                description={card.description}
                                url={card.image}
                                color={card.color || "#FFFFFF"}
                                progress={scrollYProgress}
                                range={[start, end, totalEnd]}
                                entranceSize={slotSize}
                                ctaText="Agendar Consulta"
                                onCtaClick={() => {
                                    const message = encodeURIComponent(card.whatsappMessage || `Olá! Vim pelo site e quero agendar um(a) ${card.title}.`);
                                    window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                }}
                                tagText={card.tagText || "Especialidade"}
                                icon={<ServiceIcon name={mainCardIcons[i]} className="w-5 h-5" />}
                            />
                        );
                    })}
                </div>
            </div>

            <SecondaryServicesSection
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                features={features}
                secondaryServices={secondaryServices}
                secondaryServiceIcons={secondaryServiceIcons}
                infos={infos}
            />
        </section>
    );
};

// Nova implementação Mobile/Tablet (Sticky Stack)
const MobileFeatures: React.FC = () => {
    const { features, infos } = content;
    const [isExpanded, setIsExpanded] = useState(false);
    const { cards, secondaryServices } = features;
    const mainCards = [cards.card1, cards.card2, cards.card3, cards.card4, cards.card5];
    const mainCardIcons = ['Implantes', 'Ortodontia', 'Clareamento', 'Lentes', 'Reabilitacao'];
    const secondaryServiceIcons = ['Canal', 'Limpeza', 'Proteses', 'Odontopediatria', 'Cirurgia', 'Bruxismo', 'Periodontia', 'Harmonizacao'];

    return (
        <section className="w-full relative bg-slate-50/50" id="features">
            {/* Header Mobile - Rolagem Normal */}
            <div className="container-custom pt-24 pb-16">
                <div className="flex items-center gap-4 mb-8">
                    <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-white shadow-sm">
                        {features.pill}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <div className="h-px bg-neutral-200 flex-1"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                </div>
                <h2 className="font-grotesk text-4xl font-bold text-black leading-[1.05] uppercase tracking-tighter mb-4">
                    {features.headline}
                </h2>
                <p className="text-neutral-500 text-base leading-relaxed font-inter">
                    {features.subHeadline}
                </p>
            </div>

            {/* Sticky Cards Container */}
            <div className="w-full">
                {mainCards.map((card, i) => (
                    <div
                        key={`mobile_sticky_${i}`}
                        // AJUSTE DE SOMBRA MOBILE AQUI:
                        // shadow-[eixoX_eixoY_blur_spread_cor]
                        // Para Sombra MAIS FORTE: aumente a opacidade no final (0.1 para 0.2, 0.3...)
                        // Para Sombra MAIOR: aumente o 40px para 60px ou 80px
                        className={`sticky top-0 w-full h-[100dvh] flex flex-col overflow-hidden ${i > 0 ? "rounded-t-[32px] shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.2)]" : ""
                            }`}
                        style={{
                            zIndex: i + 1,
                            backgroundColor: card.color || "#FFFFFF"
                            // Sem margin-bottom negativo, o comportamento padrão sticky já faz o overlap
                        }}
                    >
                        {/* Conteúdo do Card Mobile */}
                        <div className="flex-1 flex flex-col p-6 pt-24 md:p-12 md:pt-32 relative">
                            {/* Tag & Icon */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-primary w-5 h-5 flex items-center justify-center">
                                    <ServiceIcon name={mainCardIcons[i]} className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 font-grotesk">
                                    {card.tagText || "Especialidade"}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold font-grotesk uppercase leading-tight mb-4">
                                {card.title}
                            </h2>
                            <p className="text-sm md:text-lg opacity-70 leading-relaxed font-inter mb-8 max-w-md">
                                {card.description}
                            </p>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(card.whatsappMessage || `Olá! Vim pelo site e quero agendar um(a) ${card.title}.`);
                                    window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                }}
                                className='group flex items-center gap-3 py-3 px-6 bg-primary text-white rounded-xl font-bold font-grotesk text-xs uppercase tracking-widest hover:brightness-110 transition-all w-fit shadow-lg mb-8'
                            >
                                Agendar Consulta
                                <svg width='18' height='10' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z' fill='currentColor' />
                                </svg>
                            </button>

                            {/* Imagem Arredondada no fundo/base */}
                            <div className={`flex-1 w-full relative rounded-t-[32px] overflow-hidden mx-auto mt-auto 
                                ${i !== mainCards.length - 1 ? "shadow-inner border-t border-x border-black/5" : ""}
                                ${i === mainCards.length - 1 ? "rounded-b-[32px] mb-6" : ""}
                            `}>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <SecondaryServicesSection
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                features={features}
                secondaryServices={secondaryServices}
                secondaryServiceIcons={secondaryServiceIcons}
                infos={infos}
            />
        </section>
    );
};

// Componente compartilhado para serviços secundários (Accordion)
const SecondaryServicesSection: React.FC<any> = ({
    isExpanded, setIsExpanded, features, secondaryServices, secondaryServiceIcons, infos
}) => {
    return (
        <div className="relative z-[110] bg-slate-50/50 pb-24 border-none pt-24 md:pt-0">
            <div className="container-custom">
                <ScrollReveal className="flex justify-center mb-16">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group relative bg-black text-white px-10 py-5 md:px-12 md:py-6 rounded-xl font-grotesk font-bold text-lg md:text-xl uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-2xl"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            {isExpanded ? features.viewLessText : features.viewMoreText}
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <ChevronDown size={28} />
                            </motion.div>
                        </span>
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </ScrollReveal>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-4xl mx-auto space-y-3"
                        >
                            {secondaryServices.map((service: any, idx: number) => (
                                <ServiceAccordionItem
                                    key={idx}
                                    service={service}
                                    iconName={secondaryServiceIcons[idx]}
                                    infos={infos}
                                />
                            ))}

                            {/* CTA de Fechamento */}
                            <div className="pt-8 flex flex-col items-center">
                                <div className="bg-primary/5 border border-primary/10 p-6 md:p-8 rounded-[32px] w-full text-center relative overflow-hidden group">
                                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                                                <Plus size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-grotesk font-bold text-xl uppercase text-black">Pecisa de outro tratamento?</h4>
                                                <p className="text-neutral-500 text-sm">Nossa equipe está pronta para avaliar seu caso clinicamente.</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => window.open(`https://wa.me/${infos.whatsapp}`, '_blank')}
                                            className="bg-primary text-white px-10 py-4 rounded-xl font-bold font-grotesk uppercase text-xs hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
                                        >
                                            Falar com Consultor
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};


const Features: React.FC = () => {
    const { features } = content;
    // Detecção expandida para incluir tablets (< 1024px)
    const [isMobileOrTablet, setIsMobileOrTablet] = React.useState(false);

    React.useEffect(() => {
        const checkDevice = () => setIsMobileOrTablet(window.innerWidth < 1024);
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    if (!features.enabled) return null;

    return isMobileOrTablet ? <MobileFeatures /> : <DesktopFeatures />;
};

// Componente Interno para cada item do Accordion
const ServiceAccordionItem: React.FC<{ service: any, iconName: string, infos: any }> = ({ service, iconName, infos }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors",
                        isOpen ? "bg-primary text-white" : "bg-neutral-50 text-secondary"
                    )}>
                        <ServiceIcon name={iconName} className={cn("w-5 h-5 md:w-6 md:h-6", isOpen ? "text-white" : "text-primary")} />
                    </div>
                    <h4 className="font-grotesk font-bold text-lg md:text-xl text-black uppercase tracking-tight">
                        {service.title}
                    </h4>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={20} className="text-neutral-400" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 md:pl-[72px]">
                            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                                {service.description}
                            </p>
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(service.whatsappMessage || `Olá! Vim pelo site e gostaria de saber mais sobre ${service.title}.`);
                                    window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                }}
                                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold font-grotesk text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                            >
                                Chamar no WhatsApp <ChevronRight size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Features;
