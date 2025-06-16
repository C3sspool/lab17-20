// src/pages/NewArrivalsPage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const NewArrivalsPage = () => {
  const { language } = useContext(LanguageContext);
  
  const materials = [
    {
      id: 1,
      title: language === 'ru' 
        ? "Современные алгоритмы и структуры данных" 
        : "Modern Algorithms and Data Structures",
      author: "Иванов А.П.",
      year: "2025",
      image: "/book-algorithms.jpg",
      file: "modern-algorithms.pdf" // Добавлено поле с именем файла
    },
    {
      id: 2,
      title: language === 'ru' 
        ? "Искусственный интеллект в образовании" 
        : "Artificial Intelligence in Education",
      author: "Петрова С.В.",
      year: "2024",
      image: "/book-ai.jpg",
      file: "ai-in-education.pdf"
    },
    {
      id: 3,
      title: language === 'ru' 
        ? "Цифровая трансформация университетов" 
        : "Digital Transformation of Universities",
      author: "Сидоров Д.И.",
      year: "2024",
      image: "/book-digital.jpg",
      file: "digital-transformation.pdf"
    },
    {
      id: 4,
      title: language === 'ru' 
        ? "Основы облачных вычислений" 
        : "Fundamentals of Cloud Computing",
      author: "Кузнецова М.А.",
      year: "2025",
      image: "/book-cloud.jpg",
      file: "cloud-computing-fundamentals.pdf"
    }
  ];

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

  return (
    <div className="page-content">
      <h1>{language === 'ru' ? "Новые поступления учебных материалов" : "New Educational Materials Arrivals"}</h1>
      
      <div className="materials-intro">
        <p>
          {language === 'ru' 
            ? "В этом месяце наша библиотека пополнилась новыми ценными изданиями. Все материалы доступны для студентов в цифровом формате." 
            : "This month our library has been enriched with new valuable publications. All materials are available to students in digital format."}
        </p>
      </div>
      
      <div className="materials-grid">
        {materials.map(material => (
          <div key={material.id} className="material-card">
            <div className="material-image-container">
              <img 
                src={material.image} 
                alt={material.title} 
                className="material-image"
              />
            </div>
            <div className="material-info">
              <h3>{material.title}</h3>
              <p>{material.author} ({material.year})</p>
              <button 
                className="download-btn"
                onClick={() => handleDownload(material.file)}
              >
                {language === 'ru' ? "Скачать PDF" : "Download PDF"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;