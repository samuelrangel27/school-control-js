import express from 'express';

import * as StudentController from '../controllers/student.controller.js';

const router = express.Router();

router.get('', StudentController.getAll);
export default router;