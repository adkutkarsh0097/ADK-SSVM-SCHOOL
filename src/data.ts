/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Teacher, ClassOffering, FAQItem, Testimonial, Achievement, GalleryItem, BlogPost } from './types';

export const TRANSLATIONS = {
  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navAdmissions: 'Admissions',
    navAcademics: 'Academics',
    navActivities: 'Activities',
    navResults: 'Achievements',
    navGallery: 'Gallery',
    navContact: 'Contact Us',
    navPortal: 'Parent Portal',
    navBlog: 'School News',

    // Hero Section
    heroHeadline: 'Shaping Bright Futures with संस्कार & Modern Education',
    heroSubtitle: 'Welcome to ADK SCHOOL – Saraswati Shishu Vidya Mandir, where timeless Indian cultural values meet world-class scientific education.',
    btnApply: 'Apply for Admission',
    btnWhatsapp: 'WhatsApp Inquiry',
    btnVisit: 'Book School Visit',
    announcementTicker: '📢 Admissions Open for Academic Session 2026-27 from Nursery to Class 10! Limited seats available—Register online today.',

    // Quick Stats
    statStudents: '1200+ Active Students',
    statTeachers: '48+ Expert Educators',
    statBoardResults: '100% CBSE Pass Rate',
    statActivities: '25+ co-curricular clubs',

    // Core Values & USP
    uspTitle: 'Saraswati Education System',
    uspSubtitle: 'Our holistic system equips children to excel in competitive board exams while remaining grounded in compassion, discipline, and Indian national values.',
    uspCards: [
      {
        title: 'संस्कार-Rooted Growth',
        desc: 'Daily yoga, prayer sessions, respect for elders, and value-based integration integrated directly within the academic day.',
      },
      {
        title: 'Smart Digital Classrooms',
        desc: 'Classrooms fitted with interactive smart boards, 3D animated course materials, and fully integrated sound systems.',
      },
      {
        title: 'Bilingual Excellence',
        desc: 'CBSE CBSE-aligned Hindi medium foundation coupled with strong spoken and written English fluency development programs.',
      },
      {
        title: 'Advanced Science Labs',
        desc: 'Hands-on physics, chemistry, and cyber coding labs enabling practical STEM confidence from an early age.',
      },
    ],

    // Testimonials
    testimonialTitle: 'What Happy Parents Say',
    testimonialSubtitle: 'Read the real, unfiltered transformations experienced by parents in our local community.',

    // CTAs & Inquiries
    ctaUrgent: 'Secure Your Child’s Bright Future Today!',
    ctaDesc: 'Applications for the batches of 2026-27 are closing soon. Fill out our simple online form to instantly book a free school tour & counseling Session.',
    labelClassName: 'Select Class',
    labelDOB: 'Date of Birth of Child',
    labelPhone: 'WhatsApp Mobile Number',

    // Parent Portal Overview & Instructions
    portalTitle: 'Digital Parent App',
    portalIntro: 'Stay completely aligned with your child\'s education with daily automated homework tracking, attendance audits, fee dues, and direct feedback lines.',
  },
  hn: {
    // Navigation
    navHome: 'गृह',
    navAbout: 'हमारे बारे में',
    navAdmissions: 'प्रवेश प्रक्रिया',
    navAcademics: 'शिक्षा',
    navActivities: 'गतिविधियां',
    navResults: 'उपलब्धियां',
    navGallery: 'गैलरी',
    navContact: 'संपर्क करें',
    navPortal: 'अभिभावक पोर्टल',
    navBlog: 'समाचार व ब्लॉग',

    // Hero Section
    heroHeadline: 'संस्कार और आधुनिक शिक्षा के साथ उज्ज्वल भविष्य का निर्माण',
    heroSubtitle: 'एडीके स्कूल – सरस्वती शिशु विद्या मंदिर में आपका स्वागत है, जहां सनातन भारतीय सांस्कृतिक संस्कार और आधुनिक वैज्ञानिक शिक्षा का संगम है।',
    btnApply: 'प्रवेश के लिए आवेदन करें',
    btnWhatsapp: 'व्हाट्सएप पूछताछ',
    btnVisit: 'विद्यालय भ्रमण बुक करें',
    announcementTicker: '📢 शैक्षणिक सत्र 2026-27 के लिए नर्सरी से कक्षा 10 तक प्रवेश प्रारंभ! सीमित सीटें—आज ही ऑनलाइन पंजीकरण करें।',

    // Quick Stats
    statStudents: '१२००+ सक्रिय छात्र',
    statTeachers: '४८+ अनुभवी शिक्षक',
    statBoardResults: '१००% सीबीएसई परिणाम',
    statActivities: '२५+ सह-पाठ्यचर्या क्लब',

    // Core Values & USP
    uspTitle: 'सरस्वती पंचप्रणाली शिक्षा पद्धति',
    uspSubtitle: 'हमारी समग्र शिक्षा प्रणाली बच्चों को दया, अनुशासन और भारतीय राष्ट्रीय मूल्यों से जोड़े रखते हुए प्रतियोगी परीक्षाओं में उत्कृष्ट प्रदर्शन के लिए तैयार करती है।',
    uspCards: [
      {
        title: 'संस्कार युक्त विकास',
        desc: 'दैनिक योग, वंदना सत्र, बड़ों का आदर करना और भारतीय नैतिक मूल्यों का शैक्षणिक दिनचर्या में सीधा समावेश।',
      },
      {
        title: 'स्मार्ट डिजिटल कक्षाएं',
        desc: 'इंटरैक्टिव स्मार्ट बोर्ड, 3D एनिमेटेड शिक्षण सामग्री और आधुनिक सुविधाओं से सुसज्जित कक्षाएं।',
      },
      {
        title: 'द्विभाषी श्रेष्ठता',
        desc: 'सीबीएसई संरेखित हिंदी माध्यम आधार के साथ-साथ उत्कृष्ट अंग्रेजी संभाषण और लेखन कौशल का विकास।',
      },
      {
        title: 'प्रगत विज्ञान प्रयोगशाला',
        desc: 'प्रारंभिक आयु से व्यावहारिक स्टेम (STEM) आत्मविश्वास को सक्षम करने के लिए भौतिकी, रसायन और कोडिंग लैब।',
      },
    ],

    // Testimonials
    testimonialTitle: 'अभिभावकों के सच्चे अनुभव',
    testimonialSubtitle: 'हमारे स्थानीय समुदाय के माता-पिता द्वारा महसूस किए गए वास्तविक बदलावों को पढ़ें।',

    // CTAs & Inquiries
    ctaUrgent: 'आज ही अपने बच्चे का उज्ज्वल भविष्य सुरक्षित करें!',
    ctaDesc: 'सत्र 2026-27 के लिए आवेदन प्रक्रिया जल्द ही समाप्त हो रही है। विद्यालय भ्रमण और निःशुल्क परामर्श सत्र बुक करने के लिए सरल फॉर्म भरें।',
    labelClassName: 'कक्षा चुनें',
    labelDOB: 'बच्चे की जन्म तिथि',
    labelPhone: 'व्हाट्सएप मोबाइल नंबर',

    // Parent Portal Overview & Instructions
    portalTitle: 'डिजिटल पेरेंट ऐप',
    portalIntro: 'दैनिक स्वचालित होमवर्क अपडेट, लाइव उपस्थिति रिपोर्ट, शुल्क विवरण और सीधे शिक्षक संचार के माध्यम से बच्चे की शिक्षा से जुड़े रहें।',
  },
};

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: 'Shri Ramakant Dwivedi',
    designation: 'Principal',
    qualification: 'M.Sc (Physics), B.Ed',
    experience: '22 Years in SSVM administration',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 't2',
    name: 'Smt. Geeta Mishra',
    designation: 'Headmistress & Primary In-Charge',
    qualification: 'M.A (Hindi & Sanskrit), M.Ed',
    experience: '18 Years of elementary teaching',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 't3',
    name: 'Shri Utkarsh Singh',
    designation: 'Senior Computer & Coding Faculty',
    qualification: 'B.Tech (CSE), MCA',
    experience: '8 Years in IT/Digital Learning',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 't4',
    name: 'Smt. Preeti Jha',
    designation: 'Science Coordinator & Olympiad Mentor',
    qualification: 'M.Sc (Chemistry), NET Qualified',
    experience: '12 Years of boarding/school prep',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
];

