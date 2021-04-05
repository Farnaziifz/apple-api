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
import { ProductSubCategoryService } from './product-sub-category.service';
import { CreateProductSubCategoryDTO } from './dto/create-product-sub-category.dto';

@Controller('product-sub-category')
export class ProductSubCategoryController {
  constructor(private productSubCategoryService: ProductSubCategoryService) {}

  @Get('/:id')
  async getSubcategoryByCategory(@Res() res, @Param('id') id) {
    const subCategory = await this.productSubCategoryService.getSubCategoryByCategory(
      id,
    );
    if (!subCategory) throw new NotFoundException('no sub category');
    return res.status(HttpStatus.OK).json(subCategory);
  }

  @Post('create')
  async createSubCategory(
    @Res() res,
    @Body() createProductSubCategoryDTO: CreateProductSubCategoryDTO,
  ) {
    const newSubCat = await this.productSubCategoryService.createProductSubCat(
      createProductSubCategoryDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'sub category added succefuly',
      newSubCat,
    });
  }
}
