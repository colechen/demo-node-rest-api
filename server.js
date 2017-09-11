var express = require('express'),
  app = express(),
  port = process.env.PORT || 5001,
  bodyParser = require('body-parser');
//var cors = rquire('cors');
//cors is for cross origin resource sharing
//npm install node-dev and start with node-dev. Automatically restart server when changes are made


app.use(bodyParser.urlencoded({ extended: true })); //request send using html form which is encoded in url
app.use(bodyParser.json()); //request send as json

//app.use will add middleware before it finds a route. It adds a middleware to pipeline. 
//next() is required to go to next middle ware
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
})
app.use(express.static("./public"));

// app.use(cors());

var routes = require('./api/routes/recordRoutes'); //importing route
routes(app); //register the route
//app.use('/records', routes);



app.listen(port);

console.log('RESTful API server started on: ' + port);
