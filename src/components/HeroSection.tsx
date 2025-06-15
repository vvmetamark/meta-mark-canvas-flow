
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Creative Excellence",
      subtitle: "Transforming Ideas into",
      highlight: "Visual Stories",
      description: "We craft compelling brand narratives that resonate with audiences and drive meaningful connections.",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Digital Innovation",
      subtitle: "Building Tomorrow's",
      highlight: "Digital Experiences",
      description: "From web development to digital marketing, we create cutting-edge solutions that propel your business forward.",
      bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Brand Identity",
      subtitle: "Crafting Distinctive",
      highlight: "Brand Personalities",
      description: "Every brand has a unique story. We help you tell yours through compelling design and strategic thinking.",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="text-vv-white block mb-2">{slide.title}</span>
                  <span className="text-vv-white block mb-2">{slide.subtitle}</span>
                  <span className="text-vv-orange">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-vv-white/90 mb-8 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                <button
                  onClick={scrollToWork}
                  className="bg-vv-orange hover:bg-vv-orange-dark text-vv-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Explore Our Work
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-vv-white/20 hover:bg-vv-white/30 text-vv-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-vv-white/20 hover:bg-vv-white/30 text-vv-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-vv-orange' : 'bg-vv-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-vv-white hover:text-vv-orange transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
