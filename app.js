const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { DB, PORT } = require('./configuration/config');
const { errorHandler } = require('./middlewares/errorHandler');
const { login, createUser, clearToken } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { loginRequestCheck, userRequestCheck } = require('./modules/validations');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.post('/signin', loginRequestCheck, login);
app.post('/signup', userRequestCheck, createUser);
app.post('/clearcookie', clearToken); // Добавил возможность затирания cookie для удобства тестирования
app.use(cookieParser());
app.use(auth);
app.use(routes);
// Обработчик ошибок celebrate
app.use(errors());

// Централизованный обработчик ошибок
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
