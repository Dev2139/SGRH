import React from 'react';
import { Landmark, Award, BookOpen, HeartHandshake, ArrowRight } from 'lucide-react';

export const HeritageSection = ({ onOpenAppointment }) => {
  return (
    <section id="heritage" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-page mx-auto px-4 lg:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Archival Visual & Clean Caption */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-200/90 bg-white">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900"
                alt="Sir Ganga Ram Hospital Historic Campus and Medical Heritage"
                className="w-full h-[400px] sm:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent"></div>

              {/* Clean Bottom Overlay Card */}
              <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-md">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0284C7] mb-1">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>FOUNDATION CHRONICLE &middot; 1954</span>
                </div>
                <div className="font-display font-bold text-base text-[#0B2545]">
                  Inaugurated by Prime Minister Jawaharlal Nehru
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Re-established in New Delhi following Sir Ganga Ram's original humanitarian trust founded in 1921.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Heritage & Humanitarian Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>THE INSTITUTIONAL LEGACY & CHARITABLE TRUST</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              A Philanthropic Vision Guiding Ethical Healthcare
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Sir Ganga Ram (1851–1927)—legendary civil engineer, philanthropist, and nation builder—established a charter guided by one enduring principle: <strong>world-class medical care must remain accessible to every segment of society</strong>.
            </p>

            {/* 2 Core Tenets (Philanthropy, Academics) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545]">
                  <HeartHandshake className="w-4 h-4 text-[#0284C7]" />
                  <span>20% Free Beds for EWS</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Inpatient beds reserved for economically weaker sections with fully subsidized consultations, medicines, and complex surgeries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545]">
                  <BookOpen className="w-4 h-4 text-[#0284C7]" />
                  <span>Postgraduate DNB Teaching</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A premier national academic institution training future clinical leaders across super-specialty medical disciplines.
                </p>
              </div>
            </div>

            {/* Not-for-Profit Governance Note */}
            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/60 flex items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-[#0B2545] block">Not-for-Profit Governance</span>
                <span className="text-slate-600">Surplus hospital earnings are reinvested directly into patient care and clinical technology.</span>
              </div>
              <button
                onClick={onOpenAppointment}
                className="px-4 py-2 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white font-bold shrink-0 transition-colors"
              >
                Book Appointment
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
