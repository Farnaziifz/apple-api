import * as mongoose from 'mongoose';

export const HomeSliderSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});
