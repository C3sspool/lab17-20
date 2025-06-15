// src/components/Header.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Header = ({ onLanguageToggle }) => {
  const { language, translations } = useContext(LanguageContext);
  
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="/logo-placeholder.png" 
          alt={translations[language].welcome} 
          className="logo"
        />
        <div className="logo-text">
          <h1>Библиотека цифровых ресурсов Ростовского студента</h1>
          <p>{translations[language].description}</p>
        </div>
      </div>
      <button onClick={onLanguageToggle} className="language-toggle">
        {language === 'ru' ? 'EN' : 'RU'}
      </button>
    </header>
  );
};

export default Header;