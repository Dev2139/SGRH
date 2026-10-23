import React from 'react';
import { X, Clock, ShieldCheck, CreditCard, Users, FileCheck, Phone, CheckCircle2, Building2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export const InfoGuidanceModal = ({ type, isOpen, onClose, onBookAppointment }) => {
  if (!isOpen || !type) return null;

  const contentMap = {
    admissions: {
      icon: Building2,
      badge: "INPATIENT SERVICES GUIDE",
      title: "Planned Admissions & Hospitalization Procedure",
      subtitle: "Everything you need to know before coming to Sir Ganga Ram Hospital for an inpatient procedure.",
      sections: [
        {
          title: "Checklist of Documents Needed at Admission",
          items: [
            "Original Doctor Admission Recommendation Slip",
            "Government Photo ID Proof (Aadhaar Card / Voter ID / Passport)",
            "Health Insurance TPA Card & Pre-Authorization approval (if applicable)",
            "Previous medical records, diagnostic test reports, and current medications"
          ]
        },
        {
          title: "Admission Desk Location & Hours",
          items: [
            "Central Admission Counter: Ground Floor, Main Block A (Open 24x7)",
            "Planned surgical admissions are recommended to report by 8:00 AM on the day of surgery.",
            "Emergency admissions are processed directly via Emergency Casualty Gate 2."
          ]
        },
        {
          title: "Room Categories Available",
          items: [
            "Deluxe Single Private Suites (with attendant sleeping arrangements)",
            "Standard Single Air-Conditioned Rooms",
            "Twin-Sharing Semi-Private Rooms",
            "Multi-bed General Wards (Subsidized & EWS Wards)"
          ]
        }
      ]
    },
    billing: {
      icon: CreditCard,
      badge: "FINANCIAL SERVICES & TPA",
      title: "Cashless Health Insurance (TPA) & Billing Desk",
      subtitle: "Sir Ganga Ram Hospital is empaneled with major health insurance companies, government schemes, and corporate entities.",
      sections: [
        {
          title: "Empaneled Third-Party Administrators (TPAs) & Insurers",
          items: [
            "Star Health, Medi Assist, ICICI Lombard, HDFC ERGO, Care Health Insurance",
            "Niva Bupa (Max Bupa), Bajaj Allianz, United India, New India Assurance",
            "Paramount TPA, Heritage Health, Raksha TPA, Vidal Health TPA",
            "Empaneled for CGHS, ECHS, and Delhi Government Employees (DGHS)"
          ]
        },
        {
          title: "Cashless Hospitalization Process",
          items: [
            "Step 1: Submit TPA card and admission recommendation to Cashless TPA Desk (Counter 6, Ground Floor).",
            "Step 2: Our hospital TPA coordinator submits the pre-authorization query to your insurer within 2 hours.",
            "Step 3: Initial approval received before or during admission."
          ]
        },
        {
          title: "Direct TPA Helpdesk Contact",
          items: [
            "TPA Cashless Desk Phone: 011-42251111 (Extension: 1401 / 1402)",
            "Operating Hours: 8:00 AM – 9:00 PM (Monday to Saturday)"
          ]
        }
      ]
    },
    visitors: {
      icon: Users,
      badge: "VISITING REGULATIONS & SAFETY",
      title: "Visitor Hours, Attendant Passes & Hygiene Rules",
      subtitle: "Designed to maintain peaceful healing environments and rigorous clinical infection prevention standards.",
      sections: [
        {
          title: "Official Visiting Hours",
          items: [
            "General & Semi-Private Inpatient Wards: Daily 4:00 PM – 7:00 PM",
            "Intensive Care Units (ICU / CCU / NICU): Morning 11:00 AM – 12:00 PM | Evening 5:00 PM – 6:00 PM",
            "Only ONE attendant is permitted to enter the ICU at a time to minimize infection risks."
          ]
        },
        {
          title: "Attendant Pass Guidelines",
          items: [
            "One 24-hour Patient Attendant Pass is issued upon admission.",
            "One temporary Visitor Pass is valid strictly during official visiting hours.",
            "Children under 12 years of age are not permitted into inpatient wards and ICUs for their safety."
          ]
        },
        {
          title: "Hospital Safety Standards",
          items: [
            "Sanitize hands at bedside dispensers before and after touching patient surroundings.",
            "Outside cooked food and fresh flowers are strictly prohibited in ICU and transplant units.",
            "Strict silence must be maintained in patient corridors."
          ]
        }
      ]
    }
  };

  const activeContent = contentMap[type] || contentMap.admissions;
  const Icon = activeContent.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-1.5">
            <Icon className="w-4 h-4" />
            <span>{activeContent.badge}</span>
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#123653]">
            {activeContent.title}
          </h3>
          <p className="text-xs text-[#637386] mt-1.5 leading-relaxed">
            {activeContent.subtitle}
          </p>
        </div>

        {/* Sections Content */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 text-xs">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200/80 space-y-2">
              <h4 className="font-semibold text-sm text-[#123653] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA]"></span>
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-1.5 text-gray-600 pl-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold shrink-0">&bull;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[11px] text-gray-500">
            Helpline: <strong>011-25750000</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#123653] hover:bg-[#1769AA] text-white text-xs font-semibold transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
