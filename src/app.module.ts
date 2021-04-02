import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { BlogTagModule } from './blog-tag/blog-tag.module';

@Module({
  imports: [BlogModule, BlogTagModule],
})
export class AppModule {}
