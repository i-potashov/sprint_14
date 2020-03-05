const jwt = require('jsonwebtoken');
const { INVALID_AUTHORIZATION } = require('../configuration/constants');
const { JWT_KEY } = require('../configuration/config');

module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    return res.status(401).send({ message: INVALID_AUTHORIZATION });
  }
  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    return res.status(401).send({ message: INVALID_AUTHORIZATION });
  }

  req.user = payload;

  return next();
};
