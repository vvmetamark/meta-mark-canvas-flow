
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['All', 'Brand Identity', 'Campaign', 'Digital Marketing', 'Packaging', 'Space Design', 'Brochure'];

  const projects = [
    {
      id: 1,
      title: "Modern Tech Brand",
      category: "Brand Identity",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ],
      description: "Complete brand identity design for a modern tech startup."
    },
    {
      id: 2,
      title: "Creative Campaign",
      category: "Campaign",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      ],
      description: "Innovative advertising campaign for consumer electronics."
    },
    {
      id: 3,
      title: "Digital Marketing Suite",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ],
      description: "Comprehensive digital marketing strategy and implementation."
    },
    {
      id: 4,
      title: "Premium Packaging",
      category: "Packaging",
      thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      images: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22"
      ],
      description: "Luxury packaging design for premium consumer goods."
    },
    {
      id: 5,
      title: "Corporate Space",
      category: "Space Design",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22"
      ],
      description: "Modern corporate office space design and branding."
    },
    {
      id: 6,
      title: "Annual Report",
      category: "Brochure",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      ],
      description: "Corporate annual report design and layout."
    },
    {
      id: 7,
      title: "Startup Branding",
      category: "Brand Identity",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      ],
      description: "Complete brand identity for innovative startup company."
    },
    {
      id: 8,
      title: "Product Launch",
      category: "Campaign",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ],
      description: "Multi-channel product launch campaign."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev + 1 >= selectedProject.images.length ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev - 1 < 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            Our Work
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
                  : 'bg-white text-vv-navy hover:bg-vv-orange hover:text-white'
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
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProject(project)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-vv-orange">{project.category}</p>
                  <div className="mt-4 bg-vv-orange text-white px-4 py-2 rounded-lg">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold text-vv-navy">{selectedProject.title}</h3>
                  <p className="text-vv-orange">{selectedProject.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-vv-navy hover:text-vv-orange transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="relative mb-6">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-vv-navy p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-vv-navy p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                <p className="text-vv-navy/70 mb-6">{selectedProject.description}</p>

                {/* Image Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-4 mb-6">
                    {selectedProject.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          index === currentImageIndex ? 'border-vv-orange' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Download Button */}
                <button className="flex items-center gap-2 bg-vv-orange hover:bg-vv-orange-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  <Download size={20} />
                  Download PSD
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSection;
