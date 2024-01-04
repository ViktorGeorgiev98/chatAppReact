const router = require('express').Router();
const userModel = require('../services/userServices');
const { extractErrorMessage } = require('../utils/errorHandler');
const bcrypt = require('bcrypt');

router.get('/register', async (req, res) => {
    res.send(await userModel.getAllUsers());
})

router.post('/register', async (req, res) => {
    const {displayName, email, password, imageUrl} = req.body;
    // console.log(req.body);
    // console.log({displayName, email, password, imageUrl});

    try {
        const userExists = await userModel.findUserByEmail(email);
        if (userExists) {
            res.status(404);
            throw new Error("User exists!")
        }
           
        const newUser = await userModel.createNewUser(displayName, email, password, imageUrl);
        console.log({newUser});
        if (newUser) {
            res.status(200).send(newUser);
            return newUser;
        } else {
            throw new Error(res.text);
        }
       
    } catch(e) {
       const errorMessage = extractErrorMessage(e);
       console.log(errorMessage);
    //    res.text = errorMessage;
        res.status(400).json({ errorMessage });

    }
})

router.get('/login', async (req, res) => {
    res.send(await userModel.getAllUsers());
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    console.log({email, password})

    try {
        const userAndToken = await userModel.login(email, password);
        res.cookie("auth", userAndToken.token, {httpOnly: true});
        res.status(200).send(userAndToken);
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
     //    res.text = errorMessage;
         res.status(400).json({ errorMessage });
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie("auth");
    res.status(204).send("Logged out!");
})

router.post('/users', async (req, res) => {
    const { username } = req.body;
    try {
        const user = await userModel.findUserByUsername(username);
        if (user) {
            res.status(200);
            res.send(user);
        } else {
            res.status(204);
            res.send("User not found!");
        }
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
        res.status(400).json({ errorMessage });

    }
})

module.exports = router;