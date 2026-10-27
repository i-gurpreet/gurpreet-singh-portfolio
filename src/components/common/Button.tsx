import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  icon,
  leftIcon,
  children,
  className = '',
  ...props
}) => {
  const combinedClassName = `btn btn-${variant} btn-${size} shimmer-trigger ${className}`.trim();

  if (asLink && href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || 'noopener noreferrer'}
      >
        {leftIcon || icon}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {leftIcon || icon}
      {children}
    </button>
  );
};
