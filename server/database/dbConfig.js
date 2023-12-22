const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/reactChatApp');

        console.log("Connected to DB");
    } catch(e) {
        console.log(e.message);
    }
}


module.exports = dbConfig;