import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { HighlightPerformance } from '@/components/sections/HighlightPerformance';
import { FilmographySection } from '@/components/sections/FilmographySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { AwardsMarquee } from '@/components/sections/AwardsMarquee';
import { EditorialGallery } from '@/components/sections/EditorialGallery';

export default function Home() {
  return (
    <main className='relative bg-background min-h-screen'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightPerformance />
      <FilmographySection />
      <AwardsMarquee />
      <EditorialGallery />
      <Footer />
    </main>
  );
}
