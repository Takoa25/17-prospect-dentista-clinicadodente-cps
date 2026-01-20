import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';

const FAQ: React.FC = () => {
    const { faq, infos } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!faq.enabled) return null;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleContactClick = () => {
        const message = encodeURIComponent(infos.defaultWhatsappMessage);
        window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <section className="w-full bg-white py-24 md:py-32" id="faq">
            <div className="container-custom">

                {/* Header Pill & Line - Global Section Header Style */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50">
                            {faq.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Content Stuck */}
                    <ScrollReveal className="flex flex-col items-start text-left gap-6 lg:sticky lg:top-32">
                        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.0] uppercase tracking-tight whitespace-pre-line">
                            {faq.headline}
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-md">
                            {faq.subHeadline}
                        </p>

                        <div className="flex justify-center lg:justify-start w-full">
                            <button
                                onClick={handleContactClick}
                                className="mt-4 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-text font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-all duration-300 group shadow-xl"
                            >
                                <span>{faq.buttonText}</span>
                                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Accordion Items (Keeping exact design as requested) */}
                    <div className="space-y-4 w-full">
                        {faq.items.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50"
                                        aria-expanded={openIndex === index}
                                    >
                                        <h3 className="font-grotesk font-bold text-lg text-neutral-900 pr-8">
                                            {item.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className="text-primary" size={24} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-2">
                                                    <p className="text-neutral-700 leading-relaxed text-base">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
