import mongoose, { Schema } from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim : true,
    index: true,//for seraching
  },
  watchHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'video', // Assuming there is a WatchHistory model.
  }],
  email: {
    type: String,
    required: true,
    unique: true,
    trim : true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true, // For searching
  },
  avatar: {  // Fixed typo here
    type: String,//cloudinary url 
    required: true,

  },
  coverImage: {
    type: String,

  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id , username: this.username, email: this.email, fullName: this.fullName}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN}); };
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN}); }

export const User = mongoose.model('User', userSchema);
