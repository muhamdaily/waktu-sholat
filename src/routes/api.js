import express from 'express';
import { getRandomQuote } from '../controllers/mainController.js';

const router = express.Router();

router.get('/quotes/random', getRandomQuote);

export default router;