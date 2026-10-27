import type {
  ContactDetails,
  EducationInfo,
  Experience,
  MetricStat,
  OpenSourcePackage,
  PersonalDetails,
  PhoneTabInfo,
  ProfileLink,
  Project,
  SkillCategory,
  AdditionalInfo,
} from "../types";

/**
 * ============================================================================
 * 📱 1. PERSONAL DETAILS
 * ============================================================================
 */
export const PERSONAL_DETAILS: PersonalDetails = {
  name: "Gurpreet Singh",
  role: "Senior React Native Developer",
  title: "Senior React Native Developer | iOS (Swift) | 7+ Years Experience",
  email: "gsp72060@gmail.com",
  phone: "7988898159",
  location: "Chandigarh Enclave, Zirakpur, India",
  address: "Chandigarh Enclave, Zirakpur 140603, Punjab, India",
  bio: "Senior React Native Developer with 7+ years of experience in designing, developing, and maintaining high-quality mobile applications using React Native and Native iOS (Swift). Experienced in building scalable applications, integrating payment gateways, subscription platforms, analytics, and third-party SDKs. Passionate about delivering performant, user-centric mobile solutions while collaborating effectively within Agile teams.",
};

/**
 * ============================================================================
 * 🌐 2. PROFILE & SOCIAL LINKS
 * ============================================================================
 */
export const PROFILE_LINKS: ProfileLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Gurpreet Singh",
    url: "https://linkedin.com",
    iconName: "Linkedin",
    isPrimary: true,
  },
  {
    id: "github",
    name: "GitHub",
    handle: "Gurpreet Singh",
    url: "https://github.com",
    iconName: "Github",
    isPrimary: true,
  },
  {
    id: "email",
    name: "Email",
    handle: "gsp72060@gmail.com",
    url: "mailto:gsp72060@gmail.com",
    iconName: "Mail",
    isPrimary: true,
  },
  {
    id: "phone",
    name: "Phone",
    handle: "+91 79888 98159",
    url: "tel:+917988898159",
    iconName: "Phone",
    isPrimary: true,
  },
];

/**
 * ============================================================================
 * 📬 3. CONTACT INFO
 * ============================================================================
 */
export const CONTACT_INFO: ContactDetails = {
  fullName: PERSONAL_DETAILS.name,
  roleKey: "hero_subtitle",
  email: PERSONAL_DETAILS.email,
  phone: "+91 79888 98159",
  location: PERSONAL_DETAILS.location,
  address: PERSONAL_DETAILS.address,
  linkedinUrl: "https://linkedin.com",
  githubUrl: "https://github.com",
};

/**
 * ============================================================================
 * 📊 4. CREDIBILITY & KEY METRICS
 * ============================================================================
 */
export const METRIC_STATS: MetricStat[] = [
  {
    id: "exp",
    numericValue: 7,
    suffix: "+",
    labelKey: "stats_exp",
    iconName: "Award",
  },
  {
    id: "projects",
    numericValue: 20,
    suffix: "+",
    labelKey: "stats_projects",
    iconName: "Smartphone",
  },
  {
    id: "payments",
    numericValue: 5,
    suffix: "+ Gateways",
    labelKey: "stats_payments",
    iconName: "CreditCard",
  },
  {
    id: "platforms",
    numericValue: 2,
    suffix: " (iOS & Android)",
    labelKey: "stats_platforms",
    iconName: "Layers",
  },
];

