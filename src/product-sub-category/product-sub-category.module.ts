import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSubCategorySchema } from './product-sub-category.schema';
import { ProductSubCategoryService } from './product-sub-category.service';
import { ProductSubCategoryController } from './product-sub-category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductSubCategory', schema: ProductSubCategorySchema },
    ]),
  ],
  providers: [ProductSubCategoryService],
  controllers: [ProductSubCategoryController],
})
export class ProductSubCategoryModule {}
