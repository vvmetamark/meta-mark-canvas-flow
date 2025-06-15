import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Branding', 'Web Design', 'Digital Marketing', 'Print Design'];

  const projects = [
    {
      id: 1,
      title: "The Mumbai Local Street",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      client: "Urban Transit",
      description: "Complete brand identity and launch visuals for Urban Transit, establishing a strong foundation for business growth.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Tea Pot",
      category: "Product Design",
      thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      client: "Artisan Crafts",
      description: "Elegant product design and branding for premium tea accessories, focusing on traditional craftsmanship.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Agriculture Co",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      client: "Green Solutions",
      description: "Comprehensive branding solution for agricultural technology company, emphasizing sustainability and innovation.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Pixie",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      client: "Tech Startup",
      description: "Digital marketing strategy and visual identity for innovative tech startup, targeting young professionals.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "SCO Packaging",
      category: "Packaging",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      client: "Consumer Goods",
      description: "Sustainable packaging design for consumer goods company, balancing aesthetics with environmental responsibility.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "PPP Showcase",
      category: "Web Design",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      client: "Portfolio Site",
      description: "Modern web design and development for professional portfolio showcase, emphasizing clean aesthetics.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Tech Theme Branding",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      client: "Technology",
      description: "Complete brand identity for technology company, featuring modern design elements and digital-first approach.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 8,
      title: "Business Campaign",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      client: "Corporate",
      description: "Strategic digital marketing campaign for corporate client, driving engagement and brand awareness.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

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
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-vv-orange/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-vv-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-vv-navy mb-1">{project.title}</h3>
                <p className="text-sm text-vv-navy/60 mb-2">{project.client}</p>
                <span className="inline-block bg-vv-orange/10 text-vv-orange px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
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

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl w-full mx-4 p-0 bg-white rounded-2xl overflow-hidden">
          {selectedProject && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-gray-900/20 hover:bg-gray-900/40 text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Image Cover */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.featured && (
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-orange-500 font-medium text-lg">
                    {selectedProject.category}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <span className="text-pink-500 text-xl">🚀</span>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Client</p>
                  <p className="text-gray-900 font-medium">{selectedProject.client}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkSection;
