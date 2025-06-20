
import React from 'react';
import ClientLogos from './ClientLogos';

const VideoSection = () => {
  return (
    <div className="py-20 bg-vv-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            ABOUT <span className="text-vv-orange scratch-underline">VV METAMARK</span>
          </h2>
          <p className="text-lg text-vv-navy/70 max-w-3xl mx-auto leading-relaxed">
            We are a creative agency that believes in the power of visual storytelling. 
            Our team combines strategic thinking with artistic vision to create memorable 
            brand experiences that connect with audiences and drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/9b8a2c68-ad80-47be-82f9-1973e62097c8.png"
                alt="VV Metamark Creative Process"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-vv-orange rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-vv-blue rounded-full opacity-60"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="bg-vv-vision-bg p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-vv-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">👁️</span>
                Our Vision
              </h3>
              <p className="text-vv-navy/80 leading-relaxed">
                To be the leading creative partner for brands looking to make a lasting impact. 
                We envision a world where every brand has a unique voice and visual identity 
                that resonates authentically with their audience.
              </p>
            </div>

            <div className="bg-vv-mission-bg p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-vv-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Our Mission
              </h3>
              <p className="text-vv-navy/80 leading-relaxed">
                We transform ideas into compelling visual narratives. Through innovative design, 
                strategic thinking, and collaborative partnerships, we help brands tell their 
                stories in ways that inspire, engage, and convert.
              </p>
            </div>
          </div>
        </div>

        <ClientLogos />
      </div>
    </div>
  );
};

export default VideoSection;
