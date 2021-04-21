import * as mongoose from 'mongoose';

export const ProductSliderSchema = new mongoose.Schema({
  title: String,
  image: String,
  url: String,
});
