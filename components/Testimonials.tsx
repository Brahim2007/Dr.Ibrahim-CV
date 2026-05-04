'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'أحمد محمد',
      position: 'مدير شركة التقنية',
      image: '/img/team1.jpg',
      text: 'عمل متميز ومهنية عالية من إبراهيم في تطوير موقع شركتنا. كان التواصل سلساً والنتائج تتجاوز التوقعات. أنصح بالتعامل معه بشدة.'
    },
    {
      name: 'سارة الخالد',
      position: 'صاحبة متجر إلكتروني',
      image: '/img/team2.jpg',
      text: 'متجرنا الإلكتروني أصبح يعمل بكفاءة عالية بعد تطوير إبراهيم له. سرعة التحميل وتحسين تجربة المستخدم كانا ملحوظين. شكراً إبراهيم على العمل الرائع.'
    },
    {
      name: 'خالد العلي',
      position: 'رجل أعمال',
      image: '/img/team3.jpg',
      text: 'التزام بالمواعيد ودقة في التنفيذ من إبراهيم. موقعنا الجديد ساعد في زيادة الزيارات والمبيعات بشكل ملحوظ. نعتبر إبراهيم شريكاً موثوقاً.'
    },
    {
      name: 'فاطمة أحمد',
      position: 'مديرة تسويق',
      image: '/img/team4.jpg',
      text: 'تجربة رائعة مع إبراهيم في تطوير موقعنا. كان دائماً متجاوباً ومستعداً لتنفيذ أي تعديلات. الموقع النهائي يتجاوز كل التوقعات. شكراً جزيلاً إبراهيم.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            آراء <span className="text-emerald-400">العملاء</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ما يقوله عملائي عن تجربتهم في العمل معي
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-emerald-400/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.836-1.491 3.324-3.33 3.324-1.042 0-2.09-.434-3.087-1.003zm10.348 0C13.9 16.227 13.348 15 13.348 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.94 11.69 21.348 13.166 21.348 15c0 1.836-1.491 3.324-3.33 3.324-1.042 0-2.09-.434-3.087-1.003z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="text-center space-y-8">
              {/* Client Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].position}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>

                {/* Stars Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Client Info */}
                <div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-emerald-300 text-lg">
                    {testimonials[currentTestimonial].position}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-emerald-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20">
          {[
            { number: '50+', label: 'عميل سعيد' },
            { number: '95%', label: 'رضا العملاء' },
            { number: '4.9/5', label: 'تقييم عام' },
            { number: '100%', label: 'تسليم في الوقت' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
