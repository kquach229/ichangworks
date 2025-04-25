import { Instagram, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-between h-40'>
      <span>Aichang Chang</span>
      <div className='inline-flex space-x-5'>
        <Instagram />
        <Mail />
      </div>
      <div />
    </footer>
  );
};

export default Footer;
