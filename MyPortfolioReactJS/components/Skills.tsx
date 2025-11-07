'use client'

import { useEffect, useState, useRef } from 'react'

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<boolean>(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedSkills(true)
        }
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const skillGroups = [
    {
      title: '🧠 المهارات الأساسية',
      icon: '🧠',
      skills: [
        { name: 'HTML5 & CSS3', percent: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript (ES6+)', percent: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'React / Next.js', percent: 90, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Tailwind CSS / Shadcn UI', percent: 85, color: 'from-teal-500 to-teal-600' }
      ]
    },
    {
      title: '⚙️ المهارات الخلفية',
      icon: '⚙️',
      skills: [
        { name: 'PHP & MySQL', percent: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'Prisma ORM / Node.js', percent: 75, color: 'from-green-500 to-green-600' },
        { name: 'APIs & Authentication (NextAuth, JWT)', percent: 80, color: 'from-indigo-500 to-indigo-600' }
      ]
    },
    {
      title: '🧭 أدوات التطوير',
      icon: '🧭',
      skills: [
        { name: 'Git & GitHub', percent: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'Figma / UI Design Tools', percent: 85, color: 'from-pink-500 to-pink-600' },
        { name: 'Vercel Deployment / SEO Optimization', percent: 80, color: 'from-orange-500 to-orange-600' }
      ]
    }
  ]

  return (
    <section id="skill" className="py-20 bg-gray-900" ref={skillsRef}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مهاراتي <span className="text-emerald-400">التقنية</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            مجموعة المهارات والخبرات التي أمتلكها في تطوير الويب والتقنيات الحديثة
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Group Header */}
              <div className="flex items-center mb-8">
                <div className="text-3xl mr-4">{group.icon}</div>
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    {/* Skill Header */}
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="text-emerald-400 font-bold text-lg">
                        {animatedSkills ? `${skill.percent}%` : '0%'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animatedSkills ? `${skill.percent}%` : '0%',
                          transitionDelay: `${groupIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Description */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">مهاراتي التقنية</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-4">
                <p className="text-xl font-semibold text-gray-200 leading-relaxed">
                  أمتلك خبرة واسعة في تطوير الويب وتصميم واجهات المستخدم، وأحرص على الجمع بين الأداء العالي والتصميم الجذاب لتقديم حلول رقمية متكاملة.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  أواكب أحدث التقنيات وأطور مهاراتي باستمرار في مجالات الواجهات التفاعلية، الأنظمة الخلفية، وتحسين تجربة المستخدم.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <p className="text-xl font-bold text-emerald-400 leading-relaxed">
                    ✦ أؤمن أن الجودة ليست مجرد فعلٍ مؤقت، بل عادة تُبنى على الشغف والإتقان.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MySQL'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            مستعد لتحويل أفكارك إلى واقع رقمي مذهل؟
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <i className="fa fa-rocket ml-2"></i>
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>
    </section>
  )
}
