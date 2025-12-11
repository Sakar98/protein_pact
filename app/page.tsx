import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-emerald-500 selection:text-white">
      <NavBar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <FeatureSection />
      </div>
      <div id="contact">
        <LeadForm />
      </div>
      <Footer />
    </div>
  );
}
