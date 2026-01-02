'use client';

import { Star, Clock, Headphones, Users } from "lucide-react";

const Empresa = () => {
  const features = [
    {
      icon: Star,
      title: "Especialistas no Assunto",
      description: "Equipe técnica especializada e dedicada para te auxiliar em cada etapa do processo."
    },
    {
      icon: Clock,
      title: "Agilidade no Processo",
      description: "Emissão rápida e validade imediata. Não perca prazos importantes do seu negócio."
    },
    {
      icon: Headphones,
      title: "Suporte Humanizado",
      description: "Atendimento personalizado por telefone, WhatsApp e e-mail para tirar todas as suas dúvidas."
    },
    {
      icon: Users,
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
                  <div className="card-3d-container h-full">
                    <div className="card-3d h-full">
                      {/* Frente do card - visível inicialmente */}
                      <div className="front-content">
                        <div className="icon-wrapper">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <p>{feature.title}</p>
                      </div>
                      
                      {/* Verso do card - aparece no hover */}
                      <div className="content">
                        <p>{feature.description}</p>
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