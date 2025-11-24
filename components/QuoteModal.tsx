import React, { useState } from 'react';
import { SERVICES } from '../constants';
import XIcon from './icons/XIcon';
import SpinnerIcon from './icons/SpinnerIcon';

interface QuoteModalProps {
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        // Simulate API call
        setTimeout(() => {
            console.log('Quote request:', formData);
            setFormStatus('Thank you! Your quote request has been sent. We will contact you soon.');
            setIsSubmitting(false);

            setTimeout(() => {
                onClose();
            }, 2000); // Close modal after success message is shown
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <XIcon className="h-6 w-6" />
                </button>
                <div className="p-8">
                    <h2 className="text-3xl font-unbounded font-bold text-dark mb-2">Request a Quote</h2>
                    <p className="text-medium-gray mb-6">Fill out the form below and we'll get back to you with a custom quote.</p>
                    
                    {formStatus ? (
                        <div className="text-center p-8">
                            <p className="text-lg text-green-600">{formStatus}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name-modal" className="block text-sm font-medium text-medium-gray">Full Name</label>
                                <input type="text" name="name" id="name-modal" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="email-modal" className="block text-sm font-medium text-medium-gray">Email Address</label>
                                <input type="email" name="email" id="email-modal" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                             <div>
                                <label htmlFor="phone-modal" className="block text-sm font-medium text-medium-gray">Phone Number (Optional)</label>
                                <input type="tel" name="phone" id="phone-modal" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="service-modal" className="block text-sm font-medium text-medium-gray">Service of Interest</label>
                                <select name="service" id="service-modal" value={formData.service} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                    <option value="" disabled>Select a service</option>
                                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message-modal" className="block text-sm font-medium text-medium-gray">Project Details</label>
                                <textarea name="message" id="message-modal" rows={4} value={formData.message} onChange={handleChange} required placeholder="Please describe your requirements..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg font-cabin hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <>
                                            <SpinnerIcon className="h-5 w-5 mr-2" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;