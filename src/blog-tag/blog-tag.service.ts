import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogTag } from './blog-tags.interface';
import { CreateBlogTagDTO } from './dto/create-blog-tag.dto';

@Injectable()
export class BlogTagService {
  constructor(
    @InjectModel('BlogTag')
    private readonly BlogTagModel: Model<BlogTag>,
  ) {}

  async getAllBlogTags(): Promise<BlogTag[]> {
    const blogCats = await this.BlogTagModel.find().exec();
    return blogCats;
  }
  async createBlogTag(createBlogTagDTO: CreateBlogTagDTO): Promise<BlogTag> {
    const newBlogTags = await new this.BlogTagModel(createBlogTagDTO);

    return newBlogTags.save();
  }

  async getBlogTagById(id): Promise<BlogTag> {
    const blog = await this.BlogTagModel.findById(id).exec();
    return blog;
  }
  async updateTag(id, createBlogTagDTO: CreateBlogTagDTO): Promise<BlogTag> {
    const updateTag = await this.BlogTagModel.findByIdAndUpdate(
      id,
      createBlogTagDTO,
      { new: true },
    );

    return updateTag;
  }
}
