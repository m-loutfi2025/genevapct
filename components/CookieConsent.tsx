
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-dark text-white p-4 z-50 flex items-center justify-center shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center sm:text-left">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept Cookies", you consent to our use of cookies.
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-primary text-white font-bold py-2 px-6 rounded-lg font-cabin hover:bg-opacity-90 transition-all duration-300 flex-shrink-0"
                >
                    Accept Cookies
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
