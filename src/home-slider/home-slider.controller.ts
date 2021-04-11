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
} from '@nestjs/common';
import { HomeSliderService } from './home-slider.service';
import { CreateHomeSliderDTO } from './dto/create-slider.dto';

@Controller('home-slider')
export class HomeSliderController {
  constructor(private homeSliderService: HomeSliderService) {}

  @Get()
  async getAllSlider(@Res() res) {
    const slider = await this.homeSliderService.getAllSlider();
    return res.status(HttpStatus.OK).json({ statusCode: 200, slider });
  }
  @Post('create')
  async createSlider(
    @Res() res,
    @Body() createHomeSliderDTO: CreateHomeSliderDTO,
  ) {
    const slider = await this.homeSliderService.createHomeSlider(
      createHomeSliderDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'slider added succefuly',
      slider,
    });
  }

  @Delete('/delete/:id')
  async deleteSlider(@Res() res, @Param('id') id) {
    const slider = await this.homeSliderService.deleteSlider(id);
    if (!slider) throw new NotFoundException('slider does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'slider has been deleted',
      slider,
    });
  }
}
