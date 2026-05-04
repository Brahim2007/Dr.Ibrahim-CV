'use client'

import { useState } from 'react'
import { CheckCircle, Clock, Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error' | ''; text: string }>({
    type: '',
    text: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'حدث خطأ غير متوقع.')
      }

      setMessage({
        type: 'success',
        text: data?.message || 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة لاحقاً.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    { icon: Phone, text: '+90 531 857 9095', href: 'tel:+905318579095', label: 'اتصل بي' },
    { icon: Mail, text: 'kertiou.brahim@gmail.com', href: 'mailto:kertiou.brahim@gmail.com', label: 'راسلني' },
    { icon: MapPin, text: 'اسطنبول، تركيا', href: '#', label: 'الموقع' },
  ]

  const stats = [
    { icon: Clock, value: '24 ساعة', label: 'سرعة الرد' },
    { icon: CheckCircle, value: '15+', label: 'مشاريع مكتملة' },
    { icon: MessageSquare, value: '95%', label: 'رضا العملاء' },
    { icon: Clock, value: '24/7', label: 'دعم فني' },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* خلفية مزخرفة */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-40 w-40 rounded-full bg-emerald-50/50 blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* عنوان القسم */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">
            تواصل
          </span>
          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            اتصل <span className="text-emerald-500">بي</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            دعنا نناقش مشروعك القادم ونعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600" />
        </div>

        <div className="mx-auto max-w-6xl">
          {/* إحصائيات سريعة */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* معلومات الاتصال */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900">معلومات الاتصال</h3>

                <div className="mt-6 space-y-6">
                  <p className="leading-8 text-gray-600">
                    أنا متاح دائمًا لمناقشة مشاريعك وأفكارك. سأكون سعيدًا بمساعدتك في تحويل
                    فكرتك إلى موقع ويب احترافي يلبي توقعاتك ويتجاوزها.
                  </p>

                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <a
                        key={method.text}
                        href={method.href}
                        className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 transition group-hover:bg-emerald-600">
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-emerald-600">{method.label}</div>
                          <div className="mt-0.5 text-sm font-bold text-gray-700 transition group-hover:text-emerald-700">
                            {method.text}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* حالة التوفر */}
                  <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-bold text-emerald-700">متاح للعمل على مشاريع جديدة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* نموذج الاتصال */}
            <div className="lg:col-span-3">
              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900">أرسل رسالة</h3>
                <p className="mt-2 text-gray-600">املأ النموذج وسأعود إليك في أقرب وقت</p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  {/* رسالة الحالة */}
                  {message.text && (
                    <div
                      className={`rounded-2xl border p-5 ${
                        message.type === 'success'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border-red-200 bg-red-50 text-red-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {message.type === 'success' ? (
                          <CheckCircle className="h-6 w-6 flex-none" />
                        ) : (
                          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-200 text-sm font-black text-red-700">!</span>
                        )}
                        <span className="font-medium">{message.text}</span>
                      </div>
                    </div>
                  )}

                  {/* حقول النموذج */}
                  <div className="space-y-5">
                    {/* حقل الاسم */}
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                        الاسم الكامل
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="أدخل اسمك الكامل"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-gray-200 py-4 pr-12 pl-4 text-sm font-medium text-gray-900 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* حقل البريد */}
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                        البريد الإلكتروني
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="أدخل بريدك الإلكتروني"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-gray-200 py-4 pr-12 pl-4 text-sm font-medium text-gray-900 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* حقل الرسالة */}
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-700">
                        الرسالة
                      </label>
                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="أخبرني عن مشروعك وأهدافك..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-gray-200 py-4 pr-12 pl-4 text-sm font-medium text-gray-900 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* زر الإرسال */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-2xl bg-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-200 disabled:translate-y-0 disabled:bg-emerald-400 disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="h-5 w-5 transition group-hover:-translate-y-0.5" />
                        إرسال الرسالة
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
