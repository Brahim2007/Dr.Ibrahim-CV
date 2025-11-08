'use client'

import { useState, useEffect } from 'react'

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const socialLinks = [
    {
      icon: 'fa-facebook-f',
      href: '#',
      label: 'Facebook',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      icon: 'fa-twitter',
      href: '#',
      label: 'Twitter',
      color: 'hover:bg-sky-500',
      bgColor: 'bg-sky-400'
    },
    {
      icon: 'fa-instagram',
      href: '#',
      label: 'Instagram',
      color: 'hover:bg-pink-600',
      bgColor: 'bg-pink-500'
    },
    {
      icon: 'fa-linkedin',
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700',
      bgColor: 'bg-blue-600'
    },
    {
      icon: 'fa-github',
      href: '#',
      label: 'GitHub',
      color: 'hover:bg-gray-800',
      bgColor: 'bg-gray-700'
    },
    {
      icon: 'fa-whatsapp',
      href: '#',
      label: 'WhatsApp',
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-500'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 300)
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <>
      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
          aria-label="Scroll to top"
        >
          <i className="fa fa-chevron-up text-lg"></i>
          
          {/* Tooltip */}
          <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Scroll to Top
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      )}

      {/* Mobile Social Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 lg:hidden">
        <div className="flex justify-around py-3">
          {socialLinks.slice(0, 4).map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`
                w-12 h-12 ${social.bgColor} text-white rounded-xl
                flex items-center justify-center transition-all duration-300
                transform hover:scale-110
              `}
            >
              <i className={`fa ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
