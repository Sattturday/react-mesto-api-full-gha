## 🧩 Mesto (версия с фронтендом и бэкендом)

Это продолжение работы над проектом Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.
Работа выполнена в рамках серии проeктных работ на курсе Web-разработчик (Яндекс Практикум).

<img src="https://github.com/Sattturday/Sattturday/blob/main/Mesto.gif" alt="demo" width="600">


1. [Mesto (версия на чистом JavaScript)](https://github.com/Sattturday/mesto)
2. [Mesto (версия на React)](https://github.com/Sattturday/mesto-react)
3. [Mesto (версия на React с авторизацией и регистрацией)](https://github.com/Sattturday/react-mesto-auth)
4. [Mesto (версия для сервера)](https://github.com/Sattturday/express-mesto-gha)
5. Mesto (версия с фронтендом и бэкендом) ⬅ этот репозиторий

### ✨ Демо приложения
- #### 💻 Часть с фронтендом
Открыть в браузере [приложение Mesto](https://sattturday.nomoredomains.sbs)

- #### 🖥 Сервер с API
https://api.sattturday.nomoredomains.sbs/react-mesto-auth <br>

### 🔧 Тестирование падения сервера
Для принудительного падения сервера нужно отправить GET-запрос на URL /crash-test.<br>

### 🏚️ Структура проекта
1. backend/ - бэкенд для сервера с API
2. frontend/ - фронтенд на React.js

### 💥 Дополнительные возможности этой версии
 ***Фронтенд***
  - React-приложение адаптировано под рабочий API-сервер (вместо учебного сервера Я.Практикума в предыдущих версиях)
  - вся функциональность приложения сохранена
    
 ***Бэкенд***
  - фронтенд и бэкенд на одном сервере с доступом через домен
  - сбор логов запросов к серверу в файл request.log
  - сбор логов ошибок на сервере в файл error.log
  - доступ к серверу через ssh
  - автоматический запуск/перезапуск БД на сервере
  - автоматический запуск/перезапуск сервера
  - настроенный файрвол для работы с портами
  - обработка CORS-запросов на сервере
  - доступ через https

### 👩‍💻 Стек технологий
  - сервер на Ubuntu в Яндекс.Облаке
  - ssh-ключи для доступа к серверу
  - API-сервер на Node.js + express.js
  - база данных на MongoDB + Mongoose
  - обновление кода на сервере через Git
  - менеджер процессов на сервере pm2
  - раздача фронтенда через nginx
  - обратный прокси-сервер на nginx
  - файрвол ufw
  - SSL-сертификаты 
  - хранение переменных окружения в .env-файле

## Установка и запуск

Для запуска проекта в своей среде разработке следуйте следующим инструкциям:

Клонируйте репозиторий
```
git clone https://github.com/Sattturday/react-mesto-api-full-gha.git
```
***Бэкенд***
Перейдите в директорию backend и установите пакеты NPM
```
npm install
```
Запустить сервер
```
npm run dev
```

***Фронтенд***
Перейдите в директорию frontend и установите пакеты NPM
```
npm install
```
Запустите приложение
```
npm start
```
Если у вас не произошел автоматический переход в браузер с открытым приложением, введите в адресную строку самостоятельно - http://localhost:3000
В процессе изменения кода страница будет автоматически перезагружаться.
    
### 🌟 Статус разработки
✅ Завершено
