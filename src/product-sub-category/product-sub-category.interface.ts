import { Document } from 'mongoose';

export interface ProductSubCategory extends Document {
  readonly name: string;
  readonly category_id: string;
}
