# 🧬 Практическая биоинформатика - HSE

Современный веб-сайт для курса практической биоинформатики в Высшей школе экономики. Сайт создан с использованием HTML5, CSS3 и JavaScript, оптимизирован для GitHub Pages.

## ✨ Особенности

- 🎨 Современный и отзывчивый дизайн
- 📱 Полная поддержка мобильных устройств
- 🔍 Поиск по проектам студентов
- 📊 Динамическое добавление проектов
- 💾 Локальное хранение данных
- 📤 Экспорт/импорт проектов
- 🎭 Красивые анимации и эффекты
- 🌐 Готовность к развертыванию на GitHub Pages

## 🚀 Быстрый старт

### 1. Клонирование репозитория

```bash
git clone https://github.com/your-username/bioinformatics-course.git
cd bioinformatics-course
```

### 2. Локальный запуск

Откройте файл `index.html` в любом современном браузере или используйте локальный сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен)
npx serve .

# PHP (если установлен)
php -S localhost:8000
```

Затем откройте `http://localhost:8000` в браузере.

## 🌐 Развертывание на GitHub Pages

### Автоматическое развертывание

1. **Создайте новый репозиторий** на GitHub
2. **Загрузите файлы** в репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

3. **Включите GitHub Pages**:
   - Перейдите в Settings → Pages
   - В Source выберите "Deploy from a branch"
   - Выберите ветку "main" и папку "/ (root)"
   - Нажмите Save

4. **Сайт будет доступен** по адресу: `https://your-username.github.io/your-repo-name`

### Ручное развертывание

Если автоматическое развертывание не работает:

1. Создайте ветку `gh-pages`:
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. В настройках репозитория выберите ветку `gh-pages` для GitHub Pages

## 📁 Структура проекта

```
bioinformatics-course/
├── index.html          # Главная страница
├── styles.css          # Стили CSS
├── script.js           # JavaScript функциональность
├── README.md           # Документация
└── .github/            # GitHub Actions (опционально)
    └── workflows/
        └── deploy.yml
```

## 🎯 Основные разделы сайта

### 1. Главная страница (Hero Section)
- Привлекательный заголовок с анимацией
- Краткое описание курса
- Кнопки навигации

### 2. Темы курса
- Анализ метагенома
- GWAS анализ
- Выравнивание последовательностей
- Сборка геномов
- Анализ микробиома
- Программирование для биоинформатики

### 3. Студенческие проекты
- Галерея проектов
- Форма добавления новых проектов
- Поиск по проектам
- Экспорт/импорт данных

### 4. Полезные ресурсы
- Инструменты биоинформатики
- Базы данных
- Учебные материалы

### 5. О курсе
- Описание курса
- Особенности обучения
- Статистика

## 🛠️ Настройка и кастомизация

### Изменение цветовой схемы

Отредактируйте CSS переменные в файле `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Основной цвет */
    --secondary-color: #7c3aed;    /* Вторичный цвет */
    --accent-color: #06b6d4;       /* Акцентный цвет */
    /* ... другие цвета */
}
```

### Добавление новых тем

1. Добавьте новую тему в HTML секцию `topics`:
   ```html
   <div class="topic-card">
       <div class="topic-icon">
           <i class="fas fa-your-icon"></i>
       </div>
       <h3>Название темы</h3>
       <p>Описание темы</p>
       <div class="topic-tags">
           <span class="tag">Тег 1</span>
           <span class="tag">Тег 2</span>
       </div>
   </div>
   ```

2. Добавьте тему в форму добавления проектов в `script.js`:
   ```javascript
   const topicLabels = {
       // ... существующие темы
       'new-topic': 'Название темы'
   };
   ```

### Изменение логотипа

Замените иконку и текст в навигации:

```html
<div class="nav-logo">
    <i class="fas fa-your-icon"></i>
    <span>Ваш логотип</span>
</div>
```

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- 🖥️ Десктопные компьютеры (1200px+)
- 💻 Планшеты (768px - 1199px)
- 📱 Мобильные устройства (до 767px)

## 🔧 Технические требования

- **Браузеры**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **JavaScript**: ES6+ (современные браузеры)
- **CSS**: CSS3 с поддержкой Grid и Flexbox
- **Шрифты**: Inter (Google Fonts)
- **Иконки**: Font Awesome 6.0+

## 📊 Функциональность

### Управление проектами
- ✅ Добавление новых проектов
- ✅ Редактирование существующих
- ✅ Поиск по проектам
- ✅ Фильтрация по темам
- ✅ Экспорт/импорт данных

### Интерактивность
- 🎭 Анимации при прокрутке
- 🎨 Hover эффекты
- 📱 Мобильное меню
- 🔍 Поиск в реальном времени
- 💾 Локальное хранение

## 🚀 Производительность

- ⚡ Оптимизированные изображения
- 🎯 Ленивая загрузка анимаций
- 💾 Эффективное хранение данных
- 📱 Оптимизация для мобильных устройств

## 🔒 Безопасность

- ✅ Валидация форм на клиенте
- ✅ Безопасная обработка данных
- ✅ Защита от XSS атак
- ✅ Локальное хранение данных

## 📈 Аналитика и SEO

Для добавления аналитики и SEO:

1. **Google Analytics**:
   ```html
   <!-- Global site tag (gtag.js) - Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Meta теги для SEO**:
   ```html
   <meta name="description" content="Курс практической биоинформатики в HSE">
   <meta name="keywords" content="биоинформатика, геномика, метагеномика, GWAS">
   <meta property="og:title" content="Практическая биоинформатика - HSE">
   <meta property="og:description" content="Изучаем современные методы анализа биологических данных">
   ```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 📞 Поддержка

Если у вас есть вопросы или предложения:

- 📧 Email: bioinformatics@hse.ru
- 🐛 Issues: Создайте issue в GitHub
- 💬 Discussions: Используйте GitHub Discussions

## 🙏 Благодарности

- Шрифты: [Inter](https://rsms.me/inter/) от Rasmus Andersson
- Иконки: [Font Awesome](https://fontawesome.com/)
- Изображения: [Unsplash](https://unsplash.com/)

---

**Создано для курса "Практическая биоинформатика" в Высшей школе экономики** 🎓 