/**
 * ============================================================================
 * 🛠️ 5. SKILL CATEGORIES (Exact from Resume)
 * ============================================================================
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages_frameworks",
    nameKey: "skills_cat_languages_frameworks",
    iconName: "Code2",
    skills: [
      { name: "React Native", proficiency: 98, isPrimary: true },
      { name: "Swift (iOS)", proficiency: 95, isPrimary: true },
      { name: "JavaScript (ES6+)", proficiency: 96, isPrimary: true },
      { name: "TypeScript", proficiency: 96, isPrimary: true },
    ],
  },
  {
    id: "state_arch",
    nameKey: "skills_cat_state_arch",
    iconName: "Layers",
    skills: [
      { name: "Redux", proficiency: 96, isPrimary: true },
      { name: "React Hooks", proficiency: 96, isPrimary: true },
      { name: "MVC Architecture", proficiency: 92, isPrimary: true },
      { name: "MVVM Architecture", proficiency: 92, isPrimary: true },
    ],
  },
  {
    id: "backend_apis",
    nameKey: "skills_cat_backend_apis",
    iconName: "Server",
    skills: [
      { name: "REST APIs", proficiency: 96, isPrimary: true },
      { name: "JSON", proficiency: 98, isPrimary: true },
      { name: "AsyncStorage", proficiency: 95, isPrimary: true },
    ],
  },
  {
    id: "firebase",
    nameKey: "skills_cat_firebase",
    iconName: "Sparkles",
    skills: [
      { name: "Firebase Authentication", proficiency: 95, isPrimary: true },
      { name: "Cloud Firestore", proficiency: 94, isPrimary: true },
      { name: "Firebase Cloud Messaging (FCM)", proficiency: 96, isPrimary: true },
      { name: "Firebase Crashlytics", proficiency: 95, isPrimary: true },
      { name: "Firebase Analytics", proficiency: 94, isPrimary: true },
    ],
  },
  {
    id: "sdks_integrations",
    nameKey: "skills_cat_sdks_integrations",
    iconName: "Smartphone",
    skills: [
      { name: "Branch.io", proficiency: 92, isPrimary: true },
      { name: "AppsFlyer", proficiency: 90, isPrimary: true },
      { name: "Amplitude", proficiency: 92, isPrimary: true },
      { name: "RevenueCat", proficiency: 96, isPrimary: true },
      { name: "Superwall", proficiency: 95, isPrimary: true },
      { name: "TikTok Events SDK", proficiency: 88 },
      { name: "Google Maps SDK", proficiency: 94, isPrimary: true },
      { name: "Google Places API", proficiency: 94, isPrimary: true },
      { name: "Push Notifications", proficiency: 96, isPrimary: true },
    ],
  },
  {
    id: "payments",
    nameKey: "skills_cat_payments",
    iconName: "CreditCard",
    skills: [
      { name: "Apple Pay", proficiency: 96, isPrimary: true },
      { name: "Stripe", proficiency: 96, isPrimary: true },
      { name: "Razorpay", proficiency: 92, isPrimary: true },
      { name: "Square", proficiency: 92, isPrimary: true },
      { name: "Braintree", proficiency: 90, isPrimary: true },
    ],
  },
  {
    id: "ios_dev",
    nameKey: "skills_cat_ios_dev",
    iconName: "Terminal",
    skills: [
      { name: "Xcode", proficiency: 96, isPrimary: true },
      { name: "CocoaPods", proficiency: 94, isPrimary: true },
      { name: "TestFlight", proficiency: 95, isPrimary: true },
      { name: "App Store Connect", proficiency: 96, isPrimary: true },
    ],
  },
  {
    id: "tools_practices",
    nameKey: "skills_cat_tools_practices",
    iconName: "Terminal",
    skills: [
      { name: "GitHub & Version Control", proficiency: 96, isPrimary: true },
      { name: "Code Review", proficiency: 95, isPrimary: true },
      { name: "Performance Optimization", proficiency: 96, isPrimary: true },
      { name: "Debugging & Profiling", proficiency: 95, isPrimary: true },
      { name: "Third-Party SDK Integration", proficiency: 96, isPrimary: true },
    ],
  },
];

/**
 * ============================================================================
 * 💼 6. WORK EXPERIENCE (Mind Roots Pvt Ltd: April 2019 – Present)
 * ============================================================================
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "mindroots",
    roleKey: "exp_role_senior_rn",
    company: "Mind Roots Pvt Ltd",
    companyUrl: "https://mind-roots.com/",
    companyAboutKey: "exp_mindroots_about",
    location: "Chandigarh / Mohali, India",
    period: "April 2019 – Present",
    isPresent: true,
    achievementsKeys: [
      "exp_mindroots_achieve_1",
      "exp_mindroots_achieve_2",
      "exp_mindroots_achieve_3",
      "exp_mindroots_achieve_4",
      "exp_mindroots_achieve_5",
    ],
    techStack: [
      "React Native",
      "Swift (iOS)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Firebase",
      "OpenAI",
      "RevenueCat",
      "Superwall",
      "Stripe",
      "Apple Pay",
    ],
  },
];

/**
 * ============================================================================
 * 🚀 7. PROJECTS (Flagship & Production Mobile Applications)
 * ============================================================================
 */
