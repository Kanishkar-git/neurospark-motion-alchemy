
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Head of Design",
      company: "TechFlow Inc",
      content: "NeuroSpark transformed our user experience completely. The attention to detail and innovative animations brought our product to life in ways we never imagined.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Product Manager",
      company: "Digital Dynamics",
      content: "The team's expertise in motion design and user psychology resulted in a 40% increase in user engagement. Truly exceptional work.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "CEO",
      company: "InnovateLab",
      content: "NeuroSpark doesn't just create designs; they craft experiences. Our conversion rates improved by 60% after their redesign.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO",
      company: "FutureScale",
      content: "The perfect blend of creativity and technical excellence. Their animations are not just beautiful but also performance-optimized.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-neuro-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-neuro-purple/10 to-neuro-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-r from-neuro-electric/10 to-neuro-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What <span className="neuro-text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>

        {/* Carousel testimonials */}
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="neuro-card p-8 md:p-12 text-center transform transition-all duration-500 ripple-effect">
                  {/* Quote icon */}
                  <div className="text-neuro-blue mb-6">
                    <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-neuro-blue/30"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-neuro-blue text-sm">{testimonial.role}</p>
                      <p className="text-white/60 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white/20 hover:bg-neuro-blue/20" />
          <CarouselNext className="text-white border-white/20 hover:bg-neuro-blue/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
