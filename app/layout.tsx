import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gyj.luqelha.my.id'),
  title: '고윤정 | Go Youn-jung',
  description:
    'A visionary presence in modern cinema. From Alchemy of Souls to Moving, redefining the boundary of performance and grace.',
  keywords: ['Go Youn-jung', '고윤정', 'Korean Actress', 'Moving', 'Alchemy of Souls', 'Sweet Home'],
  authors: [{ name: 'Go Youn-jung' }],
  openGraph: {
    title: '고윤정 | Go Youn-jung',
    description: 'Korean actress — Moving, Can This Love Be Translated?, Alchemy of Souls, Sweet Home',
    type: 'website',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Go Youn-Jung Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '고윤정 | Go Youn-jung',
    description: 'Korean actress — Moving, Can This Love Be Translated?, Alchemy of Souls, Sweet Home',
    images: ['/images/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`scroll-smooth dark ${manrope.variable} ${inter.variable}`}>
      <body className='bg-background text-on-background antialiased'>{children}</body>
    </html>
  );
}
