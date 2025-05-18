import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gray-900 flex flex-col justify-center px-4 pt-20"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-4xl z-10">
        <h2 className="animate-on-scroll opacity-0 text-indigo-400 font-medium mb-2 tracking-wider">
          DEVELOPER & CODER
        </h2>
        <h1 className="animate-on-scroll opacity-0 delay-150 text-5xl md:text-7xl font-bold text-white mb-4">
          Adonay Ayneabeba
        </h1>
        <p className="animate-on-scroll opacity-0 delay-300 text-xl text-gray-300 max-w-2xl mb-8">
          A passionate 16-year-old developer with expertise in web development, 
          game creation, and building innovative solutions using modern technologies.
        </p>
        <div className="animate-on-scroll opacity-0 delay-500 flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors font-medium"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 rounded-md transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-8 flex justify-center">
        <a 
          href="#skills" 
          className="animate-bounce p-2 rounded-full bg-indigo-500/20 text-indigo-400"
          aria-label="Scroll to skills section"
        >
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-b from-indigo-600/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;