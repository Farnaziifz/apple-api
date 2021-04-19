import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Delete,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { BlogCommentService } from './blog-comment.service';
import { CreateBlogCommentDTO } from './dto/create-blog-comment.dto';

@Controller('blog-comment')
export class BlogCommentController {
  constructor(private blogCommentService: BlogCommentService) {}

  @Get()
  async getAllBlogComment(@Res() res) {
    const blogCm = await this.blogCommentService.getAllBlogComment();
    return res.status(HttpStatus.OK).json({ statusCode: 200, blogCm });
  }

  @Get('comment/:id')
  async getBlogByd(@Res() res, @Param('id') id) {
    const commnet = await this.blogCommentService.getBlogCommentById(id);
    res.status(HttpStatus.OK).json({ statusCode: 200, commnet });
  }

  @Post('create')
  async createProductCategory(
    @Res() res,
    @Body() createBlogCommentDTO: CreateBlogCommentDTO,
  ) {
    const blgocm = await this.blogCommentService.createBlogTag(
      createBlogCommentDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'blog comment added succefuly',
      blgocm,
    });
  }

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const cm = await this.blogCommentService.deleteBlogCm(id);
    if (!cm) throw new NotFoundException('cm does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'cm has been deleted',
      cm,
    });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createBlogCommentDTO: CreateBlogCommentDTO,
  ) {
    const cm = await this.blogCommentService.updateCm(id, createBlogCommentDTO);
    if (!cm) throw new NotFoundException('cm does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'cm has been successfully updated',
      cm,
    });
  }
}
