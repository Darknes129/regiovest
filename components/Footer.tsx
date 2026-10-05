'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Mail, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              A RegioVest é uma startup educacional independente focada em criar materiais digitais de alta performance e baixo atrito para os três principais vestibulares paulistas: <strong>UNICAMP, UNESP e FUVEST</strong>.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Ambiente Seguro SSL
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Garantia de 7 Dias
              </span>
            </div>
          </div>

          {/* Vestibulares Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Vestibulares Paulistas
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/unicamp"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-blue-400 font-bold">UNICAMP</span>
                  <span className="text-slate-500 text-[10px]">1ª e 2ª Fase</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/unesp"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-orange-400 font-bold">UNESP</span>
                  <span className="text-slate-500 text-[10px]">VUNESP 1ª e 2ª</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/fuvest"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-400 font-bold">FUVEST</span>
                  <span className="text-slate-500 text-[10px]">USP 1ª e 2ª Fase</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors font-medium">
                  Página Inicial RegioVest
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#dilemas" className="hover:text-white transition-colors">
                  Por que RegioVest
                </a>
              </li>
              <li>
                <a href="#fases" className="hover:text-white transition-colors">
                  1ª e 2ª Fases
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Preços e Ofertas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Atendimento & Suporte
            </div>
            <p className="text-xs text-slate-400">
              Dúvidas sobre o material ou precisa de suporte para sua compra? Fale com nossa equipe.
            </p>
            <div className="pt-1 space-y-2">
              <a
                href="mailto:aprovavest.oficial@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>aprovavest.oficial@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            A <strong>RegioVest</strong> é uma iniciativa educacional independente e não possui vínculo institucional com UNICAMP, COMVEST, UNESP, VUNESP, USP ou FUVEST. Todas as marcas citadas pertencem aos seus respectivos titulares.
          </p>

          <p className="shrink-0 font-medium">
            © {new Date().getFullYear()} RegioVest. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
