import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTagSchema } from './blog-tag.schema';
import { BlogTagService } from './blog-tag.service';
import { BlogTagController } from './blog-tag.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BlogTag', schema: BlogTagSchema }]),
  ],
  controllers: [BlogTagController],
  providers: [BlogTagService],
})
export class BlogTagModule {}
