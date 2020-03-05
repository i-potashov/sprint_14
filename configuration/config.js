const DB = 'mongodb://localhost:27017/mestodb';
const PORT = process.env.PORT || 3000;
const JWT_KEY = 'secret_key';

module.exports = {
  DB,
  PORT,
  JWT_KEY,
};
