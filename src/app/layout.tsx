import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import WhatsappButton from '@/components/ui/whatsapp-button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Conex Digital - Um passo para o futuro',
  description: 'Conex Digital - A melhor em atedimento ao cliente de Uberlândia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body className={`font-sans ${montserrat.className} bg-conex-white min-h-screen`}>
        <Header />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}