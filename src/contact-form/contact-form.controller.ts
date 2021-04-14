import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { CreateContactFormDTO } from './dto/create-contact-form.dto';

@Controller('contact-form')
export class ContactFormController {
  constructor(private contactFormService: ContactFormService) {}

  @Get()
  async getAllForm(@Res() res) {
    const form = await this.contactFormService.getAllForm();
    return res.status(HttpStatus.OK).json({ statusCode: 200, form });
  }

  @Post('create')
  async createForm(
    @Res() res,
    @Body() createContactFormDTO: CreateContactFormDTO,
  ) {
    const form = await this.contactFormService.createForm(createContactFormDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'form comment added succefuly',
      form,
    });
  }

  @Put('/update/:id')
  async updateForm(
    @Res() res,
    @Param('id') id,
    @Body() createContactFormDTO: CreateContactFormDTO,
  ) {
    const cm = await this.contactFormService.updateTag(
      id,
      createContactFormDTO,
    );
    if (!cm) throw new NotFoundException('cm does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'cm has been successfully updated',
      cm,
    });
  }
}
