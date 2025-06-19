
import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface BrandKit {
  id: string;
  name: string;
  color: string;
  isSelected: boolean;
}

const BrandKits: React.FC = () => {
  const [brandKits, setBrandKits] = useState<BrandKit[]>([
    { id: '1', name: 'ECorp', color: 'bg-emerald-500', isSelected: false },
    { id: '2', name: 'ICorp', color: 'bg-orange-500', isSelected: false },
    { id: '3', name: 'The Agency', color: 'bg-red-500', isSelected: true },
  ]);

  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; cardId: string }>>([]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, kitId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y, cardId: kitId };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    // Toggle selection
    setBrandKits(prev => prev.map(kit => 
      kit.id === kitId ? { ...kit, isSelected: !kit.isSelected } : kit
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-neuro-dark via-purple-900/20 to-neuro-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-neuro-purple/10 to-neuro-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-neuro-blue/10 to-neuro-electric/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="neuro-text-gradient">Brand Kits</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose from our curated collection of brand kits to elevate your design experience.
          </p>
        </div>

        <div className="space-y-4">
          {brandKits.map((kit) => (
            <div
              key={kit.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 rounded-xl border ${
                kit.isSelected 
                  ? 'border-neuro-blue bg-neuro-blue/10' 
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              } backdrop-blur-lg p-6`}
              onClick={(e) => handleCardClick(e, kit.id)}
            >
              {/* Ripple effects */}
              {ripples
                .filter(ripple => ripple.cardId === kit.id)
                .map(ripple => (
                  <div
                    key={ripple.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-4 h-4 bg-neuro-blue/50 rounded-full animate-ripple"></div>
                  </div>
                ))}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Checkbox */}
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    kit.isSelected 
                      ? 'bg-neuro-blue border-neuro-blue' 
                      : 'border-white/40 hover:border-white/60'
                  }`}>
                    {kit.isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>

                  {/* Brand icon */}
                  <div className={`w-10 h-10 rounded-full ${kit.color} flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                  </div>

                  {/* Brand name */}
                  <h3 className="text-white text-lg font-semibold">{kit.name}</h3>
                </div>

                {/* Action icon */}
                <div className="text-white/60 hover:text-white/80 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>

              {/* Glow effect */}
              {kit.isSelected && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neuro-blue to-neuro-purple rounded-xl opacity-20 blur transition-opacity duration-300 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandKits;
