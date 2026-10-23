import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Stethoscope,
  Heart,
  Landmark,
  PhoneCall,
  Activity
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

const HERO_SLIDES = [
  {
    id: 0,
    badgeText: 'SIR GANGA RAM HOSPITAL · NEW DELHI · ESTD. 1954',
    badgeIcon: Award,
    badgeColor: 'text-[#0D7B7B] bg-teal-50 border-teal-200',
    titleMain: 'Compassionate Care.',
    titleAccent: 'World-Class Clinical Preeminence.',
    description: 'A premier 900-bed multispecialty tertiary referral hospital combining 70+ years of institutional trust with advanced clinical outcomes and compassionate patient care.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    primaryCtaText: 'Find a Doctor & OPD Slot',
    primaryCtaAction: 'search',
    secondaryCtaText: 'Book Appointment',
    secondaryCtaAction: 'appointment',
    tag: 'Institutional Excellence'
  },
  {
    id: 1,
    badgeText: 'PIONEERING ROBOTIC SURGERY & ORGAN TRANSPLANTS',
    badgeIcon: Activity,
    badgeColor: 'text-[#0D7B7B] bg-teal-50 border-teal-200',
    titleMain: 'Next-Gen Robotics.',
    titleAccent: '4,500+ Successful Transplants.',
    description: "India's foremost organ transplant center with 4th-Gen da Vinci Xi surgical robotics, delivering sub-millimeter precision, minimal blood loss, and faster recovery.",
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    primaryCtaText: 'Explore Clinical Specialties',
    primaryCtaAction: 'specialties',
    secondaryCtaText: 'Consult Specialist',
    secondaryCtaAction: 'appointment',
    tag: 'Advanced Technology'
  },
  {
    id: 2,
    badgeText: 'FOUNDED BY SIR GANGA RAM · NOT-FOR-PROFIT GOVERNANCE',
    badgeIcon: Landmark,
    badgeColor: 'text-[#DE5824] bg-orange-50 border-orange-200',
    titleMain: 'An Imperial Heritage.',
    titleAccent: '20% Free Beds for EWS Patients.',
    description: 'Inaugurated in 1954 by Prime Minister Jawaharlal Nehru, upholding our founding humanitarian charter where every surplus rupee is reinvested directly into patient welfare.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    primaryCtaText: 'Our Institutional Heritage',
    primaryCtaAction: 'heritage',
    secondaryCtaText: 'Book Consultation',
    secondaryCtaAction: 'appointment',
    tag: 'Charitable Trust'
  },
  {
    id: 3,
    badgeText: '24X7 LEVEL-1 EMERGENCY CASUALTY & AMBULANCE FLEET',
    badgeIcon: PhoneCall,
    badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
    titleMain: 'Immediate Critical Care.',
    titleAccent: 'Round-The-Clock Trauma Response.',
    description: 'Round-the-clock emergency casualty triage, dedicated cardiac catheterization labs, ECMO life support, advanced surgical trauma suites, and GPS-tracked ambulance fleet.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    primaryCtaText: 'Emergency Protocols',
    primaryCtaAction: 'emergency',
    secondaryCtaText: 'Call Hotline: 011-42254000',
    secondaryCtaAction: 'call_emergency',
    tag: 'Trauma & Critical Care'
  }
];

