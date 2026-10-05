import type { Metadata } from 'next';
import VestibularLanding from '@/components/VestibularLanding';
import { VESTIBULARES_CONFIG } from '@/lib/vestibulares-data';

export const metadata: Metadata = {
  title: 'Material para UNESP | 1ª e 2ª Fase | RegioVest',
  description:
    'Materiais em PDF específicos para o vestibular da UNESP (VUNESP). Guia tático para as 90 questões da 1ª fase, raio-x de recorrência e padrão de redação nota máxima.',
  keywords: [
    'material UNESP',
    'vestibular UNESP 2027',
    'UNESP primeira fase',
    'UNESP segunda fase',
    'redacao UNESP VUNESP',
    'apostila UNESP PDF',
    'RegioVest UNESP',
  ],
  openGraph: {
    title: 'Material para UNESP | 1ª e 2ª Fase | RegioVest',
    description:
      'A VUNESP é uma banca direta e consistente. Descubra os temas mais cobrados e estude com foco no padrão oficial da UNESP.',
    url: 'https://regiovest.com.br/unesp',
    siteName: 'RegioVest',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function UnespPage() {
  return <VestibularLanding data={VESTIBULARES_CONFIG.unesp} />;
}
