'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Send, Building, HeadphonesIcon } from 'lucide-react'
import Header from '@/components/Header'

export default function ContactForm() {
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
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <Header />
      <div className="max-w-6xl mx-auto mt-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Fale Conosco</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pelo canal de atendimento ao cliente estamos disponíveis para atendê-lo(a) da melhor forma.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5 space-y-8">

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-blue-700" size={24} />
                WHATSAPP
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Ituiutaba</h3>
                  <p className="flex items-center gap-1">
                    <Phone size={16} className="text-blue-600" />
                    [34] 3269-3300
                  </p>
                  <p className="mt-2 font-semibold text-blue-800">Afonso Pena</p>
                  <p className="flex items-center gap-1">
                    <Phone size={16} className="text-blue-600" />
                    [34] 3225-3301
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Sindcont</h3>
                  <p className="flex items-center gap-1">
                    <Phone size={16} className="text-blue-600" />
                    [34] 3234-6902
                  </p>
                  <p className="mt-2 font-semibold text-blue-800">Matriz</p>
                  <p className="flex items-center gap-1">
                    <Phone size={16} className="text-blue-600" />
                    [34] 3306-6006
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-700" size={24} />
                ONDE ESTAMOS
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-800 flex items-center gap-1">
                    <MapPin size={16} className="text-blue-600" />
                    ITUIUTABA-MG
                  </h3>
                  <p className="text-sm ml-6">RUA VINTE E SEIS, 1191 – SALA 1, ITUIUTABA – MG</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 flex items-center gap-1">
                    <MapPin size={16} className="text-blue-600" />
                    UBERLÂNDIA - MG
                  </h3>
                  <p className="text-sm ml-6">AVENIDA AFONSO PENA, 2879, UBERLÂNDIA – MG</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 flex items-center gap-1">
                    <MapPin size={16} className="text-blue-600" />
                    UBERLÂNDIA - MG
                  </h3>
                  <p className="text-sm ml-6">RUA BUENO BRANDÃO, 750, UBERLÂNDIA – MG</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 flex items-center gap-1">
                    <MapPin size={16} className="text-blue-600" />
                    UBERLÂNDIA - MG
                  </h3>
                  <p className="text-sm ml-6">AV. JOÃO NAVES DE ÁVILA, 1314 – SALA 5, UBERLÂNDIA – MG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">AINDA COM DÚVIDA?</h2>
                <p className="text-lg text-gray-700">Preencha o formulário para entrar em contato conosco!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="Seu telefone com WhatsApp"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    placeholder="Assunto da mensagem"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Sua mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
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

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Mail className="text-blue-700" size={24} />
                Siga-nos
              </h2>
              <p className="text-gray-700 mb-4">Acompanhe nossas redes sociais para ficar por dentro de todas as novidades.</p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  Instagram
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}