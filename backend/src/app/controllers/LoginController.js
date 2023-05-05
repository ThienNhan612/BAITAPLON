
class LoginController {

    //[GET] /news
    index(req, res) {
        res.render('/login');
    }

    //[GET] /news/:id
    show(req, res){
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new LoginController;
