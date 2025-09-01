'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, Award, FileText, Zap, Download, ChevronRight, Star, Users, TrendingUp, Clock, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';

const Parceria = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const stats = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "1000+", label: "Certificados Emitidos" },
    { number: "98%", label: "Satisfação do Cliente" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  const benefits = [
    { icon: "🏢", title: "Estrutura Consolidada", text: "Infraestrutura robusta e comprovada, garantindo estabilidade e confiança para seu negócio crescer com segurança." },
    { icon: "🔧", title: "Suporte Técnico Especializado", text: "Equipe técnica dedicada para resolver qualquer questão, sem necessidade de ligações para 0800 demoradas." },
    { icon: "💎", title: "Transparência Total", text: "Parceria transparente com relatórios detalhados, permitindo total controle sobre seu faturamento." },
    { icon: "📈", title: "Alta Rentabilidade", text: "Comissões competitivas e modelo de negócio sustentável para maximizar seus resultados." },
    { icon: "💻", title: "Atendimento Digital", text: "Oferecemos atendimento via videoconferência, ampliando seu raio de ação e proporcionando comodidade total aos clientes." },
    { icon: "⚡", title: "Suporte Imediato", text: "Resolução de problemas em tempo real, sem filas de espera ou protocolos demorados." }
  ];

  const pricing = [
    { type: "📄 Certificado Digital CPF A1", price: "R$ 140,00", commission: "Comissão do Parceiro: 10%", profit: "💰 Sua Margem: R$ 14,00" },
    { type: "🏢 Certificado Digital CNPJ A1", price: "R$ 195,00", commission: "Comissão do Parceiro: 10%", profit: "💰 Sua Margem: R$ 19,50" }
  ];

  const contactMethods = [
    { icon: <Phone className="h-5 w-5" />, label: "WhatsApp", value: "(34) 99107-7852" },
    { icon: <Globe className="h-5 w-5" />, label: "Website", value: "conexdigital.online" },
    { icon: <MessageCircle className="h-5 w-5" />, label: "Instagram", value: "@conexdigital.online" },
    { icon: <Mail className="h-5 w-5" />, label: "E-mail", value: "contato@conexdigital.online" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
            <Header />
      {/* Header com gradiente */}
      <header className="relative bg-gradient-to-br from-conex-azul to-conex-primary text-white overflow-hidden py-12 md:py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-conex-azul/20 to-conex-primary/20"></div>
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 rounded-full bg-conex-azul-light/10"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-40 h-40 rounded-full bg-conex-primary/10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          </div>          
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              PROPOSTA DE <span className="text-conex-azul-light">PARCERIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Seja nosso parceiro estratégico em certificação digital
            </p>
          </div>
        </div>
      </header>

      {/* Seção Sobre */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-conex-azul mb-6">Sobre a CONEX DIGITAL</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              A CONEX DIGITAL é uma empresa especializada em certificação digital, com foco na excelência do atendimento e na satisfação do cliente. 
              Nossa missão é democratizar o acesso à certificação digital através de uma rede sólida de parceiros qualificados.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass bg-white p-6 rounded-xl text-center animate-fade-in-up" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl md:text-4xl font-bold text-conex-azul mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-conex-azul mb-10 text-center">Por que escolher a CONEX DIGITAL?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-conex-azul mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-conex-azul to-conex-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Plano de Rentabilidade</h2>
            <p className="text-xl max-w-3xl mx-auto">Estrutura de comissões transparente e altamente competitiva</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {pricing.map((item, index) => (
              <div 
                key={index} 
                className="glass bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-2xl mb-4">{item.type}</div>
                <div className="text-3xl font-bold text-conex-azul-light mb-3">{item.price}</div>
                <div className="text-white/80 mb-4">{item.commission}</div>
                <div className="bg-green-500/20 text-green-300 font-semibold p-3 rounded-lg border border-green-400/30">
                  {item.profit}
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass bg-yellow-500/10 border-yellow-500/30 p-6 rounded-xl max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Projeção de Ganhos Mensais
            </h3>
            <p className="text-white/90">
              Com apenas 20 certificados por mês (10 CPF + 10 CNPJ), sua receita mensal será de aproximadamente <strong className="text-yellow-300">R$ 335,00</strong>. 
              Com 50 certificados mensais, esse valor pode chegar a <strong className="text-yellow-300">R$ 837,50</strong>! 
              Zero investimento inicial, apenas lucro.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contingência */}
      <section className="py-16 md:py-24 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="glass bg-conex-azul/30 p-8 md:p-12 rounded-2xl border border-conex-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-conex-primary/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-conex-azul-light/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-conex-azul-light flex items-center gap-3">
                <Shield className="h-8 w-8" />
                Plano de Contingência Avançado
              </h2>
              
              <p className="text-lg mb-6">
                Na CONEX DIGITAL, sabemos que a disponibilidade é crucial para o sucesso do seu negócio. 
                Por isso, desenvolvemos uma estratégia de contingência robusta e eficiente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-conex-azul-light">Redundância Completa</h3>
                  <p>Operamos com múltiplos sistemas de emissão simultaneamente, garantindo que mesmo em caso de instabilidade de um fornecedor, continuamos emitindo normalmente sem interrupções.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-conex-azul-light">Monitoramento 24/7</h3>
                  <p>Nossa equipe monitora constantemente todos os sistemas, garantindo rápida resposta a qualquer eventualidade e máxima disponibilidade.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {["Sistema Principal", "Sistema Backup", "Monitoramento 24/7"].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-conex-primary/20 text-conex-azul-light rounded-full text-sm font-medium border border-conex-primary/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-conex-primary to-conex-azul-light text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Vamos Construir o <span className="text-conex-azul-light">Futuro</span> Juntos!
            </h2>
            
            <p className="text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Entre em contato conosco e descubra como nossa parceria pode transformar seu negócio e aumentar sua rentabilidade mensal
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="glass bg-white/10 p-6 rounded-xl border border-white/20 flex items-center gap-4 animate-fade-in-up"
                  style={{animationDelay: `${0.4 + index * 0.1}s`}}
                >
                  <div className="p-3 bg-white/10 rounded-full">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-conex-azul-light">{method.label}</div>
                    <div className="font-semibold">{method.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass bg-white p-8 rounded-xl border border-white/20 text-left animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <h3 className="text-xl font-semibold mb-6 text-conex-azul-light text-center">Próximos Passos Para Iniciar</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-conex-azul-light text-conex-azul font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">1</div>
                    <p>Entre em contato conosco</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-conex-azul-light text-conex-azul font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">2</div>
                    <p>Agende reunião de apresentação</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-conex-azul-light text-conex-azul font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">3</div>
                    <p>Inicie como parceiro CONEX DIGITAL</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-conex-azul-light text-conex-azul font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">4</div>
                    <p>Comece a lucrar imediatamente</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <p className="text-conex-azul-light font-semibold">Obrigado pela confiança em nosso trabalho!</p>
              <p className="text-lg font-bold mt-2">CONEX DIGITAL - Conectando você ao futuro digital</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceria;