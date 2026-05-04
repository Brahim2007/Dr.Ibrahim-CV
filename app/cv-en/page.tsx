'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ArrowLeft,
  ArrowUp,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages,
  LibraryBig,
  Mail,
  MapPin,
  Moon,
  Network,
  Phone,
  Printer,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Trophy,
  UserRound,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type PublicationItem = {
  content: ReactNode
  link?: string
}

type PublicationGroup = {
  category: string
  summary: string
  items: PublicationItem[]
}

type TimelineItem = {
  title: string
  period: string
  place: string
  logo?: string
  description?: ReactNode
  duties?: string[]
}

type LearningItem = {
  title: string
  organizer: string
  location: string
  date: string
}

type AwardItem = {
  title: string
  issuer: string
  year: string
  description: string
}

type SkillGroup = {
  title: string
  icon: LucideIcon
  points: string[]
  tools: string[]
}

type ProjectItem = {
  title: string
  description: string
  points: string[]
}

type ReferenceItem = {
  name: string
  role: string
  location: string
  email: string
}

type TocItem = {
  id: string
  label: string
  icon: LucideIcon
}

const tocItems: TocItem[] = [
  { id: 'profile', label: 'Profile', icon: UserRound },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'publications', label: 'Publications', icon: BookOpen },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'projects', label: 'Projects', icon: Network },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'learning', label: 'Training', icon: ScrollText },
  { id: 'references', label: 'References', icon: Users },
]

const stats = [
  { value: '15+', label: 'Years across libraries, research platforms, and digital archives', icon: BriefcaseBusiness },
  { value: '17', label: 'Publications, book chapters, proceedings, and translations', icon: BookOpen },
  { value: '5', label: 'Awards, grants, and international scholarships', icon: Trophy },
  { value: '4', label: 'Working languages for research and collaboration', icon: Languages },
]

const expertise = [
  'Digital repositories',
  'Altmetrics',
  'Open access',
  'Scholarly communication',
  'Research platforms',
  'Knowledge architecture',
]

