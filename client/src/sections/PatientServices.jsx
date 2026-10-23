import React from 'react';
import {
  Clock,
  Building2,
  CreditCard,
  Globe,
  PhoneCall,
  ArrowRight,
  Compass
} from 'lucide-react';

export const PatientServices = ({
  onAppointmentClick,
  onLabPortalClick,
  onInternationalClick,
  onEmergencyClick,
  onOpenAdmissions,
  onOpenBilling,
  onOpenVisitors
}) => {
  const patientHubCards = [
    {
      id: 'visitors',
      title: 'Visiting Hours & Passes',
      category: 'Inpatient Guidelines',
      description: 'Ward visiting hours (4–7 PM daily), ICU protocols, and attendant security pass guidelines.',
      icon: Clock,
      action: onOpenVisitors,
      ctaText: 'View Visiting Hours',
      badge: 'Daily 4:00 PM - 7:00 PM'
    },
    {
      id: 'admissions',
      title: 'Planned Admissions Guide',
      category: 'Hospitalization Prep',
      description: 'Checklist of required documents (Govt ID, Doctor slip), pre-admission desk, and room types.',
      icon: Building2,
      action: onOpenAdmissions,
      ctaText: 'Admissions Checklist',
      badge: '24x7 Admission Desk'
    },
    {
      id: 'billing',
      title: 'Cashless Insurance & TPA',
      category: 'Financial Clearance',
      description: 'Empanelment with Star Health, Medi Assist, ICICI Lombard, CGHS, ECHS, and 35+ TPAs.',
      icon: CreditCard,
      action: onOpenBilling,
      ctaText: 'Empaneled TPAs',
      badge: '35+ Empaneled Insurers'
    },
    {
      id: 'international',
      title: 'International Patient Desk',
      category: 'Global Healthcare',
      description: 'Dedicated medical visa invitation letters, language translators, and airport transfer support.',
      icon: Globe,
      action: onInternationalClick,
      ctaText: 'Medical Visa & Travel',
      badge: 'Patients from 45+ Countries'
    }
  ];

  return (
    <section id="patient-services" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-page mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            <span>PATIENT & VISITOR ESSENTIALS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Visiting & Hospital Guidance
          </h2>
          <p className="text-sm text-slate-500 mt-1.5">
            Clear, transparent guidelines designed to remove stress and streamline your consultation, admission, or family visit.
          </p>
        </div>

        {/* 4-Card Focused Patient Essentials Hub */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {patientHubCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-elevated transition-all flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#0B2545] group-hover:text-[#0284C7] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <button
                    onClick={card.action}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#F8FAFC] group-hover:bg-[#0B2545] text-[#0B2545] group-hover:text-white text-xs font-bold transition-all flex items-center justify-between"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rapid Assistance Contact Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
              24-HOUR HOSPITAL BOARD & TELEPHONE DIRECTORY
            </div>
            <div className="text-sm font-semibold text-[#0B2545]">
              Need immediate guidance on patient room location, admission status, or ambulance?
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href="tel:01142254000"
              className="px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Casualty: 011-42254000</span>
            </a>
            <a
              href="tel:01125750000"
              className="px-4 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white font-bold transition-colors flex items-center gap-2"
            >
              <span>Main Board: 011-25750000</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
