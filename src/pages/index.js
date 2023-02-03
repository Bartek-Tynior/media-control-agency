import SEO from '@/components/SEO/SEO'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import { useState, useEffect } from 'react';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <SEO title="Home" description="" />
      <Hero/>
      <Services/>
      <Testimonials/>
    </>
  )
}
