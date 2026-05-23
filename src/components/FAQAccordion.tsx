/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, CreditCard, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data';

interface FAQAccordionProps {
  language: 'en' | 'hn';
}

export default function FAQAccordion({ language }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'f1': true, // Open first by default
  });
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'admissions' | 'fees' | 'academic'>('all');

  const toggleFAQId = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFAQs = FAQS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="space-y-6" id="faq-accordion-container">
      {/* Category selector pill badges */}
      <div className="flex flex-wrap gap-2 justify-center" id="faq-category-pills">
        {[
          { id: 'all', titleEn: 'Show All FAQs', titleHn: 'सभी प्रश्नोत्तर' },
          { id: 'admissions', titleEn: 'Admissions FAQ', titleHn: 'प्रवेश सम्बन्धी' },
          { id: 'fees', titleEn: 'Fees Details', titleHn: 'शुल्क सम्बन्धी' },
          { id: 'academic', titleEn: 'Curriculum & Rules', titleHn: 'पाठ्यक्रम व नियम' },
          { id: 'general', titleEn: 'Transport & Facilities', titleHn: 'सामान्य सुविधायें' }
        ].map((pill) => (
          <button
            key={pill.id}
            onClick={() => setActiveCategory(pill.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
              activeCategory === pill.id
                ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {language === 'en' ? pill.titleEn : pill.titleHn}
          </button>
        ))}
      </div>

      {/* Accordion Questions Grid */}
      <div className="space-y-3 max-w-3xl mx-auto" id="accordions-list">
        {filteredFAQs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl transition-all overflow-hidden ${
                isOpen 
                  ? 'bg-orange-50/20 border-orange-200 shadow-sm' 
                  : 'bg-white border-slate-200/60'
              }`}
            >
              {/* Box Trigger Header */}
              <button
                onClick={() => toggleFAQId(faq.id)}
                className="w-full text-left px-5 py-4 md:py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex gap-3 items-start">
                  <HelpCircle size={18} className={`mt-0.5 shrink-0 ${isOpen ? 'text-orange-600' : 'text-slate-400'}`} />
                  <span className="text-xs md:text-sm font-bold text-slate-900 pr-1">
                    {language === 'en' ? faq.questionEn : faq.questionHn}
                  </span>
                </div>
                <div className="shrink-0 text-slate-400">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {/* Collapsed Drawer Inner details */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-dashed border-orange-200/40 text-slate-600 text-xs md:text-sm leading-relaxed animate-fadeIn">
                  <p className="font-semibold text-slate-700">
                    {language === 'en' ? faq.answerEn : faq.answerHn}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
