import React from 'react';

const clientLogos = [
  "/lovable-uploads/9dc6c40d-1de0-4fef-b3f2-518f309a2a36.png", // The Takshilah Global School
  "/lovable-uploads/3c550689-0f24-40c2-a7f0-14bbbfd01667.png", // Pixel'R
  "/lovable-uploads/f31f2d3c-36a0-465e-ab27-4ee7e73ece7c.png", // PS Endeavours
  "/lovable-uploads/c28f3bd7-f544-4f0c-b5c0-214405398553.png", // Pixel - R (replacing Agro Life)
];

const ClientLogos = () => {
  const LogoList = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
    <ul className="flex items-center justify-center flex-shrink-0 animate-scroll-left group-hover:[animation-play-state:paused]" aria-hidden={ariaHidden}>
      {clientLogos.map((logo, index) => (
        <li key={index} className="w-64 mx-12 flex items-center justify-center">
          <img
            src={logo}
            alt="Client logo"
            className="max-h-32 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
