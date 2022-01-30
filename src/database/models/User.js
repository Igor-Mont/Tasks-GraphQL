import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: String,
  },
  username: {
    type: String,
    required: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  update_at: Date
});

const User = mongoose.model('User', Schema);

export { User };