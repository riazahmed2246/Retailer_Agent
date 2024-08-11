import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/admin-data', authenticateToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Admin data access granted' });
});

export default router;
