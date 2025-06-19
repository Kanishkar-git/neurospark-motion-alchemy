
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Modern e-commerce platform with advanced animations and micro-interactions",
      technologies: ["React", "TypeScript", "Framer Motion"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: "Intuitive mobile banking app with seamless user experience",
      technologies: ["React Native", "Animated API"],
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Analytics dashboard with real-time data visualization",
      technologies: ["Vue.js", "D3.js", "GSAP"],
      link: "#"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop",
      description: "Complete brand identity design with motion graphics",
      technologies: ["After Effects", "Figma"],
      link: "#"
    },
    {
      id: 5,
      title: "Fitness App UI",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Motivational fitness app with gamification elements",
      technologies: ["Flutter", "Lottie"],
      link: "#"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Professional corporate website with scroll-triggered animations",
      technologies: ["Next.js", "GSAP", "CSS Grid"],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-neuro-dark to-neuro-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-neuro-blue/5 to-neuro-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-neuro-electric/5 to-neuro-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="neuro-text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our latest projects showcasing innovative design solutions and cutting-edge technology implementations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-neuro-blue to-neuro-purple text-white'
                  : 'glass-morphism text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neuro-dark via-neuro-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-neuro-blue/20 text-neuro-blue text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View project button */}
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neuro-blue to-neuro-purple text-white rounded-lg hover:scale-105 transition-transform duration-200">
                      <span className="mr-2">View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neuro-blue to-neuro-purple rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
