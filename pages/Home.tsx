
import React from 'react';
import { useTranslation } from '../App';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Surveillance"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${lang === 'en' ? 'leading-tight' : ''}`}>
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link 
                to="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                {t('btn_order_now')}
              </Link>
              <a 
                href="https://wa.me/923459270207" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.026.272 2.022.784 2.893l-.833 3.041 3.109-.817c.844.463 1.782.706 2.711.706 3.179 0 5.767-2.587 5.767-5.77 0-3.185-2.588-5.773-5.771-5.773zm3.376 8.205c-.149.42-.77.77-1.064.815-.248.044-.57.072-1.761-.393-1.479-.583-2.397-2.046-2.471-2.148-.074-.1-.607-.806-.607-1.533 0-.727.382-1.084.518-1.226.136-.141.296-.178.396-.178.099 0 .198.005.285.01.086.004.203-.032.316.242.113.274.389.948.423 1.018.035.071.057.153.009.248-.047.095-.071.153-.141.236-.071.083-.149.185-.213.27-.066.087-.135.182-.058.315.077.132.341.564.73 1.026.39.462.858.748 1.102.873.244.125.342.112.446.002.105-.11.446-.518.564-.696.119-.178.238-.148.4-.087s1.025.483 1.203.572c.178.089.297.132.342.207.045.076.045.439-.104.859zM12 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 16.523 2 11 6.477 1 12 1zm0 18c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/></svg>
                {t('btn_whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 transform transition hover:-translate-y-2">
              <div className="text-4xl mb-4 text-blue-600">🌙</div>
              <h3 className="text-xl font-bold mb-2">{t('feat_night_vision')}</h3>
              <p className="text-gray-600 text-sm">Clear 24/7 monitoring even in pitch black conditions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-600 transform transition hover:-translate-y-2">
              <div className="text-4xl mb-4 text-green-600">📱</div>
              <h3 className="text-xl font-bold mb-2">{t('feat_smart_surv')}</h3>
              <p className="text-gray-600 text-sm">Access your camera feeds from anywhere via mobile.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-yellow-600 transform transition hover:-translate-y-2">
              <div className="text-4xl mb-4 text-yellow-600">🛠️</div>
              <h3 className="text-xl font-bold mb-2">{t('feat_support')}</h3>
              <p className="text-gray-600 text-sm">Professional installation and maintenance anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Limited Time Offer Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-8">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              <h3 className="text-2xl font-bold">
                {lang === 'ur' ? 'محدود وقت کی پیشکش!' : 'Limited Time Offer!'}
              </h3>
            </div>
            <p className="text-lg">
              {lang === 'ur' 
                ? 'مفت انسٹالیشن + 1 سال وارنٹی - صرف اس ماہ!' 
                : 'Free Installation + 1 Year Warranty - This Month Only!'}
            </p>
            <a 
              href="https://wa.me/923459270207?text=I want to avail the limited time offer" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              {lang === 'ur' ? 'ابھی آرڈر کریں' : 'Order Now'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