const publications: PublicationGroup[] = [
  {
    category: 'Peer-Reviewed Articles',
    summary: 'Journal articles and indexed research on libraries, repositories, and scientometrics.',
    items: [
      {
        content: (
          <>
            Kertiou, Brahim. "Promoting Environmental Awareness and Education in Sharjah Public Libraries: A Data-Driven Analysis of Community-Oriented Programs (2018-2024)." <strong><em>Iqra&apos;a: Sharjah Libraries &amp; Information Journal</em></strong>, 21: 2025, 5-35.
          </>
        ),
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Kuzey Afrika Ülkelerinin Bilim ve Teknoloji Alanindaki Araştirma Performanslarinin Bilimmetrik Bir Analizi." <strong>Bilgi ve Belge Araştırmaları</strong>, 12: 2019, 80-100.
          </>
        ),
        link: 'https://dergipark.org.tr/tr/download/article-file/907398',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Informal Electronic Resources through Institutional Digital Repositories: Dissemination, Usage Measurement, and Visibility." <strong><em>QScience Proceedings</em></strong>, The Special Libraries Association-Arabian Gulf Chapter 20th Annual Conference, Mar 2014, Volume 2014, 5. <strong>Hamad bin Khalifa University Press (HBKU Press)</strong>. DOI: 10.5339/qproc.2014.gsla.5.
          </>
        ),
        link: 'https://www.qscience.com/docserver/fulltext/qproc/2014/1/qproc.2014.gsla.5.pdf?expires=1762614586&id=id&accname=guest&checksum=9FF3CFF5F8FD9FEC21F0FCB6ED95E049',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Academic Libraries and Institutional Repositories: New Tasks and Roles." <strong><em>RIST</em></strong>, Vol. 19, No. 01, 2011, pp. 120-146.
          </>
        ),
        link: 'http://www.webreview.dz/IMG/pdf/06ar-rist19-1.pdf',
      },
    ],
  },
  {
    category: 'Book Chapters',
    summary: 'Long-form academic contributions on scientific capacity and Arab institutional repositories.',
    items: [
      {
        content: (
          <>
            Kertiou, Brahim. "Research Productivity and Scientific Capabilities in the Member States of the Organization of Islamic Cooperation." In <strong><em>Islam and International Relations: Contemporary Views and Issues</em></strong>, pp. 401-426. <strong>Al-Mujaddid Center for Research and Studies</strong>, Istanbul, 2024.
          </>
        ),
        link: 'https://drive.google.com/file/d/1VF9Z-ie9kuX70mULQcf9Vv72a1UVcGXn/view?usp=sharing',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Institutional Digital Repositories and Dissemination of Unofficial Electronic Resources: A Survey of Universities in the Arab Region" (Chapter 6). In <strong><em>Universities and Scientific Research in the Arab World</em></strong>, <strong>Arab Center for Research and Policy Studies</strong>, Doha, Qatar, 2017.
          </>
        ),
        link: 'https://drive.google.com/file/d/11wg1lR2OiWxOKe3s7UcI-KTlJvz9JL_j/view?usp=sharing',
      },
    ],
  },
  {
    category: 'Conference Proceedings',
    summary: 'Conference papers across open access, heritage digitization, Creative Commons, and Web 2.0.',
    items: [
      {
        content: (
          <>
            Kertiou, Brahim. "The Role of Digital Libraries in Activating and Developing Arab Heritage and Literature: Initiatives and Leading Arab and International Experiences (دور المكتبات الرقمية في تفعيل وتطوير التراث والأدب العربي: مبادرات وتجارب عربية وعالمية رائدة)." In <strong><em>Proceedings of the 7th International Conference on the Arabic Language: The Role of Arabic Language in Civilizational Building</em></strong>, <strong>Association of Arabic Language Teachers and Yogyakarta University</strong>, Yogyakarta, Indonesia, 2011.
          </>
        ),
        link: 'https://drive.google.com/file/d/11tlOrMNOUJL6qATZ5k9qSKmQEI7M5g_1/view?usp=drive_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim. (2022, October 29-31). Altmetrics in Scientific Research: Towards Alternative Measures of Scholarly Impact. Paper presented at <strong>the Third Arab Open Access Symposium</strong>. Symposium organized by the Doha Institute for Graduate Studies and the Arab Group for Open Access (AGOA), Doha, Qatar.
          </>
        ),
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Creative Commons Licensing and its Strategic Impact on National Libraries." <strong>The First IFLA Regional Conference in the Arab Region</strong>, June 2013, organized by IFLA and Qatari Ministry of Culture, Doha, Qatar.
          </>
        ),
        link: 'https://drive.google.com/file/d/1RSH4zqBH4LvQkRuavjlhlF33UXBdC81I/view?usp=drive_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "Millennium Librarians and the Future of the Librarianship Profession in the Arab World (مكتبيي جيل الألفية و مستقبل مهنة المكتبات في العالم العربي)." <strong><em>Proceedings of the 24th Conference of the Arab Federation for Libraries and Information (AFLI)</em></strong>, pp. 398-415. <strong>Arab Federation for Libraries and Information</strong>, November 30, 2013, Riyadh, Saudi Arabia.
          </>
        ),
        link: 'https://search.emarefa.net/detail/BIM-373309',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "The Impact of Web 2.0 on Scientific Communication and Knowledge Exchange Among Researchers (انعكاسات الويب 2.0 على الاتصال العلمي وتبادل المعرفة بين الباحثين)." In <strong><em>Proceedings of the International Conference on Digital Information Technology: Modern Trends in Information Technology</em></strong>, <strong>Zarqa University</strong> in collaboration with <strong>Jalwan Academy for Training and Studies</strong>, Amman, Jordan, 2012.
          </>
        ),
        link: 'https://drive.google.com/file/d/1y2XIcZg0d4UVM7rvxQtBlq_TjPWoHxDK/view?usp=drive_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim. "The Impact of the Open Access Movement on Arab Medical Libraries (تأثير حركة الوصول الحر على المكتبات الطبية العربية)." In <strong><em>Proceedings of the 22nd Conference: Systems and Information Services in Arab Information Institutions: Reality, Challenges, and Aspirations</em></strong>, pp. 811-844. <strong>Arab Federation for Libraries and Information</strong>, <strong>Ministry of Culture</strong>, <strong>Ministry of Electricity and Dams</strong>, and the <strong>Sudanese Library and Information Association</strong>, Khartoum, 2011.
          </>
        ),
        link: 'https://drive.google.com/file/d/1VF9Z-ie9kuX70mULQcf9Vv72a1UVcGXn/view?usp=drive_link',
      },
    ],
  },
  {
    category: 'Translations',
    summary: 'Arabic translations connecting Islamic thought, digital ethics, open data, and social media sovereignty.',
    items: [
      {
        content: (
          <>
            Kertiou, Brahim (translator), and Ismail al-Faruqi. "نهضة الأمة تبدأ من جامعاتها". Originally titled <a href="https://www.oasiscenter.eu/en/the-umma-rebirth-begins-in-universities" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 dark:text-emerald-300">"The Umma&apos;s Rebirth Begins in Universities."</a> <strong><em>Oasis</em></strong>, June 2020. Retrieved from Oasis Center.
          </>
        ),
        link: 'https://drive.google.com/file/d/1Df7kkPFs6DaUBtsdcCGPQo48x2WVokYW/view',
      },
      {
        content: (
          <>
            Kertiou, Brahim (translator), and Mujahidul Islam. "الأخلاق الإسلامية وموقفها من صعود التكنولوجيا الرقمية." Originally titled <a href="https://themaydan.com/2021/07/islamic-ethics-and-the-rise-of-digital-technology/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 dark:text-emerald-300">"Islamic Ethics and the Rise of Digital Technology."</a>
          </>
        ),
        link: 'https://drive.google.com/file/d/1Y5y2JCkYgUpaHIng2-oQF40ZcoTD2Tsn/view?usp=share_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim (translator). "الذكاء الاصطناعي والإسلام." Originally titled <a href="https://www.l-islam.com/index.php/reflexions/intelligence-artificiel-et-islam" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 dark:text-emerald-300">"Intelligence Artificielle et Islam."</a>
          </>
        ),
        link: 'https://drive.google.com/file/d/1VcropnKfbCrG581GZGssO9dZnaTepJDg/view?usp=share_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim (translator), and Frédéric Gauzy. "الأهمية المتزايدة للبيانات المفتوحة في المنطقة العربية" Originally titled <a href="https://www.opendatasoft.com/en/blog/the-growing-importance-of-open-data-in-the-middle-east/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 dark:text-emerald-300">"The growing importance of open data in the Arab Region."</a> <strong><em>Opendatasoft</em></strong>, 2022.
          </>
        ),
        link: 'https://drive.google.com/file/d/1XpgAZCRwocA6FKmMaUFugk6odX2Rly2d/view?usp=drive_link',
      },
      {
        content: (
          <>
            Kertiou, Brahim (translator), and Hafsa Nur Aslanoğlu. "وسائل التواصل الاجتماعي: المقاربة الجديدة للسيادة" Originally titled <a href="https://ilke.org.tr/egemenligin-yeni-gorunumu-sosyal-medya/2717" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 dark:text-emerald-300">"Egemenliğin Yeni Görünümü: Sosyal Medya."</a> <strong><em>ilke</em></strong>, 2021.
          </>
        ),
        link: 'https://drive.google.com/file/d/1-wSuykiIDrN7K-z71-XuBYfBKGLWULwx/view?usp=drive_link',
      },
    ],
  },
]

