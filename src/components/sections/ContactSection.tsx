import React, { useState } from 'react';
import { Check, Copy, Home, Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO, PROFILE_LINKS } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  ThreadsIcon,
  XIcon,
  FacebookIcon,
} from '../common/SocialIcons';
import { EducationSection } from './EducationSection';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  // Direct contact channels from resume
  const contactItems = [
    {
      key: 'email',
      icon: <Mail size={22} />,
      labelKey: 'contact_card_email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      key: 'phone',
      icon: <PhoneCall size={22} />,
      labelKey: 'contact_card_phone',
      value: CONTACT_INFO.phone || '7988898159',
      href: `tel:+917988898159`,
    },
    {
      key: 'location',
      icon: <MapPin size={22} />,
      labelKey: 'contact_card_location',
      value: CONTACT_INFO.location,
      href: undefined,
    },
    {
      key: 'address',
      icon: <Home size={22} />,
      labelKey: 'contact_card_address',
      value: CONTACT_INFO.address,
      href: undefined,
    },
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GitHubIcon size={18} />;
      case 'Linkedin':
        return <LinkedInIcon size={18} />;
      case 'Instagram':
        return <InstagramIcon size={18} />;
      case 'Threads':
        return <ThreadsIcon size={18} />;
      case 'X':
        return <XIcon size={18} />;
      case 'Facebook':
        return <FacebookIcon size={18} />;
      default:
        return null;
    }
  };

  // Social channels derived directly from database PROFILE_LINKS
  const socialChannels = PROFILE_LINKS.filter(
    (item) => item.id !== 'email' && item.id !== 'phone' && Boolean(item.url)
  ).map((item) => ({
    name: item.name,
    handle: item.handle || item.name,
    url: item.url,
    icon: getSocialIcon(item.iconName),
  }));

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="reveal-on-scroll" ref={revealRef}>
          <SectionHeading
            badgeText={t('contact_badge')}
            title={t('cta_heading')}
            subtitle={t('cta_subtitle')}
          />

          {/* Senior Quick Action Bar */}
          <div className="contact-quick-actions">
            <Button
              asLink
              href={`mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20-%20Gurpreet%20Singh`}
              variant="primary"
              size="lg"
              icon={<Send size={18} />}
            >
              {t('cta_btn_touch')}
            </Button>
            <Button
              asLink
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<LinkedInIcon size={18} />}
            >
              {t('cta_btn_linkedin')}
            </Button>
          </div>

          <div className="contact-grid">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-cards-column">
              {contactItems.map((item) => (
                <div
                  key={item.key}
                  className="contact-info-card"
                  onClick={() => handleCopy(item.key, item.value)}
                  title={t('contact_copy_tooltip')}
                >
                  <div className="contact-card-icon">{item.icon}</div>
                  <div className="contact-card-text">
                    <div className="contact-card-label">{t(item.labelKey)}</div>
                    <div className="contact-card-value">{item.value}</div>
                  </div>
                  <div className="control-dropdown-check">
                    {copiedKey === item.key ? (
                      <Check size={16} className="package-feature-icon" />
                    ) : (
                      <Copy size={16} className="text-secondary" />
                    )}
                  </div>
                </div>
              ))}

              {/* Social Profiles Grid */}
              <div className="contact-social-channels">
                <div className="contact-social-heading">CONNECT ACROSS NETWORKS</div>
                <div className="contact-social-grid">
                  {socialChannels.map((chan) => (
                    <a
                      key={chan.name}
                      href={chan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                      aria-label={`${chan.name} profile`}
                    >
                      <div className="contact-social-icon">{chan.icon}</div>
                      <div className="contact-social-meta">
                        <span className="contact-social-name">{chan.name}</span>
                        <span className="contact-social-handle">{chan.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <EducationSection />
            </div>

            {/* Right Column: Interactive Message Form */}
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  {t('contact_form_name_label')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={t('contact_form_name_placeholder')}
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  {t('contact_form_email_label')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={t('contact_form_email_placeholder')}
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {t('contact_form_message_label')}
                </label>
                <textarea
                  id="contact-message"
                  required
                  placeholder={t('contact_form_message_placeholder')}
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {formSubmitted && (
                <div className="form-status-alert modal-animate-in">
                  {t('contact_form_success')}
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" icon={<Send size={18} />}>
                {t('contact_form_submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
