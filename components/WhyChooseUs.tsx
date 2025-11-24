
import React from 'react';
import type { CoreValue } from '../types';
import CheckIcon from './icons/CheckIcon';
import StarIcon from './icons/StarIcon';

const ProfessionalismIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const TransparencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);


const CORE_VALUES: CoreValue[] = [
    {
        name: "Professionalism",
        description: "We uphold the highest standards of quality and conduct in every project we undertake.",
        Icon: ProfessionalismIcon
    },
    {
        name: "Transparency",
        description: "Clear communication and honest pricing are the cornerstones of our client relationships.",
        Icon: TransparencyIcon
    },
    {
        name: "Accuracy",
        description: "Meticulous attention to detail ensures your documents and prints are flawless.",
        Icon: CheckIcon
    },
    {
        name: "Customer Service",
        description: "Our dedicated team is committed to providing an exceptional and supportive experience.",
        Icon: StarIcon
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark">Why Choose Us?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-medium-gray">We are dedicated to providing excellence and building lasting partnerships.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CORE_VALUES.map(({ name, description, Icon }) => (
                        <div key={name} className="text-center p-6">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                                <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-unbounded font-semibold text-dark mb-2">{name}</h3>
                            <p className="font-cabin text-medium-gray">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
