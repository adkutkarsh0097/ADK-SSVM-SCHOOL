/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Sparkles, PhoneCall } from 'lucide-react';
import { AppTab } from '../types';

interface NotificationPopupProps {
  language: 'en' | 'hn';
  setTab: (tab: AppTab) => void;
}

export default function NotificationPopup({ language, setTab }: NotificationPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup 3 seconds after site load for dynamic parent attention
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-6 max-w-sm bg-slate-900 border border-orange-500/30 text-white rounded-2xl shadow-2xl z-50 p-5 overflow-hidden animate-slideIn" id="real-time-notification-box">
      {/* Sparkle decorative borders */}
      <div className="absolute top-0 right-0 h-1.5 w-full bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-600"></div>

      {/* Close trigger button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>

      <div className="space-y-3.5">
        <div className="flex gap-2 items-center text-orange-400">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-widest">{language === 'en' ? 'Admission Update' : 'प्रवेश सूचना २०२६'}</span>
        </div>

        <div className="space-y-1">
          <h5 className="text-sm font-black tracking-tight leading-snug">
            {language === 'en' 
              ? 'Limited Nursery Seat Openings!' 
              : 'शिशु वाटिका (नर्सरी) सीटें सीमित!'}
          </h5>
          <p className="text-xs text-slate-300 leading-normal font-medium">
            {language === 'en'
              ? 'Over 82% of seat entries have been allocated for session 2026-27. Submit your screening card this week to qualify for the first round.'
              : 'सत्र २०२६-२७ के लिए ८२% से अधिक सीटें आवंटित हो चुकी हैं। पहली काउंसलिंग सूची में स्थान सुरक्षित करने हेतु इस सप्ताह आवेदन करें।'}
          </p>
        </div>

        <div className="pt-1.5 flex gap-2">
          <button
            onClick={() => {
              setTab('admissions');
              setIsVisible(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-black uppercase tracking-wider py-2 rounded-lg cursor-pointer text-center outline-none transition-colors duration-150"
          >
            {language === 'en' ? 'Check Eligibility' : 'पात्रता की जांच करें'}
          </button>
          <a
            href="tel:+917379990043"
            className="bg-white/10 hover:bg-white/15 border border-white/15 text-white p-2 rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer"
          >
            <PhoneCall size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
