import React from 'react';
import {
  Award,
  CheckCircle2,
  CreditCard,
  Dumbbell,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ADDITIONAL_INFO } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Badge } from '../common/Badge';
import { SectionHeading } from '../common/SectionHeading';

export const AchievementsSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const achievementCards = [
    {
      id: 'apps',
      icon: <Smartphone size={24} />,
      title: t('achievements_app_count'),
      desc: t('achievements_app_desc'),
      tag: 'Scale',
      variant: 'pillar-variant-arch',
    },
    {
      id: 'payments',
      icon: <CreditCard size={24} />,
      title: t('achievements_payments'),
      desc: t('achievements_payments_desc'),
      tag: 'FinTech',
      variant: 'pillar-variant-perf',
    },
    {
      id: 'ai',
      icon: <Sparkles size={24} />,
      title: t('achievements_ai'),
      desc: t('achievements_ai_desc'),
      tag: 'OpenAI',
      variant: 'pillar-variant-ai',
    },
    {
      id: 'stability',
      icon: <ShieldCheck size={24} />,
      title: t('achievements_stability'),
      desc: t('achievements_stability_desc'),
      tag: 'Reliability',
      variant: 'pillar-variant-perf',
    },
    {
      id: 'mentorship',
      icon: <Users size={24} />,
      title: t('achievements_mentorship'),
      desc: t('achievements_mentorship_desc'),
      tag: 'Leadership',
      variant: 'pillar-variant-arch',
    },
    {
      id: 'stores',
      icon: <Award size={24} />,
      title: 'Store Publishing & Maintenance',
      desc: 'Published and actively maintained multiple production applications on both the Apple App Store and Google Play Store.',
      tag: 'App Store Connect',
      variant: 'pillar-variant-ai',
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('achievements_badge')}
            title={t('achievements_title')}
            subtitle={t('achievements_subtitle')}
          />

          {/* Grid of Key Achievements */}
          <div className="about-pillars-grid senior-pillars-grid">
            {achievementCards.map((item) => (
              <div key={item.id} className={`about-pillar-card ${item.variant}`}>
                <div className="pillar-top-glow" />

                <div className="pillar-header">
                  <div className="pillar-icon-box">{item.icon}</div>
                  <h3 className="pillar-title">{item.title}</h3>
                </div>

                <div className="pillar-body">
                  <p className="pillar-desc">{item.desc}</p>
                </div>

                <div className="pillar-tags-row">
                  <span className="pillar-mini-tag">{item.tag}</span>
                  <span className="pillar-mini-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={12} className="package-feature-icon" />
                    <span>Verified Production</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Languages & Interests Dual Sub-Section */}
          <div className="achievements-meta-grid" style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Languages Card */}
            <div className="package-card" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div className="nav-brand-symbol" style={{ width: '42px', height: '42px' }}>
                  <Globe2 size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{t('languages_title')}</h4>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)' }}>Communication & Collaboration</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ADDITIONAL_INFO.languages.map((lang) => (
                  <Badge key={lang} variant="purple">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Interests Card */}
            <div className="package-card" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div className="nav-brand-symbol" style={{ width: '42px', height: '42px' }}>
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{t('interests_title')}</h4>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)' }}>Passions & Personal Focus</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {ADDITIONAL_INFO.interests.map((interest) => (
                  <Badge key={interest} variant="brand">
                    {interest === 'Fitness' ? <Dumbbell size={12} className="inline-icon" /> : <Smartphone size={12} className="inline-icon" />}
                    <span>{interest}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
