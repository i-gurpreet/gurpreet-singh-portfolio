import React from 'react';
import {
  Binary,
  Bot,
  Cpu,
  FileCode,
  Zap,
} from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../common/SectionHeading';

export const ExploringSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const exploringCards = [
    {
      id: 'new-arch',
      icon: <Zap size={24} />,
      titleKey: 'exploring_1_title',
      descKey: 'exploring_1_desc',
      badge: 'Fabric & TurboModules',
      tag: 'New Architecture',
    },
    {
      id: 'perf-opt',
      icon: <Cpu size={24} />,
      titleKey: 'exploring_2_title',
      descKey: 'exploring_2_desc',
      badge: 'Hermes & Bytecode',
      tag: 'Performance',
    },
    {
      id: 'native-modules',
      icon: <Binary size={24} />,
      titleKey: 'exploring_3_title',
      descKey: 'exploring_3_desc',
      badge: 'Swift & Kotlin JSI',
      tag: 'Native Bridging',
    },
    {
      id: 'ai-mobile',
      icon: <Bot size={24} />,
      titleKey: 'exploring_4_title',
      descKey: 'exploring_4_desc',
      badge: 'On-Device LLMs',
      tag: 'Mobile AI',
    },
    {
      id: 'ts-patterns',
      icon: <FileCode size={24} />,
      titleKey: 'exploring_5_title',
      descKey: 'exploring_5_desc',
      badge: 'Type-Safe Contracts',
      tag: 'TypeScript',
    },
  ];

  return (
    <section id="exploring" className="section exploring-section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('exploring_badge')}
            title={t('exploring_title')}
            subtitle={t('exploring_subtitle')}
          />

          <div className="exploring-cards-grid">
            {exploringCards.map((item) => (
              <div key={item.id} className="exploring-card">
                <div className="exploring-card-top">
                  <div className="exploring-icon-box">
                    {item.icon}
                  </div>
                  <span className="exploring-tag">{item.tag}</span>
                </div>

                <div className="exploring-card-body">
                  <h3 className="exploring-title">{t(item.titleKey)}</h3>
                  <p className="exploring-desc">{t(item.descKey)}</p>
                </div>

                <div className="exploring-card-footer">
                  <span className="exploring-badge-pill">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
