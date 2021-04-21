import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCategoriesSchema } from './blog-categories.schema';
import { BlogCategoriesService } from './blog-categories.service';
import { BlogCategoriesController } from './blog-categories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BlogCategories', schema: BlogCategoriesSchema },
    ]),
  ],
  providers: [BlogCategoriesService],
  controllers: [BlogCategoriesController],
})
export class BlogCategoriesModule {}
