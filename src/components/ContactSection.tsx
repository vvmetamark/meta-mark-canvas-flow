
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Loader2 } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from '@tanstack/react-query';
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: values,
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Function Error: ${error.message}`);
      }
      
      if (data.error) {
         console.error('API Error:', data.error);
         throw new Error(`API Error: ${data.error}`);
      }

      return data;
    },
    onSuccess: () => {
      form.reset();
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(mutateAsync(values), {
      loading: 'Sending your message...',
      success: 'Message sent! We will get back to you soon.',
      error: (err) => `Failed to send: ${err.message}`,
    });
  }


  return (
    <div className="bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vv-navy mb-4">
            <span className="text-white">JUST</span> HOLLER.
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
                  <a href="https://www.facebook.com/share/16cFjqfxKr/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                      <Facebook size={18} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/vvmetamark?igsh=OHZicjZwMHdjdXBi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                      <Instagram size={18} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/vv-metamark-bb575b369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                      <Linkedin size={18} />
                    </div>
                  </a>
                  <a href="https://youtube.com/@vvmetamark?si=dFTrTCwCPLVW-F3E" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                    <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                      <Youtube size={18} />
                    </div>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <div className="bg-vv-orange text-white p-3 rounded-full hover:bg-vv-orange-dark transition-colors cursor-pointer">
                      <MessageCircle size={18} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-navy mb-8">
              Send Message
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-vv-navy font-medium mb-2 text-sm">Name</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                            placeholder="Your Name"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-vv-navy font-medium mb-2 text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                            placeholder="Your Email"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-vv-navy font-medium mb-2 text-sm">Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent text-sm"
                          placeholder="Subject"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-vv-navy font-medium mb-2 text-sm">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vv-orange focus:border-transparent resize-none text-sm"
                          placeholder="Your Message"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-vv-orange text-white py-3 rounded-lg font-semibold hover:bg-vv-orange-dark transition-colors duration-300 flex items-center justify-center gap-2"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <h4 className="font-bold text-vv-navy text-lg mb-4 text-center">Bangalore Office</h4>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VV Metamark Bangalore Location"
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <h4 className="font-bold text-vv-navy text-lg mb-4 text-center">Ambur Office</h4>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Ambur%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VV Metamark Ambur Location"
              ></iframe>
            </div>
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
