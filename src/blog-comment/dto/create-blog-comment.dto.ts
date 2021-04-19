export class CreateBlogCommentDTO {
  readonly username: string;
  readonly phone: number;
  readonly subject: string;
  readonly message: string;
  readonly status: boolean;
  readonly blog_id: string;
}
