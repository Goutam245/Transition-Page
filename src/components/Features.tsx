import { Cloud, DollarSign, TrendingUp, Eye, Wrench, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Modernizing IT',
    description: 'The Cloud Enabled Office™ leverages "Fluidability" — our unique way of providing clear visibility of your IT systems, dedicated serviceability when issues arise.',
    gradient: 'from-ocean-blue to-electric-purple',
  },
  {
    icon: DollarSign,
    title: 'Low Upfront Capital',
    description: 'Cloud-enabled technology helps you work more efficiently, and it significantly reduces initial IT investment. Technology costs become more predictable as you scale.',
    gradient: 'from-vibrant-teal to-ocean-blue',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Costs',
    description: 'The cloud is the wave of the future because of the financial flexibility it provides. Scale up and down as the size of your staff and budget dictates.',
    gradient: 'from-electric-purple to-rose-pink',
  },
];

const Features = () => {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-ocean-blue/10 to-electric-purple/10 mb-6">
            <Cloud className="w-4 h-4 text-ocean-blue" />
            <span className="text-sm font-semibold text-gradient-primary">Cloud Enabled Office™</span>
          </div>
          <h2 className="font-display text-headline font-bold text-gray-900 mb-6">
            Simplify IT infrastructure and{' '}
            <span className="text-gradient-primary">unleash next-level productivity</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fluid Networks' internet-based technology solution transforms how businesses 
            of all sizes leverage technology for growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className={`icon-gradient bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gradient-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-blue hover:text-electric-purple transition-colors group/link"
              >
                Learn more
                <span className="w-5 h-5 rounded-full bg-ocean-blue/10 flex items-center justify-center group-hover/link:bg-electric-purple/10 transition-colors">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cost Reduction', value: '40%', icon: DollarSign },
              { label: 'Uptime Guarantee', value: '99.9%', icon: CheckCircle },
              { label: 'Faster Deployment', value: '3x', icon: TrendingUp },
              { label: 'IT Management', value: '24/7', icon: Wrench },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-r ${
                  index === 0 ? 'from-ocean-blue to-electric-purple' :
                  index === 1 ? 'from-lime-green to-vibrant-teal' :
                  index === 2 ? 'from-electric-purple to-rose-pink' :
                  'from-vibrant-teal to-ocean-blue'
                } items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
