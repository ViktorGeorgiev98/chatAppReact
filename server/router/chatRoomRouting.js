const router = require('express').Router();
const { createChatRoom, findByRoomId, getUserChats } = require('../services/chatRoomServices');
const { extractErrorMessage, } = require('../utils/errorHandler');

router.get('/userChats', async (req, res) => {
    const { user } = req.body;
    
    try {
        const userChats = await getUserChats(user);
        res.status(200).send(userChats);
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
        res.status(400).json({ errorMessage });
    }
})

router.post('/chatroom', async (req, res) => {
    const { participant1, participant2 } = req.body;
    console.log({participant1, participant2})
    const roomId = `${participant1}${participant2}`;
    console.log({roomId})
    try {
        const room = await findByRoomId(roomId);
        console.log({room});
        if (room.length === 0) {
            console.log('create room')
            const newRoom = await createChatRoom(roomId, participant1, participant2);
            res.status(200).send(newRoom);
        } else {
            console.log('room exists')
            res.status(200).send(room);
        }
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
        res.status(400).json({ errorMessage });
    }

})

module.exports = router;