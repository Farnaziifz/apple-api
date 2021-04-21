export class CreateBlogDTO {
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly synopsis: string;
  readonly category_id: string;
  readonly category_name: string;
}
