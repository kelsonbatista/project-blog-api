const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');

const router = express.Router();

router.use('/user', userRouter);

router.use('/login', loginRouter);

module.exports = router;
