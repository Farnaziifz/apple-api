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
import { ProductSliderService } from './product-slider.service';
import { CreateProductSliderDTO } from './dto/create-product-slider.dto';

@Controller('product-slider')
export class ProductSliderController {
  constructor(private productSliderService: ProductSliderService) {}

  @Get()
  async getAllSlider(@Res() res) {
    const slider = await this.productSliderService.getAllProductSlider();
    return res.status(HttpStatus.OK).json({ statusCode: 200, slider });
  }

  @Post('create')
  async createProductCategory(
    @Res() res,
    @Body() createProductSliderDTO: CreateProductSliderDTO,
  ) {
    const productslider = await this.productSliderService.createProductSlider(
      createProductSliderDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product slider tag added succefuly',
      productslider,
    });
  }

  @Delete('/delete/:id')
  async deleteCat(@Res() res, @Param('id') id) {
    const sldier = await this.productSliderService.deleteProductSlider(id);
    if (!sldier) throw new NotFoundException('sldier does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'sldier has been deleted',
      sldier,
    });
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createProductSliderDTO: CreateProductSliderDTO,
  ) {
    const slider = await this.productSliderService.updateCat(
      id,
      createProductSliderDTO,
    );
    if (!slider) throw new NotFoundException('slider does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'slider has been successfully updated',
      slider,
    });
  }
}
