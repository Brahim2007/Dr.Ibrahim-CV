import Image from 'next/image'
import Link from 'next/link'
import { Database, Download, LayoutDashboard, Route, ShieldCheck } from 'lucide-react'

export default function About() {
  const process = [
    { title: 'تحليل سير العمل', text: 'فهم الأدوار والعمليات قبل كتابة الكود.', icon: Route },
    { title: 'تصميم قاعدة النظام', text: 'نمذجة البيانات والصلاحيات من البداية.', icon: Database },
    { title: 'واجهة تشغيلية واضحة', text: 'لوحات تحكم عربية متجاوبة للاستخدام اليومي.', icon: LayoutDashboard },
    { title: 'تسليم قابل للصيانة', text: 'كود نظيف وأداء مضمون ونشر آمن.', icon: ShieldCheck },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">من أنا</span>
          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            نبذة <span className="text-emerald-500">عني</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600" />
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          {/* الصورة */}
          <div className="w-full max-w-xs flex-none lg:w-1/3">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-400 to-blue-400 opacity-30 blur-sm" />
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/img/photo.png"
                  alt="إبراهيم كرتيو"
                  width={400}
                  height={500}
                  priority
                  className="w-full object-cover"
                />
                {/* شارة الخبرة */}
                <div className="absolute bottom-3 right-3 flex items-center gap-3 rounded-xl border border-white/20 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur">
                  <div className="text-right">
                    <div className="text-lg font-black text-emerald-600">5+</div>
                    <div className="text-[10px] font-bold text-gray-500">سنوات خبرة</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200" />
                  <div className="text-right">
                    <div className="text-lg font-black text-blue-600">15+</div>
                    <div className="text-[10px] font-bold text-gray-500">مشروع</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* المحتوى */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xl font-bold leading-relaxed text-gray-900 md:text-2xl">
                مطور منصات ويب، <span className="text-emerald-600">أحوِّل العمليات اليومية إلى أنظمة رقمية.</span>
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                خبرة في Next.js، TypeScript، Prisma، MySQL، و WordPress. أبني مواقع مؤسسية، لوحات تحكم،
                منصات بحثية، CMS، ومتاجر إلكترونية بواجهات عربية RTL وتجربة مستخدم عملية.
              </p>
            </div>

            {/* زر وروابط */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/cv-en"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                <Download className="h-4 w-4" />
                السيرة الذاتية
              </Link>
              {['FB', 'X', 'IG', 'LN'].map((s) => (
                <a key={s} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-500 transition hover:-translate-y-0.5 hover:bg-gray-200">
                  {s}
                </a>
              ))}
            </div>

            {/* بطاقات العملية */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {process.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-black text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-xs leading-6 text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
