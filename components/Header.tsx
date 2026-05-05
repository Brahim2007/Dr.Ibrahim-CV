'use client'

import Image from 'next/image'
import { useEffect, useState, type MouseEvent } from 'react'
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Home,
  Mail,
  Menu,
  Settings,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react'

type HeaderProps = {
  redirectToHome?: boolean
  forceHomeLinks?: boolean
}

type NavItem = {
  href: string
  icon: LucideIcon
  label: string
}

export default function Header({ redirectToHome = false, forceHomeLinks = false }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isEnglish = redirectToHome
  const navItems: NavItem[] = isEnglish
    ? [
        { href: '/#slider', icon: Home, label: 'Home' },
        { href: '/#about', icon: UserRound, label: 'About' },
        { href: '/#service', icon: Settings, label: 'Services' },
        { href: '/#skill', icon: Code2, label: 'Skills' },
        { href: '/#latest-works', icon: BriefcaseBusiness, label: 'Portfolio' },
        { href: '/#contact', icon: Mail, label: 'Contact' },
      ]
    : [
        { href: `${forceHomeLinks ? '/' : ''}#slider`, icon: Home, label: 'الرئيسية' },
        { href: `${forceHomeLinks ? '/' : ''}#about`, icon: UserRound, label: 'نبذة عني' },
        { href: `${forceHomeLinks ? '/' : ''}#service`, icon: Settings, label: 'خدمات' },
        { href: `${forceHomeLinks ? '/' : ''}#skill`, icon: Code2, label: 'المهارات' },
        { href: `${forceHomeLinks ? '/' : ''}#latest-works`, icon: BriefcaseBusiness, label: 'معرض الأعمال' },
        { href: `${forceHomeLinks ? '/' : ''}#contact`, icon: Mail, label: 'اتصل بي' },
      ]

  const ctaHref = isEnglish ? '/' : '/cv-en'
  const ctaLabel = isEnglish ? 'Portfolio' : 'السيرة الذاتية'

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith('/')) {
      return
    }

    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (href.startsWith('#')) {
      window.location.href = `/${href}`
    }
  }

  return (
    <header
      id="header"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 print:hidden ${
        isSticky ? 'py-2' : 'py-3'
      } ${redirectToHome ? 'bg-slate-950' : ''}`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex min-h-[64px] items-center justify-between rounded-full border px-3 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:px-4 ${
            isSticky && !redirectToHome
              ? 'border-slate-200/70 bg-white/95 shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950/90'
              : 'border-white/20 bg-slate-950/90 shadow-emerald-950/20'
          }`}
        >
          <a href="/" className="group flex items-center gap-3" aria-label={isEnglish ? 'Go to portfolio' : 'العودة للرئيسية'}>
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
              <Image src="/img/nnn.png" alt="Brahim Kertiou logo" width={48} height={48} className="h-10 w-auto" priority />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className={`block text-sm font-black leading-5 ${isSticky && !redirectToHome ? 'text-slate-950 dark:text-white' : 'text-white'}`}>
                {isEnglish ? 'Brahim Kertiou' : 'إبراهيم كرثيو'}
              </span>
              <span className={`block text-xs font-semibold ${isSticky && !redirectToHome ? 'text-slate-500 dark:text-slate-400' : 'text-emerald-100'}`}>
                {isEnglish ? 'Research & Digital Platforms' : 'تطوير الويب والمنصات الرقمية'}
              </span>
            </span>
          </a>

          <nav className="hidden lg:block" aria-label={isEnglish ? 'Main navigation' : 'القائمة الرئيسية'}>
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`group inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-bold transition hover:-translate-y-0.5 ${
                      isSticky && !redirectToHome
                        ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={ctaHref}
              className="hidden h-11 items-center gap-2 rounded-full bg-emerald-500 px-4 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:inline-flex"
            >
              <FileText className="h-4 w-4" />
              <span>{ctaLabel}</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
                isSticky && !redirectToHome
                  ? 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={isMobileMenuOpen ? (isEnglish ? 'Close menu' : 'إغلاق القائمة') : isEnglish ? 'Open menu' : 'فتح القائمة'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-slate-950/96 p-3 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl lg:hidden">
            <nav aria-label={isEnglish ? 'Mobile navigation' : 'قائمة الجوال'}>
              <ul className="grid gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-white/90 transition hover:bg-white/10 hover:text-white ${
                        isEnglish ? '' : 'flex-row-reverse text-right'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={ctaHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mt-2 flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-600 ${
                      isEnglish ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    <span>{ctaLabel}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
