import { Controller, Get } from '@nestjs/common';
import { BlogTagService } from './blog-tag.service';

@Controller('blog-tag')
export class BlogTagController {
  constructor(private blogTagService: BlogTagService) {}

  @Get()
  async getBlogTag() {
    return this.blogTagService.getBlogTag();
  }
}
