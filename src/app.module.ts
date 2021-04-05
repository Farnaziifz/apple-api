import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { BlogModule } from './blog/blog.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductSubCategoryModule } from './product-sub-category/product-sub-category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customer-app', {
      useNewUrlParser: true,
    }),
    BlogTagModule,
    BlogModule,
    ProductCategoryModule,
    ProductSubCategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
