const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoryRouter = require('./categoryRouter');

const router = express.Router();

router.use('/user', userRouter);

router.use('/login', loginRouter);

router.use('/categories', categoryRouter);

module.exports = router;
