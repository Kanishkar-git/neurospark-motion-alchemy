
import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.8C16.16 26.74 20 22.55 20 17V7L12 2zm0 2.5L18.5 8v9c0 4.25-2.86 7.44-6.5 8.31C7.86 24.44 5 21.25 5 17V8L12 4.5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "UX/UI Design",
      description: "Crafting intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Research & Analysis",
        "Interactive Prototyping",
        "Design Systems",
        "Usability Testing"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Motion Design",
      description: "Bringing your interfaces to life with sophisticated animations and micro-interactions that delight users.",
      features: [
        "CSS Animations",
        "JavaScript Interactions",
        "Loading States",
        "Scroll Animations"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern technologies and best practices.",
      features: [
        "React & TypeScript",
        "Performance Optimization",
        "Responsive Design",
        "Modern CSS"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      ),
      title: "Performance Optimization",
      description: "Ensuring your digital products load fast and run smoothly across all devices and browsers.",
      features: [
        "Core Web Vitals",
        "Bundle Optimization",
        "Image Optimization",
        "Caching Strategies"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Brand Experience",
      description: "Creating cohesive digital brand experiences that resonate with your audience and build lasting connections.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Design Guidelines",
        "Brand Implementation"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Implementing comprehensive analytics to track user behavior and optimize your digital products.",
      features: [
        "User Behavior Tracking",
        "A/B Testing",
        "Performance Metrics",
        "Conversion Optimization"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-neuro-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-neuro-purple/10 to-neuro-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-neuro-electric/10 to-neuro-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            <span className="neuro-text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver comprehensive digital solutions 
            that transform your vision into extraordinary user experiences.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
