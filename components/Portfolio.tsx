'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpLeft,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Database,
  Filter,
  Gauge,
  Headphones,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  SearchCheck,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects, type ProjectDetails, type ProjectCategory } from '@/data/projects'

const filters: Array<{ value: ProjectCategory; label: string; icon: LucideIcon }> = [
  { value: 'all', label: 'الكل', icon: Filter },
  { value: 'operations', label: 'أنظمة تشغيل الأعمال', icon: LayoutDashboard },
  { value: 'research', label: 'منصات بحثية', icon: BookOpenCheck },
  { value: 'commerce', label: 'تجارة وCMS', icon: ShoppingBag },
  { value: 'media', label: 'منصات محتوى', icon: Headphones },
  { value: 'websites', label: 'مواقع مؤسسية', icon: MonitorSmartphone },
  { value: 'wordpress', label: 'ووردبريس', icon: Layers3 },
]

type ProjectCard = Pick<ProjectDetails, 'id' | 'title' | 'subtitle' | 'category' | 'categoryLabel' | 'outcome' | 'capabilities' | 'icon'> & {
  image: string
  solution: string
  tech: string[]
  metrics: string[]
}

const projectCards: ProjectCard[] = projects.map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  image: p.heroImage,
  category: p.category,
  categoryLabel: p.categoryLabel,
  solution: p.solutionName,
  outcome: p.outcome,
  tech: p.technologies,
  capabilities: p.capabilities,
  metrics: p.metrics.map((m) => m.value),
  icon: p.icon,
}))

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projectCards : projectCards.filter((p) => p.category === activeFilter)),
    [activeFilter]
  )

  const categoryCount = (category: ProjectCategory) =>
    category === 'all' ? projectCards.length : projectCards.filter((p) => p.category === category).length

  return (
    <section id="latest-works" className="relative overflow-hidden bg-stone-50 py-20" dir="rtl">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
            <Sparkles className="h-4 w-4" />
            أعمال مبنية لتخدم التشغيل الحقيقي
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            معرض <span className="text-emerald-600">الأعمال</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            مشاريع في أنظمة التشغيل، المنصات البحثية، CMS، المتاجر، البودكاست، والمواقع المؤسسية.
          </p>
        </div>

        {/* أزرار التصفية */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                    : 'border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <filter.icon className="h-4 w-4" />
                <span>{filter.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {categoryCount(filter.value)}
                </span>
              </button>
            )
          })}
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* صورة المشروع */}
              <Link href={`/portfolio-single?project=${project.id}`} className="relative block aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-black text-slate-700 shadow">
                  {project.categoryLabel}
                </div>
                <div className="absolute bottom-3 right-3 flex flex-wrap gap-1.5">
                  {project.metrics.map((m) => (
                    <span key={m} className="rounded-full border border-white/20 bg-white/15 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">{m}</span>
                  ))}
                </div>
              </Link>

              {/* محتوى البطاقة */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <project.icon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-600">{project.solution}</span>
                </div>

                <h3 className="mt-3 text-base font-black leading-7 text-slate-950">{project.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 line-clamp-2">{project.subtitle}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.capabilities.slice(0, 3).map((c) => (
                    <span key={c} className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-[10px] font-bold text-sky-800">{c}</span>
                  ))}
                  {project.capabilities.length > 3 && (
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-bold text-gray-400">+{project.capabilities.length - 3}</span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-500">+{project.tech.length - 3}</span>
                  )}
                </div>

                <Link
                  href={`/portfolio-single?project=${project.id}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600"
                >
                  عرض التفاصيل
                  <ArrowUpLeft className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-slate-950 p-6 text-white shadow-lg md:p-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">
            <div>
              <h3 className="text-xl font-black md:text-2xl">هل مشروعك يحتاج أكثر من موقع تعريفي؟</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">أستطيع تحويل فكرتك إلى نظام تشغيل كامل: صلاحيات، لوحة تحكم، تقارير، واجهة عربية.</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600">
              ناقش مشروعك الآن
              <SearchCheck className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
