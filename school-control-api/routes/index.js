import express from 'express';
const router = express.Router();

import studentRoute from './student.route.js';

const routes = () => {
	router.get('/', (req,res) => {
		res.json('Welcome');
	});
	router.use('/students',studentRoute);
	return router;
}

export default routes;