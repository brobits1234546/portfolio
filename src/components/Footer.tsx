import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-white hover:text-indigo-400 transition-colors"
            >
              Adonay
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Adonay Ayneabeba. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;