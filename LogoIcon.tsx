
import React from 'react';

const LogoIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img src="/geneva-logo.png" alt="Geneva Logo" {...props} />
);

export default LogoIcon;