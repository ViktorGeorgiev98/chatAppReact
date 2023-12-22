const router = require('express').Router();
const userModel = require('../services/userServices');

router.get('/register', async (req, res) => {
    res.send(await userModel.getAllUsers());
})

router.post('/register', async (req, res) => {
    const {displayName, email, password, imageUrl} = req.body;
    console.log(req.body);
    console.log({displayName, email, password, imageUrl});

    try {
        const newUser = await userModel.createNewUser(displayName, email, password, imageUrl);
        console.log({newUser});
        if (res.ok) {
            res.status(200).send(newUser);
            return newUser;
        } else {
            // res.status(404).send(res.statusText);
            // throw new Error(res.statusText);
        }
    } catch(e) {
        res.send(e.message)
        console.log(e.message);
    }
})


module.exports = router;