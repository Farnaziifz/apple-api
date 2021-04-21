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
import { BlogCategoriesService } from './blog-categories.service';
import { CreateBlogCategoriesDTO } from './dto/create-blog-categories.dto';

@Controller('blog-categories')
export class BlogCategoriesController {
  constructor(private blogCategoriesService: BlogCategoriesService) {}

  @Get()
  async getAllBlogCategory(@Res() res) {
    const blogCategory = await this.blogCategoriesService.getAllCategories();
    return res.status(HttpStatus.OK).json({ statusCode: 200, blogCategory });
  }

  @Post('create')
  async createBlogCategory(
    @Res() res,
    @Body() createBlogCategoriesDTO: CreateBlogCategoriesDTO,
  ) {
    const blogCategory = await this.blogCategoriesService.createBlogCat(
      createBlogCategoriesDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'blog category tag added succefuly',
      blogCategory,
    });
  }

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const Cat = await this.blogCategoriesService.deleteCat(id);
    if (!Cat) throw new NotFoundException('Category does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Catgeory has been deleted',
      Cat,
    });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createBlogCategoriesDTO: CreateBlogCategoriesDTO,
  ) {
    const cat = await this.blogCategoriesService.updateCat(
      id,
      createBlogCategoriesDTO,
    );
    if (!cat) throw new NotFoundException('Category does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Category has been successfully updated',
      cat,
    });
  }
}
