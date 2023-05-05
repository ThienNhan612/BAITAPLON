const Book= require('../models/Books');
const { multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');
class BookController {

     // [GET] /books/:id
     show(req, res, next) {
        Book.findOne({ _id: req.params.id })
            .then(book => {
                res.send(mongooseToObject(book))
            })
            .catch(next);
    }

    //[GET] /news
    index(req, res) {
        res.render('/book');
    }

    //[GET] /news/:slug
    show(req, res){
        res.send('NEW DETAIL!!!');
    }

    // [POST] /book/store
    store(req, res, next) {

        const formData = req.body;
        const book = new Book(formData);
        book.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));

    }

}

module.exports = new BookController;
