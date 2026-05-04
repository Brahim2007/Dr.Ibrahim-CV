'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Braces,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileSpreadsheet,
  Gauge,
  GitBranch,
  KeyRound,
  Layers3,
  MonitorSmartphone,
  Palette,
  ServerCog,
  type LucideIcon,
} from 'lucide-react'

type SkillTrack = {
  title: string
  description: string
  icon: LucideIcon
  level: number
  evidence: string
  items: string[]
}

const skillTracks: SkillTrack[] = [
  {
    title: 'Frontend Product Engineering',
    description: 'واجهات عربية/إنجليزية متجاوبة، مكونات تفاعلية، وتجربة استخدام مناسبة للأنظمة التشغيلية.',
    icon: MonitorSmartphone,
    level: 92,
    evidence: 'Inova، Podcast، ParfumCMS',
    items: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'RTL/LTR', 'Responsive UI'],
  },
  {
    title: 'Backend & Data Workflows',
    description: 'تصميم قواعد البيانات، API Routes، نمذجة العلاقات، وتدفقات عمل معقدة متعددة الأدوار.',
    icon: ServerCog,
    level: 84,
    evidence: 'منصة الاستثمار، مدينة الألعاب، Taḥkīm',
    items: ['Node.js APIs', 'Prisma ORM', 'MySQL', 'PostgreSQL', 'PHP', 'Django'],
  },
  {
    title: 'Authentication & Permissions',
    description: 'بناء أنظمة دخول وصلاحيات للمستخدمين حسب الدور: مدير، موظف، محكم، باحث، عميل.',
    icon: KeyRound,
    level: 86,
    evidence: 'RBAC في الأنظمة الإدارية والأكاديمية',
    items: ['NextAuth.js', 'JWT', 'RBAC', 'Protected Routes', 'User Roles', 'Approval Flows'],
  },
  {
    title: 'Dashboards, Reports & Analytics',
    description: 'لوحات مؤشرات، رسوم بيانية، تصدير ملفات، وتقارير يومية وشهرية قابلة للاستخدام الإداري.',
    icon: ChartNoAxesCombined,
    level: 88,
    evidence: 'تقارير PDF/Excel/CSV ولوحات تشغيل',
    items: ['Recharts', 'Chart.js', 'PDF Export', 'Excel Export', 'CSV', 'KPIs'],
  },
  {
    title: 'CMS, Content & Research Platforms',
    description: 'إدارة المحتوى البحثي، الأرشفة، الفهرسة، المتاجر، المنتجات، والحلقات الصوتية.',
    icon: Layers3,
    level: 87,
    evidence: 'WordPress، Archive، Podcast، ParfumCMS',
    items: ['WordPress', 'Custom CMS', 'Metadata', 'Document Archive', 'Audio Player', 'SEO'],
  },
  {
    title: 'Delivery, Quality & Performance',
    description: 'تنظيم بنية المشروع، تحسين الأداء، نشر Vercel، وتجهيز واجهات قابلة للصيانة.',
    icon: Gauge,
    level: 85,
    evidence: 'مشاريع منشورة ومنظمة كأنظمة إنتاج',
    items: ['Vercel', 'Git', 'Performance', 'Accessibility', 'SEO', 'Clean Architecture'],
  },
]

const toolBelts = [
  { title: 'واجهات', icon: Code2, items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui'] },
  { title: 'قواعد بيانات', icon: Database, items: ['MySQL', 'PostgreSQL', 'Prisma', 'Data Modeling'] },
  { title: 'تقارير', icon: FileSpreadsheet, items: ['PDF', 'Excel', 'CSV', 'Recharts', 'Chart.js'] },
  { title: 'تصميم ونشر', icon: Palette, items: ['RTL UI', 'Figma', 'Vercel', 'SEO', 'Performance'] },
  { title: 'إدارة كود', icon: GitBranch, items: ['Git', 'GitHub', 'Components', 'API Routes'] },
]

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedSkills(true)
        }
      },
      { threshold: 0.25 }
    )

    const current = skillsRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <section id="skill" className="bg-slate-950 py-20 text-white" ref={skillsRef} dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-200">
            <Braces className="h-4 w-4" />
            Tech Stack مبني من أعمال حقيقية
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            مهارات تقنية تغطي <span className="text-emerald-300">دورة المشروع كاملة</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            من تصميم الواجهة إلى قاعدة البيانات والصلاحيات والتقارير والنشر. هذه ليست قائمة أدوات فقط، بل قدرات ظهرت في مشاريع إدارة وتشغيل ومنصات بحثية ومحتوى.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {skillTracks.map((track, index) => (
            <article
              key={track.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-300/20">
                  <track.icon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-black leading-9">{track.title}</h3>
                      <p className="mt-2 leading-8 text-slate-300">{track.description}</p>
                    </div>
                    <span className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs font-black text-emerald-200">
                      {track.evidence}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-sm font-black">
                      <span className="text-slate-300">مستوى الاستخدام العملي</span>
                      <span className="text-emerald-300">{animatedSkills ? `${track.level}%` : '0%'}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-l from-emerald-400 to-sky-400 transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills ? `${track.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-l from-emerald-500/15 to-sky-500/10 p-6 md:p-8">
          <h3 className="text-2xl font-black">مصفوفة الأدوات المستخدمة في المشاريع</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {toolBelts.map((belt) => (
              <div key={belt.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-emerald-200">
                    <belt.icon className="h-5 w-5" />
                  </span>
                  <span className="font-black">{belt.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {belt.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
