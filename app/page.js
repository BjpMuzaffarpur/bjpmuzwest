import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Organization from '@/components/Organization';
import Setup from '@/components/Setup';
import Gallery from '@/components/Gallery';
import OfficeBearers from '@/components/OfficeBearers';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <OfficeBearers />
      <News />
      <Footer />
    </main>
  );
}
