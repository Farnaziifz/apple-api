import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: Array,
});

export interface Blog {
  id: string;
  title: string;
  description: string;
  tags: string[];
}
