
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
            {children}
        </div>
    </a>
);

const ContactInfo = () => (
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
              #123, Sample Street<br />
              Indiranagar<br />
              Bengaluru, Karnataka 560038
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
              Guru Ji Seva Arakattalai, No: 6/1<br />
              Takshilah School Main Road<br />
              Melkrishnapuram, Ambur - 635 802
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
          <p className="text-vv-navy/70 text-sm">+91 93449 10110</p>
        </div>
      </div>

      {/* Email Us */}
      <div className="flex items-center gap-4">
        <div className="bg-vv-orange text-white p-2 rounded-full flex-shrink-0">
          <Mail size={16} />
        </div>
        <div>
          <h4 className="font-bold text-vv-navy mb-1">Email Us</h4>
          <p className="text-vv-navy/70 text-sm">vvmetamark@gmail.com</p>
        </div>
      </div>

      {/* Follow Us */}
      <div>
        <h4 className="font-bold text-vv-navy mb-3">Follow Us</h4>
        <div className="flex gap-3">
          <SocialLink href="https://www.facebook.com/share/16cFjqfxKr/" label="Facebook">
            <Facebook size={18} />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/vvmetamark?igsh=OHZicjZwMHdjdXBi" label="Instagram">
            <Instagram size={18} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/vv-metamark-bb575b369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" label="LinkedIn">
            <Linkedin size={18} />
          </SocialLink>
          <SocialLink href="https://youtube.com/@vvmetamark?si=dFTrTCwCPLVW-F3E" label="Youtube">
            <Youtube size={18} />
          </SocialLink>
          <SocialLink href="https://wa.me/919876543210" label="WhatsApp">
            <MessageCircle size={18} />
          </SocialLink>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
