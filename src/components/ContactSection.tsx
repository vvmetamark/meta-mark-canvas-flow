
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vv-navy mb-4">
            JUST HOLLER.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-vv-navy mb-8">
            WE'RE RIGHT HERE!
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-vv-navy mb-6">Get in Touch</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vv-orange text-white p-3 rounded-full flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-vv-navy mb-1">Visit Us</h5>
                    <p className="text-vv-navy/70">
                      123 Creative Street<br />
                      Design District<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-vv-orange text-white p-3 rounded-full flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-vv-navy mb-1">Call Us</h5>
                    <p className="text-vv-navy/70">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-vv-orange text-white p-3 rounded-full flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-vv-navy mb-1">Email Us</h5>
                    <p className="text-vv-navy/70">hello@vvmetamark.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-bold text-vv-navy mb-4">Send Message</h4>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-vv-orange text-white py-3 rounded-lg font-semibold hover:bg-vv-orange-dark transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Main Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-navy mb-6">
              Let's Start a Conversation
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-vv-navy font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-vv-navy font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-vv-navy font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-vv-navy font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Brand Identity</option>
                  <option value="web">Web Development</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-vv-navy font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-vv-navy text-white py-4 rounded-lg font-semibold hover:bg-vv-navy/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Project Brief
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
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
              <div className="text-2xl font-bold mb-2">VV Metamark</div>
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
