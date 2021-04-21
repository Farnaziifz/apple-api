import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategories } from './blog-categories.interface';
import { CreateBlogCategoriesDTO } from './dto/create-blog-categories.dto';

@Injectable()
export class BlogCategoriesService {
  constructor(
    @InjectModel('BlogCategories')
    private readonly BlogCategoriesModel: Model<BlogCategories>,
  ) {}

  async getAllCategories(): Promise<BlogCategories[]> {
    const blogCats = await this.BlogCategoriesModel.find().exec();
    return blogCats;
  }

  async createBlogCat(
    createBlogCategoriesDTO: CreateBlogCategoriesDTO,
  ): Promise<BlogCategories> {
    const newCategory = await new this.BlogCategoriesModel(
      createBlogCategoriesDTO,
    );
    return newCategory.save();
  }

  async deleteCat(catId): Promise<any> {
    const deleteCat = await this.BlogCategoriesModel.findByIdAndRemove(catId);
    return deleteCat;
  }

  async updateCat(
    catId,
    createBlogCategoriesDTO: CreateBlogCategoriesDTO,
  ): Promise<BlogCategories> {
    const updateCat = await this.BlogCategoriesModel.findByIdAndUpdate(
      catId,
      createBlogCategoriesDTO,
      { new: true },
    );

    return updateCat;
  }
}
