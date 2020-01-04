import config from './main';
const	mongoose = require('mongoose');

mongoose.connect(config.db, {useNewUrlParser: config.useNewUrlParser});

mongoose.connection.on('error', () => {
	console.log('config.db: ', config.db);
	console.log('config.useNewUrlParser: ', config.useNewUrlParser);
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});

mongoose.connection.once('open', () => {
	console.log('Successfully connected to the database.');
});
