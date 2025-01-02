import { login, logout, signup } from '@src/controllers/auth.controller';
import { protectRoute } from '@src/middlewares';
import express from 'express';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.delete('/logout', protectRoute, logout);

export = router;
