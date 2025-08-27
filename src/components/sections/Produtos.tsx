'use client';

import { User, Building, CheckCircle } from "lucide-react";

const Produtos = () => {
    const products = [
        {
        icon: User,
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
        icon: Building,
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
        variant: "cta" as const,
        popular: true
        }
    ];

return (
    <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Encontre o Certificado Digital Perfeito para suas Necessidades
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções completas em certificação digital para pessoas físicas e jurídicas, 
            com a segurança e praticidade que você precisa.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
                <div 
                key={index} 
                className={`relative glass rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    product.popular 
                    ? 'border-2 border-orange-500 transform scale-105 shadow-lg' 
                    : 'border border-gray-200'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                        MAIS POPULAR
                    </span>
                    </div>
                )}

                <div className="text-center mb-6">
                    <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ background: 'linear-gradient(135deg, #325595, #00c6e8)' }}
                    >
                    <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-[#325595] font-semibold text-lg">{product.subtitle}</p>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Para quem:</h4>
                    <p className="text-gray-700 text-base">{product.forWho}</p>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Benefícios:</h4>
                    <ul className="space-y-3">
                    {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-base">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                    
                <div className="mb-6 text-center">
                    <p className="text-2xl font-bold text-[#325595]">{product.price}</p>
                </div>
                                        
                    <button 
                    className={`items-center py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                    product.variant === 'cta' 
                        ? 'bg-[#325595] text-white hover:bg-[#2a4780] hover:shadow-lg' 
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                >
                    {product.ctaText}
                </button>
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