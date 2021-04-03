import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customer-app', {
      useNewUrlParser: true,
    }),
    BlogTagModule,
    BlogModule,
  ],
})
export class AppModule {}
