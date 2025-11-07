'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Slider() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = [
    'مرحباً، أنا مطور مواقع ويب',
    'أنا متخصص في Next.js',
    'أعمل مع React و Tailwind CSS'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]
      
      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, texts])

  return (
    <section id="slider" className="relative min-h-screen flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/slider.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl ml-auto text-right">
          <div className="space-y-8">
            {/* Animated Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {displayText}
                <span className="mr-2 inline-block w-1 h-12 bg-emerald-400 animate-pulse"></span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                أقوم بتصميم وتطوير مواقع ويب احترافية باستخدام تقنيات حديثة مثل Next.js وReact وTailwind CSS،
                لمساعدة الشركات والأفراد على تحقيق أهدافهم الرقمية. كل موقع أعمل عليه هو قصة نجاح جديدة.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#latest-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="fa fa-briefcase mr-2"></i>
                عرض الأعمال
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30"
              >
                <i className="fa fa-phone mr-2"></i>
                اتصل بي
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
