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
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDTO } from './dto/create-product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Get()
  async getAllProductCategory(@Res() res) {
    const productCategory = await this.productCategoryService.getAllProductCategory();
    return res.status(HttpStatus.OK).json(productCategory);
  }

  @Post('create')
  async createProductCategory(
    @Res() res,
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ) {
    const productCategory = await this.productCategoryService.createProductCat(
      createProductCategoryDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product category tag added succefuly',
      productCategory,
    });
  }

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const Cat = await this.productCategoryService.deleteProductCat(id);
    if (!Cat) throw new NotFoundException('Category does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Catgeory has been deleted',
      Cat,
    });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ) {
    const cat = await this.productCategoryService.updateCat(
      id,
      createProductCategoryDTO,
    );
    if (!cat) throw new NotFoundException('Category does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Category has been successfully updated',
      cat,
    });
  }
}
