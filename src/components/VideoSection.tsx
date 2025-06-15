
import { ArrowDown, Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-6">
            We Are <span className="text-vv-orange">VV Metamark</span>
          </h2>
          <p className="text-lg text-vv-navy/70 max-w-3xl mx-auto mb-12">
            A creative agency dedicated to transforming ideas into compelling visual stories. We combine strategic thinking with innovative design to help brands connect with their audiences in meaningful ways.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">150+</div>
            <p className="text-vv-navy/70">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">300+</div>
            <p className="text-vv-navy/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">5+</div>
            <p className="text-vv-navy/70">Years Experience</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="About VV Metamark"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="bg-vv-orange hover:bg-vv-orange-dark text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110">
                <Play size={48} />
              </button>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold text-vv-navy mb-4">Our Vision</h3>
            <p className="text-vv-navy/70 mb-6">
              To be the leading creative agency that bridges the gap between brands and their audiences through innovative design, strategic thinking, and cutting-edge technology.
            </p>
            <ul className="space-y-2 text-vv-navy/70">
              <li>• Creative Excellence</li>
              <li>• Strategic Innovation</li>
              <li>• Client-Centric Approach</li>
              <li>• Results-Driven Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-vv-navy mb-4">Our Mission</h3>
            <p className="text-vv-navy/70 mb-6">
              We empower businesses to tell their unique stories through compelling design and strategic marketing solutions that drive growth and build lasting connections.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-vv-orange hover:bg-vv-orange-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Our Services
              </button>
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-vv-orange text-vv-orange hover:bg-vv-orange hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
