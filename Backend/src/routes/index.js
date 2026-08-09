import express from 'express';
const router = express.Router();


import adminRoutes from  './adminRoutes.js';
import employeeRoutes from './employeeRoutes.js';
import customerRoutes from  './customerRoutes.js';
import chatRoutes from './chatRoutes.js';


//protected routes here add
import { protect, authorize } from '../middleware/authMiddleware.js';

router.use('/admin', protect, authorize('admin') ,adminRoutes);
router.use('/employee', protect, authorize('employee') ,employeeRoutes);
router.use('/customer', protect, authorize('customer'), customerRoutes);


router.use('/chat', protect, chatRoutes);

export default router;