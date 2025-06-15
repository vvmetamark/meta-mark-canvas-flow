
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'testimonials', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 100 && rect.bottom >= 100;
          if (isVisible) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-vv-white">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <VideoSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="work">
          <WorkSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Toaster richColors />
    </div>
  );
};

export default Index;
