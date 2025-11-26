export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  googleMapsEmbed: string;
  whatsapp: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type SectionType = 'home' | 'services' | 'pricing' | 'about' | 'contact';
