
import React from 'react';
import { useTranslation } from '../App';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t, lang } = useTranslation();
  const location = useLocation();

  if (location.pathname === '/admin') return null;

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CCTV at Batkhela</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('hero_subtitle')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav_contact')}</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>توحید آباد بالا، بٹ خیلہ، ملاکنڈ</li>
              <li dir="ltr">0345-9270207</li>
              <li dir="ltr">0315-9646431</li>
              <li>subhan.subhan541@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4 space-x-reverse">
               <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
               <a href="https://wa.me/923459270207" className="hover:text-green-400 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} CCTV at Batkhela. {t('footer_rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
