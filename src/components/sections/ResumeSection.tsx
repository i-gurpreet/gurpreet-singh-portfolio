import React, { useEffect, useRef, useState } from 'react';
import { Download, Eye, FileText, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import {
  PERSONAL_DETAILS,
  RESUME_FILENAME,
  RESUME_PATH,
} from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';

export const ResumeSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [loadPreview, setLoadPreview] = useState(false);

  useEffect(() => {
    const target = previewRef.current;
    if (!target || loadPreview) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadPreview(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [loadPreview]);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('resume_badge')}
            title={t('resume_title')}
            subtitle={t('resume_subtitle')}
          />

          <div className="editorial-projects-container">
            <article className="editorial-project-card resume-editorial-card">
              <a
                className="editorial-device-visual resume-doc-visual"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('resume_btn_view')}
              >
                <div className="editorial-device-glow" />
                <div className="resume-doc-shell">
                  <div className="resume-doc-chrome">
                    <span className="resume-doc-dot" />
                    <span className="resume-doc-dot" />
                    <span className="resume-doc-dot" />
                    <span className="resume-doc-chrome-label">
                      <FileText size={12} />
                      {RESUME_FILENAME}
                    </span>
                  </div>
                  <div className="resume-doc-viewport" ref={previewRef}>
                    {loadPreview ? (
                      <iframe
                        src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={t('resume_title')}
                        className="resume-doc-iframe"
                        loading="lazy"
                        tabIndex={-1}
                      />
                    ) : (
                      <div className="resume-doc-placeholder" aria-hidden="true">
                        <FileText size={36} />
                        <span>{RESUME_FILENAME}</span>
                      </div>
                    )}
                    <div className="resume-doc-overlay" aria-hidden="true">
                      <span className="resume-doc-overlay-pill">
                        <Eye size={14} />
                        {t('resume_btn_view')}
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              <div className="editorial-project-info">
                <div className="editorial-category-row">
                  <span className="editorial-cat-badge cat-utility">PDF</span>
                  <span className="editorial-featured-badge">
                    <FileText size={13} />
                    <span>CV</span>
                  </span>
                </div>

                <h3 className="editorial-project-title">{PERSONAL_DETAILS.name}</h3>

                <div className="editorial-contribution-row">
                  <Layers size={14} className="editorial-contrib-icon" />
                  <span className="editorial-contrib-label">{t('work_contribution_label')}:</span>
                  <span className="editorial-contrib-value">{PERSONAL_DETAILS.role}</span>
                </div>

                <p className="editorial-project-desc">{t('resume_preview_desc')}</p>

                <div className="editorial-tech-list">
                  <span className="editorial-tech-pill">React Native</span>
                  <span className="editorial-tech-pill">Swift (iOS)</span>
                  <span className="editorial-tech-pill">TypeScript</span>
                  <span className="editorial-tech-pill">7+ Years</span>
                </div>

                <div className="resume-cta-group">
                  <Button
                    asLink
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    leftIcon={<Eye size={18} />}
                  >
                    {t('resume_btn_view')}
                  </Button>
                  <Button
                    asLink
                    href={RESUME_PATH}
                    download={RESUME_FILENAME}
                    variant="secondary"
                    size="lg"
                    leftIcon={<Download size={18} />}
                  >
                    {t('resume_btn_download')}
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
