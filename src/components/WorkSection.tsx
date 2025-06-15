
import { useState } from 'react';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Web Design', 'Digital Marketing', 'Print Design'];

  const projects = [
    {
      id: 1,
      title: "The Mumbai Local Street",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      client: "Urban Transit"
    },
    {
      id: 2,
      title: "Tea Pot",
      category: "Product Design",
      thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      client: "Artisan Crafts"
    },
    {
      id: 3,
      title: "Agriculture Co",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      client: "Green Solutions"
    },
    {
      id: 4,
      title: "Pixie",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      client: "Tech Startup"
    },
    {
      id: 5,
      title: "SCO Packaging",
      category: "Packaging",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      client: "Consumer Goods"
    },
    {
      id: 6,
      title: "PPP Showcase",
      category: "Web Design",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      client: "Portfolio Site"
    },
    {
      id: 7,
      title: "Tech Theme Branding",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      client: "Technology"
    },
    {
      id: 8,
      title: "Business Campaign",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      client: "Corporate"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            OUR <span className="text-vv-orange">WORK</span>
          </h2>
          <div className="w-24 h-1 bg-vv-orange mx-auto mb-6"></div>
          <p className="text-lg text-vv-navy/70 max-w-2xl mx-auto">
            Explore our portfolio of creative projects and see how we've helped brands tell their stories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-vv-orange text-white shadow-lg'
                  : 'bg-white text-vv-navy hover:bg-vv-orange hover:text-white border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-vv-navy mb-1">{project.title}</h3>
                <p className="text-sm text-vv-navy/60 mb-2">{project.client}</p>
                <span className="inline-block bg-vv-orange/10 text-vv-orange px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-vv-orange/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-vv-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-vv-orange hover:bg-vv-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
