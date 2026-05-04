import {
  type LucideIcon,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Database,
  Headphones,
  LayoutDashboard,
  MonitorSmartphone,
  ShoppingBag,
} from 'lucide-react'

export type ProjectCategory =
  | 'all'
  | 'websites'
  | 'operations'
  | 'research'
  | 'commerce'
  | 'media'
  | 'wordpress'

export type ProjectDetails = {
  id: string
  title: string
  subtitle: string
  client: string
  category: Exclude<ProjectCategory, 'all'>
  categoryLabel: string
  solutionName: string
  year: string
  duration: string
  role: string
  status: string
  url?: string
  icon: LucideIcon
  heroImage: string
  images: string[]
  summary: string
  problem: string
  approach: string
  outcome: string
  technologies: string[]
  capabilities: string[]
  deliverables: string[]
  highlights: string[]
  metrics: Array<{ label: string; value: string }>
  featured?: boolean
}

export const projects: ProjectDetails[] = [
  {
    id: '18',
    title: 'شبكة الرواد الإلكترونية',
    subtitle: 'نظام إدارة المنظومة المتكامل — منظومة رقمية لتمكين الشباب العربي عبر منصات متعددة: التقنية، الريادة، الإعلام الرقمي، والتطوع.',
    client: 'شبكة الرواد الإلكترونية',
    category: 'operations',
    categoryLabel: 'أنظمة تشغيل الأعمال',
    solutionName: 'منظومة رقمية متكاملة',
    year: '2025',
    duration: 'قيد التطوير',
    role: 'تحليل وتصميم وتطوير المنظومة',
    status: 'نسخة تجريبية (Beta)',
    url: 'https://rowad-platform.vercel.app',
    icon: LayoutDashboard,
    heroImage: '/img/rowad-hero.png',
    images: [
      '/img/rowad-1.png',
      '/img/rowad-2.png',
      '/img/rowad-3.png',
    ],
    summary: 'شبكة الرواد الإلكترونية هي منظومة رقمية متكاملة تهدف إلى تمكين الشباب العربي وتطوير قدراتهم من خلال منصات متعددة تغطي مجالات: التقنية والبرمجة، الريادة المجتمعية، الإعلام الرقمي، والتطوع. تجمع المنظومة بين إدارة الأعضاء، تتبع رحلة المستفيد عبر 8 مراحل، قياس الأثر، والتنسيق المؤسسي في نظام واحد مع قاعدة بيانات موحدة (Unified ID) تلغي التكرار وتتيح تتبعاً دقيقاً لرحلة العضو.',
    problem: 'كانت المنصات الشبابية تعاني من تشتت البيانات بين أدوات متفرقة، عدم وجود ملف موحد للمستفيد، صعوبة تتبع رحلة العضو وتطوره، وغياب مؤشرات أداء دقيقة لقياس الأثر الحقيقي للبرامج على المستفيدين.',
    approach: 'بنيت المنظومة حول قاعدة بيانات موحدة (Unified ID) بملف واحد لكل مستفيد، مع 8 مراحل لرحلة التطور. صممت لوحة قيادة مركزية بمؤشرات أداء حية، نظام إدارة منصات ومبادرات، مهام وتنسيق مؤسسي، تقارير وتحليلات متقدمة، مكتبة معرفية، وآلية تقييم مستقلة لضمان الجودة.',
    outcome: 'توفر المنظومة رؤية شاملة لأداء المنصات والمبادرات في لحظة واحدة، مع قدرة على تتبع رحلة كل مستفيد من الاكتشاف إلى السفير، قياس الاحتفاظ والرضا والإكمال، وتصدير تقارير دورية تدعم اتخاذ القرار الاستراتيجي.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'NextAuth', 'Tailwind CSS', 'Recharts', 'PDF/Excel Export'],
    capabilities: ['إدارة متكاملة', 'Unified ID', 'رحلة مستفيد', 'لوحة قيادة', 'تقارير', 'مكتبة معرفية'],
    deliverables: ['لوحة قيادة مركزية', 'إدارة أعضاء ورحلة مستفيد', 'إدارة منصات ومبادرات', 'نظام مهام وتنسيق', 'مؤشرات أداء وقياس أثر', 'تقارير وتحليلات', 'مكتبة معرفية', 'دليل مستخدم تفاعلي'],
    highlights: ['قاعدة بيانات موحدة (Unified ID) بملف واحد لكل مستفيد', '8 مراحل لرحلة تطور العضو من الاكتشاف إلى السفير', 'لوحة قيادة حية بمؤشرات أداء دقيقة', 'مقارنة تفاعل وقياس احتفاظ ورضا', 'إدارة منصات متعددة بألوان ومشرفين', 'تقارير دورية قابلة للتصدير PDF/Excel', 'مكتبة معرفية بتصنيفات وبحث ذكي', 'آلية تقييم مستقلة كطرف ثالث'],
    metrics: [
      { label: 'الأقسام', value: '9' },
      { label: 'النوع', value: 'منظومة متكاملة' },
      { label: 'آخر تحديث', value: 'مايو 2026' },
    ],
    featured: true,
  },
  {
    id: '16',
    title: 'منصة إدارة مهام ومتابعة أعمال لمجموعة استثمارية',
    subtitle: 'Operations Suite لإدارة الموظفين، المهام، التقارير، الموافقات، والوحدات الاستثمارية.',
    client: 'مجموعة استثمارية',
    category: 'operations',
    categoryLabel: 'أنظمة تشغيل الأعمال',
    solutionName: 'Business Operations Platform',
    year: '2025',
    duration: '3 أشهر',
    role: 'تحليل، تصميم، تطوير، واختبار',
    status: 'منجز',
    icon: LayoutDashboard,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c347f790e0/Inves-Platform.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c347f790e0/Inves-Platform.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5417687/Screenshot-2025-08-10-213201.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5454a6a/Screenshot-2025-08-10-213942.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5488e01/Screenshot-2025-08-10-213141.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea55ab3bf/Screenshot-2025-08-10-212941.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5964619/Screenshot-2025-07-13-203413.png',
    ],
    summary:
      'منصة تشغيل داخلية تحول المتابعة اليومية من ملفات ورسائل متفرقة إلى نظام موحد بإدارة مهام، صلاحيات، تقارير، ووحدات متابعة للقرارات والطلبات.',
    problem:
      'كانت المتابعة التشغيلية تحتاج إلى رؤية مركزية للمهام، حالة الطلبات، أداء الموظفين، وحركة الوحدات الاستثمارية، مع تقليل الاعتماد على المتابعة اليدوية.',
    approach:
      'بنيت المنصة حول لوحة قيادة مركزية، أدوار وصلاحيات دقيقة، نماذج إدخال قابلة للتوسع، تقارير قابلة للتصدير، وتنظيم للطلبات حسب الحالة والمسؤول والجهة.',
    outcome:
      'أصبحت الإدارة قادرة على قراءة حالة العمل في لحظة واحدة، متابعة التأخير، تصدير تقارير تنفيذية، وتوزيع المسؤوليات بصورة أوضح.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'NextAuth', 'Recharts', 'Tailwind CSS'],
    capabilities: ['RBAC', 'Dashboards', 'PDF/Excel/CSV Export', 'Workflow', 'Notifications', 'Reports'],
    deliverables: ['لوحة تحكم تنفيذية', 'إدارة مهام ومستخدمين', 'تقارير قابلة للتصدير', 'وحدات موافقة ومتابعة'],
    highlights: ['هيكل صلاحيات متعدد المستويات', 'تقارير أداء شهرية ويومية', 'واجهة عربية كاملة RTL', 'تجربة تشغيل مناسبة للأجهزة المختلفة'],
    metrics: [
      { label: 'نوع الحل', value: 'Operations' },
      { label: 'الواجهة', value: 'RTL Dashboard' },
      { label: 'البيانات', value: 'MySQL' },
    ],
    featured: true,
  },
  {
    id: '10',
    title: 'نظام إدارة زبائن مدينة ألعاب ترفيهية واستراحات',
    subtitle: 'نظام استقبال وتشغيل يومي مع فواتير، عدادات، تقارير، وطباعة وصولات.',
    client: 'مدينة ألعاب ترفيهية',
    category: 'operations',
    categoryLabel: 'أنظمة تشغيل الأعمال',
    solutionName: 'Customer Operations System',
    year: '2025',
    duration: '2.5 أشهر',
    role: 'تطوير كامل للنظام',
    status: 'منجز',
    url: 'https://game-site-app-two.vercel.app',
    icon: BriefcaseBusiness,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54f9596f28/201.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54f9596f28/201.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9af0be/FireShot-Capture-024-نظام-إدارة-مدينة-الألعاب-game-site-app-two.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9ee12a/FireShot-Capture-022-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6da38d17/FireShot-Capture-021-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6dab4d72/FireShot-Capture-019-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
    ],
    summary:
      'نظام إداري لإدخال الزبائن، حساب المبالغ، طباعة الوصولات، وإصدار تقارير يومية وشهرية تساعد على ضبط التشغيل والمحاسبة.',
    problem:
      'احتاج المشروع إلى استبدال التسجيل اليدوي بنظام سريع يلائم ضغط الاستقبال اليومي، ويحسب المبالغ تلقائيًا ويدعم الطباعة والتقارير.',
    approach:
      'صممت واجهة إدخال سريعة، عدادًا يوميًا متسلسلًا، إدارة أدوار للمستخدمين، ومخرجات تقارير مع دعم الطابعات الحرارية.',
    outcome:
      'تقلص وقت تسجيل الزبون، وأصبح بالإمكان مراجعة الإيرادات والحركة اليومية بدقة أكبر مع سجلات قابلة للتتبع.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Thermal Print', 'React'],
    capabilities: ['Authentication', 'Daily Counter', 'Receipts', 'Reports', 'RTL', 'Role Management'],
    deliverables: ['نظام استقبال', 'إيصالات حرارية', 'تقارير يومية وشهرية', 'إدارة مستخدمين وصلاحيات'],
    highlights: ['طباعة وصولات مباشرة', 'حساب تلقائي للمبالغ', 'عداد يتصفر يوميًا', 'تقارير مناسبة للمراجعة المالية'],
    metrics: [
      { label: 'المجال', value: 'تشغيل يومي' },
      { label: 'المخرجات', value: 'إيصالات' },
      { label: 'التقارير', value: 'يومي/شهري' },
    ],
  },
  {
    id: '14',
    title: 'ParfumCMS - نظام إدارة متكامل لمتجر عطور',
    subtitle: 'Back Office فاخر للمنتجات، الطلبات، المخزون، العملاء، والتحليلات.',
    client: 'متجر عطور',
    category: 'commerce',
    categoryLabel: 'تجارة وCMS',
    solutionName: 'Commerce Management CMS',
    year: '2025',
    duration: 'شهران',
    role: 'تصميم تجربة الإدارة وتطويرها',
    status: 'منجز',
    url: 'https://parfum-cms.vercel.app',
    icon: ShoppingBag,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c334f66a34/ParfumCMS.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c334f66a34/ParfumCMS.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350785d2/FireShot-Capture-052-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350b9cae/FireShot-Capture-053-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351010ed/FireShot-Capture-050-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c335222145/FireShot-Capture-046-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
    ],
    summary:
      'نظام إدارة متجر يجمع بين عرض فاخر للعلامة التجارية وأدوات تشغيل عملية لإدارة المنتجات والطلبات والمخزون والعملاء.',
    problem:
      'تحتاج متاجر المنتجات الفاخرة إلى لوحة إدارة لا تبدو تقنية فقط، بل تعكس جودة العلامة وتوفر في الوقت نفسه إدارة يومية واضحة للطلبات والمخزون.',
    approach:
      'صممت لوحة تحكم بأقسام واضحة، حالات للطلبات، إدارة منتجات وتصنيفات، مؤشرات مبيعات، ومكونات واجهة أنيقة ملائمة لهوية العطور.',
    outcome:
      'تحول النظام إلى مركز إدارة للعمليات التجارية مع واجهة مرتبة تقلل التشتت وتبرز البيانات المهمة بسرعة.',
    technologies: ['Next.js', 'App Router', 'Prisma', 'MySQL', 'shadcn/ui', 'Tailwind CSS'],
    capabilities: ['Products', 'Orders', 'Inventory', 'Customers', 'Analytics', 'CMS'],
    deliverables: ['لوحة تحكم للمتجر', 'إدارة منتجات ومخزون', 'متابعة طلبات وعملاء', 'مؤشرات أداء تجارية'],
    highlights: ['تصميم فاخر متسق', 'هيكلة واضحة للطلبات', 'بطاقات إحصائية قابلة للمراجعة', 'واجهة RTL عملية'],
    metrics: [
      { label: 'النظام', value: 'CMS' },
      { label: 'المجال', value: 'Commerce' },
      { label: 'التركيز', value: 'Inventory' },
    ],
  },
  {
    id: '11',
    title: 'منصة Taḥkīm لتحكيم البحوث الأكاديمية',
    subtitle: 'Workflow علمي لإدارة الباحثين، المحكمين، الدعوات البحثية، والتقييم.',
    client: 'منصة أكاديمية',
    category: 'research',
    categoryLabel: 'منصات بحثية',
    solutionName: 'Peer Review Platform',
    year: '2024',
    duration: '4 أشهر',
    role: 'تحليل سير العمل وتطوير المنصة',
    status: 'منجز',
    icon: BookOpenCheck,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f551db9a97f/201.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f551db9a97f/201.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e629b1c9e/photo15.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a089e8/photo14.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62b2f378/photo11.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62c6d5b6/photo07.jpg',
    ],
    summary:
      'منصة لإدارة دورة التحكيم العلمي من استقبال المشاركة إلى إسناد المحكمين واستلام التقييمات ومتابعة التعديلات.',
    problem:
      'إجراءات التحكيم الأكاديمي حساسة وتتضمن أدوارًا متعددة، لذلك تحتاج إلى سير عمل واضح يحفظ الحالة والمهام والقرارات.',
    approach:
      'نظمت المنصة حول أدوار الباحث والمحكم والإدارة، مع نماذج تقييم، حالات للبحث، وسجلات متابعة لكل خطوة في الدورة العلمية.',
    outcome:
      'أصبحت دورة التحكيم أكثر قابلية للتتبع، مع تقليل الفوضى في تبادل الملفات وتوضيح مسؤولية كل طرف.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
    capabilities: ['Peer Review', 'RBAC', 'Research Calls', 'Evaluation Forms', 'Admin Reports'],
    deliverables: ['إدارة باحثين ومحكمين', 'نماذج تقييم', 'دعوات بحثية', 'تقارير متابعة'],
    highlights: ['سير عمل متعدد الأدوار', 'متابعة حالة البحث', 'نماذج تقييم منظمة', 'تجربة عربية موجهة للأكاديميين'],
    metrics: [
      { label: 'المجال', value: 'Academic' },
      { label: 'المنهج', value: 'Workflow' },
      { label: 'الأدوار', value: 'Multi-role' },
    ],
    featured: true,
  },
  {
    id: '13',
    title: 'PaperMetrix - تقييم وتوصية الأوراق البحثية',
    subtitle: 'منصة Altmetrics وتوصية بحثية نابعة من مشروع دكتوراه في جامعة إسطنبول.',
    client: 'مشروع بحثي أكاديمي',
    category: 'research',
    categoryLabel: 'منصات بحثية',
    solutionName: 'Research Recommendation Engine',
    year: '2024',
    duration: 'بحث وتطوير',
    role: 'تطوير المنصة ونمذجة البيانات',
    status: 'منجز',
    icon: BarChart3,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c2be93720a/papermetrix.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c2be93720a/papermetrix.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4924e57/FireShot-Capture-166-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef495b0cc/FireShot-Capture-167-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4a4607c/FireShot-Capture-172-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b8b1ce/FireShot-Capture-179-paper-metrix.herokuapp.com.jpg',
    ],
    summary:
      'منصة بحثية تقيس مؤشرات بديلة للأوراق العلمية وتساعد الباحث على اكتشاف أعمال مرتبطة من خلال نموذج توصية وتحليل بيانات.',
    problem:
      'تقييم أثر الأوراق العلمية لا يتوقف عند الاستشهادات التقليدية فقط، لذلك احتاج المشروع إلى نموذج يجمع إشارات تفاعل رقمية ومؤشرات توصية.',
    approach:
      'استخدمت Django وPython لبناء طبقة بيانات، تكاملات API، معالجة مؤشرات بحثية، وواجهة تعرض نتائج التقييم والتوصية بصورة واضحة.',
    outcome:
      'قدمت المنصة نموذجًا قابلًا للعرض الأكاديمي يربط بين القياسات البديلة، تحليل البيانات، وتوصية الأوراق ذات الصلة.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Mendeley API', 'Data Analysis', 'Bootstrap'],
    capabilities: ['Altmetrics', 'Recommendation', 'API Integration', 'Research Profiles', 'Data Processing'],
    deliverables: ['محرك توصية', 'عرض مؤشرات الأوراق', 'تكامل API', 'واجهة متابعة بحثية'],
    highlights: ['ارتباط مباشر بموضوع الدكتوراه', 'تحليل بيانات بحثية', 'مؤشرات بديلة للأثر', 'بنية قابلة للتجريب العلمي'],
    metrics: [
      { label: 'التركيز', value: 'Altmetrics' },
      { label: 'المحرك', value: 'Recommendation' },
      { label: 'اللغة', value: 'Python' },
    ],
  },
  {
    id: '12',
    title: 'منصة المجدد للأرشفة الإلكترونية',
    subtitle: 'نظام أرشفة وفهرسة للوثائق، البريد، والدورة المستندية للبحوث.',
    client: 'مركز بحثي',
    category: 'research',
    categoryLabel: 'منصات بحثية',
    solutionName: 'Digital Archive Platform',
    year: '2024',
    duration: '3 أشهر',
    role: 'تطوير نظام الأرشفة والفهرسة',
    status: 'منجز',
    icon: Database,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f4154912076/202510182330نموذج-ثلاثي-الأبعاد-للموقعremix01k7wq1bz1fjq82rexxxcs80f7.png',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f4154912076/202510182330نموذج-ثلاثي-الأبعاد-للموقعremix01k7wq1bz1fjq82rexxxcs80f7.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e829c9d86/FireShot-Capture-014-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82a1b22e/FireShot-Capture-016-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82aac572/FireShot-Capture-012-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82b89f84/FireShot-Capture-009-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
    ],
    summary:
      'منصة لإدارة الوثائق والملفات البحثية والبريد الإداري بطريقة منظمة مع فهرسة واسترجاع وصلاحيات.',
    problem:
      'كان حفظ الوثائق يحتاج إلى نموذج رقمي يحافظ على بنية الأرشيف ويسهل البحث والاسترجاع والمتابعة بدل التخزين المتفرق.',
    approach:
      'بنيت وحدات للوثائق، التصنيفات، الفهارس، المستخدمين، وسجلات الحركة، مع واجهة تسمح بالتتبع السريع حسب النوع والحالة.',
    outcome:
      'أصبح الوصول للوثائق أسرع، وانخفض الاعتماد على البحث اليدوي، مع وضوح أكبر في دورة المستند من الإدخال إلى الحفظ.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'Document Workflow'],
    capabilities: ['Archive', 'Indexing', 'Permissions', 'Document Tracking', 'Reports'],
    deliverables: ['إدارة وثائق', 'فهرسة وتصنيفات', 'صلاحيات مستخدمين', 'تقارير وسجلات حركة'],
    highlights: ['تنظيم دورة الوثيقة', 'بحث واسترجاع', 'واجهة عربية للأرشفة', 'صلاحيات مناسبة للعمل المؤسسي'],
    metrics: [
      { label: 'النظام', value: 'Archive' },
      { label: 'البيانات', value: 'Documents' },
      { label: 'المنهج', value: 'Indexing' },
    ],
  },
  {
    id: '15',
    title: 'منصة بودكاست عربية',
    subtitle: 'منصة محتوى صوتي مع مشغل متقدم، برامج، حلقات، مفضلة، ولوحة إدارة.',
    client: 'منصة إعلامية رقمية',
    category: 'media',
    categoryLabel: 'منصات محتوى',
    solutionName: 'Arabic Podcast Platform',
    year: '2025',
    duration: 'شهران',
    role: 'تطوير المنصة ولوحة الإدارة',
    status: 'منجز',
    icon: Headphones,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c3459c2e3b/Podcast.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c3459c2e3b/Podcast.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2913fc02/FireShot-Capture4.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e291a113d/FireShot-Capture5.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2923b677/FireShot-Capture1.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2933f49f/Screenshot-2025-05-21-220726.png',
    ],
    summary:
      'منصة بودكاست عربية تعرض البرامج والحلقات وتوفر تجربة استماع، مفضلة، تعليقات، ولوحة لإدارة المحتوى.',
    problem:
      'منصات المحتوى الصوتي تحتاج إلى تجربة استماع واضحة وإدارة منظمة للحلقات والبرامج بدل عرض ملفات صوتية فقط.',
    approach:
      'بنيت بنية برامج وحلقات، مشغل صوتي، حسابات مستخدمين، مفضلة، تعليقات، ولوحة إدارة للتحكم في المحتوى.',
    outcome:
      'وفرت المنصة تجربة محتوى عربية متكاملة تجمع بين الواجهة العامة ولوحة الإدارة وتفاعل المستخدم.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'NextAuth', 'Audio Context'],
    capabilities: ['Audio Player', 'CMS', 'Comments', 'Favorites', 'Admin Dashboard', 'Authentication'],
    deliverables: ['واجهة استماع', 'لوحة إدارة محتوى', 'مشغل صوتي', 'تفاعل مستخدمين'],
    highlights: ['مشغل صوتي مخصص', 'إدارة برامج وحلقات', 'مفضلة وتعليقات', 'تصميم عربي للمحتوى الصوتي'],
    metrics: [
      { label: 'المجال', value: 'Media' },
      { label: 'المحتوى', value: 'Audio' },
      { label: 'الإدارة', value: 'CMS' },
    ],
  },
  {
    id: '9',
    title: 'موقع أكاديمية اينوفا للتدريب والاستشارات - دبي',
    subtitle: 'موقع مؤسسي متعدد اللغات يعرض البرامج التدريبية والاعتمادات والخطط السنوية.',
    client: 'أكاديمية اينوفا للتدريب والاستشارات',
    category: 'websites',
    categoryLabel: 'مواقع مؤسسية',
    solutionName: 'Corporate Training Website',
    year: '2025',
    duration: '3 أشهر',
    role: 'تصميم وتطوير الموقع',
    status: 'منجز',
    url: 'https://inova-academy.vercel.app',
    icon: MonitorSmartphone,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc288b0/inova-academy.vercel.app9.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc64eab/inova-academy.vercel.app8.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fca2254/FireShot-Capture-032-الرئيسية-اينوفا-للتدريب-والاستشارات-inova-academy.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fde5680/inova-academy.vercel.app3.jpg',
    ],
    summary:
      'موقع مؤسسي لأكاديمية تدريب واستشارات في دبي، يركز على عرض البرامج والاعتمادات والخطط التدريبية بصورة مهنية ومتعددة اللغات.',
    problem:
      'احتاجت الأكاديمية إلى واجهة رقمية تعكس الثقة والاعتماد الدولي، وتعرض خدماتها وبرامجها بطريقة سهلة التصفح بالعربية والإنجليزية.',
    approach:
      'بنيت صفحات تعريفية، أقسام برامج واعتمادات، نموذج تواصل، وتخطيطًا متجاوبًا يدعم RTL/LTR مع اهتمام بسرعة التحميل وتجربة القراءة.',
    outcome:
      'حصلت الأكاديمية على واجهة رقمية منظمة تعرض الخدمات والبرامج وتدعم توسع المحتوى التدريبي والتسويقي.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'RTL/LTR', 'SEO', 'Responsive Design'],
    capabilities: ['Bilingual', 'Program Catalog', 'Accreditations', 'Contact Forms', 'SEO'],
    deliverables: ['صفحات مؤسسية', 'مكتبة برامج تدريبية', 'صفحة اعتمادات', 'نموذج تواصل'],
    highlights: ['دعم عربي وإنجليزي', 'تجربة تصفح سريعة', 'هوية بصرية مهنية', 'تنظيم واضح للبرامج'],
    metrics: [
      { label: 'النوع', value: 'Corporate' },
      { label: 'اللغات', value: 'AR/EN' },
      { label: 'الهدف', value: 'SEO' },
    ],
  },
  {
    id: '17',
    title: 'موقع مركز المجدد للبحوث والدراسات',
    subtitle: 'موقع ووردبريس بحثي لإدارة الدراسات، المقالات، الترجمات، والفعاليات.',
    client: 'مركز المجدد للبحوث والدراسات',
    category: 'wordpress',
    categoryLabel: 'ووردبريس',
    solutionName: 'Research Content Website',
    year: '2025',
    duration: 'شهر',
    role: 'تطوير وتهيئة ووردبريس',
    status: 'منجز',
    icon: Building2,
    heroImage: 'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c863458b8c/Mojadid.jpg',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c863458b8c/Mojadid.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c8634af84f/Screenshot6-11-202514514almojaded.com.jpeg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c863509e58/Screenshot6-11-202514615almojaded.com.jpeg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c86354c3c0/Screenshot6-11-202514344almojaded.com.jpeg',
    ],
    summary:
      'موقع بحثي مبني على ووردبريس لإدارة المقالات والدراسات والترجمات والأخبار والفعاليات مع تحسين العرض العربي.',
    problem:
      'احتاج المركز إلى منصة نشر مرنة يستطيع الفريق غير التقني إدارتها بسهولة مع الحفاظ على تنظيم المحتوى العلمي.',
    approach:
      'تم تجهيز ووردبريس بقوالب وتصنيفات وهيكلة محتوى مناسبة للمواد البحثية، وتحسين تجربة القراءة والتصفح العربي.',
    outcome:
      'أصبح نشر الدراسات والمقالات أكثر انتظامًا، مع واجهة قابلة للإدارة اليومية وتوسيع المحتوى بدون تدخل تقني مستمر.',
    technologies: ['WordPress', 'PHP', 'CSS', 'Bootstrap', 'SEO', 'Content Architecture'],
    capabilities: ['Content Management', 'Categories', 'Newsletter', 'Performance Tuning', 'Editorial Workflow'],
    deliverables: ['موقع نشر بحثي', 'هيكلة تصنيفات', 'تهيئة محتوى', 'تحسينات أداء وSEO'],
    highlights: ['إدارة محتوى سهلة', 'تصميم مناسب للقراءة العربية', 'تنظيم مواد بحثية', 'قابلية توسع تحريرية'],
    metrics: [
      { label: 'النظام', value: 'WordPress' },
      { label: 'المجال', value: 'Research' },
      { label: 'التركيز', value: 'Content' },
    ],
  },
]
