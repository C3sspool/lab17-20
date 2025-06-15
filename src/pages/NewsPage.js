// src/pages/NewsPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const NewsPage = () => {
  const { language, translations } = useContext(LanguageContext);
  
  const newsItems = [
    {
      id: 1,
      title: language === 'ru' 
        ? "Новые поступления учебных материалов" 
        : "New educational materials arrivals",
      date: "15.06.2025",
      excerpt: language === 'ru' 
        ? "Добавлены новые учебники и научные работы по компьютерным наукам" 
        : "New textbooks and scientific papers on computer science added",
      link: "/new-arrivals",
      image: "/news-arrivals.jpg"
    },
    {
      id: 2,
      title: language === 'ru' 
        ? "Мероприятия и акции" 
        : "Events and promotions",
      date: "10.06.2025",
      excerpt: language === 'ru' 
        ? "Приглашаем на неделю открытых лекций с 20 по 27 июня" 
        : "Join our open lecture week from June 20 to 27",
      link: "/events",
      image: "/news-events.jpg"
    },
    {
      id: 3,
      title: language === 'ru' 
        ? "Партнерские новости" 
        : "Partnership news",
      date: "05.06.2025",
      excerpt: language === 'ru' 
        ? "Новое сотрудничество с издательством 'Академическая книга'" 
        : "New partnership with 'Academic Book' publishing house",
      link: "/partnership",
      image: "/news-partnership.jpg"
    },
    {
      id: 4,
      title: language === 'ru' 
        ? "Обновление сайта" 
        : "Website update",
      date: "01.06.2025",
      excerpt: language === 'ru' 
        ? "Улучшена производительность и добавлен новый раздел 'Архив'" 
        : "Improved performance and added new 'Archive' section",
      link: "/site-update",
      image: "/news-update.jpg"
    }
  ];

  return (
    <div className="page-content">
      <h1>{language === 'ru' ? "Последние новости" : "Latest News"}</h1>
      
      <div className="news-grid">
        {newsItems.map(item => (
          <div key={item.id} className="news-card">
            <div className="news-image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="news-image"
              />
              <div className="news-date">{item.date}</div>
            </div>
            <div className="news-content">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <Link to={item.link} className="news-link">
                {language === 'ru' ? "Подробнее" : "Read more"} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;