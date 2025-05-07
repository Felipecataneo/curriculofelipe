// components/icons/LinkedInIcon.tsx
// (Assuming this is the same as previously provided)
import React from 'react';

interface LinkedInIconProps extends React.SVGProps<SVGSVGElement> {}

const LinkedInIcon: React.FC<LinkedInIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // This will inherit text color
    aria-hidden="true"
    {...props}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.75-2.5S10.5 12.85 10.5 14.25V19H7.5v-9h3V11c.5-.75 1.6-1.5 2.75-1.5 2.5 0 4.25 1.75 4.25 4.5V19z" />
  </svg>
);

export default LinkedInIcon;