/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, HelpCircle, CheckCircle2, ShieldAlert, Award, FileText, Smartphone, Calendar, ChevronRight, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';
import { CLASSES_OFFERED } from '../data';

interface AdmissionsFormProps {
  language: 'en' | 'hn';
}

export default function AdmissionsForm({ language }: AdmissionsFormProps) {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [targetClass, setTargetClass] = useState('Nursery to Prep/KG (Shishu Vatika)');
  const [scholarshipCategory, setScholarshipCategory] = useState('none');
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  // Auto-Eligibility Calculation based on Year of Birth
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const calculateEligibility = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDob(value);
    if (!value) {
      setEligibilityResult(null);
      return;
    }

    const birthYear = new Date(value).getFullYear();
    const currentYear = 2026;
    const estimatedAge = currentYear - birthYear;

    if (estimatedAge < 3) {
      setEligibilityResult(
        language === 'en'
          ? 'Too young for 2026-27 session. (Requires minimum 3 years at starting session)'
          : 'सत्र २०२६-२७ के लिए आयु कम है। (सत्र प्रारंभ होने पर न्यूनतम ३ वर्ष होना आवश्यक है)'
      );
    } else if (estimatedAge >= 3 && estimatedAge <= 5) {
      setEligibilityResult(
        language === 'en'
          ? 'Eligible for Nursery / Prep / KG (Shishu Vatika)'
          : 'शिशु वाटिका (नर्सरी / एलकेजी / यूकेजी) के लिए सर्वथा योग्य'
      );
      setTargetClass('Nursery to Prep/KG (Shishu Vatika)');
    } else if (estimatedAge >= 6 && estimatedAge <= 10) {
      setEligibilityResult(
        language === 'en'
          ? `Eligible for Class 1 to Class 5 (Child age estimated ${estimatedAge} Years)`
          : `कक्षा १ से ५ वीं के लिए योग्य (अनुमानित आयु ${estimatedAge} वर्ष)`
      );
      setTargetClass('Class 1 to Class 5 (Primary Block)');
    } else if (estimatedAge >= 11 && estimatedAge <= 13) {
      setEligibilityResult(
        language === 'en'
          ? `Eligible for Class 6 to Class 8 (Child age estimated ${estimatedAge} Years)`
          : `कक्षा ६ से ८ वीं के लिए योग्य (अनुमानित आयु ${estimatedAge} वर्ष)`
      );
      setTargetClass('Class 6 to Class 8 (Middle Block)');
    } else if (estimatedAge >= 14 && estimatedAge <= 16) {
      setEligibilityResult(
        language === 'en'
          ? `Eligible for Class 9 and 10 board prep classes! (Child age estimated ${estimatedAge} Years)`
          : `कक्षा ९ वीं और १० वीं बोर्ड तैयारी कक्षाओं के लिए योग्य! (अनुमानित आयु ${estimatedAge} वर्ष)`
      );
      setTargetClass('Class 9 to Class 10 (Secondary Board Preparation)');
    } else {
      setEligibilityResult(
        language === 'en'
          ? 'Age exceeds standard school prep guidelines. Please book special counselor visit.'
          : 'आयु सीमा मानक दिशा-निर्देशों से अधिक है। कृपया विशेष परामर्शदाता से संपर्क करें।'
      );
    }
  };

  // Fees metadata structures
  const baseFeesOfClasses: Record<string, number> = {
    'Nursery to Prep/KG (Shishu Vatika)': 1200,
    'Class 1 to Class 5 (Primary Block)': 1600,
    'Class 6 to Class 8 (Middle Block)': 2100,
    'Class 9 to Class 10 (Secondary Board Preparation)': 2800,
  };

  const currentBaseFee = baseFeesOfClasses[targetClass] || 1500;
  let computedDiscount = 0;
  let badgeName = '';

  if (scholarshipCategory === 'merit') {
    computedDiscount = 0.3 * currentBaseFee; // 30% discount
    badgeName = language === 'en' ? '• Merit Champ Scholarship applied (30% Waiver)' : '• मेधावी छात्र छात्रवृत्ति स्वीकृत (३०% छूट)';
  } else if (scholarshipCategory === 'girl_child') {
    computedDiscount = 0.5 * currentBaseFee; // 50% discount for girls under Sharda Puraskar
    badgeName = language === 'en' ? '• Sharda Girl Empowerment active (50% Waiver)' : '• शारदा बालिका अधिकार सशक्तिकरण लागू (५०% छूट)';
  } else if (scholarshipCategory === 'single_parent') {
    computedDiscount = 0.25 * currentBaseFee; // 25% discount
    badgeName = language === 'en' ? '• Single-Parent Supportive care applied (25% Waiver)' : '• एकल अभिभावक सहायता योजना लागू (२५% छूट)';
  }

  const finalTuitionFee = currentBaseFee - computedDiscount;

  // Handlers for submission & WhatsApp forwarding
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !phone) {
      alert(language === 'en' ? 'Please fill out all required fields marked with *' : 'कृपया तारांकित (*) सभी आवश्यक फ़ील्ड भरें');
      return;
    }

    // Process simulation
    const newLead = {
      id: Date.now().toString(),
      parentName,
      phone,
      childName,
      childDOB: dob,
      targetClass,
      timestamp: new Date().toLocaleDateString(),
    };

    // Store in localStorage for testing
    const existingLeads = JSON.parse(localStorage.getItem('adk_school_leads') || '[]');
    existingLeads.push(newLead);
    localStorage.setItem('adk_school_leads', JSON.stringify(existingLeads));

    setSubmitted(true);
  };

  const triggerWhatsAppLead = () => {
    const textMessage = encodeURIComponent(
      `⭐ ADK SCHOOL Registration Inquiry Form Submission ⭐\n` +
      `--------------------------------\n` +
      `• Parent Name: ${parentName}\n` +
      `• Child Name: ${childName}\n` +
      `• DOB: ${dob}\n` +
      `• Applied Class: ${targetClass}\n` +
      `• Estimated School Fee: ₹${finalTuitionFee}/month\n` +
      `• Direct Contact: ${phone}\n` +
      `• Selected Category: ${scholarshipCategory.toUpperCase()}\n` +
      `--------------------------------\n` +
      `Please confirm slot scheduling for school premises verification tour.`
    );
    window.open(`https://wa.me/917379990043?text=${textMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden" id="admissions-interactive-form-root">
      
      {/* Title block */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 p-6 md:p-8 text-white relative">
        <div className="absolute top-4 right-4 bg-orange-600/30 text-orange-400 font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded-full border border-orange-500/20 animate-pulse">
          {language === 'en' ? 'Admission Session 2026-27' : 'प्रवेश सत्र २०२६-२७'}
        </div>
        <div className="flex items-center gap-2 mb-2 text-orange-400">
          <Sparkles size={18} />
          <span className="text-xs uppercase font-bold tracking-wider">{language === 'en' ? '4-Step Interactive Guide' : '४-चरणों में आसान एडमिशन'}</span>
        </div>
        <h3 className="text-xl md:text-3xl font-black tracking-tight" id="admissions-card-heading">
          {language === 'en' ? 'Begin the Journey of values' : 'संस्कार और गुणवत्तापूर्ण शिक्षा की शुरुआत'}
        </h3>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
          {language === 'en' 
            ? 'Complete our short pre-screening process. Compute exact school fee, verify eligibility, and secure immediate counselor advice.'
            : 'हमारे छोटे पूर्व-स्क्रीनिंग फॉर्म को भरें। मासिक फीस और योग्यता की गणना करें, और प्रवेश समन्वयक से तुरंत सलाह प्राप्त करें।'}
        </p>
      </div>

      {/* Progress Stepper indicators */}
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex justify-between items-center text-xs font-semibold overflow-x-auto gap-4">
        {[
          { num: 1, titleEn: 'Eligibility', titleHn: 'योग्यता गणना' },
          { num: 2, titleEn: 'Fee Estimator', titleHn: 'फीस और छूट' },
          { num: 3, titleEn: 'Documents', titleHn: 'दस्तावेज चेक' },
          { num: 4, titleEn: 'Instant Apply', titleHn: 'पंजीकरण करें' }
        ].map((item) => (
          <button
            key={item.num}
            onClick={() => setStep(item.num)}
            className={`flex items-center gap-1.5 pb-1 border-b-2 shrink-0 transition-all ${
              step === item.num 
                ? 'border-orange-600 text-orange-600 scale-105 font-bold' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-black ${
              step >= item.num ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {item.num}
            </span>
            <span>{language === 'en' ? item.titleEn : item.titleHn}</span>
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8" id="step-content-box">
        {/* STEP 1: ELIGIBILITY CALCULATOR */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn" id="admissions-step-1">
            <div className="bg-orange-50/50 border border-orange-200/40 rounded-xl p-4 flex gap-3 text-xs md:text-sm text-slate-800">
              <Calendar className="text-orange-600 shrink-0" size={20} />
              <div>
                <p className="font-bold text-orange-900">{language === 'en' ? 'Smart Age Screening' : 'स्मार्ट आयु जांच'}</p>
                <p className="text-slate-600 mt-0.5">
                  {language === 'en' 
                    ? 'Enter your child\'s exact date of birth. Our script computes eligibility limits dynamically according to state education board directives.'
                    : 'अपने बच्चे की जन्मतिथि दर्ज करें। राज्य शिक्षा बोर्ड के निर्देशानुसार हमारा सॉफ्टवेयर स्वतः योग्यता की जांच करेगा।'}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs md:text-sm font-bold text-slate-900">
                {language === 'en' ? 'Select Child’s Date of Birth *' : 'बच्चे की जन्मतिथि चुनें *'}
              </label>
              <input
                type="date"
                value={dob}
                onChange={calculateEligibility}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                required
              />
            </div>

            {/* Eligibility dynamic verdict alert box */}
            {dob && (
              <div className={`p-4 rounded-xl border flex items-start gap-2.5 animate-slideIn ${
                eligibilityResult?.includes('Eligible') || eligibilityResult?.includes('योग्य')
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {eligibilityResult?.includes('Eligible') || eligibilityResult?.includes('योग्य') ? (
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <ShieldAlert size={18} className="text-red-500 shrink-0 mt-0.5" />
                )}
                <div className="text-xs md:text-sm">
                  <p className="font-bold">{language === 'en' ? 'Calculated Screening Result:' : 'जांच का परिणाम:'}</p>
                  <p className="mt-0.5 font-semibold text-slate-800">{eligibilityResult}</p>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!dob}
                className={`py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all outline-none ${
                  dob 
                    ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md cursor-pointer' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{language === 'en' ? 'Step 2: Check Fees' : 'चरण २: मासिक फीस देखें'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: FEES ESTIMATOR */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn" id="admissions-step-2">
            <div>
              <p className="text-xs uppercase font-bold text-orange-600 tracking-wider mb-1">
                {language === 'en' ? '100% Transparent Fee Chart' : '१००% पारदर्शी शुल्क विवरण'}
              </p>
              <h4 className="text-lg font-black text-slate-900 leading-tight">
                {language === 'en' ? 'Academic Monthly Tuition Chart & Scholarship Matcher' : 'कक्षावार मासिक शिक्षण शुल्क एवं छात्रवृत्ति पात्रता'}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {language === 'en' ? 'Select Target Class:' : 'कक्षा चुनें:'}
                  </label>
                  <select
                    value={targetClass}
                    onChange={(e) => setTargetClass(e.target.value)}
                    className="w-full border border-solid border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer font-bold"
                  >
                    <option value="Nursery to Prep/KG (Shishu Vatika)">Nursery to Prep/KG (Shishu Vatika) (₹1,200/mo)</option>
                    <option value="Class 1 to Class 5 (Primary Block)">Class 1 to Class 5 (Primary Block) (₹1,600/mo)</option>
                    <option value="Class 6 to Class 8 (Middle Block)">Class 6 to Class 8 (Middle Block) (₹2,100/mo)</option>
                    <option value="Class 9 to Class 10 (Secondary Board Preparation)">Class 9 to Class 10 (Secondary Board Preparation) (₹2,800/mo)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {language === 'en' ? 'Scholarship / Welfare Category:' : 'छात्रवृत्ति श्रेणी:'}
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'none', labelEn: 'No applicable scholarship (Standard base rate)', labelHn: 'कोई विशेष श्रेणी नहीं (सामान्य शुल्क)' },
                      { id: 'merit', labelEn: 'Meritorious Child (90% + in previous final term class)', labelHn: 'मेधावी छात्र (पिछली कक्षा में ९०%+ अंक)' },
                      { id: 'girl_child', labelEn: 'Sharda Girl Empowerment Scheme (For single daughters)', labelHn: 'शारदा बालिका अभियान (एकमात्र बेटी के लिए ५०% छूट)' },
                      { id: 'single_parent', labelEn: 'Single Parent support (Dedicated single mother/father care)', labelHn: 'एकल अभिभावक योजना (मां/पिता में से एक होने पर)' }
                    ].map((cat) => (
                      <label
                        key={cat.id}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer hover:bg-slate-50 transition-all ${
                          scholarshipCategory === cat.id 
                            ? 'border-orange-500 bg-orange-50/40 text-orange-950 font-medium' 
                            : 'border-slate-100 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="scholarship-radio"
                          checked={scholarshipCategory === cat.id}
                          onChange={() => setScholarshipCategory(cat.id)}
                          className="mt-1 cursor-pointer accent-orange-600"
                        />
                        <span className="text-xs text-slate-800">
                          {language === 'en' ? cat.labelEn : cat.labelHn}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Computed Receipt Showcase Frame */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between border border-slate-800 shadow-md">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">{language === 'en' ? 'Estimated Class Slip' : 'अनुमानित शुल्क रसीद'}</span>
                    <Award size={18} className="text-orange-400" />
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{language === 'en' ? 'Target Division:' : 'लागू वर्ग:'}</span>
                      <span className="font-bold text-slate-200">{targetClass.split(' (')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{language === 'en' ? 'Base Tuition Fee:' : 'मूल मासिक शुल्क:'}</span>
                      <span className="font-semibold">₹{currentBaseFee}/month</span>
                    </div>
                    {computedDiscount > 0 && (
                      <div className="flex justify-between text-yellow-500 font-bold bg-yellow-500/10 p-2 rounded">
                        <span>{language === 'en' ? 'Fee Waiver:' : 'शुल्क रियायत:'}</span>
                        <span>- ₹{computedDiscount}/month</span>
                      </div>
                    )}
                    {badgeName && (
                      <p className="text-[10px] text-green-400 font-bold text-right pt-1">{badgeName}</p>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-4">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-sm font-bold text-slate-400">{language === 'en' ? 'Final Estimated Fee:' : 'अंतिम देय मासिक शुल्क:'}</span>
                    <span className="text-2xl font-black text-orange-400">₹{finalTuitionFee}<span className="text-xs text-slate-400">/mo</span></span>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">
                    {language === 'en' 
                      ? 'Note: Fees does not include secure bus transportation charges or exam form dues.' 
                      : 'नोट: मासिक शुल्क में बस परिवहन शुल्क और परीक्षा शुल्क शामिल नहीं है।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs"
              >
                {language === 'en' ? 'Back' : 'पीछे जाएं'}
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>{language === 'en' ? 'Step 3: Document Checklist' : 'चरण ३: आवश्यक दस्तावेज'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: REQ DOCUMENTS */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn" id="admissions-step-3">
            <div>
              <p className="text-xs uppercase font-bold text-orange-600 tracking-wider mb-1">
                {language === 'en' ? 'Prerequisites verification guide' : 'सत्यापन आवश्यक दस्तावेज सूची'}
              </p>
              <h4 className="text-lg font-black text-slate-900 leading-tight">
                {language === 'en' ? 'What to bring during school premises visits' : 'विद्यालय आगमन पर साथ लाने वाले आवश्यक कागजात'}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  titleEn: '1. Identification proof',
                  titleHn: '१. पहचान पत्र (आधार)',
                  itemsEn: ['UIDAI Aadhaar Card of child', 'Aadhaar copy of primary parents', 'Pass port size photo of child (x3)'],
                  itemsHn: ['संतान का विशिष्ट आधार कार्ड', 'माता-पिता के आधार कार्ड की प्रति', 'नवीनतम पासपोर्ट साइज फोटो (३)']
                },
                {
                  titleEn: '2. Academic History',
                  titleHn: '२. पूर्व शैक्षणिक प्रमाण',
                  itemsEn: ['Official School Leaving (TC) copy', 'Previous class mark sheets', 'Olympiad prize certificates if any'],
                  itemsHn: ['पूर्व विद्यालय स्थानांतरण प्रमाण पत्र', 'गत वर्ष की अंक तालिका / रिपोर्ट कार्ड', 'मेधावी पुरस्कार प्रमाण पत्र (यदि हो)']
                },
                {
                  titleEn: '3. Legal Records',
                  titleHn: '३. विधिक अन्य प्रमाण',
                  itemsEn: ['Birth Certificate (Muncipality/Gram Panchayat)', 'Caste proof certificate if quota applicable', 'Medical fitness safety certificate'],
                  itemsHn: ['नगरपालिका/पंचायत द्वारा जारी जन्म प्रमाण', 'जाति प्रमाण पत्र (आरक्षित वर्ग हेतु)', 'प्राथमिक स्वास्थ्य फिटनेस प्रमाण पत्र']
                }
              ].map((box) => (
                <div key={box.titleEn} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3 shadow-sm">
                  <p className="font-bold text-slate-900 text-sm border-b border-slate-200/60 pb-1.5">
                    {language === 'en' ? box.titleEn : box.titleHn}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {(language === 'en' ? box.itemsEn : box.itemsHn).map((li, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <FileText size={13} className="text-orange-600 shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs"
              >
                {language === 'en' ? 'Back' : 'पीछे जाएं'}
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>{language === 'en' ? 'Step 4: Book seat slot' : 'चरण ४: संपर्क और अपॉइंटमेंट'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: SUBMIT LEAD FORM */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn" id="admissions-step-4">
            {!submitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3 text-xs md:text-sm text-slate-800">
                  <AlertCircle className="text-blue-700 shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-blue-900">{language === 'en' ? 'Lock Your Pre-Screening Seat Now' : 'अपनी प्री-स्क्रीनिंग सीट लॉक करें'}</p>
                    <p className="text-slate-600 mt-0.5">
                      {language === 'en' 
                        ? 'No upfront payment needed. Submitting this form informs our principal office. A fast copy of calculation can be posted to school whatsapp.'
                        : 'कोई अग्रिम भुगतान आवश्यक नहीं है। यह फ़ॉर्म सबमिट करने पर हमारे प्रधानाचार्य कार्यालय को सूचित किया जाएगा।'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">{language === 'en' ? 'Parent Name *' : 'अभिभावक का नाम *'}</label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      placeholder={language === 'en' ? 'eg: Rajesh Sharma' : 'उदा: राजेश शर्मा'}
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">{language === 'en' ? 'Child Full Name *' : 'बच्चे का पूरा नाम *'}</label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      placeholder={language === 'en' ? 'eg: Abhinav' : 'उदा: अभिनव'}
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">{language === 'en' ? 'WhatsApp Mobile Number *' : 'व्हाट्सएप मोबाइल नंबर *'}</label>
                    <input
                      type="tel"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      placeholder="e.g. +91 94311 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">{language === 'en' ? 'Selected Target Division' : 'चयनित श्रेणी व वर्ग'}</label>
                    <input
                      type="text"
                      className="w-full border border-slate-100 bg-slate-50 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 focus:outline-none"
                      value={targetClass.split(' (')[0]}
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs"
                  >
                    {language === 'en' ? 'Back' : 'पीछे जाएं'}
                  </button>
                  <button
                    type="submit"
                    className="py-3.5 px-8 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black uppercase text-xs tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={16} />
                    <span>{language === 'en' ? 'Submit Application' : 'आवेदन जमा करें'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-scaleUp" id="submission-success-view">
                <div className="inline-flex h-16 w-16 bg-green-100 border border-green-200 rounded-full items-center justify-center text-green-600 mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">
                    {language === 'en' ? 'Inquiry Submitted Successfully!' : 'सफलतापूर्वक विचारार्थ सबमिट किया गया!'}
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 max-w-lg mx-auto">
                    {language === 'en' 
                      ? `Thank you ${parentName}! We have generated an active counselor slip. You can now choose to send a fast pre-formatted template directly to our Registrar over WhatsApp.`
                      : `धन्यवाद ${parentName}! हमने आपके आवेदन का विवरण दर्ज कर लिया है। आप सीधे व्हाट्सएप लिंक द्वारा हमारे प्रधानाचार्य जी को विवरण सबमिट कर सकते हैं।`}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-700">
                  <div className="flex justify-between border-b pb-1 font-semibold text-slate-900 uppercase">
                    <span>{language === 'en' ? 'Candidate details' : 'छात्र विवरण'}</span>
                    <span>{language === 'en' ? 'Fee Calculation' : 'फीस विवरण'}</span>
                  </div>
                  <p>• {language === 'en' ? 'Child Name' : 'बच्चे का नाम'}: <strong>{childName}</strong></p>
                  <p>• {language === 'en' ? 'Admitting Class' : 'कक्षा जिसमें प्रवेश चाहिए'}: <strong>{targetClass}</strong></p>
                  <p>• {language === 'en' ? 'Scholarship Waiver' : 'छात्रवृत्ति छूट'}: <span>{scholarshipCategory.toUpperCase()}</span></p>
                  <p className="border-t pt-1.5 font-bold text-orange-600 flex justify-between">
                    <span>{language === 'en' ? 'Final School Fee' : 'अंतिम देय शुल्क'}:</span>
                    <span>₹{finalTuitionFee}/month</span>
                  </p>
                </div>

                <div className="pt-2 flex flex-col md:flex-row gap-2 justify-center max-w-md mx-auto">
                  <button
                    onClick={triggerWhatsAppLead}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>{language === 'en' ? 'Forward To Registrar WhatsApp' : 'रजिस्ट्रार व्हाट्सएप पर भेजें'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setParentName('');
                      setChildName('');
                      setPhone('');
                      setDob('');
                      setStep(1);
                    }}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3.5 px-6 rounded-xl text-xs"
                  >
                    {language === 'en' ? 'Submit Another Inquiry' : 'दूसरा आवेदन करें'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
