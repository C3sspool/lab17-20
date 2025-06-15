// src/components/Aside.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Aside = () => {
  const { language, translations } = useContext(LanguageContext);
  
  return (
    <aside className="aside">
      <div className="tags">
        <h3>{translations[language].tags}</h3>
        <div className="tag">🔄 Актуальные</div>
        <div className="tag">🏛️ ЮФУ</div>
        <div className="tag">⚙️ ДГТУ</div>
        <div className="tag">⏱️ К сессии</div>
        <div className="tag">🚀 Продвинутый уровень</div>
        <div className="tag">📚 Электронные учебники</div>
      </div>
      <div className="banners">
        <h3>{translations[language].specialOffers}</h3> {/* Исправлено здесь */}
        <img 
          src="/promo1.png" 
          alt={translations[language].promo1Alt} 
          className="banner-image"
        />
        <img 
          src="/promo2.png" 
          alt={translations[language].promo2Alt} 
          className="banner-image"
        />
      </div>
    </aside>
  );
};

export default Aside;