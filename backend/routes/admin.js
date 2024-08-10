import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/roleCheck.js';

const router = express.Router();

// Admin Route: Accessible only by users with the 'admin' role
router.get('/admin/dashboard', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

// Example for another role (e.g., 'manager')
router.get('/manager/tasks', authenticate, authorizeRoles('manager'), (req, res) => {
  res.json({ message: 'Welcome to the manager tasks' });
});

export default router;
