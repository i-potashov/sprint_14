const users = require('express').Router();
const { getUser, getUsers } = require('../controllers/users');
const { idRequestCheck } = require('../modules/validations');

users.get('/users/:userId', idRequestCheck, getUser);
users.get('/users', getUsers);

module.exports = users;
