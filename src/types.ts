/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppTab =
  | 'home'
  | 'about'
  | 'admissions'
  | 'academics'
  | 'activities'
  | 'results'
  | 'gallery'
  | 'contact'
  | 'portal'
  | 'blog';

export interface LanguageContext {
  language: 'en' | 'hn';
  toggleLanguage: () => void;
  t: (key: string, section?: string) => string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  image: string;
}

export interface ClassOffering {
  id: string;
  className: string;
  ageGroup: string;
  subjects: string[];
  outcomes: string[];
  medium: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'admissions' | 'fees' | 'academic';
  questionEn: string;
  questionHn: string;
  answerEn: string;
  answerHn: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  occupation: string;
  childClass: string;
  textEn: string;
  textHn: string;
  rating: number;
  avatar: string;
}

export interface Achievement {
  id: string;
  studentName: string;
  achievementTitle: string;
  year: string;
  achievementHn: string;
  descriptionEn: string;
  descriptionHn: string;
  class: string;
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  category: 'campus' | 'academics' | 'sports' | 'cultural' | 'events';
  titleEn: string;
  titleHn: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  titleEn: string;
  titleHn: string;
  category: 'News' | 'Exams' | 'Culture' | 'Tips';
  categoryHn: string;
  date: string;
  summaryEn: string;
  summaryHn: string;
  contentEn: string;
  contentHn: string;
  image: string;
  readTime: string;
}

export interface InquiryLead {
  id: string;
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childDOB: string;
  targetClass: string;
  message: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'admitted';
}
