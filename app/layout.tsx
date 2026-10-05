import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'RegioVest — Materiais para UNICAMP, UNESP e FUVEST',
  description:
    'Materiais digitais em PDF focados cirurgicamente nos três principais vestibulares paulistas: UNICAMP, UNESP e FUVEST. 1ª e 2ª Fase com questões e padrão de banca.',
  keywords: [
    'material UNICAMP',
    'material UNESP',
    'material FUVEST',
    'vestibulares paulistas',
    'UNICAMP primeira fase',
    'UNESP primeira fase',
    'FUVEST primeira fase',
    'apostila PDF vestibular',
    'RegioVest',
  ],
  authors: [{ name: 'RegioVest' }],
  creator: 'RegioVest',
  publisher: 'RegioVest',
  openGraph: {
    title: 'RegioVest — Materiais para UNICAMP, UNESP e FUVEST',
    description:
      'Seu vestibular. Sua fase. Sua preparação. Materiais digitais em PDF direto ao ponto para UNICAMP, UNESP e FUVEST.',
    url: 'https://regiovest.com.br',
    siteName: 'RegioVest',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RegioVest — Materiais para UNICAMP, UNESP e FUVEST',
    description:
      'Materiais em PDF práticos e objetivos para a 1ª e 2ª fase da UNICAMP, UNESP e FUVEST.',
  },
  icons: {
    icon: '/logo-regiovest-icon.png',
    apple: '/logo-regiovest-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body
        className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-300 selection:text-slate-950 overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
