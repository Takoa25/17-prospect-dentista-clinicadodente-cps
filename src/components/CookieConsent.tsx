import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, X, ChevronDown, Check, Settings, Info } from 'lucide-react';
import { cn } from '../lib/utils';
import { content } from '../Content';

interface CookieConsentProps {
    onPrivacyClick: () => void;
}

type CookieCategories = {
    necessary: boolean;
    marketing: boolean;
    statistics: boolean;
};

const CookieConsent: React.FC<CookieConsentProps> = ({ onPrivacyClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState<CookieCategories>({
        necessary: true, // Always true and disabled
        marketing: false,
        statistics: false,
    });

    useEffect(() => {
        const storedConsent = localStorage.getItem('cookieConsent');
        if (!storedConsent) {
            // Delay slightly to not jar the user immediately on load? 
            // Or show immediately. Design choice. Let's show immediately as per previous behavior.
            setIsVisible(true);
        } else {
            // Optional: Load saved preferences to state if we want to allow re-opening (future feature)
            // const parsed = JSON.parse(storedConsent);
            // setPreferences(parsed.categories);
        }
    }, []);

    const saveConsent = (categories: CookieCategories) => {
        const consentData = {
            consent: true,
            timestamp: new Date().toISOString(),
            categories: categories
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));

        // Here you would trigger your GTM or Pixel scripts based on categories
        // if (categories.marketing) { ... }

        setIsVisible(false);
        setShowPreferences(false);
    };

    const handleAcceptAll = () => {
        const allAccepted = { necessary: true, marketing: true, statistics: true };
        setPreferences(allAccepted);
        saveConsent(allAccepted);
    };

    const handleDeny = () => {
        const denied = { necessary: true, marketing: false, statistics: false };
        setPreferences(denied);
        saveConsent(denied);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const togglePreference = (key: keyof CookieCategories) => {
        if (key === 'necessary') return; // Cannot toggle essential
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-0 left-0 w-full z-[9999] p-4 md:pb-10 flex justify-center items-end pointer-events-none">
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        className="bg-white pointer-events-auto w-full max-w-4xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* HEADER - Main Consent Message */}
                        {!showPreferences ? (
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                                <div className="flex gap-5 flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-gray-900 leading-none font-grotesk">Sua privacidade é nossa prioridade</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Utilizamos cookies para melhorar sua experiência, analisar o tráfego e fornecer conteúdo personalizado.
                                            Você pode aceitar todos ou gerenciar suas preferências abaixo.
                                            Leia nossa <button onClick={onPrivacyClick} className="text-primary hover:underline font-medium">Política de Privacidade</button>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primaryDark transition-all shadow-lg shadow-primary/25 transform active:scale-95"
                                    >
                                        Aceitar Todos
                                    </button>
                                    <button
                                        onClick={handleDeny}
                                        className="px-6 py-3 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        Negar
                                    </button>
                                    <button
                                        onClick={() => setShowPreferences(true)}
                                        className="px-6 py-3 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        Preferências
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* PREFERENCES PANEL */
                            <div className="flex flex-col h-full">
                                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                                    <h3 className="text-lg font-bold text-gray-900 font-grotesk flex items-center gap-2">
                                        <Settings size={18} />
                                        Preferências de Cookies
                                    </h3>
                                    <button
                                        onClick={() => setShowPreferences(false)}
                                        className="text-gray-400 hover:text-gray-600 p-1"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 overflow-y-auto space-y-4">
                                    <p className="text-sm text-gray-500 mb-6">
                                        Gerencie suas preferências de consentimento por categoria. Cookies essenciais são necessários para o funcionamento básico do site e não podem ser desativados.
                                    </p>

                                    {/* Essential */}
                                    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 opacity-80 cursor-not-allowed">
                                        <div className="pt-0.5">
                                            <div className="w-5 h-5 bg-primary rounded border border-primary flex items-center justify-center text-white">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-bold text-gray-900 text-sm">Estritamente Necessários</h4>
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Sempre Ativo</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Obrigatórios para o site funcionar (segurança, login, consentimento).</p>
                                        </div>
                                    </div>

                                    {/* Marketing */}
                                    <div
                                        className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/30 transition-colors cursor-pointer"
                                        onClick={() => togglePreference('marketing')}
                                    >
                                        <div className="pt-0.5 relative">
                                            <div className={cn(
                                                "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                                preferences.marketing ? "bg-primary border-primary text-white" : "bg-white border-gray-300"
                                            )}>
                                                {preferences.marketing && <Check size={14} strokeWidth={3} />}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Marketing & Publicidade</h4>
                                            <p className="text-xs text-gray-500">Usados para exibir anúncios relevantes e medir eficácia de campanhas.</p>
                                        </div>
                                    </div>

                                    {/* Statistics */}
                                    <div
                                        className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary/30 transition-colors cursor-pointer"
                                        onClick={() => togglePreference('statistics')}
                                    >
                                        <div className="pt-0.5 relative">
                                            <div className={cn(
                                                "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                                preferences.statistics ? "bg-primary border-primary text-white" : "bg-white border-gray-300"
                                            )}>
                                                {preferences.statistics && <Check size={14} strokeWidth={3} />}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">Estatísticas & Analytics</h4>
                                            <p className="text-xs text-gray-500">Nos ajudam a entender como os visitantes interagem com o site.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-100 bg-gray-50/30 flex justify-end gap-3 rounded-b-2xl">
                                    <button
                                        onClick={handleDeny}
                                        className="px-5 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                    >
                                        Rejeitar
                                    </button>
                                    <button
                                        onClick={handleSavePreferences}
                                        className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primaryDark transition-all shadow-md shadow-primary/20"
                                    >
                                        Salvar
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
