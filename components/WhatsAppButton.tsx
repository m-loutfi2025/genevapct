
import React from 'react';
import { COMPANY_INFO } from '../constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 z-40"
            aria-label="Chat on WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;
