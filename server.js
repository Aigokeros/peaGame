var express = require('./config/express');
var app = express();

var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
app.listen(port, function(){
    console.log('Server running at port 3000...')
});