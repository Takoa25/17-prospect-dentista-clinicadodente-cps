import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyNavbar from './components/StickyNavbar';
import { FloatingWhatsapp } from './components/ui/FloatingWhatsapp';
import { content } from './Content';

interface MainPageProps {
    onNavigateToPrivacy: () => void;
    onNavigateToTerms: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onNavigateToPrivacy, onNavigateToTerms }) => {
    // Inject CSS color variables dynamically from Content.ts & Reset Scroll
    useEffect(() => {
        window.scrollTo(0, 0);
        const root = document.documentElement;
        root.style.setProperty('--color-primary', content.colors.primary);
        root.style.setProperty('--color-primary-dark', content.colors.primaryDark);
        root.style.setProperty('--color-secondary', content.colors.secondary);
        root.style.setProperty('--color-background', content.colors.background);
        root.style.setProperty('--color-text', content.colors.text);
        root.style.setProperty('--color-text-muted', content.colors.textMuted);
        root.style.setProperty('--color-accent', content.colors.accent);
        root.style.setProperty('--color-whatsapp', content.colors.whatsapp);
        root.style.setProperty('--color-whatsapp-hover', content.colors.whatsappHover);
        root.style.setProperty('--color-whatsapp-text', content.colors.whatsappText);
    }, []);

    return (
        <HelmetProvider>
            <ReactLenis root options={{
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 2.0, // Reduzido para dar sensação de "peso" e controle
                lerp: 0.1, // Levemente reduzido para mais suavidade
                duration: 1.2,
                wheelMultiplier: 1.2
            }}>
                <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-black">
                    <SEO />
                    <StickyNavbar />
                    <main>
                        <Hero />
                        <BeforeAfter />
                        <About />
                        <Features />
                        <Team />
                        <Testimonials />
                        <FAQ />
                        <Location />
                    </main>
                    <Footer onPrivacyClick={onNavigateToPrivacy} onTermsClick={onNavigateToTerms} />
                    <FloatingWhatsapp />
                </div>
            </ReactLenis>
        </HelmetProvider>
    );
};

export default MainPage;
