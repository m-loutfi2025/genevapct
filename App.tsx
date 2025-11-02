

import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import FloatingWidgets from './components/FloatingWidgets';
import CookieConsent from './components/CookieConsent';
import ServiceModal from './components/ServiceModal';
import BackToTopButton from './components/BackToTopButton';
import PopupAd from './components/PopupAd';
import CustomerReviews from './components/CustomerReviews';
import { Service, PricingPlan, GoogleReview } from './types';

// --- Data for sections ---

const servicesData: Service[] = [
  { icon: 'fa-print', title: 'Digital Printing', description: 'Fast, high-quality prints for short runs. Perfect for brochures, flyers, and business cards.', image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', detailedDescription: 'Our state-of-the-art digital printing technology delivers vibrant colors and sharp details, making it the ideal choice for business cards, brochures, flyers, and personalized marketing materials. We handle short to medium runs with a quick turnaround time without compromising on quality.' },
  { icon: 'fa-layer-group', title: 'Offset Printing', description: 'Cost-effective solutions for large volume printing with impeccable color accuracy.', image: 'https://images.unsplash.com/photo-1603892837583-1c3704285749?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', detailedDescription: 'For large-scale printing needs, our offset printing services offer unparalleled quality and cost-effectiveness. This traditional method ensures consistent, high-fidelity color reproduction, perfect for magazines, catalogs, books, and high-volume promotional materials.' },
  { icon: 'fa-file-invoice-dollar', title: 'Transaction Clearing', description: 'Secure and efficient clearing services for all your business transactions.', image: 'https://source.unsplash.com/400x300/?finance,secure,transaction', detailedDescription: 'We provide secure, reliable, and swift transaction clearing services to streamline your business operations. Our robust systems ensure that all financial transactions are processed accurately and efficiently, giving you peace of mind.' },
  { icon: 'fa-pen-ruler', title: 'Graphic Design', description: 'Our creative team can bring your vision to life with stunning and professional designs.', image: 'https://source.unsplash.com/400x300/?graphic,design,computer', detailedDescription: 'From concept to completion, our talented graphic design team works with you to create compelling visual assets. Whether you need a new logo, a complete brand identity, or eye-catching marketing collateral, we bring your ideas to life with creativity and professionalism.' }
];

const pricingData: PricingPlan[] = [
  { name: 'Basic Print', price: 'Starting From', period: 'AED 50', features: ['Business Cards (100 pcs)', 'Flyers (50 pcs)', 'Standard Quality Paper', '2-3 Day Turnaround'], isRecommended: false },
  { name: 'Business Pro', price: 'Starting From', period: 'AED 250', features: ['Brochures (100 pcs)', 'Letterheads & Envelopes', 'Premium Paper Stock', 'Next Day Turnaround', 'Basic Design Review'], isRecommended: true },
  { name: 'Corporate Elite', price: 'Custom', period: 'Quote', features: ['Large Volume Offset', 'Custom Packaging', 'Dedicated Account Manager', 'Full Design Services', 'Priority Support'], isRecommended: false }
];

const googleReviewsData: GoogleReview[] = [
  { author: "Salim Al Ameri", photo: "https://source.unsplash.com/100x100/?portrait,person&sig=1", rating: 5, text: "Excellent service and high-quality prints. The staff is professional and very accommodating. They delivered our company profiles ahead of schedule. Highly recommended!" },
  { author: "Aisha Al Kaabi", photo: "https://source.unsplash.com/100x100/?portrait,person&sig=2", rating: 4.5, text: "We used their transaction clearing services, and it was seamless. Very efficient and trustworthy. Made our financial processing much smoother." },
  { author: "Michael Johnson", photo: "https://source.unsplash.com/100x100/?portrait,person&sig=3", rating: 5, text: "Top-tier printing quality for our restaurant menus. The colors were vibrant, and the paper quality was fantastic. Will definitely be coming back for more." },
  { author: "Fatima Al Kuwaiti", photo: "https://source.unsplash.com/100x100/?portrait,person&sig=4", rating: 5, text: "The graphic design team is brilliant. They understood our vision perfectly and created a stunning brand identity for our startup. The whole process was a pleasure." },
  { author: "David Chen", photo: "https://source.unsplash.com/100x100/?portrait,person&sig=5", rating: 4, text: "Good value and reliable service. We had a large order for offset printing, and they handled it without any issues. The quality was consistent across the entire batch." }
];

// --- Main App Component ---

const App: React.FC = () => {
    const [showCookieConsent, setShowCookieConsent] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isMapActive, setIsMapActive] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Digital Printing',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const servicesScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShowCookieConsent(true);
        }
        
        const adShown = sessionStorage.getItem('popupAdShown');
        if (!adShown) {
            const timer = setTimeout(() => {
                setIsPopupVisible(true);
            }, 1500); // Show popup after 1.5 seconds
            return () => clearTimeout(timer);
        }

    }, []);

    useEffect(() => {
        if (selectedService || isPopupVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedService, isPopupVisible]);

    // Enhanced smooth scrolling for all anchor links
    useEffect(() => {
        const handleSmoothScroll = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
    
            if (!anchor) {
                return;
            }
    
            const href = anchor.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
    
            const targetId = href.substring(1);
            if (!targetId) {
                return; // Link is just "#" with no id
            }
            
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                event.preventDefault();
    
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // The history.pushState call was removed to prevent security errors in certain sandboxed environments.
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, []);
    
    const handleAcceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowCookieConsent(false);
    };

    const handleClosePopup = () => {
        sessionStorage.setItem('popupAdShown', 'true');
        setIsPopupVisible(false);
    };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (formErrors[name as keyof typeof formErrors]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Full Name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email Address is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required.';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus('');
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted successfully:', formData);
                setSubmitStatus('Your message has been sent successfully!');
                setIsSubmitting(false);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    service: 'Digital Printing',
                    message: '',
                });
            }, 1500);
        } else {
            setSubmitStatus('Please correct the errors before submitting.');
        }
    };

    const handleServiceScroll = (direction: 'left' | 'right') => {
        if (servicesScrollRef.current) {
            const { current } = servicesScrollRef;
            const card = current.children[0];
            if (card) {
                const cardWidth = card.clientWidth;
                // The gap is `space-x-8` which is 2rem = 32px
                const scrollAmount = cardWidth + 32;
                current.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <>
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section id="home" className="relative h-screen flex items-center justify-center text-white text-center px-8 bg-gray-700">
                    <div className="relative z-10 animate-fade-in">
                        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">Geneva Printing & Clearing</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">Your Premier Partner for Quality Printing & Efficient Transaction Services in the UAE</p>
                        <a href="#services" className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">Explore Our Services</a>
                    </div>
                </section>

                {/* --- Services Section --- */}
                <AnimatedSection id="services" className="section-bg-1" containerClassName="max-w-full px-0" fullHeight={false}>
                    <div className="container mx-auto max-w-6xl text-center">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading mb-6">Our <span className="text-primary">Services</span></h2>
                        <p className="text-lg max-w-3xl mx-auto mb-16">We offer a comprehensive range of printing and clearing services to meet all your business needs with precision and excellence.</p>
                    </div>
                    <div className="w-full max-w-7xl mx-auto relative">
                        <div ref={servicesScrollRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-4 md:px-2 space-x-8 hide-scrollbar">
                            {servicesData.map((service, index) => (
                                <div key={index} className="snap-center flex-shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[31%]">
                                    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                                        <div className="relative">
                                            <img src={service.image} alt={`${service.title} service`} className="w-full h-64 object-cover" />
                                            <div className="absolute bottom-0 right-6 translate-y-1/2 bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center ring-8 ring-white">
                                                <i className={`fas ${service.icon} text-3xl`}></i>
                                            </div>
                                        </div>
                                        <div className="p-8 pt-12 text-left flex flex-col flex-grow">
                                            <h3 className="font-heading text-2xl font-bold text-heading mb-3">{service.title}</h3>
                                            <p className="text-body mb-6 flex-grow">{service.description}</p>
                                            <button onClick={() => setSelectedService(service)} className="text-primary font-bold hover:underline mt-auto self-start">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => handleServiceScroll('left')}
                            aria-label="Scroll services left"
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-14 h-14 items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 z-10 hover:bg-opacity-90 hidden md:flex"
                        >
                            <i className="fas fa-chevron-left text-lg"></i>
                        </button>
                        <button
                            onClick={() => handleServiceScroll('right')}
                            aria-label="Scroll services right"
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-14 h-14 items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 z-10 hover:bg-opacity-90 hidden md:flex"
                        >
                            <i className="fas fa-chevron-right text-lg"></i>
                        </button>
                    </div>
                </AnimatedSection>
                
                {/* --- Pricing Section --- */}
                <AnimatedSection id="pricing" className="section-bg-2">
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading mb-6">Flexible <span className="text-primary">Pricing</span></h2>
                    <p className="text-lg max-w-3xl mx-auto mb-16">Transparent and competitive pricing plans tailored to fit your budget and requirements. Get the best value for your investment.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {pricingData.map((plan, index) => (
                            <div key={index} className={`relative h-full bg-white p-8 rounded-xl shadow-lg text-center border-2 flex flex-col transition-all duration-300 ${plan.isRecommended ? 'border-primary bg-primary/5' : 'border-transparent'}`}>
                                {plan.isRecommended && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</span>}
                                <h3 className="font-heading text-2xl font-bold text-heading mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-4">{plan.price}</p>
                                <p className="font-heading text-4xl font-bold text-heading mb-6">{plan.period}</p>
                                <ul className="space-y-4 text-left mb-8 flex-grow">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center">
                                            <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`w-full font-bold py-3 px-6 rounded-full transition-all ${plan.isRecommended ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-gray-200 text-heading hover:bg-gray-300'}`}>
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* --- Google Reviews Section --- */}
                <AnimatedSection id="reviews" className="section-bg-3" containerClassName="max-w-full px-0" fullHeight={false}>
                    <div className="container mx-auto max-w-6xl text-center">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading mb-6">What Our <span className="text-primary">Customers Say</span></h2>
                        <p className="text-lg max-w-3xl mx-auto mb-16">
                            Real reviews from our valued clients on Google. We pride ourselves on customer satisfaction and quality service.
                        </p>
                    </div>
                    <CustomerReviews reviews={googleReviewsData} />
                </AnimatedSection>


                {/* --- About Us Section --- */}
                <AnimatedSection id="about" className="section-bg-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                        <img src="https://source.unsplash.com/600x500/?office,team,printing" alt="Geneva Printing Team" className="rounded-xl shadow-2xl w-full" />
                        <div>
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading mb-6">About <span className="text-primary">Geneva</span></h2>
                            <p className="text-lg mb-4">Founded in the heart of Al Ain, Geneva Printing & Clearing Of Transaction has grown to become a leading provider of comprehensive printing solutions and secure transaction services in Abu Dhabi and across the UAE.</p>
                            <p className="mb-6">Our mission is to empower businesses by providing them with superior quality printing and reliable clearing services. We are dedicated to building long-lasting relationships with our clients through innovation, professionalism, and an unwavering commitment to excellence.</p>
                            <div className="flex space-x-8 text-center">
                                <div>
                                    <div className="font-heading text-4xl font-bold text-primary">10+</div>
                                    <div className="text-body">Years of Experience</div>
                                </div>
                                <div>
                                    <div className="font-heading text-4xl font-bold text-primary">5k+</div>
                                    <div className="text-body">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="font-heading text-4xl font-bold text-primary">1M+</div>
                                    <div className="text-body">Projects Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Contact Section --- */}
                <AnimatedSection id="contact" className="section-bg-5">
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading mb-6">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-lg max-w-3xl mx-auto mb-16">Have a project in mind or need a quote? We'd love to hear from you. Fill out the form below or reach out to us directly.</p>
                    <div className="grid lg:grid-cols-2 gap-12 text-left">
                        <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6" noValidate>
                            <h3 className="font-heading text-2xl font-bold text-heading">Send us a Message</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`} placeholder="John Doe" aria-invalid={!!formErrors.name} aria-describedby={formErrors.name ? 'name-error' : undefined} />
                                    {formErrors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`} placeholder="john.doe@example.com" aria-invalid={!!formErrors.email} aria-describedby={formErrors.email ? 'email-error' : undefined}/>
                                    {formErrors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                                </div>
                            </div>
                             <div>
                                <label htmlFor="service" className="block text-sm font-bold mb-2">Service of Interest</label>
                                <select id="service" name="service" value={formData.service} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Digital Printing</option>
                                    <option>Offset Printing</option>
                                    <option>Transaction Clearing</option>
                                    <option>Graphic Design</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleFormChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`} placeholder="Tell us about your project..." aria-invalid={!!formErrors.message} aria-describedby={formErrors.message ? 'message-error' : undefined}></textarea>
                                {formErrors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:bg-opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Request'}
                            </button>
                            {submitStatus && <p className={`text-center text-sm ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{submitStatus}</p>}
                        </form>
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-heading mb-4">Contact Information</h3>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-start"><i className="fas fa-map-marker-alt w-6 mt-1 text-primary"></i><span>Al Ain, Abu Dhabi, United Arab Emirates</span></li>
                                    <li className="flex items-center"><i className="fas fa-phone w-6 text-primary"></i><a href="tel:+97137620403" className="hover:text-primary transition-colors">+971 3 762 0403</a></li>
                                    <li className="flex items-center"><i className="fas fa-envelope w-6 text-primary"></i><a href="mailto:info@genevapct.com" className="hover:text-primary transition-colors">info@genevapct.com</a></li>
                                    <li className="flex items-center"><i className="fas fa-clock w-6 text-primary"></i><span>Sun - Thu: 9:00 AM - 6:00 PM</span></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-heading mb-4">Visit Us</h3>
                                <div className="relative rounded-xl overflow-hidden shadow-lg h-64" onMouseLeave={() => setIsMapActive(false)}>
                                    {!isMapActive && (
                                        <div
                                            onClick={() => setIsMapActive(true)}
                                            onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsMapActive(true); }}
                                            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer z-10"
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Activate map"
                                        >
                                            <div className="text-center text-white p-4 bg-black/50 rounded-lg">
                                                <i className="fas fa-map-marked-alt text-3xl mb-2"></i>
                                                <p className="font-bold">Click to interact with map</p>
                                            </div>
                                        </div>
                                    )}
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.748316220815!2d55.76100567535783!3d24.24949197821611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab0e182e859e3%3A0x7f83031086e68848!2sGeneva%20Printing%20%26%20Clearing%20Of%20Transaction!5e0!3m2!1sen!2sae!4v1716181054942!5m2!1sen!2sae" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen={true} 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Interactive Google Map of Geneva Printing & Clearing Of Transaction location"
                                        className={!isMapActive ? 'pointer-events-none' : ''}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </main>

            <Footer />
            
            <FloatingWidgets />
            <BackToTopButton />

            {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
            {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
            {isPopupVisible && <PopupAd onClose={handleClosePopup} />}
        </>
    );
};

export default App;