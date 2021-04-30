import * as mongoose from 'mongoose';

export const DailySchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  details: Array,
  status: Boolean,
});
