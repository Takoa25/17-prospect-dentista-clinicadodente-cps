import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../Content';
import { WhatsappButton } from './ui/WhatsappButton';

const Hero: React.FC = () => {
    const { hero, images, infos, navbar } = content;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fecha o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    if (!hero.enabled) return null;

    /**
     * handleScrollTo:
     * - Gerencia o scroll manual para IDs de seção.
     * - Fecha o menu e rola suavemente com compensação para a navbar fixa.
     */
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Se não for link de âncora interno, deixa o navegador agir
        if (!href || !href.startsWith('#')) {
            setIsMenuOpen(false);
            return;
        }

        e.preventDefault();
        setIsMenuOpen(false);

        const targetId = href.replace('#', '');

        // Timeout para garantir que o menu feche e o layout estabilize antes do scroll
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <section
            className="relative w-full h-[100dvh] p-2 md:p-4 bg-white flex items-center justify-center overflow-hidden"
            id="hero"
        >
            {/* ========================================================================
             *  LAYER 1: NAVIGATION (ABSOLUTE TOP - Z-INDEX 1000)
             *  Fica FORA do container principal para evitar cortes de overflow/stacking.
             * ========================================================================= */}
            <nav className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-start p-4 md:p-8 lg:p-10 pointer-events-none">

                {/* 1. LEFT: MENU BUTTON (Pointer Events Auto para ser clicável) */}
                <div className="relative pointer-events-auto" ref={menuRef}>
                    <motion.div
                        initial={false}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="bg-white/20 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                    >
                        {/* Botão Principal "Menu" */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-full text-white px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-3 text-base font-medium hover:bg-white/10 transition-colors relative z-20 cursor-pointer"
                        >
                            <span className="font-grotesk font-bold">Menu</span>
                            {/* Ícone Customizado: 6 bolinhas */}
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-white/70">
                                <circle cx="5" cy="4" r="1.5" fill="currentColor" />
                                <circle cx="11" cy="4" r="1.5" fill="currentColor" />
                                <circle cx="5" cy="10" r="1.5" fill="currentColor" />
                                <circle cx="11" cy="10" r="1.5" fill="currentColor" />
                                <circle cx="5" cy="16" r="1.5" fill="currentColor" />
                                <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                            </svg>
                        </button>

                        {/* Dropdown Links */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    {[
                                        { label: "Home", href: "#hero" },
                                        { label: "Sobre Nós", href: "#about" },
                                        { label: "Serviços", href: "#features" },
                                        { label: "Equipe", href: "#team" },
                                        { label: "Localização", href: "#location" },
                                        { label: "Contato", href: "#contact" }
                                    ].map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.label === "Contato") {
                                                    e.preventDefault();
                                                    setIsMenuOpen(false);
                                                    const message = encodeURIComponent(infos.defaultWhatsappMessage);
                                                    window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                                } else {
                                                    handleScrollTo(e, link.href);
                                                }
                                            }}
                                            className="block px-4 md:px-6 py-3 text-white hover:bg-white/10 transition-colors font-grotesk cursor-pointer border-t border-white/5"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* 2. CENTER: LOGO (Pointer Events Auto) */}
                <a
                    href="#hero"
                    onClick={(e) => handleScrollTo(e, "#hero")}
                    className="pointer-events-auto flex items-center justify-center relative ml-auto mr-2 mt-1 md:mt-0 md:mr-0 md:self-auto md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-8 lg:top-10"
                >
                    {images.logo ? (
                        <img src={images.logo} alt={infos.name} className="h-10 md:h-12 object-contain" />
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white flex items-center justify-center rounded-lg">
                                <FaTooth className="w-4 h-4 md:w-5 md:h-5" style={{ fill: 'black', stroke: 'black', strokeWidth: '2px' }} />
                            </div>
                            <span className="font-bebas text-3xl md:text-5xl text-white tracking-wide drop-shadow-lg">
                                {navbar.logoText}
                            </span>
                        </div>
                    )}
                </a>

                {/* 3. RIGHT: CTA BUTTON (Desktop Only, Pointer Events Auto) */}
                <div className="hidden md:block pointer-events-auto">
                    <WhatsappButton
                        onClick={() => {
                            const message = encodeURIComponent(infos.defaultWhatsappMessage);
                            window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                        }}
                        text={navbar.ctaButtonText}
                        className="bg-white text-black px-5 py-2 md:px-7 md:py-3 rounded-xl text-sm pointer-events-auto cursor-pointer hover:bg-whatsapp-hover hover:text-whatsapp-text"
                    />
                </div>
            </nav>


            {/* ========================================================================
             *  LAYER 2: MAIN CARD CONTAINER (RELATIVE - Z-INDEX 10)
             * ========================================================================= */}
            <div className="relative w-full h-full mx-auto bg-neutral-900 rounded-[20px] md:rounded-[32px] overflow-hidden">

                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full z-0"
                >
                    <picture>
                        <source media="(min-width: 768px)" srcSet={images.hero.backgroundDesktop} />
                        <img
                            src={images.hero.backgroundMobile}
                            alt="Hero Background"
                            className="w-full h-full object-cover object-center"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>


                <div className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none pb-10 md:pb-14 px-4 md:px-12 lg:px-20">
                    <div className="w-full flex flex-col justify-end pointer-events-auto">
                        <div className="relative mb-6 md:mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
                            >
                                <div className="flex -space-x-3 md:-space-x-4">
                                    {images.testimonials.slice(0, hero.badge.avatars).map((avatar, i) => (
                                        <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-[3px] border-white/20 overflow-hidden relative z-0 hover:z-10 transition-all hover:scale-110">
                                            <img src={avatar} alt="Member" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-white drop-shadow-md">
                                    <p className="font-grotesk font-bold text-sm md:text-xl uppercase tracking-wider">
                                        {hero.badge.memberCount}
                                    </p>
                                    <p className="font-grotesk text-sm md:text-sm text-gray-200">
                                        {hero.badge.subtitle}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-inter font-bold text-[10vw] md:text-[5vw] lg:text-[90px] xl:text-[90px] leading-[0.85] text-white tracking-tight break-words whitespace-pre-line"
                            >
                                {hero.headline.line1}
                            </motion.h1>

                            <div className="relative mt-2 md:mt-3">
                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="font-inter font-bold text-[10vw] md:text-[5vw] lg:text-[90px] xl:text-[90px] leading-[0.85] text-white tracking-tight break-words whitespace-pre-line"
                                >
                                    {hero.headline.line2}
                                </motion.h1>
                            </div>

                            <div className="relative mt-2 md:mt-3">
                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="font-inter font-bold text-[10vw] md:text-[5vw] lg:text-[90px] xl:text-[90px] leading-[0.85] text-white tracking-tight break-words whitespace-pre-line"
                                >
                                    {hero.headline.line3}
                                </motion.h1>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="grid grid-cols-2 gap-3 md:flex md:flex-row md:gap-4 md:items-start max-w-2xl"
                        >
                            <div className="flex flex-col gap-3">
                                {/* 
                                    AJUSTE DE FONTE DO BOTÃO (MOBILE):
                                    - No 'className' abaixo, 'text-xs' (12px) controla o tamanho no mobile.
                                    - Se quiser aumentar, use 'text-sm' (14px).
                                    - Se quiser diminuir ainda mais, use 'text-[10px]'.
                                    - Ajuste 'px-4' (padding lateral) para dar mais espaço ao texto.
                                */}
                                <WhatsappButton
                                    onClick={() => {
                                        const message = encodeURIComponent(infos.defaultWhatsappMessage);
                                        window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                    }}
                                    text={hero.ctaPrimary.text}
                                    className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-text px-4 md:px-8 py-4 md:py-5 rounded-xl transition-all hover:scale-105 text-sm md:text-base"
                                />
                                {/* Mobile Stat 1 */}
                                <div className="md:hidden">
                                    <p className="font-bebas text-xl text-white">{hero.bottomStats[0].value}</p>
                                    <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wide leading-tight">
                                        {hero.bottomStats[0].label}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={hero.ctaSecondary.link}
                                    onClick={(e) => handleScrollTo(e, hero.ctaSecondary.link)}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 md:px-8 py-4 md:py-5 rounded-xl flex items-center justify-center gap-2 md:gap-3 font-bold font-grotesk text-sm md:text-base uppercase tracking-wide hover:bg-white/20 transition-all font-grotesk"
                                >
                                    {hero.ctaSecondary.text}
                                </a>
                                <div className="md:hidden">
                                    <p className="font-bebas text-xl text-white">{hero.bottomStats[1].value}</p>
                                    <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wide leading-tight">
                                        {hero.bottomStats[1].label}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 md:bottom-14 right-8 md:right-12 lg:right-20 hidden md:flex gap-12 lg:gap-16 text-white pointer-events-auto">
                        {hero.bottomStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + (index * 0.1) }}
                            >
                                <h4 className="font-bebas text-4xl mb-1">{stat.value}</h4>
                                <p className="text-xs text-gray-300 font-bold uppercase tracking-wide max-w-[100px] leading-tight">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
