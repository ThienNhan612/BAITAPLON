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
    delete(req, res, next) {
        Beverage.findByIdAndDelete(req.params.id)
          .then(deletedBeverage => {
            if (!deletedBeverage) {
              return res.status(404).json({ error: 'Sản phẩm không tồn tại.' });
            }
            return res.status(200).json({ message: 'Sản phẩm đã được xóa thành công.' });
          })
          .catch(next);
      }
    
}


// Hàm xử lý yêu cầu xóa sản phẩm
const deleteBeverage = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBeverage = await Beverage.findByIdAndDelete(id);
  
      if (!deletedBeverage) {
        return res.status(404).json({ error: 'Sản phẩm không tồn tại.' });
      }
  
      return res.status(200).json({ message: 'Sản phẩm đã được xóa thành công.' });
    } catch (error) {
      return res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa sản phẩm.' });
    }
  };
  
  module.exports = {
    deleteBeverage
  };
module.exports = new BeverageController;
