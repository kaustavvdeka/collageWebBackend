import { Router } from 'express';
import { getGreeting } from '../controllers/handler';

const router = Router();

router.get('/greet', getGreeting);

export default router;
