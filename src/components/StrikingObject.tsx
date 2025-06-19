
import React, { useState } from 'react';

const StrikingObject: React.FC = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
  };

  return (
    <section className="py-20 px-6 bg-neuro-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-neuro-blue/20 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-neuro-purple/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Interactive <span className="neuro-text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Click on the object below to experience our advanced ripple effects and micro-interactions.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="relative cursor-pointer group"
            onClick={handleClick}
          >
            {/* Ripple effects */}
            {ripples.map(ripple => (
              <div
                key={ripple.id}
                className="absolute pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-8 h-8 bg-neuro-blue/60 rounded-full animate-ripple"></div>
              </div>
            ))}

            {/* Main striking object */}
            <div className="relative w-64 h-64 mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neuro-blue to-neuro-purple opacity-20 animate-pulse-glow"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-neuro-purple/30 to-neuro-electric/30 backdrop-blur-sm"></div>
              
              {/* Inner core */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 group-hover:scale-105 transition-transform duration-300">
                {/* Center element */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-r from-neuro-blue to-neuro-purple flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white rounded-full opacity-90"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 left-8 w-2 h-2 bg-neuro-electric rounded-full animate-float opacity-80"></div>
              <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-neuro-blue rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 left-12 w-1 h-1 bg-neuro-purple rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-4 right-8 w-2 h-2 bg-neuro-electric rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neuro-blue/10 to-neuro-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">Click the object above to see ripple effects in action</p>
        </div>
      </div>
    </section>
  );
};

export default StrikingObject;
