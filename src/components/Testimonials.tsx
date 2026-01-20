import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    const { testimonials, infos } = content;

    if (!testimonials.enabled) return null;

    // Duplicar items para efeito de loop infinito
    // Coluna 1 e 3: Cima para Baixo
    // Coluna 2: Baixo para Cima
    const items = [...testimonials.items, ...testimonials.items, ...testimonials.items];

    return (
        <section className="w-full bg-white py-24 md:py-32 overflow-hidden relative" id="testimonials">
            <style>{`
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-33.33%); }
                }
                @keyframes scrollDown {
                    0% { transform: translateY(-33.33%); }
                    100% { transform: translateY(0); }
                }
                .scroll-up {
                    animation: scrollUp 40s linear infinite;
                }
                .scroll-down {
                    animation: scrollDown 40s linear infinite;
                }
                /* Mobile: Apenas 1 coluna scrollando */
                .scroll-mobile {
                    animation: scrollUp 30s linear infinite;
                }
            `}</style>

            <div className="container-custom relative z-10">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50">
                            {testimonials.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>

                    <div className="flex flex-col items-start text-left gap-6 mb-16 max-w-4xl">
                        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight whitespace-pre-line">
                            {testimonials.headline}
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                            {testimonials.subtitle.replace('[Nome da Academia]', infos.name).replace('[Nome]', infos.name)}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Grid de Depoimentos com Máscara de Gradiente */}
                <div className="relative h-[600px] md:h-[800px] overflow-hidden">

                    {/* Gradient Overlay Top & Bottom */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

                        {/* Coluna 1 (Desktop Only) - Scroll Down */}
                        <div className="hidden md:flex flex-col gap-6 scroll-down">
                            {items.map((item, idx) => (
                                <TestimonialCard key={`col1-${idx}`} item={item} />
                            ))}
                        </div>

                        {/* Coluna 2 (Mobile & Desktop) - mobile only this one shows usually but we want full width mobile. 
                            Wait, user said "no mobile só deve ter uma coluna".
                            So I will hide col 1 and 3 on mobile.
                            This col 2 will be the only one on mobile.
                            Direction: Mobile -> Scroll Up (standard). Desktop -> Scroll Up.
                        */}
                        <div className="flex flex-col gap-6 scroll-mobile md:scroll-up">
                            {items.map((item, idx) => (
                                <TestimonialCard key={`col2-${idx}`} item={item} />
                            ))}
                        </div>

                        {/* Coluna 3 (Desktop Only) - Scroll Down */}
                        <div className="hidden md:flex flex-col gap-6 scroll-down">
                            {items.map((item, idx) => (
                                <TestimonialCard key={`col3-${idx}`} item={item} />
                            ))}
                        </div>

                    </div>
                </div>

                {/* Avatar Group Image (Optional decoration from reference, using generated circles if needed or omitted for clean look. Omitted based on specific copy constraints.) */}

            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{ item: any }> = ({ item }) => (
    <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-4 break-inside-avoid">
        <div className="flex gap-1 text-yellow-500">
            {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
        </div>
        <p className="text-neutral-700 leading-relaxed font-medium">
            "{item.content.replace('[Nome da Academia]', 'Academia').replace('[Nome]', 'Academia')}"
        </p>
        <div className="flex items-center gap-4 mt-2">
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <h4 className="font-bold text-black text-sm">{item.name}</h4>
                <p className="text-neutral-500 text-xs">{item.role}</p>
            </div>
        </div>
    </div>
);

export default Testimonials;
