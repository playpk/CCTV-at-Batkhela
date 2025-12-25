
import React from 'react';
import { useTranslation } from '../App';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services_heading')}</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">{t('services_desc')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-blue-600 transition-all">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title[lang]}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Areas covered section */}
        <div className="mt-24 bg-blue-600 rounded-3xl p-12 text-white text-left relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">Coverage Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-blue-500/30 p-4 rounded-lg">Baktiyarabad</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Batkhela City</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Malakand Khas</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Thana</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Khar</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Dargai</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Swat Gate</div>
              <div className="bg-blue-500/30 p-4 rounded-lg">Tohid Abad</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
