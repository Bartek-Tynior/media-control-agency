import SEO from '@/components/SEO/SEO'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <>
      <SEO title="Home" description="" />
      <div className='page_wrapper min-h-screen'>
        <header className='pt-4 px-6 w-full'>
          <Navbar />
        </header>
        <main className='min-h-full'>
          <Hero/>
        </main>
      </div>
    </>
  )
}
