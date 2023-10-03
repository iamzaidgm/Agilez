var express = require('express');
var router = express.Router();

const controller = require('../controllers/controlBoards');


router.post('/',controller.create);

router.get('/',controller.list);

router.get('/:id',controller.index);

router.put('/:id',controller.replace);

router.patch('/:id',controller.update);

router.delete('/:id',controller.destroy);




module.exports = router;