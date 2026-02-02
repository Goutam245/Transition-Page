import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import FluidNetworksLogo from './FluidNetworksLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Client Profiles', href: '#' },
    ],
    services: [
      { label: 'Managed IT', href: '#' },
      { label: 'Cyber Security', href: '#' },
      { label: 'Cloud Solutions', href: '#' },
      { label: 'Data Backup', href: '#' },
    ],
    resources: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'System Status', href: '#' },
      { label: 'Contact Support', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean-blue via-electric-purple to-vibrant-teal"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <FluidNetworksLogo className="h-12 w-auto mb-6" />
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Your total IT partner delivering superior systems backed by steadfast support. 
              Cloud Enabled Office™ technology for businesses of all sizes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+18055856350" className="flex items-center gap-3 text-gray-400 hover:text-ocean-blue transition-colors">
                <div className="w-8 h-8 rounded-lg bg-ocean-blue/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-ocean-blue" />
                </div>
                (805) 585-6350
              </a>
              <a href="mailto:info@fluidnetworks.com" className="flex items-center gap-3 text-gray-400 hover:text-electric-purple transition-colors">
                <div className="w-8 h-8 rounded-lg bg-electric-purple/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-electric-purple" />
                </div>
                info@fluidnetworks.com
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-vibrant-teal/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-vibrant-teal" />
                </div>
                California, USA
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Fluid Networks. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: '#', color: 'hover:text-ocean-blue' },
                { icon: Twitter, href: '#', color: 'hover:text-vibrant-teal' },
                { icon: Facebook, href: '#', color: 'hover:text-electric-purple' },
                { icon: Youtube, href: '#', color: 'hover:text-rose-pink' },
              ].map(({ icon: Icon, href, color }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className={`w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
