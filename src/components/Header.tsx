
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-vv-white shadow-lg' : 'bg-vv-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('#home')} className="focus:outline-none" aria-label="Go to home page">
              <img
                src="/lovable-uploads/3f546713-43c7-4bc6-b4be-76224b6079af.png"
                alt="VV Metamark Logo"
                className="h-10 lg:h-12 object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-vv-orange-dark'
                      : 'text-vv-navy hover:text-vv-orange-dark'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* GET IN TOUCH Button */}
            <button
              onClick={scrollToContact}
              className="bg-vv-orange hover:bg-vv-orange-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vv-navy hover:text-vv-orange-dark transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-vv-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-vv-orange-dark bg-vv-orange/10'
                      : 'text-vv-navy hover:text-vv-orange-dark hover:bg-vv-orange/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={scrollToContact}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-vv-orange text-white rounded-lg mt-2"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
