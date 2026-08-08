import type { Metadata } from 'next';
import { Inter, PT_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ptSerif = PT_Serif({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-pt-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://atlas-cleaning.com'),
  title: 'Atlas | Professional Cleaning for Homes and Offices in NYC',
  description: 'Atlas offers meticulous residential and office cleaning across New York City and the Tri-State Area. Request a visit for recurring, move-in, move-out, and deep cleaning.',
  keywords: ['cleaning company NYC', 'office cleaning NYC', 'residential cleaning New York', 'move out cleaning tri state'],
  openGraph: {
    title: 'Atlas | Professional Cleaning for Homes and Offices in NYC',
    description: 'Calm, meticulous cleaning for homes and offices across New York City and the Tri-State Area.',
    url: 'https://atlas-cleaning.com',
    siteName: 'Atlas',
    type: 'website'
  },
  alternates: {
    canonical: 'https://atlas-cleaning.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
