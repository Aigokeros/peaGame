var control = require('../controllers/control.js');

module.exports = function(app){
    app.get('/second', control.nextPage);
    app.use('/',control.main)
}