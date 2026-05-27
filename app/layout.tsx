import './globals.css';
import type { Metadata } from 'next';
import { Syne, Literata } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-literata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Verdant Axis — Where Land Meets Strategy',
  description:
    'Verdant Axis is a boutique agricultural and environmental consulting firm advising agribusinesses and landowners on soil health, regenerative land use, carbon credit structuring, and environmental compliance. Harrow Falls, New Zealand.',
  keywords:
    'agricultural consulting, environmental consulting, soil health, carbon credits, regenerative farming, New Zealand, land strategy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${literata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
