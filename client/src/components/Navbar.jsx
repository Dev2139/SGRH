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
      <div className="bg-[#0B2545] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-page mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Emergency & Helplines */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-[11px] font-bold text-rose-300 tracking-wide uppercase">
                24x7 Emergency:
              </span>
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="font-bold text-white hover:text-rose-200 transition-colors tracking-wide underline underline-offset-2"
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
          <div className="flex items-center gap-3 sm:gap-5 text-[11px]">
            <button
              onClick={onOpenLabPortal}
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-white/90 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Lab Reports</span>
            </button>

            <button
              onClick={onOpenInternational}
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-white/90 font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">International Desk</span>
            </button>

            <span className="hidden sm:inline text-white/30">|</span>

            {/* Accessibility Font Size Controls */}
            <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[11px]">
              <span className="text-white/60 text-[10px] hidden sm:inline">Text:</span>
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
              className="font-semibold text-sky-300 hover:text-white transition-colors border border-white/20 px-2 py-0.5 rounded text-[11px]"
              title="Toggle Hindi/English Language"
            >
              हिन्दी / ENG
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Spacious, Elegant, Light) */}
      <nav className={`max-w-page mx-auto px-4 lg:px-6 transition-all duration-200 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Sir Ganga Ram Hospital Home"
          >
            {/* Royal Crest */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B2545] via-[#143B66] to-[#0B2545] text-white flex items-center justify-center shadow-md border border-amber-300/40 relative overflow-hidden group-hover:border-amber-400 group-hover:shadow-amber-500/10 transition-all shrink-0">
              <div className="text-center">
                <span className="font-display font-black text-base leading-none tracking-tight block text-white">GR</span>
                <span className="text-[8px] font-sans tracking-widest text-amber-300 block font-bold">1954</span>
              </div>
            </div>

            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-tight block">
                SIR GANGA RAM HOSPITAL
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>NEW DELHI</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-[#0284C7] font-semibold">NABH & NABL ACCREDITED &middot; 900+ BEDS</span>
              </div>
            </div>
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
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => {
                scrollTo('doctor-search');
                if (onSearchFocus) onSearchFocus();
              }}
              className="p-2.5 text-slate-500 hover:text-[#0B2545] hover:bg-slate-100 rounded-xl transition-colors"
              title="Search Doctors or Departments"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Emergency Casualty Button */}
            <button
              onClick={onOpenEmergency}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition-colors"
              title="24x7 Emergency Casualty"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
              <span>Casualty 24x7</span>
            </button>

            {/* Primary Appointment Button */}
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#0B2545] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-2 animate-fadeIn">
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-600 text-white text-xs font-bold"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLabPortal();
                }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-50 text-[#0284C7] text-xs font-bold border border-sky-200"
              >
                <FileText className="w-4 h-4" />
                <span>Lab Reports</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
              <button
                onClick={() => scrollTo('doctor-search')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Find a Doctor & OPD Timings</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('specialties')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Medical Specialties (71 Departments)</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('patient-services')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Patient & Visitor Guide</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('heritage')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Heritage & Charitable Trust</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Hospital Location & Contact</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </nav>

          </div>
        )}

      </nav>
    </header>
  );
};
