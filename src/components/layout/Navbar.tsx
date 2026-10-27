import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSelector } from '../common/LanguageSelector';
import { ThemeToggle } from '../common/ThemeToggle';
import { CONTACT_INFO, PERSONAL_DETAILS } from '../../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from '../common/SocialIcons';


export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', labelKey: 'nav_home' },
    { href: '#projects', labelKey: 'nav_work' },
    { href: '#experience', labelKey: 'nav_experience' },
    { href: '#skills', labelKey: 'nav_skills' },
    { href: '#about', labelKey: 'nav_about' },
    { href: '#achievements', labelKey: 'nav_achievements' },
    { href: '#contact', labelKey: 'nav_contact' },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="nav-brand" onClick={handleNavLinkClick}>
          <div className="nav-brand-symbol">GS</div>
          <div className="nav-brand-text">
            <span className="nav-brand-title">{PERSONAL_DETAILS.name.toUpperCase()}</span>
            <span className="nav-brand-role">{PERSONAL_DETAILS.role}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link-item">
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Socials, Language, Theme, Mobile Toggle) */}
        <div className="nav-actions-group">
          <div className="nav-social-icons">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>

          <div className="nav-divider-v" />

          <LanguageSelector />
          <ThemeToggle />
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleNavLinkClick}
          >
            {t(link.labelKey)}
          </a>
        ))}
        <div className="mobile-drawer-socials">
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};
