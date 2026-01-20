import React, { useEffect } from 'react';
import { content } from '../Content';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
                    Política de Privacidade
                </h1>

                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Bem-vindo à <strong>{infos.name}</strong>, inscrita no CNPJ {infos.cnpj}, com sede na {infos.address}.
                    Nosso compromisso é com a integridade e a segurança dos dados pessoais dos nossos usuários e clientes.
                    Esta Política de Privacidade aplica-se a todas as interações digitais realizadas em nosso site <a href={seo.domain} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{seo.domain.replace('https://', '')}</a>,
                    serviços associados, aplicativos móveis e outras plataformas digitais sob nosso controle.
                </p>

                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Ao acessar e utilizar nossas plataformas, você reconhece e concorda com as práticas descritas nesta política.
                    Nós tratamos a proteção de seus dados pessoais com a máxima seriedade e nos comprometemos a processá-los de forma responsável, transparente e segura.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Definições</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
                    <li><strong>“Dados Pessoais”</strong> são informações que identificam ou podem identificar uma pessoa natural.</li>
                    <li><strong>“Dados Pessoais Sensíveis”</strong> são informações que revelam características pessoais íntimas, como origem racial, convicções religiosas, opiniões políticas, dados genéticos ou biométricos.</li>
                    <li><strong>“Tratamento de Dados Pessoais”</strong> abrange qualquer operação com Dados Pessoais, como coleta, registro, armazenamento, uso, compartilhamento ou destruição.</li>
                    <li><strong>“Leis de Proteção de Dados”</strong> são todas as leis que regulamentam o Tratamento de Dados Pessoais, incluindo a LGPD (Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/18).</li>
                </ul>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Dados Coletados e Motivos da Coleta</h2>
                <p className="mb-4 text-base md:text-lg leading-relaxed">Nós coletamos e processamos os seguintes tipos de dados pessoais:</p>
                <ul className="list-disc pl-5 mb-6 space-y-3 marker:text-primary">
                    <li><strong>Informações Fornecidas por Você:</strong> Isso inclui, mas não se limita a, nome, sobrenome, endereço de e-mail, endereço físico, informações de pagamento e quaisquer outras informações que você optar por fornecer ao criar uma conta, fazer uma compra ou interagir com nossos serviços de atendimento ao cliente.</li>
                    <li><strong>Informações Coletadas Automaticamente:</strong> Quando você visita nosso site, coletamos automaticamente informações sobre seu dispositivo e sua interação com nosso site. Isso pode incluir dados como seu endereço IP, tipo de navegador, detalhes do dispositivo, fuso horário, páginas visitadas, produtos visualizados, sites ou termos de busca que o direcionaram ao nosso site, e informações sobre como você interage com nosso site.</li>
                </ul>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Uso de Cookies e Tecnologias de Rastreamento</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    A <strong>{infos.name}</strong> utiliza cookies, que são pequenos arquivos de texto armazenados no seu dispositivo,
                    e outras tecnologias de rastreamento para melhorar a experiência do usuário em nosso site {seo.domain.replace('https://', '')},
                    entender como nossos serviços são utilizados e otimizar nossas estratégias de marketing.
                </p>

                <h3 className="font-grotesk font-bold text-slate-800 text-lg md:text-xl mt-8 mb-3">Tipos de Cookies Utilizados:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-3 marker:text-primary">
                    <li><strong>Cookies Essenciais:</strong> Essenciais para o funcionamento do site, permitindo que você navegue e use suas funcionalidades. Sem esses cookies, serviços como carrinho de compras e processamento de pagamento não podem ser fornecidos.</li>
                    <li><strong>Cookies de Desempenho e Analíticos:</strong> Coletam informações sobre como os visitantes usam o nosso site, quais páginas são visitadas com mais frequência e se eles recebem mensagens de erro. Esses cookies são usados apenas para melhorar o desempenho e a experiência do usuário no site.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.</li>
                    <li><strong>Cookies de Publicidade e Redes Sociais:</strong> Usados para oferecer anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio, bem como ajudar a medir a eficácia das campanhas publicitárias.</li>
                </ul>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Finalidades do Processamento de Dados</h2>
                <p className="mb-4 text-base md:text-lg leading-relaxed">Os dados coletados são utilizados para:</p>
                <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
                    <li>Proporcionar, operar e melhorar nossos serviços e ofertas;</li>
                    <li>Processar suas transações e enviar notificações relacionadas a suas compras;</li>
                    <li>Personalizar sua experiência de usuário e recomendar conteúdo ou produtos que possam ser do seu interesse;</li>
                    <li>Comunicar informações importantes, ofertas e promoções, conforme sua preferência de comunicação;</li>
                    <li>Realizar análises internas para desenvolver e aprimorar nossos serviços;</li>
                    <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                </ul>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Compartilhamento e Transferência de Dados Pessoais</h2>
                <p className="mb-4 text-base md:text-lg leading-relaxed">Nós podemos compartilhar seus dados pessoais com terceiros nas seguintes circunstâncias:</p>
                <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
                    <li>Com fornecedores de serviços e parceiros que nos auxiliam nas operações de negócio, desde que estes atuem em conformidade com nossas diretrizes de proteção de dados e com a legislação aplicável;</li>
                    <li>Para cumprir com obrigações legais, responder a processos judiciais, ou proteger nossos direitos e propriedades, bem como a segurança de nossos clientes e do público;</li>
                    <li>Em caso de reestruturação corporativa, venda, fusão ou outra transferência de ativos, garantindo que a entidade receptora concorde em respeitar a privacidade de seus dados de acordo com uma política equivalente à nossa.</li>
                </ul>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Links para outros sites e redes sociais</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Nossa plataforma pode incluir links para sites externos de parceiros, anunciantes e fornecedores. Clicar nesses links implica que você será direcionado para fora do nosso site, entrando em domínios que seguem suas próprias políticas de privacidade, pelas quais não somos responsáveis.
                </p>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Recomendamos a leitura atenta dessas políticas antes de fornecer qualquer dado pessoal. Da mesma forma, não assumimos responsabilidade pelas práticas de privacidade de terceiros como Facebook, Apple, Google e Microsoft. Aconselhamos você a se informar sobre as políticas de privacidade dessas entidades ao utilizar seus serviços ou aplicativos.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Direitos dos Titulares dos Dados</h2>
                <p className="mb-4 text-base md:text-lg leading-relaxed">Você possui diversos direitos em relação aos seus dados pessoais, incluindo:</p>
                <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
                    <li>O direito de acesso, retificação ou exclusão de seus dados pessoais sob nossa posse;</li>
                    <li>O direito de limitar ou se opor ao nosso processamento de seus dados;</li>
                    <li>O direito à portabilidade de dados;</li>
                    <li>O direito de retirar seu consentimento a qualquer momento, quando o processamento for baseado em consentimento.</li>
                </ul>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Para exercer esses direitos, entre em contato conosco através de <a href={`mailto:${infos.email}`} className="text-primary hover:underline font-medium">{infos.email}</a>.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Segurança dos Dados</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Implementamos medidas de segurança técnica e organizacional para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, é importante notar que nenhum sistema é completamente seguro. Nos comprometemos a notificar você e qualquer autoridade aplicável de quaisquer brechas de segurança de acordo com a legislação vigente.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Alterações na Política de Privacidade</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Nossa Política de Privacidade pode ser atualizada periodicamente. A versão mais atual será sempre publicada em nosso site, indicando a data da última revisão. Encorajamos você a revisar regularmente nossa política para estar sempre informado sobre como estamos protegendo seus dados.
                </p>

                <h2 className="font-grotesk font-bold text-slate-900 text-xl md:text-2xl mt-10 mb-4">Contato</h2>
                <p className="mb-6 text-base md:text-lg leading-relaxed">
                    Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, por favor, não hesite em nos contatar em <a href={`mailto:${infos.email}`} className="text-primary hover:underline font-medium">{infos.email}</a>. Estamos comprometidos em resolver quaisquer questões relacionadas à privacidade de nossos usuários e clientes.
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

export default PrivacyPolicy;
