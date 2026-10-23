import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  MapPin,
  PhoneCall,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import toast from 'react-hot-toast';
import { hospitalInfo } from '../data/hospitalData';
import { submitEnquiry } from '../lib/api';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      type: 'general_enquiry',
      fullName: '',
      phone: '',
      email: '',
      department: 'General Enquiries',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await submitEnquiry(data);
      setSubmissionSuccess(response);
      toast.success(`Enquiry received! Reference #${response.referenceNumber}`, {
        duration: 5000
      });
      reset();
    } catch (err) {
      toast.error(err.message || 'Unable to submit enquiry. Please call our hospital board directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-page mx-auto px-4 lg:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Hospital Coordinates & Telephone Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>CAMPUS LOCATION & REACH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Hospital Location & Directory
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed">
              Situated in the heart of Central-West Delhi in Old Rajinder Nagar, convenient to Karol Bagh and Rajendra Place Metro Stations.
            </p>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-3 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B2545]">
                    Sir Ganga Ram Hospital
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Sir Ganga Ram Hospital Marg, Old Rajinder Nagar,<br />
                    New Delhi, Delhi – 110060, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline mt-2.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Telephone Directory */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-rose-200 bg-rose-50/50">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-rose-800">24x7 Emergency Casualty</span>
                </div>
                <a href={`tel:${hospitalInfo.contacts.emergency}`} className="text-xs font-bold text-rose-800 hover:underline">
                  {hospitalInfo.contacts.emergency}
                </a>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#0284C7]" />
                  <span className="text-xs font-semibold text-slate-700">OPD Appointments</span>
                </div>
                <a href={`tel:${hospitalInfo.contacts.opdAppointment}`} className="text-xs font-bold text-[#0B2545] hover:text-[#0284C7]">
                  {hospitalInfo.contacts.opdAppointment}
                </a>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#0284C7]" />
                  <span className="text-xs font-semibold text-slate-700">Central Hospital Board</span>
                </div>
                <a href={`tel:${hospitalInfo.contacts.casualtyAlternate}`} className="text-xs font-bold text-[#0B2545] hover:text-[#0284C7]">
                  {hospitalInfo.contacts.casualtyAlternate}
                </a>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0284C7]" />
                  <span className="text-xs font-semibold text-slate-700">Official Hospital Email</span>
                </div>
                <a href={`mailto:${hospitalInfo.contacts.email}`} className="text-xs font-semibold text-[#0B2545] hover:text-[#0284C7]">
                  {hospitalInfo.contacts.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Callback & General Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-xs">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-[#0B2545]">
                  Enquiry & Callback Request
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question regarding consultations, admissions, or insurance? Our patient desk will contact you.
                </p>
                <div className="mt-3 text-[11px] text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200/60 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    For medical emergencies, do not wait for a callback — call <strong>011-42254000</strong> directly.
                  </span>
                </div>
              </div>

              {submissionSuccess ? (
                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-teal-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0B2545]">
                    Enquiry Registered Successfully
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your reference number is <strong className="text-[#0284C7] font-mono text-sm">{submissionSuccess.referenceNumber}</strong>. A patient care representative from Sir Ganga Ram Hospital will contact you.
                  </p>
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="mt-2 text-xs font-bold text-[#0284C7] hover:underline"
                  >
                    Submit Another Query &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  {/* Full Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B2545] mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Verma"
                        {...register('fullName', {
                          required: 'Full name is required',
                          minLength: { value: 3, message: 'Minimum 3 characters' }
                        })}
                        className={`w-full px-3.5 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0284C7] ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B2545] mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98112 34567"
                        {...register('phone', {
                          required: 'Contact number is required',
                          minLength: { value: 8, message: 'Please enter a valid phone number' }
                        })}
                        className={`w-full px-3.5 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0284C7] ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Department Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B2545] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        {...register('email')}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0284C7]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B2545] mb-1.5">
                        Department / Subject
                      </label>
                      <select
                        {...register('department')}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0284C7]"
                      >
                        <option value="General Enquiries">General Enquiries</option>
                        <option value="Cardiology">Cardiology & Cardiac Surgery</option>
                        <option value="Nephrology">Nephrology & Renal Transplant</option>
                        <option value="Gastroenterology">Gastroenterology & Liver</option>
                        <option value="Oncology">Oncology & Cancer Care</option>
                        <option value="Orthopaedics">Orthopaedics & Joint Surgery</option>
                        <option value="Billing & TPA">Billing & Insurance Desk</option>
                        <option value="Lab & Diagnostics">Lab & Diagnostics Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B2545] mb-1.5">
                      Your Query Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your enquiry or assistance needed..."
                      {...register('message', {
                        required: 'Please provide brief details of your request',
                        minLength: { value: 10, message: 'At least 10 characters required' }
                      })}
                      className={`w-full px-3.5 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs sm:text-sm text-[#0B2545] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0284C7] ${
                        errors.message ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></div>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-sky-300" />
                          <span>Submit Hospital Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 mt-2">
                    Data submitted is handled strictly under SGRH patient confidentiality policies.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
