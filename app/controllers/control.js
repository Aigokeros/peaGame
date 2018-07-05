exports.nextPage = function(req, res, next){
    res.render('second.html');
}

exports.main = function(req, res, next){
    res.render('index.html');
}