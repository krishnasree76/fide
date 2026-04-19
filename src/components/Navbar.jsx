import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 z-50">
            <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent font-bold text-lg">F</span>
            </div>
            <Link to="/" onClick={closeMenu} className="font-bold text-lg sm:text-xl tracking-wide uppercase">
              Fide Forensic Foundation
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
            <Link to="/lawyers" className="text-sm font-medium hover:text-accent transition-colors">Lawyers</Link>
            <Link to="/institutions" className="text-sm font-medium hover:text-accent transition-colors">Institutions</Link>
            <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
            <Link to="/resources" className="text-sm font-medium hover:text-accent transition-colors">Resources</Link>
            <Link to="/collaboration" className="text-sm font-medium hover:text-accent transition-colors">Collaboration</Link>
            <Link to="/contact" className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:-translate-y-0.5 transition-transform shadow-sm">
              Submit a Case
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex lg:hidden items-center z-50">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-accent focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-primary/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 pt-24 px-6 pb-6 overflow-y-auto`}
      >
        <div className="flex flex-col space-y-6 text-center">
          <Link to="/" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Home</Link>
          <Link to="/lawyers" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Lawyers</Link>
          <Link to="/institutions" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Institutions</Link>
          <Link to="/services" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Services</Link>
          <Link to="/resources" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Resources</Link>
          <Link to="/collaboration" onClick={closeMenu} className="text-xl font-medium hover:text-accent transition-colors border-b border-gray-700 pb-2">Collaboration</Link>
          <div className="pt-4">
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="inline-block px-8 py-3 bg-accent text-white text-lg font-bold rounded-sm shadow-md"
            >
              Submit a Case
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
