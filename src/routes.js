import { Router } from 'express';
import createUserController from './controllers.js';

const router = Router();

router.post('/', createUserController);

export default router;