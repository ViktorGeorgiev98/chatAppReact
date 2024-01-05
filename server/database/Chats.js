const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    roomId: String,
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        messages: [{
          sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          message: String,
          timestamp: { type: Date, default: Date.now }
        }]
      }]
})

const chatRoom = new mongoose.Model('ChatRoom', chatRoomSchema);

module.exports = chatRoom;