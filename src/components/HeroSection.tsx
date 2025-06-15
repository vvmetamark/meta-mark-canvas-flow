
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Digital Marketing",
      subtitle: "That Converts",
      description: "We create data-driven digital marketing strategies that deliver real results. From social media campaigns to SEO optimization, we help your business grow online.",
      ctaText: "Get Started",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Creative Design",
      subtitle: "That Inspires",
      description: "Our creative team brings your brand vision to life with stunning designs that capture attention and drive engagement across all platforms.",
      ctaText: "View Portfolio",
      bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Brand Strategy",
      subtitle: "That Resonates",
      description: "We develop comprehensive brand strategies that connect with your target audience and build lasting relationships.",
      ctaText: "Learn More",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
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
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-vv-blue to-vv-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                    <span className="block">{slide.title}</span>
                    <span className="text-vv-orange">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                  <button
                    onClick={scrollToAbout}
                    className="bg-vv-orange hover:bg-vv-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.ctaText}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Content - Image/Graphic */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    alt="Digital Marketing"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-vv-orange text-white p-4 rounded-lg shadow-lg animate-bounce-slow">
                    <span className="text-sm font-semibold">SEO</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white text-vv-navy p-4 rounded-lg shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                    <span className="text-sm font-semibold">Social Media</span>
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
