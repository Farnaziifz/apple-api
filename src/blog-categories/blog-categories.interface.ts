import { Document } from 'mongoose';

export interface BlogCategories extends Document {
  readonly name: string;
}