const education: TimelineItem[] = [
  {
    title: 'Ph.D. in Information & Document Management',
    period: 'Sep 2016 - May 2023',
    place: 'Istanbul University, Turkey',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg/1200px-%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg.png',
    description: (
      <>
        <strong>Dissertation:</strong> Alternative Metrics for Evaluating Scientific Outputs: A Model for An Open Evaluation Platform
      </>
    ),
  },
  {
    title: 'MSc in Library & Information Science',
    period: 'Sep 2008 - Jun 2010',
    place: 'Constantine 2 University, Algeria',
    logo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png',
    description: (
      <>
        <strong>Thesis:</strong> Digital Repositories and Open Access: A Project to Build a Digital Repository for the Field of Library and Information Science
      </>
    ),
  },
  {
    title: 'BSc in Library & Information Science',
    period: 'Sep 2005 - Jun 2008',
    place: 'Constantine 2 University, Algeria',
    logo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png',
    description: (
      <>
        <strong>Honors:</strong> Summa Cum Laude
      </>
    ),
  },
]

const experience: TimelineItem[] = [
  {
    title: 'Website and Research Platform Supervisor',
    period: 'Sep 2020 - Present',
    place: 'Al-Mojaded Center for Research & Studies, Istanbul, Turkey',
    logo: '/img/moj.png',
    duties: [
      "Supervised the development, management, and maintenance of the center's official website, ensuring continuous functionality, security, and adherence to institutional identity and design standards.",
      'Oversaw the electronic archiving system, including data organization, digital preservation workflows, and access control policies to ensure long-term sustainability and usability of research outputs.',
      'Managed content publishing and editorial workflow, coordinating between researchers, editors, and translators to maintain the accuracy, consistency, and linguistic quality of published materials.',
      'Led the creation of the Research & Studies Platform, an integrated digital repository showcasing research outputs from Arab think tanks, fostering collaboration and open access to regional knowledge.',
      'Implemented SEO and UX improvements to enhance discoverability, user engagement, and accessibility across devices.',
      'Prepared analytical and progress reports summarizing digital performance, visitor statistics, and platform usage metrics to guide strategic decisions.',
      "Collaborated with media and marketing teams to design and execute digital communication plans across social media platforms, amplifying the visibility of the center's research and activities.",
    ],
  },
  {
    title: 'Scholarly Communication & Reference Librarian',
    period: 'Dec 2009 - Oct 2014',
    place: "Larbi Ben M'hidi University, Algeria",
    logo: 'https://www.univ-oeb.dz/wp-content/uploads/2022/02/cropped-logo-2-1.png',
    duties: [
      'Provided reference services and research consultations to students, faculty, and researchers.',
      'Developed and delivered instructional sessions on information literacy, research strategies, and citation management.',
      'Supported scholarly communication by staying up to date with trends and best practices, such as open access, copyright, and intellectual property issues.',
      'Collaborated with faculty to integrate library resources into course content and curricula.',
      'Participated in collection development and the evaluation of library resources.',
      'Liaised with other library departments and campus units to support interdisciplinary research and collaboration.',
      'Engaged in library outreach efforts and promoted library services and resources through various channels.',
      'Pursued professional development by attending conferences, workshops, and webinars to stay current with trends and best practices in the field.',
    ],
  },
  {
    title: 'Adjunct Instructor',
    period: 'Sep 2012 - Jun 2013',
    place: 'Constantine 2 University, Algeria',
    logo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png',
    duties: [
      'Directed instruction on electronic archiving, highlighting best practices for organizing, preserving, and providing access to digital collections.',
      'Delivered coursework on database design covering data modeling, normalization, indexing, and practical database management systems.',
      'Mentored students in developing electronic resources such as e-books, digital collections, and online databases with a focus on usability and accessibility.',
      'Developed comprehensive course materials, presentations, and assignments to elevate student engagement and learning outcomes.',
      'Conducted lectures, facilitated discussions, and led hands-on exercises to reinforce theoretical knowledge with practical application.',
      'Provided individualized academic support, addressing student inquiries and offering constructive feedback throughout the term.',
    ],
  },
]

