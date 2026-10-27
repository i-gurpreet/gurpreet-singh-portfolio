import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EDUCATION } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Badge } from '../common/Badge';

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <div className="education-wrapper">
      <div className="reveal-on-scroll" ref={revealRef}>
        <div className="education-card">
          <div className="education-icon-box">
            <GraduationCap size={32} />
          </div>

          <div>
            <Badge variant="purple">{t('education_badge')}</Badge>
            <h3 className="education-degree">{t(EDUCATION.degreeKey)}</h3>
            <p className="education-university">{t(EDUCATION.universityKey)}</p>
            <p className="education-location">
              <MapPin size={12} className="inline-icon" />
              <span>{t(EDUCATION.locationKey)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
