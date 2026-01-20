import React, { useEffect } from 'react';
import { content } from '../Content';
import { ArrowLeft, ArrowUp } from 'lucide-react';

interface TermsOfUseProps {
    onBack: () => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
    const { infos, seo } = content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-primary selection:text-white">
            {/* Header Navigation */}
            <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100 z-50 h-16 md:h-20 flex items-center">
                <div className="container-custom flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors font-medium group"
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-sm md:text-base">Voltar para o Início</span>
                    </button>
                </div>
            </header>

            <main className="container-custom pt-40 md:pt-36 pb-24 max-w-4xl mx-auto font-inter text-slate-600">

                <h1 className="font-grotesk font-bold text-slate-900 text-3xl md:text-5xl mb-8 md:mb-12 mt-20 md:mt-0 leading-tight">
                    Termos de Uso e Serviço
                </h1>

                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Seja Bem-Vindo ao site da <strong>{infos.name}</strong>. Antes de explorar tudo o que temos a oferecer, é importante que você entenda e concorde com algumas regras básicas que regem o uso do nosso site <a href={seo.domain} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{seo.domain.replace('https://', '')}</a>, e qualquer outro serviço digital que nós oferecemos, como lojas e plataformas de e-commerce.
                </p>

                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Ao usar nosso site e serviços, você automaticamente concorda em seguir as regras que estabelecemos aqui. Caso não concorde com algo, por favor, considere não usar nossos serviços. É muito importante para nós que você se sinta seguro e informado a todo momento.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">1. Aceitando os Termos</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Ao navegar e usar o site da <strong>{infos.name}</strong>, você concorda automaticamente com nossas regras e condições. Estamos sempre procurando melhorar, então esses termos podem mudar de vez em quando. Se fizermos alterações significativas, vamos postar as atualizações aqui no site. Continuar usando o site após essas mudanças significa que você aceita os novos termos.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">2. Como Usar o Nosso Site</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    A maior parte do nosso site está aberta para você sem a necessidade de cadastro. No entanto, algumas seções especiais podem exigir que você crie uma conta. Pedimos que você seja honesto ao fornecer suas informações e que mantenha sua senha e login seguros. Se decidir compartilhar algum conteúdo conosco, como comentários, por favor, faça-o de maneira respeitosa e dentro da lei.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">3. Sua Privacidade</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Na <strong>{infos.name}</strong>, a privacidade é um valor essencial. Ao interagir com nosso site, você aceita nossa Política de Privacidade, que detalha nossa abordagem responsável e conforme às leis para o manejo dos seus dados pessoais. Nosso compromisso é com a transparência e a segurança: explicamos como coletamos, usamos e protegemos suas informações, garantindo sua privacidade e oferecendo controle sobre seus dados.
                </p>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Adotamos práticas de segurança para proteger suas informações contra acesso não autorizado e compartilhamento indevido, assegurando que qualquer cooperação com terceiros ocorra apenas com base na sua aprovação ou exigências legais claras, reafirmando nosso comprometimento com a sua confiança e segurança digital.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">4. Direitos de Conteúdo</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    O conteúdo disponível no site da <strong>{infos.name}</strong>, incluindo, mas não se limitando a, textos, imagens, ilustrações, designs, ícones, fotografias, programas de computador, videoclipes e áudios, constitui propriedade intelectual protegida tanto pela legislação nacional quanto por tratados internacionais sobre direitos autorais e propriedade industrial. Essa propriedade engloba não apenas materiais diretamente produzidos e publicados por nós, mas também conteúdos que são utilizados sob licença ou permissão de terceiros, garantindo que todos os direitos sejam respeitados conforme as normativas vigentes.
                </p>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Ao acessar nosso site, você recebe uma licença limitada, não exclusiva e revogável para visualizar e usar o conteúdo para fins pessoais e não comerciais. Isso implica que qualquer reprodução, distribuição, transmissão ou modificação do conteúdo, sem a devida autorização escrita da <strong>{infos.name}</strong>, é estritamente proibida. Tal restrição visa proteger os direitos de propriedade intelectual associados aos materiais disponibilizados, assegurando que sua utilização não infrinja os direitos dos criadores ou detentores desses direitos, além de promover um ambiente de respeito e valorização da criatividade e inovação.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">5. Cookies e Mais</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência, coletando informações anônimas durante sua visita, como suas preferências de idioma, duração da visita, páginas acessadas, e outras estatísticas de uso. Esses dados nos ajudam a personalizar seu conteúdo, otimizar a navegação, melhorar continuamente o site em design e funcionalidade, e garantir sua segurança online. Esta prática é essencial para nos permitir oferecer um serviço mais ajustado às suas necessidades e resolver qualquer problema que possa surgir mais rapidamente.
                </p>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Se você preferir limitar ou recusar o uso de cookies, a configuração pode ser ajustada através do seu navegador. Isso pode afetar a sua experiência no site, pois algumas funcionalidades dependem dos cookies para funcionar corretamente. Entendemos a importância do controle sobre suas informações e queremos que você saiba que, ao ajustar as configurações para bloquear cookies, algumas partes do nosso site podem não oferecer a experiência completa pretendida.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">6. Explorando Links Externos</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Nosso site pode incluir links para sites externos que achamos que podem ser do seu interesse. Note que não temos controle sobre esses sites externos e, portanto, não somos responsáveis pelo seu conteúdo ou políticas.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">7. Mudanças e Atualizações</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    A evolução é parte de como operamos, o que significa que estes Termos de Uso podem passar por atualizações para refletir melhor as mudanças em nossos serviços ou na legislação. Sempre que isso acontecer, você encontrará a versão mais recente disponível aqui. Se as mudanças forem significativas, faremos o possível para notificá-lo através dos meios de contato que você nos forneceu.
                </p>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Continuar a acessar o site após essas mudanças indica que você concorda com os novos termos. Se, por qualquer motivo, você não concordar com as atualizações, pedimos que não continue utilizando nosso site e serviços.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Dúvidas ou Comentários?</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Se tiver dúvidas sobre estes termos, não hesite em nos contatar através do e-mail <a href={`mailto:${infos.email}`} className="text-primary hover:underline font-medium">{infos.email}</a>.
                </p>

                {/* Footer Back to Top */}
                <div className="mt-20 pt-10 pb-8 border-t border-neutral-200 flex flex-col items-center justify-center gap-6">
                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <span className="text-sm font-medium">Voltar ao Topo</span>
                    </button>

                    <p className="text-neutral-400 text-sm">
                        © {new Date().getFullYear()} {infos.name}. Todos os direitos reservados.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default TermsOfUse;
