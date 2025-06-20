
import React from 'react';

const ContactHeader = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
      <span className="text-white">JUST</span> HOLLER.
    </h2>
    <h3 className="text-2xl md:text-3xl font-semibold text-vv-navy mb-8">
      WE'RE RIGHT HERE!
    </h3>
    <div className="flex justify-center">
      <img 
        src="/lovable-uploads/c72beb54-e7f5-44d6-aa5b-ea2c010609bc.png" 
        alt="Scratch underline" 
        className="w-24 h-3 object-contain"
        style={{ filter: 'brightness(0.2) contrast(2)' }}
      />
    </div>
  </div>
);

export default ContactHeader;
