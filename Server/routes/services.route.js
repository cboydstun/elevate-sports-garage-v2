import express from 'express';
import { createService, getServices, getServiceById, updateService,deleteService } from '../controllers/services.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js'
const router = express.Router();
router.get('/api/services', getServices)
router.get('/api/services/:id', getServiceById)
router.post('/api/services', authenticateUser, createService)
router.put('/api/services/:id',authenticateUser,updateService)
router.delete('/api/services/:id',authenticateUser,deleteService)


export default router;
