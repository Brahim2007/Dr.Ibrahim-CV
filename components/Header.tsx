'use client'

import { useState, useEffect } from 'react'

type HeaderProps = {
  redirectToHome?: boolean
}

export default function Header({ redirectToHome = false }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = redirectToHome
    ? [
        { href: '/#slider', icon: 'fa-home', label: 'Home' },
        { href: '/#about', icon: 'fa-user', label: 'About' },
        { href: '/#service', icon: 'fa-cogs', label: 'Services' },
        { href: '/#skill', icon: 'fa-code', label: 'Skills' },
        { href: '/#latest-works', icon: 'fa-briefcase', label: 'Portfolio' },
        { href: '/#contact', icon: 'fa-envelope', label: 'Contact' },
      ]
    : [
        { href: '#slider', icon: 'fa-home', label: 'الرئيسية' },
        { href: '#about', icon: 'fa-user', label: 'نبذة عني' },
        { href: '#service', icon: 'fa-cogs', label: 'خدمات' },
        { href: '#skill', icon: 'fa-code', label: 'المهارات' },
        { href: '#latest-works', icon: 'fa-briefcase', label: 'معرض الأعمال' },
        { href: '#contact', icon: 'fa-envelope', label: 'اتصل بي' },
      ]
  
  // Debug logging - remove in production
  if (process.env.NODE_ENV === 'development') {
    console.log('Header component rendered')
    console.log('navItems:', navItems)
    console.log('isMobileMenuOpen:', isMobileMenuOpen)
    console.log('Navigation items count:', navItems.length)
  }

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (redirectToHome) {
      setIsMobileMenuOpen(false)
      return
    }

    e.preventDefault()
    console.log('Nav click:', href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log('Element not found for href:', href)
    }
    setIsMobileMenuOpen(false)
  }


  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-lg"
    >
      <div className="h-[70px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="/img/nnn.png"
                  alt="logo"
                  className="h-10 w-auto md:h-12 max-w-[100px]"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-2 space-x-reverse">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center justify-center px-4 py-3 font-medium text-white hover:bg-white/20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <i className={`fas ${item.icon} ml-2 text-sm`}></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
                <li>
                    <a
                      href={redirectToHome ? '/' : '/cv-en'}
                      className="flex items-center justify-center px-3 py-2 bg-white/30 hover:bg-white/40 rounded-lg transition-all duration-300 hover:scale-105 border border-white/30"
                    >
                      <img
                        src="https://devologyx.io/wp-content/uploads/2022/10/cv.png"
                        alt="CV Icon"
                        className="h-8 w-auto"
                        loading="lazy"
                      />
                    </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-emerald-700 border-t border-emerald-600">
              <nav className="px-2 pt-2 pb-4">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        <i className={`fas ${item.icon} ml-3 text-lg`}></i>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={redirectToHome ? '/' : '/cv-en'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center px-3 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300"
                    >
                      <img
                        src="https://devologyx.io/wp-content/uploads/2022/10/cv.png"
                        alt="CV Icon"
                        className="h-8 w-auto"
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}