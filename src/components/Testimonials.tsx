import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Fluid Networks has changed everything. AX Corporate Travel Center gained everything and more than they expected from the Cloud Enabled Office solution.",
    author: "David Redman",
    role: "Owner",
    company: "American Express Corporate Travel Center",
    rating: 5,
    gradient: 'from-ocean-blue to-electric-purple',
  },
  {
    quote: "Fluid Networks worked directly with the incumbent phone and internet providers to disconnect unused and non-working services and uncover credits due.",
    author: "Carlos Zavala",
    role: "Operations Manager",
    company: "SurePath Financial Solutions",
    rating: 5,
    gradient: 'from-vibrant-teal to-ocean-blue',
  },
  {
    quote: "They made recommendations to upgrade networks with Voice compatible Routers and Manageable switches with in-line power so IP phones could be powered centrally.",
    author: "Don Sorensen",
    role: "Senior I.S. Analyst",
    company: "Tri-Counties Regional Center",
    rating: 5,
    gradient: 'from-electric-purple to-rose-pink',
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-green/10 to-vibrant-teal/10 mb-6">
            <Star className="w-4 h-4 text-lime-green" />
            <span className="text-sm font-semibold text-gradient-secondary">Client Success Stories</span>
          </div>
          <h2 className="font-display text-headline font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-gradient-primary">500+ businesses</span>{' '}
            worldwide
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients have to say about their experience with Fluid Networks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="testimonial-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mb-6 opacity-80`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunset-orange text-sunset-orange" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg mb-3`}>
                  {testimonial.author.charAt(0)}
                </div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm font-medium text-ocean-blue">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-ocean-blue font-semibold hover:text-electric-purple transition-colors">
            View all client profiles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
