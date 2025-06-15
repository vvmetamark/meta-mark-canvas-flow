
import React from 'react';

const clientLogos = [
  "/lovable-uploads/9dc6c40d-1de0-4fef-b3f2-518f309a2a36.png", // The Takshilah Global School
  "/lovable-uploads/2d8cf4bc-ff6c-4dd2-93a2-ef96cc226045.png", // Two Dots
  "/lovable-uploads/3c550689-0f24-40c2-a7f0-14bbbfd01667.png", // Pixel'R
  "/lovable-uploads/f31f2d3c-36a0-465e-ab27-4ee7e73ece7c.png", // PS Endeavours
  "/lovable-uploads/9c10b3d5-157b-4c31-86fd-6b8c3be866cb.png", // Innovation
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
