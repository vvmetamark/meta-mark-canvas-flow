
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Digital Marketing",
      subtitle: "That Converts",
      description: "Strategic digital campaigns that drive engagement, boost visibility, and deliver measurable results.",
      ctaText: "See Our Campaigns",
      bgGradient: "from-blue-400 via-purple-500 to-teal-400"
    },
    {
      title: "Creative Design",
      subtitle: "That Inspires",
      description: "Innovative design solutions that capture attention and create lasting impressions for your brand.",
      ctaText: "View Portfolio",
      bgGradient: "from-pink-400 via-red-500 to-orange-400"
    },
    {
      title: "Brand Strategy",
      subtitle: "That Resonates",
      description: "Comprehensive brand strategies that connect with your audience and build meaningful relationships.",
      ctaText: "Learn More",
      bgGradient: "from-green-400 via-blue-500 to-purple-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative h-screen overflow-hidden bg-gradient-to-br transition-all duration-1000 ${slides[currentSlide].bgGradient}`}>
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Heart Icon */}
        <div className="absolute top-20 left-1/4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-bounce-slow">
          <span className="text-white text-xl">♥</span>
        </div>
        
        {/* Sound Icon */}
        <div className="absolute top-32 right-1/4 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <span className="text-white text-xl">🔊</span>
        </div>
        
        {/* Email Icon */}
        <div className="absolute top-40 right-1/3 w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '2s' }}>
          <span className="text-white text-xl">📧</span>
        </div>
        
        {/* Music Note */}
        <div className="absolute top-28 left-1/3 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
          <span className="text-white text-lg">♪</span>
        </div>
        
        {/* Purple Heart */}
        <div className="absolute top-16 left-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
          <span className="text-white text-lg">♥</span>
        </div>
        
        {/* Orange Circle */}
        <div className="absolute top-24 left-1/5 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-vv-orange transition-colors duration-300"
      >
        <ArrowDown size={32} className="rotate-90" />
      </button>
      
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-vv-orange transition-colors duration-300"
      >
        <ArrowDown size={32} className="-rotate-90" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8 absolute'
                  }`}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="block text-vv-orange">{slide.title}</span>
                    <span className="text-white">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                  <button
                    onClick={scrollToAbout}
                    className="bg-vv-orange hover:bg-vv-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {slide.ctaText}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Content - Phone with Person */}
            <div className="hidden lg:block relative">
              <div className="relative mx-auto">
                {/* Phone Frame */}
                <div className="relative w-80 h-96 bg-black rounded-3xl p-2 shadow-2xl transform rotate-12">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    {/* Person with Megaphone */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=500&fit=crop&crop=face"
                        alt="Person with megaphone"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Megaphone overlay effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">📢</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-vv-orange' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-vv-orange transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
