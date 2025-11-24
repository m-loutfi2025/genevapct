
import React from 'react';
import { PRICING_PLANS } from '../constants';
import CheckIcon from './icons/CheckIcon';

interface PricingSectionProps {
    onQuoteClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onQuoteClick }) => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                     <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark">Flexible Pricing Plans</h2>
                        <p className="mt-4 text-lg max-w-xl mx-auto lg:mx-0 text-medium-gray">
                            We offer tailored packages to fit your specific needs. Prices are approximate and can be customized.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/image_5.jpeg" alt="A collection of professionally printed materials including brochures, business cards, and stationery." className="rounded-lg shadow-xl"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                    {PRICING_PLANS.map((plan) => (
                        <div key={plan.name} className={`rounded-xl border flex flex-col p-8 ${plan.isFeatured ? 'border-primary scale-105 bg-white shadow-2xl' : 'border-gray-200 bg-gray-50'}`}>
                            {plan.isFeatured && (
                                <div className="text-center">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
                                </div>
                            )}
                            <h3 className="text-3xl font-unbounded font-bold text-dark text-center mt-4">{plan.name}</h3>
                            <p className="text-medium-gray text-center mt-2 mb-6 h-12">{plan.priceInfo}</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={onQuoteClick} className={`w-full font-bold py-4 px-6 rounded-lg font-cabin transition-all duration-300 ${plan.isFeatured ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
                                Get a Custom Quote
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
