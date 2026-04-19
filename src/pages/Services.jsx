import React from 'react';
import { 
  FileSearch, FileSignature, Target, UserCheck, 
  PhoneCall, Scale, BookOpen, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
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
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services_hero.png" 
            alt="Forensic Microscope and Legal Document" 
            className="w-full h-full object-cover opacity-15 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
            <motion.div 
               className="max-w-4xl"
               initial="hidden" animate="visible" variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
                Independent forensic review — <br className="hidden md:block"/><span className="text-accent">from the laboratory report to the witness box.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>Every service is delivered by empanelled senior forensic scientists with decades of casework experience at India's premier institutions.</p>
                <p className="mt-4">All reports include citations to applicable statutes, ISO/IEC standards, peer-reviewed literature, and relevant equipment protocols.</p>
                <p className="mt-8 text-xl text-white font-semibold flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Deliverables are calibrated to your court's calendar.
                </p>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* SERVICE 1 & 2 */}
      <section className="py-20 bg-background border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* FSL REPORT AUDIT */}
           <motion.div 
             className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 md:p-12 mb-12 relative overflow-hidden"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] flex items-start justify-end p-6">
                <FileSearch className="w-10 h-10 text-primary/40" />
             </div>
             
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center relative z-10">1</div>
                 <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight relative z-10">FSL REPORT AUDIT: <br className="md:hidden"/><span className="text-gray-600 font-medium text-xl md:text-2xl">Fide Forensic's Seven-Point FSL Audit Protocol</span></h2>
             </div>
             
             <div className="pl-0 md:pl-16 relative z-10">
                 <h3 className="text-primary font-bold text-lg uppercase tracking-wider mb-6">Examination Areas:</h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-10">
                    {[
                      { title: "Chain of Custody", desc: "Integrity of the evidence trail from scene to laboratory" },
                      { title: "Protocol Compliance", desc: "Collection, packaging, and preservation standards" },
                      { title: "Accreditation & Competency", desc: "Laboratory certification and analyst qualifications" },
                      { title: "Data Integrity", desc: "Electropherograms, chromatograms, and raw instrument output" },
                      { title: "Methodological Validity", desc: "Scientific reliability and current standing of applied techniques" },
                      { title: "Interpretive Logic", desc: "Whether conclusions are supported by the actual data" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                        <div className="text-lg"><strong className="text-primary">{item.title}</strong> — {item.desc}</div>
                      </div>
                    ))}
                    <div className="flex items-start gap-3 md:col-span-2">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <div className="text-lg"><strong className="text-primary">Disclosure Scrutiny</strong> — Completeness and transparency of the filed report</div>
                    </div>
                 </div>
                 
                 <div className="bg-background p-6 border-l-4 border-accent rounded-r-sm">
                    <p className="text-primary font-bold"><span className="text-gray-500 uppercase text-sm tracking-wider block mb-1">Deliverable & Timeline</span></p>
                    <p className="text-lg font-medium text-text mt-1">Formal Expert Review Report for court submission.</p>
                    <p className="mt-2 text-primary font-bold">Timeline: <span className="font-normal text-text">7–10 working days</span> | <span className="text-accent">Urgent: 24–48 hours</span></p>
                 </div>
             </div>
           </motion.div>

           {/* EXPERT OPINION REPORT */}
           <motion.div 
             className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 md:p-12 relative overflow-hidden"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] flex items-start justify-end p-6">
                <FileSignature className="w-10 h-10 text-primary/40" />
             </div>
             
             <div className="flex items-center gap-4 mb-6 relative z-10">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center">2</div>
                 <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">EXPERT OPINION REPORT</h2>
             </div>
             
             <div className="pl-0 md:pl-16 space-y-6 text-lg text-text/80 leading-relaxed max-w-4xl relative z-10">
                <p>
                  A formal signed document authored by an empanelled senior scientist — an independent scientific opinion on contested evidence, not a summary of the prosecution's report.
                </p>
                <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-3 border border-primary/20 rounded-sm">
                  Admissible under Section 45 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.
                </div>
                
                <div className="mt-6">
                   <p className="font-bold text-primary mb-3">Covers:</p>
                   <div className="flex flex-wrap gap-x-3 gap-y-3 mb-6">
                      {["DNA Evidence", "Biological & Serological Evidence", "Digital & Electronic Evidence", "Toxicology & Chemical Analysis", "Questioned Documents"].map((item, idx) => (
                        <span key={idx} className="bg-background px-4 py-2 rounded-sm border border-gray-200 text-sm font-medium">{item}</span>
                      ))}
                   </div>
                </div>
                
                <div className="bg-background p-6 border-l-4 border-accent rounded-r-sm mt-8 border-t border-r border-b border-gray-100">
                    <p className="text-primary font-bold"><span className="text-gray-500 uppercase text-sm tracking-wider block mb-1">Deliverable & Timeline</span></p>
                    <p className="text-lg font-medium text-text mt-1">Signed Expert Opinion Report</p>
                    <p className="mt-2 text-primary font-bold">Timeline: <span className="font-normal text-text">10–14 working days</span></p>
                 </div>
             </div>
           </motion.div>
           
        </div>
      </section>

      {/* SERVICE 3 & 4 */}
      <section className="py-20 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* CROSS-EXAMINATION BRIEF */}
           <motion.div 
             className="bg-background rounded-sm border border-gray-200 p-8 md:p-10 relative shadow-sm"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center">3</div>
                 <h2 className="text-2xl font-bold text-primary tracking-tight">CROSS-EXAMINATION BRIEF</h2>
             </div>
             
             <div className="space-y-6 text-text/80 text-lg">
                <p>A case-specific tactical guide for defence counsel. <strong className="text-primary font-bold">We translate the science into precise legal leverage.</strong></p>
                
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm mt-8">Strategic Targets:</h3>
                <ul className="space-y-4">
                   {[
                     "Procedural lapses in sample handling and chain of custody", 
                     "Laboratory accreditation and analyst qualification gaps",
                     "Conclusions that exceed the actual supporting data",
                     "Statistical omissions or errors in probability calculations",
                     "Missing technical records in the filed report"
                   ].map((item, idx) => (
                     <li key={idx} className="flex gap-3"><Target className="w-6 h-6 text-accent flex-shrink-0" /> <span className="pt-0.5">{item}</span></li>
                   ))}
                </ul>
                
                <div className="pt-6 border-t border-gray-300 mt-8">
                    <p className="text-primary font-bold">Deliverable: <span className="font-medium text-text">Structured courtroom-ready cross-examination guide</span></p>
                    <p className="mt-2 text-primary font-bold">Timeline: <span className="font-medium text-text">3–5 working days <span className="italic font-normal text-gray-500">(or delivered alongside the FSL Audit)</span></span></p>
                 </div>
             </div>
           </motion.div>

           {/* JUDICIAL SUMMARY */}
           <motion.div 
             className="bg-background rounded-sm border border-gray-200 p-8 md:p-10 relative shadow-sm flex flex-col"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center">4</div>
                 <h2 className="text-2xl font-bold text-primary tracking-tight">JUDICIAL SUMMARY</h2>
             </div>
             
             <div className="space-y-6 text-text/80 text-lg flex flex-col h-full">
                <p className="leading-relaxed">
                  A plain-language brief that clarifies for the Court what the forensic evidence establishes — and where its limitations lie. 
                  <strong className="text-primary font-bold"> Free of jargon.</strong> Designed for submission alongside an Expert Opinion Report, or independently.
                </p>
                
                <div className="bg-white p-6 border-l-4 border-primary rounded-r-sm shadow-sm my-6">
                  <p className="font-medium text-primary">Particularly relevant for bail hearings, Sessions trials, and appellate proceedings challenging a conviction.</p>
                </div>
                
                <div className="pt-6 border-t border-gray-300 mt-auto">
                    <p className="text-primary font-bold">Deliverable: <span className="font-medium text-text">1–2 page judicial summary</span></p>
                    <p className="mt-2 text-primary font-bold">Timeline: <span className="font-medium text-text">3–5 working days</span></p>
                 </div>
             </div>
           </motion.div>
           
        </div>
      </section>

      {/* SERVICE 5 & 6 */}
      <section className="py-20 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* EXPERT WITNESS APPEARANCE */}
           <motion.div 
             className="bg-gray-800/50 rounded-sm border border-gray-700 p-8 md:p-10"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-transparent border-2 border-accent text-accent font-bold text-2xl rounded-sm flex items-center justify-center">5</div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">EXPERT WITNESS APPEARANCE</h2>
             </div>
             
             <div className="space-y-6 text-gray-300 text-lg">
                <p className="leading-relaxed">Our empanelled scientists provide testimony across India — Trial Courts, Sessions Courts, High Courts, and the Supreme Court. In person or via video conference.</p>
                
                <h3 className="text-accent font-bold tracking-wider text-sm uppercase mt-8">Litigation Support Includes:</h3>
                <ul className="space-y-4">
                   {[
                     "Pre-hearing conference with defence counsel",
                     "Structured examination-in-chief preparation",
                     "Cross-examination under Section 45, BSA 2023",
                     "Post-hearing technical affidavits or clarifications as directed by the Court"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3"><UserCheck className="w-6 h-6 text-gray-400 flex-shrink-0" /> <span className="pt-0.5">{item}</span></li>
                   ))}
                </ul>
             </div>
           </motion.div>

           {/* PRE-TRIAL CONSULTATION */}
           <motion.div 
             className="bg-gray-800/50 rounded-sm border border-gray-700 p-8 md:p-10 flex flex-col h-full"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-transparent border-2 border-accent text-accent font-bold text-2xl rounded-sm flex items-center justify-center">6</div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">PRE-TRIAL CONSULTATION</h2>
             </div>
             
             <div className="space-y-6 text-gray-300 text-lg flex flex-col h-full">
                <p className="text-xl font-medium text-white border-l-2 border-accent pl-5 py-2 leading-relaxed">The earliest — and most strategic — point of intervention, before charges are framed or forensic evidence is exhibited.</p>
                
                <h3 className="text-accent font-bold tracking-wider text-sm uppercase mt-6">What It Covers:</h3>
                <ul className="space-y-4 mb-8">
                   {[
                     "Establishing precisely what the forensic data proves versus what the prosecution claims",
                     "Identifying vulnerabilities before trial begins",
                     "Determining whether a full Expert Opinion Report is warranted",
                     "Framing applications under Section 94, BNSS 2023, to summon raw FSL records and data"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3"><PhoneCall className="w-6 h-6 text-gray-400 flex-shrink-0" /> <span className="pt-0.5">{item}</span></li>
                   ))}
                </ul>

                <div className="pt-6 border-t border-gray-700 mt-auto">
                    <p className="text-white font-bold">Format: <span className="font-normal text-gray-300">Consultation call</span></p>
                    <p className="mt-2 text-white font-bold">Timeline: <span className="font-normal text-gray-300">Within 48 hours</span> | <span className="text-accent uppercase tracking-wide font-bold">Free of charge</span></p>
                 </div>
             </div>
           </motion.div>
           
        </div>
      </section>

      {/* SERVICE 7 & 8 */}
      <section className="py-20 bg-background border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* LEGAL AID FORENSIC REVIEW */}
           <motion.div 
             className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 md:p-10"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center">7</div>
                 <h2 className="text-2xl font-bold text-primary tracking-tight">LEGAL AID FORENSIC REVIEW</h2>
             </div>
             
             <div className="space-y-6 text-text/80 text-lg">
                <p className="leading-relaxed">All services above are available at no cost to individuals of limited means. <strong className="text-primary font-bold">Zero cost means zero reduction in scope or scientific rigour.</strong></p>
                
                <h3 className="text-primary font-bold tracking-wider text-sm uppercase mt-8">Eligibility:</h3>
                <ul className="space-y-4">
                   {[
                     "Referral through NALSA / SLSA / DLSA or empanelled legal aid NGOs",
                     "Representation by panel advocates",
                     "Section 12 income eligibility",
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3"><Scale className="w-6 h-6 text-accent flex-shrink-0" /> <span className="pt-0.5">{item}</span></li>
                   ))}
                   <li className="flex items-start gap-3"><Scale className="w-6 h-6 text-accent flex-shrink-0" /> <span className="pt-0.5"><strong className="text-primary">Undertrials in judicial custody (priority)</strong></span></li>
                </ul>
             </div>
           </motion.div>

           {/* FORENSIC LITERACY TRAINING */}
           <motion.div 
             className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 md:p-10"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-primary text-white font-bold text-2xl rounded-sm flex items-center justify-center">8</div>
                 <h2 className="text-2xl font-bold text-primary tracking-tight">FORENSIC LITERACY TRAINING</h2>
             </div>
             
             <div className="space-y-6 text-text/80 text-lg">
                <p className="leading-relaxed">Structured training modules for legal institutions building in-house forensic capacity.</p>
                
                <div className="mt-8">
                  <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Modules:</h3>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {["Reading FSL reports", "Early intervention protocols", "Cross-examination techniques", "Digital evidence under BSA 2023", "DNA standards in Indian courts"].map((item, idx) => (
                      <span key={idx} className="bg-background border border-gray-300 px-4 py-2 text-sm md:text-base rounded-sm font-medium">{item}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Audience:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium">
                    {["NALSA / SLSA / DLSA", "Bar Associations", "Law School Legal Aid Cells", "Criminal Justice NGOs"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3"><BookOpen className="w-5 h-5 text-accent" /> {item}</div>
                    ))}
                  </div>
                </div>
             </div>
           </motion.div>
           
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-24 bg-primary relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <motion.div 
           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Not certain which service applies to your matter?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 font-light mb-12">
            Submit the FSL report — we assess and advise <span className="text-accent font-semibold">within 48 hours.</span>
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/contact" className="px-8 py-4 bg-accent text-white font-bold rounded-sm hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2 text-lg group">
                Submit a Case
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
             <a href="https://wa.me/919490345123?text=Hello,%20I%20need%20help%20determining%20which%20service%20applies%20to%20my%20case." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:-translate-y-1 hover:bg-[#128C7E] transition-all shadow-lg flex items-center justify-center gap-2 text-lg">
                Contact via WhatsApp
                <ArrowRight className="w-5 h-5" />
             </a>
          </motion.div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Services;
