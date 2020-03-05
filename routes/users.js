const users = require('express').Router();
const { getUser, getUsers } = require('../controllers/users');

users.get('/users/:userId', getUser);
users.get('/users', getUsers);

module.exports = users;
