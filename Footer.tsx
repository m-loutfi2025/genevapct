
import React from 'react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from './constants';
import LinePhoneIcon from './LinePhoneIcon';
import MailIcon from './MailIcon';
import MapPinIcon from './MapPinIcon';
import GlobeIcon from './GlobeIcon';


interface FooterProps {
  onNavigate: (section: 'home' | 'services' | 'pricing' | 'about' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  return (
    <footer className="bg-footer-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
                <img src="/geneva-logo.png" alt="Geneva Logo" className="w-10 h-10 object-contain" />
                <div className="text-white font-unbounded font-bold text-xl">
                    Geneva
                </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional printing services and government transaction clearing in Al Ain, Abu Dhabi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-unbounded text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => onNavigate(item.section)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-unbounded text-lg mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.title} className="text-gray-400 text-sm">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-unbounded text-lg mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={COMPANY_INFO.phoneHref} className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <LinePhoneIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <MailIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
               <li>
                <a href={`http://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <GlobeIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;