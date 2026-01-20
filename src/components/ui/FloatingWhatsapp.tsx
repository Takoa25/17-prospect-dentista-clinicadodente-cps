import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { content } from '../../Content';

export const FloatingWhatsapp: React.FC = () => {
    const { infos, colors } = content;

    const handleClick = () => {
        const message = encodeURIComponent(infos.defaultWhatsappMessage);
        window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999] md:bottom-10 md:right-10 pointer-events-auto">
            <motion.button
                onClick={handleClick}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] cursor-pointer overflow-visible group"
                style={{ backgroundColor: colors.whatsapp }}
            >
                {/* 
                    CORREÇÃO DA ANIMAÇÃO:
                    Para evitar o "estouro" no reinício, a opacidade deve começar em 0,
                    subir e voltar para 0. Assim a transição no loop é invisível.
                */}

                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            /* 
                                💡 AJUSTE DE EXPANSÃO: 
                                O segundo valor do array 'scale' controla até onde a onda cresce.
                                [1, 1.5] -> onda discreta (atual)
                                [1, 2.0] -> onda grande
                                [1, 1.2] -> onda bem curta
                            */
                            scale: [1, 1.6],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1, // Stagger de 1 segundo entre as ondas
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: colors.whatsapp }}
                    />
                ))}

                <FaWhatsapp className="relative z-10 w-7 h-7 md:w-8 md:h-8" />

                {/* Tooltip on hover (Desktop) */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl border border-slate-100 whitespace-nowrap font-grotesk font-bold text-xs uppercase tracking-widest">
                        Agende sua consulta
                    </div>
                </div>
            </motion.button>
        </div>
    );
};
