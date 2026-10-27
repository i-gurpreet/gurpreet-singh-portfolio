import React, { useState } from 'react';
import {
  Activity,
  Apple,
  ArrowRight,
  Calendar,
  Compass,
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
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project, ProjectCategory } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { AppleStoreIcon, GeminiAIIcon, GooglePlayIcon } from '../common/SocialIcons';
import { ProjectModal } from '../modal/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: Array<{ key: ProjectCategory; labelKey: string }> = [
    { key: 'all', labelKey: 'projects_filter_all' },
    { key: 'ai', labelKey: 'projects_filter_ai' },
    { key: 'health', labelKey: 'projects_filter_health' },
    { key: 'lifestyle', labelKey: 'projects_filter_lifestyle' },
    { key: 'utility', labelKey: 'projects_filter_utility' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (activeCategory === 'ai') {
            return p.category === 'ai' || p.techStack.includes('OpenAI');
          }
          return p.category === activeCategory;
        });

  const getProjectIcon = (iconName: string, size = 32) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={size} />;
      case 'Sun':
        return <Sun size={size} />;
      case 'HeartPulse':
        return <HeartPulse size={size} />;
      case 'Home':
        return <Home size={size} />;
      case 'Music':
        return <Music size={size} />;
      case 'Apple':
        return <Apple size={size} />;
      case 'ShieldCheck':
        return <ShieldCheck size={size} />;
      case 'Gift':
        return <Gift size={size} />;
      case 'Compass':
        return <Compass size={size} />;
      case 'Wrench':
        return <Wrench size={size} />;
      case 'Trophy':
        return <Trophy size={size} />;
      case 'Activity':
        return <Activity size={size} />;
      case 'Calendar':
        return <Calendar size={size} />;
      case 'Star':
        return <Star size={size} />;
      case 'Tag':
        return <Tag size={size} />;
      default:
        return <Smartphone size={size} />;
    }
  };

  const getGradientVariant = (cat: string) => {
    switch (cat) {
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

  return (
    <section id="projects" className="section selected-work-section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('projects_badge')}
            title={t('work_heading')}
            subtitle={t('work_subtitle')}
          />

          {/* Filter Pills */}
          <div className="projects-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`filter-pill ${activeCategory === tab.key ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>

          {/* Alternating Editorial Project Cards List */}
          <div className="editorial-projects-container">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const shortDesc =
                project.aboutProject
                  ? project.aboutProject.split('.')[0] + '.'
                  : t(`project_${project.id}_desc`);

              return (
                <article
                  key={project.id}
                  className={`editorial-project-card ${isEven ? 'card-orient-normal' : 'card-orient-reversed'}`}
                >
                  {/* Visual Side: Polished Mobile Device Mockup */}
                  <div
                    className="editorial-device-visual"
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedProject(project);
                      }
                    }}
                    aria-label={`View case study for ${project.name}`}
                  >
                    <div className="editorial-device-glow" />
                    <div className={`editorial-phone-shell ${getGradientVariant(project.category)}`}>
                      <div className="phone-island-notch">
                        <div className="notch-camera-dot" />
                      </div>
                      <div className="phone-screen-content">
                        <div className="phone-screen-header">
                          <span className="screen-status-time">9:41</span>
                          <span className="screen-badge-platform">{project.platforms.join(' / ')}</span>
                        </div>

                        <div className="phone-screen-body">
                          {project.logoUrl ? (
                            <img
                              src={project.logoUrl}
                              alt={`${project.name} app logo`}
                              className="phone-screen-logo"
                              loading="lazy"
                            />
                          ) : (
                            <div className="phone-screen-icon">
                              {getProjectIcon(project.iconName, 44)}
                            </div>
                          )}
                          <h4 className="phone-screen-app-name">{project.name}</h4>
                          <span className="phone-screen-role-tag">{project.role}</span>

                          {project.previewHighlight && (
                            <div className="phone-screen-metric-card">
                              <span className="phone-metric-tag">{project.previewHighlight.tag}</span>
                              <span className="phone-metric-value">{project.previewHighlight.metric}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Side: Editorial Project Narrative */}
                  <div className="editorial-project-info">
                    <div className="editorial-category-row">
                      <span className={`editorial-cat-badge cat-${project.category}`}>
                        {t(`projects_filter_${project.category}`)}
                      </span>
                      {(project.category === 'ai' ||
                        project.techStack.some((tech) =>
                          /ai|chatgpt|gemini|speech/i.test(tech)
                        )) && (
                        <span className="editorial-ai-badge">
                          <GeminiAIIcon size={13} />
                          <span>AI POWERED</span>
                        </span>
                      )}
                      {project.featured && (
                        <span className="editorial-featured-badge">
                          <Sparkles size={13} />
                          <span>FEATURED</span>
                        </span>
                      )}
                    </div>

                    <h3 className="editorial-project-title">{project.name}</h3>

                    {/* Contribution Tag */}
                    <div className="editorial-contribution-row">
                      <Layers size={14} className="editorial-contrib-icon" />
                      <span className="editorial-contrib-label">{t('work_contribution_label')}:</span>
                      <span className="editorial-contrib-value">{project.role}</span>
                    </div>

                    {/* Short Description focusing on product value */}
                    <p className="editorial-project-desc">{shortDesc}</p>

                    {/* Keypoints Pills */}
                    {project.keyPoints && project.keyPoints.length > 0 && (
                      <div className="editorial-keypoints-cloud">
                        {project.keyPoints.map((point, idx) => (
                          <span key={idx} className="editorial-keypoint-chip">
                            {point}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="editorial-tech-list">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="editorial-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions: Case Study (Primary) + Store Links (Secondary) */}
                    <div className="editorial-actions-bar">
                      <button
                        type="button"
                        className="btn btn-primary editorial-case-study-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>{t('work_cta_case_study')}</span>
                        <ArrowRight size={16} />
                      </button>

                      <div className="editorial-store-links">
                        {project.appStoreUrl && (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-store-btn"
                            aria-label={`${project.name} on App Store`}
                          >
                            <AppleStoreIcon size={16} />
                            <span>App Store</span>
                          </a>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-store-btn"
                            aria-label={`${project.name} on Google Play`}
                          >
                            <GooglePlayIcon size={16} />
                            <span>Google Play</span>
                          </a>
                        )}
                        {!project.appStoreUrl && !project.playStoreUrl && (
                          <span className="editorial-dev-pill">
                            <span className="status-indicator-dot" />
                            App Store & Google Play
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

