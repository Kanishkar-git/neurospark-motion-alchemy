
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AnimatedStats from '../components/AnimatedStats';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-neuro-dark text-white overflow-x-hidden">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <main>
        <Hero />
        <Services />
        <AnimatedStats />
        <Portfolio />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
