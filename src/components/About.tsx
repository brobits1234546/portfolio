import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            About Me
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Get to know me a little better
          </p>

          <div 
            ref={aboutRef}
            className="bg-gray-800 p-8 rounded-xl shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-square overflow-hidden rounded-xl mb-4">
                  <img
                    src="../Profile.jpg" 
                    alt="Adonay Ayneabeba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Age</span>
                    <span className="text-white font-medium">16</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email</span>
                    <a 
                      href="mailto:brobits00@gmail.com" 
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      brobits00@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Phone</span>
                    <a 
                      href="tel:+251913172713" 
                      className="text-white font-medium"
                    >
                      +251 913 172 713
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Young Developer with Big Dreams
                </h3>
                
                <p className="text-gray-300">
                  I'm Adonay, a 16-year-old developer passionate about creating solutions that make a difference. My journey in coding started when I was 12, and I've been exploring various technologies and frameworks ever since.
                </p>
                
                <p className="text-gray-300">
                  What drives me is the ability to turn ideas into reality through code. Whether it's building web applications, creating games, or developing desktop solutions, I enjoy the process of problem-solving and bringing concepts to life.
                </p>
                
                <p className="text-gray-300">
                  I'm constantly learning and expanding my skill set. Currently, I'm focused on deepening my knowledge of web development with React and TypeScript, while also exploring game development with Godot Engine.
                </p>
                
                <p className="text-gray-300">
                  When I'm not coding, I enjoy sharing my knowledge through tutorials on my YouTube channel and contributing to open-source projects. I believe in the power of technology to solve real-world problems and am excited to be part of that journey.
                </p>
                
                <div className="pt-4">
                  <a 
                    href="/resume.pdf" 
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors font-medium"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;