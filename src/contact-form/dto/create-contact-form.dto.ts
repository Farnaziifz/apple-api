export class CreateContactFormDTO {
  readonly username: string;
  readonly phone: number;
  readonly subject: string;
  readonly message: string;
  readonly status: boolean;
}
