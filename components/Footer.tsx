import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

type FooterProps = {
  showContactCTA?: boolean
  language?: 'ar' | 'en'
}

type FooterLink = {
  href: string
  label: string
}

type SocialLink = FooterLink & {
  mark: string
}

export default function Footer({ showContactCTA = false, language = 'ar' }: FooterProps) {
  const isEnglish = language === 'en'
  const year = new Date().getFullYear()

  const quickLinks: FooterLink[] = isEnglish
    ? [
        { href: '/#slider', label: 'Home' },
        { href: '/#about', label: 'About' },
        { href: '/#service', label: 'Services' },
        { href: '/#skill', label: 'Skills' },
        { href: '/#latest-works', label: 'Portfolio' },
        { href: '/#contact', label: 'Contact' },
      ]
    : [
        { href: '/#slider', label: 'الرئيسية' },
        { href: '/#about', label: 'نبذة عني' },
        { href: '/#service', label: 'خدمات' },
        { href: '/#skill', label: 'المهارات' },
        { href: '/#latest-works', label: 'معرض الأعمال' },
        { href: '/#contact', label: 'اتصل بي' },
      ]

  const focusAreas = isEnglish
    ? ['Research platforms', 'Digital repositories', 'Open access', 'Scholarly communication', 'Knowledge systems', 'Web performance']
    : ['تطوير مواقع الويب', 'متاجر إلكترونية', 'مواقع ووردبريس', 'تصميم واجهات المستخدم', 'تحسين الأداء', 'الدعم والصيانة']

  const contactInfo = isEnglish
    ? [
        { icon: Mail, text: 'kertiou.brahim@gmail.com', href: 'mailto:kertiou.brahim@gmail.com' },
        { icon: Phone, text: '+90 531 857 9095', href: 'tel:+905318579095' },
        { icon: MapPin, text: 'Istanbul, Turkey', href: 'https://maps.google.com/?q=Istanbul%2C%20Turkey' },
      ]
    : [
        { icon: Mail, text: 'kertiou.brahim@gmail.com', href: 'mailto:kertiou.brahim@gmail.com' },
        { icon: Phone, text: '+90 531 857 9095', href: 'tel:+905318579095' },
        { icon: MapPin, text: 'اسطنبول، تركيا', href: 'https://maps.google.com/?q=Istanbul%2C%20Turkey' },
      ]

  const socialLinks: SocialLink[] = [
    { mark: 'A', href: 'https://istanbul.academia.edu/BRAH%C4%B0MKERTIOU', label: 'Academia.edu' },
    { mark: 'AR', href: 'https://arid.my/0004-0979', label: 'ARID' },
    { mark: '@', href: 'mailto:kertiou.brahim@gmail.com', label: isEnglish ? 'Email' : 'البريد' },
  ]

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white print:hidden" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,.24),rgba(14,165,233,.12)_42%,rgba(15,23,42,0))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

      <div className="container-custom relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-emerald-950/20 backdrop-blur sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr_.8fr_1fr]">
            <section className="space-y-6">
              <Link href="/" className={`flex items-center gap-4 ${isEnglish ? '' : 'flex-row-reverse text-right'}`}>
                {isEnglish ? (
                  <span className="flex h-12 items-center justify-center overflow-hidden rounded-lg">
                    <Image src="/img/En-Logo.png" alt="Brahim Kertiou CV" width={200} height={48} className="h-12 w-auto object-contain" />
                  </span>
                ) : (
                  <span className="flex h-12 items-center justify-center overflow-hidden rounded-lg">
                    <Image src="/img/Ar-Logo.png" alt="إبراهيم كرثيو" width={200} height={48} className="h-12 w-auto object-contain" />
                  </span>
                )}
              </Link>

              <p className={`max-w-md text-base leading-8 text-slate-300 ${isEnglish ? '' : 'text-right'}`}>
                {isEnglish
                  ? 'Academic researcher and digital platform supervisor building research repositories, scholarly communication workflows, and accessible knowledge systems.'
                  : 'مطور مواقع ويب ومنصات رقمية يقدّم حلولًا عملية للمواقع، الأنظمة الإلكترونية، تحسين الأداء، وتجربة المستخدم.'}
              </p>

              <div className={`flex flex-wrap gap-3 ${isEnglish ? '' : 'justify-start sm:justify-end'}`}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    className="group inline-flex h-12 min-w-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.08] px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-500"
                  >
                    <span>{social.mark}</span>
                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold opacity-0 transition-all group-hover:max-w-28 group-hover:opacity-100">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <FooterHeading>{isEnglish ? 'Navigate' : 'روابط سريعة'}</FooterHeading>
              <ul className="mt-5 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white ${
                        isEnglish ? '' : 'flex-row-reverse text-right'
                      }`}
                    >
                      <ArrowUpRight className={`h-4 w-4 text-emerald-300 transition group-hover:translate-x-0.5 ${isEnglish ? '' : 'rotate-180'}`} />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <FooterHeading>{isEnglish ? 'Focus Areas' : 'الخدمات'}</FooterHeading>
              <ul className="mt-5 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li key={area}>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-sm font-semibold text-slate-300">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <FooterHeading>{isEnglish ? 'Contact' : 'معلومات الاتصال'}</FooterHeading>
              <div className="mt-5 space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.text}
                    href={info.href}
                    className={`group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-sm font-bold text-slate-300 transition hover:border-emerald-300/40 hover:bg-white/[0.12] hover:text-white ${
                      isEnglish ? '' : 'flex-row-reverse text-right'
                    }`}
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-200 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <info.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 break-words">{info.text}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-slate-400 md:flex-row md:items-center md:justify-between">
            <p className={isEnglish ? '' : 'text-right'}>
              {isEnglish ? `Copyright ${year}. All rights reserved.` : `© ${year} جميع الحقوق محفوظة.`}
            </p>
            <div className={`flex flex-wrap gap-4 ${isEnglish ? '' : 'justify-end'}`}>
              <a href={isEnglish ? '/cv-en' : '/cv-en'} className="transition hover:text-emerald-300">
                {isEnglish ? 'Academic CV' : 'السيرة الذاتية'}
              </a>
              <a href={isEnglish ? '/#contact' : '/#contact'} className="transition hover:text-emerald-300">
                {isEnglish ? 'Start a conversation' : 'ابدأ التواصل'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {showContactCTA && (
        <div className={`fixed bottom-6 z-50 ${isEnglish ? 'right-6' : 'left-6'}`}>
          <a
            href={isEnglish ? '/#contact' : '/#contact'}
            className={`flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 ${
              isEnglish ? '' : 'flex-row-reverse'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            <span>{isEnglish ? 'Contact me' : 'تواصل معي'}</span>
          </a>
        </div>
      )}
    </footer>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
      {children}
    </h3>
  )
}
