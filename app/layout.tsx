import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { metadataBase: new URL('https://bisma-enterprises.vercel.app'),
  title: 'Bisma Enterprises — Construction • Interior • Estate',
  description: 'Interiors and construction across Karachi — DHA, Clifton, Gulshan. From first sketch to final handover.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Bisma Enterprises',
    description: 'Spaces that work as beautifully as they look.',
    url: 'https://bisma-enterprises.vercel.app',
    siteName: 'Bisma Enterprises',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_PK',
  },
  twitter: { card: 'summary_large_image', title: 'Bisma Enterprises', description: 'Construction • Interior • Estate', images: ['/og.png'] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
