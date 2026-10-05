'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import { Eye, ChevronRight, ChevronLeft, ZoomIn, Check, Sparkles, BookOpen, Layers, Bookmark } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenSample: () => void;
}

export default function ProductShowcase({ onOpenSample }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'fase1' | 'resolucao' | 'discursiva' | 'raio_x'>('fase1');
  const [zoomActive, setZoomActive] = useState(false);

  const tabs = [
    { id: 'fase1', label: '1. Capa & Estrutura Oficial', icon: BookOpen },
    { id: 'raio_x', label: '2. Raio-X de Recorrência', icon: Layers },
    { id: 'resolucao', label: '3. Resolução com Marca-Texto', icon: Sparkles },
    { id: 'discursiva', label: '4. Gabarito 2ª Fase COMVEST', icon: Bookmark },
  ];

  return (
    <section id="amostra" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-notebook-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Transparência Total</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Olha o que você vai ter na mão 👀
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Veja exatamente como as páginas dos nossos PDFs foram diagramadas para poupar seu tempo e turbinar seus acertos.
          </p>

          {/* Interactive switcher tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setZoomActive(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Big Interactive Document Canvas Mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Top toolbar */}
          <div className="flex items-center justify-between bg-slate-800/90 backdrop-blur-md px-4 py-3 rounded-t-2xl border-t border-x border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                RegioVest_UNICAMP_Amostra_Visual.pdf (100% Zoom)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setZoomActive(!zoomActive)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{zoomActive ? 'Reduzir Zoom' : 'Ver em Detalhe'}</span>
              </button>

              <button
                onClick={onOpenSample}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Folhear 3 Páginas</span>
              </button>
            </div>
          </div>

          {/* Document Content Viewport */}
          <div
            className={`bg-white text-slate-900 rounded-b-2xl p-6 sm:p-10 shadow-2xl border border-slate-700 transition-all duration-300 ${
              zoomActive ? 'scale-105 shadow-blue-500/20' : ''
            }`}
          >
            {/* VIEW 1: COVER & OFFICIAL INDEX */}
            {activeTab === 'fase1' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-slate-900 pb-5 gap-4">
                  <div className="flex items-center gap-3">
                    <Logo size="md" showWordmark={false} variant="dark" />
                    <div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                        REGIOVEST · UNICAMP 1ª FASE
                      </div>
                      <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                        Edição Atualizada 2026/2027 · Guia Estratégico & Questões
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-orange-100 text-orange-900 text-xs font-extrabold border border-orange-200">
                    MATERIAL OFICIAL REGIOVEST
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <h4 className="text-lg font-black text-slate-900">
                      Como este guia foi estruturado:
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                        <span><strong>Mapeamento Estatístico:</strong> Gráficos com os temas mais cobrados pela COMVEST nos últimos 8 anos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                        <span><strong>450+ Questões Selecionadas:</strong> Nada de questões antigas desatualizadas; apenas o padrão atual.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                        <span><strong>Resoluções Detalhadas:</strong> Com marca-texto nas pistas cruciais e alertas de distratores.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Visual PDF page layout card */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-5 rounded-2xl border-2 border-dashed border-blue-200 text-center space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                      Design Limpo & Confortável
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Margens amplas para anotações, tipografia pensada para não cansar a vista e esquemas visuais fáceis de memorizar.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs font-extrabold text-blue-900">
                      <span>📱 iPad / Celular</span>
                      <span>•</span>
                      <span>💻 Notebook</span>
                      <span>•</span>
                      <span>🖨️ A4 Impresso</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: RAIO-X DE RECORRÊNCIA */}
            {activeTab === 'raio_x' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase">Módulo Analítico</span>
                    <h4 className="text-xl font-black text-slate-900">
                      Raio-X COMVEST: O que realmente cai em Biologia & Interdisciplinar
                    </h4>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                    Estatística Consolidada
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Progress bars illustrating priority topics */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">1. Ecologia, Impactos Ambientais & Biomas Brasileiros</span>
                      <span className="text-blue-700">31% da prova</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">2. Fisiologia Humana & Conexões com Saúde Pública</span>
                      <span className="text-blue-700">24% da prova</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800">3. Genética Molecular & Biotecnologia</span>
                      <span className="text-blue-700">19% da prova</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium">
                  <strong>💡 Conclusão Estratégica:</strong> Concentrando seus estudos nestes 3 eixos, você garante o domínio de quase 75% das questões da área. Não gaste semanas decorando ciclos botânicos obscuros que a UNICAMP raramente aborda.
                </div>
              </div>
            )}

            {/* VIEW 3: RESOLUÇÃO COM MARCA-TEXTO */}
            {activeTab === 'resolucao' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase">Resolução Comentada</span>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">
                      Exemplo Prático: Como a banca cobra interpretação
                    </h4>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                    Passo a Passo
                  </span>
                </div>

                {/* Simulated Question */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <p>
                    <strong>(UNICAMP 1ª Fase)</strong> O processo de transição energética no Brasil envolve o uso de biocombustíveis. Considere o rendimento por hectare e a pegada de carbono...
                  </p>
                  <p className="mt-2">
                    De acordo com os dados do gráfico, a alternativa que expressa{' '}
                    <span className="marker-yellow font-bold text-slate-950">
                      a correlação direta entre eficiência e emissão de gases
                    </span>{' '}
                    é:
                  </p>
                </div>

                {/* Annotated margin guidance */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8 p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs space-y-2">
                    <div className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Análise Rápida RegioVest:</span>
                    </div>
                    <p className="text-slate-700">
                      A banca colocou uma pegadinha na alternativa B invertendo a ordem das grandezas. O comando pede expressamente a relação direta:{' '}
                      <span className="marker-lime font-bold">Alternativa C</span>.
                    </p>
                  </div>

                  <div className="md:col-span-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 space-y-1">
                    <span className="font-black text-amber-950 block">⚠️ ALERTA DISTRATOR</span>
                    <p>82% dos erros nesta questão acontecem por pressa na leitura das unidades de medida (kg/ha vs t/ha).</p>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: GABARITO 2ª FASE COMVEST */}
            {activeTab === 'discursiva' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase">2ª Fase Discursiva</span>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">
                      Padrão de Resposta Esperado pela Banca COMVEST
                    </h4>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                    Critério Oficial
                  </span>
                </div>

                <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 text-xs sm:text-sm space-y-3">
                  <div className="font-bold text-purple-950">
                    Item A: Explique o mecanismo físico envolvido no experimento e justifique matematicamente.
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-purple-200 text-xs space-y-2">
                    <div className="text-[11px] font-black text-emerald-700 flex items-center gap-1">
                      <span>✓ RESPOSTA NOTA MÁXIMA (2,0/2,0):</span>
                    </div>
                    <p className="text-slate-700 italic">
                      “Pelo princípio da conservação da energia mecânica (E_mec = constante), uma vez que as forças dissipativas são desprezíveis, temos que: ΔE_cinética = -ΔE_potencial. Portanto, a velocidade ao final da rampa independe da massa do corpo, dependendo unicamente da altura h e da aceleração g.”
                    </p>
                    <div className="text-[10px] text-slate-500 font-semibold pt-1 border-t">
                      Por que pontuou máximo? Citou a hipótese inicial (desprezo de atrito) e deduziu a independência da massa em apenas 3 linhas objetivas.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-950">
                  <strong>❌ O que faz perder pontos na 2ª Fase:</strong> Colocar apenas a fórmula sem explicar o que as variáveis representam ou esquecer as unidades no Sistema Internacional.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
