# Project №14 "Yandex_praktikum"
**v 0.0.2**
Configuring the server in a Node.js express.js & MongoDB and and implement authentication and authorization with cookies

**Modules:**
```sh
"body-parser", "celebrate", "express", "joi-objectid", 
"mongoose", "validator", "eslint", "eslint-config-airbnb-base", 
"eslint-plugin-import", "nodemon", "jsonwebtoken", "mongoose-unique-validator", "cookie-parser"
```
### Getting started

The sprint_14 was created on the [Node.js](https://nodejs.org/) v12+.

**Start server:**
```sh
$ npm install
$ npm run start
```
**Start server with hot reload:**
```sh
$ npm install
$ npm run dev
```

**For analyzes your code to quickly find and fix problems:**
```sh
$ npm run eslint
$ npm run eslintfix
```
### Docker

**After starting the server, you can try these queries:**

```sh
POST /signin
POST /signup
POST /clearcookie
GET /users
GET /users/:userId
GET /cards
POST /cards
```
### Todos

 - Add automated testing
 - Fix custom errors
 
### License

MIT
