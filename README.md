# Sir Ganga Ram Hospital (SGRH), New Delhi — Premium Website Redesign Concept

> **A Proposal for Modern Institutional Digital Healthcare Experience**  
> Designed for presentation to the Hospital Management & Board of Sir Ganga Ram Hospital, New Delhi, India.  
> Reference: [https://www.sgrh.com/](https://www.sgrh.com/)

---

## 1. Executive Summary & Design Philosophy

This redesign concept reimagines the digital presence of **Sir Ganga Ram Hospital (SGRH), New Delhi**—one of India's premier 900-bed multispecialty tertiary referral and postgraduate teaching institutions founded on a 70+ year legacy of charitable trust healthcare (established in 1954 in New Delhi, original foundation in 1921).

Rather than following generic commercial SaaS patterns (floating blobs, purple gradients, artificial AI imagery), the visual identity establishes an **editorial-style healthcare standard** communicating:
- **Institutional Authority & Heritage**: Dignified typography pairing modern interface sans-serif (*Plus Jakarta Sans*) with restrained editorial serifs (*Lora*).
- **Clinical Excellence & Restrained Palette**: Deep Hospital Navy (`#123653`), Medical Blue (`#1769AA`), Clean Slate (`#637386`), and restrained Warm Gold/Teal accents.
- **Immediate Patient Utility**: Instant access to doctor schedules, 24x7 emergency trauma helpline, online NABL lab reports, and international patient assistance.
- **Compassionate Not-for-Profit Ethos**: Transparent highlights of 20% free beds for Economically Weaker Sections (EWS), subsidized morning OPDs, and rural outreach health camps.

---

## 2. Technology Stack

### Frontend (`client/`)
- **Core**: React 18+ with Vite
- **Styling**: Tailwind CSS with custom institutional design tokens & CSS variables
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form with strict phone and text validation
- **Notifications**: React Hot Toast
- **Typography**: Plus Jakarta Sans & Lora (Google Fonts)

### Backend (`server/`)
- **Runtime**: Node.js & Express (ES Modules)
- **Database**: MongoDB with Mongoose
- **Architecture**: Graceful hybrid mode — connects to MongoDB when available; seamlessly falls back to an in-memory verified demonstration dataset when offline
- **Middleware**: CORS, centralized error handling, and structured REST responses

---

## 3. Project Architecture

```
SGRH/
├── client/                     # Vite + React Frontend
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── components/         # Reusable navigation & interactive dialogs
│   │   │   ├── Navbar.jsx              # Two-level header with utility bar & dropdowns
│   │   │   ├── EmergencyBanner.jsx     # High-priority 24x7 casualty hotline banner
│   │   │   ├── QuickAccessPanel.jsx    # Immediate patient utility cards below hero
│   │   │   ├── AppointmentModal.jsx    # Validated consultation booking form
│   │   │   ├── InternationalModal.jsx  # Medical visa & travel assistance modal
│   │   │   ├── DoctorDetailModal.jsx   # Detailed consultant profile & OPD hours
│   │   │   ├── LabPortalModal.jsx      # UHID report lookup dialog
│   │   │   ├── EmergencyModal.jsx      # Casualty rapid arrival guidance & ambulance
│   │   │   └── Footer.jsx              # Comprehensive 4-column institutional footer
│   │   ├── sections/           # Modular landing page sections
│   │   │   ├── HeroSection.jsx         # Asymmetric editorial layout & credentials
│   │   │   ├── InstitutionalFacts.jsx  # Verified 70+ yrs, 71 specialties, 900+ beds
│   │   │   ├── DoctorSearch.jsx        # Live search, filters, ailments & doctor cards
│   │   │   ├── SpecialtiesGrid.jsx     # Centers of Excellence in varied visual grid
│   │   │   ├── HeritageSection.jsx     # Split section on Sir Ganga Ram & 1954 founding
│   │   │   ├── PatientServices.jsx     # "Everything you need for your hospital visit"
│   │   │   ├── TechnologySection.jsx   # da Vinci Xi, TrueBeam Linac, 3T MRI, ECMO
│   │   │   ├── InternationalPatients.jsx# 4-step medical travel care pathway
│   │   │   ├── CommunityWelfare.jsx    # 20% free beds for EWS & rural camps
│   │   │   ├── NewsSection.jsx         # Journal-style clinical updates & research
│   │   │   ├── LeadershipSection.jsx   # Board of Management & medical direction
│   │   │   └── ContactSection.jsx      # Verified telephone directory & callback form
│   │   ├── data/               # Verified hospital information & seed dataset
│   │   ├── lib/                # API client with automatic fallback
│   │   ├── App.jsx             # Main layout orchestrator
│   │   ├── index.css           # Global typography & accessibility rules
│   │   └── main.jsx            # React root mount
│   ├── tailwind.config.js      # Custom hospital brand color palette
│   └── vite.config.js          # Vite config with API proxying & host exposure
│
├── server/                     # Node.js Express API Server
│   ├── src/
│   │   ├── config/             # Database connection with graceful offline fallback
│   │   ├── models/             # Mongoose schemas (Doctor, Department, Enquiry, News)
│   │   ├── controllers/        # Business logic for doctors, departments & enquiries
│   │   ├── routes/             # REST route declarations
│   │   ├── data/               # Verified seed dataset for SGRH
│   │   ├── scripts/            # Database seeder (seed.js)
│   │   ├── middleware/         # Centralized error & 404 handlers
│   │   ├── app.js              # Express app configuration
│   │   └── server.js           # Server bootstrap
│   ├── .env                    # Local environment variables
│   └── .env.example            # Environment blueprint
│
├── package.json                # Root orchestration scripts
└── README.md                   # Complete documentation
```

---

## 4. Key Sections & Functional Highlights

1. **Utility Bar & Main Navigation**:
   - Two-level sticky institutional header with direct links to Patient Portal, International Patients, Academics & DNB, Charitable Welfare, and Telephone Directory.
   - Mouse, keyboard, and touch-accessible dropdowns.
   - Mobile slide-down navigation menu with quick action CTAs.

2. **Hero Section (Asymmetric Editorial)**:
   - Eyebrow: `SIR GANGA RAM HOSPITAL · NEW DELHI · ESTD. 1954` with gold seal.
   - Headline: *"A legacy of trust. A commitment to better health."*
   - Authentic clinical imagery with institutional badge.
   - Accreditations: NABH Accredited Tertiary Center &middot; NABL Certified Laboratories &middot; Charitable Trust.

3. **Institutional Scale & Verified Benchmarks**:
   - 70+ Years of Institutional Legacy
   - 71 Medical Specialties
   - 900+ Inpatient Bed Capacity
   - 100+ Specialized Outpatient Clinics

4. **Functional Doctor & Department Search**:
   - Live search by doctor name, designation, or clinical keyword.
   - Department filtering across all 71 specialties.
   - Quick condition chips: *Chest Pain / Angina*, *Kidney Disease / Dialysis*, *Liver & Digestive*, *Joint Pain / Knee Arthritis*, *Cancer & Tumor*, *Stroke & Neurological*, *Pediatric Health*.
   - Doctor cards with qualifications, room number, OPD schedule, and direct *"Request Consultation"* modal trigger.

5. **Centers of Excellence**:
   - Institute of Cardiovascular Sciences (TAVI, MICS, 24x7 Cath Lab).
   - Institute of Renal Sciences (4,500+ kidney transplants, ABO-incompatible transplants).
   - Institute of Digestive & Hepatobiliary Sciences (Living donor liver transplant, EUS).
   - Institute of Neurosciences (Hyperacute stroke unit, neuronavigation).
   - Comprehensive Cancer Care (TrueBeam Linac stereotactic radiotherapy).
   - Orthopaedics & Joint Reconstruction (Robotic knee replacement).

6. **Institutional Heritage & Philanthropy**:
   - Chronicles the legacy of Sir Ganga Ram (1851–1927), civil engineer and philanthropist.
   - Inauguration in New Delhi in 1954 by Prime Minister Jawaharlal Nehru.
   - Detailed policy on 20% free beds for Economically Weaker Sections (EWS).

7. **Patient & Visitor Compass**:
   - 8 practical patient pathways: Consultation Booking, OPD Schedules, Lab Reports, Inpatient Admissions, Cashless TPA / Insurance, Visitor Policies, 24x7 Ambulance, and International Desk.

8. **Precision Medical Technology**:
   - da Vinci Xi 4th Gen Robotic Surgical System
   - TrueBeam STx Linear Accelerator
   - 3T High-Field MRI & Dual-Source 128-Slice CT
   - Extracorporeal Membrane Oxygenation (ECMO)

9. **Backend Integration & Modals**:
   - Real `POST /api/enquiries` endpoint with Mongoose validation, generating human-readable reference numbers (e.g. `SGRH-737999-515`).
   - Clear reassurance note that requests are received by the hospital registration desk (no fake automatic calendar booking).

---

## 5. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status and database connectivity indicator |
| `GET` | `/api/departments` | List of all 71 medical departments and sub-specialties |
| `GET` | `/api/departments/:id` | Detail of a specific department |
| `GET` | `/api/doctors` | List doctors (supports `?department=`, `?search=`, `?specialty=`) |
| `GET` | `/api/doctors/:id` | Detailed doctor profile, qualifications, and OPD hours |
| `POST` | `/api/enquiries` | Submit appointment consultation, general enquiry, or international dossier |
| `GET` | `/api/news` | Hospital dispatches, academic research papers, and health advisories |

---

## 6. How to Run Locally

### Prerequisites
- Node.js v18 or higher (v20+ recommended)
- (Optional) MongoDB running locally on `mongodb://localhost:27017` (the app automatically operates with verified in-memory fallback if MongoDB is not present)

### Quick Start (Running Both Client & Server)

1. **Install Dependencies**:
   ```bash
   npm run install:all
   ```

2. **Seed the MongoDB Database** (if MongoDB is running):
   ```bash
   npm run seed
   ```

3. **Start the Express API Server** (Port 5000):
   ```bash
   npm run dev:server
   ```

4. **Start the React Frontend** (Port 5173):
   ```bash
   npm run dev:client
   ```

5. **Open in Browser**:
   Navigate to [http://localhost:5173/](http://localhost:5173/)

---

## 7. Verification Checklist

- [x] Two-level header with utility bar, hospital crest, dropdowns, and mobile menu
- [x] Asymmetric editorial hero with authentic clinical imagery and credentials
- [x] Direct patient Quick-Access panel beneath hero
- [x] Verified institutional figures (70+ years, 71 specialties, 900+ beds, 100+ clinics)
- [x] Interactive doctor and department discovery with live search, filters, and ailments
- [x] Centers of excellence varied editorial grid
- [x] Institutional history and 1954 New Delhi foundation chronicle
- [x] Practical Patient & Visitor guide (Admissions, TPA, OPD, Labs)
- [x] Advanced medical technology showcase (da Vinci, TrueBeam Linac, 3T MRI, ECMO)
- [x] International patient pathway and medical visa guidance
- [x] Humanitarian mandate & 20% free beds for Economically Weaker Sections (EWS)
- [x] Journal-style medical research and clinical dispatches
- [x] Hospital leadership and Board of Management governance
- [x] Verified campus location, telephone directory, and validated callback form
- [x] 4-column comprehensive institutional footer
- [x] Interactive modals: Appointment Consultation, International Dossier, Doctor Details, Lab Portal, Emergency Casualty
- [x] Express backend with MongoDB and resilient in-memory fallback
- [x] Fully tested at desktop, tablet (768px), and mobile (375px) viewports
