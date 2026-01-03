'use client';

import { useState, useEffect } from 'react';
import { Shield, TrendingUp, Phone, Mail, Globe, MessageCircle, Building2, Wrench, Eye, DollarSign, Video, Zap, CheckCircle, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import HexagonBackground from '@/components/ux/hexagon-background';

const Parceria = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const benefits = [
    { 
      icon: Building2, 
      title: "Estrutura Consolidada", 
      text: "Infraestrutura robusta e comprovada, garantindo estabilidade e confiança para seu negócio crescer com segurança." 
    },
    { 
      icon: Wrench, 
      title: "Suporte Técnico Especializado", 
      text: "Equipe técnica dedicada para resolver qualquer questão, sem necessidade de ligações para 0800 demoradas." 
    },
    { 
      icon: Eye, 
      title: "Transparência Total", 
      text: "Parceria transparente com relatórios detalhados, permitindo total controle sobre seu faturamento." 
    },
    { 
      icon: TrendingUp, 
      title: "Alta Rentabilidade", 
      text: "Comissões competitivas e modelo de negócio sustentável para maximizar seus resultados." 
    },
    { 
      icon: Video, 
      title: "Atendimento Digital", 
      text: "Oferecemos atendimento via videoconferência, ampliando seu raio de ação e proporcionando comodidade total aos clientes." 
    },
    { 
      icon: Zap, 
      title: "Suporte Imediato", 
      text: "Resolução de problemas em tempo real, sem filas de espera ou protocolos demorados." 
    }
  ];

  const pricing = [
    { 
      type: "Certificado Digital CPF A1", 
      price: "140", 
      commission: "10%", 
      profit: "14",
      icon: Shield
    },
    { 
      type: "Certificado Digital CNPJ A1", 
      price: "195", 
      commission: "10%", 
      profit: "19,50",
      icon: Building2,
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header - NÃO MEXER */}
      <header className="relative bg-conex-azul text-white overflow-hidden py-12 md:py-20 px-6">
        <HexagonBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-conex-azul/20 to-conex-primary/20"></div>
        
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

      {/* Seção de Preços */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-conex-azul">Plano de Rentabilidade</h2>
            <p className="text-lg text-gray-600">Estrutura de comissões transparente e competitiva</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricing.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`parceria-pricing-card ${item.highlight ? 'highlight' : ''}`}
                >
                  <div className="parceria-hover-bubble"></div>
                  
                  <div className="parceria-pricing-icon">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="parceria-pricing-title">{item.type}</h3>
                  
                  <div className="parceria-pricing-value">
                    <span className="parceria-price">R$ {item.price}</span>
                    <span className="parceria-period">/ano</span>
                  </div>
                  
                  <div className="parceria-pricing-info">
                    <p className="parceria-commission">Comissão: <strong>{item.commission}</strong></p>
                    <p className="parceria-margin">Sua Margem: <strong className="parceria-margin-value">R$ {item.profit}</strong></p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="duvidas-card-container parceria-projection-compact">
              <div className="duvidas-bg-layer layer-1"></div>
              <div className="duvidas-bg-layer layer-2"></div>
              <div className="duvidas-bg-layer layer-3"></div>
              
              <div className="duvidas-diagonal-line"></div>
              
              <div className="duvidas-content">
                <div className="duvidas-header">
                  <h3 className="duvidas-title" style={{ fontSize: '1.75rem' }}>
                    Projeção de Ganhos Mensais
                  </h3>
                </div>

                <div className="parceria-projection-content">
                  <p className="parceria-projection-item">
                    Com <strong className="parceria-highlight-text">20 certificados/mês</strong> (10 e-CPF + 10 CNPJ): 
                    <strong className="parceria-highlight-value"> R$ 335,00</strong> de receita mensal.
                  </p>
                  
                  <p className="parceria-projection-item">
                    Com <strong className="parceria-highlight-text">50 certificados/mês</strong>: 
                    <strong className="parceria-highlight-value"> R$ 837,50</strong>!
                  </p>
                  
                  <p className="parceria-projection-footer">
                    Zero investimento inicial, apenas lucro.
                  </p>
                </div>

                <div className="duvidas-float-element element-1">
                  <div className="float-inner"></div>
                </div>
                <div className="duvidas-float-element element-2">
                  <div className="float-inner"></div>
                </div>
                <div className="duvidas-float-element element-3">
                  <div className="float-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-gray-50 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-conex-azul mb-4">Por que escolher a CONEX DIGITAL?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresa especializada em certificação digital, com foco na excelência do atendimento 
              e satisfação do cliente através de uma rede sólida de parceiros.
            </p>
          </div>
          
          <div className="parceria-carousel-container">
            <div className="parceria-card-3d">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="parceria-carousel-card">
                    <div className="parceria-carousel-icon">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h4 className="parceria-carousel-title">{benefit.title}</h4>
                    <p className="parceria-carousel-text">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-16 bg-conex-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-conex-azul">
                Vamos Construir o <span className="text-[#00c6e8]">Futuro</span> Juntos!
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Entre em contato e descubra como transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Entre em contato conosco via WhatsApp ou telefone para conhecer nossa proposta",
                "Agende uma reunião de apresentação com nossa equipe comercial",
                "Assine o contrato e tenha acesso a nossa plataforma completa", 
                "Comece a vender certificados digitais e lucrar com nossa parceria"
              ].map((description, index) => {
                const icons = [Phone, MessageCircle, CheckCircle, TrendingUp];
                const IconComponent = icons[index];
                
                return (
                  <div 
                    key={index} 
                    className="card-container animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-step-number">
                      {index + 1}
                    </div>
                    
                    <div className="conex-wave-card">
                      <div className="waves-container">
                        <div className="conex-wave"></div>
                        <div className="conex-wave"></div>
                        <div className="conex-wave"></div>
                      </div>
                      
                      <div className="conex-card-content" style={{ justifyContent: 'center', paddingTop: '1.5rem' }}>
                        <IconComponent 
                          className="conex-step-icon" 
                          style={{ marginBottom: '1.5rem' }} 
                        />
                        
                        <p className="conex-step-description" style={{ textAlign: 'center' }}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Informação adicional */}
            <div className="mt-16 text-center animate-fade-in">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#325595]/20 shadow-lg">
                <p className="text-lg font-semibold text-[#0b2643]">
                  Obrigado pela confiança! <span className="text-[#00c6e8] font-bold">CONEX DIGITAL</span> - Conectando você ao futuro digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceria;