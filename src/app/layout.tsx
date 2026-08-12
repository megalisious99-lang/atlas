import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'], variable: '--font-lato' });
const playfair = Playfair_Display({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://atlas-cleaning.com'),
  title: 'Atlas | Professional Cleaning for Homes and Offices in NYC',
  description: 'Atlas offers meticulous residential and office cleaning across New York City and the Tri-State Area. Request a visit for recurring, move-in, move-out, and deep cleaning.',
  keywords: ['cleaning company NYC', 'office cleaning NYC', 'residential cleaning New York', 'move out cleaning tri state'],
  themeColor: '#0D0D0D',
  colorScheme: 'light',
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
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
