import express from 'express';

import authRoutes from '@src/routes/auth.route';
import categoryRoute from '@src/routes/category.route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/category', categoryRoute);

export default router;
