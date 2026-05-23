/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  CreditCard, 
  FileText, 
  ClipboardCheck, 
  Percent, 
  CalendarDays
} from 'lucide-react';

interface AdmissionsFAQProps {
  language: 'en' | 'hn';
}

interface AdmissionsFAQItem {
  id: string;
  icon: React.ReactNode;
  questionEn: string;
  questionHn: string;
  answerEn: string;
  answerHn: string;
  category: 'fees' | 'documents' | 'process' | 'general';
}

const ADMISSIONS_FAQS: AdmissionsFAQItem[] = [
  {
    id: 'af-1',
    icon: <CreditCard className="text-orange-500" size={18} />,
    category: 'fees',
    questionEn: 'What is the complete Fee Structure for the current 2026-27 session?',
    questionHn: 'शैक्षणिक सत्र 2026-27 के लिए शुल्क संरचना (Fee Structure) क्या है?',
    answerEn: 'Our monthly tuition fee starts from INR 1,200 (Nursery, Prep, and Shishu Watika) up to INR 2,200 (Class 10 CBSE levels). We strictly charge NO hidden quarterly charges or annual building funds. A one-time registration and development fee of INR 2,500 applies during initial enrollment.',
    answerHn: 'हमारा मासिक शिक्षण शुल्क ₹1,200 (शिशु वाटिका, नर्सरी, और प्रेप) से लेकर अधिकतम ₹2,200 (कक्षा 10 सीबीएसई) के बीच है। हमारे यहाँ कोई अतिरिक्त छिपे शुल्क या वार्षिक बिल्डिंग चार्ज नहीं लिए जाते हैं। प्रवेश के समय ₹2,500 का एकमुश्त पंजीकरण और विकास शुल्क लगता है।'
  },
  {
    id: 'af-2',
    icon: <FileText className="text-orange-500" size={18} />,
    category: 'documents',
    questionEn: 'Which legal documents must I submit to finalize the child\'s registration?',
    questionHn: 'बच्चे का प्रवेश सुनिश्चित करने के लिए कौन-से कानूनी दस्तावेज अनिवार्य हैं?',
    answerEn: 'To complete the school register, parents must submit: (1) Copy of municipal Birth Certificate (जन्म प्रमाण पत्र), (2) Child\'s Aadhar Card & both Parents\' Aadhar Card copies, (3) Original School Leaving or Transfer Certificate (T.C.) from previous registered institution (applicable for Class 1 or higher), (4) Copy of previous class Final Report Card, and (5) 4 recent passport-sized color photographs of the child.',
    answerHn: 'पंजीकरण पूरा करने के लिए अभिभावकों को निम्नलिखित दस्तावेज जमा करने होंगे: (१) बच्चे का जन्म प्रमाण पत्र (नगर निगम द्वारा जारी), (२) बच्चे एवं माता-पिता दोनों का आधार कार्ड, (३) पूर्व संस्था का मूल स्थानांतरण प्रमाण पत्र (T.C.) (कक्षा एक या ऊपर के लिए), (४) पिछली कक्षा का अंतिम रिपोर्ट कार्ड, और (५) बच्चे के ४ हालिया रंगीन पासपोर्ट साइज फोटो।'
  },
  {
    id: 'af-3',
    icon: <ClipboardCheck className="text-orange-500" size={18} />,
    category: 'process',
    questionEn: 'How does the child evaluation assessment and class allocation operate?',
    questionHn: 'बच्चे के प्रवेश के लिए आकलन (Entrance / Interaction) किस प्रकार किया जाता है?',
    answerEn: 'Our entry procedure differs by age category. For Shishu Watika and Kindergarten levels, validation is completely informal, stress-free, consisting of simple vocal cues, recognition of colors, shapes, and general interactive behaviors. For Classes 1 to 10, a modern counseling session evaluates progress in Mathematics, Science, and Language competencies to place them in the correct section.',
    answerHn: 'हमारे यहाँ विभिन्न कक्षाओं के लिए प्रवेश प्रक्रिया अलग-अलग है। शिशु वाटिका एवं बाल-वाटिका स्तर पर, यह पूरी तरह से अनौपचारिक, सरल एवं बातचीत आधारित होता है ताकि बच्चा तनावमुक्त महसूस करे। पहली से दसवीं कक्षा के लिए, मुख्य विषयों (गणित, विज्ञान, भाषा) में बच्चे की आधारभूत समझ को परखने के लिए एक परामर्श परीक्षा और सामान्य संवाद सत्र आयोजित किया जाता है।'
  },
  {
    id: 'af-4',
    icon: <CalendarDays className="text-orange-500" size={18} />,
    category: 'fees',
    questionEn: 'Can I pay the tuition fees in easy periodic installments?',
    questionHn: 'क्या स्कूल की मासिक फीस का भुगतान किश्तों अथवा ऑनलाइन माध्यमों से किया जा सकता है?',
    answerEn: 'Yes, to support our parents, school fee collection runs strictly on a monthly cycle, payable by the 10th day of each month. We also support convenient quarterly installments. Online payments can be instantly transacted via PhonePe, GPay, UPI QR codes, NET banking, or cash deposits directly at the registrar branch counter.',
    answerHn: 'हाँ, अभिभावकों की सुविधा के लिए शिक्षण शुल्क का भुगतान मासिक आधार पर हर महीने की १० तारीख तक या फिर तिमाही किश्तों में जमा किया जा सकता है। आप अपने बैंक खाते से सीधे PhonePe, Google Pay, यूपीआई क्यूआर कोड (UPI QR Code), या विद्यालय कार्यालय के काउंटर पर सीधे नकद काउंटर रसीद द्वारा भुगतान जमा कर सकते हैं।'
  },
  {
    id: 'af-5',
    icon: <Percent className="text-orange-500" size={18} />,
    category: 'general',
    questionEn: 'Are there financial incentives or exemptions if multiple siblings enroll?',
    questionHn: 'यदि सगे भाई-बहन एक साथ यहाँ पढ़ते हैं, तो क्या फीस में विशेष छूट का प्रावधान है?',
    answerEn: 'Absolutely. We actively offer a Sibling Discount. Families with multiple biological siblings studying concurrently in ADK School receive a direct 10% monthly tuition waiver on the fees of the younger sibling after simple verification of guardian identities.',
    answerHn: 'बिल्कुल। हम अपने परिवारों का समर्थन करते हैं। यदि एक ही परिवार के दो या दो से अधिक बच्चे (सगे भाई-बहन) विद्यालय में एक साथ अध्ययन कर रहे हैं, तो अभिभावक पहचान पत्र सत्यापन के पश्चात सबसे छोटे बच्चे की मासिक ट्यूशन फीस में सीधे १०% की छूट प्रदान की जाती है।'
  }
];

