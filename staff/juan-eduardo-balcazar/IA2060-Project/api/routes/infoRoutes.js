import express from 'express';
const router = express.Router();
import infoController from '../controllers/infoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware, infoController.createInfo);
router.get('/', authMiddleware, infoController.getInfo);

export default router;
