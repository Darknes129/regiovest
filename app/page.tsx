'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCta from '@/components/StickyMobileCta';
import VestibularSwitcher from '@/components/VestibularSwitcher';
import {
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  BookOpen,
  Zap,
  Target,
  Layers,
  Smartphone,
  Check,
  ShieldCheck,
  HelpCircle,
  AlertCircle,
  Eye,
  ChevronDown,
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const vestibulares = [
    {
      id: 'unicamp',
      name: 'UNICAMP',
      badge: 'COMVEST · 1ª e 2ª Fase',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      title: 'UNICAMP',
      headline: 'Leitura crítica, interdisciplinaridade e redação em múltiplos gêneros.',
      subtitle: 'Preparação direcionada para as 72 questões da 1ª fase e discursivas da 2ª fase.',
      cta: 'ESTUDAR PARA UNICAMP →',
      href: '/unicamp',
      gradient: 'from-blue-700 via-blue-800 to-indigo-950',
      border: 'border-blue-500/40 hover:border-blue-500',
      accentColor: 'text-blue-400',
      tagColor: 'bg-blue-600',
      features: [
        'Raio-X estatístico dos temas mais cobrados pela COMVEST',
        '450+ questões selecionadas com resolução passo a passo',
        'Modelos de respostas discursivas nota máxima para 2ª fase',
      ],
    },
    {
      id: 'unesp',
      name: 'UNESP',
      badge: 'VUNESP · 1ª e 2ª Fase',
      badgeColor: 'bg-orange-100 text-orange-950 border-orange-200',
      title: 'UNESP',
      headline: 'Objetividade, previsibilidade conceitual e redação dissertativa tradicional.',
      subtitle: 'Materiais para preparação tática da 1ª à 2ª fase da VUNESP.',
      cta: 'ESTUDAR PARA UNESP →',
      href: '/unesp',
      gradient: 'from-orange-700 via-rose-800 to-slate-950',
      border: 'border-orange-500/40 hover:border-orange-500',
      accentColor: 'text-orange-400',
      tagColor: 'bg-orange-600',
      features: [
        'Treino de ritmo para as 90 questões objetivas da 1ª fase',
        'Módulo exclusivo: O Padrão da Redação Nota 28 da VUNESP',
        'Questões discursivas com critérios oficiais de correção',
      ],
    },
    {
      id: 'fuvest',
      name: 'FUVEST',
      badge: 'USP · 1ª e 2ª Fase',
      badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-200',
      title: 'FUVEST',
      headline: 'Densidade teórica, obras literárias obrigatórias e redação analítica.',
      subtitle: 'Preparação focada nas duas fases do vestibular mais concorrido do país.',
      cta: 'ESTUDAR PARA FUVEST →',
      href: '/fuvest',
      gradient: 'from-emerald-800 via-teal-900 to-slate-950',
      border: 'border-emerald-500/40 hover:border-emerald-500',
      accentColor: 'text-emerald-400',
      tagColor: 'bg-emerald-700',
      features: [
        'Raio-X de corte das 90 questões de alta densidade da USP',
        'Análise temática e intertextual das obras literárias da lista',
        'Resoluções discursivas com rigor conceitual completo',
      ],
    },
  ];

  const advantages = [
    {
      icon: Target,
      title: 'Preparação Direcionada',
      desc: 'Cada vestibular tem estilo, ritmo e banca próprios. Aqui você estuda o que a sua prova cobra, sem misturar conteúdos genéricos.',
      color: 'bg-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Materiais Organizados',
      desc: 'Adeus às pastas caóticas com centenas de PDFs sem nexo. Apostilas com sumário inteligente, divisão por disciplina e nível de incidência.',
      color: 'bg-orange-500',
    },
    {
      icon: Zap,
      title: 'Acesso Digital Imediato',
      desc: 'Sem esperar dias por frete. Pague no PIX ou cartão e comece a estudar no mesmo minuto em qualquer dispositivo.',
      color: 'bg-amber-500',
    },
    {
      icon: Layers,
      title: 'Pensado para Revisão',
      desc: 'Marca-textos nos termos decisivos dos enunciados, alertas de pegadinhas clássicas e resumos estratégicos de reta final.',
      color: 'bg-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Estude Onde Quiser',
      desc: 'Formato PDF de alta legibilidade para ler no celular, estudar no tablet com caneta stylus ou imprimir folhas avulsas.',
      color: 'bg-emerald-600',
    },
  ];

  const homeFaqs = [
    {
      q: 'Qual é a diferença entre os materiais da UNICAMP, UNESP e FUVEST?',
      a: 'Cada vestibular paulista possui uma banca organizadora com estilo próprio (COMVEST, VUNESP e FUVEST). A RegioVest não reaproveita material genérico: cada guia foi construído do zero respeitando a quantidade de questões, as leituras obrigatórias, o formato da redação e os critérios de correção da respectiva instituição.',
    },
    {
      q: 'Como recebo o acesso aos materiais após a compra?',
      a: 'O envio é imediato e 100% digital. Assim que o pagamento for aprovado (instantâneo via PIX ou em poucos minutos no cartão), você receberá um e-mail com os links seguros de download para salvar no seu celular, tablet, computador ou nuvem.',
    },
    {
      q: 'Os materiais cobrem a 1ª fase e a 2ª fase?',
      a: 'Sim! Para os três vestibulares (UNICAMP, UNESP e FUVEST) oferecemos materiais dedicados para a 1ª Fase, para a 2ª Fase e também o Combo Aprovação Total com desconto promocional.',
    },
    {
      q: 'A RegioVest tem vínculo institucional com as universidades?',
      a: 'A RegioVest é uma iniciativa educacional independente e não possui vínculo institucional com UNICAMP, COMVEST, UNESP, VUNESP, USP ou FUVEST.',
      highlight: true,
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar currentVestibular="home" />

      <main className="flex-1">
        {/* =========================================
            HERO GERAL DA REGIOVEST
        ========================================== */}
        <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 border-b border-slate-200/60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-notebook-grid opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs sm:text-sm font-bold shadow-xs mb-6">
              <Sparkles className="w-4 h-4 text-amber-500 fill-current" />
              <span>PLATAFORMA ESPECIALIZADA NOS VESTIBULARES PAULISTAS</span>
            </div>

            {/* Giant Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6 text-balance">
              Seu vestibular. Sua fase.{' '}
              <span className="marker-yellow text-slate-950">
                Sua preparação.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto mb-4">
              Escolha onde você quer chegar. A RegioVest organiza o caminho.
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Materiais digitais em PDF focados cirurgicamente no estilo exato de quem vai prestar{' '}
              <strong className="text-blue-700">UNICAMP</strong>,{' '}
              <strong className="text-orange-600">UNESP</strong> ou{' '}
              <strong className="text-emerald-700">FUVEST</strong>.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="#objetivo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>ESCOLHER MEU VESTIBULAR</span>
                <span className="text-xl group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>

            {/* Microcopy badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600 mb-12">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Material 100% digital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1ª e 2ª Fase cobertas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Entrega imediata no e-mail</span>
              </div>
            </div>

            {/* Visual Multi-Vestibular Composition Preview */}
            <div className="max-w-4xl mx-auto bg-slate-900 p-4 sm:p-6 rounded-3xl shadow-2xl border-4 border-slate-800 relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-mono text-slate-400 ml-2 hidden sm:inline">
                    RegioVest_Plataforma_Vestibulares_Paulistas.pdf
                  </span>
                </div>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Edição Atualizada 2026/2027
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* UNICAMP preview chip */}
                <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-500/30 space-y-2 text-white">
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className="text-blue-400">UNICAMP</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-200">72 Questões</span>
                  </div>
                  <div className="text-xs font-bold text-slate-100">Guia Estratégico COMVEST</div>
                  <p className="text-[11px] text-blue-200 leading-relaxed">
                    Raio-X de incidência, questões interdisciplinares e critérios discursivos.
                  </p>
                </div>

                {/* UNESP preview chip */}
                <div className="p-4 rounded-2xl bg-orange-950/80 border border-orange-500/30 space-y-2 text-white">
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className="text-orange-400">UNESP</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-200">90 Questões</span>
                  </div>
                  <div className="text-xs font-bold text-slate-100">Guia Tático VUNESP</div>
                  <p className="text-[11px] text-orange-200 leading-relaxed">
                    Ritmo de prova, temas recorrentes e redação dissertativa nota 28.
                  </p>
                </div>

                {/* FUVEST preview chip */}
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 space-y-2 text-white">
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className="text-emerald-400">FUVEST</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">USP 1ª e 2ª</span>
                  </div>
                  <div className="text-xs font-bold text-slate-100">Guia de Domínio FUVEST</div>
                  <p className="text-[11px] text-emerald-200 leading-relaxed">
                    Obras literárias obrigatórias, densidade teórica e redação filosófica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SEÇÃO PRINCIPAL: QUAL É O SEU OBJETIVO?
        ========================================== */}
        <section id="objetivo" className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <span>Escolha Direta</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight text-balance">
                Qual é o seu objetivo?
              </h2>

              <p className="text-base sm:text-lg text-slate-600">
                Selecione o vestibular que você vai prestar para acessar a área dedicada com materiais específicos de 1ª e 2ª fase.
              </p>
            </div>

            {/* 3 Big Visual Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
              {vestibulares.map((v) => (
                <div
                  key={v.id}
                  className={`rounded-3xl bg-gradient-to-br ${v.gradient} text-white p-8 sm:p-9 border-2 ${v.border} shadow-2xl flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    {/* Header badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${v.badgeColor}`}>
                        {v.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-300">
                        1ª e 2ª Fase
                      </span>
                    </div>

                    {/* Vestibular Title */}
                    <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
                      {v.title}
                    </h3>

                    <p className="text-slate-200 text-sm font-semibold mb-3 leading-snug">
                      {v.headline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {v.subtitle}
                    </p>

                    {/* Highlights bullet checklist */}
                    <div className="space-y-2.5 mb-8">
                      {v.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                          <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct button */}
                  <div className="relative z-10 pt-4 border-t border-white/10">
                    <Link
                      href={v.href}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm tracking-wide shadow-lg transition-all group-hover:scale-[1.02] cursor-pointer"
                    >
                      <span>{v.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            SEGUNDA SEÇÃO DA HOME: APRESENTAÇÃO GERAL
        ========================================== */}
        <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <span>Metodologia RegioVest</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
                Três vestibulares.{' '}
                <span className="text-amber-400">
                  Uma preparação muito mais organizada.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300">
                Chega de desespero com materiais que não dialogam com a banca. Descubra os pilares que fazem da RegioVest a escolha estratégica dos vestibulandos paulistas.
              </p>
            </div>

            {/* Advantages Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-md hover:border-slate-500 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${adv.color} text-white flex items-center justify-center mb-5 shadow-sm`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {adv.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-700 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      <span>Foco em Alta Performance</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Switcher inside dark section */}
            <div className="max-w-4xl mx-auto">
              <VestibularSwitcher current="home" />
            </div>
          </div>
        </section>

        {/* =========================================
            FAQ GERAL
        ========================================== */}
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Dúvidas Frequentes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight text-balance">
                Perguntas Frequentes sobre a Plataforma
              </h2>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
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
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Aviso Institucional Obrigatório</span>
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

        {/* =========================================
            FINAL CTA DA HOME
        ========================================== */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-orange-400 fill-current" />
              <span>COMECE SUA PREPARAÇÃO HOJE MESMO</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
              Qualquer que seja seu vestibular paulista,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                estude com o mapa certo.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
              Escolha seu vestibular e acesse os materiais em PDF no formato exato da sua banca examinadora.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                href="/unicamp"
                className="py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                UNICAMP (1ª e 2ª Fase) →
              </Link>
              <Link
                href="/unesp"
                className="py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                UNESP (1ª e 2ª Fase) →
              </Link>
              <Link
                href="/fuvest"
                className="py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                FUVEST (1ª e 2ª Fase) →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with multi-vestibular links & disclaimer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <StickyMobileCta
        vestibularLabel="VESTIBULARES PAULISTAS"
        onOpenCheckout={() => {
          window.location.href = '/unicamp#precos';
        }}
      />
    </div>
  );
}
