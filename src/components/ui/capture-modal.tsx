'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Send } from "lucide-react";

interface CaptureFormData {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  service?: string;
  website?: string;
}

interface CaptureFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasExtraFields?: boolean;
}

export const CaptureModal = ({ isOpen, onClose, hasExtraFields = false }: CaptureFormModalProps) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<CaptureFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Abertura de Empresa",
    "Contabilidade",
    "BPO Financeiro", 
    "Certificado Digital",
    "Consultoria Empresarial",
    "Mentoria de Crescimento",
    "Planejamento Tributário",
    "Análise de Mercado",
    "Gestão de Clínicas (Iupcare)",
    "Emissão de Notas Fiscais",
    "Direito empresarial e Tributário",
    "Marketing Digital",
    "Desenvolvimento de softwares",
    "Social Media",
    "Outro"
  ];

  const selectedService = watch("service");

  const onSubmit = async (data: CaptureFormData) => {
    setIsSubmitting(true);
    // Aqui você pode implementar o envio dos dados
    console.log("Dados do formulário:", data);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirecionar para WhatsApp com os dados
    let message = `Olá! Gostaria de conhecer as duas avenidas integradas da Tucont.
    
Meus dados:
Nome: ${data.name}
Email: ${data.email}  
Telefone: ${data.phone}
CNPJ: ${data.cnpj}`;

    if (hasExtraFields) {
      if (data.service) {
        message += `\nServiço de interesse: ${data.service}`;
      }
      if (data.website) {
        message += `\nSite da empresa: ${data.website}`;
      }
    }
    
    window.open(`https://wa.me/5531975740510?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitting(false);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">
            Tudo o que você precisa para a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              gestão do seu negócio
            </span>
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-slate-300 text-sm mb-6">
          Comece a usar o Tucont gratuitamente
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
              Nome
            </label>
            <input
              id="name"
              placeholder="Nome"
              className="w-full bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              className="w-full bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
              {...register("email", { 
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-sm font-medium mb-1">
              Telefone
            </label>
            <div className="flex gap-2">
              <div className="flex items-center bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2">
                <span className="text-white text-sm">🇧🇷 +55</span>
              </div>
              <input
                id="phone"
                placeholder="Telefone"
                className="flex-1 bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                {...register("phone", { required: "Telefone é obrigatório" })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="cnpj" className="block text-white text-sm font-medium mb-1">
              CNPJ
            </label>
            <input
              id="cnpj"
              placeholder="CNPJ"
              className="w-full bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
              {...register("cnpj", { required: "CNPJ é obrigatório" })}
            />
            {errors.cnpj && (
              <p className="text-red-400 text-sm mt-1">{errors.cnpj.message}</p>
            )}
          </div>

          {hasExtraFields && (
            <>
              <div>
                <label htmlFor="service" className="block text-white text-sm font-medium mb-1">
                  Produto/Serviço de Interesse ou a Ofertar
                </label>
                <select
                  id="service"
                  className="w-full bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  value={selectedService}
                  onChange={(e) => setValue("service", e.target.value)}
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((service) => (
                    <option 
                      key={service} 
                      value={service}
                      className="bg-slate-800 text-white"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="website" className="block text-white text-sm font-medium mb-1">
                  Site da Empresa (opcional)
                </label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://www.suaempresa.com.br"
                  className="w-full bg-slate-800/70 border border-slate-500 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  {...register("website")}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 text-white py-3 px-4 rounded-md font-semibold shadow-lg mt-4 flex items-center justify-center transition-all disabled:opacity-70"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Enviando..." : "Experimente agora"}
          </button>
        </form>
      </div>
    </div>
  );
};