import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent font-bold text-lg">F</span>
            </div>
            <Link to="/" className="font-bold text-xl tracking-wide uppercase">
              Fide Forensic Foundation
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
