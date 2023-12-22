const router = require('express').Router();
const userModel = require('../services/userServices');

router.get('/register', (req, res) => {
    res.send("Register page!")
})

router.post('/register', async (req, res) => {
    const {displayName, email, password, imageUrl} = req.body;
    console.log({displayName, email, password, imageUrl});

    try {
        const newUser = await userModel.createNewUser(displayName, email, password, imageUrl);
        console.log({newUser});
        if (res.ok) {
            res.status(200).send(newUser);
        } else {
            throw new Error(res.statusText);
        }
    } catch(e) {
        console.log(e.message);
    }
})


module.exports = router;