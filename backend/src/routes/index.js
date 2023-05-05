const bookRouter = require('./book');
const siteRouter = require('./site');
const beverageRouter = require('./beverage')


function route(app) {
    
    app.use('/book', bookRouter);
    app.use('/beverage', beverageRouter);
    app.use('/', siteRouter);

}

module.exports = route;