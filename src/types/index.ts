export type Language = 'en' | 'hi' | 'ja';

export type Theme = 'default' | 'dark' | 'light';

export type ProjectCategory = 'all' | 'ai' | 'health' | 'lifestyle' | 'utility';

export interface CaseStudyDetails {
  problem?: string;
  solution?: string;
  contribution?: string;
  architecture?: string;
  challenges?: string;
  result?: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  platforms: ('iOS' | 'Android')[];
  techStack: string[];
  featured: boolean;
  role: string;
  iconName: string;
  gradient: string;
  logoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  previewHighlight?: {
    tag: string;
    metric: string;
    detail: string;
  };
  keyPoints?: string[];
  aboutProject?: string;
  keyFeatures?: string[];
  caseStudy?: CaseStudyDetails;
}


export interface Experience {
  id: string;
  roleKey: string;
  company: string;
  companyUrl?: string;
  companyAboutKey?: string;
  location: string;
  period: string;
  isPresent: boolean;
  achievementsKeys: string[];
  techStack: string[];
}

export interface SkillCategory {
  id: string;
  nameKey: string;
  iconName: string;
  skills: Array<{
    name: string;
    proficiency: number;
    isPrimary?: boolean;
  }>;
}

export interface OpenSourcePackage {
  id: string;
  name: string;
  descKey: string;
  installCommand: string;
  npmUrl: string;
  githubUrl: string;
  tags: string[];
  featuresKeys: string[];
}

export interface EducationInfo {
  degreeKey: string;
  universityKey: string;
  locationKey: string;
}

export interface MetricStat {
  id: string;
  numericValue: number;
  suffix: string;
  labelKey: string;
  iconName: string;
}

export interface PersonalDetails {
  name: string;
  role: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  address: string;
  bio?: string;
  avatar?: string;
}

export interface ProfileLink {
  id: string;
  name: string;
  handle?: string;
  url: string;
  iconName: string;
  isPrimary?: boolean;
}

export interface ContactDetails {
  fullName: string;
  roleKey: string;
  email: string;
  phone?: string;
  location: string;
  address: string;
  linkedinUrl: string;
  githubUrl: string;
  instagramUrl?: string;
  threadsUrl?: string;
  xUrl?: string;
  facebookUrl?: string;
}

export interface AchievementItem {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: string;
}

export interface AdditionalInfo {
  achievements: string[];
  interests: string[];
  languages: string[];
}

export interface PhoneTabInfo {
  id: 'app' | 'ai' | 'core';
  tabLabelKey: string;
  iconName: string;
  badgeKey: string;
  headlineKey: string;
  metaKey: string;
  tags: string[];
  secondHeadlineKey: string;
  secondMetaKey: string;
  secondBadgeKey: string;
  floatingChip1: {
    titleKey: string;
    subKey: string;
    iconName: string;
    colorVariant: 'purple' | 'green' | 'blue';
  };
  floatingChip2: {
    titleKey: string;
    subKey: string;
    iconName: string;
    colorVariant: 'purple' | 'green' | 'blue';
  };
}

