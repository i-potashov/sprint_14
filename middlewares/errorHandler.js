const { SERVER_ERROR } = require('../configuration/constants');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({ message: statusCode === 500 ? SERVER_ERROR : message });
  // console.log('Сработал централизованный обработчик ошибок');
};

module.exports = {
  errorHandler,
};
