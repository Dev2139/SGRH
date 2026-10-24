import React, { useState, useRef, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

// Layout & Components
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { RoyalMarquee } from './components/RoyalMarquee';
import { QuickAccessPanel } from './components/QuickAccessPanel';
import { FloatingQuickAssist } from './components/FloatingQuickAssist';
import { Footer } from './components/Footer';

// Essential Clean Sections (No Unwanted Bloat)
import { HeroSection } from './sections/HeroSection';
import { DoctorSearch } from './sections/DoctorSearch';
import { SpecialtiesGrid } from './sections/SpecialtiesGrid';
import { PatientServices } from './sections/PatientServices';
import { HeritageSection } from './sections/HeritageSection';
import { ContactSection } from './sections/ContactSection';

// Interactive Modals
import { AppointmentModal } from './components/AppointmentModal';
import { InternationalModal } from './components/InternationalModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { LabPortalModal } from './components/LabPortalModal';
import { EmergencyModal } from './components/EmergencyModal';
import { InfoGuidanceModal } from './components/InfoGuidanceModal';

export default function App() {
  // Accessibility Font Sizing (Normal vs Large for Seniors)
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    if (fontSize === 'large') {
      document.documentElement.style.fontSize = '17.5px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
  }, [fontSize]);

  // Modal states
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctorForAppointment, setSelectedDoctorForAppointment] = useState(null);
  const [selectedDepartmentForAppointment, setSelectedDepartmentForAppointment] = useState('');

  const [internationalModalOpen, setInternationalModalOpen] = useState(false);
  const [labPortalModalOpen, setLabPortalModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const [doctorDetailModalOpen, setDoctorDetailModalOpen] = useState(false);
  const [viewingDoctor, setViewingDoctor] = useState(null);

  // Practical Guidance Modal (Admissions, Billing & TPA, Visiting Hours)
  const [infoModalType, setInfoModalType] = useState(null);

  // Active department filter in DoctorSearch
  const [activeDeptFilter, setActiveDeptFilter] = useState('all');

  const searchInputRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleOpenAppointment = (doctor = null, dept = '') => {
    setSelectedDoctorForAppointment(doctor);
    setSelectedDepartmentForAppointment(dept || doctor?.departmentName || '');
    setAppointmentModalOpen(true);
  };

  const handleOpenDoctorDetail = (doctor) => {
    setViewingDoctor(doctor);
    setDoctorDetailModalOpen(true);
  };

  const handleSearchFocus = (searchTerm = '') => {
    scrollToSection('doctor-search');
    setTimeout(() => {
      if (searchInputRef.current) {
        if (searchTerm) {
          searchInputRef.current.value = searchTerm;
          const event = new Event('input', { bubbles: true });
          searchInputRef.current.dispatchEvent(event);
        }
        searchInputRef.current.focus();
      }
    }, 350);
  };

  const handleSelectSpecialtyFromGrid = (specialtyId) => {
    setActiveDeptFilter(specialtyId);
    scrollToSection('doctor-search');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0C2340] font-sans antialiased">
      {/* Toast notifications container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0C2340',
            color: '#FFFFFF',
            fontSize: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }}
      />

      {/* Institutional Header & Navigation with Integrated Emergency & Accessibility Bar */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenInternational={() => setInternationalModalOpen(true)}
        onOpenLabPortal={() => setLabPortalModalOpen(true)}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onSelectDepartmentFilter={(deptId) => {
          setActiveDeptFilter(deptId);
          scrollToSection('doctor-search');
        }}
        onSearchFocus={() => handleSearchFocus()}
        fontSize={fontSize}
        onChangeFontSize={(size) => setFontSize(size)}
      />

      {/* Main Content Landmark: 5 Focused, High-Impact Chapters */}
      <main className="flex-1 space-y-2">
        {/* Chapter 1: Royal Hero Showcase Auto-Carousel */}
        <HeroSection
          onFindDoctorClick={(term) => handleSearchFocus(term)}
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenEmergency={() => setEmergencyModalOpen(true)}
        />

        {/* Royal Continuous Auto-Scrolling Credentials Marquee */}
        <RoyalMarquee />

        {/* Chapter 2: 4 Core Patient Action Hub */}
        <QuickAccessPanel
          onFindDoctorClick={() => scrollToSection('doctor-search')}
          onOpenAppointment={() => handleOpenAppointment()}
          onLabResultsClick={() => setLabPortalModalOpen(true)}
          onEmergencyClick={() => setEmergencyModalOpen(true)}
        />

        {/* Chapter 3: Find a Doctor & Consultation Timings */}
        <DoctorSearch
          ref={searchInputRef}
          initialDepartment={activeDeptFilter}
          onSelectDoctorForAppointment={(doc) => handleOpenAppointment(doc)}
          onOpenDoctorDetail={handleOpenDoctorDetail}
        />

        {/* Chapter 4: Key Centers of Excellence (6 Flagship Disciplines) */}
        <SpecialtiesGrid
          onSelectSpecialty={handleSelectSpecialtyFromGrid}
          onExploreAllSpecialties={() => {
            setActiveDeptFilter('all');
            scrollToSection('doctor-search');
          }}
        />

        {/* Chapter 5: Patient & Visitor Essentials (Hours, TPA, Admissions, International) */}
        <PatientServices
          onAppointmentClick={() => handleOpenAppointment()}
          onLabPortalClick={() => setLabPortalModalOpen(true)}
          onInternationalClick={() => setInternationalModalOpen(true)}
          onEmergencyClick={() => setEmergencyModalOpen(true)}
          onOpenAdmissions={() => setInfoModalType('admissions')}
          onOpenBilling={() => setInfoModalType('billing')}
          onOpenVisitors={() => setInfoModalType('visitors')}
        />

        {/* Chapter 6: Institutional Heritage & 20% Free Beds for EWS */}
        <HeritageSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Chapter 7: Hospital Location, Direct Contacts & Quick Callback Form */}
        <ContactSection />
      </main>

      {/* Persistent Floating Quick Assist Dock (Emergency, OPD Booking, Lab Reports) */}
      <FloatingQuickAssist
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onOpenLabPortal={() => setLabPortalModalOpen(true)}
      />

      {/* Comprehensive Institutional 4-Column Footer */}
      <Footer
        onFindDoctorClick={() => scrollToSection('doctor-search')}
        onAppointmentClick={() => handleOpenAppointment()}
        onLabPortalClick={() => setLabPortalModalOpen(true)}
        onEmergencyClick={() => setEmergencyModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Reusable Dialog Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctorForAppointment}
        initialDepartment={selectedDepartmentForAppointment}
      />

      <InternationalModal
        isOpen={internationalModalOpen}
        onClose={() => setInternationalModalOpen(false)}
      />

      <DoctorDetailModal
        isOpen={doctorDetailModalOpen}
        onClose={() => setDoctorDetailModalOpen(false)}
        doctor={viewingDoctor}
        onBookConsultation={(doc) => handleOpenAppointment(doc)}
      />

      <LabPortalModal
        isOpen={labPortalModalOpen}
        onClose={() => setLabPortalModalOpen(false)}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />

      <InfoGuidanceModal
        isOpen={Boolean(infoModalType)}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
        onBookAppointment={() => {
          setInfoModalType(null);
          handleOpenAppointment();
        }}
      />
    </div>
  );
}
