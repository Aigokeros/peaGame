var express = require('express')
var engines = require('consolidate');
module.exports = function(){
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(logger('dev'));
    }

    app.engine('html', engines.mustache);
    app.set('view engine', 'html');
    app.set('views', './app/views');
    app.use(express.static('./public'));

    require('../app/routes/router.js')(app);
 return app;
}
