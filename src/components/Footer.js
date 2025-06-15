// src/components/Footer.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer = () => {
  const { language, translations } = useContext(LanguageContext);
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{translations[language].contacts}</p>
        <p>© {new Date().getFullYear()} Библиотека цифровых ресурсов Ростовского студента. Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;