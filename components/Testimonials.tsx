
import React from 'react';
import { useTranslation } from '../App';

const TESTIMONIALS = [
  {
    id: 1,
    name: { ur: 'محمد احمد', en: 'Muhammad Ahmad' },
    location: { ur: 'بٹ خیلہ', en: 'Batkhela' },
    rating: 5,
    text: {
      ur: 'بہترین سروس! کیمرے کی کوالٹی لاجواب ہے اور رات میں بھی بالکل صاف نظر آتا ہے۔ ٹیم بہت پروفیشنل ہے۔',
      en: 'Excellent service! Camera quality is amazing and night vision is crystal clear. Very professional team.'
    },
    image: 'https://ui-avatars.com/api/?name=Muhammad+Ahmad&background=3b82f6&color=fff'
  },
  {
    id: 2,
    name: { ur: 'فاطمہ بی بی', en: 'Fatima Bibi' },
    location: { ur: 'ملاکنڈ', en: 'Malakand' },
    rating: 5,
    text: {
      ur: 'گھر کی سیکیورٹی کے لیے بہترین حل۔ موبائل سے کہیں سے بھی دیکھ سکتے ہیں۔ بہت مطمئن ہیں۔',
      en: 'Perfect solution for home security. Can monitor from mobile anywhere. Very satisfied.'
    },
    image: 'https://ui-avatars.com/api/?name=Fatima+Bibi&background=10b981&color=fff'
  },
  {
    id: 3,
    name: { ur: 'علی خان', en: 'Ali Khan' },
    location: { ur: 'توحید آباد', en: 'Toheed Abad' },
    rating: 5,
    text: {
      ur: 'دکان میں لگوایا تھا۔ انسٹالیشن بہت اچھی ہوئی اور قیمت بھی مناسب تھی۔ 24/7 سپورٹ بھی ملتی ہے۔',
      en: 'Installed in my shop. Installation was excellent and price was reasonable. 24/7 support available.'
    },
    image: 'https://ui-avatars.com/api/?name=Ali+Khan&background=f59e0b&color=fff'
  },
  {
    id: 4,
    name: { ur: 'عائشہ شاہ', en: 'Ayesha Shah' },
    location: { ur: 'بٹ خیلہ', en: 'Batkhela' },
    rating: 5,
    text: {
      ur: 'بہت زیادہ خوش ہیں۔ 4 کیمرے لگوائے تھے، سب بہترین کام کر رہے ہیں۔ انسٹالیشن ٹیم بہت اچھی تھی۔',
      en: 'Very happy. Installed 4 cameras, all working perfectly. Installation team was great.'
    },
    image: 'https://ui-avatars.com/api/?name=Ayesha+Shah&background=8b5cf6&color=fff'
  },
  {
    id: 5,
    name: { ur: 'حسن رضا', en: 'Hassan Raza' },
    location: { ur: 'ملاکنڈ', en: 'Malakand' },
    rating: 5,
    text: {
      ur: 'فیکٹری میں لگوائے تھے۔ کوالٹی اور سروس دونوں زبردست ہیں۔ سب کو ریکمنڈ کرتا ہوں۔',
      en: 'Installed in factory. Quality and service both are excellent. Highly recommended to everyone.'
    },
    image: 'https://ui-avatars.com/api/?name=Hassan+Raza&background=ef4444&color=fff'
  },
  {
    id: 6,
    name: { ur: 'نوشین اختر', en: 'Nosheen Akhtar' },
    location: { ur: 'بٹ خیلہ', en: 'Batkhela' },
    rating: 5,
    text: {
      ur: 'گھر اور دکان دونوں جگہ لگوائے۔ بہت اچھا سسٹم ہے۔ کسٹمر سروس بھی بہترین ہے۔',
      en: 'Installed at both home and shop. Very good system. Customer service is also excellent.'
    },
    image: 'https://ui-avatars.com/api/?name=Nosheen+Akhtar&background=06b6d4&color=fff'
  }
];

const Testimonials: React.FC = () => {
  const { lang } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'ur' ? 'ہمارے مطمئن گاہکوں کی آراء' : 'What Our Customers Say'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'ur' 
              ? 'بٹ خیلہ اور ملاکنڈ میں 500+ مطمئن گاہکوں کی آراء' 
              : '500+ satisfied customers in Batkhela and Malakand'}
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex text-yellow-500 text-2xl">★★★★★</div>
            <span className="text-gray-700 font-semibold">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name[lang]} 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name[lang]}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location[lang]}</p>
                  <div className="flex text-yellow-500 text-sm mt-1">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text[lang]}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">✓</div>
            <div className="font-bold">{lang === 'ur' ? '500+ انسٹالیشن' : '500+ Installations'}</div>
          </div>
          <div>
            <div className="text-4xl mb-2">⭐</div>
            <div className="font-bold">{lang === 'ur' ? '5 سٹار ریٹنگ' : '5 Star Rating'}</div>
          </div>
          <div>
            <div className="text-4xl mb-2">🛡️</div>
            <div className="font-bold">{lang === 'ur' ? '1 سال وارنٹی' : '1 Year Warranty'}</div>
          </div>
          <div>
            <div className="text-4xl mb-2">🔧</div>
            <div className="font-bold">{lang === 'ur' ? 'مفت انسٹالیشن' : 'Free Installation'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
