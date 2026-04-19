import React from 'react';
import { 
  BookMarked, 
  Scale, 
  Gavel, 
  ExternalLink,
  FileCheck,
  Library
} from 'lucide-react';

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/resources_hero.png" 
            alt="Law Library and Science Data Archives" 
            className="w-full h-full object-cover opacity-15 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
                The science has been questioned. <br className="hidden md:block"/><span className="text-accent">The courts have said so.</span>
              </h1>
              <div className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
                <p>Standards, precedents, legislation, and verified reporting — curated for defence lawyers, legal aid practitioners, and courts engaging with forensic evidence in Indian criminal proceedings.</p>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION: FORENSIC STANDARDS & SCIENTIFIC REFERENCE */}
      <section className="py-20 bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                 <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">FORENSIC STANDARDS & SCIENTIFIC REFERENCE</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">ISO/IEC 17025</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">International standard for forensic laboratory competence: personnel, method validation, and quality assurance.</p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">NABL Accreditation</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">India's domestic laboratory standard. Non-compliance is a direct audit finding before courts.</p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">SWGDAM Guidelines</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">International consensus on DNA interpretation, mixture analysis, and statistical reporting.</p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">ISFG Recommendations</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">International Society for Forensic Genetics standards on DNA evidence and probabilistic genotyping.</p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">SWGFAST / SWGDOC / SWGTOX</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">Discipline-specific standards for fingerprint, document, and toxicology examination.</p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
                 <h3 className="text-xl font-bold text-primary"><span className="text-accent">Manufacturer Technical Documentation</span></h3>
                 <p className="text-text/80 leading-relaxed text-lg">Validated protocols and known error parameters for FSL instruments. <strong className="text-primary font-bold">Deviation is a primary audit target.</strong></p>
              </div>
           </div>
           
           <div className="mt-12 bg-primary/5 p-8 rounded-sm border border-primary/20 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <BookMarked className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                 <p className="text-primary font-bold mb-2 uppercase tracking-wide text-sm">Key References:</p>
                 <p className="text-text/80 text-lg">
                   The John Butler Series. <span className="italic font-medium">Fundamentals of Forensic DNA Typing</span> | 
                   Buckleton et al., <span className="italic font-medium">Forensic DNA Evidence Interpretation</span> | 
                   Rudin & Inman, <span className="italic font-medium">An Introduction to Forensic DNA Analysis</span>
                 </p>
              </div>
           </div>
           
        </div>
      </section>

      {/* SECTION: INDIAN LEGAL FRAMEWORK */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
           <div className="lg:w-1/3">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                   <Scale className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">INDIAN LEGAL FRAMEWORK</h2>
             </div>
             <p className="text-lg text-text/80 leading-relaxed border-l-4 border-accent pl-4 mt-6">
               The operative legislative basis for forensic evidence and independent review in Indian courts.
             </p>
           </div>
           
           <div className="lg:w-2/3">
             <ul className="space-y-6">
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">Bharatiya Sakshya Adhiniyam 2023</h3>
                      <p className="text-text/80 text-lg">Sections 45 (Expert Opinion) and 63 (Electronic Records)</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">Indian Evidence Act 1872</h3>
                      <p className="text-text/80 text-lg">Sections 45 and 65B (operative in pre-BSA matters)</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">BNSS 2023</h3>
                      <p className="text-text/80 text-lg">Section 94 (summoning FSL records and raw data)</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">CrPC 1973</h3>
                      <p className="text-text/80 text-lg">Section 293 (government scientific expert reports)</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">NDPS Act 1985</h3>
                      <p className="text-text/80 text-lg">Provisions on chemical analysis admissibility</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">Legal Services Authorities Act 1987</h3>
                      <p className="text-text/80 text-lg">Section 2(1)(c) (basis for NALSA empanelment of forensic review)</p>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-background rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                   <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-1">DNA Technology (Use and Application) Regulation Bill 2019</h3>
                      <p className="text-text/80 text-lg">Not yet enacted; regulatory framework for DNA evidence in Indian courts remains governed by general evidence law.</p>
                   </div>
                </li>
             </ul>
           </div>
        </div>
      </section>

      {/* SECTION: LANDMARK JUDGMENTS */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="flex flex-col items-center text-center mb-16">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                 <Gavel className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">LANDMARK JUDGMENTS</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl">
                Courts have set aside convictions, dismissed FSL reports, and demanded methodological disclosure. <strong className="text-white">These are the judgments that matter.</strong>
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gray-800/60 p-8 rounded-sm hover:-translate-y-1 transition-transform border border-gray-700 flex flex-col">
                 <h3 className="text-accent font-bold text-xl mb-1">State of HP v. Jai Lal <span className="text-gray-400 font-normal text-lg">(1999) 7 SCC 280</span></h3>
                 <p className="text-gray-300 text-lg mt-4 mb-8 leading-relaxed flex-grow">
                   Expert evidence must disclose the data, methodology, and reasoning behind its conclusions. A bare assertion from an FSL analyst — however qualified — carries no evidentiary weight.
                 </p>
                 <a href="https://indiankanoon.org/doc/1652872/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                    Read on Indian Kanoon <ExternalLink className="w-4 h-4" />
                 </a>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-sm hover:-translate-y-1 transition-transform border border-gray-700 flex flex-col">
                 <h3 className="text-accent font-bold text-xl mb-1">Ramesh Chandra Agrawal v. Regency Hospital <span className="text-gray-400 font-normal text-lg">(2009) 9 SCC 709</span></h3>
                 <p className="text-gray-300 text-lg mt-4 mb-8 leading-relaxed flex-grow">
                   Three-part admissibility test for expert evidence: recognised field, reliable principles, qualified expert. Without disclosed data, an expert opinion may be inadmissible.
                 </p>
                 <a href="https://indiankanoon.org/doc/1267818/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                    Read on Indian Kanoon <ExternalLink className="w-4 h-4" />
                 </a>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-sm hover:-translate-y-1 transition-transform border border-gray-700 flex flex-col">
                 <h3 className="text-accent font-bold text-xl mb-1">Tomaso Bruno v. State of UP <span className="text-gray-400 font-normal text-lg">(2015) 7 SCC 178</span></h3>
                 <p className="text-gray-300 text-lg mt-4 mb-8 leading-relaxed flex-grow">
                   Life imprisonment set aside. Incomplete forensic and electronic evidence chains — including inconsistent post-mortem findings — cannot sustain a conviction.
                 </p>
                 <a href="https://indiankanoon.org/doc/193239104/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                    Read on Indian Kanoon <ExternalLink className="w-4 h-4" />
                 </a>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-sm hover:-translate-y-1 transition-transform border border-gray-700 flex flex-col">
                 <h3 className="text-accent font-bold text-xl mb-1">Sanjay @ Sonu v. State of UP <span className="text-gray-400 font-normal text-lg">(2021)</span></h3>
                 <p className="text-gray-300 text-lg mt-4 mb-8 leading-relaxed flex-grow">
                   Fingerprint evidence dismissed where the FSL report failed to disclose the method used for lifting latent prints or the procedure followed. No methodology, no evidentiary weight.
                 </p>
                 <a href="https://www.project39a.com/forensics-landmark-judgments" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                    Read Project 39A Summary <ExternalLink className="w-4 h-4" />
                 </a>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-sm hover:-translate-y-1 transition-transform border border-gray-700 flex flex-col md:col-span-2">
                 <h3 className="text-accent font-bold text-xl mb-1">Govind v. State of Haryana <span className="text-gray-400 font-normal text-lg">Crl. A. 5641/2024</span></h3>
                 <p className="text-gray-300 text-lg mt-4 mb-6 leading-relaxed flex-grow">
                   FSL report and weapon recovery together — without corroborative evidence — held insufficient to sustain a murder conviction.
                 </p>
                 <a href="https://theindianlawyer.in/supreme-court-holds-mere-weapon-recovery-and-fsl-report-not-enough-in-absence-of-corroborative-evidence/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                    Read case summary <ExternalLink className="w-4 h-4" />
                 </a>
              </div>
              
           </div>
        </div>
      </section>

      {/* SECTION: VERIFIED REPORTS & RESEARCH */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* VERIFIED REPORTS */}
           <div>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
                 <Library className="w-8 h-8 text-primary" />
                 <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">VERIFIED REPORTS</h2>
              </div>
              
              <div className="space-y-8">
                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-accent">
                    <h3 className="text-xl font-bold text-primary mb-2">LiveLaw — Supreme Court on FSL Procedural Failures</h3>
                    <p className="text-text/80 text-lg mb-4">Court-documented FSL lapses and their consequences for the accused — updated continuously.</p>
                    <a href="https://www.livelaw.in/tags/fsl-report" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors">
                      Read on LiveLaw <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>

                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-accent">
                    <h3 className="text-xl font-bold text-primary mb-2">Project 39A Blog — Foundational Validity in Forensic Evidence</h3>
                    <p className="text-text/80 text-lg mb-4">Why Indian courts lack a coherent standard for evaluating forensic methodology — and what that means for the accused.</p>
                    <a href="https://p39ablog.com/2023/12/foundational-validity-in-forensic-evidence-issues-with-the-indian-approach/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors">
                      Read <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>

                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-accent">
                    <h3 className="text-xl font-bold text-primary mb-2">Budding Forensic Expert — FSL Tampering & Wrongful Convictions in India <span className="text-gray-500 font-normal">(2026)</span></h3>
                    <p className="text-text/80 text-lg mb-4">Documented cases of FSL institutional interference — including a 2025 Punjab case where the State FSL Director pressured an analyst to alter findings.</p>
                    <a href="https://www.buddingforensicexpert.in/2026/03/forensic-tampering-wrongful-convictions-india.html" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors">
                      Read <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>
              </div>
           </div>

           {/* RESEARCH & PUBLICATIONS */}
           <div>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
                 <BookMarked className="w-8 h-8 text-primary" />
                 <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">RESEARCH & PUBLICATIONS</h2>
              </div>
              
              <div className="space-y-8">
                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-primary">
                    <h3 className="text-xl font-bold text-primary mb-2">Project 39A, NLU Delhi — Forensics Programme</h3>
                    <p className="text-text/80 text-lg mb-4">India's most rigorous institutional research on FSL quality, expert evidence standards, and forensic litigation. Directly aligned with the Foundation's mandate.</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://www.project39a.com/forensics" target="_blank" rel="noopener noreferrer" className="bg-primary/5 text-primary font-semibold px-4 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2">
                        Access <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href="https://www.project39a.com/publications" target="_blank" rel="noopener noreferrer" className="bg-primary/5 text-primary font-semibold px-4 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2">
                        Publications <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-primary">
                    <h3 className="text-xl font-bold text-primary mb-2">NFSU Journal — Evidentiary Value of Forensic Reports <span className="text-gray-500 font-normal">(2023)</span></h3>
                    <p className="text-text/80 text-lg mb-4">Peer-reviewed analysis of how Indian courts weigh FSL reports and where disclosure gaps undermine admissibility.</p>
                    <a href="https://jfj.nfsu.ac.in/Uploads/EJournal/2/2/(7-13)%20EVIDENTIARY%20VALUE%20OF%20FORENSIC%20REPORTS%20AND%20LEGAL%20IMPLICATIONS.pdf" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors">
                      Read <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>

                 <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm border-l-4 border-l-primary">
                    <h3 className="text-xl font-bold text-primary mb-2">Innocence Project — Forensic Problems & Wrongful Convictions</h3>
                    <p className="text-text/80 text-lg mb-4">Misapplied forensic science is a contributing factor in approximately 50% of wrongful convictions overturned by DNA testing internationally. The failure typology — interpretive overreach, statistical error, evidence suppression — applies directly to Indian FSL practice.</p>
                    <a href="https://innocenceproject.org/news/forensic-problems-and-wrongful-convictions/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors">
                      Read <ExternalLink className="w-4 h-4" />
                    </a>
                 </div>
              </div>
           </div>
           
        </div>
      </section>
      
    </div>
  );
};

export default Resources;
