import * as mongoose from 'mongoose';

export const ProductSubCategorySchema = new mongoose.Schema({
  name: String,
  category_id: String,
});
