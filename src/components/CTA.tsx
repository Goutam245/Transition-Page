import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden cta-section">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-sm font-medium text-white/90">Hi-tech challenges make us tick</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-display-lg font-bold text-white mb-6">
          Ready to transform your IT infrastructure?
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          We specialize in key cloud and communications technologies. With two decades of experience, 
          we've seen it all. Let's build something great together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-white text-gray-900 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl group flex items-center justify-center gap-3">
            Get Started Today
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white font-semibold text-lg px-10 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" />
            Schedule a Call
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 text-white/80">
          <a href="tel:+18055856350" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            (805) 585-6350
          </a>
          <a href="mailto:info@fluidnetworks.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            info@fluidnetworks.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            California, USA
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
