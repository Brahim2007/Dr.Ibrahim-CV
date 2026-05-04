import type { Metadata } from 'next'
import '../styles/globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'إبراهيم كرتيو | مطور منصات ويب وأنظمة إدارة',
  description:
    'بورتفوليو إبراهيم كرتيو: تطوير منصات SaaS، لوحات تحكم، أنظمة تشغيل أعمال، منصات بحثية وأكاديمية، متاجر CMS، ومواقع مؤسسية باستخدام Next.js وTypeScript وPrisma وMySQL وWordPress.',
  keywords: [
    'إبراهيم كرتيو',
    'مطور منصات ويب',
    'أنظمة إدارة',
    'لوحات تحكم',
    'SaaS',
    'Next.js',
    'TypeScript',
    'Prisma',
    'MySQL',
    'React',
    'WordPress',
    'منصات بحثية',
    'تطوير مواقع عربية',
    'RTL',
  ].join(', '),
  authors: [{ name: 'Ibrahim Kertiou' }],
  creator: 'Ibrahim Kertiou',
  publisher: 'Ibrahim Kertiou',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      ar: '/',
      en: '/cv-en',
    },
  },
  openGraph: {
    title: 'إبراهيم كرتيو | مطور منصات ويب وأنظمة إدارة',
    description:
      'أعمال مختارة في أنظمة تشغيل الأعمال، لوحات التحكم، المنصات البحثية، CMS، والمواقع المؤسسية.',
    url: '/',
    siteName: 'بورتفوليو إبراهيم كرتيو',
    images: [
      {
        url: '/img/nnn.png',
        width: 1200,
        height: 630,
        alt: 'بورتفوليو إبراهيم كرتيو',
      },
    ],
    locale: 'ar_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'إبراهيم كرتيو | مطور منصات ويب',
    description: 'تطوير منصات ويب وأنظمة إدارة ولوحات تحكم ومواقع مؤسسية.',
    images: ['/img/nnn.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-ibm-plex-sans-arabic bg-white text-gray-900">{children}</body>
    </html>
  )
}
