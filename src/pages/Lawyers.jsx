import React from 'react';
import { ShieldAlert, Clock, CheckCircle2, FlaskConical, ArrowRight } from 'lucide-react'; 

const Lawyers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/lawyers_hero.png" 
            alt="Lawyers Defense Legal Brief Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight">
                The FSL report your client is being convicted on — <br className="hidden md:block"/><span className="text-accent">have you read beyond the conclusion?</span>
              </h1>
              <div className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>Forensic reports contain methodological gaps, disclosure deficiencies, and interpretive overreach. They go unchallenged in court — not because the challenge is unavailable, but because independent scientific support has not existed on the defence side.</p>
                <p className="mt-6 text-2xl text-white font-bold tracking-wide uppercase">Until now.</p>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION: THE STRUCTURAL DISADVANTAGE */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative mb-10 lg:mb-0">
              <div className="absolute inset-0 bg-accent translate-x--4 translate-y-4 rounded-sm"></div>
              <img 
                src="/images/forensic_data.png" 
                alt="Illuminated tablet with forensic data readout next to a gavel" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <ShieldAlert className="w-8 h-8 text-accent" />
                 <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">The Structural Disadvantage</h2>
              </div>
              <div className="space-y-6 text-text/80 text-lg leading-relaxed">
                <p>
                  As defence counsel, you cross-examine government forensic analysts without access to the raw data they relied on, the equipment logs behind the output, or the laboratory protocols they were supposed to follow. <strong className="text-primary font-semibold">You challenge technical testimony without a scientist of your own.</strong>
                </p>
                <div className="border-l-4 border-accent pl-6 py-4 my-8 bg-background rounded-r-md">
                  <p className="italic font-medium text-text">
                    “In a 2025 Punjab Sessions trial, Punjab FSL analyst was pressured by a senior official to alter findings in a filed report. The defence in that matter had no independent scientist to identify it.”
                  </p>
                </div>
                <p className="font-medium text-primary text-xl mt-8">
                  This is not a preparation failure. It is a resource asymmetry — one that Fide Forensic Foundation is structured to eliminate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW WE WORK WITH YOU */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">How We Work With You</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm relative pt-12 hover:shadow-md transition-shadow">
               <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white font-bold text-xl rounded-sm flex items-center justify-center">1</div>
               <h3 className="text-2xl font-bold text-primary mb-4">Secure Submission</h3>
               <p className="text-text/80 leading-relaxed text-lg">
                 Share the FSL report, charge sheet, and case details via our encrypted submission form. All materials are received as confidential professional engagements.
               </p>
            </div>
            
            <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm relative pt-12 hover:shadow-md transition-shadow">
               <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white font-bold text-xl rounded-sm flex items-center justify-center">2</div>
               <h3 className="text-2xl font-bold text-primary mb-4">Scientific Audit</h3>
               <p className="text-text/80 leading-relaxed text-lg">
                 Our empanelled scientists conduct a structured review: chain of custody integrity, methodology compliance, raw data analysis, profile interpretation, and report disclosure completeness. We identify the technical gaps that go unnoticed by counsel without forensic training.
               </p>
            </div>
            
            <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm relative pt-12 hover:shadow-md transition-shadow">
               <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-white font-bold text-xl rounded-sm flex items-center justify-center">3</div>
               <h3 className="text-2xl font-bold text-primary mb-4">Delivery & Court Support</h3>
               <p className="text-text/80 leading-relaxed text-lg">
                 You receive an Expert Review Report, a tactical cross-examination brief, and a plain-language judicial summary — all court-ready. Where required, our scientists appear in person or via video conference as expert witnesses.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE PROVIDE */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">What We Provide</h2>
            <div className="w-24 h-1 bg-accent mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">FSL Report Audit</h3>
                   <p className="text-text/80 text-lg">Methodology, chain of custody, raw data, and disclosure scrutinised against SWGDAM and ISO 17025.</p>
                </div>
             </div>
             
             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Expert Opinion Report</h3>
                   <p className="text-text/80 text-lg">Formal signed document admissible under Section 45, BSA 2023.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Cross-Examination Brief</h3>
                   <p className="text-text/80 text-lg">Case-specific tactical guide targeting electropherogram gaps, statistical errors, and interpretive overreach.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Judicial Summary</h3>
                   <p className="text-text/80 text-lg">Concise, jargon-free aide for the Bench — what the evidence establishes, and what it does not.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Pre-Trial Consultation</h3>
                   <p className="text-text/80 text-lg">Free, within 48 hours: early identification of evidentiary vulnerabilities before the FSL report is exhibited.</p>
                </div>
             </div>

             <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Expert Witness Testimony</h3>
                   <p className="text-text/80 text-lg">Examination-in-chief and cross-examination support at trial, Sessions, High Court, and Supreme Court.</p>
                </div>
             </div>
           </div>
           
           <div className="mt-12 text-center md:text-left">
             <a href="/services" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group">
                One line per service — full detail on the Services page
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
           </div>
         </div>
      </section>

      {/* SECTION: Forensic Disciplines We Audit & Calendar Calibration */}
      <section className="py-20 md:py-28 bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Disciplines */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <FlaskConical className="w-8 h-8 text-accent" />
                 <h2 className="text-3xl font-bold text-white tracking-tight">Forensic Disciplines We Audit</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-800/80 px-6 py-4 rounded-sm border border-gray-700 font-medium text-lg text-gray-200">DNA</div>
                <div className="bg-gray-800/80 px-6 py-4 rounded-sm border border-gray-700 font-medium text-lg text-gray-200">Biological & Serological Evidence</div>
                <div className="bg-gray-800/80 px-6 py-4 rounded-sm border border-gray-700 font-medium text-lg text-gray-200">Digital & Electronic Evidence</div>
                <div className="bg-gray-800/80 px-6 py-4 rounded-sm border border-gray-700 font-medium text-lg text-gray-200">Toxicology & Chemical Analysis</div>
                <div className="bg-gray-800/80 px-6 py-4 rounded-sm border border-gray-700 font-medium text-lg text-gray-200">Questioned Documents</div>
              </div>
              
              <p className="text-gray-400 italic text-lg leading-relaxed border-l-2 border-accent pl-4">
                If your case involves a forensic discipline not listed here, contact us for a preliminary feasibility assessment.
              </p>
            </div>
            
            {/* Calendar Calibration */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <Clock className="w-8 h-8 text-accent" />
                 <h2 className="text-3xl font-bold text-white tracking-tight">We calibrate delivery to your court calendar.</h2>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur-sm shadow-xl">
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-gray-300 text-lg font-medium">Pre-Trial Consultation</span>
                    <span className="text-accent font-bold">Within 48 hours</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-gray-300 text-lg font-medium">Urgent Bail Review</span>
                    <span className="text-accent font-bold">24–48 hours</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-gray-300 text-lg font-medium">Cross-Examination Brief</span>
                    <span className="text-accent font-bold">3–5 working days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg font-medium">FSL Audit + Expert Opinion</span>
                    <span className="text-accent font-bold text-right pl-4">7–14 working days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 tracking-tight leading-tight">
            No forensic conclusion is final <br className="hidden md:block"/><span className="text-accent">until it is scientifically tested.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="px-8 py-4 bg-accent text-white font-bold rounded-sm hover:bg-yellow-600 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
                Submit a Case
                <ArrowRight className="w-5 h-5" />
             </button>
             <button className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
                Contact via WhatsApp
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Lawyers;
