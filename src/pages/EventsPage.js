// src/pages/EventsPage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const EventsPage = () => {
  const { language } = useContext(LanguageContext);
  
  const events = [
    {
      id: 1,
      title: language === 'ru' 
        ? "Неделя открытых лекций" 
        : "Open Lecture Week",
      date: "20-27 июня 2025",
      location: language === 'ru' ? "Главный корпус, аудитория 310" : "Main building, room 310",
      description: language === 'ru' 
        ? "Приглашаем всех студентов на серию лекций от ведущих преподавателей университета" 
        : "We invite all students to a series of lectures by leading university professors",
      image: "/event-lectures.jpg"
    },
    {
      id: 2,
      title: language === 'ru' 
        ? "Конкурс научных работ" 
        : "Research Papers Competition",
      date: "15 июля 2025",
      location: language === 'ru' ? "Библиотека, конференц-зал" : "Library, conference hall",
      description: language === 'ru' 
        ? "Представьте свои исследования и получите возможность опубликовать их в университетском сборнике" 
        : "Present your research and get a chance to publish it in the university collection",
      image: "/event-competition.jpg"
    },
    {
      id: 3,
      title: language === 'ru' 
        ? "Мастер-класс по цифровым ресурсам" 
        : "Digital Resources Workshop",
      date: "5 июля 2025",
      location: language === 'ru' ? "Компьютерный класс №5" : "Computer class #5",
      description: language === 'ru' 
        ? "Научитесь эффективно использовать электронные ресурсы библиотеки для учебы и исследований" 
        : "Learn how to effectively use the library's electronic resources for study and research",
      image: "/event-workshop.jpg"
    }
  ];

  return (
    <div className="page-content">
      <h1>{language === 'ru' ? "Мероприятия и акции" : "Events and Promotions"}</h1>
      
      <div className="events-intro">
        <p>
          {language === 'ru' 
            ? "Присоединяйтесь к нашим мероприятиям и получите максимум пользы от ресурсов библиотеки!" 
            : "Join our events and get the most out of the library resources!"}
        </p>
      </div>
      
      <div className="events-timeline">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title} 
                className="event-image"
              />
              <div className="event-date">{event.date}</div>
            </div>
            <div className="event-details">
              <h2>{event.title}</h2>
              <p className="event-location">{event.location}</p>
              <p>{event.description}</p>
              <button className="register-btn">
                {language === 'ru' ? "Зарегистрироваться" : "Register"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;