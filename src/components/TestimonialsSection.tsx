
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "VV Metamark transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team's professionalism and innovative solutions helped us stand out in a competitive market.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      position: "CEO",
      rating: 5
    },
    {
      id: 2,
      content: "Working with VV Metamark was an absolute pleasure. They delivered exceptional digital marketing campaigns that significantly boosted our online presence and customer engagement. Highly recommended!",
      author: "Michael Chen",
      company: "GreenLife Organics",
      position: "Marketing Director",
      rating: 5
    },
    {
      id: 3,
      content: "The packaging design created by VV Metamark for our premium product line was outstanding. It perfectly captured our brand essence and helped increase our sales by 40% in the first quarter.",
      author: "Emma Rodriguez",
      company: "Luxury Skincare Co.",
      position: "Brand Manager",
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
          <div className="w-24 h-1 bg-vv-navy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <blockquote className="text-vv-navy/80 mb-6 leading-relaxed text-sm">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
