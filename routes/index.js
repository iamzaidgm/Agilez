var express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Agilez' });
});

router.post('/login',controller.login);

module.exports = router;
