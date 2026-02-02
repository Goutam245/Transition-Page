import { Monitor, Shield, Database, Phone, Cloud, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: '24/7 proactive monitoring of your servers, software systems, and security infrastructure.',
    gradient: 'from-ocean-blue to-electric-purple',
    link: '#',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Cutting-edge detection tools to keep your company safe at all entry points with multi-layer protection.',
    gradient: 'from-electric-purple to-rose-pink',
    link: '#',
  },
  {
    icon: Database,
    title: 'Data Backups',
    description: 'Redundancy is the key to ensuring your precious data is always available when you need it.',
    gradient: 'from-vibrant-teal to-ocean-blue',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Business Communications',
    description: 'Simplified options for broadband, dial-tone, and WAN communications with modern solutions.',
    gradient: 'from-lime-green to-vibrant-teal',
    link: '#',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Complete cloud migration and management services tailored to your business needs.',
    gradient: 'from-sunset-orange to-rose-pink',
    link: '#',
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology planning and virtual CIO services to align IT with business goals.',
    gradient: 'from-ocean-blue to-vibrant-teal',
    link: '#',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-purple to-rose-pink"></span>
            <span className="text-sm font-semibold text-gray-600">Services & Solutions</span>
          </div>
          <h2 className="font-display text-headline font-bold text-gray-900 mb-6">
            Fluid Networks{' '}
            <span className="text-gradient-accent">solves problems</span>{' '}
            through IT
          </h2>
          <p className="text-lg text-gray-600">
            Cloud Enabled Office™ is built on our unique blend of branded services 
            designed to use technology to propel your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-ocean-blue transition-all duration-300"
              >
                Explore Solution
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-card px-8 py-6 rounded-2xl">
            <p className="text-gray-700 font-medium">
              Need a custom solution for your business?
            </p>
            <button className="btn-gradient text-sm px-6 py-3">
              <span className="flex items-center gap-2">
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
