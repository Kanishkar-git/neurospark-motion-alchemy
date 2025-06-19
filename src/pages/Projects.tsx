
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-neuro-dark overflow-x-hidden transition-colors duration-300">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      
      <div className="pt-16">
        <div className="py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="neuro-text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative projects and see how we bring ideas to life.
          </p>
        </div>
        <Portfolio />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
