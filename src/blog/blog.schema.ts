import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  synopsis: String,
  category_id: String,
  category_name: String,
  image: String,
});
