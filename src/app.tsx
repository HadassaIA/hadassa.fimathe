import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Brain, 
  Clock, 
  Target, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MessageCircle, 
  ChevronDown,
  ChevronRight,
  BarChart3,
  Cpu,
  TrendingUp,
  Award
} from "lucide-react";

// --- Componentes Auxiliares ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter text-white">HADASSA <span className="text-blue-500">IA</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Vantagens</a>
          <a href="#comparison" className="hover:text-white transition-colors">Comparativo</a>
          <a href="#methodology" className="hover:text-white transition-colors">Metodologia</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a 
          href="https://pay.hotmart.com/I104582582H" 
          target="_blank"
          className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          ACESSAR AGORA
        </a>
      </div>
    </nav>
  );
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <FadeUp>
    <div className="group p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:bg-white/[0.05]">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-7 h-7 text-blue-500" />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-4">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  </FadeUp>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-500' : 'text-white group-hover:text-blue-400'}`}>{question}</span>
        <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Componente Principal ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* WhatsApp Flutuante */}
      <motion.a 
        href="https://wa.me/5522988102360?text=Quero+testar+o+Hadassa+IA"
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-bold shadow-2xl shadow-green-500/20"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Testar Grátis</span>
      </motion.a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717483-36009bc7376c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold tracking-widest uppercase mb-8">
              <Zap className="w-3 h-3" />
              Automação Profissional MT5
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] mb-8">
              HADASSA <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">IA</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-accent">
              A precisão matemática da estratégia <strong className="text-white">FIMATHE</strong> unida à tecnologia de ponta. Opere no MT5 com 100% de automação.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://pay.hotmart.com/I104582582H" 
                target="_blank"
                className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-black text-lg shadow-2xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Garantia de 7 Dias</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-emerald-500" /> Acesso Vitalício</div>
              <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-emerald-500" /> Licença Ilimitada</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Vantagens Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase">Por que os Traders falham?</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">A maioria dos traders perde dinheiro por fatores humanos. A Hadassa IA elimina essas fraquezas.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="Psicológico"
              description="O medo de perder faz o humano hesitar. O Hadassa IA não tem sentimentos: ele apenas executa o plano matemático sem desvios."
            />
            <FeatureCard 
              icon={Clock}
              title="Tempo Real"
              description="Você não consegue monitorar múltiplos ativos simultaneamente. O robô faz isso 24 horas por dia, 5 dias por semana, sem cansaço."
            />
            <FeatureCard 
              icon={Target}
              title="Cálculo Preciso"
              description="Traçar canais e expansões manualmente gera erros de milímetros que custam caro. Na IA, a precisão é absoluta e instantânea."
            />
          </div>
        </div>
      </section>

      {/* Comparativo Section */}
      <section id="comparison" className="py-32 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase">Humano vs. Hadassa IA</h2>
              <p className="text-zinc-400">A evolução do trading exige ferramentas que superem a capacidade humana.</p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-zinc-500">Funcionalidade</th>
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-zinc-500">Trader Manual</th>
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-blue-500">Hadassa IA</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { f: "Cálculo de Canais Fimathe", m: "Impreciso / Lento", h: "Instantâneo" },
                    { f: "Operação na Zona Neutra", m: "Risco Emocional", h: "Proteção Automática" },
                    { f: "Monitoramento 24/5", m: "Limitado (Sono)", h: "100% do Tempo" },
                    { f: "Gerenciamento de Risco", m: "Indisciplinado", h: "Rígido e Matemático" },
                    { f: "Execução de Trailing Stop", m: "Reativo / Atrasado", h: "Ponto a Ponto" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 font-bold text-white">{row.f}</td>
                      <td className="p-8 text-red-400/80 flex items-center gap-2"><XCircle className="w-4 h-4" /> {row.m}</td>
                      <td className="p-8 text-emerald-400 font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Metodologia Section */}
      <section id="methodology" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase">Metodologia Fimathe Pura</h2>
              <p className="text-zinc-400">O robô segue rigorosamente os princípios criados por Marcelo Ferreira.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Mapeamento", d: "Identificação automática do Canal de Referência com base na volatilidade atual.", i: BarChart3 },
              { n: "02", t: "Segurança", d: "Filtro inteligente de Zona Neutra para evitar falsos rompimentos e armadilhas.", i: ShieldCheck },
              { n: "03", t: "Projeção", d: "Alvos matemáticos baseados em 50%, 100% e 200% da expansão Fimathe.", i: TrendingUp },
              { n: "04", t: "Trailing", d: "Proteção de lucro móvel que avança conforme o preço atinge novos níveis.", i: Zap },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative p-10 rounded-[32px] bg-white/[0.03] border border-white/10 overflow-hidden group">
                  <span className="absolute top-4 right-8 text-8xl font-black text-white/[0.03] group-hover:text-blue-500/10 transition-colors">{step.n}</span>
                  <step.i className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{step.t}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6">FAQ</h2>
              <p className="text-zinc-400">Tire suas dúvidas sobre o funcionamento do Hadassa IA.</p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="p-8 rounded-[40px] bg-white/[0.03] border border-white/10">
              <FAQItem 
                question="Funciona em quais ativos?"
                answer="O Hadassa IA é versátil e funciona em qualquer ativo disponível no MetaTrader 5: HK50, Ouro (XAUUSD), Índices (Nasdaq, S&P500), Forex e até ativos da B3."
              />
              <FAQItem 
                question="Preciso de muito capital para começar?"
                answer="Não. O robô é totalmente configurável. Você pode ajustar o tamanho do lote de acordo com sua banca, permitindo operar até em contas pequenas (Contas Cent ou Standard)."
              />
              <FAQItem 
                question="O suporte ajuda na instalação?"
                answer="Com certeza! Oferecemos tutoriais em vídeo passo a passo e disponibilizamos arquivos de configuração (.set) otimizados para os principais ativos."
              />
              <FAQItem 
                question="É uma licença única ou mensalidade?"
                answer="Nesta oferta, você garante o acesso vitalício. Sem mensalidades, sem taxas ocultas. Pague uma vez e use para sempre."
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="relative p-16 rounded-[48px] bg-gradient-to-br from-blue-600 to-emerald-600 overflow-hidden text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 uppercase tracking-tighter">Automatize sua estratégia hoje</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">Pare de lutar contra o mercado e comece a operar com a vantagem tecnológica que você merece.</p>
                <a 
                  href="https://pay.hotmart.com/I104582582H" 
                  target="_blank"
                  className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20"
                >
                  GARANTIR MEU ACESSO
                  <ChevronRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Cpu className="w-6 h-6 text-blue-500" />
            <span className="font-display font-black text-xl tracking-tighter text-white">HADASSA <span className="text-blue-500">IA</span></span>
          </div>
          <p className="text-zinc-500 text-sm mb-8">© 2024 HADASSA IA — CNPJ: XX.XXX.XXX/0001-XX</p>
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-zinc-600 text-[10px] leading-relaxed uppercase tracking-widest">
            Aviso: O mercado financeiro envolve riscos. Resultados passados não garantem lucros futuros. O uso de robôs de investimento não elimina o risco de perda de capital. Utilize sempre um gerenciamento de risco adequado às suas condições financeiras.
          </div>
        </div>
      </footer>
    </div>
  );
      }
