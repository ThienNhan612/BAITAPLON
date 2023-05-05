const Beverage = require('../models/Beverages');
const { multipleMongooseToObject,  mongooseToObject} = require('../../util/mongoose');

class BeverageController {
    ///[GET] /beverage/ :id
    show(req, res, next) {
        Beverage.findOne({ _id: req.params.id })
            .then(beverage => {
                res.send(mongooseToObject(beverage))
            })
            .catch(next);
    }

    //[GET] /beverage/tea, /beverage/coffee
    index(req, res, next) {
        Beverage.find({})
            .then(beverages => {
                res.send({ beverages: multipleMongooseToObject(beverages) });
            })
            .catch(next);
    }

    // [POST] /beverage/store
    store(req, res, next) {

        const formData = req.body;
        const beverage = new Beverage(formData);
        beverage.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));

    }

}

module.exports = new BeverageController;
