'use client'

import React, { useMemo, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetails {
  id: string
  title: string
  client: string
  categoryId: 'web-development' | 'systems' | 'platforms' | 'wordpress'
  categoryLabel: string
  date: string
  duration?: string
  team?: string
  url?: string
  github?: string
  description: string
  fullDescription?: string
  technologies: string[]
  features?: string[]
  challenges?: string
  objectives?: string
  images: string[]
}

const projects: ProjectDetails[] = [
  {
    id: '9',
    title: 'موقع أكاديمية اينوفا للتدريب والاستشارات – دبي',
    client: 'أكاديمية اينوفا للتدريب والاستشارات',
    categoryId: 'web-development',
    categoryLabel: 'تطوير مواقع',
    date: 'يوليو 2025',
    duration: '3 أشهر',
    team: 'مطور واحد',
    url: 'https://inova-academy.vercel.app',
    description:
      'مشروع تصميم وتطوير الموقع الرسمي لأكاديمية اينوفا للتدريب والاستشارات في دبي، وهي مؤسسة رائدة في مجال التدريب والتطوير المؤسسي.',
    fullDescription:
      'مشروع تصميم وتطوير الموقع الرسمي لأكاديمية اينوفا للتدريب والاستشارات في دبي، وهي مؤسسة رائدة في مجال التدريب والتطوير المؤسسي. تم بناء الموقع باستخدام Next.js 14 وReact بتصميم حديث يعتمد على Tailwind CSS ويتميز بتجربة مستخدم سلسة، ودعم كامل للغة العربية (RTL) والإنجليزية. يقدّم الموقع واجهة عصرية تعكس هوية الأكاديمية المهنية، ويعرض خدماتها التدريبية والاستشارية، وخططها السنوية، والاعتمادات الدولية المعتمدة لديها، بالإضافة إلى مكتبة برامج تدريبية يمكن استعراضها بسهولة. تم التركيز على سهولة التصفح، والسرعة العالية في الأداء، والتكامل البصري بين جميع الصفحات، مع تصميم متجاوب يعمل بانسيابية على جميع الأجهزة. يشمل الموقع صفحات احترافية متكاملة مثل الصفحة الرئيسية التفاعلية مع سلايدر للخطة التدريبية 2025، وصفحة "عن اينوفا" التي تسلط الضوء على الرؤية والقيم والرسالة، ومكتبة البرامج التدريبية المقسمة حسب المجالات، وصفحة الاعتمادات الدولية بواجهة منظمة وشعارات معتمدة عالميًا، وقسم الأخبار والإنجازات، ونموذج تواصل مباشر مع الفروع (دبي – القاهرة – الرياض). تم تنفيذ المشروع وفق أعلى معايير UI/UX الحديثة، مع استخدام ألوان هوية بصرية مستوحاة من التدرجات الزرقاء لتجسيد الثقة والمهنية، مما جعل الموقع واجهة رقمية تليق بمؤسسة تدريب رائدة في الشرق الأوسط.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL'],
    features: [
      'تصميم حديث يعتمد على Next.js 14 وReact',
      'دعم كامل للغة العربية (RTL) والإنجليزية',
      'واجهة عصرية تعكس الهوية المهنية',
      'مكتبة برامج تدريبية منظمة',
      'صفحة اعتمادات دولية',
      'نموذج تواصل مباشر مع الفروع',
      'تصميم متجاوب يعمل على جميع الأجهزة',
      'سرعة عالية في الأداء'
    ],
    challenges:
      'تطوير موقع متعدد اللغات مع دعم كامل للغة العربية (RTL) والإنجليزية، مع الحفاظ على الأداء العالي والتصميم الجذاب. تم حل ذلك من خلال استخدام Next.js 14 مع Tailwind CSS واتباع أفضل الممارسات في تطوير المواقع المتعددة اللغات.',
    objectives:
      'إنشاء واجهة رقمية احترافية تعكس هوية الأكاديمية المهنية، مع التركيز على سهولة التصفح والسرعة العالية في الأداء، وتوفير تجربة مستخدم ممتازة على جميع الأجهزة.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54a8684d87/215-Recovered.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc288b0/inova-academy.vercel.app9.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fc64eab/inova-academy.vercel.app8.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fca2254/FireShot-Capture-032-الرئيسية-اينوفا-للتدريب-والاستشارات-inova-academy.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fce076c/inova-academy.vercel.app7.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd292f5/inova-academy.vercel.app6.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fd72280/inova-academy.vercel.app5.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fda9749/inova-academy.vercel.app4.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fde5680/inova-academy.vercel.app3.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fe2f711/inova-academy.vercel.app2.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f408fe727a3/inova-academy.vercel.app1.jpg'
    ]
  },
  {
    id: '10',
    title: 'نظام إدارة زبائن مدينة ألعاب ترفيهية واستراحات',
    client: 'مدينة ألعاب ترفيهية',
    categoryId: 'systems',
    categoryLabel: 'أنظمة إدارة',
    date: 'سبتمبر 2025',
    duration: '2.5 أشهر',
    team: 'مطور واحد',
    url: 'https://game-site-app-two.vercel.app',
    description:
      'نظام إدارة متكامل لمدينة الألعاب مبني باستخدام Next.js 14، TypeScript، وTailwind CSS مع واجهة عربية كاملة.',
    fullDescription:
      'نظام إدارة متكامل لمدينة الألعاب مبني باستخدام Next.js 14، TypeScript، وTailwind CSS مع واجهة عربية كاملة. يتضمن النظام نظام مصادقة آمن للمستخدمين مع دعم أدوار متعددة (مدير، موظف استقبال) وإدارة مستخدمين غير محدودة. يشمل النظام إدارة دخول الزبائن مع حساب تلقائي للمبالغ، وعداد تسلسلي يتصفر يومياً، وطباعة وصولات احترافية مع دعم الطابعات الحرارية. يتضمن النظام تقارير يومية وشهرية شاملة مع رسوم بيانية تفاعلية، وإمكانية تصدير إلى PDF و Excel. يتميز النظام بواجهة مستخدم عصرية ومتجاوبة مع دعم كامل للغة العربية (RTL) وخط IBM Plex Sans Arabic للنصوص العربية.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'React Native'],
    features: [
      'نظام مصادقة آمن مع دعم أدوار متعددة',
      'إدارة مستخدمين غير محدودة',
      'تسجيل دخول الزبائن مع حساب تلقائي للمبالغ',
      'عداد تسلسلي يتصفر يومياً',
      'طباعة وصولات احترافية مع دعم الطابعات الحرارية',
      'تقارير يومية وشهرية شاملة',
      'رسوم بيانية تفاعلية',
      'تصدير إلى PDF وExcel',
      'تصميم عصري ومتجاوب',
      'دعم كامل للغة العربية (RTL)',
      'خط IBM Plex Sans Arabic للنصوص العربية'
    ],
    challenges:
      'تطوير نظام إدارة متكامل مع دعم كامل للغة العربية (RTL) وتكامل مع الطابعات الحرارية. تم حل ذلك من خلال استخدام Next.js 14 مع TypeScript وTailwind CSS واتباع أفضل الممارسات في تطوير أنظمة الإدارة.',
    objectives:
      'إنشاء نظام إدارة متكامل لمدينة الألعاب يسهل إدارة الزبائن والعمليات اليومية مع توفير تقارير شاملة وإحصائيات دقيقة.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f54f9596f28/201.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9af0be/FireShot-Capture-024-نظام-إدارة-مدينة-الألعاب-game-site-app-two.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6d9ee12a/FireShot-Capture-022-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6da38d17/FireShot-Capture-021-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6da7a29c/FireShot-Capture-023-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6dab4d72/FireShot-Capture-019-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b6db06d56/FireShot-Capture-018-نظام-إدارة-مدينة-الألعاب-localhost.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b86032b50/Screenshot-2025-10-17-224014.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f2b860732c1/Screenshot-2025-10-17-224206.png'
    ]
  },
  {
    id: '11',
    title: 'منصة Taḥkīm لتحكيم البحوث الأكاديمية',
    client: 'مؤسسة أكاديمية',
    categoryId: 'platforms',
    categoryLabel: 'منصات',
    date: 'مارس 2025',
    duration: '4 أشهر',
    team: 'مطور واحد',
    url: 'https://tahkim-academic.almojaded.com/',
    description:
      'منصة متكاملة لتحكيم البحوث الأكاديمية مع إدارة كاملة للمستخدمين والدعوات البحثية والأبحاث والتحكيم.',
    fullDescription:
      'منصة Taḥkīm هي منصة متكاملة لتحكيم البحوث الأكاديمية تم تطويرها لتسهيل عملية التحكيم العلمي. تتضمن المنصة نظام إدارة متكامل للمستخدمين (مديرين، محكمين، باحثين) مع صلاحيات مختلفة. تشمل المنصة إدارة الدعوات البحثية مع تحديد المعايير والجدول الزمني، وإدارة الأبحاث المقدمة مع تعيين المحكمين ومتابعة عملية التحكيم. توفر المنصة واجهات متخصصة للمديرين لإدارة المستخدمين والدعوات والأبحاث، ولوحة تحكم للمحكمين لاستعراض وتقييم الأبحاث المسندة إليهم، وواجهة للباحثين لتقديم الأبحاث ومتابعة حالتها. تتضمن المنصة أيضاً نظام تقارير وإحصائيات متقدم، وإدارة المدفوعات، ونظام متابعة التعديلات. تم تطوير المنصة باستخدام PHP و JavaScript و MySQL مع واجهة عربية كاملة.',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    features: [
      'نظام إدارة متكامل للمستخدمين مع صلاحيات مختلفة',
      'إدارة الدعوات البحثية مع تحديد المعايير والجدول الزمني',
      'إدارة الأبحاث المقدمة مع تعيين المحكمين',
      'واجهة متخصصة للمحكمين لتقييم الأبحاث',
      'واجهة للباحثين لتقديم الأبحاث ومتابعة حالتها',
      'نظام تقارير وإحصائيات متقدم',
      'إدارة المدفوعات',
      'نظام متابعة التعديلات',
      'لوحة تحكم شاملة للمديرين',
      'دعم كامل للغة العربية'
    ],
    challenges:
      'تطوير منصة متكاملة تدعم عدة أدوار مستخدمين مع صلاحيات مختلفة وتدفقات عمل معقدة. تم حل ذلك من خلال تصميم نظام إدارة مرن وقابل للتوسع مع واجهات مستخدم متخصصة لكل دور.',
    objectives:
      'إنشاء منصة متكاملة تسهل عملية تحكيم البحوث الأكاديمية مع توفير أدوات إدارة شاملة للمديرين والمحكمين والباحثين.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f551db9a97f/201.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e629b1c9e/photo15.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a089e8/photo14.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a510a9/photo13.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62a965e5/photo14.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62adae84/photo12.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62b2f378/photo11.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62b6e081/photo10.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62bc7062/photo08.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62c23e01/photo09.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62c6d5b6/photo07.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62ccc9f3/photo17.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62d1d2de/photo06.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62d64595/photo05.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62da75cb/photo04.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62df3c13/photo01.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62e4f0b1/photo03.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e62e98401/photo02.jpg'
    ]
  },
  {
    id: '12',
    title: 'منصة المجدد للأرشفة الإلكترونية',
    client: 'مركز المجدد للبحوث والدراسات',
    categoryId: 'platforms',
    categoryLabel: 'منصات',
    date: 'مارس 2022',
    duration: '5 أشهر',
    team: 'مطور واحد',
    url: 'https://almojaded.com',
    description:
      'نظام أرشفة إلكترونية خاص بمركز المجدد للبحوث والدراسات، يقوم بتخزين وفهرسة الوثائق إلكترونيًا وإصدار تقارير تفصيلية.',
    fullDescription:
      'نظام أرشفة إلكترونية خاص بمركز المجدد للبحوث والدراسات، يقوم بتخزين وحفظ وفهرسة الوثائق والملفات إلكترونيًا وإصدار تقارير تفصيلية لجميع البيانات المختلفة وإمكانية استعراضها في أي وقت ومن أي مكان، ومتابعة أعمال الدورة المستندية للبحوث، التدقيق اللغوي، التصميم، والنشر. كما يقوم بإرشفة البريد الصادر/ الوارد. يتضمن النظام فهرسة وتخزين الوثائق في المخزن الدائم للنظام بالطرق المتعددة للتخزين واسترجاعها في أي وقت ومن أي مكان على شبكة العمل وبالطرق المتعددة للقراءة. كما يتضمن إدارة جميع عمليات الوثائق والسجلات والمستخدمين والمجموعات والصلاحيات مع مراقبة آلية دقيقة لعمل كل المستخدمين من قبل مدير النظام. ويتضمن أيضاً إصدار تقارير تلخيصية وتفصيلية لوثائق المنشأة ومحتوياتها وتقسيماتها وبياناتها المختلفة.',
    technologies: ['PHP', 'CSS', 'Bootstrap'],
    features: [
      'فهرسة وتخزين الوثائق في المخزن الدائم',
      'استرجاع الوثائق في أي وقت ومن أي مكان',
      'إدارة عمليات الوثائق والسجلات',
      'إدارة المستخدمين والمجموعات والصلاحيات',
      'مراقبة آلية دقيقة لعمل المستخدمين',
      'إصدار تقارير تلخيصية وتفصيلية',
      'متابعة الدورة المستندية للبحوث',
      'إرشفة البريد الصادر/ الوارد',
      'دعم متعدد لطرق التخزين والقراءة',
      'واجهة سهلة الاستخدام'
    ],
    challenges:
      'تطوير نظام أرشفة متكامل يدعم فهرسة وتخزين واسترجاع الوثائق بشكل آمن وفعال. تم حل ذلك من خلال تصميم نظام تخزين مرن مع فهرسة متقدمة وإدارة صلاحيات شاملة.',
    objectives:
      'إنشاء نظام أرشفة إلكتروني متكامل يسهل إدارة الوثائق والملفات مع توفير تقارير شاملة وإمكانية الوصول الآمن من أي مكان.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/68f4154912076/202510182330نموذج-ثلاثي-الأبعاد-للموقعremix01k7wq1bz1fjq82rexxxcs80f7.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e829c9d86/FireShot-Capture-014-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82a1b22e/FireShot-Capture-016-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82a640c7/FireShot-Capture-013-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82aac572/FireShot-Capture-012-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82aeee80/FireShot-Capture-011-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82b439f1/FireShot-Capture-010-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e82b89f84/FireShot-Capture-009-منصة-المجدد-للأرشفة-الإلكترونية-almojaded.com.jpg'
    ]
  },
  {
    id: '13',
    title: 'نظام PaperMetrix لتقييم وتوصية الأوراق البحثية',
    client: 'مشروع تخرجي في جامعة اسطنبول (أطروحة دكتوراه)',
    categoryId: 'platforms',
    categoryLabel: 'منصات',
    date: 'مايو 2023',
    duration: '6 أشهر',
    team: 'مطور واحد',
    url: 'https://paper-metrix.herokuapp.com',
    description:
      'منصة توصية علمية تُسهّل على الباحثين اكتشاف أفضل المقالات العربية والإنجليزية عبر دمج القياسات البديلة والتصويت المجتمعي ومحرّك توصية هجيني.',
    fullDescription:
      'منصة توصية علمية تُسهّل على الباحثين اكتشاف أفضل المقالات العربية والإنجليزية عبر دمج القياسات البديلة (قراءات Mendeley، مشاركات، مشاهدات، حفظ)، والتصويت المجتمعي الشبيه بـ Reddit (Up/Down-votes مع نظام سمعة)، ومحرّك توصية هجيني يجمع بين تشابه المحتوى والتصفية التعاونية وإعادة ترتيب مبنية على الجودة والحداثة. يتضمن النظام تقييم المقالات عبر درجة المحتوى (Content Score) باستخدام تمثيلات دلالية (TF-IDF/Embeddings)، ودرجة التفاعل (Engagement/Altmetrics) من قرّاء Mendeley والتنزيلات والمشاركات، ودرجة المجتمع (Community) من تصويتات المستخدمين مع Wilson score أو Bayesian average، وعامل الزمن (Recency Decay) للحفاظ على حداثة النتائج. يشمل النظام محرك توصية هجيني يجمع بين Content-Based باستخدام Embeddings/موضوعات (LDA/BERT)، وCollaborative Filtering من سجلات التصويت والحفظ، وإعادة ترتيب ذكية توازن بين الصلة والجودة والتنوع الموضوعي. يتميز النظام بواجهة مستخدم متكاملة مع صفحة اكتشاف بموجّهات موضوعية، وتصويت فوري وحفظ لقوائم القراءة، ولوحات وتقارير مع مؤشرات Altmetrics، وتكاملات مع Mendeley API وCrossref/DOI. تم تطوير النظام باستخدام Django 5 + Django REST Framework (DRF) للواجهة، وPython FastAPI للخلفية، وPostgreSQL للبيانات، وRedis للتخزين المؤقّت والطوابير.',
    technologies: ['Django', 'Python', 'PostgreSQL'],
    features: [
      'دمج القياسات البديلة (Altmetrics) مع التصويت المجتمعي',
      'محرّك توصية هجيني (Content-Based + Collaborative Filtering)',
      'نظام تقييم متقدم للمقالات (محتوى + تفاعل + مجتمع + زمن)',
      'صفحة اكتشاف بموجّهات موضوعية',
      'تصويت فوري وحفظ لقوائم القراءة',
      'نظام سمعة ونقاط إنجاز للمستخدمين',
      'توصيات شخصية "لأجلك" + "رائج الآن"',
      'لوحات وتقارير مع مؤشرات Altmetrics',
      'تكامل مع Mendeley API وCrossref/DOI',
      'استيراد BibTeX/CSV وتصدير البيانات'
    ],
    challenges:
      'تطوير نظام تقييم متقدم يجمع بين معالجة اللغة الطبيعية (NLP) والتصفية التعاونية مع الحفاظ على الأداء العالي. تم حل ذلك من خلال استخدام تمثيلات دلالية متقدمة (BERT/sentence-transformers) مع تحسينات في قاعدة البيانات وتخزين مؤقت ذكي.',
    objectives:
      'إنشاء منصة توصية علمية متكاملة تسهل على الباحثين اكتشاف أفضل المقالات العلمية العربية والإنجليزية مع نظام تقييم دقيق يعتمد على القياسات البديلة والتصويت المجتمعي.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c2be93720a/papermetrix.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4924e57/FireShot-Capture-166-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef495b0cc/FireShot-Capture-167-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef49a72b6/FireShot-Capture-168-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef49e1d2f/FireShot-Capture-170-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4a4607c/FireShot-Capture-172-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4a83f2f/FireShot-Capture-173-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4ac8427/FireShot-Capture-174-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b0c6bf/FireShot-Capture-177-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b48d46/FireShot-Capture-175-paper-metrix.herokuapp.com.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ef4b8b1ce/FireShot-Capture-179-paper-metrix.herokuapp.com.jpg'
    ]
  },
  {
    id: '14',
    title: 'نظام إدارة متكامل لمتجر عطور',
    client: 'متجر عطور',
    categoryId: 'systems',
    categoryLabel: 'أنظمة إدارة',
    date: 'أغسطس 2025',
    duration: '4 أشهر',
    team: 'مطور واحد',
    url: 'https://parfum-cms.vercel.app',
    description:
      'نظام إدارة متكامل لمتاجر العطور يجمع بين الأداء العالي والفخامة البصرية، مستوحى من أسلوب Soft Luxury UI الممزوج بلمسات Scandinavian Design.',
    fullDescription:
      'تم تطوير نظام إدارة متكامل لمتاجر العطور يجمع بين الأداء العالي والفخامة البصرية، مستوحى من أسلوب Soft Luxury UI for Lifestyle Brands الممزوج بلمسات Scandinavian Design التي تركز على البساطة والنظافة ودفء الألوان. يتيح النظام إدارة شاملة لكل عمليات المتجر من واجهة واحدة سهلة الاستخدام وتشمل إدارة المنتجات والتصنيفات والعلامات التجارية، وإدارة المخزون والتنبيهات الذكية عند قرب نفاد المنتجات، ونظام مبيعات وفواتير احترافي بطباعة PDF (A4 وحرارية)، وإدارة العملاء والفواتير السابقة وسجل المشتريات، وتقارير وإحصائيات تفاعلية للمبيعات والأرباح والمنتجات الأكثر مبيعًا، ونظام صلاحيات متقدم (مالك، مدير، أمين مخزن، بائع)، ودعم الباركود Code128 / EAN-13 لكل منتج، وتنبيهات وإشعارات داخلية وخارجية عبر البريد أو واتساب. تم تنفيذ النظام باستخدام أحدث تقنيات الويب لتحقيق تجربة استخدام فاخرة وسريعة، مع واجهة عربية (RTL) متكاملة تتوافق مع مختلف الأجهزة.',
    technologies: ['Next.js', 'Tailwind CSS', 'MySQL'],
    features: [
      'إدارة المنتجات والتصنيفات والعلامات التجارية',
      'إدارة المخزون مع تنبيهات ذكية عند قرب النفاد',
      'نظام مبيعات وفواتير احترافي',
      'طباعة PDF (A4 وحرارية)',
      'إدارة العملاء والفواتير السابقة',
      'تقارير وإحصائيات تفاعلية',
      'نظام صلاحيات متقدم (مالك، مدير، أمين مخزن، بائع)',
      'دعم الباركود Code128 / EAN-13',
      'تنبيهات وإشعارات عبر البريد أو واتساب',
      'تصميم فاخر مستوحى من Soft Luxury UI',
      'واجهة عربية (RTL) متكاملة'
    ],
    challenges:
      'تطوير نظام إدارة متكامل مع دعم الباركود وطباعة الفواتير مع الحفاظ على الأداء العالي والتصميم الفاخر. تم حل ذلك من خلال استخدام Next.js 15 مع App Router وPrisma ORM وshadcn/ui لتحقيق واجهة فاخرة وسريعة.',
    objectives:
      'إنشاء نظام إدارة متكامل لمتاجر العطور يجمع بين الفخامة البصرية والأداء العالي مع دعم كامل للعمليات التجارية اليومية.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c334f66a34/ParfumCMS.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350785d2/FireShot-Capture-052-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3350b9cae/FireShot-Capture-053-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351010ed/FireShot-Capture-050-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351413d8/FireShot-Capture-049-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c33518e69a/FireShot-Capture-047-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3351d972e/FireShot-Capture-048-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c335222145/FireShot-Capture-046-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c335263d06/FireShot-Capture-045-ParfumCMS-نظام-إدارة-متجر-العطور-parfum-cms.vercel.app.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c3352c86c9/download.png'
    ]
  },
  {
    id: '15',
    title: 'منصة بودكاست عربية',
    client: 'عميل خاص',
    categoryId: 'platforms',
    categoryLabel: 'منصات صوتية',
    date: 'أبريل 2025',
    duration: '3 أشهر',
    team: 'مطور واحد',
    description:
      'منصة بودكاست عربية حديثة متكاملة لإدارة البرامج والحلقات الصوتية، باستخدام Next.js 14 وMySQL مع واجهة عربية متجاوبة ودعم كامل لاتجاه RTL.',
    fullDescription:
      'قمت بتصميم وتطوير منصة بودكاست عربية حديثة متكاملة لإدارة البرامج والحلقات الصوتية، باستخدام React.js (Next.js 14) وMySQL مع واجهة عربية متجاوبة ودعم كامل لاتجاه RTL. المنصة تم بناؤها لتكون مركزًا موحدًا للبودكاست العربي، وتتيح للمستخدمين استكشاف البرامج والحلقات بسهولة، وتشغيل الحلقات عبر مشغل صوتي مدمج ومتطور، والتفاعل عبر الإعجابات والتعليقات، وحفظ الحلقات المفضلة وتتبع التقدم في الاستماع. كما تحتوي على لوحة تحكم إدارية (Admin Dashboard) تمكّن المدير من إدارة البرامج والحلقات والمستخدمين والتصنيفات، ومتابعة الإحصائيات (عدد المستمعين، الإعجابات، التعليقات)، والتحكم في الرعاة والضيوف وإدارة قوائم التشغيل. تم تطوير المشروع باستخدام Next.js 14 (React Framework)، TypeScript و Tailwind CSS، Prisma ORM مع MySQL Database، NextAuth.js للمصادقة وتسجيل الدخول، Swiper.js لعرض البرامج في شكل Carousel تفاعلي، وAudioPlayerContext لإدارة المشغل الصوتي بشكل موحد. يتميز التصميم بأنه متجاوب بالكامل للهواتف والأجهزة اللوحية، مع دعم كامل للغة العربية (RTL)، وواجهات عصرية بتأثيرات أنيميشن وانسيابية، وCarousel تفاعلي للبرامج المميزة يعرض البرنامج الرئيسي في المنتصف بشكل أكبر وأكثر وضوحًا، ومشغل صوتي متكامل مع إمكانية إضافة الحلقات لقائمة التشغيل.',
    technologies: ['Next.js', 'TypeScript', 'MySQL'],
    features: [
      'استكشاف البرامج والحلقات بسهولة',
      'مشغل صوتي مدمج ومتطور',
      'نظام إعجابات وتعليقات',
      'حفظ الحلقات المفضلة وتتبع التقدم',
      'لوحة تحكم إدارية متكاملة',
      'إدارة البرامج والحلقات والمستخدمين',
      'متابعة الإحصائيات والتحليلات',
      'Carousel تفاعلي للبرامج المميزة',
      'تصميم متجاوب بالكامل',
      'دعم كامل للغة العربية (RTL)',
      'واجهات عصرية بتأثيرات أنيميشن'
    ],
    challenges:
      'تطوير مشغل صوتي متكامل مع دعم قوائم التشغيل وإدارة الحالة بشكل موحد عبر Context API. تم حل ذلك من خلال إنشاء AudioPlayerContext متقدم يدير حالة التشغيل والحلقات الحالية والقوائم مع الحفاظ على الأداء العالي.',
    objectives:
      'إنشاء منصة بودكاست عربية متكاملة تجمع بين جمال التصميم وسلاسة الاستخدام وقوة الأداء، وتوفر تجربة مميزة لكل من المستمعين والمديرين.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c3459c2e3b/Podcast.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2913fc02/FireShot-Capture4.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e291a113d/FireShot-Capture5.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e291de3a2/FireShot-Capture3.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2923b677/FireShot-Capture1.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e29295aba/FireShot-Capture2.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e292df064/download.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e29315a8a/download.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0e2933f49f/Screenshot-2025-05-21-220726.png'
    ]
  },
  {
    id: '16',
    title: 'منصة إدارة مهام ومتابعة أعمال لمجموعة استثمارية',
    client: 'مجموعة استثمارية',
    categoryId: 'systems',
    categoryLabel: 'أنظمة إدارة',
    date: 'نوفمبر 2024',
    duration: '4 أشهر',
    team: 'مطور واحد',
    description:
      'نظام متكامل لإدارة المهام والوحدات الاستثمارية لمجموعة استشارية باستخدام Next.js وReact.js مع MySQL، بهدف تحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري.',
    fullDescription:
      'قمت بتصميم وتطوير نظام متكامل لإدارة المهام والوحدات الاستثمارية لمجموعة استشارية باستخدام Next.js وReact.js مع قاعدة بيانات MySQL، بهدف تحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري عبر لوحة تحكم موحدة ومتكاملة. يتضمن النظام لوحة تحكم المدير العام مع نظرة شاملة على أداء النظام والمشاريع والمهام الحرجة أو المتأخرة، ووحدة إدارة الموظفين لمتابعة أداء الفرق وقياس الرضا والإنتاجية وتقييم الأداء بنظام نقاط دقيق، ووحدة التقارير والإحصاءات لإنشاء تقارير أسبوعية وشهرية وتصديرها بصيغ PDF / Excel / CSV مع مؤشرات تحليلية ذكية، ووحدة التحليلات المتقدمة لعرض مؤشرات الأداء للموظفين والمشاريع والوحدات عبر لوحات رسومية تفاعلية. كما يشمل النظام إدارة النظام والصلاحيات بنظام أدوار وصلاحيات مرن، وإدارة العلاقات لربط المستخدمين بالوحدات الاستثمارية وتعيين المسؤولين والمشرفين، وإدارة الإشعارات لإرسال تنبيهات وتحذيرات أو إشعارات نجاح لجميع المستخدمين أو لوحدات محددة، ووحدة الطلبات والموافقات لنظام متكامل لتقديم الطلبات (رواتب، تدريب، دعم تقني، استشارة...) ومتابعة مراحل الموافقة، ومكتبة الموارد لإدارة ومشاركة الملفات والمستندات والفيديوهات بين فرق العمل بسهولة وأمان. تم تطوير المشروع باستخدام Next.js 14 / React.js، TypeScript، Tailwind CSS لتصميم واجهات أنيقة ومتجاوبة، Prisma ORM + MySQL لإدارة قواعد البيانات، NextAuth.js لتسجيل الدخول والصلاحيات، Recharts / Chart.js للتحليلات المرئية، وNode.js API Routes لمعالجة العمليات الخلفية. المنصة توفر بيئة رقمية ذكية وموحدة لإدارة المهام والمشاريع والموظفين والتقارير داخل المجموعة الاستثمارية، مع واجهة عربية كاملة ودعم للوضع الليلي والتصميم العصري بأسلوب Glassmorphism.',
    technologies: ['Next.js', 'TypeScript', 'MySQL'],
    features: [
      'لوحة تحكم المدير العام مع نظرة شاملة',
      'وحدة إدارة الموظفين وتقييم الأداء',
      'وحدة التقارير والإحصاءات مع تصدير PDF/Excel/CSV',
      'وحدة التحليلات المتقدمة مع لوحات رسومية',
      'نظام أدوار وصلاحيات مرن',
      'إدارة العلاقات والوحدات الاستثمارية',
      'نظام إشعارات متكامل',
      'وحدة الطلبات والموافقات',
      'مكتبة الموارد للملفات والمستندات',
      'واجهة عربية كاملة مع دعم الوضع الليلي',
      'تصميم عصري بأسلوب Glassmorphism'
    ],
    challenges:
      'تطوير نظام متكامل لإدارة المهام والموظفين والتقارير مع الحفاظ على الأداء العالي والأمان. تم حل ذلك من خلال استخدام Next.js مع Server-Side Rendering وتحسينات قاعدة البيانات مع Prisma ORM وتخزين مؤقت ذكي.',
    objectives:
      'إنشاء منصة إدارة متكاملة تجمع بين إدارة المهام والمشاريع والموظفين والتقارير في بيئة رقمية موحدة لتحسين كفاءة العمل الداخلي ومتابعة الأداء المالي والإداري.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c347f790e0/Inves-Platform.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5417687/Screenshot-2025-08-10-213201.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5454a6a/Screenshot-2025-08-10-213942.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5488e01/Screenshot-2025-08-10-213141.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea54d7d75/Screenshot-2025-08-10-213119.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea552924d/Screenshot-2025-08-10-213102.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea556df55/Screenshot-2025-08-10-213006.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea55ab3bf/Screenshot-2025-08-10-212941.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea55f2e54/Screenshot-2025-08-10-212921.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea564a5f0/Screenshot-2025-08-10-212852.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5688191/Screenshot-2025-08-10-212813.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea56dce3a/Screenshot-2025-08-10-212747.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57403fa/Screenshot-2025-07-28-101804.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57808da/Screenshot-2025-07-23-221402.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea57ce00a/Screenshot-2025-07-23-210320.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea580caa2/Screenshot-2025-07-22-141716.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea589303b/Screenshot-2025-07-15-104849.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea58d9a25/Screenshot-2025-07-15-103440.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5922e06/Screenshot-2025-07-14-204737.png',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/68f0ea5964619/Screenshot-2025-07-13-203413.png'
    ]
  },
  {
    id: '17',
    title: 'موقع مركز المجدد للبحوث والدراسات',
    client: 'مركز المجدد للبحوث والدراسات',
    categoryId: 'wordpress',
    categoryLabel: 'مواقع ووردبريس',
    date: 'يونيو 2022',
    duration: '2 أشهر',
    team: 'مطور واحد',
    url: 'https://almojaded.com',
    description:
      'تصميم وتطوير موقع مركز المجدد للبحوث والدراسات على ووردبريس لتقديم حضور رقمي احترافي وإدارة المحتوى البحثي.',
    fullDescription:
      'قمت بتصميم وتطوير موقع "مركز المجدد للبحوث والدراسات" (almojaded.com) على منصة ووردبريس، بهدف توفير حضور رقمي احترافي للمركز البحثي، وتمكين الزوار من الوصول السلسّ إلى أقسام المركز: «من نحن» – «الرؤية والأهداف» – «وحدات المركز» – «البحوث والدراسات» – «الفعاليات والندوات» وغيرها. يتيح الموقع تصفّح المحتوى المتنوع: مقالات رأي، تقارير، دراسات، ترجمات، مراجعات كتب، وسائط مرئية وإنفوجرافيك. كما يتضمن إمكانية الاشتراك في نشرة المركز والبقاء محدثين بالعروض والإصدارات البحثية. يتميز الموقع بتجربة مستخدم متوافقة مع مختلف الأجهزة والمتصفّحات، مع واجهة تصميم مهنية تُعبّر عن هوية المركز الأكاديمية والثقافية. تم تطوير الموقع باستخدام ووردبريس كمنصة بناء مناسبة لإدارة المحتوى البحثي والعلمي بكفاءة. يتضمن الموقع بنية معلومات واضحة مع أقسام وتصنيفات للمحتوى (دراسات، مقالات، ترجمات، فعاليات) ما يُسهّل التنقل ويُحسّن تجربة المستخدم. يتميز التصميم بواجهة مستخدم نظيفة، متوافقة مع الهوية البصرية للمركز، مع استخدام ألوان وخطوط مهنية تُعزّز مصداقية المحتوى. الموقع متجاوب بالكامل (Responsive Design) يلائم أجهزة سطح المكتب، الأجهزة اللوحية، والهواتف الذكية لضمان وصول الباحثين والمهتمين في كل مكان. يتضمن الموقع إمكانية الاشتراك والنشرة البريدية مع نموذج يسمح للزوار بإدخال الاسم والبريد الإلكتروني للاشتراك في قاعدة بيانات البريد للمركز. تم إعداد قائمة تنقّل شاملة تتبع المنطق البحثي للمركز، ما يسهّل على المستخدمين الوصول إلى المحتوى المناسب بسرعة. تم استخدام مُمارسات جيدة لتحسين الأداء (تحميل الصور، تخزين مؤقت، تحسين المحتوى) ما يسهم في تسريع عرض الصفحات وتجربة أفضل للزوار. بتسليم هذا المشروع، ساعدت مركز المجدد للبحوث والدراسات في بناء منصة رقمية متكاملة تُعزّز من عمله البحثي، وتفتح له مجالات وصول أوسع إلى الجمهور الأكاديمي العربي والباحثين، كما أسّست تجربة رقمية عالية الجودة تواكب تطلعاته في تجديد الفكر السياسي والاجتماعي.',
    technologies: ['WordPress', 'PHP', 'CSS', 'Bootstrap'],
    features: [
      'تصميم متجاوب يعمل على جميع الأجهزة',
      'بنية معلومات واضحة مع أقسام وتصنيفات',
      'واجهة مستخدم نظيفة ومهنية',
      'إمكانية الاشتراك في النشرة البريدية',
      'قائمة تنقّل شاملة',
      'تحسين الأداء والسرعة',
      'هوية بصرية تعكس الهوية الأكاديمية',
      'إدارة محتوى متكاملة'
    ],
    challenges:
      'تطوير موقع بحثي أكاديمي مع الحفاظ على الهوية المهنية والتصميم الجذاب. تم حل ذلك من خلال استخدام ووردبريس مع تصميم مخصص يعكس هوية المركز الأكاديمية.',
    objectives:
      'إنشاء منصة رقمية متكاملة تُعزّز من عمل المركز البحثي، وتفتح له مجالات وصول أوسع إلى الجمهور الأكاديمي العربي والباحثين.',
    images: [
      'https://ms.hsoubcdn.com/uploads/thumbnails/6381/690c863458b8c/Mojadid.jpg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c8634af84f/Screenshot6-11-202514514almojaded.com.jpeg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c863509e58/Screenshot6-11-202514615almojaded.com.jpeg',
      'https://ms.hsoubcdn.com/uploads/portfolios/6381/690c86354c3c0/Screenshot6-11-202514344almojaded.com.jpeg'
    ]
  }
]

