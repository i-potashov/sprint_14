const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const loginRequestCheck = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const userRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().uri(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const cardRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().required().min(2)
      .max(30),
    link: Joi.string().required().uri(),
    owner: Joi.objectId(),
    likes: Joi.objectId(),
  }),
});

const idRequestCheck = celebrate({
  params: Joi.object().keys({
    userId: Joi.objectId().required(),
  }),
});

const idCardRequestCheck = celebrate({
  params: Joi.object().keys({
    cardId: Joi.objectId().required(),
  }),
});

module.exports = {
  loginRequestCheck, userRequestCheck, cardRequestCheck, idRequestCheck, idCardRequestCheck,
};
