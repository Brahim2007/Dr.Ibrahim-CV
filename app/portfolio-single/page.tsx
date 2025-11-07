'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioSingle() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Sample project data - in real app this would come from props or API
  const project = {
    id: 1,
    title: 'موقع أكاديمية اينوفا للتدريب والاستشارات',
    client: 'أكاديمية اينوفا للتدريب والاستشارات',
    category: 'تطوير مواقع',
    date: 'يوليو 2025',
    duration: '3 أشهر',
    team: 'مطور واحد',
    url: 'https://inova-academy.vercel.app',
    description: 'مشروع تصميم وتطوير الموقع الرسمي لأكاديمية اينوفا للتدريب والاستشارات في دبي، وهي مؤسسة رائدة في مجال التدريب والتطوير المؤسسي.',
    fullDescription: 'تم بناء الموقع باستخدام Next.js 14 وReact بتصميم حديث يعتمد على Tailwind CSS ويتميز بتجربة مستخدم سلسة، ودعم كامل للغة العربية (RTL) والإنجليزية. يقدّم الموقع واجهة عصرية تعكس هوية الأكاديمية المهنية، ويعرض خدماتها التدريبية والاستشارية، وخططها السنوية، والاعتمادات الدولية المعتمدة لديها.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL'],
    features: [
      'تصميم حديث يعتمد على Next.js 14 وReact',
      'دعم كامل للغة العربية (RTL) والإنجليزية',
      'واجهة عصرية تعكس الهوية المهنية',
      'مكتبة برامج تدريبية منظمة',
      'صفحة اعتمادات دولية',
      'نموذج تواصل مباشر مع الفروع',
      'تصميم متجاوب يعمل على جميع الأجهزة',
      'سرعة عالية في الأداء'
    ],
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc288b0/inova-academy.vercel.app9.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc64eab/inova-academy.vercel.app8.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fca2254/FireShot-Capture-032-الرئيسية-اينوفا-للتدريب-والاستشارات-inova-academy.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fce076c/inova-academy.vercel.app7.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd292f5/inova-academy.vercel.app6.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd72280/inova-academy.vercel.app5.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fda9749/inova-academy.vercel.app4.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fde5680/inova-academy.vercel.app3.jpg'
    ]
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <>
      <SocialSidebar />
      <Header />
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 left-6 text-white text-2xl z-10"
          >
            <i className="fa fa-times"></i>
          </button>
          
          <button
            onClick={prevImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto">
            <Image
              src={project.images[selectedImage]}
              alt={`صورة المشروع ${selectedImage + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {project.images.length}
          </div>
        </div>
      )}

      {/* Portfolio Single Section */}
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{ fontWeight: 700 }}>
              {project.title}
            </h1>
            <p className="text-xl text-gray-600">
              {project.client} - {project.category}
            </p>
          </div>

          {/* Main Image Gallery */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Main Image with Navigation */}
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={project.images[selectedImage]}
                  alt="صورة رئيسية للمشروع"
                  fill
                  className="object-contain cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                  unoptimized
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {project.images.length}
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 left-4 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                >
                  <i className="fa fa-expand"></i>
                </button>
              </div>

              {/* Thumbnails Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-emerald-500 scale-105' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`صورة مصغرة ${index + 1}`}
                        width={120}
                        height={80}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  نبذة عن المشروع
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  التقنيات المستخدمة
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-xl text-lg font-medium"
                      style={{ fontWeight: 600 }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  الميزات الرئيسية
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <i className="fa fa-check text-emerald-500 ml-3 text-xl"></i>
                      <span className="text-lg text-gray-700" style={{ fontWeight: 500 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  معلومات المشروع
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-calendar text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">التاريخ</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{project.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-user text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">العميل</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-folder text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الفئة</div>
                      <div className="font-medium text-emerald-500" style={{ fontWeight: 600 }}>{project.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-clock-o text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">المدة</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-users text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الفريق</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{project.team}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-link text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الرابط</div>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                        style={{ fontWeight: 600 }}
                      >
                        زيارة الموقع
                        <i className="fa fa-external-link mr-2 text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl shadow-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 600 }}>
                  مستعد لبدء مشروعك؟
                </h3>
                <p className="text-emerald-100 mb-4">لنتحدث عن فكرتك وننفذها معاً</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  style={{ fontWeight: 600 }}
                >
                  <i className="fa fa-comments ml-2"></i>
                  تواصل معي
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/#latest-works"
              className="flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 text-lg"
              style={{ fontWeight: 600 }}
            >
              <i className="fa fa-arrow-right ml-3 text-xl"></i>
              العودة للمعرض
            </Link>
            <Link
              href="/#contact"
              className="flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 text-lg"
              style={{ fontWeight: 600 }}
            >
              مشروع مشابه
              <i className="fa fa-arrow-left mr-3 text-xl"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}