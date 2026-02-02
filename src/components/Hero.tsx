import { ArrowRight, Play, Shield, Cloud, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-blue/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-electric-purple/15 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-vibrant-teal/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-gray-100 mb-8 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-green to-vibrant-teal animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Cloud Enabled Office™ Technology</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-display-xl font-extrabold mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-gray-900">Your Business</span>
              <br />
              <span className="text-gradient-primary">Needs a C.E.O.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-up max-w-xl"
              style={{ animationDelay: '0.4s' }}
            >
              Fluid Networks' fully-integrated cloud technology solution enables any sized business 
              to achieve elevated levels of productivity from a single holistic service.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="btn-gradient group flex items-center justify-center gap-3">
                <span>Go to the Cloud</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-outline-gradient flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div 
              className="flex flex-wrap items-center gap-8 animate-fade-up"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-ocean-blue to-electric-purple flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">SOC 2 Certified</p>
                  <p className="text-xs text-gray-500">Enterprise Security</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-vibrant-teal to-ocean-blue flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">99.9% Uptime</p>
                  <p className="text-xs text-gray-500">Guaranteed SLA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Main Visual Card */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue via-electric-purple to-vibrant-teal rounded-3xl blur-2xl opacity-30 scale-105"></div>
              
              {/* Main Card */}
              <div className="relative glass-card p-8 rounded-3xl">
                {/* Dashboard Preview */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-ocean-blue/40 to-transparent rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-electric-purple/40 to-transparent rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-vibrant-teal/40 to-transparent rounded w-2/3"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-ocean-blue/20 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">500+</p>
                      <p className="text-xs text-gray-400">Clients</p>
                    </div>
                    <div className="bg-electric-purple/20 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">24/7</p>
                      <p className="text-xs text-gray-400">Support</p>
                    </div>
                    <div className="bg-vibrant-teal/20 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">15+</p>
                      <p className="text-xs text-gray-400">Years</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl float-animation">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-green to-vibrant-teal flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cloud Ready</p>
                      <p className="text-xs text-gray-500">Fully Managed</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 glass-card p-4 rounded-xl float-animation" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-purple to-rose-pink flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Protected</p>
                      <p className="text-xs text-gray-500">Multi-layer Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
