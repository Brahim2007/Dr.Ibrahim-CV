'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients = [
    { src: '/img/Logo.png', name: 'Logo' },
    { src: '/img/moj.png', name: 'مجموعة المجدد' },
    { src: '/img/أمان.png', name: 'أمان' },
    { src: '/img/اكاديمية بشاك شهير.png', name: 'أكاديمية بشاك شهير' },
    { src: '/img/جامعة النبلاء.png', name: 'جامعة النبلاء' },
    { src: '/img/رؤيا للبحوث.png', name: 'رؤيا للبحوث' },
    { src: '/img/مدرسة المجدد.jpeg', name: 'مدرسة المجدد' },
    { src: '/img/مركز الاستشراف للدراسات والأبحاث.png', name: 'مركز الاستشراف' },
    { src: '/img/مركز حريات للدراسات السياسية والاستراتيجية.png', name: 'مركز حريات' },
    { src: 'https://rowwad.net/uploads/logo-rowwad.png', name: 'شبكة الرواد الإلكترونية' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [clients.length])

  return (
    <section id="clients" className="relative overflow-hidden bg-white py-24">
      {/* خلفية مزخرفة */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* عنوان القسم */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">
            شركاء النجاح
          </span>
          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            عملائنا <span className="text-emerald-500">الكرام</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            شركاء النجاح الذين وثقوا بخدماتنا وساهموا في بناء قصص نجاح مميزة
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600" />
        </div>

        {/* شبكة الشعارات - سطح المكتب */}
        <div className="hidden gap-5 md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
            >
              <div className="relative flex h-20 w-full items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  loading="lazy"
                  unoptimized
                />
              </div>
              {/* اسم العميل يظهر عند التحويم */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-emerald-500 to-emerald-600 px-4 py-2 text-center text-xs font-bold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* شريط متحرك - الجوال */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 shadow-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6 py-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative h-24 w-full flex items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={140}
                        height={70}
                        className="object-contain opacity-80"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-500">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* أزرار التنقل */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-emerald-500 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % clients.length)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-emerald-500 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* نقاط التنقل */}
          <div className="mt-5 flex justify-center gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-emerald-500' : 'w-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* إحصائيات */}
        <div className="mt-16 grid gap-6 border-t border-gray-100 pt-12 md:grid-cols-3">
          {[
            { value: '15+', label: 'مشروع مكتمل', desc: 'عبر منصات متعددة' },
            { value: '30+', label: 'عميل راضٍ', desc: 'مؤسسات وأفراد' },
            { value: '5+', label: 'سنوات خبرة', desc: 'في تطوير الويب' },
          ].map((stat) => (
            <div key={stat.label} className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl font-black text-emerald-500">{stat.value}</div>
              <div className="mt-2 text-lg font-bold text-gray-800">{stat.label}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
