import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const BeforeAfter: React.FC = () => {
    const { beforeAfter } = content;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    if (!beforeAfter.enabled) return null;

    const images = beforeAfter.images;

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            slideNext();
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, [slideNext]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section className="w-full bg-white py-24 md:py-32 overflow-hidden" id="results">
            <div className="container-custom">
                {/* Header (Pill + Line) */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50 text-nowrap">
                            {beforeAfter.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Mobile Title (Appears only on mobile at the top of the grid) */}
                    <div className="lg:hidden order-1">
                        <ScrollReveal>
                            <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-black leading-tight uppercase tracking-tight">
                                {beforeAfter.headline}
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Column 1: Carousel & Arrows */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6">
                        <ScrollReveal delay={0.2} className="relative aspect-[615/615] w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl bg-neutral-100 group">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.4 },
                                        scale: { duration: 0.4 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x > 50) slidePrev();
                                        else if (info.offset.x < -50) slideNext();
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                                    alt={`Resultado ${currentIndex + 1}`}
                                />
                            </AnimatePresence>

                        </ScrollReveal>

                        {/* Navigation Arrows - Moved below and Left-Aligned */}
                        <ScrollReveal delay={0.3} className="flex items-center gap-4">
                            <button
                                onClick={slidePrev}
                                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all active:scale-95"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={24} strokeWidth={2.5} />
                            </button>
                            <button
                                onClick={slideNext}
                                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all active:scale-95"
                                aria-label="Próximo"
                            >
                                <ChevronRight size={24} strokeWidth={2.5} />
                            </button>
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Text Context (Desktop & Tablet) */}
                    <div className="hidden lg:flex flex-col gap-8 order-1 lg:order-2">
                        <ScrollReveal>
                            <h2 className="font-grotesk text-5xl xl:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight">
                                {beforeAfter.headline}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-xl">
                                {beforeAfter.description}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="flex items-center gap-4 py-6 border-t border-neutral-100 mt-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <ChevronRight size={24} />
                                </div>
                                <p className="text-black font-bold font-grotesk text-sm uppercase tracking-wider">
                                    Resultados podem variar de acordo com as condições individuais de cada paciente.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Mobile Stats/Small Text (Appears only on mobile below carousel) */}
                    <div className="lg:hidden order-3 px-4">
                        <ScrollReveal delay={0.4}>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                                {beforeAfter.description}
                            </p>

                            <div className="flex items-center gap-4 py-6 border-t border-neutral-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <ChevronRight size={20} />
                                </div>
                                <p className="text-black font-bold font-grotesk text-xs md:text-sm uppercase tracking-wider flex-1">
                                    Resultados podem variar de acordo com as condições individuais de cada paciente.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
