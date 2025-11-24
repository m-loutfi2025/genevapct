
import React, { useState } from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import LinePhoneIcon from './icons/LinePhoneIcon';
import MailIcon from './icons/MailIcon';
import MapPinIcon from './icons/MapPinIcon';

interface HeaderProps {
    onNavigate: (section: 'home' | 'services' | 'pricing' | 'about' | 'contact') => void;
    onQuoteClick: () => void;
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onQuoteClick, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (section: 'home' | 'services' | 'pricing' | 'about' | 'contact') => {
        onNavigate(section);
        setIsMenuOpen(false);
    }
    
    const handleQuoteClick = () => {
        onQuoteClick();
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            {/* Top Bar */}
            <div className="text-medium-gray">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex flex-wrap justify-between items-center gap-3 text-xs">
                        <div className="flex items-center gap-4">
                            <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <LinePhoneIcon className="w-4 h-4" />
                                <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
                            </a>
                            <div className="h-4 w-px bg-gray-200"></div>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <MailIcon className="w-4 h-4" />
                                <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4 text-primary" />
                            <span className="hidden sm:inline">{COMPANY_INFO.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group">
                            <img src="/image_8.png" alt="Geneva Logo" className="w-10 h-10 object-contain" />
                            <div className="text-dark font-unbounded font-bold group-hover:text-primary transition-colors text-lg">
                                Geneva
                            </div>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.section)}
                                    className={`relative px-5 py-2 font-cabin font-semibold transition-all duration-200 ${
                                        activeSection === link.section
                                            ? 'text-primary'
                                            : 'text-medium-gray hover:text-dark'
                                    }`}
                                >
                                    {link.name}
                                    {activeSection === link.section && (
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary"></div>
                                    )}
                                </button>
                            ))}
                            <div className="ml-4 h-8 w-px bg-gray-200"></div>
                            <button
                                onClick={handleQuoteClick}
                                className="ml-4 bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-cabin font-bold shadow-md hover:shadow-lg transition-all"
                            >
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-medium-gray hover:text-primary transition-colors">
                            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.section)}
                                    className={`block w-full text-left px-4 py-2.5 rounded-md transition-colors font-semibold ${
                                        activeSection === link.section
                                            ? 'text-primary bg-primary/5'
                                            : 'text-medium-gray hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="px-4 pt-3">
                                <button
                                    onClick={handleQuoteClick}
                                    className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 rounded-md"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
