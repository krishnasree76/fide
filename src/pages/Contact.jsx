import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle,
  FileUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Is Fide Forensic Foundation a government body?",
      a: "No. We are an independent Section 8 not-for-profit. Our panel comprises retired senior government scientists (CFSL/SFSL) providing objective, third-party scientific scrutiny for the defense."
    },
    {
      q: "Why should an official FSL report be challenged?",
      a: "Under Indian law, an FSL report is an \"Expert Opinion,\" not an absolute fact. We audit the raw data, methodology, and chain of custody to identify errors or interpretive overreach that often go unnoticed."
    },
    {
      q: "Is your Expert Opinion admissible in court?",
      a: "Yes. Our reports and testimony are fully admissible under Section 45 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, which allows the court to hear independent expert perspectives."
    },
    {
      q: "At what stage should I involve the Foundation?",
      a: "Immediately. Early involvement during the investigation or bail stage allows us to advise on summoning critical raw data (via Sec 94 BNSS) before it is lost or tampered with."
    },
    {
      q: "Will your experts testify in person?",
      a: "Yes. Our empanelled scientists are available for formal testimony, cross-examination, and depositions in any court across India, either in person or via video conferencing."
    },
    {
      q: "Do you handle cases outside of Hyderabad?",
      a: "Yes. We have a Pan-India reach. We provide forensic audits and support defense counsel across all 36 States and Union Territories, from Sessions Courts to the Supreme Court."
    },
    {
      q: "Which forensic disciplines do you cover?",
      a: "Our expertise spans all major areas: DNA & Biology, Digital/Cyber (mobile/cloud), Toxicology, Ballistics, Fingerprints, and Questioned Documents."
    },
    {
      q: "How much do your services cost?",
      a: "• Legal Aid: 100% Free for cases referred via NALSA, SLSA, DLSA, or eligible NGOs.\n• Private Matters: We charge a standard engagement fee that directly sustains our non-profit mission and legal aid mandate."
    },
    {
      q: "What exactly will I receive after submitting a case?",
      a: "You receive a comprehensive Technical Audit Report, a formal Expert Opinion, and a tactical Cross-Examination Roadmap to help counsel navigate the scientific evidence in court."
    },
    {
      q: "How do I know if there are scientific grounds for a challenge?",
      a: "Submit your FSL report through our portal. We provide a Preliminary Feasibility Assessment within 48 hours, letting you know transparently if there are valid scientific grounds for a challenge."
    }
  ];

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      
      {/* HEADER BAR */}
      <div className="bg-primary pt-16 pb-12 px-4 shadow-inner relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10">
            <img src="/images/contact_hero.png" alt="Contact Background" className="w-full h-full object-cover mix-blend-screen" />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Contact & Case Submission</h1>
            <div className="w-20 h-1 bg-accent"></div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
           
           {/* LEFT COLUMN: SUBMIT A CASE */}
           <div>
              <div className="mb-10">
                 <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Submit a Case</h2>
                 <p className="text-text/80 text-lg border-l-4 border-accent pl-5 py-2">
                   All case submissions are received as confidential professional engagements. <strong className="text-primary font-bold">We respond within 48 working hours.</strong>
                 </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-200">
                 <form className="space-y-6">
                    <div>
                       <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Full Name</label>
                       <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="Enter Full Name" />
                    </div>

                    <div>
                       <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-3">Your Role</label>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 bg-background transition-colors">
                             <input type="radio" name="role" className="w-4 h-4 text-accent focus:ring-accent" />
                             <span className="font-medium text-sm">Advocate</span>
                          </label>
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 bg-background transition-colors">
                             <input type="radio" name="role" className="w-4 h-4 text-accent focus:ring-accent" />
                             <span className="font-medium text-sm">Legal Aid Lawyer</span>
                          </label>
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 bg-background transition-colors">
                             <input type="radio" name="role" className="w-4 h-4 text-accent focus:ring-accent" />
                             <span className="font-medium text-sm">Accused / Family</span>
                          </label>
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 bg-background transition-colors">
                             <input type="radio" name="role" className="w-4 h-4 text-accent focus:ring-accent" />
                             <span className="font-medium text-sm">Authority / NGO</span>
                          </label>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Phone</label>
                          <input type="tel" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="+91 9490345123" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Email</label>
                          <input type="email" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="email@example.com" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Court Name & Jurisdiction</label>
                          <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="e.g. Sessions Court, Delhi" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Case/FIR Number</label>
                          <input type="text" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="Case No." />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Next Hearing Date</label>
                          <input type="date" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Nature of Evidence</label>
                          <select className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent appearance-none">
                             <option>Select Discipline</option>
                             <option>DNA</option>
                             <option>Serology</option>
                             <option>Biology</option>
                             <option>Toxicology</option>
                             <option>Digital</option>
                             <option>Other</option>
                          </select>
                       </div>
                    </div>

                    <div>
                       <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Brief Summary (Max 500 words)</label>
                       <textarea rows="4" className="w-full bg-background border border-gray-300 rounded-sm py-3 px-4 text-text focus:outline-none focus:border-accent" placeholder="Provide context about the charges and the specific forensic evidence..."></textarea>
                    </div>

                    <div>
                       <label className="block text-sm font-bold text-primary uppercase tracking-wide mb-2">Upload Documents</label>
                       <div className="border-2 border-dashed border-gray-300 bg-background rounded-sm p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer flex flex-col items-center justify-center">
                          <FileUp className="w-10 h-10 text-primary/40 mx-auto mb-3" />
                          <p className="text-gray-700 font-medium text-base">Drag and drop files here or click to browse</p>
                          <p className="text-gray-500 text-sm mt-2">Accepts FSL Report, FIR, Charge Sheet (PDF only)</p>
                       </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                       <button type="button" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-sm transition-colors text-lg flex items-center justify-center gap-2 uppercase tracking-wide shadow-md">
                         Submit Case for Review
                       </button>
                       <p className="text-sm text-center text-gray-500 font-medium mt-2">
                         Note: Data shared here is encrypted and used exclusively for technical audit by our empanelled experts.
                       </p>
                    </div>

                 </form>
              </div>

              {/* WHATSAPP CTA */}
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-200 mt-8 text-center border-t-[6px] border-t-[#25D366]">
                 <h3 className="text-2xl font-bold text-primary mb-6">Reach us directly.</h3>
                 <a 
                   href="https://wa.me/919490345123?text=Hello,%20I%20would%20like%20to%20submit%20a%20case%20/%20enquire%20about%20your%20services." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-[#25D366] text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-sm"
                 >
                   <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                 </a>
              </div>
           </div>

           {/* RIGHT COLUMN: FIND US & FAQ */}
           <div className="flex flex-col gap-12 pt-0 lg:pt-16">
              
              {/* FIND US */}
              <div>
                 <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Find Us</h2>
                 <div className="bg-primary text-white p-10 md:p-12 rounded-sm shadow-md border-b-4 border-b-accent relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10">
                       <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 4v4"/><path d="M12 16v4"/><path d="M4 12h4"/><path d="M16 12h4"/></svg>
                    </div>
                    
                    <div className="relative z-10 space-y-8">
                       <div className="flex items-start gap-4">
                          <MapPin className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
                          <div>
                             <strong className="block text-xl mb-2 font-bold tracking-wide text-white">Fide Forensic Foundation</strong>
                             <span className="text-gray-300 text-lg">Hyderabad, Telangana, India</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <Mail className="w-7 h-7 text-accent flex-shrink-0" />
                          <span className="text-gray-300 text-lg">contact@fideforensic.org</span>
                       </div>
                       <div className="flex items-center gap-4">
                          <Phone className="w-7 h-7 text-accent flex-shrink-0" />
                          <span className="text-gray-300 text-lg">+91 9490345123</span>
                       </div>
                       <div className="flex items-center gap-4 pt-8 border-t border-gray-700">
                          <Clock className="w-7 h-7 text-accent flex-shrink-0" />
                          <div>
                             <strong className="block text-sm uppercase tracking-wider mb-1 text-gray-400">Business Hours</strong>
                             <span className="text-white font-medium">Mon-Fri: 9:00 AM - 6:00 PM (IST)</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* FOLLOW US */}
              <div>
                 <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest border-b border-gray-200 pb-2">Follow Us</h3>
                 <div className="flex gap-4">
                    <a href="#" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group">
                       <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group">
                       <FaTwitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group">
                       <FaInstagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group">
                       <FaFacebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                 </div>
              </div>

           </div>

        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="bg-white py-24 border-t border-gray-200 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-6">Frequently Asked Questions</h2>
               <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, index) => (
                 <div key={index} className="border border-gray-200 rounded-sm overflow-hidden text-left bg-background shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      className={`w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center focus:outline-none transition-colors ${openFaq === index ? 'bg-primary text-white' : 'hover:bg-gray-50 text-primary'}`}
                      onClick={() => toggleFaq(index)}
                    >
                       <span className={`font-bold text-lg md:text-xl pr-4 text-left ${openFaq === index ? 'text-white' : 'text-primary'}`}>{faq.q}</span>
                       <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openFaq === index ? 'bg-white/20 text-white' : 'bg-primary/5 text-accent'}`}>
                          {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                       </span>
                    </button>
                    {openFaq === index && (
                       <div className="px-6 md:px-8 pb-8 text-text/80 text-lg leading-relaxed whitespace-pre-line border-t border-gray-100 mt-2 pt-6 bg-white border-b-4 border-b-accent">
                          {faq.a}
                       </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>
      
    </div>
  );
};

export default Contact;
