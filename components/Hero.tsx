
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

// --- SVG Icons ---
const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.803 6.123l-1.214 4.425 4.525-1.189z" />
    </svg>
);

const PrintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 3.366c0-1.617 1.343-2.955 3-2.955h6c1.657 0 3 1.338 3 2.955l-1.92.348m-13.36 0H21M15 17.25a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3.59c0-.57.224-1.11.62-1.501L9 9.379a.75.75 0 011.06 0l2.38 2.38a.75.75 0 001.06 0l.94-1.318a.75.75 0 011.21.706v5.961z" />
    </svg>
);

const DocumentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);
// --- End SVG Icons ---

interface HeroProps {
    onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative bg-dark text-white min-h-screen overflow-hidden">
            {/* Animated Blob Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-gray-500/20 rounded-full filter blur-3xl opacity-50 animate-blob" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-blob" style={{animationDelay: '4s'}}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen py-24 md:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center bg-white/10 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Your Trusted Partner in the UAE
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-unbounded font-extrabold tracking-tighter mb-4 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Professional Printing &</span>
                            <span className="block text-primary">Clearing of Transaction</span>
                        </h1>
                        <div className="w-24 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>

                        <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl font-cabin text-gray-300 mb-8">
                            Your trusted partner in Al Ain for high-quality printing solutions and efficient government transaction services.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg"><PrintIcon className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold">Quality Prints</h3>
                                    <p className="text-sm text-gray-400">Vibrant & sharp</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg"><DocumentIcon className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold">Fast Clearing</h3>
                                    <p className="text-sm text-gray-400">Hassle-free</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                            <button onClick={onQuoteClick} className="group relative w-full sm:w-auto bg-primary text-white font-bold py-4 px-8 rounded-lg font-cabin transition-all duration-300 overflow-hidden text-lg transform hover:scale-105">
                                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                                <span className="relative z-10">Request a Quote</span>
                            </button>
                            <a href={COMPANY_INFO.phoneHref} className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg font-cabin hover:bg-white hover:text-dark transition-all duration-300 text-lg">
                                Call Now
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6">
                            <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                <PhoneIcon className="w-5 h-5" />
                                <span>{COMPANY_INFO.phone}</span>
                            </a>
                             <a href={COMPANY_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                <WhatsAppIcon className="w-5 h-5" />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Column: Image & Stats */}
                    <div className="hidden lg:block relative h-[70vh] group">
                         <div className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden">
                            <img 
                                src="/image_2.jpeg" 
                                alt="A designer working on branding materials for Geneva Printing" 
                                className="relative z-10 w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105" 
                                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                            />
                        </div>
                        
                         <div className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-primary/20 animate-pulse-slow z-0"></div>
                         <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 border-primary/20 animate-pulse-slow z-0" style={{animationDelay: '2s'}}></div>
                        
                        <div className="absolute -bottom-8 -left-12 bg-white/90 backdrop-blur-sm text-dark p-4 rounded-lg shadow-xl animate-float">
                           <p className="font-bold text-lg">5.0 <span className="text-yellow-500">★★★★★</span></p>
                           <p className="text-sm font-cabin">Google Reviews</p>
                        </div>
                        <div className="absolute -top-8 -right-12 bg-white/90 backdrop-blur-sm text-dark p-4 rounded-lg shadow-xl animate-float" style={{animationDelay: '1s'}}>
                           <p className="font-bold text-lg">1,200+</p>
                           <p className="text-sm font-cabin">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <a href="#services" aria-label="Scroll down to services" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 transition-opacity hover:opacity-75">
                    <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                </div>
            </a>
        </section>
    );
};

export default Hero;
