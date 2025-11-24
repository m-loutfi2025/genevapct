// FIX: Import React to resolve namespace issue for React types used in this file.
import React from 'react';

export interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
}

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

export interface CoreValue {
  name: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CompanyInfo {
    name: string;
    email: string;
    phone: string;
    phoneHref: string;
    website: string;
    whatsapp: string;
    whatsappHref: string;
    location: string;
    fullAddress: string;
    googleMapsEmbed: string;
    googleReviewsLink: string;
}