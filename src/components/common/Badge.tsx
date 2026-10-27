import React from 'react';

interface BadgeProps {
  variant?: 'brand' | 'gray' | 'purple' | 'green';
  hasPulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  hasPulse = false,
  children,
  className = '',
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {hasPulse && <span className="pulse-indicator" />}
      {children}
    </span>
  );
};
