'use client';

import { AlertTriangle, CheckCircle2 } from "lucide-react";

const Solucoes = () => {
  const problems = [
    "Medo de fraudes na internet?",
    "Tempo perdido com assinaturas manuais e deslocamento?",
    "Dificuldades com o Fisco?",
    "Processos burocráticos demorados?"
  ];

  const solutions = [
    "Máxima segurança digital com criptografia avançada",
    "Assine documentos de qualquer lugar, a qualquer hora",
    "Acesse sistemas governamentais com total validade jurídica",
    "Processo 100% digital e simplificado"
  ];

  return (
    <section className="py-20 bg-conex-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-conex-azul">
            Chega de Burocracia e Preocupação com Segurança
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-red-500 mb-6 flex items-center gap-3">
                <div className="geometric-icon">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                Principais Dores dos Empresários
              </h3>
              <div className="space-y-8">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 glass rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-conex-azul">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center gap-3">
                <div className="geometric-icon">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                Nossa Solução Definitiva
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 glass rounded-lg border-l-4 border-green-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-conex-azul font-medium">{solution}</p>
                  </div>
                ))}
              </div>
              
              <div className="rounded-lg p-6 mt-8 glass" style={{ 
                backgroundColor: '#325595',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <p className="text-lg font-semibold text-white text-center">
                  Nosso Certificado Digital resolve isso. Assine documentos, emita NF-e e 
                  acesse sistemas governamentais com total validade jurídica de forma 100% digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucoes;