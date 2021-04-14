import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogComment } from './blog-comment.interface';
import { CreateBlogCommentDTO } from './dto/create-blog-comment.dto';

@Injectable()
export class BlogCommentService {
  constructor(
    @InjectModel('BlogComment')
    private readonly BlogCommentModel: Model<BlogComment>,
  ) {}

  async getAllBlogComment(): Promise<BlogComment[]> {
    const blogCm = await this.BlogCommentModel.find().exec();
    return blogCm;
  }

  async createBlogTag(
    createBlogCommentDTO: CreateBlogCommentDTO,
  ): Promise<BlogComment> {
    const newBlogCm = await new this.BlogCommentModel(createBlogCommentDTO);

    return newBlogCm.save();
  }

  async getBlogCmById(id): Promise<BlogComment> {
    const blogCm = await this.BlogCommentModel.findById(id).exec();
    return blogCm;
  }

  async updateCm(
    id,
    createBlogCommentDTO: CreateBlogCommentDTO,
  ): Promise<BlogComment> {
    const updateTag = await this.BlogCommentModel.findByIdAndUpdate(
      id,
      createBlogCommentDTO,
      { new: true },
    );

    return updateTag;
  }

  async deleteBlogCm(id): Promise<any> {
    const deleteCm = await this.BlogCommentModel.findByIdAndRemove(id);
    return deleteCm;
  }
}
