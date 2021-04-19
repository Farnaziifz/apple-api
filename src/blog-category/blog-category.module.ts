import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCategorySchema } from './blog-category.schema';
import { BlogCategoryController } from './blog-category.controller';
import { BlogCategoryService } from './blog-category.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BlogCategory', schema: BlogCategorySchema },
    ]),
  ],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
