'use client';

import { FileText, CheckCircle, Zap, Download } from "lucide-react";

const Processo = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Solicitação",
      description: "Você preenche o formulário e nossa equipe entra em contato em até 2 horas."
    },
    {
      number: "2", 
      icon: CheckCircle,
      title: "Validação",
      description: "Validamos seus dados e agendamos a videoconferência (se necessário)."
    },
    {
      number: "3",
      icon: Zap,
      title: "Emissão",
      description: "Após validação, emitimos seu certificado em poucos minutos."
    },
    {
      number: "4",
      icon: Download,
      title: "Instalação/Uso",
      description: "Te guiamos na instalação e você já pode utilizar imediatamente!"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Simples, Rápido e <span className="text-[#325595]">100% Digital</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nosso processo foi desenvolvido para ser o mais simples e eficiente possível. 
              Em poucos passos, você terá seu certificado digital funcionando.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-[#325595] to-[#00c6e8] transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  <div className="relative z-10 text-center p-6 glass rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    {/* Step Number */}
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mb-4 text-white"
                      style={{ background: 'linear-gradient(135deg, #325595, #00c6e8)' }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #325595, #00c6e8)' }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-4 glass rounded-lg px-6 py-4 border-l-4 border-[#325595]">
              <Zap className="h-6 w-6 text-[#325595]" />
              <p className="text-lg font-semibold text-[#325595]">
                Tempo médio de emissão: 30 minutos após validação dos dados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processo;