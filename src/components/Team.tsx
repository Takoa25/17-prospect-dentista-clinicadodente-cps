import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { cn } from '../lib/utils';

const Team: React.FC = () => {
    const { team } = content;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    if (!team.enabled) return null;

    const members = team.members;

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % members.length);
    }, [members.length]);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    }, [members.length]);

    // Auto-slide effect
    React.useEffect(() => {
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
        <section className="w-full bg-white py-24 md:py-32 overflow-hidden" id="team">
            <div className="container-custom">
                {/* Header Full Width with Pill and Line */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50 text-nowrap">
                            {team.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    </div>

                    <div className="flex flex-col items-start text-left gap-6 mb-16 max-w-4xl">
                        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight whitespace-pre-line">
                            {team.headline}
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                            {team.subHeadline}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Desktop Grid (lg screen and above) */}
                <div className="hidden lg:grid grid-cols-3 gap-8 mx-auto">
                    {members.map((member, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                            <TeamMemberCard member={member} />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile/Tablet Carousel (Below lg screen) */}
                <div className="lg:hidden flex flex-col gap-6">
                    <ScrollReveal delay={0.2} className="relative aspect-[3/4] w-full rounded-[32px] overflow-hidden shadow-2xl bg-neutral-100 group">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
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
                                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                            >
                                <TeamMemberCard member={members[currentIndex]} isCarousel />
                            </motion.div>
                        </AnimatePresence>
                    </ScrollReveal>

                    {/* Navigation Arrows - Left-Aligned */}
                    <ScrollReveal delay={0.3} className="flex items-center gap-4 px-4">
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
            </div>
        </section>
    );
};

interface TeamMemberCardProps {
    member: any;
    isCarousel?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isCarousel }) => (
    <div className={cn("group relative w-full h-full rounded-[32px] overflow-hidden cursor-pointer", !isCarousel && "aspect-[3/4]")}>
        {/* Background Image with Scale Effect on Hover */}
        <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Glassmorphism Info Card at Bottom */}
        <div className="absolute bottom-4 left-4 right-4 p-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg transition-all duration-300 group-hover:bg-black/70 z-10">
            <h3 className="font-grotesk font-bold text-2xl text-white uppercase tracking-wide mb-1 transition-colors duration-300 group-hover:text-primary">
                {member.name}
            </h3>
            <p className="font-grotesk text-white/80 text-sm uppercase tracking-wider mb-1">
                {member.role}
            </p>
            {member.cro && (
                <p className="font-grotesk text-white/60 text-xs uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-primary/90 mt-1">
                    {member.cro}
                </p>
            )}
        </div>
    </div>
);

export default Team;
