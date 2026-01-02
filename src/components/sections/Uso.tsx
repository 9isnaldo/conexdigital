'use client'

import { CheckCircle } from 'lucide-react'
import { useRef } from 'react'

interface OndeUsarProps {
  title?: string
  description?: string
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export default function OndeUsar({

  title = "Onde posso usar meu certificado digital?",
  description = "Descubra todas as possibilidades que seu certificado digital oferece para facilitar seu dia a dia",
  backgroundColor = "#0b2643",
  textColor = "#ffffff",
  accentColor = "#00c6e8"
}: OndeUsarProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const usos = [
    'Declaração de Imposto de Renda',
    'Assinatura de contratos digitais',
    'Acesso ao e-CAC da Receita Federal',
    'Procurações eletrônicas',
    'Transações bancárias',
    'Acesso ao Gov.br',
    'INSS Digital',
    'Carteira de Trabalho Digital',
    'Consulta ao PIS/PASEP',
    'Participação em licitações',
    'Certidões digitais',
    'Consulta processual'
  ]

  const duplicatedUsos = [...usos, ...usos]

  // Componente do item do carrossel
  const CarouselItem = ({ texto }: { texto: string }) => (
    <div className="carousel-item">
      <CheckCircle className="carousel-item-icon" />
      <span className="carousel-item-text">{texto}</span>
    </div>
  )

  return (
    <section 
      className="py-16"
      style={{
        background: backgroundColor
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: textColor }}>
            {title}
          </h2>
          <p className="text-xl" style={{ color: textColor, opacity: 0.9 }}>
            {description}
          </p>
        </div>

        <div className="carousel-container hidden md:block">
          <div className="carousel-gradient-left" />
          <div className="carousel-gradient-right" />
          
          <div 
            ref={trackRef}
            className="carousel-track"
            style={{ animationPlayState: 'running' }}
          >
            {duplicatedUsos.map((uso, index) => (
              <CarouselItem key={`${uso}-${index}`} texto={uso} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-6 md:hidden">
          {usos.slice(0, 8).map((uso, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 rounded-xl p-4 bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" style={{ color: accentColor }} />
                </div>
                <span className="text-sm font-semibold text-gray-800">{uso}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg" style={{ color: textColor, opacity: 0.9 }}>
            Além desses usos, seu certificado digital também serve para acesso seguro a diversos outros serviços governamentais e privados com total validade jurídica.
          </p>
        </div>
      </div>
    </section>
  )
}