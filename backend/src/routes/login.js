const express = require('express');
const router = express.Router();

const BookController = require('../app/controllers/BookController')


router.post('/login', BookController.login);

router.get('/:id', BookController.show);
module.exports = router;


