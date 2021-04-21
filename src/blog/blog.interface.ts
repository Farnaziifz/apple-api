import { Document } from 'mongoose';

export interface Blog extends Document {
  readonly title: string;
  readonly description: string;
  readonly synopsis: string;
  readonly category_id: string;
  readonly category_name: string;
}
