import { Router } from 'express';
import { signup, login,logout } from '../controllers/authController';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', login);
export default router;
