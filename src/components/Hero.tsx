
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-neuro-gradient">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,212,255,0.3) 0%, transparent 50%)`,
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-neuro-blue/20 to-neuro-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-neuro-electric/20 to-neuro-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-neuro-purple/20 to-neuro-electric/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Neuro</span>
            <span className="block neuro-text-gradient">Spark</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevating UX Through Motion & Meaning
          </p>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Crafting extraordinary digital experiences with cutting-edge animations, 
            intuitive interactions, and purposeful design that captivates and converts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="neuro-button ripple-effect group">
              <span className="relative z-10">Explore Our Work</span>
            </button>
            
            <button className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:border-neuro-blue hover:bg-neuro-blue/10 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neuro-dark/20"></div>
    </section>
  );
};

export default Hero;
