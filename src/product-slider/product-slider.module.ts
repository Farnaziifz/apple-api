import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSliderSchema } from './product-slider.schema';
import { ProductSliderService } from './product-slider.service';
import { ProductSliderController } from './product-slider.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductSlider', schema: ProductSliderSchema },
    ]),
  ],
  providers: [ProductSliderService],
  controllers: [ProductSliderController],
})
export class ProductSliderModule {}
