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
    <section className="py-16 bg-conex-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-conex-azul">
              Simples, Rápido e <span className="text-[#00c6e8]">100% Digital</span>
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
                <div 
                  key={index} 
                  className="card-container animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Número acima do card */}
                  <div className="card-step-number">
                    {step.number}
                  </div>
                  
                  {/* Card com ondas */}
                  <div className="conex-wave-card">
                    {/* Ondas animadas */}
                    <div className="waves-container">
                      <div className="conex-wave"></div>
                      <div className="conex-wave"></div>
                      <div className="conex-wave"></div>
                    </div>
                    
                    {/* Conteúdo do card */}
                    <div className="conex-card-content">
                      <IconComponent className="conex-step-icon" />
                      
                      <h3 className="conex-step-title">
                        {step.title}
                      </h3>
                      
                      <p className="conex-step-description">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Informação adicional */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#325595]/20 shadow-lg">
              <Zap className="h-7 w-7 text-[#00c6e8]" />
              <p className="text-lg font-semibold text-[#0b2643]">
                Tempo médio: <span className="text-[#00c6e8] font-bold">30 minutos</span> após validação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processo;