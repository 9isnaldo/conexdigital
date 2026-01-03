'use client';

import React from 'react';
import { Phone, Mail, MapPin, Shield, Award, Clock, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import logo from '@/assets/icone.svg';

const Footer = () => {
  return (
    <footer className="footer-conex">
      {/* Seção principal do footer */}
      <div className="footer-main">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Coluna 1 - Logo e Descrição */}
            <div className="footer-brand">
              <div className="footer-logo-container">
              <img src={logo.src} alt="Conex Digital" className="h-10 md:h-12" />
              </div>
              <p className="footer-description">
                Certificação digital com tecnologia de ponta e atendimento humanizado. 
                Segurança e praticidade para sua vida digital.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2 - Certificados */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                <Shield className="w-5 h-5" />
                Certificados
              </h4>
              <ul className="footer-links">
                <li><a href="#ecpf">e-CPF</a></li>
                <li><a href="#ecnpj">e-CNPJ</a></li>
              </ul>
            </div>

            {/* Coluna 3 - Empresa */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                <Award className="w-5 h-5" />
                Empresa
              </h4>
              <ul className="footer-links">
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="#processo">Como Funciona</a></li>
                <li><a href="#parceiros">Seja Parceiro</a></li>
              </ul>
            </div>

            {/* Coluna 4 - Contato */}
            <div className="footer-column">
              <h4 className="footer-column-title">
                <MessageCircle className="w-5 h-5" />
                Contato
              </h4>
              <div className="footer-contact">
                <a href="https://api.whatsapp.com/send/?phone=5531975740510&text=Ol%C3%A1%21+Vim+do+site+e+quero+saber+mais+sobre+Certificado+Digital+%EF%BF%BD&type=phone_number&app_absent=0" target='_blank' className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="footer-contact-label">Telefone</span>
                    <span className="footer-contact-value">(34) 99107-7852</span>
                  </div>
                </a>
                
                <a href="mailto:contato@conex.com.br" className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="footer-contact-label">E-mail</span>
                    <span className="footer-contact-value">contato@conex.com.br</span>
                  </div>
                </a>
              

                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="footer-contact-label">Horário</span>
                    <span className="footer-contact-value">Seg - Sex: 8h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <div className="max-w-7xl mx-auto px-6">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Conex Certificação Digital. Todos os direitos reservados.
            </p>
            <div className="footer-legal">
              <a href="#privacidade">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>

      {/* Efeitos decorativos */}
      <div className="footer-decoration decoration-1"></div>
      <div className="footer-decoration decoration-2"></div>
      <div className="footer-decoration decoration-3"></div>
    </footer>
  );
};

export default Footer;