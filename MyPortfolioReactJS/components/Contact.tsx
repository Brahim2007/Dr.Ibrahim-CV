'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setMessage({
        type: 'success',
        text: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: 'fa-phone-square',
      text: '+90 531 857 9095',
      href: 'tel:+905318579095'
    },
    {
      icon: 'fa-envelope',
      text: 'kertiou.brahim@gmail.com',
      href: 'mailto:kertiou.brahim@gmail.com'
    },
    {
      icon: 'fa-map-marker',
      text: 'اسطنبول، تركيا',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            اتصل <span className="text-emerald-500">بي</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            دعنا نناقش مشروعك القادم ونعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">معلومات الاتصال</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    أنا متاح دائمًا لمناقشة مشاريعك وأفكارك. لا تتردد في التواصل معي عبر أي من الوسائل التالية.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    سأكون سعيدًا بمساعدتك في تحويل فكرتك إلى موقع ويب احترافي يلبي توقعاتك ويتجاوزها.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                        <i className={`fa ${info.icon} text-lg`}></i>
                      </div>
                      <span className="mr-4 text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                        {info.text}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Availability */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse ml-3"></div>
                    <span className="text-emerald-700 font-medium">متاح للعمل على مشاريع جديدة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'سرعة الرد', value: '24 ساعة' },
                { label: 'مشاريع مكتملة', value: '50+' },
                { label: 'رضا العملاء', value: '95%' },
                { label: 'دعم فني', value: '24/7' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-emerald-500 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">أرسل رسالة</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Message Alert */}
              {message.text && (
                <div
                  className={`p-4 rounded-xl ${
                    message.type === 'success'
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="أخبرني عن مشروعك وأهدافك..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-3"></div>
                      جاري الإرسال...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <i className="fa fa-paper-plane ml-2"></i>
                      إرسال الرسالة
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
