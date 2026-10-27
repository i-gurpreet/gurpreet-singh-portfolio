import React from 'react';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EXPERIENCES } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Badge } from '../common/Badge';
import { SectionHeading } from '../common/SectionHeading';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('experience_badge')}
            title={t('experience_title')}
            subtitle={t('experience_subtitle')}
          />

          <div className="experience-timeline">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-marker" />
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <div className="experience-company-wrapper">
                        <h3 className="experience-company-name">{exp.company}</h3>
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-company-link"
                            title={`${t('exp_company_visit')}: ${exp.company}`}
                            aria-label={`${t('exp_company_visit')}: ${exp.company}`}
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                      <div className="experience-designation">{t(exp.roleKey)}</div>
                    </div>

                    <div className="nav-actions-group">
                      {exp.isPresent && (
                        <Badge variant="brand" hasPulse>
                          {t('exp_present_badge')}
                        </Badge>
                      )}
                      <div className="experience-period-badge">
                        <Calendar size={12} className="inline-icon" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-meta-row">
                    <Badge variant="gray">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </Badge>
                  </div>

                  {exp.companyAboutKey && (
                    <div className="experience-company-about">
                      <span className="experience-about-tag">About Company</span>
                      <p className="experience-about-text">{t(exp.companyAboutKey)}</p>
                    </div>
                  )}

                  <ul className="experience-achievements-list">
                    {exp.achievementsKeys.map((key) => (
                      <li key={key} className="experience-achievement-item">
                        {t(key)}
                      </li>
                    ))}
                  </ul>

                  <div className="experience-tech-tags">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="gray">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
