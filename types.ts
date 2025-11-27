export interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  googleMapsEmbed: string;
  whatsapp: string;
  whatsappHref: string;
  location: string;
  fullAddress: string;
  googleReviewsLink: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type SectionType = 'home' | 'services' | 'pricing' | 'about' | 'contact';

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  priceInfo: string;
  features: string[];
  isFeatured: boolean;
}
