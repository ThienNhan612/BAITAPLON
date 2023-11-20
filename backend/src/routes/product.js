const express = require('express');
const router = express.Router();

const BevarageController = require('../app/controllers/BeverageController')
router.delete('/beverages/:id', beverageController.delete);
router.use('/beverage/create', BeverageController.show);
router.use('/', BeverageController.index );
router.put('/beverages/:id', beverageController.updateBeverage);
module.exports = router;