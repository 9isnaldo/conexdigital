'use client';

import { Gem, ClockPlus, Headset, BadgeCheck } from "lucide-react";

const Empresa = () => {
  const features = [
    {
      icon: Gem,
      title: "Especialistas no Assunto",
      description: "Equipe técnica especializada e dedicada para te auxiliar em cada etapa do processo."
    },
    {
      icon: ClockPlus,
      title: "Agilidade no Processo",
      description: "Emissão rápida e validade imediata. Não perca prazos importantes do seu negócio."
    },
    {
      icon: Headset,
      title: "Suporte Humanizado",
      description: "Atendimento personalizado por telefone, WhatsApp e e-mail para tirar todas as suas dúvidas."
    },
    {
      icon: BadgeCheck,
      title: "Experiência Comprovada",
      description: "Mais de 5.000 certificados emitidos e 10 anos de mercado com excelência no atendimento."
    }
  ];

  return (
    <section className="py-16 bg-conex-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-conex-azul animate-fade-in-up">
            Por que Escolher a <span className="text-conex-primary">Conex Digital</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto animate-fade-in-up">
            Somos referência no mercado de certificação digital, oferecendo soluções 
            completas com a segurança e agilidade que seu negócio precisa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="h-72 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="empresa-card-container h-full">
                    {/* Borda tracejada com atraso sutil */}
                    <div className="empresa-card-border"></div>
                    
                    {/* Card principal com efeito de brilho */}
                    <div className="empresa-card h-full">
                      {/* Conteúdo inicial com transição refinada */}
                      <div className="empresa-card-initial">
                        <div className="empresa-card-icon-container">
                          <div className="empresa-card-icon">
                            <IconComponent className="h-10 w-10 text-white" />
                          </div>
                        </div>
                        <p className="empresa-card-title">{feature.title}</p>
                      </div>
                      
                      {/* Descrição com transição e zoom sutil */}
                      <div className="empresa-card-hidden">
                        <p className="empresa-card-description">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresa;