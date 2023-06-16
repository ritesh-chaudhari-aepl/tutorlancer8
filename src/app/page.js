import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import Download from '@/pages/Download'
import Features from '@/pages/Features'
import Footer from '@/pages/Footer'
import HeroSection from '@/pages/HeroSection'
import Instructor from '@/pages/Instructor'
import Pricing from '@/pages/Pricing'
import Services from '@/pages/Services'
import Sessions from '@/pages/Sessions'
import Testimonials from '@/pages/Testimonials'
import Header from '@/pages/header'


export default function Page() {
  return (
    <>
      <Header/>
      <div className='mt-34 lg:mt-34 md:mt-32'>
        <HeroSection/>
        <Features />
        <Services />
        <Sessions />
        <AboutUs />
        <Pricing />
        <Instructor />
        <Testimonials />
        <Contact />
        <Download />
        <Footer />
      </div>
    </>
  )
}
