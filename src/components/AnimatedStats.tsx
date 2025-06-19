
import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat: React.FC<StatProps> = ({ number, suffix = '', label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startCount = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (number - startCount) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, number, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative">
        <div className="text-5xl md:text-6xl font-bold mb-2 neuro-text-gradient">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-neuro-blue/20 to-neuro-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
      <p className="text-white/70 text-lg font-medium">{label}</p>
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  const stats = [
    { number: 250, suffix: '+', label: 'Projects Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 50, suffix: '+', label: 'Team Members' },
    { number: 5, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-neuro-dark via-neuro-gray to-neuro-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-neuro-blue/10 to-neuro-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-neuro-electric/10 to-neuro-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="neuro-text-gradient">Innovators</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and innovation in digital experiences.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000 + index * 200}
            />
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-neuro-blue to-neuro-purple rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
