# 🚀 Быстрый запуск сайта курса биоинформатики

## ⚡ За 5 минут

### 1. Создайте репозиторий на GitHub
- Название: `bioinformatics-course`
- Публичный репозиторий
- Добавьте README.md

### 2. Загрузите файлы
```bash
git clone https://github.com/your-username/bioinformatics-course.git
cd bioinformatics-course
# Скопируйте все файлы сайта сюда
git add .
git commit -m "Initial website setup"
git push origin main
```

### 3. Включите GitHub Pages
- Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Save

### 4. Готово! 🎉
Сайт доступен по адресу: `https://your-username.github.io/bioinformatics-course`

## 📱 Локальный запуск

Откройте `index.html` в браузере или запустите локальный сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 🎯 Что дальше?

1. **Изучите** `README.md` - полная документация
2. **Прочитайте** `TEACHER_GUIDE.md` - руководство для преподавателя
3. **Покажите** `STUDENT_GUIDE.md` студентам
4. **Настройте** под свои нужды

## 🔧 Основные файлы

- `index.html` - главная страница
- `styles.css` - стили и дизайн
- `script.js` - функциональность
- `.github/workflows/deploy.yml` - автоматическое развертывание

## 💡 Подсказки

- Сайт полностью готов к использованию
- Все функции работают "из коробки"
- Адаптивный дизайн для всех устройств
- Локальное хранение проектов студентов

---

**Вопросы?** См. `README.md` или создайте issue в репозитории. 