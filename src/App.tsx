/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, Phone, Award, BookOpen, Clock, Calendar, MessageSquare, 
  MapPin, Mail, ChevronRight, ChevronLeft, ArrowRight, Shield, Heart, 
  CheckCircle, Globe, Play, UserCheck, Flame, BookMarked, UserRound, GraduationCap, Map, Users
} from 'lucide-react';

import { AppTab } from './types';
import { 
  TRANSLATIONS, TEACHERS, CLASSES_OFFERED, TESTIMONIALS, FAQS, 
  ACHIEVEMENTS, GALLERY_ITEMS, BLOG_POSTS 
} from './data';

import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import AdmissionsForm from './components/AdmissionsForm';
import ParentPortal from './components/ParentPortal';
import FAQAccordion from './components/FAQAccordion';
import NotificationPopup from './components/NotificationPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SaraswatiLogo from './components/SaraswatiLogo';
import AdmissionsFAQ from './components/AdmissionsFAQ';

export default function App() {
  const [currentTab, setTab] = useState<AppTab>('home');
  const [language, setLanguage] = useState<'en' | 'hn'>('en');

  // Interactive gallery lightbox state
  const [lightboxImage, setLightboxImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  
  // Interactive blog selection state
  const [selectedBlogPost, setSelectedBlogPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  // Core Translation helper
  const t = (key: string) => {
    const dict = TRANSLATIONS[language] as Record<string, any>;
    return dict[key] || key;
  };

  // Switch view helper with auto-scroll to top for seamlessness
  const handleTabChange = (tab: AppTab) => {
    setTab(tab);
    setSelectedBlogPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map route interactive simulator state
  const [simulatedDirections, setSimulatedDirections] = useState(false);
  const [startPoint, setStartPoint] = useState('');
  const [estimatedJourney, setEstimatedJourney] = useState<string | null>(null);

  const simulateJourneyTime = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startPoint.trim()) return;
    setSimulatedDirections(true);
    setTimeout(() => {
      setEstimatedJourney(
        language === 'en'
          ? `🚗 Fast Route Found from ${startPoint}: 12 mins via SSVM Main Bypass Road. Heavy traffic expected near Gandhi Chowk, but parking inside school premises is available.`
          : `🚗 ${startPoint} से तेज मार्ग मिला: १२ मिनट बाईपास मार्ग से। गांधी चौक के पास भीड़ हो सकती है, विद्यालय परिसर में वाहन पार्किंग की उत्तम व्यवस्था है।`
      );
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none pb-20 lg:pb-0" id="adk-school-app">
      
      {/* Dynamic Notification Popup Overlay */}
      <NotificationPopup language={language} setTab={handleTabChange} />

      {/* Responsive Bilingual Header Banner Stack */}
      <Navbar currentTab={currentTab} setTab={handleTabChange} language={language} setLanguage={setLanguage} />

      {/* Main Viewport Container */}
      <main className="flex-grow animate-fadeIn" id="master-viewport-panel">
        
        {/* ==================== 1. HOME VIEW ==================== */}
        {currentTab === 'home' && (
          <div className="space-y-16" id="home-view-tab">
            
            {/* HERO HERO SECTION */}
            <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white overflow-hidden py-16 md:py-24" id="home-hero-showcase">
              {/* Decorative background visual elements */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 h-64 w-64 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Hero left texts */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-500/30">
                    <Flame size={12} className="animate-pulse" />
                    <span>{language === 'en' ? 'BILINGUAL CBSE SCHOOL (NURSERY TO 10TH)' : 'द्विभाषी सीबीएसई विद्यालय (नर्सरी से १०वीं)'}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    {language === 'en' 
                      ? 'Shaping Bright Futures with ' 
                      : 'उज्ज्वल भविष्य का निर्माण '}
                    <span className="text-orange-500 font-extrabold" id="hero-sanskrit-highlight">
                      संस्कार
                    </span>
                    {language === 'en' ? ' & Modern Technology' : ' और आधुनिक शिक्षा से'}
                  </h2>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                    {language === 'en'
                      ? 'Welcome to ADK SCHOOL – Saraswati Shishu Vidya Mandir, where timeless Indian cultural value integration is coupled with advanced robotics, physics labs, and high CBSE board pass results.'
                      : 'एडीके स्कूल – सरस्वती शिशु विद्या मंदिर में आपका स्वागत है, जहां सनातन भारतीय सांस्कृतिक मूल्यों और नैतिक संस्कारों का आधुनिक कंप्यूटर लैब व उत्कृष्ट सीबीएसई बोर्ड परीक्षा परिणामों के साथ संगम है।'}
                  </p>

                  {/* Trust factors short badges */}
                  <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                    {[
                      { textEn: '✓ Experienced Teachers', textHn: '✓ अनुभवी एवं सेवाभावी शिक्षक' },
                      { textEn: '✓ Smart classrooms', textHn: '✓ सुंदर स्मार्ट कक्षाएं' },
                      { textEn: '✓ Sports & Yoga Daily', textHn: '✓ दैनिक खेलकूद व योगासन' },
                      { textEn: '✓ Character Building', textHn: '✓ चरित्र निर्माण व अनुशासन' }
                    ].map((badge) => (
                      <span key={badge.textEn} className="bg-slate-900/80 text-orange-200/90 py-1.5 px-4 rounded-full text-xs font-bold border border-slate-800">
                        {language === 'en' ? badge.textEn : badge.textHn}
                      </span>
                    ))}
                  </div>

                  {/* Call-to-actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button
                      onClick={() => handleTabChange('admissions')}
                      className="bg-orange-500 hover:bg-orange-600 hover:scale-102 text-white font-extrabold uppercase text-xs tracking-wider py-4 px-8 rounded-full transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer border-none"
                    >
                      <Sparkles size={16} />
                      <span>{language === 'en' ? 'Apply for Admission' : 'प्रवेश के लिए आवेदन करें'}</span>
                    </button>
                    <button
                      onClick={() => handleTabChange('contact')}
                      className="bg-transparent hover:bg-white/10 border-2 border-slate-300 text-white font-bold py-4 px-8 rounded-full transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Book School Tour' : 'विद्यालय भ्रमण बुक करें'}</span>
                    </button>
                  </div>
                </div>

                {/* Hero Right Visual Column: Features the brand badge overlaying high-quality visual */}
                <div className="lg:col-span-5 flex justify-center relative">
                  <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-3xl overflow-hidden border-4 border-slate-750/50 shadow-2xl bg-blue-950" id="hero-badge-mock">
                    <img
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600"
                      alt="Student Learning at SSVM School"
                      className="h-full w-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent"></div>
                    
                    {/* Centered Crest */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center">
                      <SaraswatiLogo size="lg" className="mb-2 shrink-0 animate-bounce" />
                      <p className="text-orange-400 font-bold uppercase tracking-widest text-xs font-mono">ADK SCHOOL SSVM</p>
                      <p className="text-[10px] text-slate-200 italic max-w-[220px] mt-0.5">
                        {language === 'en' ? '"Knowledge gives discipline & maturity"' : '"विद्या ददाति विनयम्"'}
                      </p>
                    </div>
                  </div>

                  {/* Floating Notification Indicator */}
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-3xl p-4 shadow-xl border border-orange-400/30 max-w-[170px] hidden md:block animate-pulse">
                    <p className="text-[10px] uppercase font-black tracking-widest text-orange-200">{language === 'en' ? 'Admissions Open' : 'प्रवेश सूचना'}</p>
                    <p className="text-xs font-bold leading-tight mt-1">
                      {language === 'en' ? 'Only 14 seats left in Nursery Prep!' : 'शिशु वाटिका में सिर्फ १४ सीटें शेष!'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK STATS WATERFALL */}
            <section className="bg-white border-y border-slate-200 py-8 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: <Users className="text-blue-900" size={24} />, num: '1200+', labelEn: 'Active Minds Learning', labelHn: 'सक्रिय छात्र-छात्राएं' },
                  { icon: <UserCheck className="text-blue-900" size={24} />, num: '48+', labelEn: 'Expert Teachers', labelHn: 'अनुभवी आचार्य' },
                  { icon: <Award className="text-blue-900" size={24} />, num: '100%', labelEn: 'CBSE Pass Rate', labelHn: 'सीबीएसई बोर्ड परीक्षा परिणाम' },
                  { icon: <BookMarked className="text-blue-900" size={24} />, num: '25+', labelEn: 'Co-curricular Clubs', labelHn: 'सह-शैक्षणिक क्लब' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1.5 flex flex-col items-center">
                    <div className="bg-blue-50 p-2.5 rounded-full mb-1">
                      {stat.icon}
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-blue-900 font-mono tracking-tight block">
                      {stat.num}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-500 block font-sans">
                      {language === 'en' ? stat.labelEn : stat.labelHn}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* THE CORE VIRTUE SYSTEM: WHY ADK SSVM */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-orange-500 font-bold tracking-wider text-xs uppercase block font-sans">
                  {language === 'en' ? 'Panchapranali School System' : 'सरस्वती पंचप्रणाली शिक्षा'}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-blue-900 tracking-tight uppercase">
                  {language === 'en' ? 'Academic foundations meeting moral character' : 'आधुनिक शिक्षा के साथ नैतिक चरित्र का विकास'}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto font-medium">
                  {language === 'en'
                    ? 'Our traditional methodology works balanced to shape cognitive skills, computer science literacy, and physical stamina.'
                    : 'हमारी विशिष्ट पंचप्रणाली शिक्षण पद्धति बच्चों के मानसिक, शारीरिक, बौद्धिक, नैतिक और आध्यात्मिक विकास पर केंद्रित है।'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Flame size={20} />,
                    titleEn: '1. Moral Values (संस्कार - चरित्र)',
                    titleHn: '१. संस्कार (चरित्र निर्माण)',
                    descEn: 'We guide children to cultivate compassion, discipline, patriotism, and respect for elderly parents within their daily activities.',
                    descHn: 'दैनिक दिनचर्या और प्रार्थना सत्रों के माध्यम से बच्चों में दया, अनुशासन, देशभक्ति और बड़ों के प्रति आदर का विकास।'
                  },
                  {
                    icon: <BookOpen size={20} />,
                    titleEn: '2. Intellect & Logic (बौद्धिक)',
                    titleHn: '२. बौद्धिक विकास और गणित',
                    descEn: 'Vedic Math formulas and coding systems build robust cognitive shortcuts, preparing kids for competitive olympiads.',
                    descHn: 'वैदिक गणित के सूत्रों और कंप्यूटर कोडिंग प्रणालियों के माध्यम से तार्किक क्षमता बढ़ाना, जिससे बच्चे प्रतियोगी परीक्षाओं के लिए तैयार हों।'
                  },
                  {
                    icon: <Award size={20} />,
                    titleEn: '3. Physical Rigor (शारीरिक)',
                    titleHn: '३. शारीरिक फिटनेस व खेल',
                    descEn: 'Mandatory daily Yoga sequences, Kabaddi sprints, and athletics clubs ensure high physical stamina and focus cycles.',
                    descHn: 'दैनिक सूर्य नमस्कार, योगासन, कबड्डी स्पर्धा और एथलेटिक्स क्लबों द्वारा बच्चों का शारीरिक स्वास्थ्य और एकाग्रता मजबूत करना।'
                  },
                  {
                    icon: <CheckCircle size={20} />,
                    titleEn: '4. Smart Science (आधुनिक विज्ञान)',
                    titleHn: '४. आधुनिक विज्ञान प्रयोग',
                    descEn: 'Smart digital screens with animations coupled with practical, hands-on physics and cyber laboratories.',
                    descHn: 'स्मार्ट क्लास बोर्ड, एनिमेटेड वीडियो और भौतिकी, रसायन विज्ञान प्रयोगशालाओं में व्यावहारिक प्रयोगों द्वारा शिक्षण।'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 hover:shadow-xl transition-all border-t-4 border-t-blue-900 shadow-sm">
                    <div className="bg-blue-50 text-blue-900 p-3 rounded-2xl inline-block">
                      {item.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-sm md:text-base font-extrabold text-blue-900 leading-snug">
                        {language === 'en' ? item.titleEn : item.titleHn}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium font-sans">
                        {language === 'en' ? item.descEn : item.descHn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ADMISSON OFFER URGENT CTA BANNER */}
            <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white rounded-3xl max-w-7xl mx-auto px-6 py-10 md:py-12 mx-4 relative overflow-hidden shadow-2xl border border-slate-800" id="admissions-urgent-banner">
              <div className="absolute top-0 right-0 h-full w-1/3 bg-[radial-gradient(circle_at_right,_rgba(255,255,255,0.15),_transparent)] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6 max-w-3xl text-center md:text-left md:flex justify-between items-center gap-6">
                <div className="space-y-3">
                  <span className="bg-slate-900 border border-slate-800 text-orange-400 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider inline-block">
                    {language === 'en' ? 'Limited Registration Slots Available' : 'सीमित पंजीकरण स्लॉट उपलब्ध'}
                  </span>
                  <h4 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                    {language === 'en' ? 'Ensure your child gets elite boarding excellence and deep roots' : 'सुनिश्चित करें कि आपके बच्चे को मिले श्रेष्ठ संस्कार व उत्कृष्ट शिक्षा'}
                  </h4>
                  <p className="text-orange-100 text-xs md:text-sm font-medium">
                    {language === 'en'
                      ? 'Apply online today to book an interactive slot with our counselor & get a free Vedic Math prospectus booklet.'
                      : 'आज ही ऑनलाइन आवेदन करें और हमारे काउंसलर के साथ स्लॉट बुक करें और मुफ्त वैदिक गणित विवरणिका प्राप्त करें।'}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5 pt-4 md:pt-0 justify-center">
                  <button
                    onClick={() => handleTabChange('admissions')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold uppercase text-xs tracking-wider py-4 px-6 rounded-full transition-all shadow-lg shadow-orange-500/25 text-nowrap cursor-pointer border-none"
                  >
                    {language === 'en' ? 'Calculate Eligibility Now' : 'पात्रता चेक करें'}
                  </button>
                  <a
                    href="tel:+917379990043"
                    className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold py-3.5 px-6 rounded-full text-xs text-center transition-all cursor-pointer"
                  >
                    {language === 'en' ? 'Call Registrar Office' : 'कार्यालय संपर्क करें'}
                  </a>
                </div>
              </div>
            </section>

            {/* PARENTAL TESTIMONIAL PANEL */}
            <section className="bg-white border-y border-slate-100 py-16" id="home-testimonial-carousel">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                    {language === 'en' ? 'Validated Student Transformations' : 'अभिभावकों के सच्चे अनुभव'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    {language === 'en' ? 'Why local Indian communities trust Saraswati SSVM' : 'हमारा स्थानीय समुदाय एडीके स्कूल पर क्यों भरोसा करता है'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((test) => (
                    <div key={test.id} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col justify-between hover:scale-101 transition-all">
                      <div className="space-y-4">
                        {/* Rating stars */}
                        <div className="flex text-amber-500 gap-0.5" id="rating-stars">
                          {[...Array(test.rating)].map((_, i) => (
                            <span key={i} className="text-lg">★</span>
                          ))}
                        </div>
                        <p className="text-slate-700 text-xs md:text-sm font-medium leading-relaxed italic">
                          "{language === 'en' ? test.textEn : test.textHn}"
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-200/50 flex gap-3 items-center mt-6">
                        <img
                          src={test.avatar}
                          alt={test.parentName}
                          className="h-10 w-10 rounded-full object-cover shrink-0 "
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-xs">
                          <p className="font-extrabold text-slate-950 leading-none">{test.parentName}</p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-none">{test.occupation} • {test.childClass}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* QUICK CONTACT ACCORDIONS FOOTPRINT */}
            <section className="max-w-4xl mx-auto px-4 pb-12 space-y-8" id="home-faqs-panel">
              <div className="text-center space-y-2">
                <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">{language === 'en' ? 'Parents Questionnaires' : 'अक्सर पूछे जाने वाले प्रश्न'}</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{language === 'en' ? 'Cleared Queries' : 'अभिभावकों की मुख्य शंकाएं दूर करें'}</h3>
              </div>
              <FAQAccordion language={language} />
            </section>
          </div>
        )}


        {/* ==================== 2. ABOUT VIEW ==================== */}
        {currentTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fadeIn" id="about-tab-view">
            
            {/* Mission Vision statement grid */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block font-mono">{language === 'en' ? 'Core Ideology & Evolution' : 'मूल उद्देश्य व इतिहास'}</span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none mt-1">
                    {language === 'en' ? 'Visioning the whole development of children' : 'बच्चों के सर्वांगीण विकास का संकल्प'}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {language === 'en'
                    ? 'ADK School – Saraswati Shishu Vidya Mandir, founded in India, operates with the conviction that education must foster complete physical, mental, intellectual, and spiritual growth. Affiliated with Vidya Bharati and aligning with modern CBSE parameters, we keep students firmly anchored in spiritual strength, character building, self-discipline, and deep patriotism (राष्ट्रभक्ति).'
                    : 'एडीके स्कूल – सरस्वती शिशु विद्या मंदिर की स्थापना इस विचार के साथ की गई थी कि सच्ची शिक्षा वही है जो बच्चों के शारीरिक, मानसिक, बौद्धिक, नैतिक और आध्यात्मिक विकास को बल दे। विद्या भारती प्रणाली और आधुनिक सीबीएसई मानकों से संरेखित, हमारा उद्देश्य छात्रों को ज्ञानवान, परिश्रमी, चरित्रवान और देशभक्त नागरिक बनाना है।'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-2xl p-4 space-y-1">
                    <p className="font-extrabold text-orange-600 text-sm">🎯 {language === 'en' ? 'Our Holy Mission' : 'हमारा पवित्र लक्ष्य'}</p>
                    <p className="text-xs text-slate-500 leading-normal">
                      {language === 'en' ? 'To trigger natural scientific temperament, computing skills, and logical analytics while nurturing respectful character.' : 'तार्किक व वैज्ञानिक सोच के साथ-साथ बड़ों का आदर करने वाले नैतिक चरित्र का निर्माण करना।'}
                    </p>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 space-y-1">
                    <p className="font-extrabold text-orange-600 text-sm">👁️ {language === 'en' ? 'Our Grand Vision' : 'हमारा महान विचार'}</p>
                    <p className="text-xs text-slate-500 leading-normal">
                      {language === 'en' ? 'To develop young national leaders grounded securely in Sanatani values, and fully capable of globally leading technology sectors.' : 'राष्ट्रवादी मूल्यों से सुरक्षित ऐसे युवा नेताओं को तैयार करना जो विश्व पटल पर सूचना तकनीक का नेतृत्व करने में सक्षम हों।'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar badge with image */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 max-h-[350px]">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=500"
                    alt="Students in smart visual classes"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </section>

            {/* FOUNDER & PRINCIPAL MESSAGE COMPONENT */}
            <section className="bg-slate-900 rounded-3xl text-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8" id="principals-messages">
              {/* Box 1: Founder */}
              <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
                <div className="flex gap-4 items-center">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-500 shrink-0 bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=150"
                      alt="Founder Portrait Shri M.P. Dwivedi"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">Shri Mahesh Prasad Dwivedi</h4>
                    <p className="text-[10px] text-orange-400 font-bold uppercase">{language === 'en' ? 'Founder & Patron' : 'संस्थापक और संरक्षक'}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{language === 'en' 
                    ? 'My life work was to construct an institution where middle-class parents can feel secure of their children values. In a modern fast world of screens, our kids must respect grandparents, sing patriotic values, and calculate Vedic Math with confidence.' 
                    : 'मेरा जीवन संकल्प एक ऐसे मंदिर का निर्माण करना था जहां मध्यमवर्गीय माता-पिता अपने बच्चों के संस्कारों के प्रति आश्वस्त रह सकें। बदलते परिवेश में तकनीक आवश्यक है, लेकिन राष्ट्रभक्ति और बड़ों का आदर ही सच्चा आभूषण है।'}"
                </p>
              </div>

              {/* Box 2: Principal */}
              <div className="space-y-4 md:pl-2">
                <div className="flex gap-4 items-center">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-500 shrink-0 bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=150"
                      alt="Principal Shri R.D. Dwivedi"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">Shri Ramakant Dwivedi</h4>
                    <p className="text-[10px] text-orange-400 font-bold uppercase">{language === 'en' ? 'Principal SSVM Coordinator' : 'प्रधानाचार्य एसएसवीएम'}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{language === 'en' 
                    ? 'Welcome back to the registration session. I assure individual student focus, daily computer code labs training, secure bus transport tracking for mothers, and premium CBSE syllabus integration.' 
                    : 'पंजीकरण सत्र में सबका हार्दिक अभिनंदन। मैं प्रत्येक विद्यार्थी पर व्यक्तिगत ध्यान, दैनिक कंप्यूटर प्रोग्रामिंग लैब, माता-पिता के लिए वैन जीपीएस ट्रैकिंग और बोर्ड परीक्षाओं में उत्कृष्ट प्रदर्शन का भरोसा देता हूँ।'}"
                </p>
              </div>
            </section>

            {/* FACULTY PORTRAITS DIRECTORY */}
            <section className="space-y-8" id="faculty-directory">
              <div className="text-center space-y-2">
                <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                  {language === 'en' ? 'Venerated Acharyas & Faculty' : 'अनुभवी आचार्य व शिक्षक श्रेणी'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {language === 'en' ? 'Educators qualified to teach both values & science' : 'चरित्र और आधुनिक विज्ञान सिखाने में सक्षम अध्यापक'}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {TEACHERS.map((teacher) => (
                  <div key={teacher.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:scale-101 transition-all flex flex-col justify-between">
                    <div className="h-44 w-full bg-slate-100 relative">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="h-full w-full object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 space-y-1.5 flex-grow">
                      <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wide leading-none">{teacher.designation}</p>
                      <h4 className="text-xs md:text-sm font-extrabold text-slate-950 leading-tight">{teacher.name}</h4>
                      <p className="text-[10px] text-slate-600 leading-none mt-1">🎓 {teacher.qualification}</p>
                      <p className="text-[10px] text-slate-400 leading-none">{teacher.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}


        {/* ==================== 3. ADMISSIONS VIEW ==================== */}
        {currentTab === 'admissions' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn" id="admissions-tab-view">
            
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column admissions text blocks */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block font-mono">{language === 'en' ? 'Admission Process Session 2026-27' : 'प्रवेश नीति विवरण'}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    {language === 'en' ? 'Holistic, stress-free admissions guide for parents' : 'अभिभावकों के लिए तनाव-मुक्त प्रवेश प्रक्रिया'}
                  </h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-slate-600">
                  <div className="flex gap-3">
                    <span className="bg-orange-100 text-orange-700 h-6 w-6 font-bold flex items-center justify-center rounded-full shrink-0">1</span>
                    <div>
                      <p className="font-bold text-slate-900">{language === 'en' ? 'Step 1: Check age limits & fee' : 'चरण १: योग्यता व फीस जांच'}</p>
                      <p className="mt-0.5">{language === 'en' ? 'Use our smart pre-screening tool to calculate admission eligibility based on year of birth.' : 'हमारे सॉफ्टवेयर टूल से बच्चे की जन्मतिथि अनुसार पात्रता और मासिक फीस ज्ञात करें।'}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="bg-orange-100 text-orange-700 h-6 w-6 font-bold flex items-center justify-center rounded-full shrink-0">2</span>
                    <div>
                      <p className="font-bold text-slate-900">{language === 'en' ? 'Step 2: Reserve seat slot online' : 'चरण २: ऑनलाइन पंजीकरण'}</p>
                      <p className="mt-0.5">{language === 'en' ? 'Fill parent mobile, child name, and lock the slot receipt.' : 'दिए गए फॉर्म को पूरा भरकर सबमिट करें और पंजीकरण रसीद प्राप्त करें।'}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="bg-orange-100 text-orange-700 h-6 w-6 font-bold flex items-center justify-center rounded-full shrink-0">3</span>
                    <div>
                      <p className="font-bold text-slate-900">{language === 'en' ? 'Step 3: Documents call over WhatsApp' : 'चरण ३: व्हाट्सएप मार्गदर्शन'}</p>
                      <p className="mt-0.5">{language === 'en' ? 'Click direct forward whatsapp link to register details in local principal logs.' : 'एक क्लिक द्वारा कार्यालय को व्हाट्सएप पर दस्तावेज सत्यापन के लिए सूचित करें।'}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="bg-orange-100 text-orange-700 h-6 w-6 font-bold flex items-center justify-center rounded-full shrink-0">4</span>
                    <div>
                      <p className="font-bold text-slate-900">{language === 'en' ? 'Step 4: School Premise visit' : 'चरण ४: कागजात सत्यापन व साक्षात्कार'}</p>
                      <p className="mt-0.5">{language === 'en' ? 'Visit Gandhi Chowk school building with previous class marksheets to confirm admission.' : 'निर्धारित तिथि को विद्यालय परिसर आकर पूर्व कक्षा की मार्कशीट सचाई जांचें।'}</p>
                    </div>
                  </div>
                </div>

                {/* Sharda Scholarship detail box */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white rounded-2xl p-6 space-y-3 shadow-md border border-orange-500/10">
                  <div className="flex items-center gap-2 text-orange-400">
                    <Award size={18} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{language === 'en' ? 'Sharda Puraskar Initiative' : 'शारदा कन्या सशक्तिकरण स्कॉलरशिप'}</span>
                  </div>
                  <h4 className="text-base font-black">
                    {language === 'en' ? 'Up to 50% Tuition Waiver for Girl Candidates' : 'छात्राओं हेतु ट्यूशन फीस में ५०% तक की भारी छूट'}
                  </h4>
                  <p className="text-slate-300 text-xs">
                    {language === 'en'
                      ? 'Single girl child applicants, daughters of state police defense warriors, and brilliant merit holders (scoring 92% above) qualify for direct fee waiver scholarship credits.'
                      : 'मेधावी छात्राओं, रक्षा क्षेत्र में कार्यरत जवानों की बेटियों तथा एकल माताओं की संतानों को ५०% तक मासिक शिक्षण शुल्क में सीधे छूट प्रदान की जाएगी।'}
                  </p>
                </div>
              </div>

              {/* Central admissions dynamic calculator app */}
              <div className="lg:col-span-7">
                <AdmissionsForm language={language} />
              </div>
            </section>

            {/* Dedicated Admissions FAQ Section */}
            <AdmissionsFAQ language={language} />
          </div>
        )}


        {/* ==================== 4. ACADEMICS VIEW ==================== */}
        {currentTab === 'academics' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn" id="academics-tab-view">
            
            <section className="text-center space-y-3">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                {language === 'en' ? 'Academics division classes' : 'कक्षाएं एवं उपलब्ध अनुभाग'}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {language === 'en' ? 'Classes Offered & Target Learning Outcomes' : 'अध्ययन श्रेणियां और विषय-सूची'}
              </h3>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {CLASSES_OFFERED.map((course) => (
                <div key={course.id} className="bg-white border hover:shadow-lg transition-all border-slate-100 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center border-b pb-3 border-slate-100">
                    <h4 className="text-base md:text-lg font-black text-slate-900">{course.className}</h4>
                    <span className="bg-orange-50 text-orange-700 font-mono text-xs font-bold px-2 py-1 rounded">
                      {course.ageGroup}
                    </span>
                  </div>
                  
                  <div className="space-y-3 text-xs md:text-sm">
                    <p className="text-slate-500 font-semibold mb-1">💡 Medium of Study: <span className="text-slate-800">{course.medium}</span></p>
                    
                    <div className="space-y-1">
                      <p className="font-bold text-slate-800">{language === 'en' ? 'Core Course Subjects:' : 'अध्ययन मुख्य विषय:'}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {course.subjects.map((sub, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-medium">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <p className="font-bold text-slate-800">{language === 'en' ? 'Learning Outcomes:' : 'विषय दक्षता प्राप्त उद्देश्य:'}</p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {course.outcomes.map((out, i) => (
                          <li key={i} className="flex gap-1.5 items-start">
                            <span className="text-orange-600 font-black shrink-0">•</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* ==================== 5. ACTIVITIES VIEW ==================== */}
        {currentTab === 'activities' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn" id="activities-tab-view">
            
            <section className="text-center space-y-3">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                {language === 'en' ? 'Co-curricular activities list' : 'सह-शैक्षणिक विधाएं'}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {language === 'en' ? 'Explore how children grow physically and culturally' : 'शारीरिक, मानसिक व कलात्मक संवर्धन'}
              </h3>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
                  titleEn: 'Yoga & Pranayama Morning',
                  titleHn: 'प्रातः योगासन व प्राण साधना',
                  descEn: 'Every morning starts with meditation and physical body alignment sequences ensuring kids learn stillness of brain.',
                  descHn: 'दैनिक दिनचर्या की शुरुआत जिसमें बच्चे सूर्य नमस्कार और प्राणायाम द्वारा मानसिक एकाग्रता अर्जित करते हैं।'
                },
                {
                  img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=400',
                  titleEn: 'Traditional sports & kabaddi sprints',
                  titleHn: 'देशी खेलकूद व कबड्डी मुकाबला',
                  descEn: 'We support local Indian field games including kabaddi, kho-kho alongside basic football, cricket matches to strengthen stamina.',
                  descHn: 'कबड्डी, खो-खो की खेल तकनीकों से लैस प्रशिक्षक बच्चों के शारीरिक साहस और टीम-भावना का विकास करते हैं।'
                },
                {
                  img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
                  titleEn: 'Patriotic drama & sanskrit shloka chantings',
                  titleHn: 'देशभक्ति नाटक व संस्कृत श्लोक',
                  descEn: 'Independence and Subhas Chandra Jayanti celebrations feature rich dramas, and traditional poem recitation.',
                  descHn: 'स्वतंत्रता दिवस व सुभाष जयंती पर नाटक मंचन और संस्कृत वंदना द्वारा बच्चों का मंच भय दूर करना।'
                }
              ].map((activity, idx) => (
                <div key={idx} className="bg-white border rounded-2xl overflow-hidden hover:scale-101 transition-all shadow-sm">
                  <div className="h-48 bg-slate-100">
                    <img
                      src={activity.img}
                      alt={activity.titleEn}
                      className="w-full h-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-sm md:text-base font-black text-slate-950 leading-tight">
                      {language === 'en' ? activity.titleEn : activity.titleHn}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {language === 'en' ? activity.descEn : activity.descHn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* ==================== 6. ACHIEVEMENTS VIEW ==================== */}
        {currentTab === 'results' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn" id="results-tab-view">
            
            <section className="text-center space-y-3">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                {language === 'en' ? 'School Champions Board' : 'अव्वल परीक्षा परिणाम और विद्यार्थी उत्कृष्ट'}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {language === 'en' ? 'Board Toppers and Olympiad Success Stories' : 'सीबीएसई टॉपर एवं ओलंपियाड विजेता'}
              </h3>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((winner) => (
                <div key={winner.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:scale-101 transition-all flex flex-col justify-between">
                  <div className="h-56 bg-slate-100 relative">
                    <img
                      src={winner.image}
                      alt={winner.studentName}
                      className="h-full w-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900 border border-slate-800 text-yellow-500 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase shadow">
                      {winner.badge}
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-grow">
                    <div>
                      <span className="text-[10px] font-black uppercase text-orange-600">{winner.class} • Year {winner.year}</span>
                      <h4 className="text-sm md:text-base font-black text-slate-950 leading-snug mt-0.5">{winner.studentName}</h4>
                      <p className="text-xs font-semibold text-slate-800 italic mt-0.5">
                        {language === 'en' ? winner.achievementTitle : winner.achievementHn}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed border-t pt-2.5">
                      {language === 'en' ? winner.descriptionEn : winner.descriptionHn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* ==================== 7. GALLERY VIEW ==================== */}
        {currentTab === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-fadeIn" id="gallery-tab-view">
            
            <section className="text-center space-y-2">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                {language === 'en' ? 'Bilingual school memory bank' : 'विद्यालय गतिविधि गैलरी'}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {language === 'en' ? 'Prism of Campus Life & Annual Functions' : 'विद्यलाय उत्सव, खेलकूद व प्रयोगशाला'}
              </h3>
            </section>

            {/* Gallery responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="gallery-masonry-grid">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="bg-white border hover:scale-101 border-slate-200/60 p-2.5 rounded-2xl shadow-sm cursor-pointer group hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="h-44 md:h-52 w-full bg-slate-100 rounded-xl overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.titleEn}
                      className="h-full w-full object-cover shrink-0 scale-100 group-hover:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-slate-950/70 backdrop-blur-sm text-white font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase">
                      {item.category}
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-800 mt-2.5 pr-1 line-clamp-1">
                    {language === 'en' ? item.titleEn : item.titleHn}
                  </p>
                </div>
              ))}
            </div>

            {/* LIGHTBOX MODAL OVERLAY PORTAL */}
            {lightboxImage && (
              <div 
                className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-center items-center p-4 animate-fadeIn"
                id="lightbox-backdrop"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors text-2xl font-black cursor-pointer bg-white/15 h-10 w-10 mt-10 rounded-full flex items-center justify-center p-1 border border-white/10"
                >
                  ✕
                </button>

                <div className="max-w-4xl w-full p-2" id="lightbox-image-box">
                  <img
                    src={lightboxImage.imageUrl}
                    alt={lightboxImage.titleEn}
                    className="max-h-[70vh] w-auto mx-auto object-contain rounded-xl border border-white/10 drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center text-white mt-4 space-y-1">
                    <p className="bg-orange-600 text-white font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded inline-block">
                      {lightboxImage.category}
                    </p>
                    <p className="text-sm md:text-base font-black">
                      {language === 'en' ? lightboxImage.titleEn : lightboxImage.titleHn}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}


        {/* ==================== 8. CONTACT VIEW ==================== */}
        {currentTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn" id="contact-tab-view">
            
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Address Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs block font-mono">{language === 'en' ? 'Get in Touch with Admin Office' : 'कार्यालय सम्पर्क सूत्र'}</span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-none mt-1">
                    {language === 'en' ? 'Reach the premises counseling desk' : 'विद्यालय परिसर आगमन मार्ग'}
                  </h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-slate-800">
                  <div className="flex gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <MapPin className="text-orange-600 shrink-0" size={18} />
                    <div>
                      <p className="font-extrabold">{language === 'en' ? 'School Physical Address' : 'विद्यालय का मुख्य पता'}</p>
                      <p className="text-slate-500 mt-1">
                        {language === 'en' 
                          ? 'ADK School – Saraswati Shishu Vidya Mandir, Near Gandhi Chowk, Sadar Bypass, Pin 800001, India.'
                          : 'एडीके स्कूल – सरस्वती शिशु विद्या मंदिर, गांधी चौक के पास, सदर बाईपास रोड, पिन-८००००१, भारत।'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <Phone className="text-orange-600 shrink-0" size={18} />
                    <div>
                      <p className="font-extrabold">{language === 'en' ? 'Telephone Hotlines' : 'कार्यालय समय व फोन नम्बर'}</p>
                      <p className="text-slate-500 mt-1">+91 94311 00000 | +91 94311 11111</p>
                      <p className="text-[10px] text-slate-400 italic mt-0.5">{language === 'en' ? 'Lines call timing: 08:30 AM to 02:30 PM' : 'कॉल करने का समय: सुबह ८:३० से दोपहर २:३० बजे तक'}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <Mail className="text-orange-600 shrink-0" size={18} />
                    <div>
                      <p className="font-extrabold">{language === 'en' ? 'Email Support Index' : 'ईमेल सहायता डेस्क'}</p>
                      <p className="text-slate-500 mt-1">queries@adkssvmschool.edu.in</p>
                    </div>
                  </div>
                </div>

                {/* VISITING HOURS INFO SLIP */}
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-5 rounded-2xl space-y-1">
                  <p className="font-extrabold text-xs uppercase text-orange-700 tracking-wider">🕦 {language === 'en' ? 'Principal Visiting Hours' : 'प्रधानाचार्य भेंट का समय'}</p>
                  <p className="text-xs">
                    {language === 'en'
                      ? 'Every working Wednesday & Saturday from 11:30 AM to 01:30 PM (Prior register appointment on WhatsApp recommended).'
                      : 'प्रत्येक बुधवार और शनिवार, सुबह ११:३० से दोपहर १:३० बजे तक (व्हाट्सएप द्वारा पूर्व अपॉइंटमेंट लेना उत्तम होगा)।'}
                  </p>
                </div>
              </div>

              {/* Right Column: Direction simulator & contact form */}
              <div className="lg:col-span-7 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-6">
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900 leading-snug">{language === 'en' ? 'Simulate Interactive Route to Campus' : 'सदर गांधी चौक विद्यालय परिसर मार्ग'}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {language === 'en' 
                      ? 'Find approximate journey distance from your home to ADK School premises.'
                      : 'अपने घर से स्कूल परिसर तक की सड़क दूरी और मार्ग समय की जांच करें।'}
                  </p>
                </div>

                <form onSubmit={simulateJourneyTime} className="flex gap-2" id="directions-simulator">
                  <input
                    type="text"
                    placeholder={language === 'en' ? "Type your locality (e.g. Chowk Bazar, Station Road)" : "अपनी मुख्य लोकेशन लिखें (जैसे: चौक बाजार, मुख्य रेलवे स्टेशन)"}
                    className="flex-grow border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-500 outline-none"
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs uppercase px-4 py-3 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Map size={14} />
                    <span>{language === 'en' ? 'Find Route' : 'मार्ग खोजें'}</span>
                  </button>
                </form>

                {/* Estimated Journey alert */}
                {estimatedJourney && (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-800 text-xs leading-normal animate-fadeIn">
                    <span>{estimatedJourney}</span>
                  </div>
                )}

                {/* Virtual Embedded Google Map Mockup */}
                <div className="bg-slate-100 border border-slate-200 h-64 rounded-2xl relative overflow-hidden flex items-center justify-center text-center" id="dummy-google-map-embed">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                    alt="Map Grid Graphic representation of India location routing"
                    className="h-full w-full object-cover opacity-60 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-4 bg-slate-950/85 backdrop-blur-sm p-4 rounded-2xl border border-white/10 max-w-sm mx-auto shadow-xl text-white space-y-2">
                    <p className="text-xs uppercase font-bold text-orange-400 font-mono tracking-widest">MAP PINNED LOCATION</p>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      <strong>Saraswati Shishu Vidya Mandir</strong><br />
                      Sadar Bypass Intersection (200m East of Gandhi Statue Chowk Bazar). Parking space inside complex.
                    </p>
                    <button
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                      className="bg-orange-600 font-bold px-3 py-1.5 text-[10px] rounded hover:bg-orange-700 transition-colors uppercase cursor-pointer"
                    >
                      {language === 'en' ? 'Open Actual GPS Maps' : 'वास्तविक जीपीएस मैप खोलें'}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* ==================== 9. PORTAL DASHBOARD VIEW ==================== */}
        {currentTab === 'portal' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn" id="portal-tab-view">
            <ParentPortal language={language} />
          </div>
        )}


        {/* ==================== 10. NEWS & BLOG VIEW ==================== */}
        {currentTab === 'blog' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn" id="news-tab-view">
            
            {/* ARTICLE EXPANDED DETAILED STATE VIEW */}
            {selectedBlogPost ? (
              <div className="space-y-6 max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm animate-fadeIn" id="expanded-article-body">
                <button
                  onClick={() => setSelectedBlogPost(null)}
                  className="bg-slate-100 hover:bg-slate-200 hover:text-black text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl border flex items-center gap-1 cursor-pointer transition-colors"
                  id="expanded-back-blog"
                >
                  <ChevronLeft size={16} />
                  <span>{language === 'en' ? 'Back to News Board' : 'समाचार सूची में वापस'}</span>
                </button>

                <div className="h-64 md:h-80 bg-slate-100 rounded-2xl overflow-hidden relative">
                  <img
                    src={selectedBlogPost.image}
                    alt={selectedBlogPost.titleEn}
                    className="h-full w-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white font-mono text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide">
                    {language === 'en' ? selectedBlogPost.category : selectedBlogPost.categoryHn}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 text-xs font-mono text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {selectedBlogPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {selectedBlogPost.readTime}</span>
                  </div>

                  <h3 className="text-xl md:text-3xl font-black text-slate-950 leading-tight">
                    {language === 'en' ? selectedBlogPost.titleEn : selectedBlogPost.titleHn}
                  </h3>

                  <div className="text-slate-700 text-xs md:text-base leading-relaxed space-y-4 border-t pt-5 font-medium">
                    <p className="font-extrabold text-slate-950 text-sm md:text-lg italic bg-slate-50 p-4 border-l-4 border-orange-500 rounded-r-xl">
                      "{language === 'en' ? selectedBlogPost.summaryEn : selectedBlogPost.summaryHn}"
                    </p>
                    <p>
                      {language === 'en' ? selectedBlogPost.contentEn : selectedBlogPost.contentHn}
                    </p>
                    <p>
                      {language === 'en'
                        ? 'For any clarifications regarding this administrative update, parents can directly dial the registry desk at +91 94311 00000 or inquire on WhatsApp.'
                        : 'इस प्रशासनिक अपडेट के बारे में किसी भी स्पष्टीकरण के लिए, अभिभावक सीधे हमारी हेल्पलाइन +91 94311 00000 डायल कर सकते हैं या व्हाट्सएप पर पूछताछ कर सकते हैं।'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* STANDARD NEWS GRID BOARDS */
              <div className="space-y-12">
                <section className="text-center space-y-3">
                  <span className="text-orange-600 font-bold tracking-widest text-xs uppercase block font-mono">
                    {language === 'en' ? 'Official administrative notices' : 'कार्यालय सूचना व ब्लॉग पत्रक'}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {language === 'en' ? 'ADK School Admissions Announcements' : 'कार्यालय विज्ञप्ति व समाचार'}
                  </h3>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-posts-grid">
                  {BLOG_POSTS.map((post) => (
                    <div key={post.id} className="bg-white border hover:scale-101 border-slate-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
                      <div className="h-44 bg-slate-100 relative">
                        <img
                          src={post.image}
                          alt={post.titleEn}
                          className="h-full w-full object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 bg-slate-900 border border-slate-800 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {language === 'en' ? post.category : post.categoryHn}
                        </span>
                      </div>

                      <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-400 font-mono block mb-1">{post.date}</span>
                          <h4 className="text-xs md:text-sm font-black text-slate-950 leading-snug line-clamp-2">
                            {language === 'en' ? post.titleEn : post.titleHn}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mt-1">
                            {language === 'en' ? post.summaryEn : post.summaryHn}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedBlogPost(post);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-orange-600 hover:text-orange-700/90 font-bold tracking-wide text-xs flex items-center gap-1 pt-3 border-t cursor-pointer"
                        >
                          <span>{language === 'en' ? 'Read full article' : 'पूरा समाचार पढ़ें'}</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating direct help widgets (Visible on all screens) */}
      <FloatingWhatsApp language={language} />

      {/* FOOTER BLOCK STACK */}
      <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-20" id="application-authoritative-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8" id="footer-blocks-grid">
          
          {/* Box 1: Brand details */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SaraswatiLogo size="sm" className="bg-white/5 p-0.5 rounded-full" />
              <div className="text-left">
                <p className="text-[11px] font-mono font-bold tracking-wide text-orange-400 uppercase leading-none">
                  {language === 'en' ? 'Saraswati Shishu Vidya Mandir' : 'सरस्वती शिशु विद्या मंदिर'}
                </p>
                <p className="text-base font-black text-white leading-tight mt-1">ADK SCHOOL</p>
                <p className="text-[9px] text-slate-400 italic">Established 1998 in India</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-normal font-medium pr-2">
              {language === 'en'
                ? 'Providing high value Indian education (संस्कार) centered on physical science, and patriotic morals under CBSE guidelines.'
                : 'सीबीएसई दिशा-निर्देशों के तहत विज्ञान, आधुनिक कोडिंग और प्राच्य संस्कारों के समन्वय के साथ बच्चों का चरित्र निर्माण।'}
            </p>

            <p className="text-[10px] text-slate-500 font-bold uppercase leading-none">
              Affiliated Code: BOARD-SSVM-ADK-8000
            </p>
          </div>

          {/* Box 2: Quick Links */}
          <div className="md:col-span-4 space-y-3 md:pl-8">
            <p className="font-extrabold text-xs tracking-wider uppercase text-orange-400">{language === 'en' ? 'Sitemap Navigation' : 'त्वरित नेविगेशन लिंक'}</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <button onClick={() => handleTabChange('home')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">गृह (Home)</button>
              <button onClick={() => handleTabChange('about')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">परिचय (About)</button>
              <button onClick={() => handleTabChange('admissions')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">प्रवेश (Admission)</button>
              <button onClick={() => handleTabChange('academics')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">शिक्षा (Academics)</button>
              <button onClick={() => handleTabChange('activities')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">विधि (Activities)</button>
              <button onClick={() => handleTabChange('results')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">टॉपर (Toppers)</button>
              <button onClick={() => handleTabChange('gallery')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">गैलरी (Gallery)</button>
              <button onClick={() => handleTabChange('portal')} className="hover:text-white transition-colors text-blue-400 hover:text-blue-300 transition-colors cursor-pointer text-left font-bold">पेरेंट ऐप (Portal)</button>
            </div>
          </div>

          {/* Box 3: Trust & Affiliations */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-extrabold text-xs tracking-wider uppercase text-orange-400">{language === 'en' ? 'Holistic Trust Indicators' : 'सीबीएसई मान्यता व संपर्क कार्यालय'}</p>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <p className="font-bold flex gap-1.5 items-center">
                <Shield size={14} className="text-orange-500 shrink-0" />
                <span>{language === 'en' ? 'CBSE board aligned syllabus' : 'सीबीएसई पाठ्यक्रम संरेखित शिक्षा'}</span>
              </p>
              <p className="text-slate-400 text-[11px] leading-normal font-medium">
                {language === 'en'
                  ? 'Officially aligned with CBSE guidelines, with daily Vedic Mathematics and computer science curriculum.'
                  : 'वैदिक गणित और कोडिंग लैब के विशेष अध्यापन के साथ, राष्ट्रहित दृष्टिकोण के तहत राष्ट्रीय शिशु मंदिर मानकों पर आधारित।'}
              </p>
            </div>
          </div>
        </div>

        {/* Copywrite under bar */}
        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-10 pt-6 text-center text-[10px] md:text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 ADK SCHOOL – Saraswati Shishu Vidya Mandir, India. All Rights Reserved.</p>
          <div className="flex gap-4 font-mono font-medium">
            <a href="tel:+917379990043" className="hover:text-white">Helpdesk: +91 73799 90043</a>
            <span>•</span>
            <span className="text-xs uppercase bg-slate-900 py-1 px-2.5 rounded border border-slate-800 text-slate-400 font-bold">संस्कार ही सर्वोत्तम आभूषण है</span>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile bottom navigation bars (visible only on smart phones < lg screen limits) */}
      <MobileBottomNav currentTab={currentTab} setTab={handleTabChange} language={language} />

    </div>
  );
}
