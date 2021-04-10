import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductCategory } from './product-category.interface';
import { CreateProductCategoryDTO } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel('ProductCategory')
    private readonly ProductCategoryModel: Model<ProductCategory>,
  ) {}

  async getAllProductCategory(): Promise<ProductCategory[]> {
    const productCats = await this.ProductCategoryModel.find().exec();
    return productCats;
  }

  async createProductCat(
    createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    const newCategory = await new this.ProductCategoryModel(
      createProductCategoryDTO,
    );
    return newCategory.save();
  }

  async deleteProductCat(catId): Promise<any> {
    const deleteCat = await this.ProductCategoryModel.findByIdAndRemove(catId);
    return deleteCat;
  }

  async updateCat(
    catId,
    createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    const updateCat = await this.ProductCategoryModel.findByIdAndUpdate(
      catId,
      createProductCategoryDTO,
      { new: true },
    );

    return updateCat;
  }
}
