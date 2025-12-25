
import React from 'react';
import { useTranslation } from '../App';
import { PRODUCTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const { t, lang } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{t('products_heading')}</h2>
            <p className="text-gray-600 mt-2">Durable hardware from trusted global brands.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">IP Cameras</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">DVR Systems</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Accessories</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name[lang]} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name[lang]}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {product.description[lang]}
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
                >
                  {t('btn_order_now')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
