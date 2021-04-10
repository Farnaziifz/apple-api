import { Document } from 'mongoose';

export interface HomeSlider extends Document {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}
