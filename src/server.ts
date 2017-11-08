import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
require('./config/connection');
import router from './routes/api';
const app = express(); 

/* Cors */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

// Set engine
app.set('view engine', 'ejs');

// get verbs admin
app.get('/api/v1/verbs/admin', (req, res) => {
	res.render(__dirname + '/views/verbs');
});

// load router
router(app);

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// create server
app.listen(port, () => {
	console.log('Api running on localhost:' + port);
});