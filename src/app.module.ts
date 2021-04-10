import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { BlogModule } from './blog/blog.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductSubCategoryModule } from './product-sub-category/product-sub-category.module';
import { ProductModule } from './product/product.module';
import { HomeSliderModule } from './home-slider/home-slider.module';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customer-app', {
      useNewUrlParser: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    BlogTagModule,
    BlogModule,
    ProductCategoryModule,
    ProductSubCategoryModule,
    ProductModule,
    HomeSliderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
