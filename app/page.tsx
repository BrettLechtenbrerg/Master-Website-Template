import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section with Aurora Background */}
      <Hero />

      {/* Features / Services Grid */}
      <Features />

      {/* Upcoming Events Section */}
      <Events />

      {/* Member Testimonials Carousel */}
      <Testimonials />

      {/* Contact Form with GHL Integration */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
