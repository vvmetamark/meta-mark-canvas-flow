
import { ArrowDown } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/371883993.sd.mp4?s=5a1c3d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Fallback Image for Mobile/Unsupported Browsers */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81)' }}
        />
        
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vv-white mb-6">
            We Believe in the Power of
            <span className="text-vv-orange block mt-2">Creative Storytelling</span>
          </h2>
          <p className="text-lg md:text-xl text-vv-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every brand has a unique story waiting to be told. Through innovative design, strategic thinking, and cutting-edge technology, we help brands connect with their audiences in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-vv-orange hover:bg-vv-orange-dark text-vv-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </button>
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-vv-white text-vv-white hover:bg-vv-white hover:text-vv-navy px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-vv-white hover:text-vv-orange transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
