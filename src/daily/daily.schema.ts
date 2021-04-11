import * as mongoose from 'mongoose';

export const DailySchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});
