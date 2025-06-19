
import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neuro-dark flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-neuro-blue/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-neuro-blue border-t-transparent animate-loader-spin"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-neuro-blue to-neuro-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">NS</span>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-neuro-electric rounded-full animate-float"></div>
          <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-neuro-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-2 -left-6 w-1 h-1 bg-neuro-blue rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold mb-4">
          <span className="neuro-text-gradient">NeuroSpark</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-white/60 mb-8 text-lg">Elevating UX Through Motion & Meaning</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-white/40 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neuro-blue to-neuro-purple transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-white/60">Initializing experience</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-neuro-blue rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-neuro-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-neuro-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
