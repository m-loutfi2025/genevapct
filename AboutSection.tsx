
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/image_4.jpeg" alt="A large, industrial printing press at the Geneva facility" className="rounded-lg shadow-xl" loading="lazy"/>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-dark mb-4">About Geneva</h2>
                        <p className="text-lg text-medium-gray mb-6 font-cabin">
                            Established in the heart of Al Ain, Geneva Printing & Clearing Of Transaction has grown to be a leading provider of comprehensive printing and administrative services in the UAE. Our history is built on a commitment to quality, efficiency, and unparalleled customer support.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-unbounded font-semibold text-dark mb-2">Our Mission</h3>
                                <p className="text-medium-gray font-cabin">To empower businesses and individuals by delivering seamless, high-quality printing and transaction clearing services, simplifying complexities and fostering success.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-unbounded font-semibold text-dark mb-2">Our Vision</h3>
                                <p className="text-medium-gray font-cabin">To be the most trusted and sought-after service partner in the UAE, known for our reliability, innovation, and dedication to client satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
