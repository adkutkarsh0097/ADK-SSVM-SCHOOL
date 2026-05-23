/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  language: 'en' | 'hn';
}

export default function FloatingWhatsApp({ language }: FloatingWhatsAppProps) {
  const handleWhatsAppRedirect = () => {
    const textMessage = encodeURIComponent(
      language === 'en'
        ? "Pranam ADK School SSVM, I am interested in seeking admissions for my child in the upcoming academic session. Please guide on the next procedures."
        : "प्रणाम एडीके स्कूल एसएसवीएम, मैं आगामी शैक्षणिक सत्र में अपने बच्चे के प्रवेश के लिए जानकारी प्राप्त करना चाहता हूँ। कृपया मार्गदर्शन करें।"
    );
    window.open(`https://wa.me/917379990043?text=${textMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-16 lg:bottom-6 right-6 z-40" id="floating-whatsapp-container">
      <button
        onClick={handleWhatsAppRedirect}
        className="h-12 w-12 md:h-14 md:w-14 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-all relative group cursor-pointer border border-emerald-400/20"
        aria-label="Direct Inquiry over WhatsApp"
        id="whatsapp-floater"
      >
        {/* Radar wave pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25"></span>
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform shrink-0" />

        {/* Hover label tooltip info */}
        <span className="absolute right-[115%] bg-slate-900 border border-slate-800 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          {language === 'en' ? 'WhatsApp Inquiry' : 'व्हाट्सएप पूछताछ'}
        </span>
      </button>
    </div>
  );
}
