import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import type { Theme } from '../../types';

interface ThemeOption {
  code: Theme;
  labelKey: string;
  Icon: typeof Moon;
}

const THEME_OPTIONS: ThemeOption[] = [
  { code: 'default', labelKey: 'theme_default', Icon: Laptop },
  { code: 'dark', labelKey: 'theme_dark', Icon: Moon },
  { code: 'light', labelKey: 'theme_light', Icon: Sun },
];

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = THEME_OPTIONS.find((opt) => opt.code === theme) || THEME_OPTIONS[0];
  const CurrentIcon = currentOption.Icon;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Theme) => {
    setTheme(code);
    setIsOpen(false);
  };

  return (
    <div className="control-dropdown-wrapper" ref={containerRef}>
      <button
        type="button"
        className="control-dropdown-btn theme-dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('theme_toggle_aria')}
        aria-expanded={isOpen}
      >
        <CurrentIcon size={16} className="theme-current-icon" />
        <span className="theme-btn-label">{t(currentOption.labelKey)}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="control-dropdown-menu modal-animate-in">
          {THEME_OPTIONS.map((opt) => {
            const OptionIcon = opt.Icon;
            const isActive = theme === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                className={`control-dropdown-item ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelect(opt.code)}
              >
                <OptionIcon size={15} />
                <span>{t(opt.labelKey)}</span>
                {isActive && <Check size={14} className="control-dropdown-check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
