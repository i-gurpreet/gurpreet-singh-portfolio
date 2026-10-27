import React from 'react';
import { Code2, CreditCard, Layers, Server, Smartphone, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Badge } from '../common/Badge';
import { SectionHeading } from '../common/SectionHeading';
import { GeminiAIIcon, OpenAIIcon } from '../common/SocialIcons';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone size={22} />;
      case 'Sparkles':
        return <GeminiAIIcon size={22} />;
      case 'Code2':
        return <Code2 size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'Server':
        return <Server size={22} />;
      case 'CreditCard':
        return <CreditCard size={22} />;
      case 'Terminal':
        return <Terminal size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  const getSkillLogo = (skillName: string) => {
    if (/openai|chatgpt/i.test(skillName)) {
      return <OpenAIIcon size={14} className="skill-logo-icon" />;
    }
    if (/gemini/i.test(skillName)) {
      return <GeminiAIIcon size={14} className="skill-logo-icon" />;
    }
    return null;
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('skills_badge')}
            title={t('skills_title')}
            subtitle={t('skills_subtitle')}
          />

          <div className="skills-category-grid">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-category-title-group">
                    <div className="skill-category-icon">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="pillar-title">{t(category.nameKey)}</h3>
                  </div>
                  <Badge variant="gray">
                    {category.skills.length} {t('skills_count_suffix')}
                  </Badge>
                </div>

                <div className="skill-chips-cloud">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skill-chip ${skill.isPrimary ? 'skill-chip-core' : ''}`}
                    >
                      {getSkillLogo(skill.name) || (
                        <span
                          className={skill.isPrimary ? 'skill-dot-core' : 'skill-dot-standard'}
                          aria-hidden="true"
                        />
                      )}
                      <span className="skill-chip-title">{skill.name}</span>
                      {skill.isPrimary && (
                        <span className="skill-chip-tag">{t('skills_core_badge')}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
