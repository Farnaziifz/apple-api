import { Document } from 'mongoose';

export interface Daily extends Document {
  readonly name: string;
  readonly price: number;
  readonly image: string;
  readonly description: string;
}
