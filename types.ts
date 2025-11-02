
export interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isRecommended: boolean;
}

export interface GoogleReview {
  author: string;
  photo: string;
  rating: number;
  text: string;
}
