import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategory } from './blog-category.interface';
import { CreateBlogCategoryDTO } from './dto/create-blog-category.dto';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel('BlogCategory')
    private readonly BlogCategoryModel: Model<BlogCategory>,
  ) {}

  async getAllCategory(): Promise<BlogCategory[]> {
    const blogCats = await this.BlogCategoryModel.find().exec();
    return blogCats;
  }
  async createBlogCategory(
    createBlogCategoryDTO: CreateBlogCategoryDTO,
  ): Promise<BlogCategory> {
    const newCategory = await new this.BlogCategoryModel(createBlogCategoryDTO);
    console.log(newCategory);
    return newCategory;
  }

  async getBlogCatById(id): Promise<BlogCategory> {
    const category = await this.BlogCategoryModel.findById(id).exec();
    return category;
  }

  async updateCat(
    id,
    createBlogCategoryDTO: CreateBlogCategoryDTO,
  ): Promise<BlogCategory> {
    const updateCat = await this.BlogCategoryModel.findByIdAndUpdate(
      id,
      createBlogCategoryDTO,
      { new: true },
    );
    return updateCat;
  }
}
