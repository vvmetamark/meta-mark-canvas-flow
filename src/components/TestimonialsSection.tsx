
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "VV Metamark transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team's professionalism and innovative solutions helped us stand out in a competitive market.",
      author: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      position: "CEO"
    },
    {
      id: 2,
      content: "Working with VV Metamark was an absolute pleasure. They understood our vision perfectly and delivered a comprehensive digital marketing strategy that increased our online presence by 300%. Highly recommended!",
      author: "Michael Chen",
      company: "Green Solutions Ltd.",
      position: "Marketing Director"
    },
    {
      id: 3,
      content: "The packaging design created by VV Metamark for our premium product line has been a game-changer. Sales increased by 45% within the first quarter after launch. Their creativity knows no bounds.",
      author: "Emma Rodriguez",
      company: "Luxury Goods Co.",
      position: "Brand Manager"
    }
  ];

  return (
    <div className="py-20 bg-vv-orange-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
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
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon Background */}
              <div className="relative mb-6">
                <Quote size={40} className="text-vv-orange/20 absolute -top-2 -left-2" />
                <Quote size={40} className="text-vv-orange/20 absolute -top-2 -left-2 transform rotate-180" />
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
      </div>
    </div>
  );
};

export default TestimonialsSection;
