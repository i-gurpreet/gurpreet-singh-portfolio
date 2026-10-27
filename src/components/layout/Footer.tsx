import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO, PERSONAL_DETAILS } from '../../data/portfolioData';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  ThreadsIcon,
  XIcon,
  FacebookIcon,
} from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container minimal-footer">
      <div className="container">
        <div className="footer-minimal-inner">
          <div className="footer-identity">
            <h3 className="footer-brand-name">{PERSONAL_DETAILS.name.toUpperCase()}</h3>
            <p className="footer-brand-title">{PERSONAL_DETAILS.title}</p>
          </div>

          <div className="footer-links-row">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-minimal-link"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </a>
            <span className="footer-dot-sep">·</span>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-minimal-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>
            {CONTACT_INFO.xUrl && (
              <>
                <span className="footer-dot-sep">·</span>
                <a
                  href={CONTACT_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-minimal-link"
                  aria-label="X Profile"
                >
                  <XIcon size={16} />
                  <span>X</span>
                </a>
              </>
            )}
            {CONTACT_INFO.instagramUrl && (
              <>
                <span className="footer-dot-sep">·</span>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-minimal-link"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
              </>
            )}
            {CONTACT_INFO.threadsUrl && (
              <>
                <span className="footer-dot-sep">·</span>
                <a
                  href={CONTACT_INFO.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-minimal-link"
                  aria-label="Threads Profile"
                >
                  <ThreadsIcon size={16} />
                  <span>Threads</span>
                </a>
              </>
            )}
            {CONTACT_INFO.facebookUrl && (
              <>
                <span className="footer-dot-sep">·</span>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-minimal-link"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>
              </>
            )}
            <span className="footer-dot-sep">·</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="footer-minimal-link"
              aria-label="Send Email"
            >
              <Mail size={16} />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>


          <div className="footer-bottom-flex">
            <p className="footer-copyright">
              © 2026 {CONTACT_INFO.fullName}. {t('footer_rights')}
            </p>
            <button
              type="button"
              className="footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>{t('footer_back_to_top')}</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

