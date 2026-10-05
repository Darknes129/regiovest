'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O material é físico ou digital?',
      a: 'O material é 100% digital em formato PDF de alta resolução. Isso significa que você não precisa esperar dias pelo frete e pode começar a estudar no exato minuto em que seu pagamento for confirmado.',
    },
    {
      q: 'Como vou receber o meu acesso após o pagamento?',
      a: 'Assim que a compra for concluída (instantâneo no PIX ou poucos minutos no cartão), você receberá um e-mail com os links seguros para baixar todos os arquivos PDF no seu celular, tablet ou computador. Você também pode guardar os arquivos no Google Drive ou iCloud.',
    },
    {
      q: 'Posso estudar pelo celular ou tablet?',
      a: 'Com certeza! O material foi diagramado com tipografia grande, fontes confortáveis e excelente contraste para leitura no smartphone, iPad, Galaxy Tab ou qualquer leitor de PDF (como GoodNotes, Notability, Adobe Acrobat, etc.).',
    },
    {
      q: 'Posso imprimir o material para resolver à mão?',
      a: 'Sim! Os PDFs foram configurados no formato padrão A4 com margens otimizadas para impressão em casa ou em gráfica. Você pode imprimir as folhas de questões para simular o tempo real de prova com sua caneta preta.',
    },
    {
      q: 'O material serve para a 1ª fase ou para a 2ª fase?',
      a: 'Temos opções específicas para cada uma: o Guia Estratégico de 1ª Fase (focado nas 72 questões objetivas e gestão de tempo) e o Guia de Mestria Discursiva de 2ª Fase (focado nos critérios de escrita e pontuação da banca). Você também pode optar pelo Combo Completo com desconto.',
    },
    {
      q: 'Por quanto tempo terei acesso ao material?',
      a: 'O acesso ao download dos arquivos é vitalício para o ciclo do vestibular. Uma vez baixado no seu dispositivo, o arquivo PDF é seu para sempre.',
    },
    {
      q: 'Como funciona o pagamento e quais são as formas aceitas?',
      a: 'Você pode pagar via PIX (com liberação instantânea em segundos) ou Cartão de Crédito em até 6x. A transação é processada em ambiente criptografado e seguro.',
    },
    {
      q: 'A RegioVest pertence à UNICAMP ou à COMVEST?',
      a: 'A RegioVest é uma iniciativa educacional independente e não possui vínculo institucional com a Universidade Estadual de Campinas (UNICAMP) ou com a COMVEST. Nosso trabalho consiste na curadoria pedagógica e análise estratégica da prova pública para auxiliar estudantes na preparação.',
      highlight: true,
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Tudo o que você precisa saber antes de garantir seu material da RegioVest.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500 bg-blue-50/20 shadow-sm'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                } ${faq.highlight ? 'ring-1 ring-amber-400/40' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-extrabold text-slate-900 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.highlight && (
                      <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Aviso Institucional Importante</span>
                      </div>
                    )}
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
