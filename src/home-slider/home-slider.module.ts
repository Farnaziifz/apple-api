import { Module } from '@nestjs/common';
import { HomeSliderController } from './home-slider.controller';
import { HomeSliderService } from './home-slider.service';

@Module({
  controllers: [HomeSliderController],
  providers: [HomeSliderService]
})
export class HomeSliderModule {}
