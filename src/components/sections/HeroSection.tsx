import React from 'react';
import {
  Award,
  ArrowRight,
  Layers,
  MessageSquare,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../common/Button';
import { ParticleNetwork } from '../common/ParticleNetwork';
import { MobileDeviceShowcase } from '../hero/MobileDeviceShowcase';
import { OpenAIIcon, ReactNativeLogo } from '../common/SocialIcons';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const credibilityItems = [
    {
      id: 'experience',
      title: t('stat_exp_title'),
      subtitle: t('stat_exp_subtitle'),
      icon: <Award size={20} className="credibility-icon" />,
    },
    {
      id: 'platforms',
      title: t('stat_platforms_title'),
      subtitle: t('stat_platforms_subtitle'),
      icon: <Layers size={20} className="credibility-icon" />,
    },
    {
      id: 'apps',
      title: t('stat_apps_title'),
      subtitle: t('stat_apps_subtitle'),
      icon: <Smartphone size={20} className="credibility-icon" />,
    },
    {
      id: 'specialization',
      title: t('stat_specialization_title'),
      subtitle: t('stat_specialization_subtitle'),
      icon: <OpenAIIcon size={20} className="credibility-icon" />,
    },
  ];

  const renderHighlightedText = (text: string) => {
    const parts = text.split(/(AI|एआई)/g);
    return parts.map((part, index) => {
      if (part === 'AI' || part === 'एआई') {
        return (
          <span key={index} className="hero-highlight-ai">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Interactive Floating Points Network (dev-story style: connects to nearest 8 points on cursor move) */}
      <ParticleNetwork maxConnectedPoints={8} maxDistance={260} particleCount={450} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid reveal-on-scroll" ref={revealRef}>
          {/* Left Column: Senior Positioning & CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow-container">
              <span className="hero-eyebrow-badge">
                <span className="eyebrow-status-dot" />
                {t('hero_eyebrow')}
              </span>
              <span className="hero-ai-pill-badge">
                <OpenAIIcon size={14} />
                <span>OPENAI & SWIFT</span>
              </span>
            </div>

            <h1 className="hero-headline">
              {renderHighlightedText(t('hero_headline'))}
            </h1>

            <p className="hero-supporting-text">
              {t('hero_supporting')}
            </p>

            <div className="hero-cta-group">
              <Button asLink href="#projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                {t('hero_btn_work')}
              </Button>
              <Button asLink href="#contact" variant="secondary" size="lg" icon={<MessageSquare size={18} />}>
                {t('hero_btn_talk')}
              </Button>
            </div>

            <div className="hero-tech-strip">
              <span className="hero-tech-label">CORE STACK</span>
              <div className="hero-tech-badge-pills">
                <span className="hero-tech-chip">
                  <ReactNativeLogo size={13} />
                  <span>React Native</span>
                </span>
                <span className="hero-tech-chip">
                  <span>Swift (iOS)</span>
                </span>
                <span className="hero-tech-chip hero-tech-chip-ai">
                  <OpenAIIcon size={13} />
                  <span>OpenAI API</span>
                </span>
                <span className="hero-tech-chip">
                  <span>TypeScript</span>
                </span>
                <span className="hero-tech-chip">
                  <span>Firebase & Payments</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Mobile Device Showcase */}
          <div className="hero-showcase-column">
            <MobileDeviceShowcase contactInfo={CONTACT_INFO} />
          </div>
        </div>

        {/* Credibility / Stats Strip immediately below Hero */}
        <div className="credibility-strip" role="region" aria-label="Key Achievements">
          <div className="credibility-grid">
            {credibilityItems.map((item) => (
              <div key={item.id} className="credibility-card">
                <div className="credibility-icon-wrapper">
                  {item.icon}
                </div>
                <div className="credibility-text-group">
                  <div className="credibility-title">{item.title}</div>
                  <div className="credibility-subtitle">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

