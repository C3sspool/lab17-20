// src/components/Section.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Section = () => {
  const { language, translations } = useContext(LanguageContext);
  
  return (
    <section className="section">
      <nav className="navigation">
        <Link to="/news">{translations[language].news}</Link>
        <Link to="/about">{translations[language].about}</Link>
        <Link to="/feedback">{translations[language].feedback}</Link>
        <Link to="/products">{translations[language].products}</Link>
      </nav>
      <div className="banners">
        <h3>{translations[language].banners}</h3>
        <img 
          src="/banner1.png" 
          alt="Партнер 1" 
          className="banner-image"
        />
        <img 
          src="/banner2.png" 
          alt="Партнер 2" 
          className="banner-image"
        />
      </div>
    </section>
  );
};

export default Section;