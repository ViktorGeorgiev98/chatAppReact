const { MongooseError } = require('mongoose');

exports.extractErrorMessage = (error) => {
    const isinstanceOfMongoose = error instanceof MongooseError;
    if (isinstanceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message);
        return msgs;
    }

    return [error.message];
}