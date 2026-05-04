import {
  BarChart3,
  BookOpenCheck,
  Boxes,
  Braces,
  FileCog,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  title: string
  description: string
  icon: LucideIcon
  proof: string
  stack: string[]
}

const services: Service[] = [
  {
    title: 'منصات SaaS ولوحات تحكم',
    description: 'بناء أنظمة إدارة كاملة للفرق والموظفين والمهام والطلبات والتقارير، مع تجربة عربية واضحة وصلاحيات دقيقة.',
    icon: LayoutDashboard,
    proof: 'مثل منصة المجموعة الاستثمارية ونظام مدينة الألعاب',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Recharts'],
  },
  {
    title: 'أنظمة إدارة العملاء والعمليات',
    description: 'تحويل العمليات اليومية إلى نظام رقمي: تسجيل، حسابات، إيصالات، متابعة، تقارير، وتصدير ملفات.',
    icon: Boxes,
    proof: 'تشغيل يومي، تقارير، وطباعة وصولات',
    stack: ['RBAC', 'PDF/Excel', 'Thermal Print', 'Dashboards'],
  },
  {
    title: 'منصات بحثية وأكاديمية',
    description: 'منصات تحكيم علمي، أرشفة وثائق، توصية أوراق بحثية، وإدارة سير عمل معرفي متعدد الأدوار.',
    icon: BookOpenCheck,
    proof: 'Taḥkīm، PaperMetrix، ومنصة الأرشفة الإلكترونية',
    stack: ['PHP', 'Django', 'PostgreSQL', 'Workflow', 'APIs'],
  },
  {
    title: 'CMS ومتاجر ولوحات إدارة محتوى',
    description: 'أنظمة مخصصة لإدارة المنتجات، الطلبات، المخزون، المقالات، التصنيفات، والنشرات البريدية.',
    icon: FileCog,
    proof: 'ParfumCMS وموقع مركز المجدد',
    stack: ['WordPress', 'PHP', 'Next.js', 'shadcn/ui', 'SEO'],
  },
  {
    title: 'المصادقة والصلاحيات والتكاملات',
    description: 'تصميم أدوار المستخدمين وتدفقات الموافقة والتكامل مع APIs ولوحات الإدارة وحماية العمليات الحساسة.',
    icon: LockKeyhole,
    proof: 'مدير، موظف، باحث، محكم، عميل، ومشرف',
    stack: ['NextAuth', 'JWT', 'Roles', 'Permissions', 'API Routes'],
  },
  {
    title: 'تحسين الأداء وتجربة المستخدم',
    description: 'واجهات متجاوبة، RTL مضبوط، تحميل سريع، SEO، وتحسين قابلية الاستخدام للمشاريع العربية.',
    icon: Gauge,
    proof: 'مواقع مؤسسية ومنصات محتوى عربية',
    stack: ['Tailwind CSS', 'RTL', 'SEO', 'Responsive UI', 'Analytics'],
  },
]

export default function Services() {
  return (
    <section id="service" className="bg-slate-950 py-20 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-200">
            <Braces className="h-4 w-4" />
            خدمات مبنية على مشاريع منفذة
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            لا أبيع “موقعًا” فقط، بل أبني <span className="text-emerald-300">نظامًا يخدم العمل</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            من خلال الأعمال المنجزة، أصبحت الخدمات أوضح: منصات إدارة، أنظمة تشغيل، لوحات تحكم، منصات بحثية، CMS، وتكاملات تقنية قابلة للتطوير.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-300/20 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-black text-slate-300">
                  {service.proof}
                </span>
              </div>

              <h3 className="text-2xl font-black leading-9">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 rounded-[2rem] border border-white/10 bg-gradient-to-l from-emerald-500/15 to-sky-500/10 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <div className="flex items-center gap-3 text-emerald-200">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">Discovery First</span>
            </div>
            <h3 className="mt-3 text-2xl font-black">أبدأ بتحليل سير العمل قبل اختيار التقنية</h3>
            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              لأن مشروعًا مثل منصة تحكيم بحثي لا يحتاج نفس معمارية متجر أو نظام زبائن. لذلك أحدد الأدوار، البيانات، الصلاحيات، التقارير، ونقاط التكامل قبل التنفيذ.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            احجز نقاشًا تقنيًا
          </a>
        </div>
      </div>
    </section>
  )
}
