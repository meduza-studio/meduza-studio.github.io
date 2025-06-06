document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        // Приоритеты для определения ссылки:
        // 1. Индивидуальный data-link
        // 2. Общий для категории
        // 3. Дефолтная страница
        const link = item.dataset.link || 
                   getCategoryLink(item.dataset.category) || 
                   'default-projects.html';
        
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            window.location.href = link;
            // или window.open(link, '_blank'); для новой вкладки
        });
    });

    function getCategoryLink(category) {
        const links = {
            'web': 'web-projects.html',
            'mobile': 'mobile-projects.html',
            'design': 'design-projects.html'
        };
        return links[category];
    }
});
// Словарь переводов
const translations = {
  en: {
    // Навигация
    services: "Services",
    portfolio: "Portfolio",
    contacts: "Contacts",
    about: "About me",
    education: "My education",

    // Hero секция (About Me)
    about_title: "About Me",
    about_text: "My name is Dmitry Zubko. I’m 19 years old and currently studying at the Moscow Institute of Physics and Technology (MEPhI). Alongside my university education, I’m expanding my skills in design through certifications from various schools, including Yudae School, Result University, and Yandex Practicum. I specialize in web design, UX/UI, and graphic design, always striving to learn and improve my craft.",
    portfolio_btn: "MY PORTFOLIO",
    contact_btn: "CLICK TO CONTACT ME",

    // Services
    services_title: "Range of jobs",
    service1: "Creating advertising banners",
    service2: "Identity design for your brand",
    service3: "Designing a blog for your brand",
    service4: "Interface design",
    service5: "The frontend for your website",

    // Contacts
    contacts_title: "Me in social networks",
    contacts_subtitle: "Connect with me through these platforms",
    vk: "ВКонтакте",
    behance: "Behance",
    tenchat: "TenChat",
    telegram: "Telegram",

    // Portfolio
    portfolio_title: "Portfolio",
    filter_all: "All",
    filter_web: "Web-sites",
    filter_ad: "Advertisement",
    filter_design: "Branding",
    project1_title: "SkyKitchen (for mobile viewing)",
    project1_desc: "SkyLine Hookah bar's web menu in Volgodonsk",
    project2_title: "Black Mamba",
    project2_desc: "Design of a brand T-shirt for the Black Mamba club",
    project3_title: "Crypto wallet app & landing",
    project3_desc: "Design of a landing page and a mobile application for a cryptocurrency wallet 'Social wallet'",

    // Education
    education_title: "Diplomas and certificates",
    diploma1: "Diploma from the Moscow University of the National Research Nuclear University 'MEPhI'",
    diploma2: "Yudaev School Certificate",
    diploma2_desc: "Certificate of completion of the UX/UI designer course",
    diploma3: "Certificate 2",
    diploma3_desc: "Soon...",

    // Footer
    copyright: "© 2025 Meduza Studio. All rights reserved."
  },
  ru: {
    // Навигация
    services: "Услуги",
    portfolio: "Портфолио",
    contacts: "Контакты",
    about: "Обо мне",
    education: "Образование",

    // Hero секция (About Me)
    about_title: "Обо мне",
    about_text: "Меня зовут Дмитрий Зубко. Мне 19 лет, я учусь в Московском инженерно-физическом институте (МИФИ). Параллельно с учебой я осваиваю дизайн через курсы в Yudae School, Result University и Яндекс Практикуме. Специализируюсь на веб-дизайне, UX/UI и графическом дизайне, постоянно совершенствую свои навыки.",
    portfolio_btn: "МОЁ ПОРТФОЛИО",
    contact_btn: "НАПИСАТЬ МНЕ",

    // Services
    services_title: "Направления работы",
    service1: "Создание рекламных баннеров",
    service2: "Фирменный стиль для вашего бренда",
    service3: "Дизайн блога",
    service4: "Дизайн интерфейсов",
    service5: "Фронтенд для сайта",

    // Contacts
    contacts_title: "Я в соцсетях",
    contacts_subtitle: "Свяжитесь со мной через эти платформы",
    vk: "ВКонтакте",
    behance: "Behance",
    tenchat: "TenChat",
    telegram: "Telegram",

    // Portfolio
    portfolio_title: "Портфолио",
    filter_all: "Все",
    filter_web: "Сайты",
    filter_ad: "Реклама",
    filter_design: "Брендинг",
    project1_title: "SkyKitchen (мобильное меню)",
    project1_desc: "Веб-меню для кальян-бара SkyLine в Волгодонске",
    project2_title: "Black Mamba",
    project2_desc: "Дизайн футболки для клуба Black Mamba",
    project3_title: "Криптокошелек и лендинг",
    project3_desc: "Дизайн лендинга и мобильного приложения для криптокошелька 'Social wallet'",

    // Education
    education_title: "Дипломы и сертификаты",
    diploma1: "Диплом НИЯУ МИФИ",
    diploma2: "Сертификат Yudaev School",
    diploma2_desc: "Курс по UX/UI дизайну",
    diploma3: "Сертификат 2",
    diploma3_desc: "Скоро...",

    // Footer
    copyright: "© 2025 Meduza Studio. Все права защищены."
  }
};

// Применение перевода
function applyTranslation(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('language-toggle');
  let currentLang = localStorage.getItem('language') || 'en';

  // Применяем перевод при загрузке
  applyTranslation(currentLang);
  toggleBtn.textContent = currentLang === 'en' ? 'Русский' : 'English';

  // Обработчик кнопки
  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', currentLang);
    applyTranslation(currentLang);
    toggleBtn.textContent = currentLang === 'en' ? 'Русский' : 'English';
  });
});
// Активация мобильного меню
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });