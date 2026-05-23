/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, UserCheck, ShieldCheck, CreditCard, ChevronRight, MessageSquare, Download, AlertCircle, LogOut, CheckCircle, Smartphone, Send, SendHorizontal, Play } from 'lucide-react';
import { PORTAL_STUDENTS } from '../data';

interface ParentPortalProps {
  language: 'en' | 'hn';
}

export default function ParentPortal({ language }: ParentPortalProps) {
  const [rollNoInput, setRollNoInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loggedInStudent, setLoggedInStudent] = useState<typeof PORTAL_STUDENTS[0] | null>(null);

  // Active dashboard view selection
  const [activePortalTab, setActivePortalTab] = useState<'overview' | 'homework' | 'fees' | 'chat'>('overview');

  // Interactive Payment simulation
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  // Interactive Teacher messaging state
  const [chatMessages, setChatMessages] = useState<{ sender: 'parent' | 'teacher'; text: string; time: string }[]>([
    { sender: 'teacher', text: language === 'en' ? 'Pranam Parent. How can I help you today relative to your child classroom progress?' : 'प्रणाम अभिभावक। आज मैं आपके बच्चे की प्रगति के संबंध में आपकी क्या सहायता कर सकता हूँ?', time: '09:12 AM' }
  ]);
  const [newMsgText, setNewMsgText] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('Shri Ramakant Dwivedi (Principal)');

  const handlePortalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNoInput || !pinInput) {
      setErrorMsg(language === 'en' ? 'Please fill out both Roll Number and PIN.' : 'कृपया रोल नंबर और पिन दोनों दर्ज करें।');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      const student = PORTAL_STUDENTS.find(
        (s) => s.rollNo === rollNoInput.trim() && s.pin === pinInput.trim()
      );

      setLoading(false);
      if (student) {
        // Setup state clone to support mutations (e.g. paying fees)
        setLoggedInStudent({ ...student });
        setActivePortalTab('overview');
        setPaymentDone(false);
      } else {
        setErrorMsg(
          language === 'en'
            ? 'Invalid Roll Number or Student PIN. Please check the help guidelines box below for demo codes.'
            : 'अमान्य रोल नंबर या पिन। कृपया नीचे दिए गए परीक्षण पिन कोड देखें।'
        );
      }
    }, 850);
  };

  const handleLogout = () => {
    setLoggedInStudent(null);
    setRollNoInput('');
    setPinInput('');
    setPaymentDone(false);
    setChatMessages([
      { sender: 'teacher', text: language === 'en' ? 'Pranam Parent. How can I help you today relative to your child classroom progress?' : 'प्रणाम अभिभावक। आज मैं आपके बच्चे की प्रगति के संबंध में आपकी क्या सहायता कर सकता हूँ?', time: '09:12 AM' }
    ]);
  };

  // Simulate Homework status updates
  const markHomeworkSubmitted = (index: number) => {
    if (!loggedInStudent) return;
    const updatedHomeworkLst = [...loggedInStudent.homework];
    updatedHomeworkLst[index].status = language === 'en' ? 'Submitted via App (Awaiting Review)' : 'ऐप के माध्यम से जमा किया गया (सत्यापन लंबित)';
    setLoggedInStudent({
      ...loggedInStudent,
      homework: updatedHomeworkLst,
    });
  };

  // Simulating live UPI/Card Fee Payment
  const initiateMockPayment = () => {
    setProcessingPayment(true);
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentDone(true);
      if (loggedInStudent) {
        setLoggedInStudent({
          ...loggedInStudent,
          feeStatus: language === 'en' ? 'Paid (Dues Checked: ₹0)' : 'सभी शुल्क जमा (देय: ₹0)',
          pendingFees: 0,
        });
      }
    }, 2200);
  };

  // Interactive Chat response script
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsgText.trim() || !loggedInStudent) return;

    const userMessageTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const nextMsgList = [
      ...chatMessages,
      { sender: 'parent' as const, text: newMsgText, time: userMessageTime }
    ];
    setChatMessages(nextMsgList);
    setNewMsgText('');

    // Trigger dynamic contextual helper response from teacher
    setTimeout(() => {
      let automatedResponse = '';
      const lowercaseMsg = newMsgText.toLowerCase();

      if (lowercaseMsg.includes('fee') || lowercaseMsg.includes('paisa') || lowercaseMsg.includes('invoice') || lowercaseMsg.includes('शुल्क')) {
        automatedResponse = language === 'en'
          ? `Respected parent, you can pay Quarter academic tuition fee via App's 'Fees' Tab instantly. A secured GPay transaction receipts will be validated directly.`
          : `आदरणीय अभिभावक, आप ऐप के 'शुल्क' (Fees) टैब के माध्यम से सीधे भुगतान कर सकते हैं। भुगतान रसीद तुरंत रिकॉर्ड में दर्ज हो जाएगी।`;
      } else if (lowercaseMsg.includes('exam') || lowercaseMsg.includes('test') || lowercaseMsg.includes('syllabus') || lowercaseMsg.includes('परीक्षा')) {
        automatedResponse = language === 'en'
          ? `Pre-board mock sheets and weekly syllabus targets will be distributed this Friday. Kindly ensure ${loggedInStudent.name} completes the formulas sheet.`
          : `अर्धवार्षिक परीक्षा का पाठ्यक्रम और परीक्षा टाइम-टेबल इस शुक्रवार को बच्चों को दे दिया जाएगा। कृपया सुनिश्चित करें कि ${loggedInStudent.name} अभ्यास कार्य पूरा रखे।`;
      } else if (lowercaseMsg.includes('homework') || lowercaseMsg.includes('copy') || lowercaseMsg.includes('गृहकार्य')) {
        automatedResponse = language === 'en'
          ? `Today's assignments are already logs in your child application workspace. All textbook copies must be submitted tomorrow morning for calibration marking.`
          : `आज का गृहकार्य ऐप के 'गृहकार्य' (Homework) सेक्शन में अपलोड है। कृपया बच्चों से समय पर कॉपियां पूरी करवाएं।`;
      } else {
        automatedResponse = language === 'en'
          ? `Thank you for sharing. I will double-check your request relative to ${loggedInStudent.name}'s active classes and coordinate with principal Dwivedi Ji.`
          : `आपकी बात को नोट कर लिया गया है। मैं कक्षा शिक्षक से समन्वय कर ${loggedInStudent.name} के प्रदर्शन और आपके सुझाव पर कल सुबह विचार करूँगा।`;
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'teacher' as const, text: automatedResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }, 1100);
  };

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-xl overflow-hidden" id="parent-portal-dashboard-wrapper">
      
      {/* Outer Header Branding Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-950 to-indigo-950 py-6 px-6 md:px-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-1">
            <Smartphone size={16} />
            <span className="text-xs uppercase font-bold tracking-widest">{language === 'en' ? 'School Digital App Support' : 'विद्यालय डिजिटल पेरेंट ऐप'}</span>
          </div>
          <h3 className="text-xl md:text-3xl font-black tracking-tight" id="portal-title-block">
            {language === 'en' ? 'ADK Panchapranali Parent Portal' : 'एडीके पंचप्रणाली अभिभावक पोर्टल'}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            {language === 'en'
              ? 'Real-time sync tool for monitoring daily homework boards, academic results progress, secure attendance sheets, and fee statements.'
              : 'दैनिक गृहकार्य, शैक्षिक परिणाम प्रगति, सुरक्षित दैनिक उपस्थिति पत्रक और शुल्क विवरण की निगरानी के लिए रियल-टाइम सिंक उपकरण।'}
          </p>
        </div>

        {/* Dynamic App Download Buttons */}
        <div className="flex gap-2 shrink-0">
          <button className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
            <Download size={12} />
            <span>Google Play</span>
          </button>
          <button className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
            <Download size={12} />
            <span>Apple Store</span>
          </button>
        </div>
      </div>

      {/* BEFORE LOGIN INTERACTION VIEW */}
      {!loggedInStudent ? (
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" id="portal-logged-out-section">
          
          {/* Form container */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm lg:col-span-7">
            <div>
              <h4 className="text-lg font-black text-slate-900 leading-tight">
                {language === 'en' ? 'Authorized Administrative Login' : 'अभिभावक ऐप लॉगिन कार्यालय'}
              </h4>
              <p className="text-slate-500 text-xs mt-0.5">
                {language === 'en' 
                  ? 'Access secure information regarding your child. Please input the official credentials issued during enrollment.'
                  : 'अपने बच्चे से संबंधित सुरक्षित जानकारी देखें। कृपया नामांकन के समय जारी क्रेडेंशियल दर्ज करें।'}
              </p>
            </div>

            <form onSubmit={handlePortalLogin} className="space-y-4 mt-6">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  {language === 'en' ? 'Student Registration / Roll No *' : 'छात्र रोल नंबर *'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. 202609"
                  value={rollNoInput}
                  onChange={(e) => setRollNoInput(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  {language === 'en' ? 'Student Safety PIN *' : 'सुरक्षित विद्यार्थी पिन *'}
                </label>
                <input
                  type="password"
                  maxLength={4}
                  placeholder="e.g. 1234"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium tracking-widest font-mono"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>{language === 'en' ? 'Verify and Enter Dashboard' : 'सत्यापित करें और प्रवेश करें'}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Guidelines Box with testing pins */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-blue-50/70 border border-blue-200/50 rounded-2xl p-6 text-xs text-blue-950 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-blue-200/60 text-blue-900">
                <ShieldCheck size={18} className="shrink-0" />
                <p className="font-bold text-sm tracking-tight">{language === 'en' ? 'Active Demo Credentials for Evaluators' : 'मूल्यांकनकर्ता के लिए डेमो क्रेडेंशियल'}</p>
              </div>

              <p className="text-slate-700 leading-normal">
                {language === 'en' 
                  ? 'We have pre-provisioned two fully configured local database profiles of students so parents or school inspectors can try the features instantly.'
                  : 'हमने छात्रों की पहले से कॉन्फ़िगर की गई दो प्रोफाइल बनाई हैं ताकि अभिभावक या मूल्यांकनकर्ता तुरंत सुविधाओं का परीक्षण कर सकें।'}
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white/80 border border-blue-200/40 p-3 rounded-xl">
                  <p className="font-bold text-slate-900 border-b pb-1 mb-1">{language === 'en' ? 'Profile 1: Senior School Block' : 'प्रोफ़ाइल १: उच्च विद्यालय खंड'}</p>
                  <p>• <strong>{language === 'en' ? 'Roll No:' : 'रोल नंबर:'}</strong> <code className="font-mono bg-blue-100 px-1 py-0.5 rounded font-bold">202609</code></p>
                  <p>• <strong>{language === 'en' ? 'Student PIN:' : 'विद्यार्थी पिन:'}</strong> <code className="font-mono bg-blue-100 px-1 py-0.5 rounded font-bold">1234</code></p>
                  <p className="text-[10px] text-slate-500 mt-1">• Representative: <strong>Abhinav Sharma (Class 9-A)</strong></p>
                </div>

                <div className="bg-white/80 border border-blue-200/40 p-3 rounded-xl">
                  <p className="font-bold text-slate-900 border-b pb-1 mb-1">{language === 'en' ? 'Profile 2: Primary Children Block' : 'प्रोफ़ाइल २: प्राथमिक स्कूल खंड'}</p>
                  <p>• <strong>{language === 'en' ? 'Roll No:' : 'रोल नंबर:'}</strong> <code className="font-mono bg-blue-100 px-1 py-0.5 rounded font-bold">202612</code></p>
                  <p>• <strong>{language === 'en' ? 'Student PIN:' : 'विद्यार्थी पिन:'}</strong> <code className="font-mono bg-blue-100 px-1 py-0.5 rounded font-bold">5678</code></p>
                  <p className="text-[10px] text-slate-500 mt-1">• Representative: <strong>Ananya Pathak (Class 4-B)</strong></p>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 leading-relaxed italic">
                {language === 'en'
                  ? 'Note: Logging in allows testing real interactions like answering homework copies, processing mock payments, and receiving automated replies from selected subject teachers.'
                  : 'नोट: लॉगिन करने पर आप सीधे गृहकार्य जमा करने, शुल्क रसीद का भुगतान करने और शिक्षकों से सीधे सवाल पूछने का परीक्षण कर सकते हैं।'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* AFTER LOGIN VIEW SECTION: FULL PORTAL DASHBOARD */
        <div className="p-4 md:p-6 lg:p-8 space-y-6" id="portal-logged-in-section">
          
          {/* Header Child Info Bar */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 md:p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src={loggedInStudent.avatar}
                alt={loggedInStudent.name}
                className="h-14 w-14 rounded-full border-2 border-orange-500 object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="bg-orange-100 text-orange-850 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                  {loggedInStudent.class}
                </span>
                <h4 className="text-lg md:text-xl font-black text-slate-900 leading-tight mt-1">
                  {loggedInStudent.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {language === 'en' ? 'Father' : 'पिता'}: <strong>{loggedInStudent.fatherName}</strong> • {language === 'en' ? 'Reg No' : 'पंजीकरण संख्या'}: <strong>{loggedInStudent.rollNo}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={handleLogout}
                className="bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer w-full md:w-auto"
                id="portal-logout-button"
              >
                <LogOut size={14} />
                <span>{language === 'en' ? 'Logout Portal' : 'लॉगआउट करें'}</span>
              </button>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex border-b border-slate-200 overflow-x-auto gap-4 md:gap-8 text-xs md:text-sm">
            {[
              { id: 'overview', titleEn: 'Overview Progress', titleHn: 'संक्षिप्त प्रगति' },
              { id: 'homework', titleEn: 'Daily Homework', titleHn: 'दैनिक सुविचार व कार्य' },
              { id: 'fees', titleEn: 'Fee Statement', titleHn: 'शुल्क एवं बिल' },
              { id: 'chat', titleEn: 'Teacher Hotline Chat', titleHn: 'शिक्षक सीधे वार्ता' }
            ].map((tabLink) => (
              <button
                key={tabLink.id}
                onClick={() => setActivePortalTab(tabLink.id as any)}
                className={`pb-3 font-bold px-1 transition-all shrink-0 border-b-2 cursor-pointer ${
                  activePortalTab === tabLink.id 
                    ? 'border-blue-700 text-blue-700 scale-105' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {language === 'en' ? tabLink.titleEn : tabLink.titleHn}
              </button>
            ))}
          </div>

          {/* TAP CONTENTS */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm min-h-[300px]" id="portal-tab-content-panel">
            
            {/* TAB OVERVIEW */}
            {activePortalTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn" id="overview-tab-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Attendance Card */}
                  <div className="bg-emerald-50/50 border border-emerald-200/40 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-center text-emerald-800">
                      <span className="text-xs font-bold uppercase tracking-wider">{language === 'en' ? 'Roll Presence Rate' : 'मासिक उपस्थिति दर'}</span>
                      <UserCheck size={18} />
                    </div>
                    <div>
                      <h5 className="text-3xl font-black text-emerald-950 font-mono">{loggedInStudent.attendance}</h5>
                      <p className="text-xs font-semibold text-slate-600 mt-1">{loggedInStudent.attendanceStatus}</p>
                    </div>
                  </div>

                  {/* Fee status outline */}
                  <div className={`rounded-2xl p-4 space-y-3 border ${
                    loggedInStudent.pendingFees === 0 
                      ? 'bg-blue-50/50 border-blue-200/40' 
                      : 'bg-yellow-50/50 border-yellow-200/40'
                  }`}>
                    <div className="flex justify-between items-center text-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider">{language === 'en' ? 'Fees Bill dues' : 'शुल्क भुगतान स्थिति'}</span>
                      <CreditCard size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-3xl font-black text-slate-900 font-mono">
                        {loggedInStudent.pendingFees === 0 ? '₹0' : `₹${loggedInStudent.pendingFees}`}
                      </h5>
                      <p className="text-xs font-semibold text-slate-600 mt-1">{loggedInStudent.feeStatus}</p>
                    </div>
                  </div>

                  {/* Pending assignments indicator */}
                  <div className="bg-orange-50/50 border border-orange-200/40 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-center text-orange-850">
                      <span className="text-xs font-bold uppercase tracking-wider">{language === 'en' ? 'Homework Sheets' : 'दैनिक गृहकार्य'}</span>
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h5 className="text-3xl font-black text-orange-950 font-mono">
                        {loggedInStudent.homework.filter((h) => h.status.includes('Pending') || h.status.includes('लंबित') || h.status.includes('Check') || h.status.includes('awaiting')).length}
                      </h5>
                      <p className="text-xs font-semibold text-slate-600 mt-1">
                        {language === 'en' ? 'Requires student signature completion' : 'शिक्षक हस्ताक्षर हेतु लंबित है'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher remarks area */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    {language === 'en' ? 'Teacher Remarks & Core Evaluation:' : 'शिक्षक का साप्ताहिक मार्गदर्शन व टिप्पणी:'}
                  </p>
                  <p className="text-slate-800 text-sm italic font-medium">
                    "{loggedInStudent.remarks}"
                  </p>
                  <p className="text-[10px] text-slate-400 text-right pt-1">
                    — Class Teacher Coordinator (ADK Sishuvihar Academic Committee)
                  </p>
                </div>
              </div>
            )}

            {/* TAB HOMEWORK */}
            {activePortalTab === 'homework' && (
              <div className="space-y-4 animate-fadeIn" id="homework-tab-content">
                <div>
                  <h5 className="text-base font-bold text-slate-900 mb-1">
                    {language === 'en' ? 'Digital Academic Diary updates' : 'डिजिटल संवाद डायरी - दैनिक गृहकार्य अपडेट'}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {language === 'en' 
                      ? 'Ensure assignments are finalized before morning prayer assemblies to prevent demerit markings.'
                      : 'कृपया प्रार्थना सभा शुरू होने से पहले गृहकार्य कॉपियां पूरी सुनिश्चित कराएं।'}
                  </p>
                </div>

                <div className="space-y-3">
                  {loggedInStudent.homework.map((hw, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col md:flex-row justify-between gap-3 items-start md:items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-200 font-bold px-2 py-0.5 rounded text-[10px] uppercase text-slate-700">
                            {hw.subject}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">{hw.date}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{hw.task}</p>
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className="text-slate-500">{language === 'en' ? 'Status' : 'स्थिति'}:</span>
                          <span className={`font-bold ${
                            hw.status.includes('Pending') || hw.status.includes('लंबित') || hw.status.includes('completion')
                              ? 'text-yellow-600' 
                              : 'text-green-600'
                          }`}>
                            {hw.status}
                          </span>
                        </div>
                      </div>

                      {/* Interactive completion submission simulator button */}
                      {(hw.status.includes('Pending') || hw.status.includes('completion') || hw.status.includes('लंबित')) && (
                        <button
                          onClick={() => markHomeworkSubmitted(i)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-wide px-3.5 py-2 rounded-xl border border-blue-500 transition-colors cursor-pointer self-stretch md:self-auto text-center"
                        >
                          {language === 'en' ? 'Submit Photo Copy' : 'कॉपी फोटो भेजें'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB FEES */}
            {activePortalTab === 'fees' && (
              <div className="space-y-6 animate-fadeIn" id="fees-tab-content">
                {!paymentDone && loggedInStudent.pendingFees > 0 ? (
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 text-xs md:text-sm text-yellow-850">
                      <AlertCircle size={20} className="shrink-0 mt-0.5 text-yellow-600" />
                      <div>
                        <p className="font-bold">{language === 'en' ? 'Tuition Fee dues detected' : 'देय शुल्क विवरण मिला है'}</p>
                        <p className="text-slate-700 mt-0.5">
                          {language === 'en' 
                            ? 'Quarter 1 Tuition Fees of your child is outstanding. Please finalize transaction below to restore automatic ledger validation.'
                            : 'आपका चालू त्रैमासिक का शिक्षण शुल्क अभी बकाया है। निर्बाध शिक्षा हेतु कृपया नीचे दिए गए यूपीआई विकल्पों द्वारा ऑनलाइन भुगतान पूरा करें।'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl max-w-sm">
                      <div className="space-y-3 text-xs text-slate-600">
                        <div className="flex justify-between border-b pb-1.5 font-bold text-slate-900 text-sm">
                          <span>{language === 'en' ? 'Syllabus Fee Breakdown' : 'शुल्क मद विवरण'}</span>
                          <span>Quarterly Amount</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• {language === 'en' ? 'Monthly Tuition Rate' : 'मासिक शिक्षण शुल्क'} ({loggedInStudent.class})</span>
                          <span>₹{(loggedInStudent.pendingFees / 3).toFixed(0)} x 3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• {language === 'en' ? 'Smart Board and Lab usage dues' : 'कम्यूटर लैब व स्मार्ट क्लास शुल्क'}</span>
                          <span className="text-green-600">₹0 (Free / SSVM Initiative)</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 font-black text-slate-900 text-sm">
                          <span>{language === 'en' ? 'Net Outstanding Bill:' : 'कुल बकाया देय शुल्क:'}</span>
                          <span className="text-orange-600">₹{loggedInStudent.pendingFees}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pay button trigger */}
                    <div className="pt-2">
                      <button
                        onClick={initiateMockPayment}
                        disabled={processingPayment}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 max-w-sm w-full"
                      >
                        {processingPayment ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>{language === 'en' ? 'Authorizing Secure UPI Transaction...' : 'सुरक्षित यूपीआई लिंक लोड हो रहा है...'}</span>
                          </>
                        ) : (
                          <>
                            <CreditCard size={16} />
                            <span>{language === 'en' ? `Simulate Secure UPI Payment (₹${loggedInStudent.pendingFees})` : `सुरक्षित यूपीआई भुगतान करें (₹${loggedInStudent.pendingFees})`}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-4 animate-scaleUp" id="payment-success-outcome">
                    <div className="inline-flex h-14 w-14 bg-green-100 border border-green-200 rounded-full items-center justify-center text-green-600">
                      <CheckCircle size={28} />
                    </div>
                    <div>
                      <h5 className="text-xl font-black text-slate-900">
                        {language === 'en' ? 'All Tuition Fees Cleared!' : 'सभी शिक्षण शुल्क का भुगतान हो चुका है!'}
                      </h5>
                      <p className="text-slate-500 text-xs mt-1 max-w-md mx-auto">
                        {language === 'en' 
                          ? 'Receipt No SSVM-2026-9810 has been processed for parent safety ledger, and synced with primary head office accounts.'
                          : 'रसीद संख्या SSVM-2026-9810 सफलतापूर्वक दर्ज कर ली गई है, एवं ऑनलाइन सुरक्षित रिकॉर्ड सिंक हो चुका है।'}
                      </p>
                    </div>

                    <p className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs py-2 px-4 rounded-xl inline-block font-bold">
                      {language === 'en' ? 'Ledger balance due: ₹0.00' : 'शेष देय राशि: ₹०.००'}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB CHAT */}
            {activePortalTab === 'chat' && (
              <div className="space-y-4 animate-fadeIn" id="chat-tab-content">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">{language === 'en' ? 'Active Line with' : 'सक्रिय शिक्षक से संपर्क'}:</span>
                    <select
                      value={selectedTeacher}
                      onChange={(e) => {
                        setSelectedTeacher(e.target.value);
                        setChatMessages((prev) => [
                          ...prev,
                          { sender: 'teacher', text: language === 'en' ? `Pranam Parent, I am ${e.target.value.split(' (')[0]}. How can I assist you with child studies today?` : `प्रणाम अभिभावक, मैं ${e.target.value.split(' (')[0]} हूँ। आज शिक्षा के संबंध में आपकी क्या सहायता कर सकता हूँ?`, time: 'Just now' }
                        ]);
                      }}
                      className="ml-1 border-0 bg-transparent font-bold text-blue-700 font-sans focus:outline-none cursor-pointer"
                    >
                      <option value="Shri Ramakant Dwivedi (Principal)">Shri Ramakant Dwivedi (Principal)</option>
                      <option value="Smt. Geeta Mishra (Headmistress)">Smt. Geeta Mishra (Headmistress)</option>
                      <option value="Shri Utkarsh Singh (Computer Faculty)">Shri Utkarsh Singh (Computer Faculty)</option>
                      <option value="Smt. Preeti Jha (Science Faculty)">Smt. Preeti Jha (Science Coordinator)</option>
                    </select>
                  </div>
                  <span className="text-[10px] text-green-600 bg-green-500/10 px-2 py-0.5 rounded font-bold uppercase animate-pulse">
                    ● {language === 'en' ? 'Active Response Support' : 'लाइव सहायक सक्रिय'}
                  </span>
                </div>

                {/* Chat conversation area scrollbox */}
                <div className="border border-slate-100 rounded-2xl h-64 overflow-y-auto p-4 space-y-3 flex flex-col justify-end bg-slate-50/50">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[75%] p-3 rounded-2xl text-xs space-y-1 ${
                        msg.sender === 'parent'
                          ? 'bg-blue-600 text-white rounded-tr-none self-end'
                          : 'bg-white border text-slate-800 rounded-tl-none self-start shadow-sm'
                      }`}
                    >
                      <p className="leading-relaxed font-semibold">{msg.text}</p>
                      <p className={`text-[9px] text-right font-mono ${
                        msg.sender === 'parent' ? 'text-white/70' : 'text-slate-400'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Input form */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMsgText}
                    onChange={(e) => setNewMsgText(e.target.value)}
                    placeholder={
                      language === 'en'
                        ? "Type message to teacher... (e.g., 'fee dues' or 'exams date')"
                        : "संदेश लिखें... (जैसे: 'exams date' या 'fee dues')"
                    }
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <Send size={15} />
                  </button>
                </form>

                {/* Help Quick Chips */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wide">{language === 'en' ? 'Quick Topics to Try:' : 'यहा से त्वरित विषय चुनें:'}</span>
                  {[
                    { textEn: 'When are the exam dates?', textHn: 'परीक्षा कब है?', reply: 'exam' },
                    { textEn: 'Where can I see fee invoices?', textHn: 'शुल्क बिल कहा है?', reply: 'fee' },
                    { textEn: 'Is daily homework checked?', textHn: 'क्या गृहकार्य चेक होता है?', reply: 'homework' }
                  ].map((chip) => (
                    <button
                      key={chip.textEn}
                      type="button"
                      onClick={() => {
                        setNewMsgText(language === 'en' ? chip.textEn : chip.textHn);
                      }}
                      className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full cursor-pointer border border-slate-200"
                    >
                      {language === 'en' ? chip.textEn : chip.textHn}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
