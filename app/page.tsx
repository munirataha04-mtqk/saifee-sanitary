import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
        <PromoBanner />
        <AboutSection />
        <ProjectsSection />
        <WhyChooseUs />
        <Testimonials />
        <WhatsAppBanner />
      </main>
      <Footer />
    </>
  );
}