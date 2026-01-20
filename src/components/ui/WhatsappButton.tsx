import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface WhatsappButtonProps {
    className?: string;
    onClick?: () => void;
    text: string;
    pulse?: boolean;
    showIcon?: boolean;
}

export function WhatsappButton({ className, onClick, text, pulse = false, showIcon = true }: WhatsappButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={pulse ? {
                scale: [1, 1.05, 1],
            } : {}}
            transition={pulse ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            } : {}}
            className={cn(
                "group relative overflow-hidden transition-all duration-300 ease-out transform active:scale-95 shadow-lg hover:shadow-xl",
                className
            )}
        >
            {pulse && (
                <motion.div
                    animate={{
                        scale: [1, 1.2],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0 bg-white/30 rounded-inherit pointer-events-none"
                />
            )}
            <div className="relative flex items-center justify-center gap-3 z-10">
                {/* Ícone: Escondido no mobile (hidden), visível no desktop (md:flex) */}
                {showIcon && (
                    <span className="relative hidden md:flex items-center justify-center" style={{ width: 20, height: 20 }}>
                        <motion.span
                            initial={false}
                            animate={isHovered ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <FaWhatsapp size={20} />
                        </motion.span>
                        <motion.span
                            initial={false}
                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <FaWhatsapp size={20} />
                        </motion.span>
                    </span>
                )}

                {/* Text with subtle shift */}
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 uppercase font-bold font-grotesk tracking-wide">
                    {text}
                </span>
            </div>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-out"
                />
            </div>
        </motion.button>
    );
}
