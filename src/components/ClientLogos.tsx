import React from 'react';

const clientLogos = [
  "/lovable-uploads/ecca6760-aab2-4cab-bb05-33540c04d774.png", // Takshilah Global School
  "/lovable-uploads/f0aa6544-d42a-4e73-90f2-2e292669660e.png", // Two Dots
  "/lovable-uploads/dbf64354-0941-40ab-a3e9-3d0e507ce0de.png", // Pixel - R
  "/lovable-uploads/cc7a7f23-7e7e-4896-becd-354e2cc64e82.png", // PS Endeavours
  "/lovable-uploads/c1f5e656-172e-48a8-b834-6f8c85c99bd0.png", // Innovate Inc.
];

const ClientLogos = () => {
  const LogoList = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
    <ul className="flex items-center justify-center flex-shrink-0 animate-scroll-left group-hover:[animation-play-state:paused]" aria-hidden={ariaHidden}>
      {clientLogos.map((logo, index) => (
        <li key={index} className="w-48 mx-8 flex items-center justify-center">
          <img
            src={logo}
            alt="Client logo"
            className="max-h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mt-24 w-full">
      <h3 className="text-center text-xl font-semibold text-vv-navy/80 mb-12">
        TRUSTED BY BRANDS WORLDWIDE
      </h3>
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden group"
        style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
      >
        <LogoList />
        <LogoList aria-hidden={true} />
      </div>
    </div>
  );
};

export default ClientLogos;
