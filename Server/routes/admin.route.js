import express from 'express';
import { adminLoginFunction } from '../controllers/admin.controller.js';
import { createAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/api/admin', adminLoginFunction);
router.post('/api/admin/new', createAdmin);

export default router;
