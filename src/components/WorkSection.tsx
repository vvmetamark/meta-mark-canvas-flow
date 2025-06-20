import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Branding', 'Web Design', 'Digital Marketing', 'Print Design'];

  const projects = [
    {
      id: 1,
      title: "The Takshilah Global School",
      category: "Branding",
      thumbnail: "/lovable-uploads/42555497-872f-4728-b2c4-28b9729298ff.png",
      client: "The Takshilah Global School",
      description: "Comprehensive branding strategy and promotional materials for The Takshilah Global School. We focused on creating a modern and approachable brand identity to enhance its public presence and boost student enrollment.\n\nKey deliverables included:\n• A new, vibrant logo and brand guidelines.\n• A full suite of marketing collateral, including brochures and flyers.\n• Digital assets for social media campaigns.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Print_R",
      category: "Print Design",
      thumbnail: "/lovable-uploads/c28f3bd7-f544-4f0c-b5c0-214405398553.png",
      client: "Print_R Studios",
      description: "Creative print design solutions and comprehensive print materials for Print_R Studios. Our goal was to establish a memorable visual identity that reflects their innovative printing capabilities.\n\nServices provided:\n• Brand identity and print design system.\n• Marketing collateral design.\n• Print production guidelines.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Agro Life",
      category: "Print Design",
      thumbnail: "/lovable-uploads/e35c7f82-7949-4a5d-a4bd-c13778fe4c04.png",
      client: "Agro Life",
      description: "Visually compelling print materials and agri-brand visuals for Agro Life. We supported their marketing efforts in the agricultural sector with high-quality designs that resonate with their target audience.\n\nOur work included:\n• Product packaging design.\n• Brochures and catalogs.\n• Trade show booth graphics.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Print - R",
      category: "Digital Marketing",
      thumbnail: "/lovable-uploads/f0aa6544-d42a-4e73-90f2-2e292669660e.png",
      client: "Print - R Studios",
      description: "Engaging creative edits and video reels for Print - R Studios, designed to boost social media engagement and brand visibility. We helped them create a consistent and dynamic video content strategy.\n\nWhat we did:\n• Video editing for short-form content (Reels, TikToks).\n• Motion graphics and animations.\n• Social media video campaign assets.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "SGB",
      category: "Print Design",
      thumbnail: "/lovable-uploads/97bd75ef-e661-40c2-98b5-6e415cbb991f.png",
      client: "SGB Publishing",
      description: "Elegant book cover designs and comprehensive publishing design services for SGB Publishing. We focused on creating visually stunning covers that capture the essence of each literary work and attract readers.\n\nOur services included:\n• Custom book cover design.\n• Interior layout and typesetting.\n• Promotional materials for book launches.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "PS Endeavours",
      category: "Branding",
      thumbnail: "/lovable-uploads/862e01ec-a5bb-4a3d-badf-45bd3a2bed0d.png",
      client: "PS Endeavours",
      description: "Complete startup identity and launch visuals for PS Endeavours. We helped them build a strong brand foundation from the ground up, creating a cohesive identity for their new venture.\n\nProject highlights:\n• Brand strategy and positioning.\n• Logo, color palette, and typography.\n• Business card and stationery design.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Innovate Inc.",
      category: "Web Design",
      thumbnail: "/lovable-uploads/a603732d-da6e-4cc4-983b-01c0ac986c53.png",
      client: "Innovate Inc.",
      description: "A modern and responsive website for a forward-thinking tech company, Innovate Inc. The site was built to showcase their cutting-edge products and services, with a focus on user experience and performance.\n\nKey features:\n• Sleek, user-friendly UI/UX design.\n• Fully responsive for all devices.\n• Integrated blog and resource center.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      id: 8,
      title: "Marketing Masterminds",
      category: "Digital Marketing",
      thumbnail: "/lovable-uploads/a3c6c285-451b-45bd-b9ba-084902d58dd1.png",
      client: "Marketing Masterminds",
      description: "A comprehensive digital marketing campaign to boost online presence and lead generation for Marketing Masterminds. We developed a multi-channel strategy to reach their ideal customers.\n\nCampaign elements:\n• Search Engine Optimization (SEO).\n• Pay-Per-Click (PPC) advertising on Google and social media.\n• Content marketing and email automation.",
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
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/4cd593ba-a6c9-4a0a-8957-f3f768a75d11.png" 
              alt="Scratch underline" 
              className="h-4 w-32" 
              style={{ filter: 'hue-rotate(25deg) saturate(1.5) brightness(0.8)' }}
            />
          </div>
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
                  <ScrollArea className="h-48 w-full">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line pr-6">
                      {selectedProject.description}
                    </p>
                  </ScrollArea>
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
