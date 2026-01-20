import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { Smile, ShieldCheck, Sparkles, LucideIcon } from 'lucide-react';

const IconMap: { [key: string]: LucideIcon } = {
    Smile,
    ShieldCheck,
    Sparkles
};

const About: React.FC = () => {
    const { about, images, infos } = content;

    if (!about.enabled) return null;

    return (
        <section className="w-full bg-white py-24 md:py-32" id="about">
            <div className="container-custom">
                {/* Header Full Width with Pill and Line */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50">
                            {about.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left Column: Content */}
                    <div className="order-1 flex flex-col justify-center">
                        <ScrollReveal>
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-8 uppercase tracking-tight">
                                {about.headline}
                            </h2>
                            <p className="text-neutral-500 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                                {about.description}
                            </p>
                        </ScrollReveal>

                        {/* Feature List */}
                        <div className="space-y-8">
                            {about.features.map((feature, index) => {
                                const Icon = IconMap[feature.icon || ""] || Smile;
                                return (
                                    <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                                        <div className="flex gap-5">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform hover:scale-110">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-grotesk font-bold text-black text-xl uppercase tracking-wide mb-2">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-neutral-500 text-base leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="order-2 relative h-full min-h-[500px] lg:min-h-[600px]">
                        <ScrollReveal direction="right" delay={0.2} className="h-full">
                            <div className="relative w-full h-full rounded-[32px] overflow-hidden group shadow-2xl">
                                <img
                                    src={images.about.main}
                                    alt={about.headline}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay / Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                {/* Bottom Text Overlay (MiniAddress) */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-center">
                                    <h3 className="font-bebas text-4xl md:text-5xl text-white uppercase tracking-wider mb-2">
                                        {infos.name}
                                    </h3>
                                    <p className="font-grotesk text-white/80 text-sm md:text-base uppercase tracking-widest">
                                        {infos.miniAddress}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
