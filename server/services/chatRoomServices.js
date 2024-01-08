const chatRoomModel = require('../database/Chats');


exports.createChatRoom = async (roomId, participant1, participant2) => {
    return await chatRoomModel.create({
        roomId: roomId,
        participants: [
            { user: participant1, messages: [] },
            { user: participant2, messages: [] }
        ]
    });
};


exports.findByRoomId = async (roomId) => {
    return await chatRoomModel.find({roomId: roomId})
}

exports.addMessageFromUser = async (user, message) => {
    room.participants.find(participant => participant.user.equals(user))
      .messages.push({
        sender: user,
        message: message
      });
}

exports.getAllMessagesForBothUsers = async (user1, user2) => {
    const user1Messages = await chatRoomModel.find({participantId: user1}).messages;
    const user2Messages = await chatRoomModel.find({participantId: user2}).messages;
    const allMessages = {user1Messages: user1Messages, user2Messages: user2Messages};
    return allMessages;
}




