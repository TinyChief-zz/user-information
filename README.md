# Just In/Out
Небольшое приложение, которое позволяет зарегистрироваться и просматривать введнные персональные данные.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9ec6107-a7f0-480a-a658-cd2dd30016bb/deploy-status)](https://app.netlify.com/sites/user-information/deploys)


## Что реализовано:
* Сервер на **Node.js** и **Express.js** (размещен на heroku.com)
* База данных **MongoDB** c **mongouse** (размещена на mlab.com)
* Клиент на **VueJS**

## Для дальнейшей разработки
* Добавление контроллера для CRUD операция над моделью `User`. Защита новых маршрутов (например, `api/user/update`) с помощью стратегий **Passport.js**.
* Добавление **VueRouter** и **Vuex** при усложнении логики клиентской части.
* Добавление тестов.
* Более выразительный и продвинутый UI.

