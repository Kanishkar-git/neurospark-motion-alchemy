
import React, { useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay = 0 }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 700);
  };

  return (
    <div 
      className="neuro-card p-8 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      {/* Enhanced ripple effects */}
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
          <div className="w-6 h-6 bg-neuro-blue/40 rounded-full animate-ripple"></div>
          <div className="w-4 h-4 bg-neuro-purple/30 rounded-full animate-ripple" style={{ animationDelay: '0.1s' }}></div>
        </div>
      ))}

      {/* Icon with enhanced animation */}
      <div className="text-neuro-blue mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neuro-blue transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>

      {/* Features with staggered animation */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="w-1.5 h-1.5 bg-neuro-electric rounded-full mr-3 flex-shrink-0 group-hover:bg-neuro-blue transition-colors duration-300"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Enhanced hover effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neuro-blue/5 to-neuro-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      {/* Multiple glow layers */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neuro-blue to-neuro-purple rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-neuro-purple to-neuro-electric rounded-xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-500 -z-20"></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neuro-blue/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ServiceCard;