const awards: AwardItem[] = [
  {
    title: 'Al-Hakim Award 2025 – Third Place (Cultural & Educational Track)',
    issuer: '“Inki” for Studies and Research',
    year: '2025',
    description: 'Awarded third place for academic research in the Al-Hakim Award competition, Cultural and Educational track, organized by Inki for Studies and Research.',
  },
  {
    title: "Sharjah Libraries' Literature Award",
    issuer: 'Sharjah Book Authority',
    year: '2024',
    description: 'Recognized for excellence in library literature.',
  },
  {
    title: 'Ibn Khaldun Scholarship',
    issuer: 'Türkiye Scholarships Program',
    year: '2015',
    description: 'Awarded for doctoral studies in Turkey.',
  },
  {
    title: 'European Commission Training Scholarship',
    issuer: 'European Commission',
    year: '2013',
    description: 'Supporting advanced training at the University of Strasbourg on digital library development and management.',
  },
  {
    title: 'AFLI New Generation Award',
    issuer: 'Arab Federation for Libraries and Information',
    year: '2010',
    description: 'Honored for the most innovative Arab youth project in libraries and information on the internet.',
  },
]

const projects: ProjectItem[] = [
  {
    title: 'Al-Mojaded Platform for Electronic Archiving (e-Archive)',
    description: 'Integrated web-based system for archiving research, tracking tasks, and managing correspondence.',
    points: [
      'Ensures secure storage, preservation, and indexing of documents with centralized access.',
      'Automates reporting, backup routines, and user permission management.',
    ],
  },
  {
    title: 'Al-Mojaded Platform for Research and Studies',
    description: 'Regional platform consolidating intellectual output across Arab research centers.',
    points: [
      'Focuses on political science, Islamic political thought, and Sharia politics.',
      'Provides curated resources and services for academic institutions and researchers.',
    ],
  },
  {
    title: 'Development of Al-Mojaded Center Website',
    description: 'Full redesign and implementation using WordPress to improve discoverability and user experience.',
    points: [
      'Implemented seamless search and navigation for rapid content retrieval.',
      'Integrated analytics and SEO enhancements for continuous performance monitoring.',
    ],
  },
  {
    title: 'PaperMetrix Platform',
    description: 'Ph.D.-driven platform enhancing research evaluation and engagement for scholars and readers.',
    points: [
      'Monitors feedback loops and transparency in scholarly reviewing.',
      'Extends Mendeley functionality with rating and review workflows using the Mendeley API.',
    ],
  },
]

const skills: SkillGroup[] = [
  {
    title: 'Digital Content Management & Website Supervision',
    icon: LibraryBig,
    points: [
      'Web administration, performance monitoring, and CMS operations.',
      'Editorial workflows ensuring linguistic quality, metadata completeness, and consistency.',
      'SEO strategy implementation and accessibility optimization aligned with WCAG standards.',
    ],
    tools: ['WordPress', 'Laravel CMS', 'PHPMaker', 'Google Search Console', 'SEMrush', 'WCAG'],
  },
  {
    title: 'Digital Humanities & Analytical Tools',
    icon: BarChart3,
    points: [
      'Text and data analysis for thematic and semantic insights.',
      'Social network and visualization techniques for scholarly communication research.',
      'Entity and relation extraction pipelines for structured digital archives.',
    ],
    tools: ['Python', 'pandas', 'NumPy', 'NLTK', 'Gephi', 'matplotlib', 'D3.js'],
  },
  {
    title: 'Knowledge Architecture & Repository Systems',
    icon: Database,
    points: [
      'Metadata modeling for interoperable digital collections.',
      'Database design and management for scalable knowledge systems.',
      'Digital repository administration and harvesting workflows.',
    ],
    tools: ['MARC21', 'Dublin Core', 'Schema.org', 'MySQL', 'PostgreSQL', 'Neo4j', 'DSpace', 'OAI-PMH'],
  },
  {
    title: 'Technical Integration & Performance Optimization',
    icon: ShieldCheck,
    points: [
      'Server security, SSL configuration, and proactive maintenance for data integrity.',
      'Performance analytics, server log auditing, and search visibility reporting.',
      'Cross-team coordination between editorial, technical, and communication stakeholders.',
    ],
    tools: ['SSL', 'Google Analytics', 'PageSpeed Insights', 'Server logs', 'Technical reporting'],
  },
]

