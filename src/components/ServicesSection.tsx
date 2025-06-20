
import React from 'react';
import { Palette, Globe, Megaphone, Camera, Brush, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand development from logo design to comprehensive brand guidelines that tell your unique story.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Modern, responsive websites that not only look stunning but also deliver exceptional user experiences.",
      features: ["Responsive Design", "User Experience", "E-commerce", "CMS Integration"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital campaigns that amplify your brand's reach and engage your target audience effectively.",
      features: ["Social Media", "SEO/SEM", "Content Strategy", "Analytics"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services that capture the essence of your brand with stunning visual content.",
      features: ["Product Photography", "Brand Photography", "Event Coverage", "Lifestyle Shoots"]
    },
    {
      icon: Brush,
      title: "Print Design",
      description: "High-quality print materials that extend your brand's impact beyond the digital realm.",
      features: ["Brochures", "Business Cards", "Packaging", "Marketing Collateral"]
    },
    {
      icon: Code,
      title: "Development",
      description: "Custom web development solutions that bring your digital vision to life with cutting-edge technology.",
      features: ["Custom Development", "API Integration", "Performance Optimization", "Maintenance"]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            WHAT WE <span className="text-vv-orange scratch-zigzag">DO</span>
          </h2>
          <p className="text-lg text-vv-navy/70 max-w-2xl mx-auto">
            From concept to creation, we offer comprehensive creative services that bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-vv-orange/10 rounded-lg group-hover:bg-vv-orange group-hover:text-white transition-all duration-300">
                  <service.icon size={32} className="text-vv-orange group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-vv-navy ml-4">{service.title}</h3>
              </div>
              
              <p className="text-vv-navy/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-vv-navy/60">
                    <span className="w-2 h-2 bg-vv-orange rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
