
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
      bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop",
      ctaAction: "work"
    },
    {
      title: "Creative Design",
      subtitle: "That Inspires",
      description: "Innovative design solutions that capture attention and create lasting impressions for your brand.",
      ctaText: "View Portfolio",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
      ctaAction: "work"
    },
    {
      title: "Brand Strategy",
      subtitle: "That Resonates",
      description: "Comprehensive brand strategies that connect with your audience and build meaningful relationships.",
      ctaText: "Learn More",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
      ctaAction: "about"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = (action: string) => {
    if (action === 'about') {
      scrollToAbout();
    } else {
      scrollToWork();
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
          }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden z-20">
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
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-vv-orange transition-colors duration-300"
      >
        <ArrowDown size={32} className="rotate-90" />
      </button>
      
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-vv-orange transition-colors duration-300"
      >
        <ArrowDown size={32} className="-rotate-90" />
      </button>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {/* Centered Content */}
            <div className="text-white text-center max-w-4xl">
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
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => handleCtaClick(slide.ctaAction)}
                    className="bg-vv-orange hover:bg-vv-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {slide.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
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
      <div className="absolute bottom-8 right-8 z-30">
        <button
          onClick={scrollToWork}
          className="text-white hover:text-vv-orange transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
