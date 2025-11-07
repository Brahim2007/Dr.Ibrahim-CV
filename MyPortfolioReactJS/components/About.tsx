import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const socialLinks = [
    { icon: 'fa-facebook-f', href: '#', color: 'hover:bg-blue-600' },
    { icon: 'fa-twitter', href: '#', color: 'hover:bg-blue-400' },
    { icon: 'fa-instagram', href: '#', color: 'hover:bg-pink-600' },
    { icon: 'fa-linkedin', href: '#', color: 'hover:bg-blue-700' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            نبذة <span className="text-emerald-500">عني</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                مرحباً! أنا مطور مواقع ويب متخصص في إنشاء حلول رقمية مبتكرة تساعد الشركات على النمو.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                أمتلك خبرة واسعة في تطوير مواقع الويب باستخدام أحدث التقنيات. أعمل على تحويل الأفكار إلى واقع رقمي ملموس من خلال تصميم وتطوير مواقع ويب سريعة، متجاوبة، وسهلة الاستخدام.
              </p>

              <blockquote className="border-r-4 border-emerald-500 pr-6 py-2">
                <p className="text-xl font-medium text-gray-700 italic">
                  "أؤمن بأن كل موقع ويب يجب أن يكون تجربة فريدة تلبي احتياجات المستخدمين وتحقق أهداف العمل في نفس الوقت."
                </p>
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/cv-en"
                className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="fa fa-download ml-2"></i>
                تحميل السيرة الذاتية
              </Link>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 ${social.color} text-gray-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110`}
                  >
                    <i className={`fa ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-2/5 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/about.jpg"
                  alt="صورة شخصية - مطور مواقع ويب"
                  width={500}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">سنوات خبرة</div>
                </div>
              </div>

              {/* Projects Badge */}
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">مشروع ناجح</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-gray-200">
          {[
            { number: '95%', label: 'رضا العملاء' },
            { number: '50+', label: 'مشروع مكتمل' },
            { number: '5+', label: 'سنوات خبرة' },
            { number: '24/7', label: 'دعم فني' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
