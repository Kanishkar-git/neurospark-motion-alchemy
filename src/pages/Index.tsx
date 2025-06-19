
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AnimatedStats from '../components/AnimatedStats';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import BrandKits from '../components/BrandKits';
import StrikingObject from '../components/StrikingObject';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-neuro-dark text-white overflow-x-hidden">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Services />
        <AnimatedStats />
        <BrandKits />
        <StrikingObject />
        <Portfolio />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
