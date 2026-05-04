'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const clients = [
    'https://almojaded.com/wp-content/uploads/2024/01/logomojadid.png',
    'https://rowwad.net/uploads/logo-rowwad.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uGRtc0IeXTwaQ9jto5END1L7WpuDyKIJ2Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYZab80P9A7sMdKaehKhq5RscyPLzDcSFnA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6msGP5lg6kzOpUkWOfcGEAGflVDzXVpbLQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjAeNq-VmbUcV3BgwFo7Z1paFY9Kgtuqzdcbb0cUOQ_vYrXJwK9MFxD0RFagJV--f0tU&usqp=CAU'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [clients.length])

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            عملائنا <span className="text-emerald-500">الكرام</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شركاء النجاح الذين وثقوا بخدماتنا وساهموا في بناء قصص نجاح مميزة
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 p-6"
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <Image
                  src={client}
                  alt={`عميل ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {clients.map((client, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="relative h-20 w-full flex items-center justify-center">
                    <Image
                      src={client}
                      alt={`عميل ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain opacity-70"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">15+</div>
            <div className="text-gray-600 text-lg">مشروع مكتمل</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">30+</div>
            <div className="text-gray-600 text-lg">عميل راضٍ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">5+</div>
            <div className="text-gray-600 text-lg">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </section>
  )
}
