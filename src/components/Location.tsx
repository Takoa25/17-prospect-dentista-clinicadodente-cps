import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { MapPin, Clock, ChevronRight } from 'lucide-react';

// Subcomponente para isolar lógica de IntersectionObserver e evitar re-renders desnecessários do pai
const MapContainer = ({
    isMapInteractive,
    setIsMapInteractive,
    infos
}: {
    isMapInteractive: boolean,
    setIsMapInteractive: (v: boolean) => void,
    infos: any
}) => {
    const mapRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se o mapa sair COMPLETAMENTE da tela (visibilidade < 10%), reativa a proteção
                if (!entry.isIntersecting) {
                    setIsMapInteractive(false);
                }
            },
            { threshold: 0.1 } // 10% visível
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, [setIsMapInteractive]);

    return (
        <div
            ref={mapRef}
            className="h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-sm border border-neutral-200 relative group"
        >
            {/* Overlay de Proteção (Apenas Mobile/Tablet - Hidden no Desktop) */}
            <div
                className={`lg:hidden absolute inset-0 z-10 flex items-center justify-center bg-black/5 transition-opacity duration-300 ${isMapInteractive ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'}`}
                onClick={() => setIsMapInteractive(true)}
                onTouchStart={() => {
                    // Deixa o scroll nativo ocorrer se não estiver interativo
                }}
            >
                <span className={`bg-black/90 backdrop-blur text-white font-grotesk font-bold px-4 py-2 rounded-full shadow-lg text-sm transition-transform transform ${isMapInteractive ? 'scale-90' : 'scale-100'}`}>
                    Clique para interagir
                </span>
            </div>

            <iframe
                src={infos.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full transition-all duration-500 ${isMapInteractive ? 'pointer-events-auto grayscale-0' : 'pointer-events-none grayscale lg:pointer-events-auto lg:grayscale-0'}`}
                title="Localização da Clínica"
            ></iframe>
        </div>
    );
};

const Location: React.FC = () => {
    const { location, infos, faq } = content;
    const [isMapInteractive, setIsMapInteractive] = React.useState(false);

    if (!location.enabled) return null;

    const handleContactClick = () => {
        const message = encodeURIComponent(infos.defaultWhatsappMessage);
        window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <section className="w-full bg-white py-24 md:py-32 overflow-hidden" id="location">
            <div className="container-custom">
                <ScrollReveal>
                    {/* Header Full Width with Pill and Line */}
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-white">
                            {location.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Infos Column */}
                    <ScrollReveal>
                        <div className="flex flex-col">
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-8 uppercase tracking-tight text-left">
                                {location.title}
                            </h2>
                            <p className="text-neutral-500 text-lg mb-10 leading-relaxed text-left">
                                {location.description}
                            </p>

                            <div className="space-y-8 w-full">
                                {/* Address (Clickable Link) */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-grotesk font-bold text-black text-xl mb-1">Endereço</h4>
                                        <a
                                            href={infos.mapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-600 leading-relaxed font-medium hover:text-primary transition-colors cursor-pointer block"
                                        >
                                            {infos.address}
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div className="w-full max-w-sm">
                                        <h4 className="font-grotesk font-bold text-black text-xl mb-2">Horários</h4>
                                        <ul className="space-y-2">
                                            {location.hours.map((h, i) => (
                                                <li key={i} className="text-neutral-600 flex justify-between items-center w-full border-b border-neutral-100 last:border-0 pb-1 last:pb-0">
                                                    <span className="font-medium">{h.label}</span>
                                                    <span className="font-bold text-black">{h.time}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Contact Button (Replaces Text Info) */}
                                <div className="pt-4 flex justify-center lg:justify-start w-full">
                                    <button
                                        onClick={handleContactClick}
                                        className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-text font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-all duration-300 group shadow-xl"
                                    >
                                        <span>{faq.buttonText}</span>
                                        <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Map Column */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <MapContainer
                            isMapInteractive={isMapInteractive}
                            setIsMapInteractive={setIsMapInteractive}
                            infos={infos}
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Location;
