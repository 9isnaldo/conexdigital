'use client';

import { User, Building, CheckCircle } from "lucide-react";

const Produtos = () => {
    const products = [
        {
            name: "e-CPF",
            subtitle: "Pessoa Física",
            forWho: "Advogados, Contadores, Investidores e Profissionais Liberais",
            benefits: [
                "Declaração de Imposto de Renda",
                "Assinatura de documentos digitais",
                "Acesso a sistemas governamentais",
                "Consultas no INSS e FGTS",
                "Operações bancárias seguras"
            ],
            price: "A partir de R$ 140,00/ano",
            ctaText: "Quero e-CPF",
            variant: "default" as const,
            popular: false
        },
        {
            name: "e-CNPJ",
            subtitle: "Pessoa Jurídica",
            forWho: "Empresários, MEI, Contadores e Gestores",
            benefits: [
                "Emissão de NF-e e NFS-e",
                "Acesso ao SEFAZ e SINTEGRA",
                "Assinatura de contratos digitais",
                "Declaração de imposto empresarial",
                "Conectividade com ERP/sistemas"
            ],
            price: "A partir de R$ 195,00/ano",
            ctaText: "QUERO e-CNPJ",
            variant: "primary" as const,
            popular: true
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-5xl font-black mb-6 text-conex-azul">
                            Encontre o Certificado Digital Perfeito para suas Necessidades
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Oferecemos soluções completas em certificação digital para pessoas físicas e jurídicas, 
                            com a segurança e praticidade que você precisa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {products.map((product, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className="card-produto"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Borda animada */}
                                    <div className="card-produto-border"></div>
                                    
                                    {/* Tag "MAIS POPULAR" animada */}
                                    {product.popular && (
                                        <span className="card-produto-popular-tag">MAIS POPULAR</span>
                                    )}

                                    <div className="card-produto-content">
                                        {/* Cabeçalho com ícone */}
                                        <div className="text-center mb-8">
                                            <h3 className="card-produto-title text-5xl">{product.name}</h3>
                                            <p className="card-produto-subtitle">{product.subtitle}</p>
                                        </div>

                                        {/* Seção "Para quem" */}
                                        <div className="card-produto-section">
                                            <h4 className="card-produto-section-title">Para quem:</h4>
                                            <p className="text-gray-400 text-base">{product.forWho}</p>
                                        </div>

                                        {/* Seção de benefícios */}
                                        <div className="card-produto-section">
                                            <h4 className="card-produto-section-title">Benefícios:</h4>
                                            <ul className="card-produto-benefits">
                                                {product.benefits.map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="card-produto-benefit-item">
                                                        <CheckCircle className="card-produto-benefit-icon h-5 w-5 flex-shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Preço */}
                                        <div className="card-produto-price">
                                            {product.price}
                                        </div>
                                                
                                        {/* Botão CTA */}
                                        <button 
                                            className={`card-produto-cta ${
                                                product.variant === 'primary' 
                                                    ? 'card-produto-cta-primary' 
                                                    : 'card-produto-cta-default'
                                            }`}
                                        >
                                            {product.ctaText}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Produtos;