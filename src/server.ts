import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import config from './config/main';
require('./config/connection');
import router from './routes/api';
const app = express(); 

/* Cors */
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET, POST, PUT, DELETE, OPTIONS'],
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());

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
const port = process.env.PORT || config.portAPI;
app.set('port', port);

// create server
app.listen(port, () => {
	console.log('CORS: Enabled \nApi running on localhost:' + port);
});