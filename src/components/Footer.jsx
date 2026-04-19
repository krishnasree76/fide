import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16 border-t border-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-gray-700 pb-12 mb-8">
           
           {/* Brand & Mission Line */}
           <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">F</span>
                </div>
                <span className="font-bold text-2xl tracking-wide uppercase">Fide Forensic</span>
              </div>
              <p className="text-gray-300 text-lg mb-2">
                India's first independent forensic review institution.
              </p>
              <p className="text-accent text-lg font-medium mb-4">
                Empowering the defense with scientific truth.
              </p>
              <span className="bg-white/10 px-4 py-1.5 rounded-sm tracking-[0.2em] text-sm font-bold border border-white/5">— PAN INDIA —</span>
           </div>

           {/* Navigation Grid */}
           <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest block">Navigate</h4>
             <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-left">
               <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
               <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
               <Link to="/lawyers" className="text-gray-400 hover:text-white transition-colors">For Lawyers</Link>
               <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link>
               <Link to="/institutions" className="text-gray-400 hover:text-white transition-colors">Legal Aid & Institutions</Link>
               <Link to="/collaboration" className="text-gray-400 hover:text-white transition-colors">Collaborate</Link>
             </div>
           </div>

           {/* Contact & Socials */}
           <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest hidden md:block">Contact Us</h4>
             <div className="flex items-center gap-3 mb-3 text-gray-300">
                <Mail className="w-5 h-5 text-accent" />
                <span>contact@fideforensic.in</span>
             </div>
             <div className="flex items-center gap-3 mb-3 text-gray-300">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91 9490345123</span>
             </div>
             <div className="flex items-start gap-3 mb-8 text-gray-300">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Hyderabad, Telangana, India</span>
             </div>
             
             {/* Social Links */}
             <div className="flex items-center gap-4">
               <a href="#" className="text-white bg-gray-800 hover:bg-accent p-3 rounded-full transition-colors"><FaLinkedin className="w-5 h-5" /></a>
               <a href="#" className="text-white bg-gray-800 hover:bg-accent p-3 rounded-full transition-colors"><FaTwitter className="w-5 h-5" /></a>
               <a href="#" className="text-white bg-gray-800 hover:bg-accent p-3 rounded-full transition-colors"><FaInstagram className="w-5 h-5" /></a>
               <a href="#" className="text-white bg-gray-800 hover:bg-accent p-3 rounded-full transition-colors"><FaFacebook className="w-5 h-5" /></a>
             </div>
           </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center space-y-4">
           <p className="text-accent font-semibold tracking-wide text-sm bg-accent/10 px-5 py-2 border border-accent/20 rounded-sm inline-block">
              Registered Section 8 Not-for-Profit Entity
           </p>
           
           <div className="text-gray-500 text-sm flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-6">
             <span>&copy; {new Date().getFullYear()} Fide Forensic Foundation. All rights reserved.</span>
             <span className="hidden md:inline">|</span>
             <div className="flex items-center gap-4">
               <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
               <span className="px-1">•</span>
               <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
             </div>
           </div>
           
           <div className="w-full max-w-4xl border-t border-gray-800 pt-6 mt-4">
             <p className="text-gray-600 text-xs">
               <strong className="text-gray-500">Disclaimer:</strong> Fide Forensic Foundation provides independent scientific review and expert testimony. Nothing on this website constitutes legal advice.
             </p>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
