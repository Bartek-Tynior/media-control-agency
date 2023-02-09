import SEO from '@/components/SEO/SEO'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials';


export default function Home() {
  return (
    <>
      <SEO title="Home" description="" />
      <Hero/>
      <Services/>
      <Testimonials/>
    </>
  )
}
