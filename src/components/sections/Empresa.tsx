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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 animate-fade-in-up">
            Por que Escolher a <span className="text-[#325595]">Conex Digital</span>?
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
                  className="group p-6 glass rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300" 
                         style={{ background: 'linear-gradient(135deg, #325595, #00c6e8)' }}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>CompanySection
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#325595] mb-2">5.000+</div>
              <div className="text-gray-700">Certificados Emitidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-700">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-700">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#325595] mb-2">24h</div>
              <div className="text-gray-700">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresa;