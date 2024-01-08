const chatRoomModel = require('../database/User');


chatRoomModel.createChatRoom = async (roomId, participant1, participant2) => {
    return await chatRoomModel.create({
        roomId: roomId,
        participants: [
            { user: participant1, messages: [] },
            { user: participant2, messages: [] }
        ]
    });
};


chatRoomModel.findByRoomId = async (roomId) => {
    return await chatRoomModel.find({roomId: roomId})
}

chatRoomModel.addMessageFromUser = async (user, message) => {
    room.participants.find(participant => participant.user.equals(user))
      .messages.push({
        sender: user,
        message: message
      });
}

chatRoomModel.getAllMessagesForBothUsers = async (user1, user2) => {
    const user1Messages = await chatRoomModel.find({participantId: user1}).messages;
    const user2Messages = await chatRoomModel.find({participantId: user2}).messages;
    const allMessages = {user1Messages: user1Messages, user2Messages: user2Messages};
    return allMessages;
}




module.exports = chatRoomModel;