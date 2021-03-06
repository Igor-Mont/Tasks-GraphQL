import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  isImportant: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date()
  },
  updated_at: Date
});

const Task = mongoose.model('Task', Schema);

export { Task, Schema };