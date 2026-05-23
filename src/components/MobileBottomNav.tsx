/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Sparkles, MessageCircle, BookOpen, Phone } from 'lucide-react';
import { AppTab } from '../types';

interface MobileBottomNavProps {
  currentTab: AppTab;
  setTab: (tab: AppTab) => void;
  language: 'en' | 'hn';
}

export default function MobileBottomNav({ currentTab, setTab, language }: MobileBottomNavProps) {
  const triggerWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'en'
        ? "Hello ADK School SSVM, I would like to inquire about school admissions for the academic session 2026-27."
        : "नमस्ते एडीके स्कूल एसएसवीएम, मैं शैक्षणिक सत्र २०२६-२७ के लिए प्रवेश के संबंध में जानकारी प्राप्त करना चाहता हूँ।"
    );
    window.open(`https://wa.me/917379990043?text=${text}`, '_blank');
  };

  const menuItems = [
    {
      tab: 'home' as AppTab,
      labelEn: 'Home',
      labelHn: 'होम',
      icon: <Home size={18} />,
    },
    {
      tab: 'admissions' as AppTab,
      labelEn: 'Admissions',
      labelHn: 'प्रवेश',
      icon: <Sparkles size={18} className="text-orange-500" />,
    },
    {
      tab: 'whatsapp-direct' as AppTab, // Action item
      labelEn: 'WhatsApp',
      labelHn: 'व्हाट्सएप',
      icon: <MessageCircle size={18} className="text-emerald-500" />,
      action: triggerWhatsApp,
    },
    {
      tab: 'portal' as AppTab,
      labelEn: 'Portal',
      labelHn: 'पोर्टल',
      icon: <BookOpen size={18} className="text-blue-600" />,
    },
    {
      tab: 'tel-call' as AppTab, // Action item
      labelEn: 'Call',
      labelHn: 'कॉल',
      icon: <Phone size={18} />,
      action: () => { window.location.href = "tel:+917379990043"; },
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200/80 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-50 py-1.5 px-2 flex justify-around items-center" id="mobile-bottom-dock">
      {menuItems.map((item) => {
        const isSelected = currentTab === item.tab;
        
        return (
          <button
            key={item.labelEn}
            onClick={() => {
              if (item.action) {
                item.action();
              } else if (item.tab) {
                setTab(item.tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`flex flex-col items-center justify-center py-1 px-3.5 rounded-lg transition-all cursor-pointer ${
              isSelected 
                ? 'bg-blue-50 text-blue-900 scale-105 font-bold' 
                : 'text-slate-600 active:bg-slate-50'
            }`}
            id={`mobile-dock-btn-${item.tab}`}
          >
            <div className={`mb-1 p-0.5 rounded ${isSelected ? 'scale-110' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-bold tracking-tight">
              {language === 'en' ? item.labelEn : item.labelHn}
            </span>
          </button>
        );
      })}
    </div>
  );
}
