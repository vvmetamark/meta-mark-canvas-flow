
import React from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import ContactMap from './contact/ContactMap';
import ContactFooter from './contact/ContactFooter';

const ContactSection = () => {
  return (
    <div className="py-20 bg-vv-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            JUST <span className="text-vv-orange scratch-scribble">HOLLER</span>
          </h2>
          <p className="text-lg text-vv-navy/70 max-w-2xl mx-auto">
            Ready to start your creative journey? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <ContactHeader />
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>
        
        <ContactMap />
        <ContactFooter />
      </div>
    </div>
  );
};

export default ContactSection;
