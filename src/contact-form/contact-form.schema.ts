import * as mongoose from 'mongoose';

export const ContactFormSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  subject: String,
  message: String,
});
