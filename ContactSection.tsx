import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import SpinnerIcon from './icons/SpinnerIcon';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus('Thank you for your message! We will get back to you shortly.');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark">Get In Touch</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-medium-gray">Have a question or a project in mind? We'd love to hear from you.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-light-gray p-8 rounded-lg">
                        <h3 className="text-2xl font-unbounded font-bold text-dark mb-6">Contact Form</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-medium-gray">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-medium-gray">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-medium-gray">Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-medium-gray">Message</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg font-cabin hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <>
                                            <SpinnerIcon className="h-5 w-5 mr-2" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                        {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
                    </div>
                    <div className="space-y-8">
                         <div>
                            <h3 className="text-2xl font-unbounded font-bold text-dark mb-4">Our Information</h3>
                            <div className="space-y-3 font-cabin text-lg">
                                <p><strong>Address:</strong> {COMPANY_INFO.fullAddress}</p>
                                <p><strong>Phone:</strong> <a href={COMPANY_INFO.phoneHref} className="hover:text-primary">{COMPANY_INFO.phone}</a></p>
                                <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary">{COMPANY_INFO.email}</a></p>
                                <p><strong>Website:</strong> <a href={`http://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{COMPANY_INFO.website}</a></p>
                            </div>
                        </div>
                        <div>
                             <h3 className="text-2xl font-unbounded font-bold text-dark mb-4">Our Location</h3>
                             <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src={COMPANY_INFO.googleMapsEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;