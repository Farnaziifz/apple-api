import { Document } from 'mongoose';

export interface BlogComment extends Document {
  readonly username: string;
  readonly phone: number;
  readonly subject: string;
  readonly message: string;
  readonly status: boolean;
}
