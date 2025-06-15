// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Aside from './components/Aside';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';
import ProductsPage from './pages/ProductsPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import EventsPage from './pages/EventsPage';
import PartnershipNewsPage from './pages/PartnershipNewsPage';
import SiteUpdatePage from './pages/SiteUpdatePage';
import './App.css';

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const translations = {
    ru: {
      news: "Новости",
      about: "Об авторе",
      feedback: "Обратная связь",
      products: "Продукты и услуги",
      contacts: "Контакты: library@rostov-student.ru, +7 (123) 456-7890",
      tags: "Облако тегов",
      banners: "Наши партнеры",
      download: "Скачать каталог",
      welcome: "Добро пожаловать!",
      description: "Ваш надежный помощник в учебе",
	  specialOffers: "Специальные предложения"
    },
    en: {
      news: "News",
      about: "About Author",
      feedback: "Feedback",
      products: "Products & Services",
      contacts: "Contacts: library@rostov-student.ru, +7 (123) 456-7890",
      tags: "Tag Cloud",
      banners: "Our Partners",
      download: "Download catalog",
      welcome: "Welcome!",
      description: "Your reliable study assistant",
	  specialOffers: "Special Offers"
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations }}>
      <Router>
        <div className="app">
          <Header onLanguageToggle={toggleLanguage} />
          
          <div className="main-content">
            <Section />
            <article className="article">
              <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/new-arrivals" element={<NewArrivalsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/partnership" element={<PartnershipNewsPage />} />
                <Route path="/site-update" element={<SiteUpdatePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/products" element={<ProductsPage />} />
              </Routes>
            </article>
            <Aside />
          </div>
          
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
