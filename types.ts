
export type Language = 'en' | 'ur';

export interface TranslationStrings {
  [key: string]: {
    en: string;
    ur: string;
  };
}

export interface Product {
  id: number;
  name: { en: string; ur: string };
  description: { en: string; ur: string };
  price: string;
  image: string;
}

export interface Service {
  id: number;
  title: { en: string; ur: string };
  description: { en: string; ur: string };
  icon: string;
}
