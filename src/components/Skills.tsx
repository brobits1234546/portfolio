import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const skills: Skill[] = [
  { 
    name: 'HTML', 
    level: 90, 
    icon: '🌐', 
    category: 'frontend' 
  },
  { 
    name: 'CSS', 
    level: 85, 
    icon: '🎨', 
    category: 'frontend' 
  },
  { 
    name: 'JavaScript', 
    level: 80, 
    icon: '📜', 
    category: 'frontend' 
  },
  { 
    name: 'TypeScript', 
    level: 75, 
    icon: '📘', 
    category: 'frontend' 
  },
  { 
    name: 'Python', 
    level: 85, 
    icon: '🐍', 
    category: 'backend' 
  },
  { 
    name: 'Tailwind CSS', 
    level: 90, 
    icon: '💨', 
    category: 'frontend' 
  },
  { 
    name: 'Godot (GDScript)', 
    level: 70, 
    icon: '🎮', 
    category: 'other' 
  },
  { 
    name: 'Electron', 
    level: 65, 
    icon: '⚛️', 
    category: 'tools' 
  },
  { 
    name: 'Vite', 
    level: 80, 
    icon: '⚡', 
    category: 'tools' 
  }
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${skills[index].level}%`;
                (bar as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          My Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-800 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="progress-bar h-full bg-indigo-500 rounded-full opacity-0 transition-all duration-1000 ease-out"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">
                  {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                </span>
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;