
import React from 'react';

const clientLogos = [
  "/lovable-uploads/3f546713-43c7-4bc6-b4be-76224b6079af.png",
  "/lovable-uploads/42555497-872f-4728-b2c4-28b9729298ff.png",
  "/lovable-uploads/862e01ec-a5bb-4a3d-badf-45bd3a2bed0d.png",
  "/lovable-uploads/97bd75ef-e661-40c2-98b5-6e415cbb991f.png",
  "/lovable-uploads/9b8a2c68-ad80-47be-82f9-1973e62097c8.png",
  "/lovable-uploads/ded22791-3e09-4796-bb83-a6a66a798438.png",
  "/lovable-uploads/a3c6c285-451b-45bd-b9ba-084902d58dd1.png",
  "/lovable-uploads/a603732d-da6e-4cc4-983b-01c0ac986c53.png",
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
