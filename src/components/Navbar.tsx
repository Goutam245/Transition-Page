import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import FluidNetworksLogo from './FluidNetworksLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Cloud Enabled Office™', href: '#solutions' },
    { label: 'Services & Solutions', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
            <FluidNetworksLogo className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 text-[15px] font-medium transition-all duration-300 hover:text-ocean-blue relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-blue to-electric-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+18055856350"
              className="flex items-center gap-2 text-gray-600 text-sm font-medium hover:text-ocean-blue transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ocean-blue to-electric-purple flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              (805) 585-6350
            </a>
            <button className="btn-gradient text-sm px-6 py-2.5">
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-ocean-blue transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-[999] transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-ocean-blue transition-colors py-3 border-b border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-gray-100 my-4" />
          <a
            href="tel:+18055856350"
            className="flex items-center gap-3 text-gray-600 font-medium py-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ocean-blue to-electric-purple flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            (805) 585-6350
          </a>
          <button className="btn-gradient w-full mt-4 text-center">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
