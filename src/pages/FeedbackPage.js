// src/pages/FeedbackPage.js
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const FeedbackPage = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('question');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ name, email, message, selectedTopic });
    setIsSubmitted(true);
    
    // Сброс формы через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      setSelectedTopic('question');
    }, 5000);
  };

  // Русский контент
  const russianContent = (
    <div className="feedback-content">
      <h1>Обратная связь</h1>
      
      <div className="feedback-intro">
        <p>
          Мы всегда на связи и рады вашим вопросам, предложениям и отзывам! Хотите что-то уточнить, 
          предложить новый ресурс для библиотеки, сообщить о проблеме или просто поделиться мнением? 
          Не стесняйтесь – выбирайте удобный способ связи:
        </p>
      </div>
      
      <div className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Электронная почта</h3>
          <p>Напишите нам на адрес:</p>
          <a href="mailto:library@rostov-student.ru" className="contact-link">
            library@rostov-student.ru
          </a>
          <p>Мы постараемся ответить в течение 1 рабочего дня.</p>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Телефон/WhatsApp/Telegram</h3>
          <p>Звоните или пишите в мессенджеры по номеру:</p>
          <a href="tel:+79085175043" className="contact-link">
            +7 (908) 517-50-43
          </a>
          <p>График работы телефонной линии: Пн-Пт: 10:00 - 18:00.</p>
        </div>
      </div>
      
      <div className="feedback-form-section">
        <h2>Или отправьте сообщение прямо сейчас</h2>
        <p>
          Ваше мнение важно для нас! Именно благодаря вашей обратной связи Библиотека цифровых ресурсов 
          Ростовского студента становится удобнее, полезнее и актуальнее с каждым днем.
        </p>
        
        {isSubmitted ? (
          <div className="success-message">
            <h3>Спасибо за ваше сообщение! 🎉</h3>
            <p>Мы получили ваш запрос и свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Иван Иванов"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Ваш email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="topic">Тема сообщения:</label>
              <select
                id="topic"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="question">Задать вопрос</option>
                <option value="suggestion">Предложить ресурс</option>
                <option value="problem">Сообщить о проблеме</option>
                <option value="feedback">Оставить отзыв</option>
                <option value="other">Другое</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Ваше сообщение:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Напишите здесь ваше сообщение..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Отправить сообщение
            </button>
          </form>
        )}
      </div>
      
      <div className="social-section">
        <h2>Мы в социальных сетях</h2>
        <p>Подписывайтесь на наши соцсети, чтобы быть в курсе новостей и обновлений:</p>
        
        <div className="social-links">
          <a href="#" className="social-link vk">
            <span>VK</span>
          </a>
          <a href="#" className="social-link telegram">
            <span>Telegram</span>
          </a>
          <a href="#" className="social-link youtube">
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );

  // Английский контент (упрощенный)
  const englishContent = (
    <div className="feedback-content">
      <h1>Feedback</h1>
      
      <div className="feedback-intro">
        <p>
          We're always in touch and happy to hear your questions, suggestions and feedback! Want to clarify something,
          suggest a new resource for the library, report a problem or just share your opinion? Don't hesitate - choose
          a convenient way to contact us:
        </p>
      </div>
      
      <div className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>Write to us at:</p>
          <a href="mailto:library@rostov-student.ru" className="contact-link">
            library@rostov-student.ru
          </a>
          <p>We will try to respond within 1 business day.</p>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Phone/WhatsApp/Telegram</h3>
          <p>Call or write to messengers at:</p>
          <a href="tel:+79085175043" className="contact-link">
            +7 (908) 517-50-43
          </a>
          <p>Phone line hours: Mon-Fri: 10:00 - 18:00.</p>
        </div>
      </div>
      
      <div className="feedback-form-section">
        <h2>Or send a message right now</h2>
        <p>
          Your opinion is important to us! Thanks to your feedback, the Digital Resource Library for Rostov Students
          becomes more convenient, useful and relevant every day.
        </p>
        
        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you for your message! 🎉</h3>
            <p>We have received your request and will contact you shortly.</p>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Smith"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="topic">Message topic:</label>
              <select
                id="topic"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="question">Ask a question</option>
                <option value="suggestion">Suggest a resource</option>
                <option value="problem">Report a problem</option>
                <option value="feedback">Leave feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send message
            </button>
          </form>
        )}
      </div>
      
      <div className="social-section">
        <h2>We are on social media</h2>
        <p>Follow our social networks to stay updated:</p>
        
        <div className="social-links">
          <a href="#" className="social-link vk">
            <span>VK</span>
          </a>
          <a href="#" className="social-link telegram">
            <span>Telegram</span>
          </a>
          <a href="#" className="social-link youtube">
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-content">
      {language === 'ru' ? russianContent : englishContent}
    </div>
  );
};

export default FeedbackPage;