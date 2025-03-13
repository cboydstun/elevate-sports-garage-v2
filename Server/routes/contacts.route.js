import express from 'express';
import { postContact,deleteContact,getContacts } from '../controllers/contacts.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js';


const router = express.Router();
router.get('/api/contacts',authenticateUser,getContacts)
router.post('/api/contacts', postContact);
router.delete('/api/contacts/:id',authenticateUser, deleteContact);


export default router;