export const PROJECTS: Project[] = [
  {
    id: "spf",
    name: "SPF – Tan Timer & UV Tracker",
    category: "health",
    platforms: ["iOS", "Android"],
    techStack: [
      "React Native",
      "Swift",
      "OpenAI",
      "Firebase",
      "RevenueCat",
      "Superwall",
      "Amplitude",
      "FCM",
      "Widgets",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "Sun",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    logoUrl: "/apps/spf.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/spf-tan-timer-uv-tracker/id6744385703",
    previewHighlight: {
      tag: "AI Skin Health & UV",
      metric: "OpenAI Skin Analysis & Forecasts",
      detail: "Swift • RevenueCat • Superwall • FCM",
    },
    keyPoints: [
      "☀️ Real-Time UV Index & 10-Day Weather Forecasts",
      "🤖 OpenAI Personalized Tanning & Skin Analysis",
      "📱 Native iOS Lock-Screen & UV Index Widgets",
      "⚡ Subscriptions & Paywalls with RevenueCat & Superwall",
    ],
    aboutProject:
      "Developed an AI-powered skin health and tanning application using OpenAI to generate personalized tanning recommendations based on user profiles and skin analysis. Integrated UV Index widgets, 10-day weather forecasts, subscriptions, analytics, and push notifications using RevenueCat, Superwall, Amplitude, and Firebase. Optimized application performance, resolved production issues, and published regular updates on the Apple App Store.",
    keyFeatures: [
      "OpenAI Skin Health Analysis: Integrated OpenAI to generate personalized tanning recommendations based on user profiles and skin analysis.",
      "UV Index Widgets & 10-Day Forecasts: Developed glanceable native iOS widgets showing live UV indices and 10-day weather predictions.",
      "RevenueCat & Superwall Monetization: Configured dynamic in-app paywalls, introductory trials, and subscription tier upgrades.",
      "Push Notifications & Analytics: Integrated Amplitude analytics, Firebase telemetry, and FCM alerts for sun reapplication reminders.",
      "Performance Optimization & Production Releases: Maintained 60 FPS fluidity, eliminated memory leaks, and managed App Store submissions.",
    ],
  },
  {
    id: "routinely",
    name: "Routinely – Clear Skin Coach",
    category: "health",
    platforms: ["iOS", "Android"],
    techStack: [
      "React Native",
      "Swift",
      "OpenAI",
      "Firebase",
      "RevenueCat",
      "Superwall",
      "Amplitude",
      "FCM",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "HeartPulse",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    logoUrl: "/apps/routinely.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/routinely-clear-skin-coach/id6748936998",
    previewHighlight: {
      tag: "AI Skincare Coach",
      metric: "OpenAI Product & Routine Scanner",
      detail: "Swift • RevenueCat • Superwall • Firebase",
    },
    keyPoints: [
      "🔬 OpenAI Skincare Product & Formulation Scanner",
      "✨ AI-Generated Personalized Skincare Routines",
      "💳 Subscriptions Managed via RevenueCat & Superwall",
      "🔔 Push Notifications & Amplitude Behavioral Analytics",
    ],
    aboutProject:
      "Developed an AI-powered skincare application that analyzes skin health, scans skincare products, and generates personalized skincare routines using OpenAI. Integrated subscriptions, analytics, push notifications, and third-party SDKs including RevenueCat, Superwall, Amplitude, and Firebase. Optimized application performance, resolved production issues, and published regular updates on Apple App Store.",
    keyFeatures: [
      "OpenAI Product Scanner: Deep formula analysis of cosmetic products to identify active ingredients and evaluate dermatological risks.",
      "Personalized Skincare Routines: Dynamically formulates tailored morning and evening regimens based on skin type and active products using OpenAI.",
      "In-App Subscriptions: Managed subscription paywalls and promotional experiments using RevenueCat and Superwall.",
      "Crash Diagnostics & Stability: Maintained sub-0.5% crash rates using Firebase Crashlytics and performance profiling.",
      "App Store Updates: Shipped frequent production releases and feature enhancements directly to Apple App Store.",
    ],
  },
  {
    id: "emergency_musician",
    name: "EmergencyMusician",
    category: "lifestyle",
    platforms: ["iOS", "Android"],
    techStack: [
      "React Native",
      "Swift",
      "Firebase",
      "Square",
      "FCM",
      "Deep Linking",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "Music",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    logoUrl: "/apps/emergency_musician.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/emergencymusician/id6504610906",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.emergencymusiciannew&pcampaignid=web_share",
    previewHighlight: {
      tag: "Musician Gig Dispatch",
      metric: "On-Demand Musician Marketplace",
      detail: "Swift • Square Payments • Deep Linking • FCM",
    },
    keyPoints: [
      "🎵 Musician & Event Booking Marketplace",
      "💳 Secure Payments via Square Gateway",
      "🔗 Deep Linking for Instant Gig Coordination",
      "🔔 Real-Time FCM Push Notifications",
    ],
    aboutProject:
      "Developed and maintained a mobile platform connecting musicians with churches, event organizers, and clients for seamless booking and gig management. Integrated secure payments, push notifications, deep linking, and third-party SDKs to enhance user engagement and booking workflows. Optimized application performance, resolved production issues, and published regular updates on both the Apple App Store and Google Play Store.",
    keyFeatures: [
      "Seamless Booking & Gig Management: Connects churches, event coordinators, and clients with available professional musicians in real time.",
      "Square Payment Gateway: Integrated secure credit card processing, instant payout handling, and transaction receipts via Square.",
      "Deep Linking Workflows: Facilitated one-tap navigation to active gig requests and contracts directly from shared links and SMS.",
      "Firebase FCM Alerts: Real-time gig dispatch push notifications ensuring musicians never miss urgent bookings.",
      "Cross-Platform Publishing: Maintained production builds, resolved bugs, and published regular releases on App Store and Google Play.",
    ],
  },
  {
    id: "mevlo",
    name: "Mevlo – Off-Market Homes",
    category: "utility",
    platforms: ["iOS", "Android"],
    techStack: [
      "React Native",
      "Swift",
      "Firebase",
      "Branch.io",
      "RevenueCat",
      "Stripe",
      "Amplitude",
      "Sentry",
      "FCM",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "Home",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    logoUrl: "/apps/mevlo.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/mevlo-off-market-homes/id6745820226",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.investdoor",
    previewHighlight: {
      tag: "Off-Market Real Estate",
      metric: "Property Discovery & Negotiations",
      detail: "Swift • Branch.io • Stripe • RevenueCat • Sentry",
    },
    keyPoints: [
      "🏡 Off-Market Real Estate Discovery & Listings",
      "🔗 Branch.io Deep Linking & Attribution",
      "💳 Stripe Payments & RevenueCat Subscriptions",
      "🛡️ Sentry & Firebase Crash Monitoring",
    ],
    aboutProject:
      "Developed and maintained a real estate platform for discovering and managing off-market property listings. Integrated payments, subscriptions, deep linking, analytics, and push notifications: Cloud messaging, RevenueCat, Branch.io, Amplitude, Sentry and Firebase. Optimized application performance, resolved production issues, and published regular updates on both the Apple App Store and Google Play Store.",
    keyFeatures: [
      "Off-Market Property Discovery: Intuitive discovery and management of exclusive unlisted residential real estate.",
      "Branch.io Deep Linking: Robust deferred deep linking and campaign attribution for smooth property sharing.",
      "Stripe Payments & RevenueCat Subscriptions: In-app earnest payments and premium agent tier subscriptions.",
      "Push Notifications & Cloud Messaging: Real-time bid and inquiry alerts via Firebase Cloud Messaging.",
      "Sentry & Crashlytics Monitoring: Real-time crash diagnostics, proactive error resolution, and production updates on App Store & Google Play.",
    ],
  },
  {
    id: "vyra",
    name: "Vyra: AI Photo & Art Generator",
    category: "ai",
    platforms: ["iOS"],
    techStack: [
      "React Native",
      "Swift",
      "OpenAI",
      "Superwall",
      "Firebase",
      "Amplitude",
      "FCM",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "Sparkles",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    logoUrl: "/apps/vyra.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/vyra-ai-photo-art-generator/id6756605297",
    previewHighlight: {
      tag: "Generative AI",
      metric: "AI Photo & Art Generator",
      detail: "Swift • Superwall • Amplitude • FCM",
    },
    keyPoints: [
      "🎨 AI Creative Art & Portrait Synthesis",
      "⚡ Superwall Subscription Paywalls",
      "📸 Native Camera & Gallery Processing",
      "📊 Amplitude Funnel & Crashlytics Monitoring",
    ],
    aboutProject:
      "Developed an AI-powered photo and art generation mobile application transforming user portraits into high-fidelity artistic renders using neural AI APIs, camera modules, and Superwall monetization.",
    keyFeatures: [
      "Neural Image Transformations: High-resolution AI stylization and portrait filters.",
      "Superwall Monetization: In-app purchase paywalls with conversion funnel tracking.",
      "Crashlytics & Amplitude: Real-time telemetry monitoring platform stability.",
      "Apple App Store Releases: Regularly maintained, optimized, and published updates to the Apple App Store.",
    ],
  },
  {
    id: "we_are_detailing",
    name: "We Are Detailing: Car Care",
    category: "utility",
    platforms: ["iOS", "Android"],
    techStack: [
      "React Native",
      "Swift",
      "Firebase",
      "Superwall",
      "Stripe",
      "FCM",
    ],
    featured: true,
    role: "Senior React Native & iOS Developer",
    iconName: "Wrench",
    gradient: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
    logoUrl: "/apps/we_are_detailing.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/we-are-detailing-car-care/id6753579560",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.wearedetailing",
    previewHighlight: {
      tag: "Auto Detailing Hub",
      metric: "Education & E-Commerce",
      detail: "Swift • Superwall • Stripe • Firebase FCM",
    },
    keyPoints: [
      "🚗 Professional Detailing Training & E-Commerce",
      "⚡ Superwall Subscriptions & Video Masterclasses",
      "💳 Stripe Secure In-App Checkout",
      "🔔 Firebase Cloud Messaging Updates",
    ],
    aboutProject:
      "Developed and maintained a mobile platform for professional car detailing education, training, and e-commerce. Integrated subscriptions, secure payments, push notifications, and third-party SDKs including Superwall and Firebase. Optimized application performance, resolved production issues, and published regular updates on both the Apple App Store and Google Play Store.",
    keyFeatures: [
      "Professional Detailing Education: Video training masterclasses, step-by-step guides, and certification resources for detailing technicians.",
      "Superwall Monetization: Configurable paywalls driving digital course subscriptions and premium video access.",
      "Stripe E-Commerce Checkout: Seamless and secure in-app purchasing for professional automotive detailing supplies and equipment.",
      "Push Notifications & Firebase: Timely updates on new training releases, live coaching, and product order status via FCM.",
      "Dual Store Publishing: Continuous maintenance, performance tuning, and updates across Apple App Store and Google Play.",
    ],
  },
];

/**
 * ============================================================================
 * 📦 8. OPEN SOURCE PACKAGES (Stub for API compatibility)
 * ============================================================================
 */
export const OPEN_SOURCE_PACKAGES: OpenSourcePackage[] = [];

/**
 * ============================================================================
 * 🎓 9. EDUCATION (SD College KUK University Panipat - B.Sc Computer Science, 2018)
 * ============================================================================
 */
export const EDUCATION: EducationInfo = {
  degreeKey: "edu_degree",
  universityKey: "edu_university",
  locationKey: "edu_location",
};

/**
 * ============================================================================
 * 🏆 10. ACHIEVEMENTS, AWARDS & ADDITIONAL EXPERIENCE
 * ============================================================================
 */
export const ADDITIONAL_INFO: AdditionalInfo = {
  achievements: [
    "Contributed to the development and maintenance of multiple enterprise and consumer mobile applications across healthcare, fintech, e-commerce, real estate, AI, and service-based domains.",
    "Successfully delivered 20+ mobile applications across iOS and Android.",
    "Developed AI-powered mobile features using OpenAI for personalized user experiences.",
    "Integrated multiple payment gateways including Stripe, Square, Razorpay, Apple Pay, and Braintree.",
    "Reduced application crash rates through performance optimization and Firebase Crashlytics monitoring.",
    "Led feature development and mentored junior developers.",
    "Published and maintained multiple production apps on the Apple App Store and Google Play Store.",
  ],
  interests: [
    "Mobile app development",
    "Learning new technologies",
    "Fitness",
  ],
  languages: [
    "English",
    "Hindi",
    "Punjabi",
  ],
};

export const SOCIAL_LINKS = PROFILE_LINKS;

/**
 * ============================================================================
 * 📱 11. PHONE SHOWCASE TABS
 * ============================================================================
 */
export const PHONE_TABS: PhoneTabInfo[] = [
  {
    id: "app",
    tabLabelKey: "tab_app_label",
    iconName: "Smartphone",
    badgeKey: "tab_app_badge",
    headlineKey: "tab_app_headline",
    metaKey: "tab_app_meta",
    tags: ["React Native", "Swift (iOS)", "Redux", "TypeScript"],
    secondHeadlineKey: "tab_app_sub_headline",
    secondMetaKey: "tab_app_sub_meta",
    secondBadgeKey: "tab_app_sub_badge",
    floatingChip1: {
      titleKey: "tab_app_chip1_title",
      subKey: "tab_app_chip1_sub",
      iconName: "Sparkles",
      colorVariant: "purple",
    },
    floatingChip2: {
      titleKey: "tab_app_chip2_title",
      subKey: "tab_app_chip2_sub",
      iconName: "Layers",
      colorVariant: "green",
    },
  },
  {
    id: "ai",
    tabLabelKey: "tab_ai_label",
    iconName: "Sparkles",
    badgeKey: "tab_ai_badge",
    headlineKey: "tab_ai_headline",
    metaKey: "tab_ai_meta",
    tags: ["OpenAI", "RevenueCat", "Superwall", "Firebase"],
    secondHeadlineKey: "tab_ai_sub_headline",
    secondMetaKey: "tab_ai_sub_meta",
    secondBadgeKey: "tab_ai_sub_badge",
    floatingChip1: {
      titleKey: "tab_ai_chip1_title",
      subKey: "tab_ai_chip1_sub",
      iconName: "Sparkles",
      colorVariant: "purple",
    },
    floatingChip2: {
      titleKey: "tab_ai_chip2_title",
      subKey: "tab_ai_chip2_sub",
      iconName: "Cpu",
      colorVariant: "blue",
    },
  },
  {
    id: "core",
    tabLabelKey: "tab_core_label",
    iconName: "Layers",
    badgeKey: "tab_core_badge",
    headlineKey: "tab_core_headline",
    metaKey: "tab_core_meta",
    tags: ["Apple Pay", "Stripe", "Square", "Branch.io", "Amplitude"],
    secondHeadlineKey: "tab_core_sub_headline",
    secondMetaKey: "tab_core_sub_meta",
    secondBadgeKey: "tab_core_sub_badge",
    floatingChip1: {
      titleKey: "tab_core_chip1_title",
      subKey: "tab_core_chip1_sub",
      iconName: "Package",
      colorVariant: "blue",
    },
    floatingChip2: {
      titleKey: "tab_core_chip2_title",
      subKey: "tab_core_chip2_sub",
      iconName: "Layers",
      colorVariant: "green",
    },
  },
];

/**
 * ============================================================================
 * 🗄️ UNIFIED PORTFOLIO DATABASE OBJECT
 * ============================================================================
 */
export const portfolioDatabase = {
  personal: PERSONAL_DETAILS,
  profiles: PROFILE_LINKS,
  contact: CONTACT_INFO,
  stats: METRIC_STATS,
  skills: SKILL_CATEGORIES,
  experiences: EXPERIENCES,
  projects: PROJECTS,
  openSource: OPEN_SOURCE_PACKAGES,
  education: EDUCATION,
  additionalInfo: ADDITIONAL_INFO,
  deviceTabs: PHONE_TABS,
};

export default portfolioDatabase;
