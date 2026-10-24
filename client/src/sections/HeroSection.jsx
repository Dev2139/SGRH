import React, { useState, useEffect } from 'react';
import {
  Search,
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  PhoneCall,
  Activity,
  Ambulance,
  Heart,
  Stethoscope,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  FileText
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export const HeroSection = ({
  onFindDoctorClick,
  onOpenAppointment,
  onOpenEmergency
}) => {
  const [activeTabCard, setActiveTabCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // 3 signature feature cards from Brahm Shakti Hospital
  const BSH_FEATURE_CARDS = [
    {
      id: 0,
      badge: "Trust Ethos",
      title: "Caring for you for Life",
      subtitle: "A total healthcare ethos run through the corridors of Brahm Shakti.",
      description: "250-bedded modern tertiary center managed by Brahm Shakti Trust (Regd.), delivering high-tech surgical and critical care at highly subsidised fees.",
      icon: Heart,
      accentColor: "from-sky-500/10 to-transparent border-sky-200",
      iconColor: "text-[#0284C7] bg-sky-50",
      ctaText: "Explore Trust Healthcare",
      action: "heritage"
    },
    {
      id: 1,
      badge: "Second Opinion",
      title: "Get a Quote / Second Opinion",
      subtitle: "Transparent surgery packages, subsidized rates & cashless TPA insurance.",
      description: "Consult our senior medical faculty for diagnostic review, surgical estimates, or second opinions before major interventions.",
      icon: FileText,
      accentColor: "from-amber-500/10 to-transparent border-amber-200",
      iconColor: "text-amber-700 bg-amber-50",
      ctaText: "Request Second Opinion",
      action: "quote"
    },
    {
      id: 2,
      badge: "Consultants",
      title: "Find a Doctor & Timings",
      subtitle: "Consult our experienced senior specialists across 25+ disciplines.",
      description: "Direct access to OPD schedules for Orthopaedics, Cardiology, Nephrology, General Surgery, Gynaecology, Neuro, and Medicine.",
      icon: Stethoscope,
      accentColor: "from-teal-500/10 to-transparent border-teal-200",
      iconColor: "text-teal-700 bg-teal-50",
      ctaText: "View Doctor Schedules",
      action: "doctor"
    }
  ];

  // Auto-cycle through the 3 cards gently every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabCard((prev) => (prev + 1) % BSH_FEATURE_CARDS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [BSH_FEATURE_CARDS.length]);

  const handleCardClick = (card) => {
    setActiveTabCard(card.id);
    if (card.action === 'quote' || card.action === 'appointment') {
      onOpenAppointment && onOpenAppointment();
    } else if (card.action === 'doctor') {
      onFindDoctorClick && onFindDoctorClick();
    } else if (card.action === 'heritage') {
      const el = document.getElementById('heritage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onFindDoctorClick) {
      onFindDoctorClick(searchQuery);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-[#F8FAFC] pt-5 sm:pt-10 pb-12 sm:pb-20 border-b border-slate-200/90 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-sky-100/30 blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-amber-50/40 blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-page mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        {/* Top Emergency Flash Strip: Exactly the Brahm Shakti Hospital Ambulance Service Callout */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-r from-rose-50 via-white to-amber-50/40 border border-rose-200/80 rounded-2xl p-2.5 sm:p-3.5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
              <Ambulance className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                  Ambulance / Emergency Service &middot; 24 Hrs. Services
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
              </div>
              <p className="text-xs text-slate-600 hidden sm:block">
                Immediate casualty reception, cardiac life support, and rapid mobile ICU ambulance dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Dial: +91-{hospitalInfo.contacts.emergency}</span>
            </a>
          </div>
        </div>

        {/* Main Hero Split Grid: Left Story & Quick Search | Right: Brahm Shakti 3-Card Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Brahm Shakti Story, Tagline & Direct Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0C2B4E] bg-sky-50 border border-sky-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span className="truncate">Brahm Shakti Hospital &middot; Budh Vihar, New Delhi</span>
              <span className="hidden xs:inline-block text-slate-300">&middot;</span>
              <span className="hidden xs:inline-block text-[#C28B2B]">Brahm Shakti Trust</span>
            </div>

            {/* Main Headline: Exactly Brahm Shakti's "Caring for you for Life" */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0C2B4E] leading-[1.12] tracking-tight">
                Caring for you <br className="hidden sm:inline" />
                <span className="text-[#0284C7] underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                  for Life
                </span>
              </h1>

              {/* Memorable Ethos Subtitle */}
              <p className="text-base sm:text-lg font-semibold text-[#0C2B4E]/80 italic pt-1">
                "A total healthcare ethos run through the corridors of Brahm Shakti"
              </p>

              {/* Verified Trust Hospital Narrative */}
              <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal pt-1">
                <strong className="text-[#0C2B4E]">BRAHM SHAKTI HOSPITAL</strong> is a 250-bedded tertiary healthcare project managed by <strong className="text-[#0C2B4E]">Brahm Shakti Trust (Regd.)</strong>. Providing high-tech facilities like Coronary Bypass Surgery, Kidney Care &amp; Dialysis, Ortho Spine, Neurosurgery, and Cancer Care at highly subsidised fees.
              </p>
            </div>

            {/* Quick Live Doctor Search Bar right inside Hero */}
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white p-1.5 sm:p-2 rounded-2xl border border-slate-200 shadow-sm max-w-xl flex items-center gap-2 transition-all focus-within:border-[#0284C7] focus-within:ring-2 focus-within:ring-sky-100"
            >
              <div className="pl-2.5 text-slate-400">
                <Search className="w-5 h-5 text-[#0284C7]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specialist (e.g. Orthopedics, Medicine, Kidney, Surgery)..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#0C2B4E] placeholder:text-slate-400 focus:outline-none py-1.5"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2.5 rounded-xl bg-[#0C2B4E] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                Find Doctor
              </button>
            </form>

            {/* Primary Action Buttons: Book Consultation & Quote */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-1">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment / Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onFindDoctorClick && onFindDoctorClick()}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0C2B4E] border border-slate-300 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4 text-slate-500" />
                <span>OPD Doctor Schedules</span>
              </button>
            </div>

            {/* Core Hospital Hallmarks Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5 text-[#0C2B4E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>250-Bedded Project</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0C2B4E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subsidised Fee Ethos</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0C2B4E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Brahm Shakti Trust (Regd.)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0C2B4E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Budh Vihar, New Delhi</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Brahm Shakti Hospital's 3 Signature Feature Cards (Interactive, Modern, Unique) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                <span className="text-xs font-bold text-[#0C2B4E] uppercase tracking-wider">
                  Patient Services &amp; Highlights
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Brahm Shakti Portals
              </span>
            </div>

            {/* Stack of the 3 signature Brahm Shakti Cards */}
            <div className="space-y-3">
              {BSH_FEATURE_CARDS.map((card, idx) => {
                const CardIcon = card.icon;
                const isActive = activeTabCard === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-white shadow-elevated border-[#0284C7] ring-1 ring-[#0284C7]/20 scale-[1.01]'
                        : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-sm'
                    }`}
                  >
                    {/* Active Indicator Bar on Left */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0284C7]"></div>
                    )}

                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${card.iconColor}`}>
                        <CardIcon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display font-bold text-sm sm:text-base text-[#0C2B4E] group-hover:text-[#0284C7] transition-colors truncate">
                            {card.title}
                          </h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                            {card.badge}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                          {card.subtitle}
                        </p>

                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                          <span className="group-hover:underline">{card.ctaText}</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Panel List & Insurance Info Pill */}
            <div className="bg-gradient-to-r from-slate-100 to-sky-50 rounded-xl p-3 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                Cashless Insurance &amp; Panel Empanelment
              </span>
              <button
                onClick={() => {
                  const el = document.getElementById('patient-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-bold text-[#0284C7] hover:underline shrink-0"
              >
                View Panels &rarr;
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
