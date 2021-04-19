import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDTO } from './dto/create-blog-category.dto';

@Controller('blog-category')
export class BlogCategoryController {
  constructor(private blogCategoryService: BlogCategoryService) {}

  @Get()
  async getAllBlogCats(@Res() res) {
    const blogCats = await this.blogCategoryService.getAllCategory();
    console.log(blogCats);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      blogCats,
    });
  }

  @Post('create')
  async createBlogCats(
    @Res() res,
    @Body() createBlogCategoryDTO: CreateBlogCategoryDTO,
  ) {
    const blogCat = await this.blogCategoryService.createBlogCategory(
      createBlogCategoryDTO,
    );

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Blog Category added succefuly',
      blogCat,
    });
  }

  @Get('/:id')
  async getBlogCat(@Res() res, @Param('id') id) {
    const blog = await this.blogCategoryService.getBlogCatById(id);
    if (!blog) throw new NotFoundException('Blog cat does not exist!');
    return res.status(HttpStatus.OK).json({ statusCode: 200, blog });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createBlogCategoryDTO: CreateBlogCategoryDTO,
  ) {
    const cat = await this.blogCategoryService.updateCat(
      id,
      createBlogCategoryDTO,
    );
    if (!cat) throw new NotFoundException('tag does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'category has been successfully updated',
      cat,
    });
  }
}
