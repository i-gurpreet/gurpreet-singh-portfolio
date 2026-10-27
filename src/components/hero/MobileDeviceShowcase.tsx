import React, { useEffect, useRef, useState } from 'react';
import {
  Battery,
  CheckCircle2,
  Cpu,
  Layers,
  Package,
  Smartphone,
  Wifi,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PHONE_TABS } from '../../data/portfolioData';
import type { ContactDetails } from '../../types';
import { OpenAIIcon, ReactNativeLogo } from '../common/SocialIcons';

interface MobileDeviceShowcaseProps {
  contactInfo: ContactDetails;
}

export const MobileDeviceShowcase: React.FC<MobileDeviceShowcaseProps> = ({ contactInfo }) => {
  const { t } = useLanguage();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isIslandExpanded, setIsIslandExpanded] = useState(false);
  const islandTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'GS';
  };

  // Dynamic live clock for device status bar
  const [currentTime, setCurrentTime] = useState<string>(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Auto-change tab every 3.8 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTabIndex((prev) => (prev + 1) % PHONE_TABS.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle Dynamic Island click animation
  const handleIslandClick = () => {
    if (islandTimerRef.current) {
      clearTimeout(islandTimerRef.current);
    }

    if (isIslandExpanded) {
      setIsIslandExpanded(false);
    } else {
      setIsIslandExpanded(true);
      // Auto-contract back to compact pill after 2.6 seconds
      islandTimerRef.current = setTimeout(() => {
        setIsIslandExpanded(false);
      }, 2600);
    }
  };

  useEffect(() => {
    return () => {
      if (islandTimerRef.current) {
        clearTimeout(islandTimerRef.current);
      }
    };
  }, []);

  const activeTab = PHONE_TABS[activeTabIndex];

  const getTabIcon = (iconName: string, size = 12) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone size={size} />;
      case 'Sparkles':
        return <OpenAIIcon size={size} />;
      case 'Layers':
        return <Layers size={size} />;
      case 'Cpu':
        return <Cpu size={size} />;
      case 'Package':
        return <Package size={size} />;
      default:
        return <Smartphone size={size} />;
    }
  };

  return (
    <div
      className="hero-visual-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Clean Mobile Device Chassis */}
      <div className="mobile-device-chassis">
        <div className="phone-screen-viewport">
          {/* Interactive Dynamic Island */}
          <div className="phone-island-wrapper">
            <button
              type="button"
              className={`phone-island ${isIslandExpanded ? 'is-expanded' : ''}`}
              onClick={handleIslandClick}
              aria-expanded={isIslandExpanded}
              aria-label="Toggle Dynamic Island"
            >
              {isIslandExpanded ? (
                <div className="phone-island-expanded-content">
                  <ReactNativeLogo size={20} className="react-native-spin-logo" />
                  <div className="phone-island-text-group">
                    <span className="phone-island-title">{t('dynamic_island_label')}</span>
                    <span className="phone-island-sub">{t('dynamic_island_sub')}</span>
                  </div>
                  <span className="phone-island-dot" />
                </div>
              ) : (
                <>
                  <span className="phone-island-camera" />
                  <span className="phone-island-dot" />
                </>
              )}
            </button>
          </div>

          {/* Status Bar with Dynamic Real-Time Clock */}
          <div className="phone-status-row">
            <span>{currentTime}</span>
            <div className="phone-status-icons">
              <Wifi size={12} />
              <Battery size={13} />
            </div>
          </div>

          {/* App Profile Bar */}
          <div className="phone-app-header">
            <div className="phone-profile-snippet">
              <div className="phone-avatar-circle">{getInitials(contactInfo.fullName)}</div>
              <div className="phone-profile-names">
                <span className="phone-dev-name">{contactInfo.fullName}</span>
                <span className="phone-dev-role">{t('hero_role_badge')}</span>
              </div>
            </div>
            <CheckCircle2 size={16} className="package-feature-icon" />
          </div>

          {/* Dynamic Tab Cards View with animation key */}
          <div key={activeTab.id} className="tab-content-enter">
            {/* Primary Live Feature Card */}
            <div className="phone-live-card">
              <div className="phone-card-headline">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {activeTab.id === 'ai' && <OpenAIIcon size={14} />}
                  {t(activeTab.headlineKey)}
                </span>
                <span className="phone-pill-badge">{t(activeTab.badgeKey)}</span>
              </div>
              <p className="phone-card-meta">{t(activeTab.metaKey)}</p>
              <div className="phone-mini-tags">
                {activeTab.tags.map((tag) => (
                  <span key={tag} className="phone-mini-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Metric Card */}
            <div className="phone-live-card">
              <div className="phone-card-headline">
                <span>{t(activeTab.secondHeadlineKey)}</span>
                <span className="phone-pill-badge phone-pill-badge-green">{t(activeTab.secondBadgeKey)}</span>
              </div>
              <p className="phone-card-meta">{t(activeTab.secondMetaKey)}</p>
            </div>
          </div>

          {/* Interactive Bottom Nav Tabs */}
          <nav className="phone-bottom-nav" aria-label="Device tabs">
            {PHONE_TABS.map((tab, idx) => {
              const isActive = idx === activeTabIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`phone-nav-action ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTabIndex(idx)}
                  aria-pressed={isActive}
                >
                  {getTabIcon(tab.iconName, 13)}
                  <span>{t(tab.tabLabelKey)}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};
