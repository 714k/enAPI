import config from './main';
const	mongoose = require('mongoose');

mongoose.connect(config.db, {useMongoClient: config.useMongoClient});

mongoose.connection.on('error', () => {
	console.log('config.db: ', config.db);
	console.log('config.useMongoClient: ', config.useMongoClient);
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});

mongoose.connection.once('open', () => {
	console.log('Succesfully connected to the database.');
});
