import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export const Footer = ({
  onFindDoctorClick,
  onAppointmentClick,
  onLabPortalClick,
  onEmergencyClick,
  onScrollToSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2236] text-white border-t border-white/10">
      
      {/* 1. Main Footer Grid */}
      <div className="max-w-page mx-auto px-3 sm:px-4 lg:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Column 1: Institutional Wordmark & Heritage Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 border border-white/20 shrink-0 overflow-hidden shadow-xs">
                <img
                  src="https://res.cloudinary.com/urzka7oz/image/upload/v1792742734/sgrh.webp"
                  alt="Sir Ganga Ram Hospital Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-base tracking-tight text-white block">
                  SIR GANGA RAM HOSPITAL
                </span>
                <span className="text-[10px] text-teal-300 font-semibold tracking-wider uppercase block">
                  New Delhi &middot; Estd. 1954
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              A 900-bed premier multispecialty tertiary referral hospital and postgraduate medical research institution in New Delhi, governed by the Sir Ganga Ram Trust Society on a not-for-profit charitable model.
            </p>

            <div className="pt-2 text-xs space-y-2 text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">
                  Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Delhi – 110060, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">
                  Central: <strong>011-25750000</strong> &middot; Casualty: <strong>011-42254000</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs">gangaram@sgrh.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Patient Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-white tracking-wide border-b border-white/10 pb-2">
              Patient Resources
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={onFindDoctorClick}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Find a Doctor</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onAppointmentClick}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Consultation Request</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onLabPortalClick}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Online Lab Reports</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('patient-services')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Admissions & Discharge</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('patient-services')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Billing & TPA Cashless</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('patient-services')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Visitor Regulations</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services & Centers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-white tracking-wide border-b border-white/10 pb-2">
              Medical Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => onScrollToSection('specialties')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Cardiology & Cardiac Surgery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('specialties')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Nephrology & Renal Transplant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('specialties')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Gastroenterology & Hepatology</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('specialties')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Comprehensive Cancer Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('specialties')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Neurology & Neurosurgery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onEmergencyClick}
                  className="text-red-300 hover:text-red-200 transition-colors flex items-center gap-1 text-left font-semibold"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>24x7 Emergency & Trauma Casualty</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Governance & Ethics (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-sm text-white tracking-wide border-b border-white/10 pb-2">
              Institution & Ethics
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => onScrollToSection('heritage')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Sir Ganga Ram Heritage & Story</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('leadership')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Board of Management</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('welfare')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Charitable Trust & EWS Welfare</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('news')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Academic DNB & Research Updates</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('international')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>International Patient Assistance</span>
                </button>
              </li>
            </ul>

            {/* Accreditations micro-block */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-teal-300">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>NABH & NABL Accredited Center</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Sub-footer & Legal */}
      <div className="border-t border-white/10 py-5 sm:py-6 bg-[#081827] text-white/60 text-xs">
        <div className="max-w-page mx-auto px-3 sm:px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()} Sir Ganga Ram Hospital, New Delhi. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-white/40">
              Proposal Concept Redesign by Creative Healthcare Experience Team.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-[11px] sm:text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Safeguards</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Return to top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