export const CLASSES_OFFERED: ClassOffering[] = [
  {
    id: 'c1',
    className: 'Nursery to Prep/KG (Shishu Vatika)',
    ageGroup: '3 to 5 Years',
    subjects: ['Play-way numbers', 'Hindi and English Phonetics', 'Art, Clay Modeling, Rhymes', 'Sanskriti Orientation'],
    outcomes: ['Physical balance', 'Bilingual cognitive starting', 'Basic manners, hygiene and prayer sharing'],
    medium: 'Bilingual (Hindi + English play environment)',
  },
  {
    id: 'c2',
    className: 'Class 1 to Class 5 (Primary Block)',
    ageGroup: '6 to 10 Years',
    subjects: ['Mathematics (Mental Math & Vedic Math intro)', 'Environmental Studies', 'English grammar & speaking', 'Hindi composition', 'Computer Science'],
    outcomes: ['Strong arithmetic foundation', 'Reading confidence in both languages', 'Daily Yoga and patriotic song participation'],
    medium: 'Hindi medium books with rich English language skills support',
  },
  {
    id: 'c3',
    className: 'Class 6 to Class 8 (Middle Block)',
    ageGroup: '11 to 13 Years',
    subjects: ['General Science (Phy/Chem/Bio)', 'Social Science', 'Sanskrit & Moral Values', 'Computer Programming & Robotics', 'Mathematics'],
    outcomes: ['Practical experimentation training', 'Early logical reasoning & coding skills', 'Self disciplines & cultural knowledge'],
    medium: 'CBSE Curriculum books',
  },
  {
    id: 'c4',
    className: 'Class 9 to Class 10 (Secondary Board Preparation)',
    ageGroup: '14 to 15 Years',
    subjects: ['Advanced Mathematics', 'Physics, Chemistry, Biology detailed labs', 'SST & Democratic values', 'English Core & IT Application', 'Sanskrit/Hindi elective'],
    outcomes: ['CBSE Board Exam strategic readiness', 'Olympiad, NTSE & Foundation coaching integration', 'Social and leadership duties guidance'],
    medium: 'CBSE Official Board syllabus',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'r1',
    parentName: 'Rajesh Kumar Sharma',
    occupation: 'Railway Employee',
    childClass: 'Father of Abhinav (Class 9)',
    textEn: 'ADK School has restored our cultural faith. My son is excellent in coding web designs and at the same time reciting Sanskrit Shlokas before eating his food every morning. Outstanding balance!',
    textHn: 'एडीके स्कूल ने हमारी सांस्कृतिक श्रद्धा को फिर से जीवित किया है। मेरा बेटा कोडिंग में उत्कृष्ट है और साथ ही रोज सुबह भोजन करने से पहले संस्कृत श्लोकों का पाठ करता है। अद्भुत संतुलन!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r2',
    parentName: 'Dr. Sunita Pathak',
    occupation: 'Pediatrician',
    childClass: 'Mother of Ananya (Class 4)',
    textEn: 'I chose this school specifically because they don\'t rush kids into memorising books. The smart dashboard gives me real-time feedback on what she needs help with. Principal Dwivedi Ji is always accessible.',
    textHn: 'मैंने विशेष रूप से इस स्कूल को चुना क्योंकि वे रट्टा मारने पर जोर नहीं देते। स्मार्ट पेरेंट डैशबोर्ड मुझे रियल-टाइम फीडबैक देता है। प्रधानाचार्य द्विवेदी जी हमेशा सुलभ रहते हैं।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r3',
    parentName: 'Deepak Patel',
    occupation: 'Local Store Owner',
    childClass: 'Father of Priyanshu (Class 7)',
    textEn: 'The digital resources and smart classroom visual clips have helped my son understand difficult math theorems easily. Top CBSE quality education right in our local area within moderate pricing structures.',
    textHn: 'डिजिटल संसाधनों और स्मार्ट क्लासरूम के वीडियो क्लिप ने मेरे बेटे को कठिन गणित प्रमेयों को आसानी से समझने में मदद की है। मध्यम शुल्क संरचना में हमारे क्षेत्र में उत्कृष्ट सीबीएसई गुणवत्ता।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'admissions',
    questionEn: 'How can I apply for online admission for the 2026-27 session?',
    questionHn: 'शैक्षणिक सत्र 2026-27 के लिए ऑनलाइन प्रवेश कैसे लें?',
    answerEn: 'You can submit an inquiry via our Admissions Form. Our admissions officer will verify documents over dynamic WhatsApp links and call you to finalize school visits, child observation assessments, and registration fees.',
    answerHn: 'आप हमारे प्रवेश फॉर्म के माध्यम से पूछताछ सबमिट कर सकते हैं। हमारे प्रवेश अधिकारी व्हाट्सएप पर दस्तावेजों का सत्यापन करेंगे और स्कूल विजिट, बच्चे के आकलन और पंजीकरण शुल्क को अंतिम रूप देने के लिए आपसे संपर्क करेंगे।',
  },
  {
    id: 'f2',
    category: 'fees',
    questionEn: 'Are there any scholarships available for single-parent families or meritorious children?',
    questionHn: 'क्या मेधावी बच्चों या एकल माता-पिता के परिवारों के लिए छात्रवृत्ति उपलब्ध है?',
    answerEn: 'Yes! ADK SSVM provides up to 50% tuition waiver scholarships under the "Sharda Puraskar Initiative" to top-performing academic candidates, national sports achievers, and single parent situations upon document verification.',
    answerHn: 'हां! एडीके एसएसवीएम उत्कृष्ट शैक्षणिक छात्र-छात्राओं, राष्ट्रीय खेल स्तर के विजेताओं और एकल माता-पिता के बच्चों को "शारदा पुरस्कार पहल" के तहत आवश्यक दस्तावेजों के सत्यापन पर ५०% तक ट्यूशन फीस में छूट प्रदान करता है।',
  },
  {
    id: 'f3',
    category: 'academic',
    questionEn: 'Is English-speaking emphasized, as it is a SSVM affiliated Hindi-English environment?',
    questionHn: 'सरस्वती शिशु मंदिर हिंदी-अंग्रेजी माध्यम है, क्या यहां अंग्रेजी बोलने पर ध्यान दिया जाता है?',
    answerEn: 'Absolutely. While basic textbooks and deep morals are rooted in our mother tongue, we mandatorily integrate Daily English Conversation classes, professional phonetic worksheets, and specialized English coding labs from Class 1.',
    answerHn: 'बिल्कुल। जबकि बुनियादी पाठ्यपुस्तकें और नैतिक संस्कार हमारी मातृभाषा में निहित हैं, हम कक्षा १ से दैनिक अंग्रेजी वार्तालाप सत्र, ध्वन्यात्मकता (phonetics) पत्रक और कोडिंग लैब को अनिवार्य रूप से एकीकृत करते हैं।',
  },
  {
    id: 'f4',
    category: 'general',
    questionEn: 'Does the school provide clean drinking water, secure transport, and medical clinics?',
    questionHn: 'क्या स्कूल स्वच्छ पेयजल, सुरक्षित परिवहन और चिकित्सा सहायता प्रदान करता है?',
    answerEn: 'Yes. The building has centralized commercial UV water RO purifiers, 3 secure shuttle vans equipped with live GPS tracking alerts for parents, and an active primary first-aid clinic with a registered pediatric nurse on duty.',
    answerHn: 'हां। विद्यालय में केंद्रीकृत कमर्शियल वॉटर आरओ प्यूरीफायर हैं, अभिभावकों के लिए लाइव जीपीएस ट्रैकिंग से लैस ३ सुरक्षित वैन हैं, और आपातकालीन समय के लिए स्कूल में एक प्राथमिक चिकित्सा क्लिनिक तथा मेडिकल नर्स उपलब्ध हैं।',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    studentName: 'Master Aditya Verma',
    achievementTitle: 'State Science Fair 1st Prize Winner',
    year: '2025',
    achievementHn: 'राज्य विज्ञान मेला - प्रथम पुरस्कार विजेता',
    descriptionEn: 'Invented low-cost solar-powered automated water filtration prototype for agricultural drip systems.',
    descriptionHn: 'कृषि ड्रिप प्रणालियों के लिए कम लागत वाले सौर-चालित स्वचालित जल निस्पंदन प्रोटोटाइप का आविष्कार किया।',
    class: 'Class 10 Student',
    image: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=400',
    badge: '🏆 Golden Scholar',
  },
  {
    id: 'a2',
    studentName: 'Miss Ridhima Dwivedi',
    achievementTitle: 'National Vedic Mathematics Olympiad Rank 4',
    year: '2026',
    achievementHn: 'राष्ट्रीय वैदिक गणित ओलंपियाड - रैंक ४',
    descriptionEn: 'Solved 100 complex mathematical equations in less than 3 minutes using lightning fast Vedic calculation mental formulas.',
    descriptionHn: 'बिजली की तेजी से वैदिक गणना सूत्रों का उपयोग करके ३ मिनट से कम समय में १०० जटिल गणना प्रमेयों को हल किया।',
    class: 'Class 8 Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    badge: '⚡ Math Wizard',
  },
  {
    id: 'a3',
    studentName: 'Master Saurabh Yadav',
    achievementTitle: 'Gold Medalist - Under-17 State Kabbadi League',
    year: '2025',
    achievementHn: 'स्वर्ण पदक विजेता - अंडर-१७ राज्य कबड्डी लीग',
    descriptionEn: 'Led our school varsity team as captain, defeating 16 teams comprehensively in the regional tournaments.',
    descriptionHn: 'क्षेत्रीय टूर्नामेंट में १६ टीमों को हराकर विद्यालय की कबड्डी टीम का कप्तानी के रूप में विजयी नेतृत्व किया।',
    class: 'Class 10 Captain',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013B?auto=format&fit=crop&q=80&w=400',
    badge: '🎖️ Sports Titan',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'campus',
    titleEn: 'Entrance Gate and Saraswati Idol Worship Sanctum',
    titleHn: 'मुख्य प्रवेश द्वार और मां सरस्वती वंदना मंदिर',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g2',
    category: 'academics',
    titleEn: 'Physics & Chemistry Practical Hands-On Laboratory',
    titleHn: 'भौतिक विज्ञान और रसायन विज्ञान व्यावहारिक प्रयोगशाला',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g3',
    category: 'sports',
    titleEn: 'Annual Athletic Day - Team Sprint and Kabaddi',
    titleHn: 'वार्षिक खेल उत्सव - दौड़ स्पर्धा व कबड्डी',
    imageUrl: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g4',
    category: 'cultural',
    titleEn: 'Subhash Chandra Bose Jayanti Celebration Parade & Drama',
    titleHn: 'सुभाष चंद्र बोस जयंती उत्सव परेड और नाटक प्रस्तुति',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g5',
    category: 'events',
    titleEn: 'Annual Function Prize Distribution Ceremony by Chief Guest',
    titleHn: 'मुख्य अतिथि द्वारा वार्षिक समारोह पुरस्कार वितरण',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g6',
    category: 'academics',
    titleEn: 'Interactive Smart Board & Multi-media Visual Classroom',
    titleHn: 'स्मार्ट इंटरैक्टिव बोर्ड और मल्टीमीडिया विज़ुअल कक्ष',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    titleEn: 'Announcing 2026-27 Registrations: Virtual Entry Open',
    titleHn: 'सत्र 2026-27 पंजीकरण प्रारंभ: ऑनलाइन प्रवेश प्रक्रिया शुरू',
    category: 'News',
    categoryHn: 'समाचार',
    date: 'May 18, 2026',
    summaryEn: 'Detailed guidelines regarding age-cutoffs, required medical fitness proof, and documents verification check for nursery and higher primary entry steps.',
    summaryHn: 'नर्सरी और प्राथमिक स्तर में प्रवेश के लिए आयु-सीमा, आवश्यक चिकित्सा स्वास्थ्य प्रमाण और आवश्यक दस्तावेजों की विस्तृत सूची।',
    contentEn: 'Our registrar announces that primary and middle session slots open from June 1st. Application forms are digitally processed to support remote parents. Check the CBSE and SSVM syllabus guidelines carefully before attending child interactions.',
    contentHn: 'पंजीकरण अधिकारी ने घोषणा की है कि प्राथमिक और उच्च कक्षाओं के स्लॉट १ जून से खुलेंगे। अभिभावकों की सुविधा के लिए आवेदन फॉर्मों की डिजिटल प्रोसेसिंग की जाएगी। साक्षात्कार में उपस्थित होने से पहले पाठ्यक्रम दिशानिर्देश देख लें।',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read',
  },
  {
    id: 'b2',
    titleEn: 'How Vedic Mathematics Supercharges Academic Focus of Elementary Kids',
    titleHn: 'वैदिक गणित कैसे प्राथमिक बच्चों के मानसिक विकास को गति देता है',
    category: 'Tips',
    categoryHn: 'शिक्षा टिप्स',
    date: 'April 22, 2026',
    summaryEn: 'Explore 3 Vedic tricks of calculation that allow ADK students to calculate multiplication faster than calculator machines, improving brain focus.',
    summaryHn: 'मानसिक गणना की ३ वैदिक गणितीय तरकीबें जो छात्रों को कैलकुलेटर से भी तेज गुणा करने और एकाग्रता बढ़ाने में सहायता करती हैं।',
    contentEn: 'Mental calculation under our Panchapranali system builds cognitive shortcuts. Teachers teach simple shloka-based sutras that remove Math-phobia from students, cultivating natural scientific temperaments.',
    contentHn: 'हमारी पंचप्रणाली प्रणाली के तहत मानसिक गणना मस्तिष्क के विकास में तेजी लाती है। शिक्षक सरल सूत्रों पर आधारित श्लोकों को पढ़ाते हैं जो गणित के प्रति भय को दूर कर स्वाभाविक वैज्ञानिक झुकाव पैदा करते हैं।',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
  },
  {
    id: 'b3',
    titleEn: 'Daily Yoga Routines: Improving Exam Focus & Memory',
    titleHn: 'दैनिक योगासन: परीक्षा तनाव से मुक्ति और स्मरण शक्ति में सुधार',
    category: 'Culture',
    categoryHn: 'सांस्कृतिक कार्यक्रम',
    date: 'March 15, 2026',
    summaryEn: 'Exam seasons can cause student panic. Learn how 15 minutes of Pranayama and Surya Namaskar boosts memory retention and oxygen supply in brain cells.',
    summaryHn: 'परीक्षा के मौसम में छात्रों के मानसिक स्वास्थ्य पर प्रभाव पड़ता है। जानें कैसे १५ मिनट का प्राणायाम और सूर्य नमस्कार स्मरण शक्ति बढ़ाता है।',
    contentEn: 'Every morning at ADK SSVM starts with a gentle yet energizing sequence of physical flexibility practices. Combined with om sound chants and meditation times, this provides deep inner balance for high board exam scorers.',
    contentHn: 'एडीके एसएसवीएम में हमारे हर सुबह की शुरुआत सूर्य नमस्कार और योगासन के साथ होती है। मंत्रोच्चार और सूक्ष्म ध्यान के संगम से छात्रों को परीक्षाओं में शीर्ष प्रदर्शन करने में मदद मिलती है।',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
  },
];

