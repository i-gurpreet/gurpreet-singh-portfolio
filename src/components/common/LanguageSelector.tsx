import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGE_OPTIONS } from '../../locales';
import type { Language } from '../../types';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="control-dropdown-wrapper" ref={containerRef}>
      <button
        type="button"
        className="control-dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language_selector_aria')}
        aria-expanded={isOpen}
      >
        <Globe size={16} />
        <span>{currentOption.label}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="control-dropdown-menu modal-animate-in">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              className={`control-dropdown-item ${language === opt.code ? 'is-active' : ''}`}
              onClick={() => handleSelect(opt.code)}
            >
              <span>{opt.flag}</span>
              <span>{opt.label}</span>
              {language === opt.code && <Check size={14} className="control-dropdown-check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
