const cards = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards');
const { cardRequestCheck, idCardRequestCheck } = require('../modules/validations');

cards.get('/cards', getCards);
cards.post('/cards', cardRequestCheck, createCard);
cards.delete('/cards/:cardId', idCardRequestCheck, deleteCard);

module.exports = cards;
