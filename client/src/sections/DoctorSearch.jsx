import React, { useState, useEffect, useMemo, forwardRef } from 'react';
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  RotateCcw,
  User,
  ChevronRight,
  Stethoscope,
  PhoneCall
} from 'lucide-react';
import { fetchDoctors, fetchDepartments } from '../lib/api';

const commonAilments = [
  { label: 'All Specialties', value: '' },
  { label: 'Cardiology (Heart)', value: 'angioplasty' },
  { label: 'Nephrology (Kidney)', value: 'kidney' },
  { label: 'Gastroenterology (Liver)', value: 'endoscopy' },
  { label: 'Orthopaedics (Joints)', value: 'knee' },
  { label: 'Oncology (Cancer)', value: 'oncology' },
  { label: 'Neurology (Brain)', value: 'stroke' },
  { label: 'Pediatrics (Child Health)', value: 'infant' }
];

export const DoctorSearch = forwardRef(({
  onSelectDoctorForAppointment,
  onOpenDoctorDetail,
  initialDepartment = 'all'
}, ref) => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState(initialDepartment);
  const [selectedAilment, setSelectedAilment] = useState('');

  useEffect(() => {
    if (initialDepartment) {
      setSelectedDept(initialDepartment);
    }
  }, [initialDepartment]);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      try {
        const [deptsData, docsData] = await Promise.all([
          fetchDepartments(),
          fetchDoctors()
        ]);
        setDepartments(deptsData);
        setDoctors(docsData);
      } catch (err) {
        console.error('Failed to load doctor search data', err);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  // Filtered doctors list
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // 1. Department match
      if (selectedDept && selectedDept !== 'all') {
        if (doc.departmentId.toLowerCase() !== selectedDept.toLowerCase()) {
          return false;
        }
      }

      // 2. Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim();
        const matchesName = doc.name.toLowerCase().includes(q);
        const matchesDesig = doc.designation.toLowerCase().includes(q);
        const matchesDept = doc.departmentName.toLowerCase().includes(q);
        const matchesQual = doc.qualification.toLowerCase().includes(q);
        const matchesSpec = doc.specializations.some((s) => s.toLowerCase().includes(q));

        if (!matchesName && !matchesDesig && !matchesDept && !matchesQual && !matchesSpec) {
          return false;
        }
      }

      // 3. Ailment tag match
      if (selectedAilment) {
        const aLower = selectedAilment.toLowerCase();
        const matchesAilment = doc.specializations.some((s) => s.toLowerCase().includes(aLower));
        if (!matchesAilment) {
          return false;
        }
      }

      return true;
    });
  }, [doctors, selectedDept, searchTerm, selectedAilment]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedDept('all');
    setSelectedAilment('');
  };

  return (
    <section id="doctor-search" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-page mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>CONSULTANT DIRECTORY & OPD TIMINGS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Find a Senior Consultant
            </h2>
            <p className="text-sm text-slate-500 mt-1.5">
              Search by doctor name or specialty to check clinic days and request a consultation slot.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shrink-0 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="text-slate-500 block">Central OPD Desk:</span>
              <a href="tel:01142251111" className="font-bold text-[#0B2545] hover:text-[#0284C7] text-sm">011-42251111</a>
            </div>
          </div>
        </div>

        {/* Clean, Spacious Filter Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 mb-10 space-y-5 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search by Name */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                ref={ref}
                id="doctor-search-input"
                type="text"
                placeholder="Search by doctor name, qualification, or condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0B2545] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Department Dropdown */}
            <div className="md:col-span-4">
              <select
                id="department-select"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3.5 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
              >
                <option value="all">All Departments (71 Specialties)</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2">
              <button
                onClick={handleReset}
                className="w-full py-3 px-3 bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Reset</span>
              </button>
            </div>

          </div>

          {/* Quick Specialty Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-bold mr-1">Quick Select:</span>
            {commonAilments.map((ailment) => (
              <button
                key={ailment.label}
                onClick={() => setSelectedAilment(ailment.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAilment === ailment.value
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'bg-[#F8FAFC] hover:bg-slate-200 text-slate-600 border border-slate-200/80'
                }`}
              >
                {ailment.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count Header */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <div>
            Showing <strong className="text-[#0B2545] font-bold">{filteredDoctors.length}</strong> senior consultant{filteredDoctors.length === 1 ? '' : 's'}
          </div>
          <span className="text-[11px] text-slate-400">
            Sir Ganga Ram Hospital Accredited Faculty
          </span>
        </div>

        {/* Doctor Cards Grid */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-[#0284C7]"></div>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <User className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-display font-bold text-slate-800 text-lg">No consultants found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Please try clearing your search keyword or call our central OPD desk at <strong>011-42251111</strong>.
            </p>
            <button
              onClick={handleReset}
              className="mt-3 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0B2545] text-white text-xs font-bold rounded-xl hover:bg-[#0284C7] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All Consultants</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl shadow-xs hover:shadow-elevated border border-slate-200/90 hover:border-[#0284C7]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Doctor Card Top */}
                  <div className="p-5 border-b border-slate-100 flex gap-4 items-start">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600';
                      }}
                      className="w-16 h-16 rounded-2xl object-cover object-top border border-slate-200 shrink-0 bg-slate-50"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-md mb-1 truncate max-w-full">
                        {doc.departmentName.split('&')[0]}
                      </span>
                      <h3 className="font-display font-bold text-base text-[#0B2545] leading-snug group-hover:text-[#0284C7] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                        {doc.qualification}
                      </p>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-5 space-y-3.5 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Experience & Role
                      </span>
                      <p className="text-slate-800 font-semibold text-xs mt-0.5">
                        {doc.designation} &middot; <strong className="text-[#0284C7] font-bold">{doc.experienceYears}+ Yrs</strong>
                      </p>
                    </div>

                    {/* OPD Schedule Box */}
                    <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-800 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span className="font-bold text-[#0B2545]">Clinic Days:</span>
                        <span className="truncate text-slate-600 font-medium">{doc.opdSchedule}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{doc.room}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectDoctorForAppointment(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>Book Consultation</span>
                  </button>

                  <button
                    onClick={() => onOpenDoctorDetail(doc)}
                    className="w-full py-1.5 px-3 rounded-lg text-slate-500 hover:text-[#0B2545] text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Profile</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
});
