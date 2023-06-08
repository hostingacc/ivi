# Иви

Проект представляет собой копию Иви (но без возможности смотреть фильмы), с данными взятыми с кинопоиска.
Для бекенда используется nest + postgres https://github.com/Zagarazhi/movies-backend

Мы используем следующие технологии:

- **Next.js** для использования из коробки таких функций, как маршрутизация и оптимизация изображений, а также для решения и применения различных видов предварительного рендеринга.
- **TypeScript** для упрощения командной работы и повышения надежности кода.
- **Material-UI (MUI)** для создания красивого и функционального пользовательского интерфейса.
- **MobX** для управления состоянием приложения, а также для мемоизации компонентов.
- **Swiper** для создания слайдеров.
- **i18n** для локализации.

## Инструкции по запуску

1. Клонируйте репозиторий с помощью команды `gh repo clone hamedor/ivi`.
2. Перейдите в папку проекта и установите зависимости с помощью команды `npm install`.
3. Введите свой ip адрес в .env файле (без этого не будут работать запросы к бэку).
4. Запустите проект локально с помощью команды `npm run dev`, для запуске в режиме разработчика.

Общее:

- Авторизация с помощью jwt токенов, по почте и паролю;
- Написано много мелких компонентов, а также storybook к ним;
- Подвал и шапка + локализация;
- Дропдаун для шапки с осписком жанров и стран. Ссылки ведут на страницу списка фильмов. К списку применяется выбранный фильтр;
- К функциям и компонентам пишутся тесты, планируется покрытие по максимуму.

Cтраница списка фильмов:

- Фильтрация фильмов по жанрам, странам, актёрам, режисерам, по оценке на кинопоиске.
- Выбранный фильтр отображается в адресной строке браузера.

Страница конкретного фильма:

- Информация о фильме;
- Список актёров и создателей фильма, переход на страницу этих персон;
- Древовидные комментарии с возможностью ответить на комментарий авторизованным пользователем;

Страница персоны:

- Информация о персоне и список фильмов, с возможнностью перейти к конкретному фильму.


