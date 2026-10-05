import type { Metadata } from 'next';
import VestibularLanding from '@/components/VestibularLanding';
import { VESTIBULARES_CONFIG } from '@/lib/vestibulares-data';

export const metadata: Metadata = {
  title: 'Material para UNICAMP | 1ª e 2ª Fase | RegioVest',
  description:
    'Materiais em PDF focados 100% no padrão UNICAMP (COMVEST). Raio-X de incidência estatística, 450+ questões comentadas e modelos discursivos de 2ª fase.',
  keywords: [
    'material UNICAMP',
    'material UNICAMP 2027',
    'UNICAMP primeira fase',
    'UNICAMP segunda fase',
    'apostila UNICAMP PDF',
    'RegioVest UNICAMP',
  ],
  openGraph: {
    title: 'Material para UNICAMP | 1ª e 2ª Fase | RegioVest',
    description:
      'Pare de perder tempo com resumos genéricos. Estude para a UNICAMP com materiais digitais em PDF direto ao ponto.',
    url: 'https://regiovest.com.br/unicamp',
    siteName: 'RegioVest',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function UnicampPage() {
  return <VestibularLanding data={VESTIBULARES_CONFIG.unicamp} />;
}
