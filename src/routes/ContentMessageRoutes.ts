import express from 'express';
import { addContentMessages } from '../controlllers/ContentMessageController';

const router = express.Router();

// Add an array of contentMessage objects to the current collection
router.post('/', addContentMessages);

export default router;
