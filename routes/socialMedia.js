var express = require('express');
var router = express.Router();

const controller = require('../controllers/socialMedia');


router.get('/',controller.list);

router.post('/',controller.create);

router.put('/:id',controller.replace);

router.patch('/:id',controller.update);

router.delete('/:id',controller.destroy);

router.get('/:id',controller.index);

module.exports = router;
