import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Calendar,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  FileText,
  PhoneCall,
  Activity,
  Ambulance,
  Heart,
  Stethoscope,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import toast from 'react-hot-toast';
import { hospitalInfo } from '../data/hospitalData';

export const Navbar = ({
  onOpenAppointment,
  onOpenInternational,
  onOpenLabPortal,
  onOpenEmergency,
  onSelectDepartmentFilter,
  onSearchFocus,
  fontSize,
  onChangeFontSize
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    toast.success('ब्रह्म शक्ति अस्पताल — हिंदी भाषा विकल्प सक्रिय (Brahm Shakti Hospital Multilingual Active)', {
      duration: 3500
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300 shadow-sm border-b border-slate-200/90">
      
      {/* 1. Top Utility Bar: Emergency Hotline & Brahm Shakti Institutional Links */}
      <div className="bg-[#0C2B4E] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-white/10">
        <div className="max-w-page mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: 24-Hour Emergency & Ambulance Hotline */}
          <div className="flex items-center gap-2 sm:gap-6 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-rose-600/20 px-2 sm:px-3 py-0.5 rounded-full border border-rose-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <Ambulance className="w-3.5 h-3.5 text-rose-300 hidden xs:inline" />
              <span className="text-[10px] sm:text-[11px] font-bold text-rose-200 uppercase tracking-wider">
                Ambulance / Emergency 24 Hrs:
              </span>
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="font-extrabold text-white hover:text-rose-200 transition-colors tracking-wide underline underline-offset-2 text-[11px] sm:text-xs"
              >
                +91-{hospitalInfo.contacts.emergency}
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-slate-300 text-[11px]">
              <span className="text-white/20">|</span>
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Hospital Desk:</span>
              <a href={`tel:${hospitalInfo.contacts.casualtyAlternate}`} className="font-semibold text-white hover:underline">
                {hospitalInfo.contacts.casualtyAlternate}
              </a>
            </div>
          </div>

          {/* Right: Institutional Navigation from Brahm Shakti Hospital & Accessibility */}
          <div className="flex items-center gap-2 sm:gap-5 text-[10px] sm:text-[11px]">
            {/* Brahm Shakti Institutional Links */}
            <nav className="hidden xl:flex items-center gap-4 text-slate-300 font-medium">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                HOME
              </button>
              <span className="text-white/20">&middot;</span>
              <button
                onClick={() => scrollTo('heritage')}
                className="hover:text-white transition-colors"
              >
                ABOUT US
              </button>
              <span className="text-white/20">&middot;</span>
              <button
                onClick={() => scrollTo('patient-services')}
                className="hover:text-white transition-colors"
              >
                FAQ'S
              </button>
              <span className="text-white/20">&middot;</span>
              <button
                onClick={() => scrollTo('contact')}
                className="hover:text-white transition-colors"
              >
                CAREERS
              </button>
              <span className="text-white/20">&middot;</span>
              <button
                onClick={onOpenLabPortal}
                className="hover:text-sky-300 transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3 text-sky-400" />
                <span>LAB REPORTS</span>
              </button>
              <span className="text-white/20">&middot;</span>
              <button
                onClick={() => scrollTo('contact')}
                className="hover:text-white transition-colors"
              >
                CONTACT US
              </button>
            </nav>

            <span className="hidden xl:inline text-white/30">|</span>

            {/* Accessibility Font Size Controls */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-white/10 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px]">
              <span className="text-white/60 text-[9px] sm:text-[10px] hidden sm:inline">Text:</span>
              <button
                onClick={() => onChangeFontSize && onChangeFontSize('normal')}
                className={`px-1.5 py-0.2 rounded font-bold transition-colors ${fontSize === 'normal' ? 'bg-white text-[#0C2B4E]' : 'text-white/80 hover:text-white'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => onChangeFontSize && onChangeFontSize('large')}
                className={`px-1.5 py-0.2 rounded font-bold transition-colors ${fontSize === 'large' ? 'bg-white text-[#0C2B4E]' : 'text-white/80 hover:text-white'}`}
                title="Larger text size for seniors"
              >
                A+
              </button>
            </div>

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="font-semibold text-sky-300 hover:text-white transition-colors border border-white/20 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px]"
              title="Toggle Hindi/English Language"
            >
              <span>हिन्दी / ENG</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean, Distinct, Structured just like Brahm Shakti Hospital) */}
      <nav className={`max-w-page mx-auto px-3 sm:px-4 lg:px-6 transition-all duration-200 ${isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'}`}>
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brahm Shakti Hospital Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group focus:outline-none shrink-0"
            aria-label="Brahm Shakti Hospital Home"
          >
            <img
              src="/brahm-shakti-logo.svg"
              alt="Brahm Shakti Hospital - Caring for you for Life"
              className="h-10 xs:h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              loading="eager"
            />
          </a>

          {/* Center Navigation Links: Services, Find a Doctor, Specialties, Patient Services, Clinical Services, Health & Lifestyle */}
          <div className="hidden xl:flex items-center gap-1 text-[13.5px] font-bold text-[#0C2B4E] uppercase tracking-wide">
            
            {/* 1. SERVICES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-lg flex items-center gap-1 hover:text-[#0284C7] hover:bg-slate-50 transition-colors ${
                  activeDropdown === 'services' ? 'text-[#0284C7] bg-slate-50' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-2.5 text-xs space-y-1 normal-case">
                    <button
                      onClick={() => onOpenEmergency && onOpenEmergency()}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 hover:text-rose-700 transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">24x7 Emergency & Trauma</span>
                      <span className="text-[11px] text-slate-500">Immediate casualty arrival & mobile ICU</span>
                    </button>
                    <button
                      onClick={() => scrollTo('doctor-search')}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Outpatient (OPD) Clinics</span>
                      <span className="text-[11px] text-slate-500">Morning & evening consultant clinics</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('specialties');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('nephrology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Subsidized Dialysis Center</span>
                      <span className="text-[11px] text-slate-500">24x7 renal care at subsidized fee</span>
                    </button>
                    <button
                      onClick={onOpenLabPortal}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Diagnostic Radiology & Labs</span>
                      <span className="text-[11px] text-slate-500">CT Scan, MRI, Ultrasound & Blood Bank</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. FIND A DOCTOR */}
            <button
              onClick={() => scrollTo('doctor-search')}
              className="px-3 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Find a Doctor
            </button>

            {/* 3. OUR SPECIALTIES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('specialties')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-lg flex items-center gap-1 hover:text-[#0284C7] hover:bg-slate-50 transition-colors ${
                  activeDropdown === 'specialties' ? 'text-[#0284C7] bg-slate-50' : ''
                }`}
              >
                <span>Our Specialties</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'specialties' && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-2.5 text-xs space-y-1 normal-case">
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('orthopaedics');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Orthopaedics & Joint Surgery</span>
                      <span className="text-[11px] text-slate-500">Knee/Hip replacement, Arthroscopy & Spine</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('cardiology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Heart Surgeries & Interventions</span>
                      <span className="text-[11px] text-slate-500">Coronary Bypass & Cardiac Emergency</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('nephrology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Nephrology & Kidney Care</span>
                      <span className="text-[11px] text-slate-500">24x7 Subsidized Dialysis & Renal Care</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('neurosciences');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Neuro & Neuro Spine Surgeries</span>
                      <span className="text-[11px] text-slate-500">Brain & Spine microsurgery & Stroke unit</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('oncology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Cancer Treatment & Oncology</span>
                      <span className="text-[11px] text-slate-500">Surgical oncology & Day-care chemotherapy</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('cosmetic');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0C2B4E] block">Aesthetic & Cosmetic Surgeries</span>
                      <span className="text-[11px] text-slate-500">Rhinoplasty, Liposuction & Reconstructions</span>
                    </button>
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <button
                        onClick={() => scrollTo('specialties')}
                        className="w-full text-left px-3 py-1.5 text-xs font-bold text-[#0284C7] hover:underline flex items-center justify-between"
                      >
                        <span>View All Hospital Specialties</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. PATIENT SERVICES */}
            <button
              onClick={() => scrollTo('patient-services')}
              className="px-3 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Patient Services
            </button>

            {/* 5. CLINICAL SERVICES */}
            <button
              onClick={() => scrollTo('clinical-services')}
              className="px-3 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Clinical Services
            </button>

            {/* 6. HEALTH & LIFESTYLE */}
            <button
              onClick={() => scrollTo('heritage')}
              className="px-3 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Health & Lifestyle
            </button>
          </div>

          {/* Right Action CTAs: Search, 24x7 Ambulance, Book Appointment */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => {
                scrollTo('doctor-search');
                if (onSearchFocus) onSearchFocus();
              }}
              className="p-2 sm:p-2.5 text-slate-600 hover:text-[#0C2B4E] hover:bg-slate-100 rounded-xl transition-colors"
              title="Search Doctors or Services"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Emergency Hotline Button */}
            <button
              onClick={onOpenEmergency}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition-colors"
              title="24x7 Emergency Ambulance"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
              <span>Ambulance 24x7</span>
            </button>

            {/* Primary Appointment Button (Realistic Medical Blue) */}
            <button
              onClick={onOpenAppointment}
              className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wide transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#0C2B4E] hover:bg-slate-100 rounded-xl transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-3 animate-fadeIn">
            
            {/* Primary Book Appointment CTA inside Mobile Menu */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wide shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Appointment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wide shadow-sm"
              >
                <Ambulance className="w-4 h-4" />
                <span>Emergency 24x7</span>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1 font-semibold text-sm text-[#0C2B4E]">
              <button
                onClick={() => scrollTo('doctor-search')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Find a Doctor & OPD</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>

              <button
                onClick={() => scrollTo('specialties')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Our Specialties</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>

              <button
                onClick={() => scrollTo('patient-services')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Patient Services & TPA Panels</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>

              <button
                onClick={() => scrollTo('clinical-services')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Clinical Services (CT, MRI, Dialysis)</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>

              <button
                onClick={() => scrollTo('heritage')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>About Brahm Shakti Trust</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Contact Hospital & Location</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>
            </div>

            {/* Mobile Helplines Card */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Ambulance Hotline:</span>
                <a href={`tel:${hospitalInfo.contacts.emergency}`} className="font-bold text-rose-600 hover:underline">
                  +91-{hospitalInfo.contacts.emergency}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Hospital Board:</span>
                <a href={`tel:${hospitalInfo.contacts.casualtyAlternate}`} className="font-bold text-[#0C2B4E] hover:underline">
                  {hospitalInfo.contacts.casualtyAlternate}
                </a>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-slate-500 font-medium">Hospital Email:</span>
                <a href={`mailto:${hospitalInfo.contacts.email}`} className="font-bold text-[#0284C7] hover:underline">
                  {hospitalInfo.contacts.email}
                </a>
              </div>
            </div>

          </div>
        )}

      </nav>

    </header>
  );
};
