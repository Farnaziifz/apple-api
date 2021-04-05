import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: number;
  readonly hasDiscount: boolean;
  readonly dicount: number;
  readonly image: string;
  readonly subCat_id: string;
  readonly description: string;
  readonly details: string[];
}
