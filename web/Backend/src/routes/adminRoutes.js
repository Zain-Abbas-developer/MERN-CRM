import express from 'express';
const router = express.Router();
import * as adminCtrl from '../controllers/admin.controller.js';


router.get('/dashboard', adminCtrl.getDashboard);
router.get('/analytics', adminCtrl.getAnalytics);


router.route('/users')
.get(adminCtrl.getUsers)
.post(adminCtrl.createUser);


router.route('/user/:id')
.put(adminCtrl.updateUser)
.delete(adminCtrl.deleteUser);


router.route('/customers')
.get(adminCtrl.getCustomers)
.post(adminCtrl.createUser);

router.route('/customer/:id')
.put(adminCtrl.updateUser)
.delete(adminCtrl.deleteUser)

router.route('/leads')
.get(adminCtrl.getLeads)
.post(adminCtrl.createLead);

router.route('/lead/:id')
.put(adminCtrl.updateLead)
.delete(adminCtrl.deleteLead);

router.route('/tasks') 
.get(adminCtrl.getTasks)
.post(adminCtrl.createTask);

router.route('/task/:id')
.put(adminCtrl.updateTask)
.delete(adminCtrl.deleteTask);

export default router;