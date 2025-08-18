import React, { useState } from 'react';
import { Github, Youtube, Mail, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md text-white font-medium transition-colors ${
                  isSubmitting 
                    ? 'bg-indigo-700 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 p-2 bg-indigo-500/20 rounded-md text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-400 mb-1">Email</h4>
                    <a 
                      href="mailto:brobits00@gmail.com" 
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      brobits00@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 p-2 bg-indigo-500/20 rounded-md text-indigo-400">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-400 mb-1">Phone</h4>
                    <a 
                      href="tel:+251913172713" 
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      +251 913 172 713
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/brobits1234546" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.youtube.com/@VibeCode-Brobits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