const trainingItems: LearningItem[] = [
  {
    title: 'Participant in the training program on Introduction to Information Security',
    organizer: 'BARQ For Policies and Consultations',
    location: 'Istanbul, Turkey',
    date: 'November 11-15, 2019',
  },
  {
    title: 'Participant in the training course on the ProQuest scientific research platform',
    organizer: 'ProQuest Turkey Branch',
    location: 'Istanbul, Turkey',
    date: 'September 2017',
  },
  {
    title: 'Participant in a training workshop on digital libraries and electronic document management',
    organizer: 'National School of Administration & University of Strasbourg',
    location: 'Strasbourg, France',
    date: 'April 1-7, 2013',
  },
  {
    title: 'Participant in the workshop on electronic management of documents and workflow',
    organizer: 'Arab Federation for Libraries and Information (AFLI) & University of Constantine',
    location: 'Constantine, Algeria',
    date: 'June 25-28, 2012',
  },
  {
    title: 'Participant in the Second Training Course on Using the SNDL Portal for Accessing Scientific Databases',
    organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Jijel',
    location: 'Jijel, Algeria',
    date: 'June 18-21, 2012',
  },
  {
    title: 'Participant in the First Training Course on Using the SNDL Portal for Accessing Scientific Databases',
    organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Batna',
    location: 'Batna, Algeria',
    date: 'January 22-24, 2012',
  },
  {
    title: 'Participant in the SYNGEB V2 Training Course on the Algerian Integrated Library Management System',
    organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Oum El Bouaghi',
    location: 'Oum El Bouaghi, Algeria',
    date: 'March 14-17, 2010',
  },
]

const workshops: LearningItem[] = [
  {
    title: 'Participant in the Third Arab Forum for Open Access',
    organizer: 'Doha Institute for Graduate Studies & Arab Community of Open Access Group (ACOA)',
    location: 'Doha, Qatar',
    date: 'October 29-31, 2022',
  },
  {
    title: 'Participant in the Spring School of Archives and Ottoman History',
    organizer: 'Turkish Grants Authority (YTB) & Ottoman Archives Directorate',
    location: 'Istanbul, Turkey',
    date: 'March - June 2018',
  },
  {
    title: 'Participant in a workshop on bibliometric measurements',
    organizer: 'Library of Istanbul Technical University',
    location: 'Istanbul, Turkey',
    date: 'October 22-23, 2018',
  },
  {
    title: 'Participant in the SLA-AGC 20th Annual Conference, "Enhancing in Digital Knowledge Society\'s Information Needs"',
    organizer: 'Specialized Libraries Association (Arabian Gulf Branch) & Qatar University',
    location: 'Doha, Qatar',
    date: 'March 25-27, 2014',
  },
  {
    title: 'Participant in the AFLI 24th Conference "Profession and Studies of Libraries and Information Reality and Trends"',
    organizer: 'Arab Federation for Libraries and Information (AFLI) & Taibah University',
    location: 'Medina, Saudi Arabia',
    date: 'November 26-27, 2013',
  },
  {
    title: 'Participant in the First Regional International Federation of Library Associations (IFLA) Conference in the Arab Region',
    organizer: 'IFLA, AFLI & Public Libraries Department of Qatar Ministry of Culture, Arts, and Heritage',
    location: 'Doha, Qatar',
    date: 'June 11-12, 2013',
  },
  {
    title: 'Participant in the International Conference on Digital Information Technology: Recent Trends in Information Technology',
    organizer: 'Zarqa University & Galwan Training Academy',
    location: 'Amman, Jordan',
    date: 'October 9-11, 2012',
  },
  {
    title: 'Participant in the First National Forum on Archives and National Memory: Achievements and Aspirations',
    organizer: "Research Laboratory 'Algeria's Way Toward the Information Society' & Algerian National Archives",
    location: 'Constantine, Algeria',
    date: 'June 10-11, 2012',
  },
  {
    title: 'Participant in the International Conference on Digital Information Technology, Modern Trends in Information Technology',
    organizer: 'Tunisian Association of Management & ALECSO',
    location: 'Hammamet, Tunisia',
    date: 'May 7-10, 2012',
  },
  {
    title: 'Participant in the 7th International Conference on the Arabic Language and its Role in the Civilization Building Process',
    organizer: 'Union of Arabic Language Teachers & Universitas Gadjah Mada',
    location: 'Yogyakarta, Indonesia',
    date: 'July 14-17, 2011',
  },
]

const memberships = [
  {
    organization: 'ARID International Journal of Informetrics and Scholarly Communication (AIJISC)',
    role: 'Editorial Board Member',
    note: 'ISSN: 2708-7352',
  },
]

