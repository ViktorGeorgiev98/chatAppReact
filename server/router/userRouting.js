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

    try {
        const token = await userServices.login(email, password);
        res.cookie("auth", token, {httpOnly: true});
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
     //    res.text = errorMessage;
         res.status(400).json({ errorMessage });
    }
})

module.exports = router;