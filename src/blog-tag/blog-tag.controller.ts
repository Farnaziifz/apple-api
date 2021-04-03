import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { BlogTagService } from './blog-tag.service';
import { CreateBlogTagDTO } from './dto/create-blog-tag.dto';

@Controller('blog-tags')
export class BlogTagController {
  constructor(private blogTagService: BlogTagService) {}

  @Get()
  async getAllBlogCats(@Res() res) {
    const blogTags = await this.blogTagService.getAllBlogTags();
    return res.status(HttpStatus.OK).json(blogTags);
  }

  @Post('create')
  async createBlogCats(@Res() res, @Body() createBlogTagDTO: CreateBlogTagDTO) {
    const blog = await this.blogTagService.createBlogTag(createBlogTagDTO);

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Blog tag added succefuly',
      blog,
    });
  }

  @Get('/:id')
  async getBlogTag(@Res() res, @Param('id') id) {
    const blog = await this.blogTagService.getBlogTagById(id);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json(blog);
  }
}