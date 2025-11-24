import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="#020202" />
    <path
      d="M26.936 14.896C25.864 13.568 24.328 12.8 22.48 12.8H17.2V15.68H20.072V24.32H17.2V27.2H22.624C24.472 27.2 26.008 26.432 27.08 25.104C28.152 23.776 28.688 22.048 28.688 19.984C28.688 17.92 28.152 16.224 26.936 14.896ZM20.072 21.44V18.56H25.72V21.44H20.072Z"
      fill="#E04F00"
    />
  </svg>
);

export default LogoIcon;
