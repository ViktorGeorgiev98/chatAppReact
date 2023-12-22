const router = require('express').Router();


router.get('/register', (req, res) => {
    res.send("Register page!")
})

router.post('/register', async (req, res) => {
    const {displayName, email, password, imageUrl} = req.body;
    console.log({displayName, email, password, imageUrl});
    try {

    } catch(e) {
        
    }
})


module.exports = router;