export default function AdmissionsFAQ({ language }: AdmissionsFAQProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'af-1': true, // Open the first installment by default to make it look active
  });

  const toggleFAQId = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div 
      className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm mt-12"
      id="admissions-faq-component-card"
    >
      <div className="flex flex-col space-y-2 border-b border-slate-100 pb-4" id="admissions-faq-header">
        <div className="flex items-center gap-2">
          <HelpCircle className="text-blue-900 animate-pulse" size={20} />
          <span className="text-orange-500 font-bold uppercase tracking-wider text-xs font-sans">
            {language === 'en' ? 'Admission Helpdesk' : 'प्रवेश शंका समाधान मार्गदर्शिका'}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-blue-900 tracking-tight" id="admissions-faq-title">
          {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रवेश सम्बन्धी प्रश्न'}
        </h3>
        <p className="text-slate-500 text-xs font-medium" id="admissions-faq-desc">
          {language === 'en' 
            ? 'Everything you need to plan your registration: fee structure details, checklist, evaluation metrics and sibling grants.' 
            : 'प्रवेश प्रक्रिया को सरल बनाने के लिए महत्वपूर्ण जानकारी: शिक्षण शुल्क विवरण, आवश्यक दस्तावेज व मासिक नियमों की प्रामाणिक जानकारी।'}
        </p>
      </div>

      <div className="space-y-4" id="admissions-faq-accordion-list">
        {ADMISSIONS_FAQS.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div 
              key={faq.id}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-blue-50/20 border-blue-200/80 shadow-md shadow-blue-50/20' 
                  : 'bg-white border-slate-200/60 hover:border-slate-300'
              }`}
              id={`admissions-faq-item-container-${faq.id}`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleFAQId(faq.id)}
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-2xl"
                id={`admissions-faq-trigger-${faq.id}`}
              >
                <div className="flex gap-3.5 items-center">
                  <div className={`p-2 rounded-xl transition-colors duration-200 ${isOpen ? 'bg-blue-100/60 text-blue-900' : 'bg-slate-50 text-slate-500'}`} id={`faq-icon-holder-${faq.id}`}>
                    {faq.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold text-slate-800 tracking-tight transition-colors duration-200 group-hover:text-blue-900" id={`faq-quest-${faq.id}`}>
                    {language === 'en' ? faq.questionEn : faq.questionHn}
                  </span>
                </div>
                <div className={`shrink-0 transition-all duration-200 ${isOpen ? 'text-blue-900 scale-110' : 'text-slate-400'}`}>
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {/* Dynamic Expandable Answer Box */}
              <div 
                className={`transition-all duration-300 ${
                  isOpen 
                    ? 'max-h-[300px] border-t border-dashed border-blue-100 opacity-100 py-4 px-5' 
                    : 'max-h-0 opacity-0 pointer-events-none'
                }`}
                id={`admissions-faq-answer-${faq.id}`}
              >
                {isOpen && (
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans font-medium animate-fadeIn">
                    {language === 'en' ? faq.answerEn : faq.answerHn}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
