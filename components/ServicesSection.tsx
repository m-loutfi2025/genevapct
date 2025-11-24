
import React, { forwardRef } from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; onQuoteClick: () => void }> = ({ service, onQuoteClick }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img className="w-full h-56 object-cover" src={service.image} alt={service.title} loading="lazy" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-unbounded font-bold text-dark mb-2">{service.title}</h3>
            <p className="font-cabin text-medium-gray mb-4 flex-grow">{service.description}</p>
            <ul className="space-y-2 mb-6">
                {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center font-cabin">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {detail}
                    </li>
                ))}
            </ul>
            <button onClick={onQuoteClick} className="mt-auto w-full bg-primary/10 text-primary font-bold py-3 px-6 rounded-lg font-cabin hover:bg-primary hover:text-white transition-all duration-300">
                Request a Quote
            </button>
        </div>
    </div>
);


interface ServicesSectionProps {
    onQuoteClick: () => void;
}

const ServicesSection = forwardRef<HTMLDivElement, ServicesSectionProps>(({ onQuoteClick }, ref) => {
    return (
        <section id="services" ref={ref} className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark">Our Services</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-medium-gray">We provide a wide range of professional services to meet your business and personal needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} service={service} onQuoteClick={onQuoteClick} />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ServicesSection;
