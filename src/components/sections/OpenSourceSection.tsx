import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Package } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { OPEN_SOURCE_PACKAGES } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { GitHubIcon } from '../common/SocialIcons';

export const OpenSourceSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="opensource" className="section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('opensource_badge')}
            title={t('opensource_title')}
            subtitle={t('opensource_subtitle')}
          />

          <div className="packages-grid">
            {OPEN_SOURCE_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-card-header">
                  <div className="nav-actions-group">
                    <div className="nav-brand-symbol">
                      <Package size={20} />
                    </div>
                    <span className="package-name">{pkg.name}</span>
                  </div>
                  <Badge variant="green">Open Source</Badge>
                </div>

                <p className="project-desc">{t(pkg.descKey)}</p>

                {/* Install Command Box */}
                <div className="package-install-box">
                  <code className="package-command-text">{pkg.installCommand}</code>
                  <button
                    type="button"
                    className="package-copy-btn"
                    onClick={() => handleCopy(pkg.id, pkg.installCommand)}
                    title={t('pkg_copy_command')}
                    aria-label={t('pkg_copy_command')}
                  >
                    {copiedId === pkg.id ? (
                      <>
                        <Check size={14} className="package-feature-icon" />
                        <span>{t('pkg_copied_command')}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Key Features List */}
                <ul className="package-features-list">
                  {pkg.featuresKeys.map((featKey) => (
                    <li key={featKey} className="package-feature-item">
                      <Check size={16} className="package-feature-icon" />
                      <span>{t(featKey)}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="experience-tech-tags">
                  {pkg.tags.map((tag) => (
                    <Badge key={tag} variant="gray">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* External Actions */}
                <div className="package-links-row">
                  <Button
                    asLink
                    href={pkg.npmUrl}
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink size={14} />}
                  >
                    {t('pkg_view_npm')}
                  </Button>
                  <Button
                    asLink
                    href={pkg.githubUrl}
                    variant="secondary"
                    size="sm"
                    icon={<GitHubIcon size={14} />}
                  >
                    {t('pkg_view_github')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
