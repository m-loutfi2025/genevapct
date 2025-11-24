
import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../constants';
import StarIcon from './icons/StarIcon';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark">What Our Clients Say</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-medium-gray">We are proud to have earned the trust of businesses and individuals across the UAE.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                            <div className="flex mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <p className="text-medium-gray font-cabin italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-unbounded font-bold text-dark">{testimonial.name}</p>
                                <p className="font-cabin text-sm text-medium-gray">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <a href={COMPANY_INFO.googleReviewsLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg font-cabin hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                        Read More Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
