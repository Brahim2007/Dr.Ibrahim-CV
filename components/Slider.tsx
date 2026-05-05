'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpLeft, BarChart3, Braces, CheckCircle2, Database, LayoutDashboard, Rocket } from 'lucide-react'
import { useEffect, useState } from 'react'

const typedTexts = [
  'أبني أنظمة إدارة ولوحات تحكم',
  'أطوّر منصات بحثية وأكاديمية',
  'أحوّل العمليات اليومية إلى تطبيقات ويب',
  'أصمم مواقع مؤسسية سريعة ومتجاوبة',
]

const proofPoints = [
  { value: '9+', label: 'أعمال موثقة', icon: CheckCircle2 },
  { value: '6+', label: 'أنظمة ولوحات تحكم', icon: LayoutDashboard },
  { value: '100%', label: 'واجهات عربية RTL', icon: Braces },
]

export default function Slider() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(120)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = typedTexts[loopNum % typedTexts.length]

      setDisplayText((currentText) =>
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      )

      setTypingSpeed(isDeleting ? 28 : 115)

      if (!isDeleting && displayText === fullText) {
        window.setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum((current) => current + 1)
        setTypingSpeed(420)
      }
    }

    const timer = window.setTimeout(handleTyping, typingSpeed)
    return () => window.clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  return (
    <section id="slider" className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white" dir="rtl">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/slider.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-950/72" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,.32),rgba(14,165,233,.12)_40%,rgba(15,23,42,.82))]" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] items-center px-4 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="max-w-4xl pt-28 text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/10 px-4 py-2 text-sm font-black text-emerald-100 backdrop-blur">
              <Rocket className="h-4 w-4" />
              مطور منصات ويب وأنظمة تشغيل أعمال
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
              {displayText}
              <span className="mr-2 inline-block h-12 w-1 translate-y-2 rounded-full bg-emerald-300 animate-pulse md:h-16" />
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
              أعمل على بناء حلول رقمية عملية: مواقع مؤسسية، منصات SaaS، لوحات تحكم، أنظمة صلاحيات، تقارير، منصات بحثية، CMS ومتاجر. أركز على تحويل مشروعك إلى نظام قابل للاستخدام اليومي والنمو.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#latest-works"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                عرض الأعمال كنماذج حلول
                <ArrowUpLeft className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                ناقش فكرة مشروعك
              </Link>
            </div>
          </div>

          {/* الملف الشخصي يظهر فقط في الجوال وسط الشاشة */}
          <div className="flex justify-center lg:hidden">
            <div className="relative overflow-hidden rounded-full border-4 border-emerald-400/30 shadow-2xl shadow-emerald-500/20">
              <Image
                src="/img/photo.png"
                alt="إبراهيم كرثيو"
                width={180}
                height={180}
                className="h-44 w-44 object-cover"
                priority
              />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-4xl font-black">{point.value}</div>
                      <div className="mt-2 text-sm font-bold text-slate-300">{point.label}</div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                      <point.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-l from-emerald-500/15 to-sky-500/10 p-5">
              <div className="flex items-center gap-3 text-emerald-100">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-black">أتعامل مع المشروع كنظام</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                أبدأ من سير العمل والبيانات والصلاحيات، ثم أبني الواجهة، قاعدة البيانات، التقارير، وتجربة الاستخدام المناسبة.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: 'Data Models', icon: Database },
                { label: 'Dashboards', icon: LayoutDashboard },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 p-4 text-center">
                  <item.icon className="mx-auto h-5 w-5 text-emerald-200" />
                  <div className="mt-2 text-xs font-black text-slate-200">{item.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-8 right-1/2 translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/70">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
