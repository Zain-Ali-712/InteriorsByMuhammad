// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExclusiveCollection from '@/components/ExclusiveCollection';
import SeasonalCollection from '@/components/SeasonalCollection';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="font-light">
      <Navbar />
      <Hero />
      <ExclusiveCollection /> 
      <SeasonalCollection/>
      <BestSellers />
      <Testimonials />
      <CTASection/>
      <Footer />
    </main>
  );
}