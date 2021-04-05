import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductSubCategory } from './product-sub-category.interface';
import { CreateProductSubCategoryDTO } from './dto/create-product-sub-category.dto';

@Injectable()
export class ProductSubCategoryService {
  constructor(
    @InjectModel('ProductSubCategory')
    private readonly ProductSubCategoryModel: Model<ProductSubCategory>,
  ) {}

  async getSubCategoryByCategory(id): Promise<ProductSubCategory[]> {
    const productSubCat = await this.ProductSubCategoryModel.find({
      category_id: id,
    });
    return productSubCat;
  }

  async createProductSubCat(
    createProductSubCategoryDTO: CreateProductSubCategoryDTO,
  ): Promise<ProductSubCategory> {
    const newSubCat = await new this.ProductSubCategoryModel(
      createProductSubCategoryDTO,
    );
    return newSubCat.save();
  }
}
