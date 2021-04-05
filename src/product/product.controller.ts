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
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product-dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/bySub/:id')
  async getProductBySub(@Res() res, @Param('id') id) {
    const productBySub = await this.productService.getProductByCat(id);
    if (!productBySub) throw new NotFoundException('no sub category');
    return res.status(HttpStatus.OK).json(productBySub);
  }

  @Get()
  async getAllProduct(@Res() res) {
    const products = await this.productService.getAllProduct();
    return res.status(HttpStatus.OK).json(products);
  }

  @Post('create')
  async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const newProduct = await this.productService.createProduct(
      createProductDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product added succefuly',
      newProduct,
    });
  }

  @Get('/:id')
  async getProductSingle(@Res() res, @Param('id') id) {
    const singleProduct = await this.productService.getProductById(id);
    if (!singleProduct) throw new NotFoundException('no sub category');
    return res.status(HttpStatus.OK).json(singleProduct);
  }
}
