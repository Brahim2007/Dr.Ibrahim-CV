import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'بورتفوليو - مطور مواقع ويب محترف | خدمات تطوير ويب متكاملة',
  description: 'مطور مواقع ويب محترف متخصص في تطوير مواقع ويب حديثة ومتاجر إلكترونية وأنظمة إدارة. خبرة 5+ سنوات في React وNext.js وWordPress. 15+ مشروع ناجح. تواصل الآن للحصول على استشارة مجانية.',
  keywords: [
    'مطور ويب',
    'تطوير مواقع',
    'برمجة مواقع',
    'متاجر إلكترونية',
    'React',
    'Next.js',
    'WordPress',
    'تصميم مواقع',
    'برمجة مواقع تركيا',
    'مطور ويب عربي'
  ].join(', '),
  authors: [{ name: 'Ibrahim Kertiou' }],
  creator: 'Ibrahim Kertiou',
  publisher: 'Ibrahim Kertiou',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/',
      'en': '/cv-en',
    },
  },
  openGraph: {
    title: 'بورتفوليو - مطور مواقع ويب محترف | خدمات تطوير ويب متكاملة',
    description: 'مطور مواقع ويب محترف متخصص في تطوير مواقع ويب حديثة ومتاجر إلكترونية وأنظمة إدارة. خبرة 5+ سنوات.',
    url: 'https://yourdomain.com',
    siteName: 'بورتفوليو - مطور مواقع ويب',
    images: [
      {
        url: '/img/nnn.png',
        width: 1200,
        height: 630,
        alt: 'بورتفوليو - مطور مواقع ويب محترف',
      },
    ],
    locale: 'ar_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بورتفوليو - مطور مواقع ويب محترف',
    description: 'مطور مواقع ويب محترف متخصص في تطوير مواقع ويب حديثة ومتاجر إلكترونية.',
    images: ['/img/nnn.png'],
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" />
      </head>
      <body style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif', fontSize: '16px', lineHeight: '18.4px', color: 'rgb(0, 0, 0)', fontWeight: 500 }}>{children}</body>
    </html>
  )
}