import express from 'express';
import {getHours,updateHours } from '../controllers/hours.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js';


const router = express.Router();

router.get('/api/hours', getHours);
router.put('/api/hours',authenticateUser, updateHours);

export default router;
