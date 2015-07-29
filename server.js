var express = require('express');
var app = express();


var pub_dir = __dirname + '/public';
var view_dir = 
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.static(pub_dir));



// set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', function(req, res) { 
	res.render('home');
});
app.get('/about', function(req, res) {
    res.render('about');
});


app.get('/headers', function(req,res){
	res.set('Content-Type','text/plain');
	var s = '';
	for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n'; res.send(s);
});

app.get('/greeting', function(req, res){ res.render('about', {
                message: 'welcome',
                style: req.query.style || ""
                //userid: req.cookie.userid || "",
                //username: req.session.username || "",
}); });


app.get('/api/tours', function(req, res){
var toursXml = '<?xml version="1.0"?><tours>' ;
//products.map(function(p){
//return '<tour price="' + p.price +
//                                '" id="' + p.id + '">' + p.name + '</tour>';
//                }).join('') + '</tours>'';
//        var toursText = tours.map(function(p){
//                        return p.id + ': ' + p.name + ' (' + p.price + ')';
//                }).join('\n');
//        res.format({
//
//                'application/json': function(){
//                        res.json(tours);
//                },
//                'application/xml': function(){
//                        res.type('application/xml');
//                        res.send(toursXml);
//                },
//                'text/xml': function(){
//                        res.type('text/xml');
//                        res.send(toursXml);
//                }
//                'text/plain': function(){
//                        res.type('text/plain');
//                        res.send(toursXml);
//				} 
//		});
//
		res.type('text/plain');
		res.send(toursXml);
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){ 
	res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){ 
	console.error(err.stack);
    res.status(500);
    res.render('500');
});




app.listen(app.get('port'), function(){
	console.log( 'Server started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
})