export default function PortfolioSingle() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const projectId = searchParams.get('project') ?? '9'

  const project = useMemo(() => projects.find((item) => item.id === projectId), [projectId])
  const fallbackProject = projects[0]
  const currentProject = project ?? fallbackProject

  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (!project) {
    // redirect to first project to avoid empty state
    router.replace(`/portfolio-single?project=${fallbackProject.id}`)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

  return (
    <>
      <SocialSidebar />
      <Header />
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 left-6 text-white text-2xl z-10"
          >
            <i className="fa fa-times"></i>
          </button>
          
          <button
            onClick={prevImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto">
            <Image
              src={currentProject.images[selectedImage]}
              alt={`صورة المشروع ${selectedImage + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {currentProject.images.length}
          </div>
        </div>
      )}

      {/* Portfolio Single Section */}
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{ fontWeight: 700 }}>
              {currentProject.title}
            </h1>
            <p className="text-xl text-gray-600">
              {currentProject.client} - {currentProject.categoryLabel}
            </p>
          </div>

          {/* Main Image Gallery */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Main Image with Navigation */}
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={currentProject.images[selectedImage]}
                  alt="صورة رئيسية للمشروع"
                  fill
                  className="object-contain cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                  unoptimized
                />
                
                {/* Navigation Arrows */}
                {currentProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {currentProject.images.length}
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 left-4 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                >
                  <i className="fa fa-expand"></i>
                </button>
              </div>

              {/* Thumbnails Grid */}
              {currentProject.images.length > 1 && (
              <div className="p-6">
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
                    {currentProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-emerald-500 scale-105' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`صورة مصغرة ${index + 1}`}
                        width={120}
                        height={80}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  نبذة عن المشروع
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {currentProject.description}
                </p>
                {currentProject.fullDescription && (
                <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProject.fullDescription}
                </p>
                )}
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-808 mb-6" style={{ fontWeight: 600 }}>
                  التقنيات المستخدمة
                </h2>
                <div className="flex flex-wrap gap-3">
                  {currentProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-xl text-lg font-medium"
                      style={{ fontWeight: 600 }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {currentProject.features && currentProject.features.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  الميزات الرئيسية
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <i className="fa fa-check text-emerald-500 ml-3 text-xl"></i>
                      <span className="text-lg text-gray-700" style={{ fontWeight: 500 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Challenges & Solutions */}
              {currentProject.challenges && (
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                    التحديات والحلول
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProject.challenges}
                  </p>
                </div>
              )}

              {/* Objectives */}
              {currentProject.objectives && (
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                    الأهداف والنتائج
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProject.objectives}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontWeight: 600 }}>
                  معلومات المشروع
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-calendar text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">التاريخ</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{currentProject.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-user text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">العميل</div>
                      <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{currentProject.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-folder text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الفئة</div>
                      <div className="font-medium text-emerald-500" style={{ fontWeight: 600 }}>{currentProject.categoryLabel}</div>
                    </div>
                  </div>
                  {currentProject.duration && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-clock-o text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">المدة</div>
                        <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{currentProject.duration}</div>
                      </div>
                    </div>
                  )}
                  {currentProject.team && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-users text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الفريق</div>
                        <div className="font-medium text-gray-800" style={{ fontWeight: 600 }}>{currentProject.team}</div>
                      </div>
                    </div>
                  )}
                  {currentProject.url && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <i className="fa fa-link text-emerald-500 ml-3 text-xl"></i>
                    <div>
                      <div className="text-gray-500 text-sm">الرابط</div>
                      <a 
                          href={currentProject.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                        style={{ fontWeight: 600 }}
                      >
                        زيارة الموقع
                        <i className="fa fa-external-link mr-2 text-sm"></i>
                      </a>
                    </div>
                  </div>
                  )}
                  {currentProject.github && (
                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <i className="fa fa-github text-emerald-500 ml-3 text-xl"></i>
                      <div>
                        <div className="text-gray-500 text-sm">GitHub</div>
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                          style={{ fontWeight: 600 }}
                        >
                          عرض الكود
                          <i className="fa fa-external-link mr-2 text-sm"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl shadow-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 600 }}>
                  مستعد لبدء مشروعك؟
                </h3>
                <p className="text-emerald-100 mb-4">لنتحدث عن فكرتك وننفذها معاً</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  style={{ fontWeight: 600 }}
                >
                  <i className="fa fa-comments ml-2"></i>
                  تواصل معي
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/#latest-works"
              className="flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300 text-lg"
              style={{ fontWeight: 600 }}
            >
              <i className="fa fa-arrow-right ml-3 text-xl"></i>
              العودة للمعرض
            </Link>
            <Link
              href="/#contact"
              className="flex items-center px-8 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 text-lg"
              style={{ fontWeight: 600 }}
            >
              مشروع مشابه
              <i className="fa fa-arrow-left mr-3 text-xl"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}