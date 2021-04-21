import { Document } from 'mongoose';

export interface ProductSlider extends Document {
  readonly title: string;
  readonly image: string;
  readonly url: string;
}
