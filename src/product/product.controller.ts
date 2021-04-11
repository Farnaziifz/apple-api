import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  Delete,
  Put,
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
    return res.status(HttpStatus.OK).json({ statusCode: 200, productBySub });
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

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const product = await this.productService.deleteProduct(id);
    if (!product) throw new NotFoundException('product does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product has been deleted',
      product,
    });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductDTO,
    );
    if (!product) throw new NotFoundException('product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'product has been successfully updated',
      product,
    });
  }
}
