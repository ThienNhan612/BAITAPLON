
class TeaController {

    //[GET] /news
    index(req, res) {
        res.render('/tea');
    }

    //[GET] /news/:id
    show(req, res){
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new TeaController;
