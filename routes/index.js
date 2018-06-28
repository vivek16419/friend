var express = require('express');
var indexController = require('../controllers/indexController');
var aboutController = require('../controllers/aboutController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.homepage);

router.get('/about', aboutController.about);

router.get('/project',indexController.project);

router.get('/service', indexController.service);

router.get('/contact' ,indexController.contact);

module.exports = router;
