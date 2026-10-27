import React from 'react';
import { Cpu, Layers, Quote, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { PERSONAL_DETAILS } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const pillars = [
    {
      id: 'arch',
      icon: <Layers size={26} />,
      title: 'Product Architecture',
      desc: 'Architecting scalable cross-platform mobile systems with clean separation of concerns, modular domains, and predictive state flow.',
      techPills: ['Clean Architecture', 'Zustand / Redux', 'Modular Domains', 'Offline-First'],
      variantClass: 'pillar-variant-arch',
    },
    {
      id: 'ai-integration',
      icon: <Sparkles size={26} />,
      title: 'Generative AI & Mobile Intelligence',
      desc: 'Seamlessly embedding state-of-the-art Generative AI, LLM agents, Vision models, and multimodal pipelines into fluid, responsive native mobile applications.',
      techPills: ['OpenAI & Gemini APIs', 'Vision AI Models', 'Prompt Engineering', 'On-Device ML'],
      variantClass: 'pillar-variant-ai',
    },
    {
      id: 'perf',
      icon: <Cpu size={26} />,
      title: 'Runtime & Memory Performance',
      desc: 'Relentlessly optimizing startup latency, JS-native bridge throughput, Hermes bytecode, frame drops, and background memory consumption.',
      techPills: ['Hermes Engine', 'Reanimated 3', '60/120 FPS Profiling', 'dSYM Tracking'],
      variantClass: 'pillar-variant-perf',
    },
    {
      id: 'collaboration',
      icon: <Users size={26} />,
      title: 'Cross-Functional Partnership',
      desc: 'Collaborating closely with product managers, UI/UX designers, and backend teams to de-risk delivery and deliver exceptional native experiences.',
      techPills: ['Product Mindset', 'Figma Alignment', 'API Contracts', 'Agile Delivery'],
      variantClass: 'pillar-variant-arch',
    },
  ];

  return (
    <section id="about" className="section about-senior-section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('about_badge')}
            title={t('about_title')}
            subtitle={t('about_subtitle')}
          />

          {/* Prominent Executive Engineering Statement */}
          <div className="about-statement-card">
            <div className="statement-quote-icon">
              <Quote size={24} />
            </div>
            <blockquote className="about-statement-text">
              &ldquo;{t('about_statement')}&rdquo;
            </blockquote>
            <div className="about-statement-author">
              <span className="author-name">{PERSONAL_DETAILS.name}</span>
              <span className="author-role">{PERSONAL_DETAILS.title}</span>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="about-pillars-grid senior-pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.id} className={`about-pillar-card ${pillar.variantClass}`}>
                <div className="pillar-top-glow" />

                <div className="pillar-header">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>

                <div className="pillar-body">
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>

                <div className="pillar-tags-row">
                  {pillar.techPills.map((tech) => (
                    <span key={tech} className="pillar-mini-tag">
                      {tech}
                    </span>
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

