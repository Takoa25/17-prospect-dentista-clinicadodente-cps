import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Heart, Coffee } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
import { content } from '../Content';

interface FooterProps {
    onPrivacyClick: () => void;
    onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
    const { footer, infos, navbar, images } = content;

    const handlePolicyClick = (e: React.MouseEvent, label: string) => {
        e.preventDefault();
        if (label === "Política de Privacidade") {
            onPrivacyClick();
        } else if (label === "Termos de Uso") {
            onTermsClick();
        }
    };
    // ... (skipping some lines)
    // inside the map:
    {
        footer.policies.map((policy, index) => (
            <a
                key={index}
                href={policy.href}
                onClick={(e) => handlePolicyClick(e, policy.label)}
                className="text-neutral-500 hover:text-primary transition-colors cursor-pointer"
            >
                {policy.label}
            </a>
        ))
    }

    if (!footer.enabled) return null;

    const socialIcons = {
        instagram: Instagram,
        facebook: Facebook,
        youtube: Youtube,
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const message = encodeURIComponent(infos.defaultWhatsappMessage);
        window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <footer className="w-full bg-black text-white pt-24 pb-12 relative z-10" id="contact">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#hero" className="flex items-center gap-3 mb-6 group hover:opacity-80 transition-opacity">
                            {images.logo ? (
                                <img src={images.logo} alt={infos.name} className="h-8 object-contain" />
                            ) : (
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                                        <FaTooth className="w-5 h-5" style={{ fill: 'black', stroke: 'black', strokeWidth: '2px' }} />
                                    </div>
                                    <span className="font-bebas text-4xl text-white tracking-wide">
                                        {navbar.logoText}
                                    </span>
                                </div>
                            )}
                        </a>
                        <p className="text-neutral-400 leading-relaxed max-w-md mb-6">
                            {footer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {Object.entries(footer.socialLinks).map(([platform, url]) => {
                                if (!url) return null;
                                const Icon = socialIcons[platform as keyof typeof socialIcons];
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary flex items-center justify-center transition-colors group"
                                        aria-label={platform}
                                    >
                                        <Icon size={20} className="text-white group-hover:text-black transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-grotesk font-bold text-white text-lg mb-6">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-3">
                            {footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.label === "Contato") handleContactClick(e);
                                            // Se tiver algum link de política aqui também
                                        }}
                                        className="text-neutral-400 hover:text-primary transition-colors font-inter cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-grotesk font-bold text-white text-lg mb-6">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                <a
                                    href={infos.mapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-primary transition-colors text-sm"
                                >
                                    {infos.address}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink" />
                                <a
                                    href={`tel:${infos.phone.replace(/\D/g, '')}`}
                                    className="text-neutral-400 hover:text-primary transition-colors text-sm"
                                >
                                    {infos.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <a
                                    href={`mailto:${infos.email}`}
                                    className="text-neutral-400 hover:text-primary transition-colors text-sm"
                                >
                                    {infos.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-neutral-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} {infos.name}. {footer.copyright}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            {footer.policies.map((policy, index) => (
                                <a
                                    key={index}
                                    href={policy.href}
                                    onClick={(e) => handlePolicyClick(e, policy.label)}
                                    className="text-neutral-500 hover:text-primary transition-colors cursor-pointer"
                                >
                                    {policy.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <div className="text-neutral-600 text-xs flex items-center justify-center gap-1.5 font-medium">
                            <span>Desenvolvido com</span>
                            <Heart size={13} className="text-red-500 fill-red-500" />
                            <span>&</span>
                            <GiCoffeeCup size={15} className="text-amber-600" />
                            <span>pela</span>
                            <a
                                href={footer.developerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 hover:text-primary font-bold transition-colors"
                            >
                                {footer.developerName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
