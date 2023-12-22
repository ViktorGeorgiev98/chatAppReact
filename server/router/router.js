const express = require("express");
const router = express.Router();
const userRouter = require('../router/userRouting');

router.get('/', (req, res) => {
    res.send("Hello from server!");
})

router.use('/users', userRouter);

router.get('*', (req, res) => {
    res.send("Page not found!");
})


module.exports = router;