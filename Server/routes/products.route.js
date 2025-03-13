import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct,deleteProduct } from '../controllers/products.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js'
const router = express.Router();
router.get('/api/products', getProducts)
router.get('/api/products/:id', getProductById)
router.post('/api/products', authenticateUser, createProduct)
router.put('/api/products/:id',authenticateUser,updateProduct)
router.delete('/api/products/:id',authenticateUser,deleteProduct)


export default router;
