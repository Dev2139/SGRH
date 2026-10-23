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
  Building,
  HeartHandshake,
  ArrowRight,
  PhoneCall,
  ShieldCheck
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
    toast.success('सर गंगा राम अस्पताल — हिंदी भाषा विकल्प सक्रिय (Hindi / English Multilingual Support Active)', {
      duration: 3500
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300 shadow-sm border-b border-slate-200/80">
      
      {/* 1. Single Sleek Institutional Top Bar (Unified, Clean, Uncluttered) */}
      <div className="bg-[#0B2545] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-white/10">
        <div className="max-w-page mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Emergency & Helplines */}
          <div className="flex items-center gap-2 sm:gap-6 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-rose-300 tracking-wide uppercase">
                <span className="hidden xs:inline">24x7 </span>Emergency:
              </span>
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="font-bold text-white hover:text-rose-200 transition-colors tracking-wide underline underline-offset-2 text-[11px] sm:text-xs"
              >
                {hospitalInfo.contacts.emergency}
              </a>
            </div>

            <div className="hidden md:flex items-center gap-2 text-white/80 text-[11px]">
              <span className="text-white/30">|</span>
              <span>Ambulance:</span>
              <a href={`tel:${hospitalInfo.contacts.ambulance}`} className="font-semibold text-white hover:underline">
                {hospitalInfo.contacts.ambulance}
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-white/80 text-[11px]">
              <span className="text-white/30">|</span>
              <span>OPD Helpline:</span>
              <a href="tel:01142251111" className="font-semibold text-white hover:underline">
                011-42251111
              </a>
            </div>
          </div>

          {/* Right: Essential Portals & Controls */}
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
            <button
              onClick={onOpenLabPortal}
              className="hover:text-sky-300 transition-colors flex items-center gap-1 text-white/90 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Lab Reports</span>
            </button>

            <button
              onClick={onOpenInternational}
              className="hover:text-sky-300 transition-colors hidden md:flex items-center gap-1.5 text-white/90 font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>International Desk</span>
            </button>

            <span className="hidden sm:inline text-white/30">|</span>

            {/* Accessibility Font Size Controls */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-white/10 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px]">
              <span className="text-white/60 text-[9px] sm:text-[10px] hidden sm:inline">Text:</span>
              <button
                onClick={() => onChangeFontSize && onChangeFontSize('normal')}
                className={`px-1.5 py-0.2 rounded font-bold transition-colors ${fontSize === 'normal' ? 'bg-white text-[#0B2545]' : 'text-white/80 hover:text-white'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => onChangeFontSize && onChangeFontSize('large')}
                className={`px-1.5 py-0.2 rounded font-bold transition-colors ${fontSize === 'large' ? 'bg-white text-[#0B2545]' : 'text-white/80 hover:text-white'}`}
                title="Larger text size for comfortable reading"
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
              <span className="hidden xs:inline">हिन्दी / ENG</span>
              <span className="xs:hidden">हिन्दी</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Spacious, Elegant, Light) */}
      <nav className={`max-w-page mx-auto px-3 sm:px-4 lg:px-6 transition-all duration-200 ${isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'}`}>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Official Rectangular SGRH Logo (Whole lockup in one clean element) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group focus:outline-none shrink-0"
            aria-label="Sir Ganga Ram Hospital Home"
          >
            <img
              src="/sgrh-logo.png"
              alt="Sir Ganga Ram Hospital - Trust of Generations"
              className="h-8 xs:h-9 sm:h-11 md:h-12 max-w-[200px] xs:max-w-[240px] sm:max-w-none w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              loading="eager"
            />
          </a>

          {/* Clean Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2545]">
            
            {/* Find a Doctor */}
            <button
              onClick={() => scrollTo('doctor-search')}
              className="px-3.5 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Find a Doctor
            </button>

            {/* Specialties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('specialties')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3.5 py-2 rounded-lg flex items-center gap-1 hover:text-[#0284C7] hover:bg-slate-50 transition-colors ${
                  activeDropdown === 'specialties' ? 'text-[#0284C7] bg-slate-50' : ''
                }`}
              >
                <span>Specialties</span>
                <ChevronDown className="w-4 h-4 opacity-60" />
              </button>

              {activeDropdown === 'specialties' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-2.5 text-sm space-y-1">
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('cardiology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0B2545] block">Cardiology & Cardiac Surgery</span>
                      <span className="text-xs text-slate-500">TAVI, Cath Lab & Heart Surgery</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('nephrology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0B2545] block">Nephrology & Renal Transplant</span>
                      <span className="text-xs text-slate-500">4,500+ successful kidney transplants</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('gastroenterology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0B2545] block">Gastroenterology & Liver</span>
                      <span className="text-xs text-slate-500">Endoscopy & Liver transplant</span>
                    </button>
                    <button
                      onClick={() => {
                        scrollTo('doctor-search');
                        if (onSelectDepartmentFilter) onSelectDepartmentFilter('oncology');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#0284C7] transition-colors"
                    >
                      <span className="font-bold text-[#0B2545] block">Medical & Surgical Oncology</span>
                      <span className="text-xs text-slate-500">TrueBeam Linac & precision chemotherapy</span>
                    </button>
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <button
                        onClick={() => scrollTo('specialties')}
                        className="w-full text-left px-3 py-1.5 text-xs font-bold text-[#0284C7] hover:underline flex items-center justify-between"
                      >
                        <span>View All 71 Medical Departments</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Patient Services */}
            <button
              onClick={() => scrollTo('patient-services')}
              className="px-3.5 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Patient Guide
            </button>

            {/* Heritage */}
            <button
              onClick={() => scrollTo('heritage')}
              className="px-3.5 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Heritage & Trust
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-2 rounded-lg hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Action CTAs & Search */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => {
                scrollTo('doctor-search');
                if (onSearchFocus) onSearchFocus();
              }}
              className="p-2 sm:p-2.5 text-slate-500 hover:text-[#0B2545] hover:bg-slate-100 rounded-xl transition-colors"
              title="Search Doctors or Departments"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Emergency Casualty Button */}
            <button
              onClick={onOpenEmergency}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition-colors"
              title="24x7 Emergency Casualty"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
              <span>Casualty 24x7</span>
            </button>

            {/* Primary Appointment Button (Desktop / Tablet only; placed inside Hamburger menu for Mobile) */}
            <button
              onClick={onOpenAppointment}
              className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full sm:rounded-2xl bg-[#DE5824] hover:bg-[#C64716] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#0B2545] hover:bg-slate-100 rounded-xl transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-3 animate-fadeIn">
            
            {/* 1. Primary Book Appointment CTA inside Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#DE5824] hover:bg-[#C64716] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-all"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* 2. Quick Emergency & Lab Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-xs active:scale-[0.98] transition-transform"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLabPortal();
                }}
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-teal-50 text-[#0D7B7B] text-xs font-bold border border-teal-200 active:scale-[0.98] transition-transform"
              >
                <FileText className="w-4 h-4" />
                <span>Lab Reports</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
              <button
                onClick={() => scrollTo('doctor-search')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>Find a Doctor & OPD Timings</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('specialties')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>Medical Specialties (71 Departments)</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('patient-services')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>Patient & Visitor Guide</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('heritage')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>Heritage & Charitable Trust (20% Free Beds)</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInternational();
                }}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>International Patient Desk & Medical Visa</span>
                <Globe className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors"
              >
                <span>Hospital Location & Contact</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </nav>

            {/* Mobile Footer Helpstrip */}
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between px-2">
              <span>OPD Desk: <strong className="text-slate-800">011-42251111</strong></span>
              <span>Central: <strong className="text-slate-800">011-25750000</strong></span>
            </div>

          </div>
        )}

      </nav>
    </header>
  );
};
