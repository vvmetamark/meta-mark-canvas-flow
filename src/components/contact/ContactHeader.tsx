
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
        src="/lovable-uploads/4cd593ba-a6c9-4a0a-8957-f3f768a75d11.png" 
        alt="Scratch underline" 
        className="h-2 w-24" 
        style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(200deg)' }}
      />
    </div>
  </div>
);

export default ContactHeader;
