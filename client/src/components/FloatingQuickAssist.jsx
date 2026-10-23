import React, { useState, useEffect } from 'react';
import { PhoneCall, Calendar, FileText, ArrowUp, X, MessageSquare, ChevronUp } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export const FloatingQuickAssist = ({
  onOpenAppointment,
  onOpenEmergency,
  onOpenLabPortal
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Patient Assistance" className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#123653] shadow-elevated border border-gray-200 flex items-center justify-center transition-all hover:-translate-y-0.5 active:translate-y-0"
          title="Scroll to top of page"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Assist Bar */}
      <div className="bg-[#123653] text-white rounded-full shadow-2xl border border-white/20 p-1.5 flex items-center gap-1.5 backdrop-blur-md">
        
        {/* 1. Emergency Dial */}
        <button
          onClick={onOpenEmergency}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-sm"
          title="24x7 Emergency Casualty Helpline"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <PhoneCall className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">24x7 Casualty</span>
        </button>

        {/* 2. Book Appointment */}
        <button
          onClick={onOpenAppointment}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
          title="Request Doctor Consultation"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-300" />
          <span className="hidden sm:inline">Book OPD</span>
        </button>

        {/* 3. Lab Reports */}
        <button
          onClick={onOpenLabPortal}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
          title="View Lab & Diagnostic Test Reports"
        >
          <FileText className="w-3.5 h-3.5 text-teal-300" />
          <span className="hidden sm:inline">Lab Reports</span>
        </button>

      </div>
    </aside>
  );
};
