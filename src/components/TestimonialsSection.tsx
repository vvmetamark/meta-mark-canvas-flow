
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "VV Metamark transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team's professionalism and innovative solutions helped us stand out in a competitive market.",
      author: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      position: "CEO",
      rating: 5
    },
    {
      id: 2,
      content: "Working with VV Metamark was an absolute pleasure. They understood our vision perfectly and delivered a comprehensive digital marketing strategy that increased our online presence by 300%. Highly recommended!",
      author: "Michael Chen",
      company: "Green Solutions Ltd.",
      position: "Marketing Director",
      rating: 5
    },
    {
      id: 3,
      content: "The packaging design created by VV Metamark for our premium product line has been a game-changer. Sales increased by 45% within the first quarter after launch. Their creativity knows no bounds.",
      author: "Emma Rodriguez",
      company: "Luxury Goods Co.",
      position: "Brand Manager",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-vv-orange text-white p-3 rounded-full">
                  <Quote size={24} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-vv-orange fill-current" />
                ))}
              </div>

              <blockquote className="text-vv-navy/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-vv-navy text-lg">
                  {testimonial.author}
                </div>
                <div className="text-vv-orange font-medium">
                  {testimonial.position}
                </div>
                <div className="text-vv-navy/60 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold">
                Brand {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
