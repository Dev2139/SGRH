import React from 'react';
import { X, Calendar, Clock, MapPin, Award, Languages, CheckCircle2, Stethoscope } from 'lucide-react';

export const DoctorDetailModal = ({ doctor, isOpen, onClose, onBookConsultation }) => {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Doctor Header */}
        <div className="flex flex-col sm:flex-row gap-5 items-start pb-6 border-b border-gray-100">
          <img
            src={doctor.image}
            alt={doctor.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600';
            }}
            className="w-24 h-24 rounded-2xl object-cover object-top border-2 border-slate-200 bg-slate-50 shrink-0"
          />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1769AA] bg-[#EBF3FA] px-2.5 py-1 rounded inline-block mb-1.5">
              {doctor.departmentName}
            </span>
            <h3 className="font-serif font-bold text-xl text-[#123653]">
              {doctor.name}
            </h3>
            <p className="text-xs text-gray-700 font-semibold mt-0.5">
              {doctor.qualification}
            </p>
            <p className="text-xs text-[#637386] mt-0.5">
              {doctor.designation} &middot; <strong className="text-[#1769AA]">{doctor.experienceYears} Years Clinical Experience</strong>
            </p>
          </div>
        </div>

        {/* Body content */}
        <div className="py-5 space-y-4 text-xs">
          
          {/* OPD Schedule */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-200/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#123653]">
              <Clock className="w-4 h-4 text-[#1769AA]" />
              <span>Outpatient Clinic Schedule & Location</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 pl-6">
              <div>
                <span className="font-medium text-gray-800">OPD Days: </span>
                <span>{doctor.opdSchedule}</span>
              </div>
              <div>
                <span className="font-medium text-gray-800">Room / Clinic: </span>
                <span>{doctor.room}</span>
              </div>
            </div>
          </div>

          {/* Clinical Focus / Specializations */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Key Clinical Focus & Specializations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.specializations?.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded bg-gray-50 border border-gray-100 text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          {doctor.languages && (
            <div className="flex items-center gap-2 text-gray-600">
              <Languages className="w-4 h-4 text-gray-400" />
              <span>Consultations conducted in: <strong>{doctor.languages.join(', ')}</strong></span>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-700"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookConsultation(doctor);
            }}
            className="px-5 py-2.5 rounded-lg bg-[#123653] hover:bg-[#1769AA] text-white text-xs font-semibold flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-teal-300" />
            <span>Book Consultation with {doctor.name.split(' ')[1] || doctor.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
