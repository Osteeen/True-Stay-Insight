
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-6 h-6 purple-gradient rounded flex items-center justify-center text-white text-[10px] font-bold">T</div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Truestayinsight</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-purple-600 transition-colors">About</a>
            <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollTo('benefits'); }} className="hover:text-purple-600 transition-colors">Benefits</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="hover:text-purple-600 transition-colors">How it works</a>
            <a href="#platform" onClick={(e) => { e.preventDefault(); scrollTo('platform'); }} className="hover:text-purple-600 transition-colors">Platform</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="hover:text-purple-600 transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:block">
            {/* Social icons removed per request */}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 pt-8 border-t border-gray-50">
          <p>Truestayinsight © 2026. All Rights Reserved.</p>
          <p>Designed with hospitality in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