const languages = [
  { name: 'Arabic', proficiency: 'Native', level: 100 },
  { name: 'French', proficiency: 'Proficient', level: 86 },
  { name: 'English', proficiency: 'Proficient', level: 86 },
  { name: 'Turkish', proficiency: 'Proficient', level: 82 },
]

const references: ReferenceItem[] = [
  {
    name: 'Prof. Dr. İshak KESKİN',
    role: 'Department of Records Archives Management',
    location: 'Istanbul University',
    email: 'ishak.keskin@istanbul.edu.tr',
  },
  {
    name: 'Assoc. Prof. Dr. Moazzam Naseer',
    role: 'Riphah Institute of Media Sciences',
    location: 'Riphah International University, Islamabad, Pakistan',
    email: 'moazzam.naseer@riphah.edu.pk',
  },
  {
    name: 'Prof. Dr. Aknouch Nabil',
    role: 'Department of Records Archives Management',
    location: 'University of Constantine 2, Algeria',
    email: 'nabil.aknouche@univ-constantine2.dz',
  },
]

const academicProfiles = [
  { label: 'Academia.edu', value: 'A', href: 'https://istanbul.academia.edu/BRAH%C4%B0MKERTIOU' },
  { label: 'LinkedIn', value: 'in', href: 'https://www.linkedin.com/in/kertiou-brahim-37654940/' },
]

