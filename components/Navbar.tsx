
import React from 'react';

const Navbar: React.FC = () => {
  const calendlyUrl = "https://calendly.com/austinjohn337/new-meeting";

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 purple-gradient rounded-lg flex items-center justify-center text-white font-bold italic">T</div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Truestayinsight</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-purple-600 transition-colors">About</a>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollTo('benefits'); }} className="hover:text-purple-600 transition-colors">Benefits</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="hover:text-purple-600 transition-colors">How it works</a>
          <a href="#platform" onClick={(e) => { e.preventDefault(); scrollTo('platform'); }} className="hover:text-purple-600 transition-colors">Platform</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="hover:text-purple-600 transition-colors">FAQ</a>
        </div>

        <button 
          onClick={() => window.open(calendlyUrl, '_blank')}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
        >
          Book a call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
