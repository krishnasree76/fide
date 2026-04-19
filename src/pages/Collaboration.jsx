import React from 'react';
import { 
  Network, UserPlus, Landmark, Users, MapPin, Briefcase, Mail, Phone, GraduationCap 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Collaboration = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/collaboration_hero.png" 
            alt="Professionals collaborating in forensic justice" 
            className="w-full h-full object-cover opacity-15 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
                Building the infrastructure for <br className="hidden md:block"/><span className="text-accent">independent forensic justice.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>The gap in India's forensic justice system will not be closed by a single institution.</p>
                <p className="mt-4">We are seeking scientists, legal professionals, and strategic partners who understand what is at stake — and are prepared to safeguard scientific truth in our courts.</p>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* SECTION: INDIVIDUAL OPPORTUNITIES */}
      <section className="py-20 bg-background border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                 <UserPlus className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">INDIVIDUAL OPPORTUNITIES</h2>
           </motion.div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12">
              
              {/* Profile 1 */}
              <motion.div variants={fadeInUp} className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-primary px-8 py-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">Retired Forensic Scientists and Forensic Faculty</h3>
                 </div>
                 <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 border-r border-gray-100 pr-4">
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Profile</p>
                       <p className="text-text/80 text-lg">Retired senior scientists or forensic faculty from Central and State FSLs, universities, and accredited institutions — with specialisation in DNA analysis, serology, biological evidence, toxicology, digital forensics, or cybercrime.</p>
                    </div>
                    <div className="md:col-span-1 border-r border-gray-100 pr-4">
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Key Responsibilities</p>
                       <p className="text-text/80 text-lg border-l-2 border-accent pl-4"><strong className="text-primary">Active casework.</strong> Empanelled experts conduct structured technical audits, author court-filed Expert Opinion Reports, and appear as expert witnesses at any judicial level upon request.</p>
                    </div>
                    <div className="md:col-span-1">
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Model</p>
                       <p className="text-text/80 text-lg">Per-case engagement fees with full legal and administrative support.</p>
                    </div>
                 </div>
              </motion.div>

              {/* Profile 2 */}
              <motion.div variants={fadeInUp} className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-primary px-8 py-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">State Representatives</h3>
                 </div>
                 <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-r border-gray-100 pr-4">
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Profile</p>
                       <p className="text-text/80 text-lg">Established legal professionals, retired judicial officers, senior criminal justice practitioners, or individuals with substantive experience in the forensic or justice sector.</p>
                    </div>
                    <div>
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Key Responsibilities</p>
                       <p className="text-text/80 text-lg border-l-2 border-accent pl-4">Regional anchor for the Foundation's operations — building structured relationships with State Legal Services Authorities, managing the state-level case referral pipeline, and overseeing Court-Level Associates across the jurisdiction.</p>
                    </div>
                 </div>
              </motion.div>

              {/* Profile 3 */}
              <motion.div variants={fadeInUp} className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                 <div className="bg-primary px-8 py-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">Court-Level Case Associates</h3>
                 </div>
                 <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-r border-gray-100 pr-4">
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Profile</p>
                       <p className="text-text/80 text-lg">Forensic science students, law graduates, paralegals, junior advocates, or motivated individuals from any discipline with consistent daily presence in District and Sessions courts.</p>
                    </div>
                    <div>
                       <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Key Responsibilities</p>
                       <p className="text-text/80 text-lg border-l-2 border-accent pl-4">Monitoring cause lists for matters involving forensic evidence, establishing direct contact with defence counsel in relevant cases, and facilitating the secure and timely exchange of FSL reports and case documents for Foundation review.</p>
                    </div>
                 </div>
              </motion.div>

           </motion.div>
        </div>
      </section>

      {/* SECTION: INSTITUTIONAL PARTNERSHIPS */}
      <section className="py-20 bg-white border-b border-gray-200 overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                 <Landmark className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">INSTITUTIONAL PARTNERSHIPS</h2>
           </motion.div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="bg-background p-10 rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                 <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Legal Aid NGOs & <br className="hidden sm:block"/>Undertrial Support Organisations</h3>
                 </div>
                 <p className="text-text/80 text-lg leading-relaxed mt-4">
                    Formal MOUs enabling direct, zero-cost forensic reviews for your clients — bypassing complex referral chains. Co-delivered forensic literacy training available for your legal teams.
                 </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background p-10 rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                 <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold text-primary">Law Schools & <br className="hidden sm:block"/>Legal Aid Clinics</h3>
                 </div>
                 <p className="text-text/80 text-lg leading-relaxed mt-4">
                    Integration of forensic evidence training into clinical legal education curricula, expert panel access for student-handled cases, and joint research on forensic justice in India.
                 </p>
              </motion.div>
           </div>
           
        </motion.div>
      </section>

      {/* SECTION: EXPRESSION OF INTEREST FORM */}
      <section className="py-24 bg-secondary relative text-white overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Expression of Interest</h2>
              <p className="text-xl text-gray-300 font-light border-b border-gray-700 pb-8">
                We are seeking alignment, not volume. We want professionals who have spent careers inside laboratories and courts, and who know exactly where the systemic gaps lie.
              </p>
              <p className="mt-8 text-lg font-medium text-gray-200">Please provide the following details:</p>
           </motion.div>
           
           <motion.div variants={fadeInUp} className="bg-white text-text rounded-sm shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Category</label>
                    <div className="relative">
                       <select className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                          <option value="">Select Category</option>
                          <option value="expert">Expert Panel (Retired Scientist/Faculty)</option>
                          <option value="state_rep">State Representative</option>
                          <option value="court_assoc">Court Associate</option>
                          <option value="institutional">Institutional Partner</option>
                       </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Full Name</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <UserPlus className="h-5 w-5 text-gray-400" />
                           </div>
                           <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Your Name" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Current or Former Designation</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Briefcase className="h-5 w-5 text-gray-400" />
                           </div>
                           <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="e.g. Retired FSL Director" />
                        </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Email</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                           </div>
                           <input type="email" className="w-full bg-background border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="email@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Phone Number</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-gray-400" />
                           </div>
                           <input type="tel" className="w-full bg-background border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="+91 9490345123" />
                        </div>
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Location</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                       </div>
                       <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="City & State" />
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Brief Statement of Expertise</label>
                    <textarea rows="4" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Summary of your background and potential contribution..."></textarea>
                 </div>

                 <div className="pt-4">
                     <button type="button" className="w-full bg-primary hover:bg-gray-800 text-white font-bold py-4 rounded-sm transition-colors text-lg flex items-center justify-center gap-2 uppercase tracking-wider">
                       Submit Expression of Interest
                     </button>
                 </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                 <p className="text-sm text-gray-500 font-medium">
                   Note: All expressions of interest are received in confidence and reviewed solely by Foundation leadership and responds within 7 working days.
                 </p>
              </div>
           </motion.div>
           
        </motion.div>
      </section>
      
    </div>
  );
};

export default Collaboration;
