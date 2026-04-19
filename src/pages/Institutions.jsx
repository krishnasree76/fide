import React from 'react';
import { ShieldCheck, Scale, Building2, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Institutions = () => {
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
            src="/images/institutions_hero.png" 
            alt="Courthouse Institutional Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-start">
            <motion.div 
               className="max-w-4xl"
               initial="hidden" animate="visible" variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight">
                Every undertrial deserves the same forensic scrutiny — <br className="hidden md:block"/><span className="text-accent">regardless of what they can afford.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>The right to a fair trial does not stop at the laboratory door. Accused persons routinely face forensic evidence they cannot independently challenge — not because the law denies them that right, but because the technical infrastructure to exercise it has been absent from the legal aid framework.</p>
                <p className="mt-8 text-xl text-white font-semibold">Fide Forensic Foundation is structured to provide that infrastructure.</p>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* SECTION: OUR LEGAL AID MANDATE */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200 overflow-hidden">
        <motion.div 
           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                 <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-10 h-10 text-accent" />
                 </div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-8">Our Legal Aid Mandate</motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-text/80 text-lg md:text-xl leading-relaxed">
              <p>
                The Foundation is a Section 8 not-for-profit with a single operating principle: <strong className="text-primary font-semibold">the quality of a defence must not be determined by financial capacity.</strong>
              </p>
              <p>
                All services available to privately retained counsel — FSL audits, Expert Opinion Reports, cross-examination briefs, judicial summaries, and expert witness testimony — are provided <span className="text-accent font-bold">at no cost</span> to individuals who qualify under NALSA eligibility criteria and Section 12 of the Legal Services Authorities Act, 1987.
              </p>
              <div className="bg-background border-l-4 border-accent p-6 mt-12 rounded-r-sm text-left shadow-sm">
                  <p className="font-semibold text-primary text-xl">
                    There is no reduced scope. We apply the same scientific standard to every case.
                  </p>
              </div>
            </motion.div>
        </motion.div>
      </section>

      {/* SECTION: We Serve */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             className="text-center mb-16"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
           >
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Who We Serve</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
           </motion.div>
           
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
           >
             {[
               { icon: <Building2 className="w-7 h-7" />, title: "Legal Services Authorities", sub: "(NALSA / SLSA / DLSA)", desc: "We partner under formal MOUs that allow authorities to submit monthly case lists for forensic review — eliminating per-case court order requirements. We manage expert assignment, conduct the audit, and return court-ready reports within committed timelines." },
               { icon: <Users className="w-7 h-7" />, title: "Legal Aid NGOs &", sub: "Undertrial Support Organisations", desc: "Organisations with active criminal caseloads can refer cases directly. We provide forensic infrastructure for NDPS matters, POCSO cases, human rights documentation, and death penalty defence — at no cost to the accused." },
               { icon: <BookOpen className="w-7 h-7" />, title: "Law School Legal Aid Clinics", sub: "", desc: "We serve as a Technical Partner to clinical legal education programs, providing direct forensic case support, faculty advisory consultation, and forensic literacy training for student advocates." },
               { icon: <Scale className="w-7 h-7" />, title: "Panel Advocates &", sub: "Legal Aid Counsel", desc: "If you represent a client who meets Section 12 eligibility, submit the FSL report directly. We conduct a conflict check, accept the matter, and deliver a comprehensive court-ready report to counsel." }
             ].map((item, idx) => (
               <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 hover:border-gray-200 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
                 <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   {item.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-primary mb-4">{item.title} {item.sub && <><br className="hidden md:block"/><span className="text-lg text-gray-500 font-medium">{item.sub}</span></>}</h3>
                 <p className="text-text/80 text-lg leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
      </section>

      {/* SECTION: FORENSIC LITERACY PROGRAMME */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             
             {/* Left Text */}
             <motion.div 
               className="lg:w-1/3"
               initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
             >
                 <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">Forensic Literacy Programme</h2>
                 <p className="text-xl text-text/80 mb-8 font-medium">For institutions building in-house technical capacity.</p>
                 <div className="border-t border-gray-200 pt-10 mt-auto">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold mb-6">Delivery Formats</p>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-3 text-primary font-medium text-lg">
                         <span className="w-2.5 h-2.5 rounded-full bg-accent"></span> On-site workshops
                       </div>
                       <div className="flex items-center gap-3 text-primary font-medium text-lg">
                         <span className="w-2.5 h-2.5 rounded-full bg-accent"></span> Digital modules
                       </div>
                       <div className="flex items-center gap-3 text-primary font-medium text-lg">
                         <span className="w-2.5 h-2.5 rounded-full bg-accent"></span> Embedded clinical support
                       </div>
                    </div>
                 </div>
             </motion.div>

             {/* Right Content */}
             <motion.div 
               className="lg:w-2/3 space-y-6"
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
             >
                {[
                  { title: "For Panel Advocates", desc: "Reading FSL reports, identifying contestable findings, framing cross-examination, and understanding when to seek independent review." },
                  { title: "For Paralegal & Field Teams", desc: "Identifying forensic evidence issues during initial intake and jail visits; early documentation protocols." },
                  { title: "For Law Schools & Faculty", desc: "Applied curriculum support covering DNA, digital forensics, toxicology, and BSA 2023 certification requirements." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-background p-8 md:p-10 border-l-4 border-primary rounded-r-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                     <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                     <p className="text-text/80 text-lg leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
             </motion.div>

          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-24 bg-secondary relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 tracking-tight leading-tight">
            If your institution works with accused persons facing forensic evidence — <br className="hidden md:block"/><span className="text-accent">we work with you.</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
             <Link to="/contact" className="px-8 py-4 bg-accent text-white font-bold rounded-sm hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2 text-lg group">
                Refer a Case
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
             <a href="https://wa.me/919490345123?text=Hello,%20I%20would%20like%20to%20refer%20a%20legal%20aid%20case." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:-translate-y-1 hover:bg-[#128C7E] transition-all shadow-lg flex items-center justify-center gap-2 text-lg">
                Contact via WhatsApp
                <ArrowRight className="w-5 h-5" />
             </a>
          </motion.div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Institutions;
