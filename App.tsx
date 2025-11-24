
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import PricingSection from './PricingSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Chatbot from './Chatbot';
import QuoteModal from './QuoteModal';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CookieConsent from './CookieConsent';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    services: servicesRef,
    pricing: pricingRef,
    about: aboutRef,
    contact: contactRef,
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // when 40% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = Object.values(sectionRefs).map(ref => ref.current).filter(el => el);
    
    sections.forEach(sec => observer.observe(sec!));

    return () => {
      sections.forEach(sec => observer.unobserve(sec!));
    };
  }, []);

  const scrollToSection = useCallback((section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative">
      <Header onNavigate={scrollToSection} onQuoteClick={toggleModal} activeSection={activeSection} />
      <main>
        <div ref={homeRef} id="home">
          <Hero onQuoteClick={toggleModal} />
        </div>
        <ServicesSection ref={servicesRef as React.Ref<HTMLDivElement>} onQuoteClick={toggleModal} />
        <WhyChooseUs />
        <Testimonials />
        <div ref={pricingRef} id="pricing">
          <PricingSection onQuoteClick={toggleModal} />
        </div>
        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
      <Chatbot onQuoteClick={toggleModal} />
      <CookieConsent />
      {isModalOpen && <QuoteModal onClose={toggleModal} />}
    </div>
  );
};

export default App;