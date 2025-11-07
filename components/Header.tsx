'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, User, Settings, Code, Briefcase, Mail, Menu, X } from 'lucide-react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#slider', Icon: Home, label: 'الرئيسية' },
    { href: '#about', Icon: User, label: 'نبذة عني' },
    { href: '#service', Icon: Settings, label: 'خدمات' },
    { href: '#skill', Icon: Code, label: 'المهارات' },
    { href: '#latest-works', Icon: Briefcase, label: 'معرض الأعمال' },
    { href: '#contact', Icon: Mail, label: 'اتصل بي' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-gradient-to-l from-emerald-600 to-emerald-800 shadow-lg'
          : 'bg-gradient-to-l from-emerald-500 to-emerald-700'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/img/nnn.png"
                alt="logo"
                width={120}
                height={60}
                className="h-12 w-auto md:h-14"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1 space-x-reverse">
              {navItems.map((item, index) => {
                const IconComponent = item.Icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg cursor-pointer transition-colors duration-200"
                    >
                      <IconComponent className="ml-2 w-4 h-4" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                )
              })}
              <li>
                <Link
                  href="/cv-en"
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-white/30 hover:bg-white/40 rounded-lg transition-colors duration-200 border border-white/30"
                >
                  CV <span className="mr-2 px-2 py-1 text-xs bg-white text-emerald-600 rounded-full font-bold">EN</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-emerald-700 border-t border-emerald-600">
            <nav className="px-2 pt-2 pb-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const IconComponent = item.Icon
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                      >
                        <IconComponent className="ml-3 w-5 h-5" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  )
                })}
                <li>
                  <Link
                    href="/cv-en"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-3 py-3 text-base font-medium text-white bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    CV <span className="mr-3 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">EN</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
