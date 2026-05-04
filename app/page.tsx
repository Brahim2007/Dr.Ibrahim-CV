import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import Slider from '@/components/Slider'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Clients from '@/components/Clients'

export default function Home() {
  return (
    <>
      <SocialSidebar />
      <Header />
      <Slider />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Clients />
      <Footer />
    </>
  )
}
