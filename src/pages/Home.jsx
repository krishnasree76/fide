import React from 'react';
import { ArrowRight, Scale, Shield, FileText, Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Forensic Legal Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-start">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                The Prosecution Has a Scientist. <br className="hidden md:block"/><span className="text-accent">The Defence Does Not.</span>
              </h1>
              <div className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>India's courts admit government forensic reports as expert opinion under Section 45, BSA 2023 — with no independent scientific check on the other side.</p>
                <p className="mt-4"><strong className="text-white font-semibold">Fide Forensic Foundation is India's first institution dedicated to that check.</strong></p>
                <p className="mt-4">We provide defence counsel and legal aid authorities with the scientific authority required to contest forensic evidence — from the FSL report to the witness box.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-accent text-white font-bold rounded-sm hover:bg-yellow-600 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                  Submit a Case
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                  Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION: An adversarial system with one scientist */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">An adversarial system with one scientist.</h2>
              <div className="space-y-6 text-text/80 text-lg leading-relaxed">
                <p>
                  Government laboratories prepare the prosecution's forensic report. Their analysts testify for the prosecution. The defence is given a summary conclusion — denied access to raw data, equipment logs, and the methodology behind it.
                </p>
                <div className="border-l-4 border-accent pl-6 py-2 my-8 bg-background/50 rounded-r-md">
                  <p className="italic font-medium text-text">
                    "The Supreme Court has held that expert evidence unsupported by disclosed methodology carries no evidentiary weight (State of HP v. Jai Lal, 1999 7 SCC 280)."
                  </p>
                </div>
                <p>
                  The law demands scientific rigour. The system withholds it from the defence side.
                </p>
                <p className="font-semibold text-primary pt-4 text-xl">
                  That is the condition Fide Forensic Foundation was established to correct.
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last mb-10 lg:mb-0">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/images/support.png" 
                alt="Stack of legal documents and scientist's glasses representing meticulous review" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: End-to-End Scientific Support for the Defence */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">End-to-End Scientific Support for the Defence</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-5 px-6 font-semibold text-lg border-b border-primary-light w-1/3">Service</th>
                    <th className="py-5 px-6 font-semibold text-lg border-b border-primary-light">What It Delivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-text/80 text-lg">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">FSL Report Audit</td>
                    <td className="py-5 px-6">Structured scientific review against SWGDAM, ISO 17025, and applicable Indian standards</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">Expert Opinion Report</td>
                    <td className="py-5 px-6">Signed, court-admissible opinion under Section 45, BSA 2023</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">Cross-Examination Brief</td>
                    <td className="py-5 px-6">Question-by-question tactical guide targeting procedural lapses and interpretive overreach</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">Judicial Summary</td>
                    <td className="py-5 px-6">Plain-language brief for the Bench on what the evidence proves — and what it does not</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">Expert Witness Appearance</td>
                    <td className="py-5 px-6">In-person or video testimony from empanelled senior scientists at any judicial level</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-primary border-r border-gray-100">Pre-Trial Consultation</td>
                    <td className="py-5 px-6">Early identification of evidentiary vulnerabilities; free of charge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:text-yellow-600 transition-colors group">
              Explore All Services in Detail
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: Built for every stage of the justice process */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Built for every stage of the justice process.</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             <div className="bg-background p-8 md:p-10 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
               <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <Scale className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-primary mb-4">Defence Counsel</h3>
               <p className="text-text/80 text-lg leading-relaxed">
                 Scientific foundation for independent case review, cross-examination strategy, and expert witness support across all judicial levels.
               </p>
             </div>
             
             <div className="bg-background p-8 md:p-10 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
               <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <Shield className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-primary mb-4">Undertrials & Families</h3>
               <p className="text-text/80 text-lg leading-relaxed">
                 A rigorous second opinion on the government FSL report, through direct submission or legal aid referral.
               </p>
             </div>
             
             <div className="bg-background p-8 md:p-10 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
               <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <FileText className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-primary mb-4">Legal Aid Authorities</h3>
               <p className="text-text/80 text-lg leading-relaxed">
                 Open to structured MOU partnerships with SLSA and DLSA to deliver expert forensic reviews on monthly case lists, eliminating the need for per-case court orders.
               </p>
             </div>
             
             <div className="bg-background p-8 md:p-10 rounded-md border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
               <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <Search className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-primary mb-4">Criminal Justice Institutions</h3>
               <p className="text-text/80 text-lg leading-relaxed">
                 Technical forensic integration for NGOs, prison legal aid clinics, and law school clinics handling active criminal caseloads.
               </p>
             </div>
           </div>
         </div>
      </section>

      {/* SECTION: Built from three decades within the system */}
      <section className="py-24 md:py-32 bg-secondary text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">Built from three decades within the system.</h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            <p>
              Fide Forensic Foundation is a Section 8 not-for-profit — India's first independent forensic review institution. Our empanelled panel comprises retired senior scientists from Top Indian Government Institutions bringing laboratory authority to the defence side of Indian criminal proceedings.
            </p>
            <p className="text-xl md:text-2xl text-white font-medium my-10 leading-relaxed">
              <span className="text-accent italic">Fide:</span> Latin for faith and trust. Justice is only trustworthy when the science behind it is independently verified. We ensure that forensic evidence is a search for truth, not just a tool for conviction.
            </p>
          </div>
          
          <div className="mt-16 pt-12 border-t border-gray-700">
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-8 font-semibold">Beyond DNA, the Foundation provides audits across</p>
            <div className="flex flex-wrap justify-center gap-4 text-center">
               <span className="bg-gray-800/80 px-6 py-3 rounded-sm border border-gray-700 text-sm md:text-base font-medium text-gray-200">Biological & Serological Evidence</span>
               <span className="bg-gray-800/80 px-6 py-3 rounded-sm border border-gray-700 text-sm md:text-base font-medium text-gray-200">Digital & Electronic Evidence</span>
               <span className="bg-gray-800/80 px-6 py-3 rounded-sm border border-gray-700 text-sm md:text-base font-medium text-gray-200">Toxicology & Chemical Analysis</span>
               <span className="bg-gray-800/80 px-6 py-3 rounded-sm border border-gray-700 text-sm md:text-base font-medium text-gray-200">Questioned Documents</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Scientific Authority. <span className="text-accent">Every Court. Every State.</span></h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Fide Forensic Foundation provides forensic audits and expert testimony for criminal defense and legal aid authorities across all of India.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm mb-12 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-medium">
              Submit the report today. Our experts respond within 48 hours with a transparent assessment of whether an independent review is necessary — and what strategic advantage it offers your case.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="px-8 py-4 bg-accent text-white font-bold rounded-sm hover:bg-yellow-600 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
                Submit a Case
                <ArrowRight className="w-5 h-5" />
             </button>
             <button className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
                Speak to Our Team (WhatsApp)
             </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
