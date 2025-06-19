
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const services = [
    { label: 'UX/UI Design', href: '#' },
    { label: 'Motion Design', href: '#' },
    { label: 'Frontend Development', href: '#' },
    { label: 'Brand Strategy', href: '#' },
  ];

  return (
    <footer className="bg-neuro-dark border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-neuro-blue/5 to-neuro-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-neuro-electric/5 to-neuro-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold neuro-text-gradient mb-2">NeuroSpark</h3>
              <p className="text-white/60 text-sm">Elevating UX Through Motion & Meaning</p>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              We craft extraordinary digital experiences with cutting-edge animations, 
              intuitive interactions, and purposeful design that captivates and converts.
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-white/60">
              <p>hello@neurospark.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-neuro-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-neuro-blue transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-white/60">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white/60 hover:text-neuro-blue transition-colors duration-200 hover:scale-110 transform"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="flex items-center space-x-4">
            <span className="text-white/60 text-sm">Stay updated:</span>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/40 focus:outline-none focus:border-neuro-blue"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-neuro-blue to-neuro-purple text-white rounded-r-lg hover:scale-105 transition-transform duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            © {currentYear} NeuroSpark. All rights reserved. Crafted with 💙 for extraordinary experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