// Interactive Demo Parent Portal Credentials
export const PORTAL_STUDENTS = [
  {
    rollNo: '202609',
    pin: '1234',
    name: 'Abhinav Sharma',
    class: 'Class 9-A',
    fatherName: 'Rajesh Kumar Sharma',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    attendance: '94%',
    attendanceStatus: 'Excellent (48 Present / 3 Absent)',
    feeStatus: 'Paid for Quarter 1 (Dues: ₹0)',
    pendingFees: 0,
    homework: [
      { date: 'Today', subject: 'Mathematics', task: 'Solve Vedic Sutras Exercise 4.2 in work book', status: 'Pending completion' },
      { date: 'Yesterday', subject: 'Sanskrit', task: 'Memorize first five verses of Gita Chapter 12', status: 'Submitted & Verified' },
      { date: '21 May 2026', subject: 'Computer Science', task: 'Write structural tags for simple index.html profile page', status: 'Submitted & Verified' },
    ],
    remarks: 'Weekly tests look strong. Needs to maintain hand-writing neatness during general science. Always active in classroom question-answering sessions.',
  },
  {
    rollNo: '202612',
    pin: '5678',
    name: 'Ananya Pathak',
    class: 'Class 4-B',
    fatherName: 'Dr. Sunita Pathak',
    avatar: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=200',
    attendance: '91%',
    attendanceStatus: 'On Track (45 Present / 4 Absent)',
    feeStatus: 'Pending Quarter 1: ₹4,800',
    pendingFees: 4800,
    homework: [
      { date: 'Today', subject: 'English', task: 'Practice cursive worksheets page 12 to 14', status: 'Pending completion' },
      { date: 'Yesterday', subject: 'Science', task: 'Draw solar system color flow charts on chart paper', status: 'Submitted & Verified' },
    ],
    remarks: 'Extremely polite child. Excellent at reciting prayers during assemblies. Science drawings are exceptionally clear in colors.',
  },
];
