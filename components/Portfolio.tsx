'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')

  const projects = [
    {
      id: '9',
      title: 'موقع أكاديمية اينوفا للتدريب والاستشارات – دبي',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
      category: 'web-development',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      views: '1,245'
    },
    {
      id: '10',
      title: 'نظام إدارة زبائن مدينة ألعاب ترفيهية واستراحات',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54f9596f28/201.jpg',
      category: 'systems',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      views: '987'
    },
    {
      id: '11',
      title: 'منصة Taḥkīm لتحكيم البحوث الأكاديمية',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f551db9a97f/201.jpg',
      category: 'platforms',
      tech: ['PHP', 'JavaScript', 'MySQL'],
      views: '1,532'
    },
    {
      id: '12',
      title: 'منصة المجدد للأرشقة الالكترونية',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f4154912076/202510182330نموذج-ثلاثي-الأبعاد-للموقعremix01k7wq1bz1fjq82rexxxcs80f7.png',
      category: 'platforms',
      tech: ['PHP', 'CSS', 'Bootstrap'],
      views: '768'
    },
    {
      id: '13',
      title: 'نظام PaperMetrix لتقييم وتوصية الاوراق البحثية',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c2be93720a/papermetrix.jpg',
      category: 'platforms',
      tech: ['Django', 'Python', 'PostgreSQL'],
      views: '2,341'
    },
    {
      id: '14',
      title: 'نظام إدارة متكامل لمتجر عطور',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c334f66a34/ParfumCMS.jpg',
      category: 'systems',
      tech: ['Next.js', 'Tailwind CSS', 'MySQL'],
      views: '1,654'
    },
    {
      id: '15',
      title: 'منصة بودكاست عربية',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c3459c2e3b/Podcast.jpg',
      category: 'platforms',
      tech: ['Next.js', 'TypeScript', 'MySQL'],
      views: '1,876'
    },
    {
      id: '16',
      title: 'منصة ادارة مهام ومتابعة اعمال لمجموعة استثمارية',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c347f790e0/Inves-Platform.jpg',
      category: 'systems',
      tech: ['Next.js', 'TypeScript', 'MySQL'],
      views: '1,123'
    },
    {
      id: '17',
      title: 'موقع مركز المجدد للبحوث والدراسات',
      image: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c863458b8c/Mojadid.jpg',
      category: 'wordpress',
      tech: ['WordPress', 'PHP', 'CSS', 'Bootstrap'],
      views: '892'
    }
  ]

  const filters = [
    { value: '*', label: 'الكل' },
    { value: 'web-development', label: 'تطوير مواقع' },
    { value: 'systems', label: 'أنظمة إدارة' },
    { value: 'platforms', label: 'منصات' },
    { value: 'wordpress', label: 'ووردبريس' }
  ]

  const filteredProjects = activeFilter === '*'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="latest-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            معرض <span className="text-emerald-500">الأعمال</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعة من أبرز المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات والمنهجيات
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-150 ${
                activeFilter === filter.value
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    unoptimized
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200"></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Views */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    <i className="fa fa-eye ml-1"></i> {project.views}
                  </div>
                  
                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/portfolio-single?project=${project.id}`}
                      className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-150"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            هل لديك مشروع مشابه تريد تطويره؟
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-150 shadow-lg hover:shadow-xl"
          >
            <i className="fa fa-rocket ml-2"></i>
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>
    </section>
  )
}
