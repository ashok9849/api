var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  mongoose = require('mongoose'),
  Task = require('./api/models/apiModel'), //created model loading here
  bodyParser = require('body-parser');
 
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var dbhost = "mongodb+srv://ashok123:ashok123@mongodb01-fu0rm.mongodb.net/test?retryWrites=true"
// mongoose.connect('mongodb://127.0.0.1:27017/wms');
mongoose.connect(dbhost)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('server started on: ' + port);