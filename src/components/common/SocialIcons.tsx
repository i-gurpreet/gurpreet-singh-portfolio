import React from 'react';

export const GitHubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ThreadsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 192 192"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4184 44.7442 97.2748 44.7442 97.1312 44.745C75.8068 44.8845 59.8837 57.3486 58.7497 80.0886C57.6534 102.073 70.8258 116.586 91.7582 116.89C103.58 117.062 113.882 112.592 120.916 104.301L107.018 94.6136C102.164 100.334 94.6946 102.502 86.8291 102.39C74.6049 102.213 67.4398 93.3032 68.0494 80.1293C68.6888 66.2755 77.9272 57.8732 91.5647 57.7788C91.6669 57.778 91.7691 57.778 91.8714 57.7788C108.356 57.8863 118.232 68.8055 119.263 88.7492C111.458 89.2882 103.228 90.7301 95.0298 93.2081C73.8447 99.6083 65.7483 113.877 68.2173 126.966C70.6127 139.674 83.7431 147.25 98.667 147.25C118.497 147.25 131.789 135.539 137.477 119.866C145.419 123.639 152.029 128.988 156.402 135.655C161.761 143.821 163.666 153.256 161.803 162.43C158.455 178.91 138.831 192 97.5619 192C45.3117 192 2 153.861 2 96C2 38.139 45.3117 0 97.5619 0C150.046 0 192 38.375 192 96C192 108.271 189.654 120.378 185.034 131.968L168.324 125.321C171.748 116.31 173.491 106.376 173.491 96C173.491 48.0673 138.857 18.509 97.5619 18.509C55.0742 18.509 20.509 48.3377 20.509 96C20.509 143.662 55.0742 173.491 97.5619 173.491C131.42 173.491 145.027 163.504 146.993 153.823C148.077 148.487 146.852 142.923 143.435 137.712C139.73 132.062 133.729 127.319 125.992 123.774C121.282 135.253 111.455 142.748 97.667 142.748C86.7118 142.748 78.4735 137.95 76.9912 130.091C75.3194 121.229 82.0298 110.82 98.7187 105.776C105.999 103.575 113.354 102.261 120.312 101.764C121.969 111.025 125.688 118.895 131.066 124.966C126.793 133.228 118.868 139.262 108.629 141.459L106.183 129.849C112.593 128.473 117.755 124.584 120.73 118.995C118.423 116.592 116.586 113.791 115.289 110.669C109.845 117.659 101.777 121.583 91.808 121.583C75.2954 121.583 63.8824 109.919 64.767 92.1905C65.733 72.8277 79.4673 62.28 97.1068 62.1607C97.2584 62.1597 97.41 62.1597 97.5619 62.1607C118.243 62.2928 130.298 75.3789 131.579 97.7719C134.908 99.2081 138.257 100.79 141.537 88.9883Z" />
  </svg>
);

export const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const ReactNativeLogo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const AppleStoreIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.61 1.34-.55.63-1.03 1.66-.9 2.69 1 .08 2.02-.51 2.58-1.18z" />
  </svg>
);

export const GooglePlayIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.398-.59-.972-.59-1.636V3.45c0-.664.225-1.238.59-1.636zM15.207 13.414l2.584 2.585-11.89 6.812 9.306-9.397zm0-2.828L5.901 1.189l11.89 6.812-2.584 2.585zm1.414 1.414l3.666-2.1c.907-.52 1.463-.223 1.463.815v2.57c0 1.038-.556 1.335-1.463.815l-3.666-2.1z" />
  </svg>
);

export const OpenAIIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.487a4.48 4.48 0 0 1 2.36-1.983V12.02a.774.774 0 0 0 .393.681l5.833 3.372-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.487zm16.597 3.855l-5.833-3.372 2.019-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.675a.79.79 0 0 0-.411-.681zm2.01-4.664l-.141-.085-4.784-2.759a.776.776 0 0 0-.78 0L9.4 8.203V5.87a.08.08 0 0 1 .033-.062l4.84-2.788a4.5 4.5 0 0 1 6.674 4.807zM8.736 14.153l-2.02-1.168a.071.071 0 0 1-.038-.052V7.35a4.504 4.504 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

export const GeminiAIIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="geminiLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path
      d="M12 24c0-6.627-5.373-12-12-12 6.627 0 12-5.373 12-12 0 6.627 5.373 12 12 12-6.627 0-12 5.373-12 12z"
      fill="url(#geminiLogoGrad)"
    />
  </svg>
);
