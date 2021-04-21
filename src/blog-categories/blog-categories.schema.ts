import * as mongoose from 'mongoose';

export const BlogCategoriesSchema = new mongoose.Schema({
  name: String,
});
