
class CoffeeController {

    //[GET] /news
    index(req, res) {
        res.render('/coffee');
    }

    //[GET] /news/:id
    show(req, res){
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new CoffeeController;
