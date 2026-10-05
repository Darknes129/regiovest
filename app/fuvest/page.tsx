import type { Metadata } from 'next';
import VestibularLanding from '@/components/VestibularLanding';
import { VESTIBULARES_CONFIG } from '@/lib/vestibulares-data';

export const metadata: Metadata = {
  title: 'Material para FUVEST | 1ª e 2ª Fase | RegioVest',
  description:
    'Materiais em PDF com aprofundamento e densidade exigidos pela FUVEST (USP). Raio-X das 90 questões da 1ª fase, obras literárias obrigatórias e redação analítica.',
  keywords: [
    'material FUVEST',
    'vestibular FUVEST USP',
    'FUVEST primeira fase',
    'FUVEST segunda fase',
    'obras literarias FUVEST',
    'redacao FUVEST',
    'apostila FUVEST PDF',
    'RegioVest FUVEST',
  ],
  openGraph: {
    title: 'Material para FUVEST | 1ª e 2ª Fase | RegioVest',
    description:
      'Sua vaga na USP começa com um estudo de alto nível. Materiais em PDF sem simplificações falsas, no rigor que a FUVEST exige.',
    url: 'https://regiovest.com.br/fuvest',
    siteName: 'RegioVest',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function FuvestPage() {
  return <VestibularLanding data={VESTIBULARES_CONFIG.fuvest} />;
}
