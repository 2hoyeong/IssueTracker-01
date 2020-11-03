import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import milestone from './api/milestone';
import githubRouter from './oauth/github';
import apiComment from './api/comment';
import labelRouter from './api/label';

const router = express.Router();

router.use('/oauth/github', githubRouter);
router.use('/api/milestone', passport.authenticate('jwt', { session: false }), milestone);
router.use('/api/comment', passport.authenticate('jwt', { session: false }), apiComment);
router.use('/api/label', passport.authenticate('jwt', { session: false }), labelRouter);

router.get('/', (req, res) => {
  return res.send('ok');
});

router.get('/validate/jwt', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.sendStatus(200);
});

export default router;
