import { Document } from 'mongoose';

export interface ProductCategory extends Document {
  readonly name: string;
}
