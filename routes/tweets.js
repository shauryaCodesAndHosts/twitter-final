import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { createTweet, deleteTweet, likeOrDislke, getAllTweets, getUserTweets, getExploreTweets } from '../controllers/tweet.js';

const router = express.Router();

router.post('/', verifyToken, createTweet);
router.delete('/:id', verifyToken,deleteTweet);
router.put('/:id/like',likeOrDislke);
router.get("/timeline/:id",getAllTweets);
router.get('/user/all/:id',getUserTweets);
router.get('/explore', getExploreTweets);


export default router;