export const HeroSection = ({
  onFindDoctorClick,
  onOpenAppointment,
  onOpenEmergency
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideDuration = 5500; // 5.5 seconds per slide
  const timerRef = useRef(null);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);

    return () => clearInterval(timerRef.current);
  }, [isPaused, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const active = HERO_SLIDES[currentSlide];
  const BadgeIcon = active.badgeIcon;

  const handlePrimaryClick = () => {
    if (active.primaryCtaAction === 'search' && onFindDoctorClick) {
      onFindDoctorClick();
    } else if (active.primaryCtaAction === 'specialties') {
      const el = document.getElementById('specialties');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (active.primaryCtaAction === 'heritage') {
      const el = document.getElementById('heritage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (active.primaryCtaAction === 'emergency') {
      onOpenEmergency && onOpenEmergency();
    } else if (onFindDoctorClick) {
      onFindDoctorClick();
    }
  };

  const handleSecondaryClick = () => {
    if (active.secondaryCtaAction === 'call_emergency') {
      window.location.href = `tel:${hospitalInfo.contacts.emergency}`;
    } else if (onOpenAppointment) {
      onOpenAppointment();
    }
  };

  return (
    <section
      className="relative bg-gradient-to-b from-sky-50/40 via-white to-[#F8FAFC] pt-6 sm:pt-16 pb-12 sm:pb-24 border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Royal Background Watermark Crest */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-amber-100/20 via-sky-100/20 to-transparent blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-page mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Dynamic Royal Slide Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Royal Badge with Shimmer and Pulse */}
            <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-xs transition-all duration-500 max-w-full ${active.badgeColor}`}>
              <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{active.badgeText}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping opacity-75 shrink-0 hidden xs:inline-block"></span>
            </div>

            {/* Dynamic Headline with Brand Logo Teal Accent */}
            <div className="min-h-auto sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#0B2545] leading-[1.18] sm:leading-[1.12] tracking-tight transition-all duration-500">
                {active.titleMain}{' '}
                <span className="text-[#0D7B7B] block sm:inline font-bold">
                  {active.titleAccent}
                </span>
              </h1>

              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal mt-2.5 sm:mt-4 transition-all duration-500">
                {active.description}
              </p>
            </div>

            {/* Clear Primary & Secondary CTAs - Brand Navy & Brand Orange */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={handlePrimaryClick}
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-4 rounded-xl bg-[#0B2545] hover:bg-[#0D7B7B] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md group active:scale-[0.99]"
              >
                <Search className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
                <span>{active.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleSecondaryClick}
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-4 rounded-xl bg-[#DE5824] hover:bg-[#C64716] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{active.secondaryCtaText}</span>
              </button>
            </div>

            {/* Clean Carousel Navigation & Institutional Hallmarks (Replaces 4-box indicator grid) */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              {/* Sleek Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full h-2 ${
                      currentSlide === idx
                        ? 'w-8 bg-[#0D7B7B]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="text-xs text-slate-400 ml-2 font-medium">
                  0{currentSlide + 1} / 0{HERO_SLIDES.length}
                </span>
              </div>

              {/* Institutional Quality Hallmarks */}
              <div className="flex items-center gap-3 sm:gap-4 text-slate-500 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[#0D7B7B]">
                  <ShieldCheck className="w-4 h-4 text-[#0D7B7B]" />
                  NABH & NABL Accredited
                </span>
                <span className="text-slate-300">&middot;</span>
                <span>900+ Beds</span>
                <span className="text-slate-300">&middot;</span>
                <span>71 Specialties</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame with Auto-Slider Controls */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            
            {/* Outer Showcase Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border border-slate-200/80 bg-white p-1 sm:p-1.5 shadow-xl">
              
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[260px] xs:h-[300px] sm:h-[400px] lg:h-[450px] bg-slate-900">
                {/* Images Layer with Crossfade */}
                {HERO_SLIDES.map((slide, idx) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.titleMain}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ))}

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/20 to-transparent"></div>

                {/* Interactive Chevron Navigation Arrows on Image */}
                <div className="absolute inset-y-0 inset-x-2 sm:inset-x-3 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#0B2545] backdrop-blur-md shadow-md border border-white/60 flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#0B2545] backdrop-blur-md shadow-md border border-white/60 flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Elegant Bottom Caption Tag */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-5 text-white">
                  <div className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-1.5 sm:gap-2">
                    <span>Sir Ganga Ram Hospital</span>
                    <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs">
                      New Delhi
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/80 mt-0.5">
                    Old Rajinder Nagar &middot; Central Delhi &middot; Estd. 1954
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
