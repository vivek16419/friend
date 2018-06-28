var express = require('express');
var indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.homepage);

module.exports = router;
