// src/pages/PartnershipNewsPage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const PartnershipNewsPage = () => {
  const { language } = useContext(LanguageContext);
  
  const partners = [
    {
      id: 1,
      name: language === 'ru' 
        ? "Издательство 'Академическая книга'" 
        : "'Academic Book' Publishing",
      logo: "/partner-academic.jpg",
      description: language === 'ru' 
        ? "Теперь все новые издания этого издательства будут доступны в нашей библиотеке через 2 недели после выхода" 
        : "All new publications from this publisher will be available in our library 2 weeks after release"
    },
    {
      id: 2,
      name: language === 'ru' 
        ? "Центр цифровых образовательных ресурсов" 
        : "Digital Educational Resources Center",
      logo: "/partner-digital.jpg",
      description: language === 'ru' 
        ? "Совместный проект по созданию открытой базы учебных материалов" 
        : "Joint project to create an open database of educational materials"
    },
    {
      id: 3,
      name: language === 'ru' 
        ? "Технологический университет Ростова" 
        : "Rostov Technological University",
      logo: "/partner-university.jpg",
      description: language === 'ru' 
        ? "Обмен электронными ресурсами и совместные исследовательские программы" 
        : "Exchange of electronic resources and joint research programs"
    }
  ];

  return (
    <div className="page-content">
      <h1>{language === 'ru' ? "Партнерские новости" : "Partnership News"}</h1>
      
      <div className="partnership-intro">
        <p>
          {language === 'ru' 
            ? "Наши партнеры помогают расширять коллекцию цифровых ресурсов и улучшать сервисы для студентов" 
            : "Our partners help expand the collection of digital resources and improve services for students"}
        </p>
      </div>
      
      <div className="partners-grid">
        {partners.map(partner => (
          <div key={partner.id} className="partner-card">
            <div className="partner-logo-container">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-logo"
              />
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipNewsPage;