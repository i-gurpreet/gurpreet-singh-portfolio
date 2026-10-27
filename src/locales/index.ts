import type { Language } from '../types';
import { en } from './en';
import { hi } from './hi';
import { ja } from './ja';

export const translations: Record<Language, Record<string, string>> = {
  en,
  hi,
  ja,
};

export const LANGUAGE_OPTIONS: Array<{ code: Language; label: string; flag: string }> = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export const getTranslation = (lang: Language, key: string): string => {
  const dict = translations[lang] || translations.en;
  return dict[key] || translations.en[key] || key;
};
