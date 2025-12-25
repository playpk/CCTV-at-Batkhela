
import { Product, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: { en: "IP Smart Camera", ur: "آئی پی سمارٹ کیمرہ" },
    description: { en: "4K Resolution with WiFi connectivity.", ur: "وائی فائی کنیکٹیویٹی کے ساتھ 4K ریزولوشن۔" },
    price: "PKR 4,500",
    image: "https://picsum.photos/seed/camera1/400/300"
  },
  {
    id: 2,
    name: { en: "Night Vision Pro", ur: "نائٹ ویژن پرو" },
    description: { en: "Crystal clear vision in total darkness.", ur: "مکمل اندھیرے میں بالکل واضح وژن۔" },
    price: "PKR 3,200",
    image: "https://picsum.photos/seed/camera2/400/300"
  },
  {
    id: 3,
    name: { en: "DVR 8-Channel", ur: "ڈی وی آر 8 چینل" },
    description: { en: "Supports 8 HD cameras simultaneously.", ur: "ایک ساتھ 8 ایچ ڈی کیمروں کو سپورٹ کرتا ہے۔" },
    price: "PKR 12,000",
    image: "https://picsum.photos/seed/dvr/400/300"
  },
  {
    id: 4,
    name: { en: "Outdoor Bullet Cam", ur: "آؤٹ ڈور بلٹ کیم" },
    description: { en: "Weatherproof and durable housing.", ur: "موسم سے محفوظ اور پائیدار ہاؤسنگ۔" },
    price: "PKR 3,800",
    image: "https://picsum.photos/seed/outdoor/400/300"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: { en: "Home Security", ur: "گھریلو سیکیورٹی" },
    description: { en: "Keep your family safe with indoor/outdoor monitoring.", ur: "انڈور/آؤٹ ڈور مانیٹرنگ کے ساتھ اپنے خاندان کو محفوظ رکھیں۔" },
    icon: "🏠"
  },
  {
    id: 2,
    title: { en: "Shop Surveillance", ur: "دکان کی نگرانی" },
    description: { en: "Prevent theft and monitor customers 24/7.", ur: "چوری کو روکیں اور گاہکوں کی 24/7 نگرانی کریں۔" },
    icon: "🛒"
  },
  {
    id: 3,
    title: { en: "Office Monitoring", ur: "آفس مانیٹرنگ" },
    description: { en: "Track employee attendance and office activity.", ur: "ملازمین کی حاضری اور دفتری سرگرمیوں کو ٹریک کریں۔" },
    icon: "🏢"
  },
  {
    id: 4,
    title: { en: "School & Hospital", ur: "سکول اور ہسپتال" },
    description: { en: "Safe environments for students and patients.", ur: "طلباء اور مریضوں کے لیے محفوظ ماحول۔" },
    icon: "🏥"
  }
];
