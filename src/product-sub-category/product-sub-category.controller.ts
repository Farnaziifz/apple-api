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
  Delete,
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

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const Cat = await this.productSubCategoryService.deleteProductCat(id);
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
    @Body() createProductSubCategoryDTO: CreateProductSubCategoryDTO,
  ) {
    const cat = await this.productSubCategoryService.updateCat(
      id,
      createProductSubCategoryDTO,
    );
    if (!cat) throw new NotFoundException('Category does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Category has been successfully updated',
      cat,
    });
  }
}
