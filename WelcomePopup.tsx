import React, { useState, useEffect } from 'react';
import XIcon from './XIcon';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close welcome message"
        >
          <XIcon className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2.5">
              <img src="/image_8.png" alt="Geneva Logo" className="w-12 h-12 object-contain" />
              <div className="text-primary font-unbounded font-bold text-2xl">
                Geneva
              </div>
            </div>
          </div>

          {/* Welcome message */}
          <h2 className="text-2xl font-unbounded font-bold text-dark mb-4">
            Welcome to Geneva
          </h2>
          
          <p className="text-medium-gray mb-6 leading-relaxed">
            Your trusted partner for professional printing services and efficient transaction clearing in Al Ain, Abu Dhabi. Experience quality, reliability, and excellence with us.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary text-xl">🖨️</span>
              </div>
              <p className="text-xs text-medium-gray">Quality Printing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary text-xl">📋</span>
              </div>
              <p className="text-xs text-medium-gray">Transaction Clearing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary text-xl">⭐</span>
              </div>
              <p className="text-xs text-medium-gray">Expert Service</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleClose}
              className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-cabin font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                handleClose();
              }}
              className="flex-1 bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-cabin font-semibold hover:bg-primary/10 transition-colors duration-200"
            >
              Get Quote
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3">Trusted by businesses across Al Ain</p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <p className="text-lg font-bold text-dark">5.0</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-dark">500+</p>
                <p className="text-xs text-gray-500">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-dark">10+</p>
                <p className="text-xs text-gray-500">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
