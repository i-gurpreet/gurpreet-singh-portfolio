import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <div className={`section-header-container ${align === 'left' ? 'align-left' : ''}`}>
      <Badge variant="brand">{badgeText}</Badge>
      <h2 className="section-title animated-gradient-text">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
