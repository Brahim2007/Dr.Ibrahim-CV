import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { href: '#slider', label: 'الرئيسية' },
    { href: '#about', label: 'نبذة عني' },
    { href: '#service', label: 'خدمات' },
    { href: '#skill', label: 'المهارات' },
    { href: '#latest-works', label: 'معرض الأعمال' },
    { href: '#contact', label: 'اتصل بي' },
  ]

  const socialLinks = [
    { icon: 'fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fa-github', href: '#', label: 'GitHub' },
    { icon: 'fa-instagram', href: '#', label: 'Instagram' },
  ]

  const contactInfo = [
    { icon: 'fa-envelope', text: 'kertiou.brahim@gmail.com', href: 'mailto:kertiou.brahim@gmail.com' },
    { icon: 'fa-phone', text: '+90 531 857 9095', href: 'tel:+905318579095' },
    { icon: 'fa-map-marker', text: 'اسطنبول، تركيا', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Top */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Image
                    src="/img/nnn.png"
                    alt="logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  مطور مواقع ويب محترف متخصص في إنشاء حلول رقمية متكاملة. أقدم خدمات تطوير المواقع والأنظمة الإلكترونية بأحدث التقنيات.
                </p>
                <div className="flex space-x-3 space-x-reverse">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-800 hover:bg-emerald-500 text-gray-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <i className={`fa ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg flex items-center group"
                    >
                      <i className="fa fa-chevron-left text-xs ml-2 group-hover:text-emerald-400 transition-colors duration-300"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">الخدمات</h4>
              <ul className="space-y-3">
                {[
                  'تطوير مواقع الويب',
                  'متاجر إلكترونية',
                  'مواقع ووردبريس',
                  'تصميم واجهات المستخدم',
                  'تحسين الأداء',
                  'الدعم والصيانة'
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">معلومات الاتصال</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors duration-300 ml-3">
                      <i className={`fa ${info.icon} text-sm`}></i>
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 space-x-reverse text-gray-300">
              <p className="text-lg">صنع بـ ♥️ بواسطة</p>
              <Image
                src="/img/nnn.png"
                alt="logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <p className="text-lg">© 2025 جميع الحقوق محفوظة</p>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 space-x-reverse text-gray-300">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300 text-lg">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300 text-lg">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="#contact"
          className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <i className="fa fa-comments ml-2"></i>
          <span className="font-semibold">تواصل معي</span>
        </a>
      </div>
    </footer>
  )
}
