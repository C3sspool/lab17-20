// src/pages/AboutPage.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const AboutPage = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="page-content">
      {language === 'ru' ? (
        // РУССКАЯ ВЕРСИЯ
        <div className="about-content">
          <div className="about-header">
            <h1>Библиотека Цифровых Ресурсов Ростовского Студента</h1>
            <p className="tagline">Знания без границ для нового поколения студентов</p>
          </div>
          
          <div className="about-intro">
            <div className="intro-text">
              <p>
                В самом сердце динамично развивающегося образовательного ландшафта Ростова-на-Дону зародилась инициатива, 
                призванная стать надежным маяком для пытливых умов студенческого сообщества. Автор проекта «Библиотека 
                Цифровых Ресурсов Ростовского Студента» – это не просто отдельная личность, а живой символ коллективного 
                стремления к созданию пространства, где информация обретает силу, а знания становятся доступными в любое 
                время и в любом месте.
              </p>
              <p>
                Наше начинание – это глубоко осознанный ответ на вызовы современной образовательной реальности, где 
                традиционные источники знаний гармонично переплетаются с безграничными возможностями цифровой эпохи. Мы 
                убеждены, что каждый студент Ростова и Ростовской области заслуживает иметь под рукой не просто набор файлов, 
                а целостную, тщательно курируемую экосистему интеллектуальных ресурсов, способную стать его верным спутником 
                на всем увлекательном, а порой и сложном, пути академических свершений.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="/about-team.jpg" 
                alt="Команда проекта Библиотека Цифровых Ресурсов" 
              />
            </div>
          </div>
          
          <div className="principles-section">
            <h2>Основополагающие принципы, вдохновляющие нас</h2>
            <div className="principles-grid">
              <div className="principle-card">
                <div className="principle-icon">🌐</div>
                <h3>Всеобъемлющая Доступность</h3>
                <p>
                  Мы стремимся к тому, чтобы преграды в виде расстояний, времени или технических ограничений перестали быть 
                  препятствием на пути к качественным образовательным материалам. Наша библиотека – это ваш персональный 
                  образовательный портал, открытый 24/7.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">⭐</div>
                <h3>Непревзойденное Качество и Актуальность</h3>
                <p>
                  Понимая ценность достоверной и современной информации, мы уделяем первостепенное внимание тщательному 
                  отбору, верификации и постоянному обновлению нашего цифрового фонда. Мы ориентируемся на ресурсы, которые 
                  действительно востребованы в учебных программах ведущих ростовских вузов.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🧭</div>
                <h3>Интуитивная Простота и Удобство</h3>
                <p>
                  В условиях постоянной нехватки времени, мы создаем сервис, где найти нужное – легко и быстро. Четкая 
                  навигация, мощный поиск и продуманная структура – наши обязательства перед вами.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🤝</div>
                <h3>Сообщество и Взаимопомощь</h3>
                <p>
                  Мы верим в силу коллективного разума. Наша платформа призвана не только предоставлять ресурсы, но и 
                  способствовать обмену знаниями, опытом и полезными находками между студентами разных факультетов и вузов 
                  родного Ростова.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🚀</div>
                <h3>Цифровой Прогресс и Инновации</h3>
                <p>
                  Мы открыты для новых технологий и форматов. Наша цель – не просто идти в ногу со временем, но и 
                  предвосхищать образовательные тренды, предлагая ресурсы будущего уже сегодня.
                </p>
              </div>
            </div>
          </div>
          
          <div className="team-section">
            <div className="team-description">
              <h2>Чей это проект?</h2>
              <p>
                За этим проектом стоит команда единомышленников – выпускников и сотрудников ведущих ростовских университетов 
                (таких как <strong>ЮФУ</strong>, <strong>ДГТУ</strong>, <strong>РГЭУ (РИНХ)</strong>), а также активных студентов, хорошо понимающих реальные 
                потребности и боли своих сверстников. Мы объединены общей страстью к знаниям, глубоким уважением к 
                академической среде Ростова и искренним желанием внести вклад в ее развитие.
              </p>
              <p>
                Мы – это профессионалы в области информационных технологий, педагогики, библиотечного дела и контент-менеджмента, 
                объединившие свои компетенции для достижения одной значимой цели. Мы постоянно взаимодействуем с преподавательским 
                составом, методистами и студенческими советами, чтобы наполнение Библиотеки оставалось максимально релевантным и 
                полезным.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <h2>Наше Видение</h2>
            <p>
              Мы видим «Библиотеку Цифровых Ресурсов Ростовского Студента» не просто как хранилище файлов, а как ключевой 
              элемент цифровой образовательной инфраструктуры города, как точку притяжения для интеллектуального студенчества, 
              как ресурс, который помогает ростовским вузам готовить высококлассных, конкурентоспособных на мировом уровне 
              специалистов. Мы мечтаем о том, чтобы наш проект стал синонимом надежности, современности и академической 
              поддержки для каждого, кто грызет гранит науки в нашем солнечном Ростове.
            </p>
            
            <div className="call-to-action">
              <h3>Присоединяйтесь к нашему движению!</h3>
              <p>
                Исследуйте ресурсы, предлагайте новые идеи, делитесь отзывами. Вместе мы создадим лучшую цифровую среду 
                для обучения, которой по праву будет гордиться студенчество Ростова!
              </p>
              <div className="action-buttons">
                <button className="join-btn">Стать частью команды</button>
                <button className="suggest-btn">Предложить учебный материал</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // АНГЛИЙСКАЯ ВЕРСИЯ
        <div className="about-content">
          <div className="about-header">
            <h1>Digital Resource Library for Rostov Students</h1>
            <p className="tagline">Boundless knowledge for the new generation of students</p>
          </div>
          
          <div className="about-intro">
            <div className="intro-text">
              <p>
                In the heart of Rostov-on-Don's dynamically developing educational landscape, an initiative has emerged 
                designed to become a reliable beacon for the inquiring minds of the student community. The author of the 
                "Digital Resource Library for Rostov Students" project is not just an individual, but a living symbol of 
                the collective aspiration to create a space where information gains power and knowledge becomes accessible 
                anytime, anywhere.
              </p>
              <p>
                Our initiative is a deeply conscious response to the challenges of modern educational reality, where 
                traditional sources of knowledge are harmoniously intertwined with the limitless possibilities of the 
                digital era. We believe that every student in Rostov and the Rostov region deserves to have at hand not 
                just a set of files, but a holistic, carefully curated ecosystem of intellectual resources that can 
                become their faithful companion on the exciting, and sometimes challenging, path of academic achievement.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="/about-team.jpg" 
                alt="Digital Resource Library project team" 
              />
            </div>
          </div>
          
          <div className="principles-section">
            <h2>Fundamental Principles Inspiring Us</h2>
            <div className="principles-grid">
              <div className="principle-card">
                <div className="principle-icon">🌐</div>
                <h3>Comprehensive Accessibility</h3>
                <p>
                  We strive to ensure that barriers of distance, time or technical limitations no longer stand in the way 
                  of quality educational materials. Our library is your personal educational portal, open 24/7.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">⭐</div>
                <h3>Unparalleled Quality and Relevance</h3>
                <p>
                  Understanding the value of reliable and up-to-date information, we prioritize careful selection, 
                  verification and constant updating of our digital collection. We focus on resources that are truly 
                  in demand in the curricula of leading Rostov universities.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🧭</div>
                <h3>Intuitive Simplicity and Convenience</h3>
                <p>
                  In conditions of constant time pressure, we create a service where finding what you need is easy and 
                  quick. Clear navigation, powerful search and thoughtful structure are our commitments to you.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🤝</div>
                <h3>Community and Mutual Support</h3>
                <p>
                  We believe in the power of collective intelligence. Our platform is designed not only to provide 
                  resources but also to facilitate the exchange of knowledge, experience and useful findings among 
                  students of different faculties and universities in Rostov.
                </p>
              </div>
              
              <div className="principle-card">
                <div className="principle-icon">🚀</div>
                <h3>Digital Progress and Innovation</h3>
                <p>
                  We are open to new technologies and formats. Our goal is not just to keep up with the times, but to 
                  anticipate educational trends, offering the resources of the future today.
                </p>
              </div>
            </div>
          </div>
          
          <div className="team-section">
            <div className="team-description">
              <h2>Who Is Behind This Project?</h2>
              <p>
                Behind this project is a team of like-minded people - graduates and employees of leading Rostov universities 
                (such as <strong>SFedU</strong>, <strong>DSTU</strong>, <strong>RSUE</strong>), as well as active students who understand well the real needs and 
                challenges of their peers. We are united by a common passion for knowledge, deep respect for Rostov's 
                academic environment and a sincere desire to contribute to its development.
              </p>
              <p>
                We are professionals in information technology, pedagogy, library science and content management who have 
                combined their expertise to achieve one significant goal. We constantly interact with teaching staff, 
                methodologists and student councils to ensure that the Library's content remains as relevant and useful 
                as possible.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <h2>Our Vision</h2>
            <p>
              We see the "Digital Resource Library for Rostov Students" not just as a file repository, but as a key 
              element of the city's digital educational infrastructure, as a hub for intellectual students, as a resource 
              that helps Rostov universities train highly qualified, world-class competitive specialists. We dream that 
              our project will become synonymous with reliability, modernity and academic support for everyone who is 
              mastering knowledge in our sunny Rostov.
            </p>
            
            <div className="call-to-action">
              <h3>Join Our Movement!</h3>
              <p>
                Explore resources, suggest new ideas, share feedback. Together we will create the best digital learning 
                environment that Rostov students can be proud of!
              </p>
              <div className="action-buttons">
                <button className="join-btn">Become Part of the Team</button>
                <button className="suggest-btn">Suggest Educational Material</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;