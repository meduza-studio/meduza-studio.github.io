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
document.querySelector('.scroll-down-arrow').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 1, // Прокрутка на 100% высоты экрана
        behavior: 'smooth'             // Плавная анимация
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