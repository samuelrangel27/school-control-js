// const app = require('path');
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import db from './db/index.js';

try {
	db.authenticate();
}
catch(err){
	console.log('Unable to connect to the database')
}

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(`/api`,routes());

app.listen(3000, () => {
	console.log(' Running')
});
export default app;
