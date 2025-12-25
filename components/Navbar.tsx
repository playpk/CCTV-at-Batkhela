
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../App';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAdminPage = location.pathname === '/admin';

  if (isAdminPage) return null;

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link 
      to={to} 
      onClick={() => setIsOpen(false)}
      className="block py-2 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 ml-2">CCTV Batkhela</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label={t('nav_home')} />
            <NavLink to="/about" label={t('nav_about')} />
            <NavLink to="/services" label={t('nav_services')} />
            <NavLink to="/products" label={t('nav_products')} />
            <NavLink to="/contact" label={t('nav_contact')} />
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="ml-4 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-bold border border-gray-300 transition-all"
            >
              {lang === 'en' ? 'اردو' : 'English'}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="px-3 py-1 bg-gray-100 text-xs font-bold rounded"
            >
              {lang === 'en' ? 'اردو' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <NavLink to="/" label={t('nav_home')} />
          <NavLink to="/about" label={t('nav_about')} />
          <NavLink to="/services" label={t('nav_services')} />
          <NavLink to="/products" label={t('nav_products')} />
          <NavLink to="/contact" label={t('nav_contact')} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
