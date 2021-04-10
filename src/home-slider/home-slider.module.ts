import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeSliderController } from './home-slider.controller';
import { HomeSliderService } from './home-slider.service';
import { HomeSliderSchema } from './home-slider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'HomeSlider', schema: HomeSliderSchema },
    ]),
  ],
  controllers: [HomeSliderController],
  providers: [HomeSliderService],
})
export class HomeSliderModule {}
