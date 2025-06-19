
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold neuro-text-gradient">
            NeuroSpark
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-neuro-blue'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full glass-morphism hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <svg 
                className={`absolute inset-0 w-5 h-5 text-yellow-400 transition-all duration-300 ${
                  theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 1l3 6h-6l3-6zm0 22l-3-6h6l-3 6zM1 12l6-3v6l-6-3zm22 0l-6 3v-6l6 3z"/>
              </svg>
              <svg 
                className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
              </svg>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full glass-morphism hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-neuro-blue'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
