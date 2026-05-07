import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'EkkoNow — Power the Future. Today.',
    template: '%s | EkkoNow',
  },
  description:
    "Africa's leading solar energy marketplace — connecting homes, businesses, and communities with clean, affordable solar solutions.",
  keywords: ['solar energy', 'solar panels', 'batteries', 'inverters', 'renewable energy', 'Africa', 'EkkoNow'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EkkoNow',
    title: 'EkkoNow — Power the Future. Today.',
    description: "Africa's leading solar energy marketplace.",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ekkonow',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

