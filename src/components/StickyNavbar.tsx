import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';
import { content } from '../Content';
import { WhatsappButton } from './ui/WhatsappButton';

const StickyNavbar: React.FC = () => {
    const { navbar, images, infos } = content;
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight - 100;
            setIsVisible(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuLinks = [
        { label: "Home", href: "#hero" },
        { label: "Sobre Nós", href: "#about" },
        { label: "Serviços", href: "#features" },
        { label: "Equipe", href: "#team" },
        { label: "Localização", href: "#location" },
        { label: "Contato", href: "#contact" },
    ];

    /**  🚀 NOVO: Scroll manual 100% confiável (mobile & desktop) */
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // impede o comportamento quebrado das âncoras
        setIsMobileMenuOpen(false);

        const targetId = href.replace('#', '');

        // Timeout para garantir que o menu feche e o layout estabilize antes do scroll
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                const yOffset = -90; // ajuste da altura da sticky navbar  
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: "smooth",
                });
            }
        }, 100);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed top-2 md:top-6 left-0 right-0 mx-auto w-[90%] max-w-5xl z-[1000] pointer-events-none"
                >
                    <motion.div
                        initial={false}
                        animate={{ height: "auto" }}
                        className="bg-[#1F1F1F] rounded-2xl p-3 shadow-2xl overflow-hidden pointer-events-auto border border-white/5 relative"
                    >
                        {/* 
                            COORDENAÇÃO DE ESPAÇAMENTO (DESKTOP):
                            - 'justify-between' no div abaixo distribui os 3 blocos (Logo, Menu, Botão) pelas extremidades.
                            - Para aumentar a distância global entre esses blocos, você pode trocar 'justify-between' por 'justify-center gap-20' (ou o valor que desejar).
                        */}
                        <div className="flex items-center justify-between">
                            {/* Logo Section */}
                            <a
                                href="#hero"
                                onClick={(e) => handleScrollTo(e, "#hero")}
                                className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity"
                            >
                                {images.logo ? (
                                    <img src={images.logo} alt={infos.name} className="h-6 brightness-0 invert" />
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white flex items-center justify-center rounded-lg">
                                            <FaTooth className="w-4 h-4 md:w-5 md:h-5" style={{ fill: 'black', stroke: 'white', strokeWidth: '2px' }} />
                                        </div>
                                        <span className="font-bebas text-3xl md:text-5xl text-white tracking-wide drop-shadow-lg">
                                            {navbar.logoText}
                                        </span>
                                    </div>
                                )}
                            </a>

                            {/* Desktop Nav 
                                AJUSTE: O 'gap-10' abaixo controla o espaçamento ENTRE os botões de seção (Home, Sobre, etc).
                                Aumente de 10 para 12, 16, etc., conforme necessário.
                            */}
                            <nav className="hidden md:flex items-center gap-4">
                                {menuLinks.filter(link => link.label !== "Contato").map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="text-sm font-bold text-gray-400 hover:text-primary transition-colors font-grotesk cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            {/* Desktop CTA */}
                            <WhatsappButton
                                onClick={() => {
                                    const message = encodeURIComponent(infos.defaultWhatsappMessage);
                                    window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
                                }}
                                text={navbar.ctaButtonText}
                                showIcon={false}
                                className="hidden md:flex bg-white text-black px-5 py-2.5 rounded-xl text-sm hover:bg-whatsapp-hover hover:text-whatsapp-text font-bold"
                            />

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black cursor-pointer z-50 relative pointer-events-auto"
                            >
                                {isMobileMenuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="md:hidden pt-4 pb-2 border-t border-white/10 mt-2"
                                >
                                    <nav className="flex flex-col gap-4 pl-2">
                                        {menuLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.href}
                                                onClick={(e) => handleScrollTo(e, link.href)}
                                                className="block w-full py-2 text-base font-bold text-gray-300 hover:text-white transition-colors font-grotesk cursor-pointer"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </nav>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default StickyNavbar;
