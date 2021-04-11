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
import { DailyService } from './daily.service';
import { CreateDailyDTO } from './dto/create-daily.dto';

@Controller('daily')
export class DailyController {
  constructor(private dailyService: DailyService) {}

  @Get()
  async getAllDaily(@Res() res) {
    const daily = await this.dailyService.getAllDaily();
    return res.status(HttpStatus.OK).json(daily);
  }

  @Post('create')
  async createBlogCats(@Res() res, @Body() createDailyDTO: CreateDailyDTO) {
    const daily = await this.dailyService.createDaily(createDailyDTO);

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'daily added succefuly',
      daily,
    });
  }

  @Get('/:id')
  async getDaily(@Res() res, @Param('id') id) {
    const blog = await this.dailyService.getDailyById(id);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json(blog);
  }

  @Put('/update/:id')
  async updateDaily(
    @Res() res,
    @Param('id') id,
    @Body() createDailyDTO: CreateDailyDTO,
  ) {
    const daily = await this.dailyService.updateDaily(id, createDailyDTO);
    if (!daily) throw new NotFoundException('daily does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'tag has been successfully updated',
      daily,
    });
  }
}
