// src/pages/SiteUpdatePage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const SiteUpdatePage = () => {
  const { language } = useContext(LanguageContext);
  
  const updates = [
    {
      id: 1,
      title: language === 'ru' 
        ? "Улучшена производительность" 
        : "Performance improved",
      description: language === 'ru' 
        ? "Оптимизирована загрузка страниц, время отклика сокращено на 40%" 
        : "Page loading optimized, response time reduced by 40%",
      icon: "⚡"
    },
    {
      id: 2,
      title: language === 'ru' 
        ? "Новый раздел 'Архив'" 
        : "New 'Archive' section",
      description: language === 'ru' 
        ? "Добавлен доступ к историческим материалам и архивным изданиям" 
        : "Added access to historical materials and archival publications",
      icon: "📚"
    },
    {
      id: 3,
      title: language === 'ru' 
        ? "Обновленная система поиска" 
        : "Updated search system",
      description: language === 'ru' 
        ? "Улучшена точность поиска и добавлены фильтры по категориям" 
        : "Improved search accuracy and added category filters",
      icon: "🔍"
    },
    {
      id: 4,
      title: language === 'ru' 
        ? "Мобильная версия" 
        : "Mobile version",
      description: language === 'ru' 
        ? "Полностью переработан интерфейс для мобильных устройств" 
        : "Completely redesigned interface for mobile devices",
      icon: "📱"
    }
  ];

  return (
    <div className="page-content">
      <h1>{language === 'ru' ? "Обновление сайта" : "Website Update"}</h1>
      
      <div className="update-intro">
        <p>
          {language === 'ru' 
            ? "Мы постоянно работаем над улучшением вашего опыта использования нашей библиотеки. Вот последние изменения:" 
            : "We are constantly working to improve your experience with our library. Here are the latest changes:"}
        </p>
      </div>
      
      <div className="updates-container">
        {updates.map(update => (
          <div key={update.id} className="update-card">
            <div className="update-icon">{update.icon}</div>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
          </div>
        ))}
      </div>
      
      <div className="feedback-section">
        <h2>{language === 'ru' ? "Обратная связь" : "Feedback"}</h2>
        <p>
          {language === 'ru' 
            ? "Расскажите, как мы можем улучшить наш сервис:" 
            : "Tell us how we can improve our service:"}
        </p>
        <textarea 
          className="feedback-input" 
          placeholder={language === 'ru' ? "Ваши предложения..." : "Your suggestions..."}
        ></textarea>
        <button className="submit-btn">
          {language === 'ru' ? "Отправить" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default SiteUpdatePage;