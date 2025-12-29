
import React, { useEffect } from 'react';

const WhatsAppWidget: React.FC = () => {
  useEffect(() => {
    // Add WhatsApp floating button
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://wa.me/923459270207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all transform hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.026.272 2.022.784 2.893l-.833 3.041 3.109-.817c.844.463 1.782.706 2.711.706 3.179 0 5.767-2.587 5.767-5.77 0-3.185-2.588-5.773-5.771-5.773zm3.376 8.205c-.149.42-.77.77-1.064.815-.248.044-.57.072-1.761-.393-1.479-.583-2.397-2.046-2.471-2.148-.074-.1-.607-.806-.607-1.533 0-.727.382-1.084.518-1.226.136-.141.296-.178.396-.178.099 0 .198.005.285.01.086.004.203-.032.316.242.113.274.389.948.423 1.018.035.071.057.153.009.248-.047.095-.071.153-.141.236-.071.083-.149.185-.213.27-.066.087-.135.182-.058.315.077.132.341.564.73 1.026.39.462.858.748 1.102.873.244.125.342.112.446.002.105-.11.446-.518.564-.696.119-.178.238-.148.4-.087s1.025.483 1.203.572c.178.089.297.132.342.207.045.076.045.439-.104.859zM12 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 16.523 2 11 6.477 1 12 1zm0 18c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/>
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
        !
      </span>
    </a>
  );
};

export default WhatsAppWidget;