const totalPublications = publications.reduce((total, group) => total + group.items.length, 0)

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setDarkMode(storedTheme === 'dark')
      return
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    setDarkMode(!!prefersDark)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    document.documentElement.classList.toggle('dark', darkMode)
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

      const nextActive =
        tocItems.findLast?.((item) => {
          const element = document.getElementById(item.id)
          if (!element) return false
          return element.getBoundingClientRect().top <= 180
        }) ??
        [...tocItems].reverse().find((item) => {
          const element = document.getElementById(item.id)
          if (!element) return false
          return element.getBoundingClientRect().top <= 180
        })

      if (nextActive) {
        setActiveSection(nextActive.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const publicationHighlights = useMemo(
    () => publications.map((group) => ({ category: group.category, count: group.items.length })),
    []
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="direction-ltr min-h-screen bg-stone-50 text-left text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <Header redirectToHome />

      <button
        className="group fixed right-5 top-28 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 print:hidden dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-200"
        onClick={() => setDarkMode((current) => !current)}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <main className="pt-20 print:pt-0">
        <section className="relative overflow-hidden bg-slate-950 text-white print:bg-white print:text-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,.38),rgba(14,165,233,.18)_42%,rgba(15,23,42,.15))] print:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-50 to-transparent dark:from-slate-950 print:hidden" />

          <div className="container-custom relative px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur print:border-slate-200 print:bg-white print:text-slate-700">
                  <BadgeCheck className="h-4 w-4" />
                  Academic CV
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl print:text-4xl print:text-slate-950">
                  Dr. Brahim KERTIOU
                </h1>
                <p className="mt-5 max-w-3xl text-xl leading-relaxed text-emerald-50 sm:text-2xl print:text-base print:text-slate-700">
                  Ph.D. in Library & Information Science specializing in digital humanities, scholarly communication, open access, and research platform architecture.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur print:border-slate-300 print:bg-white print:text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 text-sm text-slate-100 sm:grid-cols-3 print:grid-cols-3 print:text-slate-700">
                  <ContactPill icon={Phone} label="(+90) 531 857 9095" href="tel:+905318579095" />
                  <ContactPill icon={Mail} label="kertiou.brahim@gmail.com" href="mailto:kertiou.brahim@gmail.com" />
                  <ContactPill icon={MapPin} label="Istanbul, Turkey" />
                </div>
              </div>

              <aside className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-emerald-950/30 backdrop-blur print:hidden">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10">
                  <Image
                    src="/img/about.jpg"
                    alt="Portrait of Brahim Kertiou"
                    width={640}
                    height={760}
                    priority
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {academicProfiles.map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-20 flex-col justify-between rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/20"
                      aria-label={`Open ${profile.label} profile`}
                    >
                      <span className="text-2xl font-black text-white">{profile.value}</span>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-100">
                        {profile.label}
                        <ExternalLink className="h-3 w-3 transition group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="container-custom px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="print:hidden">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">Navigate</p>
                  <nav className="mt-4 space-y-1" aria-label="CV sections">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                          activeSection === item.id
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Quick View</p>
                  <div className="mt-4 space-y-4">
                    {publicationHighlights.map((item) => (
                      <div key={item.category}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-semibold text-slate-700 dark:text-slate-200">{item.category}</span>
                          <span className="font-black text-emerald-600 dark:text-emerald-300">{item.count}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                            style={{ width: `${Math.max(18, (item.count / totalPublications) * 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
                {stats.map((stat) => (
                  <MetricCard key={stat.label} {...stat} />
                ))}
              </section>

              <Section id="profile" icon={UserRound} eyebrow="Profile" title="Research Platform Builder With Library Science Depth">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
                  <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 print:text-sm print:leading-6 print:text-slate-700">
                    <p>
                      Accomplished Ph.D. in Library & Information Science with over 15 years of expertise in digital humanities, scholarly communication, and information systems. Currently serving as Website and Research Platform Supervisor at Al-Mojaded Center for Research & Studies in Istanbul, leading digital transformation initiatives and managing electronic archiving systems.
                    </p>
                    <p>
                      Research focuses on alternative metrics for evaluating scientific outputs, digital repositories, and open access initiatives. Published author across peer-reviewed articles, book chapters, conference proceedings, and Arabic translations, with awards including the Sharjah Libraries&apos; Literature Award and the Ibn Khaldun Scholarship.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-sky-600 p-6 text-white shadow-xl shadow-emerald-600/20 print:border print:border-slate-200 print:bg-white print:text-slate-900 print:shadow-none">
                    <QuoteMark />
                    <p className="mt-4 text-lg font-semibold leading-8 print:text-sm print:leading-6">
                      Building interoperable knowledge systems where research outputs are easier to preserve, evaluate, discover, and reuse.
                    </p>
                  </div>
                </div>
              </Section>

              <Section id="education" icon={GraduationCap} eyebrow="Academic Foundation" title="Education">
                <Timeline items={education} compact />
              </Section>

              <Section id="experience" icon={BriefcaseBusiness} eyebrow="Professional Practice" title="Work Experience">
                <Timeline items={experience} />
              </Section>

              <Section id="publications" icon={BookOpen} eyebrow={`${totalPublications} Selected Outputs`} title="Publications">
                <div className="space-y-5">
                  {publications.map((group, groupIndex) => (
                    <details
                      key={group.category}
                      className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition open:shadow-xl open:shadow-slate-200/60 dark:border-white/10 dark:bg-slate-950 dark:open:shadow-black/20"
                      open={groupIndex === 0}
                    >
                      <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                              {group.items.length}
                            </span>
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">{group.category}</h3>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{group.summary}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500 transition group-open:bg-emerald-600 group-open:text-white dark:bg-white/10 dark:text-slate-300">
                          View
                          <ArrowUp className="h-4 w-4 rotate-45 transition group-open:rotate-180" />
                        </span>
                      </summary>

                      <ol className="space-y-3 px-5 pb-5">
                        {group.items.map((item, index) => (
                          <li
                            key={index}
                            className="grid gap-4 rounded-2xl border border-slate-100 bg-stone-50 p-4 text-sm leading-7 text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 sm:grid-cols-[42px_minmax(0,1fr)_auto]"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-black text-emerald-700 shadow-sm dark:bg-white/10 dark:text-emerald-300">
                              {index + 1}
                            </span>
                            <span>{item.content}</span>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 print:hidden"
                                aria-label="Open publication"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </li>
                        ))}
                      </ol>
                    </details>
                  ))}
                </div>
              </Section>

              <Section id="awards" icon={Trophy} eyebrow="Recognition" title="Awards & Grants">
                <div className="grid gap-4 md:grid-cols-2">
                  {awards.map((award) => (
                    <article
                      key={award.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-slate-950 dark:hover:shadow-black/20"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                          <Award className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600 dark:bg-white/10 dark:text-slate-300">{award.year}</span>
                      </div>
                      <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{award.title}</h3>
                      <p className="mt-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">{award.issuer}</p>
                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{award.description}</p>
                    </article>
                  ))}
                </div>
              </Section>

              <Section id="projects" icon={Network} eyebrow="Implemented Platforms" title="Projects Supervised">
                <div className="grid gap-4 lg:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                        <Network className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                      <ul className="mt-5 space-y-3">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600 dark:text-emerald-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Section>

              <Section id="skills" icon={Sparkles} eyebrow="Capabilities" title="Technical & Research Skills">
                <div className="grid gap-4 lg:grid-cols-2">
                  {skills.map((skill) => (
                    <article
                      key={skill.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                          <skill.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-7 text-slate-950 dark:text-white">{skill.title}</h3>
                          <ul className="mt-4 space-y-2">
                            {skill.points.map((point) => (
                              <li key={point} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </Section>

              <Section id="learning" icon={ScrollText} eyebrow="Professional Development" title="Training, Workshops & Conferences">
                <div className="grid gap-5 lg:grid-cols-2">
                  <LearningPanel title="Training Programs" icon={FileText} items={trainingItems} />
                  <LearningPanel title="Workshops & Conferences" icon={CalendarDays} items={workshops} />
                </div>
              </Section>

              <section className="grid gap-5 lg:grid-cols-2">
                <Section id="memberships" icon={Users} eyebrow="Service" title="Memberships">
                  <div className="space-y-4">
                    {memberships.map((membership) => (
                      <div key={membership.organization} className="rounded-3xl bg-stone-50 p-5 dark:bg-slate-950">
                        <p className="font-black text-slate-950 dark:text-white">{membership.role}</p>
                        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{membership.organization}</p>
                        <p className="mt-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{membership.note}</p>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section id="languages" icon={Languages} eyebrow="Communication" title="Languages">
                  <div className="space-y-5">
                    {languages.map((language) => (
                      <div key={language.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-black text-slate-950 dark:text-white">{language.name}</span>
                          <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{language.proficiency}</span>
                        </div>
                        <div className="h-3 rounded-full bg-slate-100 dark:bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
                            style={{ width: `${language.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              </section>

              <Section id="references" icon={Users} eyebrow="Academic Network" title="References">
                <div className="grid gap-4 lg:grid-cols-3">
                  {references.map((reference) => (
                    <article
                      key={reference.email}
                      className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-slate-950"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-200">
                        <UserRound className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{reference.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{reference.role}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{reference.location}</p>
                      <a
                        href={`mailto:${reference.email}`}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {reference.email}
                      </a>
                    </article>
                  ))}
                </div>
              </Section>

              <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20 sm:flex-row sm:items-center sm:justify-between print:hidden">
                <div>
                  <p className="font-black text-slate-950 dark:text-white">Ready for print or PDF export</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">The print view removes navigation, preserves hierarchy, and keeps the CV readable.</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    <Download className="h-4 w-4" />
                    Save PDF
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <Printer className="h-4 w-4" />
                    Print
                  </button>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <button
        className={`fixed bottom-6 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-900/30 transition print:hidden ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <Footer showContactCTA={false} language="en" />
    </div>
  )
}

function ContactPill({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon
  label: string
  href?: string
}) {
  const content = (
    <>
      <Icon className="h-4 w-4 flex-none text-emerald-200 print:text-emerald-700" />
      <span className="truncate">{label}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 font-semibold text-white backdrop-blur transition hover:bg-white/20 print:border-slate-200 print:bg-white print:text-slate-700"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 font-semibold text-white backdrop-blur print:border-slate-200 print:bg-white print:text-slate-700">
      {content}
    </div>
  )
}

function MetricCard({
  value,
  label,
  icon: Icon,
}: {
  value: string
  label: string
  icon: LucideIcon
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20 print:border-slate-200 print:p-4 print:shadow-none">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-4xl font-black tracking-normal text-slate-950 dark:text-white print:text-2xl">{value}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400 print:text-xs print:leading-5">{label}</p>
        </div>
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </article>
  )
}

function Section({
  id,
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  id: string
  icon: LucideIcon
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20 sm:p-7 print:break-inside-avoid print:border-slate-200 print:p-4 print:shadow-none"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
            <Icon className="h-4 w-4" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-normal text-slate-950 dark:text-white print:text-xl">{title}</h2>
        </div>
        <div className="hidden h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300 sm:flex print:hidden">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {children}
    </section>
  )
}

function Timeline({ items, compact = false }: { items: TimelineItem[]; compact?: boolean }) {
  return (
    <div className="relative space-y-6 before:absolute before:bottom-3 before:left-5 before:top-3 before:w-px before:bg-gradient-to-b before:from-emerald-400 before:via-sky-300 before:to-slate-200 dark:before:to-white/10 print:before:bg-slate-300">
      {items.map((item) => (
        <article key={`${item.title}-${item.period}`} className="relative pl-14">
          <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-2xl border-4 border-white bg-emerald-600 text-white shadow-lg shadow-emerald-700/20 dark:border-slate-900">
            {compact ? <GraduationCap className="h-5 w-5" /> : <BriefcaseBusiness className="h-5 w-5" />}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-slate-950 print:border-slate-200 print:bg-white">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-black leading-7 text-slate-950 dark:text-white print:text-base">{item.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.logo && (
                    <span className="flex h-10 w-16 items-center justify-center rounded-xl bg-white p-1 shadow-sm dark:bg-white/10 print:hidden">
                      <img src={item.logo} alt="" className="max-h-full max-w-full object-contain" />
                    </span>
                  )}
                  <span>{item.place}</span>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-emerald-700 shadow-sm dark:bg-white/10 dark:text-emerald-300 print:border print:border-slate-200 print:shadow-none">
                <CalendarDays className="h-4 w-4" />
                {item.period}
              </span>
            </div>

            {item.description && (
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 print:text-sm print:leading-6">
                {item.description}
              </p>
            )}

            {item.duties && (
              <ul className="mt-5 grid gap-3">
                {item.duties.map((duty) => (
                  <li key={duty} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600 dark:text-emerald-300" />
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

function LearningPanel({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: LucideIcon
  items: LearningItem[]
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-200">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={`${item.title}-${item.date}`} className="rounded-2xl bg-stone-50 p-4 dark:bg-slate-900">
            <p className="font-black leading-6 text-slate-950 dark:text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.organizer}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-white px-3 py-1.5 dark:bg-white/10">{item.location}</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

function QuoteMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
      <Search className="h-6 w-6" />
    </div>
  )
}
