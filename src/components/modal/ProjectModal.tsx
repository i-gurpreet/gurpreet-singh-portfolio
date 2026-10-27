import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Activity,
  AlertCircle,
  Apple,
  Calendar,
  CheckCircle2,
  Compass,
  Cpu,
  Gift,
  HeartPulse,
  Home,
  Layers,
  Music,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Tag,
  Trophy,
  UserCheck,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../types';
import { Button } from '../common/Button';
import { AppleStoreIcon, GooglePlayIcon } from '../common/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    document.body.style.overflow = '';
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact';
      }
    }, 60);
  };

  if (!project) return null;

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={36} />;
      case 'Sun':
        return <Sun size={36} />;
      case 'HeartPulse':
        return <HeartPulse size={36} />;
      case 'Home':
        return <Home size={36} />;
      case 'Music':
        return <Music size={36} />;
      case 'Apple':
        return <Apple size={36} />;
      case 'ShieldCheck':
        return <ShieldCheck size={36} />;
      case 'Gift':
        return <Gift size={36} />;
      case 'Compass':
        return <Compass size={36} />;
      case 'Wrench':
        return <Wrench size={36} />;
      case 'Trophy':
        return <Trophy size={36} />;
      case 'Activity':
        return <Activity size={36} />;
      case 'Calendar':
        return <Calendar size={36} />;
      case 'Star':
        return <Star size={36} />;
      case 'Tag':
        return <Tag size={36} />;
      default:
        return <Smartphone size={36} />;
    }
  };

  const getGradientClass = (category: string) => {
    switch (category) {
      case 'ai':
        return 'gradient-variant-ai';
      case 'health':
        return 'gradient-variant-health';
      case 'lifestyle':
        return 'gradient-variant-lifestyle';
      case 'utility':
        return 'gradient-variant-utility';
      default:
        return 'gradient-variant-lifestyle';
    }
  };

  // Case study data derivation
  const problemStatement =
    project.caseStudy?.problem ||
    project.aboutProject ||
    t(`project_${project.id}_desc`);

  const architecturalSolution =
    project.caseStudy?.solution ||
    (project.keyFeatures && project.keyFeatures.length > 0
      ? project.keyFeatures.slice(0, 3).join('; ')
      : `Engineered a scalable, cross-platform mobile architecture with React Native, TypeScript, and clean modular state management across iOS and Android.`);

  const contributionStatement =
    project.caseStudy?.contribution ||
    `Led mobile application architecture and feature engineering as ${project.role}. Authored reusable component libraries, integrated cloud backends, and maintained 60 FPS performance.`;

  const challengesStatement =
    project.caseStudy?.challenges ||
    (project.previewHighlight
      ? `Optimized real-time responsiveness and data throughput: ${project.previewHighlight.tag} — ${project.previewHighlight.detail}. Solved platform-specific native rendering and memory footprint bottlenecks.`
      : `Overcame native bridge latency, optimized multi-thread rendering, and ensured seamless offline caching across both iOS and Android platforms.`);

  const resultsStatement =
    project.caseStudy?.result ||
    (project.previewHighlight
      ? `${project.previewHighlight.metric} — Successfully deployed to production with robust stability and zero critical regressions.`
      : `Shipped cross-platform production builds with high store ratings, smooth animation profiles, and high architectural maintainability.`);

  return createPortal(
    <div className="modal-backdrop backdrop-animate-in" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-animate-in" onClick={(e) => e.stopPropagation()}>
        {/* High-Contrast Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label={t('projects_modal_close')}
        >
          <X size={20} />
        </button>

        {/* Modal Header Banner */}
        <div className={`modal-header-banner ${getGradientClass(project.category)}`}>
          <div className="modal-banner-identity">
            {project.logoUrl ? (
              <img
                src={project.logoUrl}
                alt={`${project.name} logo`}
                className="modal-app-logo"
              />
            ) : (
              <div className="project-card-banner-icon">{getProjectIcon(project.iconName)}</div>
            )}
            <div className="modal-banner-text">
              <span className="case-study-badge">CASE STUDY</span>
              <h2 className="modal-title">{project.name}</h2>
              <p className="modal-role-text">{project.role} · {project.platforms.join(' & ')}</p>
            </div>
          </div>
        </div>

        {/* Content Body: Senior Engineering Case Study */}
        <div className="modal-body">
          {(project.appStoreUrl || project.playStoreUrl) && (
            <div className="modal-store-actions">
              {project.appStoreUrl && (
                <Button
                  asLink
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  leftIcon={<AppleStoreIcon size={16} />}
                >
                  {t('projects_app_store')}
                </Button>
              )}
              {project.playStoreUrl && (
                <Button
                  asLink
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  leftIcon={<GooglePlayIcon size={16} />}
                >
                  {t('projects_play_store')}
                </Button>
              )}
            </div>
          )}

          {/* Section 1: The Problem */}
          <div className="case-study-card">
            <div className="case-study-header">
              <AlertCircle size={18} className="case-study-icon warning" />
              <h3 className="case-study-heading">{t('case_study_problem')}</h3>
            </div>
            <p className="case-study-body">{problemStatement}</p>
          </div>

          {/* Section 2: The Architectural Solution */}
          <div className="case-study-card">
            <div className="case-study-header">
              <Layers size={18} className="case-study-icon brand" />
              <h3 className="case-study-heading">{t('case_study_solution')}</h3>
            </div>
            <p className="case-study-body">{architecturalSolution}</p>
          </div>

          {/* Section 3: My Contribution */}
          <div className="case-study-card">
            <div className="case-study-header">
              <UserCheck size={18} className="case-study-icon success" />
              <h3 className="case-study-heading">{t('case_study_contribution')}</h3>
            </div>
            <p className="case-study-body">{contributionStatement}</p>
          </div>

          {/* Section 4: Key Features & Architectural Capabilities */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="modal-features-section">
              <span className="modal-meta-label">KEY ARCHITECTURAL FEATURES</span>
              <div className="modal-features-list">
                {project.keyFeatures.map((feature, idx) => {
                  const parts = feature.split(': ');
                  const title = parts[0];
                  const desc = parts.slice(1).join(': ');
                  return (
                    <div key={idx} className="modal-feature-card">
                      <div className="modal-feature-icon">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        {desc ? (
                          <>
                            <h4 className="modal-feature-title">{title}</h4>
                            <p className="modal-feature-desc">{desc}</p>
                          </>
                        ) : (
                          <h4 className="modal-feature-title">{title}</h4>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 5: Engineering Challenges & Optimization */}
          <div className="case-study-card">
            <div className="case-study-header">
              <Cpu size={18} className="case-study-icon warning" />
              <h3 className="case-study-heading">{t('case_study_challenges')}</h3>
            </div>
            <p className="case-study-body">{challengesStatement}</p>
          </div>

          {/* Section 6: Results & Impact */}
          <div className="case-study-card case-study-impact-card">
            <div className="case-study-header">
              <CheckCircle2 size={18} className="case-study-icon success" />
              <h3 className="case-study-heading">{t('case_study_results')}</h3>
            </div>
            <p className="case-study-body">{resultsStatement}</p>
          </div>

          {/* Technology Stack Chips */}
          <div className="case-study-tech-section">
            <div className="modal-tech-header">
              <Cpu size={15} className="modal-tech-header-icon" />
              <span className="modal-meta-label">{t('case_study_tech')}</span>
              <span className="modal-tech-count">{project.techStack.length} Technologies</span>
            </div>
            <div className="modal-tech-grid">
              {project.techStack.map((tech) => (
                <div key={tech} className="modal-tech-pill">
                  <span className="tech-pill-indicator" />
                  <span className="tech-pill-text">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="project-card-footer modal-footer-actions">
            <Button variant="secondary" onClick={onClose}>
              {t('projects_modal_close')}
            </Button>
            <Button variant="primary" onClick={handleContactClick} icon={<Zap size={16} />}>
              {t('hero_btn_contact')}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

