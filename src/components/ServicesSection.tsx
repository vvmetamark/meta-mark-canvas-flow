import { Palette, Monitor, Camera } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      services: [
        "Brand identity & logo design",
        "Packaging",
        "ATL & BTL campaigns",
        "Social media creatives",
        "Website & App design",
        "Space design",
        "Book design"
      ]
    },
    {
      icon: Monitor,
      title: "Digital",
      services: [
        "Web development",
        "UI/UX",
        "Social media marketing",
        "Email marketing",
        "Media planning",
        "Search engine marketing",
        "Search engine optimization",
        "Online reputation management",
        "IT & consulting",
        "BPO services"
      ]
    },
    {
      icon: Camera,
      title: "Production",
      services: [
        "Printing",
        "Campaign shoot",
        "Photo shoot",
        "Video shoot",
        "Radio spot recording"
      ]
    }
  ];

  return (
    <div className="py-20 bg-vv-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            WHAT <span style={{ color: '#ffb703' }}>WE DO</span>
          </h2>
          <div className="w-24 h-1 bg-vv-orange mx-auto mb-6"></div>
          <p className="text-lg text-vv-navy/70 max-w-2xl mx-auto">
            From concept to execution, we provide comprehensive creative solutions that drive results and build lasting brand relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Continuously Rotating Circle Icon */}
              <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-vv-orange rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="bg-vv-white p-6 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <service.icon size={48} className="text-vv-orange" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-vv-navy mb-6">
                {service.title}
              </h3>

              <ul className="space-y-3 text-vv-navy/70">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:text-vv-orange transition-colors duration-200">
                    {item}
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
