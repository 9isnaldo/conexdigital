'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é um Certificado Digital?",
      answer: "O Certificado Digital é um documento eletrônico que funciona como uma identidade virtual, garantindo a autenticidade e integridade de documentos e transações online. É como se fosse uma carteira de identidade digital com validade jurídica."
    },
    {
      question: "Quais documentos são necessários para emitir?",
      answer: "Para e-CPF: RG, CPF e comprovante de residência. Para e-CNPJ: Cartão CNPJ, documento do responsável legal (RG/CPF), contrato social ou documentos constitutivos da empresa. Todo o processo pode ser feito digitalmente."
    },
    {
      question: "Quanto tempo leva para emitir o certificado?",
      answer: "Após o envio da documentação e validação dos dados, o certificado é emitido em até 30 minutos. O processo completo, incluindo a videoconferência (quando necessário), pode ser concluído no mesmo dia."
    },
    {
      question: "Preciso sair de casa para emitir meu certificado?",
      answer: "Não! Todo o processo é 100% digital. Realizamos videoconferência para validação presencial quando necessário, mas você não precisa se deslocar. Tudo é feito pela internet com total segurança."
    },
    {
      question: "Qual a validade do Certificado Digital?",
      answer: "O Certificado Digital A1 tem validade de 1 ano, e o A3 pode ter validade de 1 a 3 anos, dependendo do tipo escolhido. Oferecemos renovação automática para sua comodidade."
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-conex-azul text-center mb-16"
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="faq-item-wrapper"
            >
              {/* Balão aparece ACIMA do card (para TODOS os cards) */}
              <div className={`faq-tooltip-container ${openIndex === index ? 'faq-tooltip-open' : ''}`}>
                <div className="faq-tooltip">
                  <span>{faq.answer}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg">
                <div className="px-8 py-6 flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  
                  {/* Wrapper do botão com animação */}
                  <div className="wrapper">
                    <input
                      type="checkbox"
                      checked={openIndex === index}
                      onChange={() => handleToggle(index)}
                      aria-label={`Toggle ${faq.question}`}
                    />
                    <div className="btn"></div>

                    {/* Efeito visual de partículas */}
                    <svg viewBox="0 0 300 300">
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                      <circle className="shape" cx="150" cy="50" r="7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16 px-4"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="duvidas-card-container">
              <div className="duvidas-bg-layer layer-1"></div>
              <div className="duvidas-bg-layer layer-2"></div>
              <div className="duvidas-bg-layer layer-3"></div>
              
              <div className="duvidas-diagonal-line"></div>
              
              <div className="duvidas-content">
                <div className="duvidas-header">
                  <h3 className="duvidas-title">
                    Ainda tem dúvidas?
                  </h3>
                </div>

                <p className="duvidas-description">
                  Nossa equipe de especialistas está pronta para esclarecer todas as suas questões 
                  sobre certificação digital.
                </p>

                <div className="duvidas-cta-container">
                  <a href="#" className="duvidas-btn duvidas-btn-primary">
                    <span className="duvidas-btn-bg"></span>
                    <span className="duvidas-btn-border"></span>
                    <Phone className="w-5 h-5" />
                    <span>Ligar Agora</span>
                    <span className="duvidas-btn-shine"></span>
                  </a>

                  <a href="#" className="duvidas-btn duvidas-btn-secondary">
                    <span className="duvidas-btn-bg"></span>
                    <span className="duvidas-btn-border"></span>
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                    <span className="duvidas-btn-shine"></span>
                  </a>
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;