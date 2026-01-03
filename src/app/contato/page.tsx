'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Send } from 'lucide-react'
import HexagonBackground from '@/components/ux/hexagon-background'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('Dados do formulário:', formData)
      // Aqui você pode implementar a lógica de envio
      alert('Formulário enviado com sucesso!')
      setFormData({ nome: '', telefone: '', assunto: '', mensagem: '' })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header com gradiente igual à página de exemplo */}
      <header className="relative bg-conex-azul py-20 md:py-24 px-6 overflow-hidden">
        <HexagonBackground />
        <div className="absolute inset-0"></div>        
        <div className="container mx-auto relative z-10">          
          <div className="text-center mt-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              FALE <span className="text-conex-azul-light">CONOSCO</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Pelo canal de atendimento ao cliente estamos disponíveis para atendê-lo(a) da melhor forma.
            </p>
          </div>
        </div>
      </header>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Informações de Contato */}
            <div className="lg:w-2/5 space-y-8">
              <div className="glass p-8 rounded-xl animate-fade-in-up transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-conex-azul mb-6 flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-conex-primary" />
                  FALE COM NOSSA EQUIPE
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/80 transition-all duration-300 hover:bg-white hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-conex-primary/20">
                      <Phone className="h-6 w-6 text-conex-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-conex-azul">Whatsapp</h3>
                      <p className="text-conex-azul/90">(34) 3269-3300</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-xl animate-fade-in-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '0.1s'}}>
                <h2 className="text-2xl font-bold text-conex-azul mb-6 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-conex-primary" />
                  ONDE ESTAMOS
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/80 hover:scale-[1.01]">
                    <MapPin className="h-5 w-5 text-conex-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-conex-azul">UBERLÂNDIA - MG</h3>
                      <p className="text-conex-azul/90 text-sm">
                        R. Francisco Vicente Ferreira, 126<br />
                        Santa Mônica, Uberlândia - MG<br />
                        CEP: 38408-102
                      </p>
                    </div>
                  </div>

                  {/* Mapa Google Maps Embed */}
                  <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.738025767415!2d-48.266404924033986!3d-18.907998582212848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44594c099dfed%3A0x3a6f6f3ad4c3ac3d!2sR.%20Francisco%20Vicente%20Ferreira%2C%20126%20-%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-102!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Empresa em Uberlândia - MG"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Botão para abrir no Google Maps */}
                  <a
                    href="https://www.google.com/maps/place/R.+Francisco+Vicente+Ferreira,+126+-+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG,+38408-102/@-18.9079986,-48.2664049,17z/data=!3m1!4b1!4m6!3m5!1s0x94a44594c099dfed:0x3a6f6f3ad4c3ac3d!8m2!3d-18.9080037!4d-48.26383!16s%2Fg%2F11c2f7d_pd?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-conex-primary to-conex-azul text-white rounded-lg font-semibold hover:from-conex-azul hover:to-conex-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-conex-primary focus:ring-offset-2 text-center shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MapPin className="h-5 w-5" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              <div className="mt-8 glass p-8 rounded-xl animate-fade-in-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '0.3s'}}>
                <h2 className="text-2xl font-bold text-conex-azul mb-6 flex items-center gap-3">
                  <Mail className="h-8 w-8 text-conex-primary" />
                  Siga-nos
                </h2>
                <p className="text-conex-azul/90 mb-6">Acompanhe nossas redes sociais para ficar por dentro de todas as novidades.</p>
                <div className="flex gap-4 flex-wrap">
                  <button className="px-5 py-3 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1">
                    <span>Facebook</span>
                  </button>
                  <button className="px-5 py-3 rounded-full text-white font-medium bg-pink-600 hover:bg-pink-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1" style={{animationDelay: '0.2s'}}>
                    <span>Instagram</span>
                  </button>
                  <button className="px-5 py-3 rounded-full text-white font-medium bg-blue-800 hover:bg-blue-900 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1" style={{animationDelay: '0.4s'}}>
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:w-3/5">
              <div className="glass p-8 rounded-xl animate-fade-in-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '0.2s'}}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-conex-azul mb-4">AINDA COM DÚVIDA?</h2>
                  <p className="text-lg text-conex-azul/90">Preencha o formulário para entrar em contato conosco!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-conex-azul mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-conex-primary focus:border-transparent placeholder-conex-azul/60 text-conex-azul transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-conex-azul mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      placeholder="Seu telefone com WhatsApp"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-conex-primary focus:border-transparent placeholder-conex-azul/60 text-conex-azul transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-conex-azul mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      placeholder="Assunto da mensagem"
                      value={formData.assunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-conex-primary focus:border-transparent placeholder-conex-azul/60 text-conex-azul transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-conex-azul mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Sua mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-conex-primary focus:border-transparent placeholder-conex-azul/60 text-conex-azul resize-none transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-conex-primary to-conex-azul text-white py-4 px-6 rounded-lg font-semibold hover:from-conex-azul hover:to-conex-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-conex-primary focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">ENVIANDO...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        ENVIAR MENSAGEM
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato