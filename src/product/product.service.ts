import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.interface';
import { CreateProductDTO } from './dto/create-product-dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly ProductModel: Model<Product>,
  ) {}

  async getAllProduct(): Promise<Product[]> {
    const product = await this.ProductModel.find().exec();
    return product;
  }

  async getProductByCat(id): Promise<Product[]> {
    const productCatId = await this.ProductModel.find({ subCat_id: id });
    return productCatId;
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await new this.ProductModel(createProductDTO);
    return newProduct.save();
  }

  async getProductById(id): Promise<Product> {
    const productSingle = await this.ProductModel.findById(id).exec();
    return productSingle;
  }
}
