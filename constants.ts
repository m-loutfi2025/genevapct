
import type { CompanyInfo, Service, Testimonial, PricingPlan } from './types';

export const COMPANY_INFO: CompanyInfo = {
    name: "Geneva Printing & Clearing Of Transaction",
    email: "info@genevapct.com",
    phone: "+971 3 762 0403",
    phoneHref: "tel:+97137620403",
    website: "www.genevapct.com",
    whatsapp: "+97137620403",
    whatsappHref: "https://wa.me/97137620403",
    location: "Al Ain, Abu Dhabi, UAE",
    fullAddress: "Office 10, Al Ain Square Building, Al Ain, Abu Dhabi, UAE",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232559.7342610196!2d55.59489241640625!3d24.20173499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab12e545be525%3A0x34a3617197316712!2sAl%20Ain%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1695000000000",
    googleReviewsLink: "https://g.page/r/your-google-page/review",
};

export const NAV_LINKS = [
    { name: 'Home', section: 'home' as const },
    { name: 'Services', section: 'services' as const },
    { name: 'Pricing', section: 'pricing' as const },
    { name: 'About Us', section: 'about' as const },
    { name: 'Contact', section: 'contact' as const },
];

export const SERVICES: Service[] = [
    {
        title: "Printing Services",
        description: "High-quality digital and offset printing for all your business needs.",
        image: "/image_0.jpeg",
        details: ["Business Cards & Brochures", "Banners & Posters", "Flyers & Advertisements", "Custom Stationery"]
    },
    {
        title: "Transaction Clearing",
        description: "Efficient and reliable clearing for government and commercial transactions.",
        image: "/image_7.jpeg",
        details: ["Visa & Immigration Services", "License Renewals", "Document Attestation", "Official Paperwork"]
    },
    {
        title: "Corporate Solutions",
        description: "Comprehensive support services to streamline your corporate operations.",
        image: "/image_1.jpeg",
        details: ["Administrative Support", "Corporate Document Management", "PRO Services", "Business Setup Assistance"]
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Ahmed Al Mansoori",
        role: "CEO, Al Ain Enterprises",
        quote: "Geneva PCT has been our go-to for all printing needs. Their quality and turnaround time are unmatched. Highly professional team.",
        rating: 5
    },
    {
        name: "Fatima Al Ameri",
        role: "Operations Manager",
        quote: "The transaction clearing service saved us countless hours. Their expertise in handling government paperwork is a huge asset for our business.",
        rating: 5
    },
    {
        name: "John Smith",
        role: "Startup Founder",
        quote: "As a new business, their corporate solutions were invaluable. They guided us through every step. Exceptional customer service!",
        rating: 4
    }
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        name: "Basic",
        priceInfo: "Ideal for startups and small-scale needs.",
        features: ["Standard Printing Quality", "Basic Transaction Assistance", "Email Support", "5-7 Day Turnaround"],
        isFeatured: false
    },
    {
        name: "Standard",
        priceInfo: "Most popular choice for growing businesses.",
        features: ["High-Quality Printing", "Full Transaction Clearing", "Priority Email & Phone Support", "3-5 Day Turnaround", "Volume Discounts"],
        isFeatured: true
    },
    {
        name: "Premium",
        priceInfo: "For large organizations with ongoing needs.",
        features: ["Premium & Specialty Printing", "Dedicated Account Manager", "24/7 Priority Support", "1-2 Day Express Turnaround", "Full Corporate Solutions Suite"],
        isFeatured: false
    }
];