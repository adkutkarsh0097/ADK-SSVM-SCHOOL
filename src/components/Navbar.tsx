/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Award, Sparkles, BookOpen, Clock, Calendar, MessageSquare } from 'lucide-react';
import { AppTab } from '../types';
import SaraswatiLogo from './SaraswatiLogo';

interface NavbarProps {
  currentTab: AppTab;
  setTab: (tab: AppTab) => void;
  language: 'en' | 'hn';
  setLanguage: (lang: 'en' | 'hn') => void;
}

export default function Navbar({ currentTab, setTab, language, setLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);

  const navigationItems: { labelEn: string; labelHn: string; tab: AppTab }[] = [
    { labelEn: 'Home', labelHn: 'गृह', tab: 'home' },
    { labelEn: 'About Us', labelHn: 'हमारे बारे में', tab: 'about' },
    { labelEn: 'Admissions', labelHn: 'प्रवेश', tab: 'admissions' },
    { labelEn: 'Academics', labelHn: 'शिक्षा', tab: 'academics' },
    { labelEn: 'Activities', labelHn: 'गतिविधियां', tab: 'activities' },
    { labelEn: 'Toppers', labelHn: 'उपलब्धियां', tab: 'results' },
    { labelEn: 'Gallery', labelHn: 'गैलरी', tab: 'gallery' },
    { labelEn: 'Blog & News', labelHn: 'समाचार', tab: 'blog' },
    { labelEn: 'Parent Portal', labelHn: 'पेरेंट पोर्टल', tab: 'portal' },
    { labelEn: 'Contact', labelHn: 'संपर्क करें', tab: 'contact' },
  ];

  const handleTabChange = (tab: AppTab) => {
    setTab(tab);
    setMobileMenuOpen(false);
    setAcademicsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 flex flex-col" id="app-header">
      {/* Top Ticker and Hotlinks Bar */}
      <div className="bg-slate-950 text-white text-xs md:text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-orange-500/20" id="top-notification-ticker">
        <div className="flex items-center gap-2 overflow-hidden w-full md:w-3/4">
          <span className="bg-orange-600 text-white font-bold px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wide shrink-0 animate-pulse">
            {language === 'en' ? 'Admission 2026' : 'प्रवेश सत्र २०२६'}
          </span>
          {/* Marquee effect wrapper */}
          <div className="relative overflow-hidden w-full h-5 flex items-center">
            <p className="whitespace-nowrap absolute animate-marquee inline-block text-orange-200/90 font-medium">
              {language === 'en' 
                ? '⭐ Registrations open for Nursery to Class 10th! • 50% Sharda Scholarships available for brilliant girls • CBSE aligned values' 
                : '⭐ नर्सरी से कक्षा १०वीं तक पंजीकरण प्रारंभ! • उत्कृष्ट छात्राओं के लिए ५०% शारदा स्कॉलरशिप • संस्कार युक्त शिक्षा'}
            </p>
          </div>
        </div>

        {/* Language option and Hotline phone helper */}
        <div className="flex items-center gap-4 shrink-0 font-medium border-t border-slate-800 md:border-t-0 pt-2 md:pt-0 w-full md:w-auto justify-end">
          <a href="tel:+917379990043" className="flex items-center gap-1.5 text-gray-300 hover:text-orange-400 transition-colors">
            <Phone size={13} className="text-orange-500" />
            <span>+91 73799 90043</span>
          </a>
          <div className="h-3 w-[1px] bg-slate-800"></div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'hn' : 'en')}
            className="flex items-center gap-1 bg-slate-900 border border-orange-500/30 text-[11px] md:text-xs text-orange-400 px-2 py-1 rounded hover:bg-orange-950/40 transition-all cursor-pointer font-bold"
            id="lang-toggle-button"
          >
            <Globe size={12} />
            <span>{language === 'en' ? 'हिन्दी (HN)' : 'English (EN)'}</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Brand Navbar */}
      <nav className="bg-white sticky top-0 left-0 w-full border-b border-slate-200 shadow-sm z-40 transition-all" id="main-brand-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Logo Brand Crest Container */}
          <div 
            onClick={() => handleTabChange('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="navbar-brand-badge"
          >
            <SaraswatiLogo size="md" className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-orange-500 block uppercase">
                {language === 'en' ? 'Saraswati Shishu Vidya Mandir' : 'सरस्वती शिशु विद्या मंदिर'}
              </span>
              <h1 className="text-base md:text-xl font-black text-blue-900 tracking-tight leading-tight uppercase">
                ADK SCHOOL
              </h1>
              <span className="text-[9px] md:text-[10px] font-semibold text-slate-500 tracking-wide">
                {language === 'en' ? 'ADK SCHOOL • INDIA' : 'एडीके स्कूल • भारत'}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationItems.map((item) => {
              const isActive = currentTab === item.tab;
              
              // Highlight Admissions & Special Tabs visually in navbar
              if (item.tab === 'admissions') {
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleTabChange(item.tab)}
                    className={`ml-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-bold tracking-wide transition-all shadow-md flex items-center gap-1 cursor-pointer ${
                      isActive 
                        ? 'bg-orange-500 text-white shadow-orange-100' 
                        : 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
                    }`}
                  >
                    <Sparkles size={13} className="animate-spin duration-300" />
                    {language === 'en' ? item.labelEn : item.labelHn}
                  </button>
                );
              }

              if (item.tab === 'portal') {
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleTabChange(item.tab)}
                    className={`ml-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-bold tracking-wide transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                      isActive 
                        ? 'bg-blue-900 text-white shadow-blue-100' 
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-100'
                    }`}
                  >
                    <BookOpen size={13} />
                    {language === 'en' ? item.labelEn : item.labelHn}
                  </button>
                );
              }

              // Standard Navigation Menu item
              return (
                <button
                  key={item.tab}
                  onClick={() => handleTabChange(item.tab)}
                  className={`px-3 py-2 rounded-md text-xs xl:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-blue-900 bg-slate-50 border-b-2 border-orange-500 rounded-none'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {language === 'en' ? item.labelEn : item.labelHn}
                </button>
              );
            })}
          </div>

          {/* Action CTA buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleTabChange('admissions')}
              className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all cursor-pointer shadow-lg shadow-orange-100 border-none"
            >
              {language === 'en' ? 'Apply Now' : 'आवेदन करें'}
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleTabChange('portal')}
              className="bg-blue-50 border border-blue-100 text-blue-700 font-bold px-2.5 py-1.5 rounded text-xs flex items-center gap-1 cursor-pointer"
            >
              <BookOpen size={13} />
              <span>{language === 'en' ? 'Portal' : 'पोर्टल'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2 rounded hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50 animate-fadeIn" id="mobile-dropdown-menu">
            <div className="px-4 py-4 space-y-1.5 flex flex-col">
              {navigationItems.map((item) => {
                const isActive = currentTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleTabChange(item.tab)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500'
                        : 'text-slate-800 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{language === 'en' ? item.labelEn : item.labelHn}</span>
                    {item.tab === 'admissions' && (
                      <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded font-black uppercase">
                        {language === 'en' ? 'Open' : 'चालू'}
                      </span>
                    )}
                    {item.tab === 'portal' && (
                      <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-black uppercase">
                        {language === 'en' ? 'Live' : 'लाइव'}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 mt-2">
                <a
                  href="tel:+917379990043"
                  className="bg-slate-100 text-slate-900 border border-slate-200 text-center py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1"
                >
                  <Phone size={14} className="text-orange-600" />
                  <span>{language === 'en' ? 'Call Office' : 'कॉल करें'}</span>
                </a>
                <button
                  onClick={() => handleTabChange('admissions')}
                  className="bg-orange-600 text-white text-center py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow cursor-pointer hover:bg-orange-700"
                >
                  <Sparkles size={14} />
                  <span>{language === 'en' ? 'Admission Form' : 'प्रवेश फॉर्म'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
