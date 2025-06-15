
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vv-navy mb-4">
              JUST HOLLER.
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-vv-navy mb-8">
              WE'RE RIGHT HERE!
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-vv-navy mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-vv-navy mb-1">Visit Us</h4>
                  <p className="text-vv-navy/80">
                    123 Creative Street<br />
                    Design District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-vv-navy flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-vv-navy mb-1">Call Us</h4>
                  <p className="text-vv-navy/80">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-vv-navy flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-vv-navy mb-1">Email Us</h4>
                  <p className="text-vv-navy/80">hello@vvmetamark.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="bg-vv-navy text-white p-3 rounded-full hover:bg-vv-navy/80 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-vv-navy text-white p-3 rounded-full hover:bg-vv-navy/80 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-vv-navy text-white p-3 rounded-full hover:bg-vv-navy/80 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-navy mb-6">
              Let's Start a Conversation
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-vv-navy font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-vv-navy font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-vv-navy font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-vv-navy font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-vv-navy text-white py-3 rounded-lg font-semibold hover:bg-vv-navy/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8426128521464!2d72.82706831434836!3d19.018255587120707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8a1e7a2d4d%3A0x4b89e3f3e4f5f6f7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VV Metamark Location"
        />
      </div>

      {/* Footer */}
      <div className="bg-vv-navy text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 VV Metamark. All rights reserved.</p>
              <p className="text-sm text-white/70 mt-1">
                Crafting creative solutions since 2020
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-vv-orange transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-vv-orange transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
