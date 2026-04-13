# 🚕 URAL GO Park Perm

> Лендинг таксопарка «URAL GO» — подключение водителей к Яндекс.Про в г. Пермь

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=flat&logo=gulp&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 О проекте

Одностраничный лендинг для таксопарка **URAL GO Park Perm**, ориентированный на привлечение водителей для подключения к агрегатору Яндекс.Такси через приложение Яндекс.Про.

Сайт не содержит форм заявок — акцент сделан на прямой контакт: кнопки звонка, мессенджеры (Telegram, WhatsApp, VK, MAX).

### 🔗 [Демо](https://itmtm.github.io/uralgo/)

---

## ✨ Возможности

- 📱 **Полная адаптивность** — десктоп, планшет, мобильные устройства
- 🎨 **Современный дизайн** — тёмный hero + светлые секции, оранжевые акценты
- 📞 **CTA-кнопки** — звонок, Telegram, WhatsApp, VK, MAX с иконками
- 🗺️ **Яндекс.Карта** — встроенная карта с адресом офиса
- ❓ **FAQ-аккордеон** — интерактивный блок частых вопросов
- 👥 **Секция команды** — карточки сотрудников с фото
- 💰 **Тарифы** — наглядное сравнение двух тарифных планов
- 🔄 **Бегущая строка** — ключевые преимущества в тикере
- 📜 **Юридические страницы** — политика конфиденциальности, согласие на обработку ПД
- 🍪 **Cookie-баннер** — с запоминанием выбора через localStorage
- 🔍 **SEO-оптимизация** — Open Graph теги, favicon, мета-теги
- 🎯 **Плавающая кнопка** — кнопка звонка появляется при скролле
- ✨ **Анимации** — scroll reveal, hover-эффекты, fadeInUp
- 💫 **Shimmer-эффект** — анимация золотого блика на кнопках звонка
- 🎨 **Кастомный скроллбар** — в цвет акцента сайта
- 👨‍💻 **Подпись разработчика** — в футере с анимацией свечения

---

## 🛠️ Технологии

| Технология | Назначение |
|---|---|
| HTML5 | Разметка |
| SCSS (модульная архитектура) | Стилизация, анимации, адаптив |
| JavaScript (ES6+) | Интерактивность, FAQ, бургер-меню |
| Gulp 4 | Сборка, минификация, autoprefixer, sourcemaps |
| Google Fonts | Шрифты Unbounded + Manrope |
| SVG | Иконки |
| Яндекс.Карты | Встроенная карта |

---

## 📁 Структура проекта

