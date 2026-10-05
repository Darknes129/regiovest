'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface VestibularSwitcherProps {
  current?: 'home' | 'unicamp' | 'unesp' | 'fuvest';
  className?: string;
}

export default function VestibularSwitcher({
  current,
  className = '',
}: VestibularSwitcherProps) {
  const vestibulares = [
    {
      id: 'unicamp',
      name: 'UNICAMP',
      href: '/unicamp',
      color: 'hover:border-blue-500 hover:text-blue-600',
      activeColor: 'bg-blue-600 text-white border-blue-600 shadow-md',
      tag: '1ª e 2ª Fase COMVEST',
    },
    {
      id: 'unesp',
      name: 'UNESP',
      href: '/unesp',
      color: 'hover:border-orange-500 hover:text-orange-600',
      activeColor: 'bg-orange-600 text-white border-orange-600 shadow-md',
      tag: '1ª e 2ª Fase VUNESP',
    },
    {
      id: 'fuvest',
      name: 'FUVEST',
      href: '/fuvest',
      color: 'hover:border-emerald-600 hover:text-emerald-700',
      activeColor: 'bg-emerald-700 text-white border-emerald-700 shadow-md',
      tag: '1ª e 2ª Fase USP',
    },
  ];

  return (
    <div className={`p-4 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navegação Rápida
            </div>
            <div className="text-sm font-extrabold text-white">
              Preparando-se para outro vestibular paulista?
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {vestibulares.map((v) => {
            const isActive = current === v.id;
            return (
              <Link
                key={v.id}
                href={v.href}
                className={`px-4 py-2 rounded-xl text-xs font-black border transition-all flex items-center gap-1.5 ${
                  isActive
                    ? v.activeColor
                    : `bg-slate-800/90 text-slate-200 border-slate-700 ${v.color}`
                }`}
              >
                <span>{v.name}</span>
                <span className="text-[10px] font-normal opacity-80 hidden sm:inline">
                  ({v.tag.split(' ')[0]} {v.tag.split(' ')[1]} {v.tag.split(' ')[2]})
                </span>
                {!isActive && <ArrowRight className="w-3 h-3 opacity-60" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
