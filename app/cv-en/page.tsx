'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

type PublicationItem = {
  content: ReactNode
  link?: string
}

type PublicationGroup = {
  category: string
  items: PublicationItem[]
}

type TrainingItem = {
  title: string
  organizer: string
  location: string
  date: string
}

type WorkshopItem = {
  title: string
  organizer: string
  location: string
  date: string
}

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

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

    // Dark mode functionality
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [darkMode])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const publications: PublicationGroup[] = [
    {
      category: 'Peer-Review Articles',
      items: [
        {
          content: (
            <>
              Kertiou, Brahim. "Promoting Environmental Awareness and Education in Sharjah Public Libraries: A Data-Driven Analysis of Community-Oriented Programs (2018–2024)." <strong><em>Iqra'a: Sharjah Libraries &amp; Information Journal</em></strong>, 21: 2025, 5–35.
            </>
          )
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Kuzey Afrika Ülkelerinin Bilim ve Teknoloji Alanindaki Araştirma Performanslarinin Bilimmetrik Bir Analizi." <strong>Bilgi ve Belge Araştırmaları</strong>, 12: 2019, 80-100.
            </>
          ),
          link: 'https://dergipark.org.tr/tr/download/article-file/907398'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Informal Electronic Resources through Institutional Digital Repositories: Dissemination, Usage Measurement, and Visibility." <strong><em>QScience Proceedings</em></strong>, The Special Libraries Association-Arabian Gulf Chapter 20th Annual Conference, Mar 2014, Volume 2014, 5. <strong>Hamad bin Khalifa University Press (HBKU Press)</strong>. DOI: 10.5339/qproc.2014.gsla.5.
            </>
          ),
          link: 'https://www.qscience.com/docserver/fulltext/qproc/2014/1/qproc.2014.gsla.5.pdf?expires=1762614586&id=id&accname=guest&checksum=9FF3CFF5F8FD9FEC21F0FCB6ED95E049'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Academic Libraries and Institutional Repositories: New Tasks and Roles." <strong><em>RIST</em></strong>, Vol. 19, No. 01, 2011, pp. 120-146.
            </>
          ),
          link: 'http://www.webreview.dz/IMG/pdf/06ar-rist19-1.pdf'
        }
      ]
    },
    {
      category: 'Book Chapters',
      items: [
        {
          content: (
            <>
              Kertiou, Brahim. "Research Productivity and Scientific Capabilities in the Member States of the Organization of Islamic Cooperation." In <strong><em>Islam and International Relations: Contemporary Views and Issues</em></strong>, pp. 401-426. <strong>Al-Mujaddid Center for Research and Studies</strong>, Istanbul, 2024.
            </>
          ),
          link: 'https://drive.google.com/file/d/1VF9Z-ie9kuX70mULQcf9Vv72a1UVcGXn/view?usp=sharing'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Institutional Digital Repositories and Dissemination of Unofficial Electronic Resources: A Survey of Universities in the Arab Region" (Chapter 6). In <strong><em>Universities and Scientific Research in the Arab World</em></strong>, <strong>Arab Center for Research and Policy Studies</strong>, Doha, Qatar, 2017.
            </>
          ),
          link: 'https://drive.google.com/file/d/11wg1lR2OiWxOKe3s7UcI-KTlJvz9JL_j/view?usp=sharing'
        }
      ]
    },
    {
      category: 'Conference Proceedings',
      items: [
        {
          content: (
            <>
              Kertiou, Brahim. "The Role of Digital Libraries in Activating and Developing Arab Heritage and Literature: Initiatives and Leading Arab and International Experiences (دور المكتبات الرقمية في تفعيل وتطوير التراث والأدب العربي: مبادرات وتجارب عربية وعالمية رائدة)." In <strong><em>Proceedings of the 7th International Conference on the Arabic Language: The Role of Arabic Language in Civilizational Building</em></strong>, <strong>Association of Arabic Language Teachers and Yogyakarta University</strong>, Yogyakarta, Indonesia, 2011.
            </>
          ),
          link: 'https://drive.google.com/file/d/11tlOrMNOUJL6qATZ5k9qSKmQEI7M5g_1/view?usp=drive_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim. (2022, October 29–31). Altmetrics in Scientific Research: Towards Alternative Measures of Scholarly Impact. Paper presented at <strong>the Third Arab Open Access Symposium</strong>. Symposium organized by the Doha Institute for Graduate Studies and the Arab Group for Open Access (AGOA), Doha, Qatar.
            </>
          )
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Creative Commons Licensing and its Strategic Impact on National Libraries." <strong>The First IFLA Regional Conference in the Arab Region</strong>, June 2013, organized by IFLA and Qatari Ministry of Culture, Doha, Qatar.
            </>
          ),
          link: 'https://drive.google.com/file/d/1RSH4zqBH4LvQkRuavjlhlF33UXBdC81I/view?usp=drive_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "Millennium Librarians and the Future of the Librarianship Profession in the Arab World (مكتبيي جيل الألفية و مستقبل مهنة المكتبات في العالم العربي)." <strong><em>Proceedings of the 24th Conference of the Arab Federation for Libraries and Information (AFLI)</em></strong>, pp. 398-415. <strong>Arab Federation for Libraries and Information</strong>, November 30, 2013, Riyadh, Saudi Arabia.
            </>
          ),
          link: 'https://search.emarefa.net/detail/BIM-373309'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "The Impact of Web 2.0 on Scientific Communication and Knowledge Exchange Among Researchers (انعكاسات الويب 2.0 على الاتصال العلمي وتبادل المعرفة بين الباحثين)." In <strong><em>Proceedings of the International Conference on Digital Information Technology: Modern Trends in Information Technology</em></strong>, <strong>Zarqa University</strong> in collaboration with <strong>Jalwan Academy for Training and Studies</strong>, Amman, Jordan, 2012.
            </>
          ),
          link: 'https://drive.google.com/file/d/1y2XIcZg0d4UVM7rvxQtBlq_TjPWoHxDK/view?usp=drive_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim. "The Impact of the Open Access Movement on Arab Medical Libraries (تأثير حركة الوصول الحر على المكتبات الطبية العربية)." In <strong><em>Proceedings of the 22nd Conference: Systems and Information Services in Arab Information Institutions: Reality, Challenges, and Aspirations</em></strong>, pp. 811-844. <strong>Arab Federation for Libraries and Information</strong>, <strong>Ministry of Culture</strong>, <strong>Ministry of Electricity and Dams</strong>, and the <strong>Sudanese Library and Information Association</strong>, Khartoum, 2011.
            </>
          ),
          link: 'https://drive.google.com/file/d/1VF9Z-ie9kuX70mULQcf9Vv72a1UVcGXn/view?usp=drive_link'
        }
      ]
    },
    {
      category: 'Translations',
      items: [
        {
          content: (
            <>
              Kertiou, Brahim (translator), and Ismail al-Faruqi. "نهضة الأمة تبدأ من جامعاتها". Originally titled <a href="https://www.oasiscenter.eu/en/the-umma-rebirth-begins-in-universities" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-semibold">"The Umma's Rebirth Begins in Universities."</a> <strong><em>Oasis</em></strong>, June 2020. Retrieved from Oasis Center.
            </>
          ),
          link: 'https://drive.google.com/file/d/1Df7kkPFs6DaUBtsdcCGPQo48x2WVokYW/view'
        },
        {
          content: (
            <>
              Kertiou, Brahim (translator), and Mujahidul Islam. "الأخلاق الإسلامية وموقفها من صعود التكنولوجيا الرقمية." Originally titled <a href="https://themaydan.com/2021/07/islamic-ethics-and-the-rise-of-digital-technology/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-semibold">"Islamic Ethics and the Rise of Digital Technology."</a>
            </>
          ),
          link: 'https://drive.google.com/file/d/1Y5y2JCkYgUpaHIng2-oQF40ZcoTD2Tsn/view?usp=share_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim (translator). "الذكاء الاصطناعي والإسلام." Originally titled <a href="https://www.l-islam.com/index.php/reflexions/intelligence-artificiel-et-islam" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-semibold">"Intelligence Artificielle et Islam."</a>
            </>
          ),
          link: 'https://drive.google.com/file/d/1VcropnKfbCrG581GZGssO9dZnaTepJDg/view?usp=share_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim (translator), and Frédéric Gauzy. "الأهمية المتزايدة للبيانات المفتوحة في المنطقة العربية" Originally titled <a href="https://www.opendatasoft.com/en/blog/the-growing-importance-of-open-data-in-the-middle-east/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-semibold">"The growing importance of open data in the Arab Region."</a> <strong><em>Opendatasoft</em></strong>, 2022.
            </>
          ),
          link: 'https://drive.google.com/file/d/1XpgAZCRwocA6FKmMaUFugk6odX2Rly2d/view?usp=drive_link'
        },
        {
          content: (
            <>
              Kertiou, Brahim (translator), and Hafsa Nur Aslanoğlu. "وسائل التواصل الاجتماعي: المقاربة الجديدة للسيادة" Originally titled <a href="https://ilke.org.tr/egemenligin-yeni-gorunumu-sosyal-medya/2717" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-semibold">"Egemenliğin Yeni Görünümü: Sosyal Medya."</a> <strong><em>ilke</em></strong>, 2021.
            </>
          ),
          link: 'https://drive.google.com/file/d/1-wSuykiIDrN7K-z71-XuBYfBKGLWULwx/view?usp=drive_link'
        }
      ]
    }
  ]

  const trainingItems: TrainingItem[] = [
    {
      title: 'Participant in the training program on Introduction to Information Security',
      organizer: 'BARQ For Policies and Consultations',
      location: 'Istanbul, Turkey',
      date: 'November 11–15, 2019'
    },
    {
      title: 'Participant in the training course on the ProQuest scientific research platform',
      organizer: 'ProQuest Turkey Branch',
      location: 'Istanbul, Turkey',
      date: 'September 2017'
    },
    {
      title: 'Participant in a training workshop on digital libraries and electronic document management',
      organizer: 'National School of Administration & University of Strasbourg',
      location: 'Strasbourg, France',
      date: 'April 1–7, 2013'
    },
    {
      title: 'Participant in the workshop on electronic management of documents and workflow',
      organizer: 'Arab Federation for Libraries and Information (AFLI) & University of Constantine',
      location: 'Constantine, Algeria',
      date: 'June 25–28, 2012'
    },
    {
      title: 'Participant in the Second Training Course on Using the SNDL Portal for Accessing Scientific Databases',
      organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Jijel',
      location: 'Jijel, Algeria',
      date: 'June 18–21, 2012'
    },
    {
      title: 'Participant in the First Training Course on Using the SNDL Portal for Accessing Scientific Databases',
      organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Batna',
      location: 'Batna, Algeria',
      date: 'January 22–24, 2012'
    },
    {
      title: 'Participant in the SYNGEB V2 Training Course on the Algerian Integrated Library Management System',
      organizer: 'CERIST (Research Center in Scientific and Technical Information) at the University of Oum El Bouaghi',
      location: 'Oum El Bouaghi, Algeria',
      date: 'March 14–17, 2010'
    }
  ]

  const workshops: WorkshopItem[] = [
    {
      title: 'Participant in the Third Arab Forum for Open Access',
      organizer: 'Doha Institute for Graduate Studies & Arab Community of Open Access Group (ACOA)',
      location: 'Doha, Qatar',
      date: 'October 29–31, 2022'
    },
    {
      title: 'Participant in the Spring School of Archives and Ottoman History',
      organizer: 'Turkish Grants Authority (YTB) & Ottoman Archives Directorate',
      location: 'Istanbul, Turkey',
      date: 'March – June 2018'
    },
    {
      title: 'Participant in a workshop on bibliometric measurements',
      organizer: 'Library of Istanbul Technical University',
      location: 'Istanbul, Turkey',
      date: 'October 22–23, 2018'
    },
    {
      title: 'Participant in the SLA-AGC 20th Annual Conference, "Enhancing in Digital Knowledge Society\'s Information Needs"',
      organizer: 'Specialized Libraries Association (Arabian Gulf Branch) & Qatar University',
      location: 'Doha, Qatar',
      date: 'March 25–27, 2014'
    },
    {
      title: 'Participant in the AFLI 24th Conference "Profession and Studies of Libraries and Information Reality and Trends"',
      organizer: 'Arab Federation for Libraries and Information (AFLI) & Taibah University',
      location: 'Medina, Saudi Arabia',
      date: 'November 26–27, 2013'
    },
    {
      title: 'Participant in the First Regional International Federation of Library Associations (IFLA) Conference in the Arab Region',
      organizer: 'IFLA, AFLI & Public Libraries Department of Qatar Ministry of Culture, Arts, and Heritage',
      location: 'Doha, Qatar',
      date: 'June 11–12, 2013'
    },
    {
      title: 'Participant in the International Conference on Digital Information Technology: Recent Trends in Information Technology',
      organizer: 'Zarqa University & Galwan Training Academy',
      location: 'Amman, Jordan',
      date: 'October 9–11, 2012'
    },
    {
      title: 'Participant in the First National Forum on Archives and National Memory: Achievements and Aspirations',
      organizer: "Research Laboratory 'Algeria's Way Toward the Information Society' & Algerian National Archives",
      location: 'Constantine, Algeria',
      date: 'June 10–11, 2012'
    },
    {
      title: 'Participant in the International Conference on Digital Information Technology, Modern Trends in Information Technology',
      organizer: 'Tunisian Association of Management & ALECSO',
      location: 'Hammamet, Tunisia',
      date: 'May 7–10, 2012'
    },
    {
      title: 'Participant in the 7th International Conference on the Arabic Language and its Role in the Civilization Building Process',
      organizer: 'Union of Arabic Language Teachers & Universitas Gadjah Mada',
      location: 'Yogyakarta, Indonesia',
      date: 'July 14–17, 2011'
    }
  ]

  const awards = [
    {
      title: "Sharjah Libraries' Literature Award",
      issuer: 'Sharjah Book Authority',
      year: '2024',
      description: 'Recognized for excellence in library literature.',
      logo: 'http://splawards.xsstudios.com/assets/img/awards.png'
    },
    {
      title: 'Ibn Khaldun Scholarship',
      issuer: 'Türkiye Scholarships Program',
      year: '2015',
      description: 'Awarded for doctoral studies in Turkey.',
      logo: 'https://www.turkiyeburslari.gov.tr/YTB/images/logo/tb-logo.png'
    },
    {
      title: 'European Commission Training Scholarship',
      issuer: 'European Commission',
      year: '2013',
      description: 'Supporting advanced training at the University of Strasbourg on digital library development and management.',
      logo: 'https://my.aacsb.edu/Portals/0/assets/images/contact/em-strasbourg-logo.png'
    },
    {
      title: 'AFLI New Generation Award',
      issuer: 'Arab Federation for Libraries and Information',
      year: '2010',
      description: 'Honored for the most innovative Arab youth project in libraries and information on the internet.',
      logo: 'https://pbs.twimg.com/profile_images/1590425544675495938/cEbigU4K_400x400.jpg'
    }
  ]

  const memberships = [
    {
      organization: 'ARID International Journal of Informetrics and Scholarly Communication (AIJISC)',
      role: 'Editorial Board Member',
      note: 'ISSN: 2708-7352'
    }
  ]

  const languages = [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'French', proficiency: 'Proficient' },
    { name: 'English', proficiency: 'Proficient' },
    { name: 'Turkish', proficiency: 'Proficient' }
  ]

  const projects = [
    {
      title: 'Al-Mojaded Platform for Electronic Archiving (e-Archive)',
      description: 'Integrated web-based system for archiving research, tracking tasks, and managing correspondence.',
      points: [
        'Ensures secure storage, preservation, and indexing of documents with centralized access.',
        'Automates reporting, backup routines, and user permission management.'
      ],
      link: null
    },
    {
      title: 'Al-Mojaded Platform for Research and Studies',
      description: 'Regional platform consolidating intellectual output across Arab research centers.',
      points: [
        'Focuses on political science, Islamic political thought, and Sharia politics.',
        'Provides curated resources and services for academic institutions and researchers.'
      ],
      link: null
    },
    {
      title: 'Development of Al-Mojaded Center Website',
      description: 'Full redesign and implementation using WordPress to improve discoverability and user experience.',
      points: [
        'Implemented seamless search and navigation for rapid content retrieval.',
        'Integrated analytics and SEO enhancements for continuous performance monitoring.'
      ],
      link: null
    },
    {
      title: 'PaperMetrix Platform',
      description: 'Ph.D.-driven platform enhancing research evaluation and engagement for scholars and readers.',
      points: [
        'Monitors feedback loops and transparency in scholarly reviewing.',
        'Extends Mendeley functionality with rating and review workflows using the Mendeley API.'
      ],
      link: null
    }
  ]

  const skills = [
    {
      title: 'Digital Content Management & Website Supervision',
      points: [
        'Web administration, performance monitoring, and CMS operations (WordPress, Laravel CMS, PHPMaker).',
        'Editorial workflows ensuring linguistic quality, metadata completeness, and consistency.',
        'SEO strategy implementation leveraging Google Search Console and SEMrush.',
        'UX and accessibility optimization aligned with WCAG standards.'
      ]
    },
    {
      title: 'Digital Humanities & Analytical Tools',
      points: [
        'Text and data analysis with Python (pandas, NumPy, NLTK) for thematic and semantic insights.',
        'Social network and visualization techniques using Gephi, matplotlib, and D3.js.',
        'Entity and relation extraction pipelines for structured digital archives.'
      ]
    },
    {
      title: 'Knowledge Architecture & Repository Systems',
      points: [
        'Metadata modeling with MARC21, Dublin Core, and Schema.org standards.',
        'Database design and management (MySQL, PostgreSQL, Neo4j) for scalable knowledge systems.',
        'Digital repository administration with DSpace and OAI-PMH workflows.'
      ]
    },
    {
      title: 'Technical Integration & Performance Optimization',
      points: [
        'Server security, SSL configuration, and proactive maintenance for data integrity.',
        'Performance analytics using Google Analytics, PageSpeed Insights, and server log auditing.',
        'Cross-team coordination aligning editorial, technical, and communication objectives.'
      ]
    }
  ]

  const references = [
    {
      name: 'Prof. Dr. İshak KESKİN',
      role: 'Department of Records Archives Management',
      location: 'Istanbul University',
      email: 'ishak.keskin@istanbul.edu.tr'
    },
    {
      name: 'Assoc. Prof. Dr. Moazzam Naseer',
      role: 'Riphah Institute of Media Sciences',
      location: 'Riphah International University, Islamabad, Pakistan',
      email: 'moazzam.naseer@riphah.edu.pk'
    },
    {
      name: 'Prof. Dr. Aknouch Nabil',
      role: 'Department of Records Archives Management',
      location: 'University of Constantine 2, Algeria',
      email: 'nabil.aknouche@univ-constantine2.dz'
    }
  ]

  return (
    <div className="direction-ltr text-left">
      {/* Header */}
      <Header redirectToHome />

      {/* Dark Mode Toggle Button */}
      <button 
        className="fixed top-32 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-none cursor-pointer z-50 shadow-lg shadow-emerald-500/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/60 flex items-center justify-center"
        onClick={toggleDarkMode}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
      </button>

      {/* Scroll to Top Button */}
      <button 
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-none cursor-pointer z-50 shadow-lg shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center ${
          showScrollTop 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-5'
        }`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <i className="fas fa-chevron-up text-lg"></i>
      </button>

      {/* CV Section */}
      <section id="cv" className="bg-gray-50 dark:bg-gray-900 py-16 mt-[90px]">
        <div className="container-custom">
          <div className="w-full">
            {/* CV Header */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-10 rounded-xl shadow-xl mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 font-serif">Brahim KERTIOU</h1>
              <h2 className="text-xl md:text-2xl opacity-95 mb-8">Ph.D. Library & Information Science</h2>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-lg opacity-90"></i>
                  <span>(+90) 531 857 9095</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-lg opacity-90"></i>
                  <a href="mailto:kertiou.brahim@gmail.com" className="text-white hover:opacity-80 transition-opacity">
                    kertiou.brahim@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-lg opacity-90"></i>
                  <span>Istanbul, Turkey</span>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { number: '15+', label: 'Years Experience', icon: 'fa-graduation-cap' },
                { number: '20+', label: 'Publications', icon: 'fa-book' },
                { number: '4', label: 'Awards', icon: 'fa-trophy' },
                { number: '4', label: 'Languages', icon: 'fa-language' }
              ].map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${stat.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-emerald-500 font-serif">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Summary */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-user text-xl"></i>
                <span>Professional Summary</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Accomplished Ph.D. in Library & Information Science with over 15 years of expertise in digital humanities, scholarly communication, and information systems. Currently serving as Website and Research Platform Supervisor at Al-Mojaded Center for Research & Studies in Istanbul, where I lead digital transformation initiatives and manage electronic archiving systems. My research focuses on alternative metrics for evaluating scientific outputs, digital repositories, and open access initiatives. Published author with 20+ peer-reviewed articles, book chapters, and conference proceedings. Recipient of multiple prestigious awards including the Sharjah Libraries' Literature Award (2024) and Ibn Khaldun Scholarship. Proficient in multiple languages and experienced in computational analysis, data visualization, and digital platform development.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-graduation-cap text-xl"></i>
                <span>Education</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    degree: "Ph.D. in Information & Document Management",
                    period: "Sep 2016 – May 2023",
                    university: "Istanbul University (Turkey)",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg/1200px-%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg.png",
                    description: "Dissertation: Alternative Metrics for Evaluating Scientific Outputs: A Model for An Open Evaluation Platform"
                  },
                  {
                    degree: "MSc in Library & Information Science",
                    period: "Sep 2008 – Jun 2010",
                    university: "Constantine 2 University (Algeria)",
                    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png",
                    description: "Thesis: Digital Repositories and Open Access: A Project to Build a Digital Repository for the Field of Library and Information Science"
                  },
                  {
                    degree: "BSc in Library & Information Science",
                    period: "Sep 2005 – Jun 2008",
                    university: "Constantine 2 University (Algeria)",
                    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png",
                    description: "Honors: Summa Cum Laude"
                  }
                ].map((edu, index) => (
                  <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-600 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex-1">{edu.degree}</h4>
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-3 text-gray-600 dark:text-gray-300 italic">
                      <img src={edu.logo} alt="University Logo" className="w-16 h-10 object-contain filter drop-shadow" />
                      <span>{edu.university}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">{edu.description.split(':')[0]}:</strong>
                      {edu.description.split(':').slice(1).join(':')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-briefcase text-xl"></i>
                <span>Work Experience</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Website and Research Platform Supervisor",
                    period: "Sep 2020 – Present",
                    company: "Al-Mojaded Center for Research & Studies (Istanbul, Turkey)",
                    logo: "/img/moj.png",
                    duties: [
                      "Supervised the development, management, and maintenance of the center's official website, ensuring continuous functionality, security, and adherence to institutional identity and design standards.",
                      "Oversaw the electronic archiving system, including data organization, digital preservation workflows, and access control policies to ensure long-term sustainability and usability of research outputs.",
                      "Managed content publishing and editorial workflow, coordinating between researchers, editors, and translators to maintain the accuracy, consistency, and linguistic quality of published materials.",
                      "Led the creation of the Research & Studies Platform, an integrated digital repository showcasing research outputs from Arab think tanks, fostering collaboration and open access to regional knowledge.",
                      "Implemented SEO and UX improvements to enhance discoverability, user engagement, and accessibility across devices.",
                      "Prepared analytical and progress reports summarizing digital performance, visitor statistics, and platform usage metrics to guide strategic decisions.",
                      "Collaborated with media and marketing teams to design and execute digital communication plans across social media platforms, amplifying the visibility of the center's research and activities."
                    ]
                  },
                  {
                    title: "Scholarly Communication & Reference Librarian",
                    period: "Dec 2009 – Oct 2014",
                    company: "Larbi Ben M'hidi University (Algeria)",
                    logo: "https://www.univ-oeb.dz/wp-content/uploads/2022/02/cropped-logo-2-1.png",
                    duties: [
                      "Provided reference services and research consultations to students, faculty, and researchers.",
                      "Developed and delivered instructional sessions on information literacy, research strategies, and citation management.",
                      "Supported scholarly communication by staying up to date with trends and best practices, such as open access, copyright, and intellectual property issues.",
                      "Collaborated with faculty to integrate library resources into course content and curricula.",
                      "Participated in collection development and the evaluation of library resources.",
                      "Liaised with other library departments and campus units to support interdisciplinary research and collaboration.",
                      "Engaged in library outreach efforts and promoted library services and resources through various channels.",
                      "Pursued professional development by attending conferences, workshops, and webinars to stay current with trends and best practices in the field."
                    ]
                  },
                  {
                    title: "Adjunct Instructor",
                    period: "Sep 2012 – Jun 2013",
                    company: "Constantine 2 University (Algeria)",
                    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo-04.png",
                    duties: [
                      "Directed instruction on electronic archiving, highlighting best practices for organizing, preserving, and providing access to digital collections.",
                      "Delivered coursework on database design covering data modeling, normalization, indexing, and practical database management systems.",
                      "Mentored students in developing electronic resources such as e-books, digital collections, and online databases with a focus on usability and accessibility.",
                      "Developed comprehensive course materials, presentations, and assignments to elevate student engagement and learning outcomes.",
                      "Conducted lectures, facilitated discussions, and led hands-on exercises to reinforce theoretical knowledge with practical application.",
                      "Provided individualized academic support, addressing student inquiries and offering constructive feedback throughout the term."
                    ]
                  }
                ].map((job, index) => (
                  <div key={index} className="pb-8 border-b border-gray-200 dark:border-gray-600 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex-1">{job.title}</h4>
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300 italic">
                      <img src={job.logo} alt="Company Logo" className="w-16 h-10 object-contain filter drop-shadow" />
                      <span>{job.company}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.duties.map((duty, dutyIndex) => (
                        <li key={dutyIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3">
                          <span className="text-emerald-500 font-bold mt-1 flex-shrink-0">▸</span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-book-open text-xl"></i>
                <span>Publications</span>
              </h3>

              <div className="space-y-8">
                {publications.map((group, index) => (
                  <div key={index}>
                    <h4 className="subsection-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">{group.category}</h4>
                    <ol className="publication-list list-none space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="relative flex items-start justify-between gap-4 pl-8">
                          <div className="flex-1 space-y-2 text-justify">
                            <div>{item.content}</div>
                            {/* Link moved to PDF icon */}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-emerald-500 flex-shrink-0 transition-transform hover:scale-105"
                              title="PDF"
                              aria-label="Open publication PDF"
                            >
                              <i className="fas fa-file-pdf text-3xl"></i>
                            </a>
                          ) : (
                            <span className="ml-2 text-emerald-500 flex-shrink-0" title="PDF">
                              <i className="fas fa-file-pdf text-3xl"></i>
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-chalkboard-teacher text-xl"></i>
                <span>Training Programs</span>
              </h3>

              <ul className="space-y-4">
                {trainingItems.map((trainingItem, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-3 border-b border-gray-200 dark:border-gray-600 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">{trainingItem.title}</span>
                      <span className="text-sm italic text-gray-600 dark:text-gray-400 block">{trainingItem.organizer}</span>
                    </div>
                    <div className="text-sm italic text-gray-600 dark:text-gray-400 flex items-center justify-center text-center w-full">
                      {trainingItem.location}
                    </div>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-300 flex items-center justify-end text-right">
                      {trainingItem.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-people-arrows text-xl"></i>
                <span>Workshops & Conferences</span>
              </h3>

              <ul className="space-y-4">
                {workshops.map((workshop, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-3 border-b border-gray-200 dark:border-gray-600 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">{workshop.title}</span>
                      <span className="text-sm italic text-gray-600 dark:text-gray-400 block">{workshop.organizer}</span>
                    </div>
                    <div className="text-sm italic text-gray-600 dark:text-gray-400 flex items-center justify-center text-center w-full">
                      {workshop.location}
                    </div>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-300 flex items-center justify-end text-right">
                      {workshop.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-trophy text-xl"></i>
                <span>Awards & Grants</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">{award.year}</span>
                      <i className="fas fa-medal text-emerald-500"></i>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{award.title}</h4>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{award.issuer}</p>
                        <p>{award.description}</p>
                      </div>
                      {award.logo && (
                        <div className="award-logo-wrapper">
                          <img
                            src={award.logo}
                            alt={`${award.title} Logo`}
                            className="award-logo"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Memberships & Languages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                  <i className="fas fa-users text-xl"></i>
                  <span>Memberships</span>
                </h3>

                <ul className="space-y-4">
                  {memberships.map((membership, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gray-900 dark:text-white block">{membership.role}</span>
                      <span className="text-sm italic text-gray-600 dark:text-gray-400">{membership.organization}</span>
                      {membership.note && (
                        <span className="text-sm text-gray-600 dark:text-gray-400 block">{membership.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                  <i className="fas fa-language text-xl"></i>
                  <span>Languages</span>
                </h3>

                <ul className="space-y-3">
                  {languages.map((language, index) => (
                    <li key={index} className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">{language.name}</span>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-300">{language.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-project-diagram text-xl"></i>
                <span>Projects Supervised</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-500 hover:text-emerald-600 text-sm font-semibold inline-flex items-center gap-1"
                        >
                          View Project
                          <i className="fas fa-external-link-alt text-xs"></i>
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{project.description}</p>
                    <ul className="space-y-2">
                      {project.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-emerald-500 font-bold mt-1 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-tools text-xl"></i>
                <span>Other Skills</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{skillGroup.title}</h4>
                    <ul className="space-y-2">
                      {skillGroup.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-emerald-500 font-bold mt-1 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-emerald-500 mb-6 pb-3 border-b-2 border-emerald-500 flex items-center gap-3">
                <i className="fas fa-address-book text-xl"></i>
                <span>References</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {references.map((reference, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm text-center space-y-2"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{reference.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{reference.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{reference.location}</p>
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-emerald-500 hover:text-emerald-600 text-sm font-semibold inline-flex items-center gap-2 justify-center"
                    >
                      <i className="fas fa-envelope text-xs"></i>
                      {reference.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Actions */}
            <div className="text-center mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/cv-en.html"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                  download=""
                >
                  <i className="fas fa-download"></i>
                  Download CV
                </a>
                <button 
                  onClick={() => window.print()}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <i className="fas fa-print"></i>
                  Print CV
                </button>
                <a 
                  href="/"
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer showContactCTA={false} />
    </div>
  )
}