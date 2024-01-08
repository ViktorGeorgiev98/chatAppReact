const router = require('express').Router();
const chatRoomModel = require('../services/chatRoomServices');
const { extractErrorMessage } = require('../utils/errorHandler');


router.post('/chatroom', async (req, res) => {
    const { participant1, participant2 } = req.body;
    const roomId = `${participant1}${participant2}`;
    try {
        const room = await chatRoomModel.findRoomById(roomId);
        if (!room) {
            const newRoom = await chatRoomModel.createNewRoom(roomId, participant1, participant2);
            res.status(200).send(newRoom);
        } else {
            res.status(200).send(room);
        }
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
        res.status(400).json({ errorMessage });
    }

})

module.exports = router;