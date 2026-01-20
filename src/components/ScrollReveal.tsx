import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Detectar mobile imediatamente (não esperar useEffect)
    const checkIsMobile = () => {
        return typeof window !== 'undefined' && window.innerWidth < 768;
    };

    const [isMobile, setIsMobile] = useState(checkIsMobile());

    useEffect(() => {
        // Atualiza mobile detection em resize
        const handleResize = () => {
            setIsMobile(checkIsMobile());
        };

        // Força check inicial
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                }
            },
            {
                // 🥉 ESTRATÉGIA 3: Observer menos sensível no mobile
                // Mobile: threshold médio (15% visível) - não muito alto para funcionar no DevTools
                // Desktop: threshold menor (10% visível) com margem negativa
                threshold: isMobile ? 0.15 : 0.1,
                rootMargin: isMobile ? '0px' : '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated, isMobile]);

    // 🥈 ESTRATÉGIA 2: Mobile usa apenas opacity (SEM translateY/translateX)
    // Desktop mantém as animações com transform
    const variants = {
        hidden: {
            opacity: 0,
            // No mobile: APENAS opacity (sem transforms)
            // No desktop: opacity + translateY/translateX
            ...(isMobile ? {} : {
                y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
                x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
            })
        },
        visible: {
            opacity: 1,
            ...(isMobile ? {} : {
                y: 0,
                x: 0,
            }),
            transition: {
                // Mobile: animação mais rápida (0.4s)
                // Desktop: animação padrão (0.6s)
                duration: isMobile ? 0.4 : 0.6,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        },
    };

    // 🥇 ESTRATÉGIA 1: Remover transform completamente ao final da animação
    // Isso faz o elemento voltar ao fluxo normal do CSS
    // Evita que iOS continue recalculando posição durante scroll
    const handleAnimationComplete = () => {
        setHasAnimated(true);

        // Remove forçadamente qualquer transform aplicado
        if (ref.current) {
            ref.current.style.transform = 'none';
            ref.current.style.opacity = '1';

            // Remove will-change para melhor performance
            ref.current.style.willChange = 'auto';
        }
    };

    // Se já animou: renderiza elemento estático sem motion
    // Isso é mais performático e evita qualquer recálculo
    if (hasAnimated) {
        return (
            <div
                ref={ref}
                className={className}
                style={{
                    opacity: 1,
                    transform: 'none',
                    willChange: 'auto'
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={variants}
            onAnimationComplete={handleAnimationComplete}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
