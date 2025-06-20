
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions",
      content: "VV Metamark transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The new brand has significantly improved our market presence.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupXYZ",
      content: "Working with VV Metamark was a game-changer for our startup. They understood our vision and brought it to life with stunning visuals that perfectly capture our brand essence.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Fashion Forward",
      content: "The team at VV Metamark is incredibly talented and professional. They delivered high-quality work on time and within budget. I highly recommend their services.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      role: "Brand Manager",
      company: "GreenEarth Co.",
      content: "VV Metamark's innovative approach to branding helped us stand out in a crowded market. Their strategic thinking combined with creative excellence is unmatched.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="py-20 bg-vv-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            WHAT OUR CLIENTS <span className="text-vv-orange scratch-circle">SAY</span>
          </h2>
          <p className="text-lg text-vv-navy/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-vv-orange/5 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-vv-blue/5 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              {/* Quote */}
              <div className="text-6xl text-vv-orange/20 font-serif absolute -top-4 -left-2">"</div>
              <div className="mb-8 pl-8">
                <p className="text-xl text-vv-navy/80 leading-relaxed italic">
                  {testimonials[currentIndex].content}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-vv-navy">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-vv-navy/60 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-vv-orange text-sm font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-vv-orange hover:text-white group"
          >
            <ChevronLeft size={24} className="text-vv-navy group-hover:text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-vv-orange hover:text-white group"
          >
            <ChevronRight size={24} className="text-vv-navy group-hover:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-vv-orange shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-vv-navy/70 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-vv-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-vv-navy/60">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
