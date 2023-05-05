const express = require('express');
const router = express.Router();

const BeverageController = require('../app/controllers/BeverageController')

router.get('/coffee', BeverageController.index);

router.get('/tea', BeverageController.index);

router.post('/store', BeverageController.store);

router.get('/', BeverageController.index);

router.get('/:id', BeverageController.show);


module.exports = router;