import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true  // This should generally not be unique
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export const User = mongoose.model('User', userSchema);
