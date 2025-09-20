'use client';

import { useState, useEffect } from 'react';
import { Shield, Users, TrendingUp, Award, Clock, Star, CheckCircle } from 'lucide-react';
import Profile from '@/assets/image/profile.png';
import Profile2 from '@/assets/image/profile2.png';

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header com gradiente igual à página de Contato */}
      <header className="relative py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-conex-azul to-conex-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-conex-azul/20 to-conex-primary/20"></div>        
        <div className="container mx-auto relative z-10">          
          <div className="text-center mt-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              SOBRE <span className="text-conex-azul-light">NÓS</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Conheça quem está por trás da Conex Digital e tem a missão de transformar o mercado de certificação digital
            </p>
          </div>
        </div>
      </header>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass p-8 rounded-xl animate-fade-in-up transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-conex-azul mb-6 text-center">Nossa Missão</h2>
            <p className="text-lg text-conex-azul/90 text-center max-w-4xl mx-auto">
              A CONEX DIGITAL é uma empresa especializada em certificação digital, com foco na excelência do atendimento e na satisfação do cliente. 
              Nossa missão é facilitar o acesso à certificação digital através de uma rede sólida de parceiros qualificados, oferecendo tecnologia de ponta e suporte especializado em Uberlândia.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Isnaldo Ferreira */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-conex-azul mb-4">Isnaldo Ferreira</h2>
              <div className="space-y-4 text-conex-azul/90">
                <p className='text-lg'>
                  Sou um técnico de T.I. com ampla experiência em certificado digital e gestão tecnológica, atuando com foco em garantir a segurança e a eficiência das operações. 
                  Utilizo minha expertise para implementar e gerenciar certificados digitais, assegurando a integridade dos dados e a conformidade com as regulamentações vigentes.
                </p>
                <p className='text-lg'>
                  Além disso, minha atuação inclui a análise e o aperfeiçoamento de processos tecnológicos, otimizando o uso de recursos e solucionando problemas de forma proativa.
                </p>
                <p className='text-lg'>
                  Com um olhar atento para os detalhes, mantenho sistemas atualizados e funcionais, antecipando falhas e mitigando riscos. 
                  Minha capacidade de organização e gestão permite que todos os ativos tecnológicos estejam alinhados com os objetivos do negócio, assegurando um ambiente de TI estruturado, seguro e confiável.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-conex-primary to-conex-azul-light rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src={Profile.src}
                  alt="Isnaldo Ferreira" 
                  className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Lívia Garcia */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-conex-azul mb-4">Lívia Garcia</h2>
              <div className="space-y-4 text-conex-azul/90">
                <p className='text-lg'>
                  Sou uma especialista em certificação digital com 4 anos de experiência consolidada na área. 
                  Durante minha trajetória, desenvolvi uma sólida expertise em vendas e atendimento ao público, sempre priorizando a excelência na experiência do cliente.
                </p>
                <p className='text-lg'>
                  Como gestora da equipe de videoconferência para certificação digital, implementei processos altamente organizados e eficientes, 
                  garantindo que cada videoconferência ocorresse de forma impecável.
                </p>
                <p className='text-lg'>
                  Minha atenção aos detalhes e habilidades de planejamento foram fundamentais para assegurar que os clientes tivessem uma experiência tranquila e bem-sucedida na emissão de seus certificados digitais.
                </p>
                <p className='text-lg'>
                  Tenho grande entusiasmo por novos desafios e busco constantemente oportunidades para aplicar minhas habilidades de organização, liderança e inovação, contribuindo para o sucesso de equipes e empresas.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-conex-primary to-conex-azul-light rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src={Profile2.src}
                  alt="Lívia Garcia" 
                  className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-conex-azul mb-12 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-conex-primary/20 mx-auto mb-4">
                <Shield className="h-8 w-8 text-conex-primary" />
              </div>
              <h3 className="text-xl font-semibold text-conex-azul mb-3">Segurança</h3>
              <p className="text-conex-azul/90">
                Priorizamos a segurança em todos os processos, garantindo a proteção dos dados e a confiabilidade dos certificados.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-conex-primary/20 mx-auto mb-4">
                <Users className="h-8 w-8 text-conex-primary" />
              </div>
              <h3 className="text-xl font-semibold text-conex-azul mb-3">Atendimento Humanizado</h3>
              <p className="text-conex-azul/90">
                Valorizamos o relacionamento próximo com clientes e parceiros, oferecendo suporte personalizado e eficiente.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-conex-primary/20 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-conex-primary" />
              </div>
              <h3 className="text-xl font-semibold text-conex-azul mb-3">Inovação Constante</h3>
              <p className="text-conex-azul/90">
                Buscamos sempre novas tecnologias e processos para oferecer as melhores soluções em certificação digital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;