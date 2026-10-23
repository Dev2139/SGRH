import React from 'react';
import { Search, Calendar, FileText, Ambulance, ArrowRight } from 'lucide-react';

export const QuickAccessPanel = ({
  onFindDoctorClick,
  onOpenAppointment,
  onLabResultsClick,
  onEmergencyClick
}) => {
  const cards = [
    {
      id: 'doctor',
      title: 'Find a Doctor',
      subtitle: 'Search 71+ departments, senior consultants & daily OPD clinic hours.',
      icon: Search,
      action: onFindDoctorClick,
      badge: 'Directory',
      badgeColor: 'bg-teal-50 text-[#0D7B7B] border-teal-200',
      iconBg: 'bg-teal-50 text-[#0D7B7B]'
    },
    {
      id: 'appointment',
      title: 'Book Consultation',
      subtitle: 'Request a prioritized doctor consultation or follow-up OPD slot online.',
      icon: Calendar,
      action: onOpenAppointment,
      badge: 'Online Booking',
      badgeColor: 'bg-orange-50 text-[#DE5824] border-orange-200',
      iconBg: 'bg-orange-50 text-[#DE5824]'
    },
    {
      id: 'lab',
      title: 'Download Lab Reports',
      subtitle: 'View and download authorized NABL diagnostic pathology and radiology tests.',
      icon: FileText,
      action: onLabResultsClick,
      badge: 'Instant Access',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      iconBg: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'emergency',
      title: '24x7 Emergency Care',
      subtitle: 'Immediate trauma resuscitation, ICU beds, and ambulance dispatch.',
      icon: Ambulance,
      action: onEmergencyClick,
      badge: '24x7 Active',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-rose-100 text-rose-600',
      isEmergency: true
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-20 border-b border-slate-200/80">
      <div className="max-w-page mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0D7B7B] bg-teal-50 border border-teal-200/80 px-3 sm:px-3.5 py-1 rounded-full inline-block">
            Immediate Patient Services
          </span>
          <h2 className="font-display text-xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
            How can we assist you today?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Select a service below for instant assistance, appointment booking, or emergency care.
          </p>
        </div>

        {/* 4 Spacious, Beautiful Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={c.action}
                className={`p-5 sm:p-7 text-left rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 active:scale-[0.99] ${
                  c.isEmergency
                    ? 'bg-rose-50/30 border-rose-200 hover:border-rose-400 hover:bg-rose-50/60 shadow-xs hover:shadow-md'
                    : 'bg-[#F8FAFC] border-slate-200/90 hover:border-[#0284C7]/60 hover:bg-white shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 ${c.iconBg}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full border ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-base sm:text-lg mb-1.5 sm:mb-2 transition-colors ${
                    c.isEmergency ? 'text-rose-700 group-hover:text-rose-800' : 'text-[#0B2545] group-hover:text-[#0284C7]'
                  }`}>
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.subtitle}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold">
                  <span className={c.isEmergency ? 'text-rose-700' : 'text-[#0284C7]'}>
                    {c.isEmergency ? 'Call 011-42254000' : 'Access Service'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
