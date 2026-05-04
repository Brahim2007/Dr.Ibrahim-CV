'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Database,
  Expand,
  Eye,
  FileSpreadsheet,
  Gauge,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  UserRound,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import { projects, type ProjectDetails } from '@/data/projects'

const stackGroups = [
  { title: 'واجهات وتجربة مستخدم', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTL/LTR'], icon: MonitorSmartphone },
  { title: 'خلفية وقواعد بيانات', items: ['Prisma', 'MySQL', 'PostgreSQL', 'PHP', 'Django'], icon: Database },
  { title: 'تشغيل وتحليلات', items: ['RBAC', 'Dashboards', 'Reports', 'Export', 'Workflow'], icon: Workflow },
]

function PortfolioSingleContent() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get('project') ?? projects[0].id
  const project = useMemo(() => projects.find((item) => item.id === projectId) ?? projects[0], [projectId])
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    setSelectedImage(0)
    setIsFullscreen(false)
  }, [project.id])

  const selectedProjectImage = project.images[selectedImage] ?? project.heroImage
  const currentIndex = projects.findIndex((item) => item.id === project.id)
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const relatedProjects = projects.filter((item) => item.id !== project.id).slice(0, 3)

  const showPreviousImage = () => {
    setSelectedImage((current) => (current - 1 + project.images.length) % project.images.length)
  }

  const showNextImage = () => {
    setSelectedImage((current) => (current + 1) % project.images.length)
  }

  return (
    <>
      <SocialSidebar />
      <Header forceHomeLinks />

      {isFullscreen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/95 p-4" dir="rtl">
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="إغلاق العرض الكامل"
          >
            <X className="h-6 w-6" />
          </button>

          {project.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                aria-label="الصورة السابقة"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                aria-label="الصورة التالية"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="relative h-[82vh] w-full max-w-7xl">
            <Image src={selectedProjectImage} alt={project.title} fill className="object-contain" unoptimized />
          </div>

          <div className="absolute bottom-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            {selectedImage + 1} / {project.images.length}
          </div>
        </div>
      )}

      <main className="bg-stone-50 pt-24" dir="rtl">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image src={project.heroImage} alt="" fill className="object-cover opacity-20" priority unoptimized />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.88))]" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:py-20">
            <Link
              href="/#latest-works"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowRight className="h-4 w-4" />
              العودة إلى معرض الأعمال
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-slate-950">
                    <project.icon className="h-4 w-4" />
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
                    {project.solutionName}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
                    {project.status}
                  </span>
                </div>

                <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">{project.title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">{project.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
                    >
                      زيارة المشروع
                      <ArrowUpLeft className="h-4 w-4" />
                    </a>
                  )}
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                  >
                    مشروع مشابه
                    <SearchCheck className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-950/45 p-4">
                    <div className="text-xs font-bold text-slate-400">{metric.label}</div>
                    <div className="mt-2 text-lg font-black text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0 space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <Image
                    src={selectedProjectImage}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    unoptimized
                  />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFullscreen(true)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/75 text-white backdrop-blur transition hover:bg-emerald-600"
                      aria-label="عرض الصورة بحجم كامل"
                    >
                      <Expand className="h-5 w-5" />
                    </button>
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/75 text-white backdrop-blur transition hover:bg-emerald-600"
                        aria-label="الصورة السابقة"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/75 text-white backdrop-blur transition hover:bg-emerald-600"
                        aria-label="الصورة التالية"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 sm:grid-cols-4 md:grid-cols-6">
                  {project.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-video overflow-hidden rounded-2xl border transition ${
                        selectedImage === index
                          ? 'border-emerald-500 ring-4 ring-emerald-100'
                          : 'border-slate-200 opacity-75 hover:border-slate-400 hover:opacity-100'
                      }`}
                      aria-label={`عرض صورة ${index + 1}`}
                    >
                      <Image src={image} alt="" fill className="object-cover" sizes="160px" unoptimized />
                    </button>
                  ))}
                </div>
              </div>

              <CaseSection icon={Eye} title="ملخص تنفيذي">
                <p>{project.summary}</p>
              </CaseSection>

              <div className="grid gap-5 md:grid-cols-3">
                <InsightCard icon={Target} title="المشكلة" text={project.problem} />
                <InsightCard icon={Route} title="طريقة البناء" text={project.approach} />
                <InsightCard icon={Gauge} title="الأثر" text={project.outcome} />
              </div>

              <CaseSection icon={CheckCircle2} title="القدرات والميزات">
                <div className="grid gap-3 md:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-stone-50 p-4 text-slate-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-600" />
                      <span className="text-sm font-semibold leading-7">{item}</span>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection icon={FileSpreadsheet} title="مخرجات التسليم">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((deliverable) => (
                    <div key={deliverable} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-black text-slate-800 shadow-sm">
                      {deliverable}
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection icon={Layers3} title="التقنيات المستخدمة">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800">
                      {technology}
                    </span>
                  ))}
                </div>
              </CaseSection>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-950">بطاقة المشروع</h2>
                <div className="mt-5 space-y-3">
                  <MetaItem icon={CalendarDays} label="السنة" value={project.year} />
                  <MetaItem icon={Timer} label="المدة" value={project.duration} />
                  <MetaItem icon={UserRound} label="الدور" value={project.role} />
                  <MetaItem icon={Building2} label="العميل" value={project.client} />
                  <MetaItem icon={ShieldCheck} label="الحالة" value={project.status} />
                  <MetaItem icon={LockKeyhole} label="النطاق" value={project.categoryLabel} />
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-black">المسميات التقنية المناسبة لهذا العمل</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.capabilities.map((capability) => (
                    <span key={capability} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-100">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-950">محاور الخبرة المستنتجة</h2>
                <div className="mt-5 space-y-4">
                  {stackGroups.map((group) => (
                    <div key={group.title} className="rounded-3xl bg-stone-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <group.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-black text-slate-900">{group.title}</h3>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <ProjectNavigationCard project={previousProject} label="المشروع السابق" align="right" />
            <Link
              href="/#latest-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              كل الأعمال
              <BriefcaseBusiness className="h-4 w-4" />
            </Link>
            <ProjectNavigationCard project={nextProject} label="المشروع التالي" align="left" />
          </div>

          <div className="mt-14 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm font-black text-emerald-600">أعمال قريبة</span>
                <h2 className="mt-2 text-2xl font-black text-slate-950">مشاريع أخرى من نفس خط التطوير</h2>
              </div>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-600">
                ناقش فكرة مشابهة
                <ArrowUpLeft className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio-single?project=${relatedProject.id}`}
                  className="group rounded-3xl border border-slate-200 bg-stone-50 p-4 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl bg-slate-100">
                    <Image src={relatedProject.heroImage} alt={relatedProject.title} fill className="object-cover transition group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" unoptimized />
                  </div>
                  <span className="text-xs font-black text-emerald-700">{relatedProject.solutionName}</span>
                  <h3 className="mt-2 text-lg font-black leading-7 text-slate-950">{relatedProject.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{relatedProject.categoryLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function CaseSection({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      </div>
      <div className="text-base font-semibold leading-9 text-slate-600">{children}</div>
    </section>
  )
}

function InsightCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-8 text-slate-600">{text}</p>
    </article>
  )
}

function MetaItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-500">{label}</div>
        <div className="mt-1 text-sm font-black leading-6 text-slate-900">{value}</div>
      </div>
    </div>
  )
}

function ProjectNavigationCard({
  project,
  label,
  align,
}: {
  project: ProjectDetails
  label: string
  align: 'right' | 'left'
}) {
  return (
    <Link
      href={`/portfolio-single?project=${project.id}`}
      className={`group flex items-center gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 ${
        align === 'left' ? 'lg:flex-row-reverse lg:text-left' : ''
      }`}
    >
      <div className="relative h-20 w-24 flex-none overflow-hidden rounded-2xl bg-slate-100">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover transition group-hover:scale-105" sizes="120px" unoptimized />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-black text-emerald-700">{label}</div>
        <div className="mt-1 line-clamp-2 text-sm font-black leading-6 text-slate-950">{project.title}</div>
      </div>
    </Link>
  )
}

export default function PortfolioSingle() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-stone-50" dir="rtl">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600" />
            <p className="font-bold text-slate-600">جاري تحميل دراسة المشروع...</p>
          </div>
        </div>
      }
    >
      <PortfolioSingleContent />
    </Suspense>
  )
}
