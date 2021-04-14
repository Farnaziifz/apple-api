import * as mongoose from 'mongoose';

export const BlogCommentSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  subject: String,
  message: String,
  status: Boolean,
});
