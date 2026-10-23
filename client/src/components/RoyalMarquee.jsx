import React from 'react';
import {
  Award,
  ShieldCheck,
  Landmark,
  Activity,
  HeartHandshake,
  GraduationCap,
  Globe,
  Zap,
  PhoneCall
} from 'lucide-react';

const MARQUEE_ITEMS = [
  {
    icon: Award,
    title: 'NABH & NABL Dual Accreditations',
    subtitle: 'Highest National Clinical Quality',
    color: 'text-teal-400'
  },
  {
    icon: Landmark,
    title: 'Inaugurated by PM Jawaharlal Nehru (1954)',
    subtitle: '70+ Years Institutional Heritage',
    color: 'text-sky-400'
  },
  {
    icon: Activity,
    title: '4,500+ Successful Kidney Transplants',
    subtitle: 'Pioneering Renal Institute',
    color: 'text-emerald-400'
  },
  {
    icon: Zap,
    title: '4th-Gen da Vinci Xi Robotic Surgery',
    subtitle: 'Sub-Millimeter Surgical Precision',
    color: 'text-orange-400'
  },
  {
    icon: HeartHandshake,
    title: '20% Free Beds for EWS Patients',
    subtitle: 'Fully Subsidized Charitable Care',
    color: 'text-rose-400'
  },
  {
    icon: GraduationCap,
    title: 'Premier National DNB Teaching Institute',
    subtitle: 'Super-Specialty Medical Postgraduates',
    color: 'text-teal-300'
  },
  {
    icon: Globe,
    title: 'International Referral Destination',
    subtitle: 'Patients from 45+ Countries',
    color: 'text-teal-400'
  },
  {
    icon: PhoneCall,
    title: '24x7 Level-1 Emergency & Trauma Casualty',
    subtitle: 'Direct Dispatch: 011-42254000',
    color: 'text-rose-400'
  }
];

export const RoyalMarquee = () => {
  return (
    <div className="bg-[#06172B] border-y border-teal-500/20 py-3.5 relative overflow-hidden select-none">
      
      {/* Subtle Ambient Edge Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#06172B] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#06172B] to-transparent z-10 pointer-events-none"></div>

      {/* Continuously Sliding Infinite Track */}
      <div className="animate-marquee flex items-center gap-8 text-white">
        
        {/* First Set */}
        {MARQUEE_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`item-1-${idx}`}
              className="flex items-center gap-3 px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0 group cursor-default"
            >
              <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold tracking-wide text-white group-hover:text-teal-300 transition-colors">
                  <span>{item.title}</span>
                </div>
                <div className="text-[10px] text-white/60 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          );
        })}

        {/* Duplicate Set for Seamless Continuous Looping */}
        {MARQUEE_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`item-2-${idx}`}
              className="flex items-center gap-3 px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0 group cursor-default"
            >
              <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold tracking-wide text-white group-hover:text-teal-300 transition-colors">
                  <span>{item.title}</span>
                </div>
                <div className="text-[10px] text-white/60 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};
