import { Document } from 'mongoose';

export interface ContactForm extends Document {
  readonly username: string;
  readonly phone: number;
  readonly subject: string;
  readonly message: string;
}
