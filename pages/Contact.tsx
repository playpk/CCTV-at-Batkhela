
import React, { useState } from 'react';
import { useTranslation } from '../App';

const Contact: React.FC = () => {
  const { t, lang } = useTranslation();
  const [form, setForm] = useState({ name: '', phone: '', location: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend. For now, simulate WhatsApp pre-fill.
    const waText = `New Inquiry from ${form.name}: ${form.message} (Location: ${form.location})`;
    window.open(`https://wa.me/923459270207?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold mb-8">{t('contact_heading')}</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white">📍</div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-600">توحید آباد بالا، بٹ خیلہ، ملاکنڈ، پاکستان</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-lg text-white">📞</div>
                <div>
                  <h4 className="font-bold">Mobile</h4>
                  <p className="text-gray-600" dir="ltr">0345-9270207</p>
                  <p className="text-gray-600" dir="ltr">0315-9646431</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-white">✉️</div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">subhan.subhan541@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26223.47!2d71.9817!3d34.6231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dea1c8f8f8f8f8%3A0x1234567890abcdef!2sBatkhela%2C%20Malakand%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CCTV Batkhela Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact_name')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact_phone')}</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact_loc')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={form.location}
                  onChange={(e) => setForm({...form, location: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact_msg')}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                {t('contact_send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
