import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: 'JR Movies',
    description: 'A modern movie streaming platform with a sleek interface and comprehensive movie database.',
    url: 'https://jrmovies.onrender.com/',
    tags: ['React', 'Node.js', 'MongoDB', 'Streaming'],
    links: {
      demo: 'https://jrmovies.onrender.com/',
    }
  },
  {
    title: 'HGame Store',
    description: 'An online gaming marketplace featuring a wide selection of games and interactive user experience.',
    url: 'https://hgamestore.netlify.app/',
    tags: ['React', 'TypeScript', 'E-commerce', 'Gaming'],
    links: {
      demo: 'https://hgamestore.netlify.app/',
    }
  },
  {
    title: 'Potato Disease Detector AI',
    description: 'An AI-powered web application that detects diseases in potato plants using machine learning.',
    url: 'https://boleproject3.vercel.app/',
    tags: ['AI/ML', 'React', 'TypeScript', 'Computer Vision'],
    links: {
      demo: 'https://boleproject3.vercel.app/',
    }
  },
  {
    title: 'Selling Management',
    description: 'A comprehensive sales management system for tracking inventory and sales performance.',
    url: 'https://boleproject2.vercel.app/',
    tags: ['React', 'Dashboard', 'Analytics', 'Management'],
    links: {
      demo: 'https://boleproject2.vercel.app/',
    }
  },
  {
    title: 'Bole EduSite',
    description: 'An educational platform designed to enhance learning experiences and student engagement.',
    url: 'https://boleproject.vercel.app/',
    tags: ['React', 'Education', 'Learning Management', 'UI/UX'],
    links: {
      demo: 'https://boleproject.vercel.app/',
    }
  }
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('translate-y-0', 'opacity-100');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          My Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on that showcase my skills and interests.
        </p>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card transform translate-y-12 opacity-0 transition-all duration-700 ease-out bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <iframe 
                  src={project.url}
                  title={project.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                    >
                      Visit Site
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;