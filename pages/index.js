import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import WorksSection from '../components/WorksSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
