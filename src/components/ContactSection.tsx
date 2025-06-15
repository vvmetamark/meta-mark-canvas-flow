
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            JUST HOLLER.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-vv-navy mb-8">
            WE'RE RIGHT HERE!
          </h3>
          <div className="w-24 h-1 bg-vv-navy mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Get In Touch Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-navy mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-8">
              {/* Bangalore Office */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-vv-orange text-white p-2 rounded-full flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-vv-navy text-lg mb-2">Bangalore Office</h4>
                    <p className="text-vv-navy/70 text-sm leading-relaxed">
                      123 Creative Street<br />
                      Design District<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
              </div>

              {/* Ambur Office */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-vv-orange text-white p-2 rounded-full flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-vv-navy text-lg mb-2">Ambur Office</h4>
                    <p className="text-vv-navy/70 text-sm leading-relaxed">
                      456 Market Street<br />
                      Business Center<br />
                      Ambur, Tamil Nadu 635802
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center gap-4">
                <div className="bg-vv-orange text-white p-2 rounded-full flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-vv-navy mb-1">Call Us</h4>
                  <p className="text-vv-navy/70 text-sm">+91 98765 43210</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center gap-4">
                <div className="bg-vv-orange text-white p-2 rounded-full flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-vv-navy mb-1">Email Us</h4>
                  <p className="text-vv-navy/70 text-sm">hello@vvmetamark.com</p>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="font-bold text-vv-navy mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <div className="bg-vv-orange text-white p-2 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="bg-vv-orange text-white p-2 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                    <span className="text-sm font-bold">ig</span>
                  </div>
                  <div className="bg-vv-orange text-white p-2 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-navy mb-8">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-vv-navy font-medium mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-vv-navy font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-vv-navy font-medium mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-vv-navy font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent resize-none text-sm"
                  placeholder="Your Message"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-vv-orange text-white py-3 rounded-lg font-semibold hover:bg-vv-orange-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4266963755815!2d77.59456831533322!3d12.935518819048157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1441b9b8e1f7%3A0xa1b2c3d4e5f67890!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VV Metamark Location"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-vv-navy text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">© 2025 VV Metamark. All rights reserved. | Designed with ❤️ by VV Metamark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
