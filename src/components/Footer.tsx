'use client';

import React from 'react';
import { Calculator, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tucont-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/image/logo-tucont.png" alt="Tucont" className="h-12" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Contabilidade Integrativa com atendimento humanizado via WhatsApp
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-tucont-orange">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Contabilidade para MEI</li>
              <li>Simples Nacional</li>
              <li>Lucro Presumido</li>
              <li>Abertura de Empresas</li>
              <li>Emissão de Notas Fiscais</li>
              <li>Consultoria Empresarial</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-tucont-orange">Diferenciais</h4>
            <ul className="space-y-3 text-gray-300">
              <li>100% Automatizado</li>
              <li>Atendimento via WhatsApp</li>
              <li>Inteligência Artificial</li>
              <li>Toque Humano</li>
              <li>Processos Digitais</li>
              <li>Acompanhamento Próximo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-tucont-orange">Contato</h4>
            <div className="space-y-3 text-white">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>(31) 97574-0510</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>contato@tucont.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Uberlândia, MG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TuCont - Contabilidade Integrativa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;