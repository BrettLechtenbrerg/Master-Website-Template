import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DirectorySection from '@/components/DirectorySection';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Hero Section with Aurora Background */}
      <Hero />

      {/* Features / Services Grid */}
      <Features />

      {/* Dedicated Directory Section */}
      <DirectorySection />

      {/* Upcoming Events Section */}
      <Events />

      {/* Member Testimonials Carousel */}
      <Testimonials />

      {/* Contact Form with GHL Integration */}
      <ContactForm />

    </>
  );
}
