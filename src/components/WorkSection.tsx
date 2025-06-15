import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Branding', 'Web Design', 'Digital Marketing', 'Print Design'];

  const projects = [
    {
      id: 1,
      title: "The Takshilah Global School",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500",
      client: "The Takshilah Global School",
      description: "Comprehensive branding strategy and promotional materials for The Takshilah Global School, aiming to enhance its public presence and student enrollment.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Two Dots",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=500",
      client: "Two Dots Creative",
      description: "Creative logo design and a complete digital identity package for Two Dots, establishing a memorable and impactful online presence.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Agro Life Print_R",
      category: "Print Design",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
      client: "Agro Life",
      description: "Visually compelling print materials and agri-brand visuals for Agro Life, supporting their marketing efforts in the agricultural sector.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Pixel - R",
      category: "Digital Marketing",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
      client: "Pixel - R Studios",
      description: "Engaging creative edits and video reels for Pixel - R, designed to boost social media engagement and brand visibility.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "SGB",
      category: "Print Design",
      thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
      client: "SGB Publishing",
      description: "Elegant book cover designs and comprehensive publishing design services for SGB, enhancing the appeal of their literary works.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "PS Endeavours",
      category: "Branding",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500",
      client: "PS Endeavours",
      description: "Complete startup identity and launch visuals for PS Endeavours, building a strong brand foundation for their new venture.",
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
