import React, { useState } from 'react';
import { X, FileText, Search, ShieldCheck, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export const LabPortalModal = ({ isOpen, onClose }) => {
  const [uhid, setUhid] = useState('');
  const [billNo, setBillNo] = useState('');
  const [searching, setSearching] = useState(false);
  const [reportResult, setReportResult] = useState(null);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!uhid && !billNo) {
      toast.error('Please enter either your Patient UHID or Lab Bill Number');
      return;
    }

    setSearching(true);
    // Simulate real report lookup
    setTimeout(() => {
      setSearching(false);
      setReportResult({
        found: true,
        patientName: "Patient Record Verified",
        uhid: uhid || "SGRH-2026-9812",
        tests: [
          { name: "Complete Blood Count (CBC) with Automated Differential", status: "Verified & Authorized", date: "Recent" },
          { name: "Comprehensive Metabolic Panel (Renal & Liver Function)", status: "Verified & Authorized", date: "Recent" }
        ]
      });
    }, 800);
  };

  const resetSearch = () => {
    setReportResult(null);
    setUhid('');
    setBillNo('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>NABL ACCREDITED DIAGNOSTIC LABORATORIES</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#123653]">
            Online Diagnostic Test Reports
          </h3>
          <p className="text-xs text-[#637386] mt-1">
            Access, view, and print authorized pathology, biochemistry, microbiology, and radiology investigation reports.
          </p>
        </div>

        {reportResult ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#F0FDFA] border border-teal-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#123653]">
                <span>UHID: {reportResult.uhid}</span>
                <span className="text-teal-700 bg-white px-2 py-0.5 rounded border border-teal-200 text-[10px]">
                  NABL AUTHORIZED
                </span>
              </div>
              <div className="divide-y divide-teal-100 text-xs">
                {reportResult.tests.map((t, i) => (
                  <div key={i} className="py-2 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">{t.name}</div>
                      <div className="text-[10px] text-gray-500">{t.status}</div>
                    </div>
                    <button
                      onClick={() => toast.success('Demo: Opening sample authorized PDF report viewer')}
                      className="px-2.5 py-1 rounded bg-[#123653] hover:bg-[#1769AA] text-white text-[11px] font-medium"
                    >
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetSearch}
              className="w-full py-2.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
            >
              Lookup Another Report
            </button>
          </div>
        ) : (
          <form onSubmit={handleSearch} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Hospital UHID (Unique Hospital Identification)
              </label>
              <input
                type="text"
                placeholder="e.g. SGRH-123456"
                value={uhid}
                onChange={(e) => setUhid(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
              />
              <span className="text-[10px] text-gray-400 mt-1 block">
                Found on your OPD slip or admission card.
              </span>
            </div>

            <div className="relative text-center my-2">
              <span className="bg-white px-3 text-[10px] uppercase tracking-wider text-gray-400 font-bold relative z-10">
                OR
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-1">
                Lab Invoice / Bill Number
              </label>
              <input
                type="text"
                placeholder="e.g. LAB-2026-8841"
                value={billNo}
                onChange={(e) => setBillNo(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1769AA]"
              />
            </div>

            <button
              type="submit"
              disabled={searching}
              className="w-full py-3 bg-[#123653] hover:bg-[#1769AA] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {searching ? (
                <span>Searching Laboratory Archive...</span>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5 text-teal-300" />
                  <span>Fetch Diagnostic Reports</span>
                </>
              )}
            </button>

            <div className="p-3 bg-gray-50 rounded-lg text-[11px] text-gray-500 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-gray-700">
                <Phone className="w-3.5 h-3.5 text-[#1769AA]" />
                <span>Lab Helpdesk Telephone:</span>
              </div>
              <div>011-42251111 (Ext. 2104 / 2105) &middot; 24 Hours Operational</div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
