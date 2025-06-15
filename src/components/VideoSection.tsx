
import { ArrowDown, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VideoSection = () => {
  const scrollToAboutVVMetamark = () => {
    const element = document.querySelector('#about-vv-metamark');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Video Section */}
      <div className="relative h-screen bg-gradient-to-br from-vv-navy/90 to-vv-blue/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/ded22791-3e09-4796-bb83-a6a66a798438.png"
            alt="VV Metamark Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-vv-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            {/* Play Button */}
            <div className="mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-vv-orange hover:bg-vv-orange-dark text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 mx-auto">
                    <Play size={48} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://player.vimeo.com/video/1093364354?autoplay=1&title=0&byline=0&portrait=0"
                      width="100%"
                      height="100%"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="VV Metamark Video"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Are <span className="text-vv-orange">VV Metamark</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
              A passionate team of creative professionals dedicated to transforming brands through{' '}
              <span className="text-vv-orange font-semibold">innovative design</span>,{' '}
              <span className="text-vv-orange font-semibold">strategic marketing</span>, and{' '}
              <span className="text-vv-orange font-semibold">digital excellence</span>.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">89+</div>
                <p className="text-white/90">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">100+</div>
                <p className="text-white/90">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-vv-orange mb-2">3+</div>
                <p className="text-white/90">Years Experience</p>
              </div>
            </div>

            {/* Scroll Down Arrow */}
            <button
              onClick={scrollToAboutVVMetamark}
              className="text-white hover:text-vv-orange transition-colors duration-300 animate-bounce-slow"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-vv-metamark" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: '#023047' }}>ABOUT</span> <span className="text-vv-orange">VV METAMARK</span>
            </h2>
            <div className="w-24 h-1 bg-vv-orange mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-vv-navy mb-6">A Creative Force with Purpose</h3>
              <p className="text-vv-navy/80 mb-6 leading-relaxed">
                Greetings from <span className="text-vv-orange font-semibold">VV Metamark</span>, a creative force driven by purpose and passion. "VV" bears the initials of its founders, <span className="text-vv-orange font-semibold">Venkataswari</span> and <span className="text-vv-orange font-semibold">Vani</span>, but the spirit behind it is creativity.
              </p>
              <p className="text-vv-navy/80 mb-6 leading-relaxed">
                With years of experience as pioneers in <span className="text-vv-orange font-semibold">digital marketing</span>, <span className="text-vv-orange font-semibold">content production</span>, <span className="text-vv-orange font-semibold">graphic design</span>, and <span className="text-vv-orange font-semibold">web editing</span>, both partners are based in Bangalore.
              </p>
              <p className="text-vv-navy/80 leading-relaxed">
                VV Metamark is more than just an agency — it's a movement that aims to provide <span className="text-vv-orange font-semibold">Ambur</span>, <span className="text-vv-orange font-semibold">Vellore</span>, and beyond with top-notch creative solutions.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Our Vision */}
              <div className="bg-vv-vision-bg p-8 rounded-lg">
                <h4 className="text-xl font-bold text-vv-navy mb-4">Our Vision</h4>
                <p className="text-vv-navy/80 leading-relaxed">
                  To become a trusted creative partner for individuals, institutions, and enterprises by delivering accessible, innovative, and impactful branding and digital marketing services.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-vv-mission-bg p-8 rounded-lg">
                <h4 className="text-xl font-bold text-vv-navy mb-4">Our Mission</h4>
                <ul className="space-y-3 text-vv-navy/80">
                  <li className="flex items-start">
                    <span className="text-vv-orange mr-2">•</span>
                    Empower small businesses and startups with professional branding
                  </li>
                  <li className="flex items-start">
                    <span className="text-vv-orange mr-2">•</span>
                    Bring urban-level creativity to semi-urban and rural regions
                  </li>
                  <li className="flex items-start">
                    <span className="text-vv-orange mr-2">•</span>
                    Bridge the digital divide with tailored content strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
