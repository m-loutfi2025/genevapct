
import React, { useState } from 'react';
import { NAV_LINKS, COMPANY_INFO } from './constants';
import MenuIcon from './MenuIcon';
import XIcon from './XIcon';
import LinePhoneIcon from './LinePhoneIcon';
import MailIcon from './MailIcon';

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
            <nav className="container mx-auto px-4">
                <div className="relative flex items-center justify-between py-4">
                    {/* Logo */}
                    <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group">
                        <img src="/image_8.png" alt="Geneva Logo" className="w-10 h-10 object-contain" />
                        <div className="text-dark font-unbounded font-bold group-hover:text-primary transition-colors text-lg">
                            Geneva
                        </div>
                    </button>

                    {/* Desktop Centered Navigation */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
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
                    </div>

                    {/* Desktop Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-2 text-sm text-medium-gray hover:text-primary transition-colors font-semibold">
                            <LinePhoneIcon className="w-5 h-5" />
                            <span>{COMPANY_INFO.phone}</span>
                        </a>
                        <button
                            onClick={handleQuoteClick}
                            className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-md font-cabin font-bold shadow-md hover:shadow-lg transition-all"
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
                    <div className="lg:hidden border-t border-gray-100 py-4">
                        <div className="space-y-1">
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
                        </div>
                        <div className="px-4 pt-4 mt-2">
                            <button
                                onClick={handleQuoteClick}
                                className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 rounded-md"
                            >
                                Get Quote
                            </button>
                        </div>
                        <div className="border-t border-gray-100 mt-4 pt-4 px-4 space-y-3">
                             <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-2.5 text-medium-gray hover:text-primary transition-colors text-sm font-semibold">
                                <LinePhoneIcon className="w-5 h-5" />
                                <span>{COMPANY_INFO.phone}</span>
                            </a>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2.5 text-medium-gray hover:text-primary transition-colors text-sm font-semibold">
                                <MailIcon className="w-5 h-5" />
                                <span>{COMPANY_INFO.email}</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
