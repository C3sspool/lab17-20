// src/pages/ProductsPage.js
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const ProductsPage = () => {
  const { language, translations } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState('collections');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUniversity, setFilterUniversity] = useState('');
  const [filterDiscipline, setFilterDiscipline] = useState('');
  const [filterAccess, setFilterAccess] = useState('');

  // Фиктивные данные для коллекций
  const collectionsData = [
    {
      id: 1,
      title: "Основы программирования",
      author: "Иванов А.П.",
      university: "ЮФУ",
      discipline: "Информатика",
      access: "Бесплатно",
      file: "test.txt",
      year: "2024"
    },
    {
      id: 2,
      title: "Высшая математика для инженеров",
      author: "Петрова С.В.",
      university: "ДГТУ",
      discipline: "Математика",
      access: "Бесплатно",
      file: "test.txt",
      year: "2023"
    },
    {
      id: 3,
      title: "История Донского края",
      author: "Сидоров Д.И.",
      university: "РГЭУ (РИНХ)",
      discipline: "История",
      access: "Платно",
      file: "test.txt",
      year: "2025"
    },
    {
      id: 4,
      title: "Современная экономика",
      author: "Кузнецова М.А.",
      university: "ЮФУ",
      discipline: "Экономика",
      access: "Бесплатно",
      file: "test.txt",
      year: "2024"
    },
    {
      id: 5,
      title: "Физика. Полный курс",
      author: "Николаев В.С.",
      university: "ЮФУ",
      discipline: "Физика",
      access: "Платно",
      file: "test.txt",
      year: "2023"
    },
    {
      id: 6,
      title: "Основы биохимии",
      author: "Фролова Е.Д.",
      university: "РостГМУ",
      discipline: "Биология",
      access: "Бесплатно",
      file: "test.txt",
      year: "2024"
    }
  ];

  // Фильтрация коллекций
  const filteredCollections = collectionsData.filter(item => {
    return (
      (searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.discipline.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterUniversity === '' || item.university === filterUniversity) &&
      (filterDiscipline === '' || item.discipline === filterDiscipline) &&
      (filterAccess === '' || item.access === filterAccess)
    );
  });

  // Обработчик скачивания файла
  const handleDownload = (fileName) => {
    // Создаем временную ссылку для скачивания
    const downloadLink = document.createElement('a');
    downloadLink.href = `/downloads/${fileName}`;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Сервисы
  const services = [
    {
      id: 1,
      title: language === 'ru' ? "Бронирование мест в читальном зале" : "Study Room Booking",
      description: language === 'ru' 
        ? "Забронируйте удобное место в читальном зале на нужное время" 
        : "Book a comfortable place in the reading room for the time you need",
      icon: "📚",
      link: "/booking-room"
    },
    {
      id: 2,
      title: language === 'ru' ? "Аренда оборудования" : "Equipment Rental",
      description: language === 'ru' 
        ? "Взять напрокат ноутбук, планшет или другое оборудование" 
        : "Rent a laptop, tablet or other equipment",
      icon: "💻",
      link: "/equipment-rental"
    },
    {
      id: 3,
      title: language === 'ru' ? "Сервис рекомендаций" : "Recommendation Service",
      description: language === 'ru' 
        ? "Персональные рекомендации литературы по вашим интересам" 
        : "Personalized literature recommendations based on your interests",
      icon: "🌟",
      link: "/recommendations"
    }
  ];

  // Инструменты
  const tools = [
    {
      id: 1,
      title: language === 'ru' ? "Облачное хранилище" : "Cloud Storage",
      description: language === 'ru' 
        ? "Безопасное хранение ваших учебных материалов в облаке" 
        : "Secure storage of your educational materials in the cloud",
      icon: "☁️",
      link: "/cloud-storage"
    },
    {
      id: 2,
      title: language === 'ru' ? "Инструменты для цитирования" : "Citation Tools",
      description: language === 'ru' 
        ? "Автоматическое создание библиографических ссылок" 
        : "Automatic creation of bibliographic references",
      icon: "📝",
      link: "/citation-tools"
    },
    {
      id: 3,
      title: language === 'ru' ? "Онлайн-читалка" : "Online Reader",
      description: language === 'ru' 
        ? "Чтение книг прямо в браузере с удобной навигацией" 
        : "Read books right in your browser with convenient navigation",
      icon: "📖",
      link: "/online-reader"
    },
    {
      id: 4,
      title: language === 'ru' ? "Совместная работа" : "Collaboration Tools",
      description: language === 'ru' 
        ? "Инструменты для совместной работы над проектами" 
        : "Tools for collaborative project work",
      icon: "👥",
      link: "/collaboration"
    }
  ];

  // Уникальные университеты и дисциплины для фильтров
  const universities = [...new Set(collectionsData.map(item => item.university))];
  const disciplines = [...new Set(collectionsData.map(item => item.discipline))];

  return (
    <div className="page-content">
      <h1>{translations[language].products}</h1>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'collections' ? 'active' : ''}`}
          onClick={() => setActiveTab('collections')}
        >
          {language === 'ru' ? "Цифровые коллекции" : "Digital Collections"}
        </button>
        <button 
          className={`tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          {language === 'ru' ? "Информационные сервисы" : "Information Services"}
        </button>
        <button 
          className={`tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          {language === 'ru' ? "Онлайн-инструменты" : "Online Tools"}
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'collections' && (
          <div className="collections-tab">
            <div className="search-filters">
              <div className="search-box">
                <input
                  type="text"
                  placeholder={language === 'ru' ? "Поиск по названию, автору, дисциплине..." : "Search by title, author, discipline..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-btn">
                  {language === 'ru' ? "Найти" : "Search"}
                </button>
              </div>
              
              <div className="filters">
                <select 
                  value={filterUniversity} 
                  onChange={(e) => setFilterUniversity(e.target.value)}
                >
                  <option value="">{language === 'ru' ? "Все ВУЗы" : "All Universities"}</option>
                  {universities.map(uni => (
                    <option key={uni} value={uni}>{uni}</option>
                  ))}
                </select>
                
                <select 
                  value={filterDiscipline} 
                  onChange={(e) => setFilterDiscipline(e.target.value)}
                >
                  <option value="">{language === 'ru' ? "Все дисциплины" : "All Disciplines"}</option>
                  {disciplines.map(dis => (
                    <option key={dis} value={dis}>{dis}</option>
                  ))}
                </select>
                
                <select 
                  value={filterAccess} 
                  onChange={(e) => setFilterAccess(e.target.value)}
                >
                  <option value="">{language === 'ru' ? "Любой доступ" : "Any Access"}</option>
                  <option value="Бесплатно">{language === 'ru' ? "Бесплатно" : "Free"}</option>
                  <option value="Платно">{language === 'ru' ? "Платно" : "Paid"}</option>
                </select>
                
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setFilterUniversity('');
                    setFilterDiscipline('');
                    setFilterAccess('');
                    setSearchTerm('');
                  }}
                >
                  {language === 'ru' ? "Сбросить фильтры" : "Reset Filters"}
                </button>
              </div>
            </div>
            
            <div className="collections-table-container">
              <table className="collections-table">
                <thead>
                  <tr>
                    <th>{language === 'ru' ? "Название" : "Title"}</th>
                    <th>{language === 'ru' ? "Автор" : "Author"}</th>
                    <th>{language === 'ru' ? "Дисциплина" : "Discipline"}</th>
                    <th>{language === 'ru' ? "ВУЗ" : "University"}</th>
                    <th>{language === 'ru' ? "Год" : "Year"}</th>
                    <th>{language === 'ru' ? "Доступность" : "Access"}</th>
                    <th>{language === 'ru' ? "Скачать" : "Download"}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCollections.length > 0 ? (
                    filteredCollections.map(item => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.discipline}</td>
                        <td>{item.university}</td>
                        <td>{item.year}</td>
                        <td className={item.access === "Бесплатно" ? "free" : "paid"}>
                          {item.access}
                        </td>
                        <td>
                          <button 
                            className="download-btn"
                            onClick={() => handleDownload(item.file)}
                          >
                            {language === 'ru' ? "Скачать файл" : "Download File"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-results">
                        {language === 'ru' ? "Ничего не найдено" : "No results found"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="import-section">
              <h3>{language === 'ru' ? "Импорт данных" : "Data Import"}</h3>
              <p>
                {language === 'ru' 
                  ? "Вы можете загрузить собственную таблицу с ресурсами в формате CSV:" 
                  : "You can upload your own resource table in CSV format:"}
              </p>
              <input 
                type="file" 
                accept=".csv" 
                className="file-input"
              />
              <button className="import-btn">
                {language === 'ru' ? "Импортировать данные" : "Import Data"}
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'services' && (
          <div className="services-tab">
            <div className="services-grid">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="service-link">
                    {language === 'ru' ? "Подробнее" : "Learn more"} →
                  </a>
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload("service-info.txt")}
                    style={{ marginTop: '10px' }}
                  >
                    {language === 'ru' ? "Скачать описание" : "Download Description"}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="booking-section">
              <h3>{language === 'ru' ? "Бронирование оборудования" : "Equipment Booking"}</h3>
              <div className="booking-form">
                <div className="form-group">
                  <label>{language === 'ru' ? "Тип оборудования:" : "Equipment type:"}</label>
                  <select>
                    <option>{language === 'ru' ? "Ноутбук" : "Laptop"}</option>
                    <option>{language === 'ru' ? "Планшет" : "Tablet"}</option>
                    <option>{language === 'ru' ? "Проектор" : "Projector"}</option>
                    <option>{language === 'ru' ? "Фотоаппарат" : "Camera"}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>{language === 'ru' ? "Дата бронирования:" : "Booking date:"}</label>
                  <input type="date" />
                </div>
                
                <div className="form-group">
                  <label>{language === 'ru' ? "Период времени:" : "Time period:"}</label>
                  <select>
                    <option>{language === 'ru' ? "10:00 - 12:00" : "10:00 - 12:00"}</option>
                    <option>{language === 'ru' ? "12:00 - 14:00" : "12:00 - 14:00"}</option>
                    <option>{language === 'ru' ? "14:00 - 16:00" : "14:00 - 16:00"}</option>
                    <option>{language === 'ru' ? "16:00 - 18:00" : "16:00 - 18:00"}</option>
                  </select>
                </div>
                
                <button className="book-btn">
                  {language === 'ru' ? "Забронировать" : "Book now"}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'tools' && (
          <div className="tools-tab">
            <div className="tools-grid">
              {tools.map(tool => (
                <div key={tool.id} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <a href={tool.link} className="tool-link">
                    {language === 'ru' ? "Использовать" : "Use now"} →
                  </a>
                  <button 
                    className="download-btn"
                    onClick={() => handleDownload("tool-instructions.txt")}
                    style={{ marginTop: '10px' }}
                  >
                    {language === 'ru' ? "Скачать инструкцию" : "Download Instructions"}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="tools-description">
              <h3>{language === 'ru' ? "Как использовать онлайн-инструменты" : "How to Use Online Tools"}</h3>
              <ol className="instructions">
                <li>{language === 'ru' ? "Выберите нужный инструмент из списка выше" : "Select the desired tool from the list above"}</li>
                <li>{language === 'ru' ? "Авторизуйтесь с помощью вашего университетского аккаунта" : "Log in using your university account"}</li>
                <li>{language === 'ru' ? "Следуйте инструкциям внутри инструмента" : "Follow the instructions within the tool"}</li>
                <li>{language === 'ru' ? "Сохраняйте результаты в вашем облачном хранилище" : "Save results in your cloud storage"}</li>
              </ol>
              
              <div className="storage-info">
                <h4>{language === 'ru' ? "Ваше облачное хранилище" : "Your Cloud Storage"}</h4>
                <div className="storage-meter">
                  <div className="storage-used" style={{ width: '35%' }}></div>
                  <div className="storage-label">35% {language === 'ru' ? "использовано" : "used"}</div>
                </div>
                <p>5.2 GB {language === 'ru' ? "из 15 GB" : "of 15 GB"} {language === 'ru' ? "использовано" : "used"}</p>
                <button 
                  className="download-btn"
                  onClick={() => handleDownload("storage-guide.pdf")}
                >
                  {language === 'ru' ? "Скачать руководство" : "Download Guide"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;