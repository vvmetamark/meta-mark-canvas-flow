
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "VV Metamark transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team's professionalism and innovative solutions helped us stand out in a competitive market.",
      author: "Priya Sharma",
      company: "BharatTech Solutions",
      position: "CEO",
      rating: 5
    },
    {
      id: 2,
      content: "Working with VV Metamark was an absolute pleasure. They delivered exceptional digital marketing campaigns that significantly boosted our online presence and customer engagement. Highly recommended!",
      author: "Rohan Mehra",
      company: "Desi Organics",
      position: "Marketing Director",
      rating: 5
    },
    {
      id: 3,
      content: "The packaging design created by VV Metamark for our premium product line was outstanding. It perfectly captured our brand essence and helped increase our sales by 40% in the first quarter.",
      author: "Ananya Gupta",
      company: "AyurBeauty Co.",
      position: "Brand Manager",
      rating: 5
    },
    {
      id: 4,
      content: "The web design team is top-notch. They built us a sleek, modern website that is both beautiful and highly functional. Our user engagement has skyrocketed since the launch.",
      author: "Vikram Singh",
      company: "Digital India Hub",
      position: "CTO",
      rating: 5
    },
    {
      id: 5,
      content: "VV Metamark's branding services are second to none. They helped us craft a brand story that resonates deeply with our target audience. We've seen a significant increase in brand loyalty.",
      author: "Aisha Khan",
      company: "Crafts of India",
      position: "Founder",
      rating: 5
    },
    {
      id: 6,
      content: "Their print design work is simply stunning. From brochures to event banners, every piece they created for us was a work of art that commanded attention.",
      author: "Arjun Patel",
      company: "Mela Events",
      position: "Events Coordinator",
      rating: 5
    },
    {
      id: 7,
      content: "A fantastic partner for all our digital marketing needs. Their data-driven strategies have consistently delivered impressive results, growing our leads by over 200%.",
      author: "Saanvi Reddy",
      company: "IndiRealty",
      position: "Head of Marketing",
      rating: 5
    },
    {
      id: 8,
      content: "I'm so grateful for their expertise. They took our fledgling idea and turned it into a powerful brand. The creative process was collaborative, insightful, and incredibly rewarding.",
      author: "Kabir Joshi",
      company: "Naya Soch Ventures",
      position: "Co-Founder",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT OUR <span className="text-vv-navy">CLIENTS SAY</span>
          </h2>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/4cd593ba-a6c9-4a0a-8957-f3f768a75d11.png" 
              alt="Scratch underline" 
              className="h-6 w-40" 
              style={{ filter: 'invert(1) brightness(2)' }}
            />
          </div>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <div
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <blockquote className="text-vv-navy/80 mb-6 leading-relaxed text-sm flex-grow">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-bold text-vv-navy text-base">
                        {testimonial.author}
                      </div>
                      <div className="text-vv-orange font-medium text-sm">
                        {testimonial.position}
                      </div>
                      <div className="text-vv-navy/60 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/80 hover:bg-white text-vv-navy" />
          <CarouselNext className="bg-white/80 hover:bg-white text-vv-navy" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
