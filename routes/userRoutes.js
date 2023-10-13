const express = require('express');
const Router = express.Router();

const {getUser, addUser} = require('../controllers/userControllers');

Router.route('/getUser').post(getUser);
Router.route('/addUser').post(addUser);

module.exports = Router;