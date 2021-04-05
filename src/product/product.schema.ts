import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  hasDiscount: Boolean,
  dicount: Number,
  image: String,
  subCat_id: String,
  description: String,
  details: Array,
});