```
ural-go/
├── docs/                        # Исходники для разработки
│   ├── css/
│   │   ├── style.min.css        # Скомпилированные стили (генерируется gulp)
│   │   └── style.min.css.map    # Source map для отладки (генерируется gulp)
│   ├── scss/
│   │   ├── blocks/              # Блоки — по одному файлу на компонент
│   │   │   ├── _advantages.scss
│   │   │   ├── _btn.scss
│   │   │   ├── _contacts.scss
│   │   │   ├── _cookies.scss
│   │   │   ├── _cta-banner.scss
│   │   │   ├── _faq.scss
│   │   │   ├── _floating-cta.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _how.scss
│   │   │   ├── _conditions.scss
│   │   │   ├── _page-404.scss
│   │   │   ├── _privacy-page.scss
│   │   │   ├── _team.scss
│   │   │   └── _ticker.scss
│   │   ├── libs/                # Базовые стили
│   │   │   ├── _overall.scss    # Утилиты: .container, .reveal, .section-header, скроллбар
│   │   │   ├── _reset.scss      # Сброс стилей и базовые теги
│   │   │   └── _variables.scss  # CSS-переменные (цвета, шрифты, размеры)
│   │   ├── media/               # Медиа-запросы по брейкпоинтам
│   │   │   ├── _360.scss
│   │   │   ├── _480.scss
│   │   │   ├── _600.scss
│   │   │   ├── _700.scss
│   │   │   ├── _768.scss
│   │   │   ├── _900.scss
│   │   │   ├── _992.scss
│   │   │   ├── _1024.scss
│   │   │   ├── _1200.scss
│   │   │   ├── _1300.scss
│   │   │   ├── _1400.scss
│   │   │   ├── _1500.scss
│   │   │   ├── _1600.scss
│   │   │   ├── _1700.scss
│   │   │   ├── _1800.scss
│   │   │   └── _index.scss      # Подключение всех медиа-файлов
│   │   ├── _hovers.scss         # Все hover-состояния
│   │   ├── _keyframes.scss      # CSS-анимации (fadeInUp, bounce, pulse-glow, shimmer)
│   │   └── style.scss           # Главный файл — подключает все модули
│   ├── js/
│   │   ├── script.js            # Исходный JS
│   │   └── script.min.js        # Минифицированный JS (генерируется gulp)
│   ├── img/
│   │   ├── logo.png             # Логотип парка
│   │   ├── hero.avif            # Фон hero-секции (десктоп)
│   │   ├── hero-mini.avif       # Фон hero-секции (мобильный)
│   │   ├── og-image.png         # Изображение для Open Graph (1200×630)
│   │   ├── direktor.avif        # Фото директора
│   │   ├── pomoshchnik.avif     # Фото помощника
│   │   ├── dispetcher.avif      # Фото диспетчера
│   │   └── favicon_io/          # Набор favicon
│   ├── icons/
│   │   ├── telegram.svg
│   │   ├── whatsapp.svg
│   │   ├── vk.svg
│   │   └── max.svg
│   ├── index.html               # Главная страница (лендинг)
│   ├── privacy.html             # Политика конфиденциальности
│   ├── personal.html            # Согласие на обработку ПД
│   ├── 404.html                 # Страница ошибки 404
│   ├── sitemap.xml              # Карта сайта для поисковиков
│   ├── robots.txt               # Инструкции для поисковых роботов
│   ├── .htaccess                # Настройка Apache (404, чистые URL)
│   └── web.config               # Конфиг для IIS (Windows-хостинг)
├── dist/                        # Продакшн-сборка (генерируется gulp build)
├── gulpfile.js                  # Конфигурация сборщика (ESM)
├── package.json                 # Зависимости проекта
└── README.md
```

---

## 🚀 Запуск

```bash
# Клонировать репозиторий
git clone https://github.com/itmtm/uralgo.git

# Перейти в папку
cd ural-go

# Установить зависимости
npm install

# Запустить dev-сервер с watch
gulp

# Собрать продакшн в dist/
gulp build
```

---

## 🌐 Деплой на хостинг (Timeweb)

1. Выполнить `gulp build` — в папке `dist/` появится готовая сборка
2. `.htaccess`, `robots.txt` и `sitemap.xml` уже в папке `docs/` — при `gulp build` автоматически копируются в `dist/`
3. Залить содержимое `dist/` в папку `public_html` на хостинге
4. Заменить домен в `og:url` и `twitter:url` в `index.html`
5. Заменить домен в `sitemap.xml` и `robots.txt`
6. Отправить `sitemap.xml` в Яндекс.Вебмастер и Google Search Console

---

## ⚙️ Настройка перед деплоем

Перед деплоем замените заглушки в `privacy.html` и `personal.html`:

| Заглушка | Что подставить |
|---|---|
| `[ФИО ИП]` | Полное ФИО индивидуального предпринимателя |
| `[ОГРНИП]` | Номер ОГРНИП |
| `[email@example.com]` | Рабочий email |
| `[юридический адрес ИП]` | Юридический адрес регистрации |
| `[адрес сайта]` | URL сайта |

---

## 📄 Лицензия

MIT © 2026 URAL GO Park Perm

---

<p align="center">
  <b>URAL GO Park Perm</b> — подключение водителей к Яндекс.Про
  <br>
  📞 +7 (908) 267-00-67 · 📍 г. Пермь
  <br><br>
  Made with ♥ by <a href="https://github.com/ITmTm">ITmTm</a>
</p>