
import React from 'react';
import { useTranslation } from '../App';

const About: React.FC = () => {
  const { t, lang } = useTranslation();

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/security/800/600" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              alt="Our Team"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about_heading')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('about_text')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full text-xs">✓</span>
                <div>
                  <h4 className="font-bold">Family First</h4>
                  <p className="text-sm text-gray-500">We prioritize the safety of your home and loved ones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full text-xs">✓</span>
                <div>
                  <h4 className="font-bold">Tech Driven</h4>
                  <p className="text-sm text-gray-500">Only the latest NVR/DVR and IP camera technologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full text-xs">✓</span>
                <div>
                  <h4 className="font-bold">Locally Trusted</h4>
                  <p className="text-sm text-gray-500">Deep roots in Batkhela, Tohid Abad Bala, and Malakand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
