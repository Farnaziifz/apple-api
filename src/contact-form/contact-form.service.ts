import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContactForm } from './contact-form.interface';
import { CreateContactFormDTO } from './dto/create-contact-form.dto';

@Injectable()
export class ContactFormService {
  constructor(
    @InjectModel('ContactForm')
    private readonly ContactFormModel: Model<ContactForm>,
  ) {}

  async getAllForm(): Promise<ContactForm[]> {
    const form = await this.ContactFormModel.find().exec();
    return form;
  }

  async createForm(
    createContactFormDTO: CreateContactFormDTO,
  ): Promise<ContactForm> {
    const newForm = await new this.ContactFormModel(createContactFormDTO);

    return newForm.save();
  }

  async updateTag(
    id,
    createContactFormDTO: CreateContactFormDTO,
  ): Promise<ContactForm> {
    const updateForm = await this.ContactFormModel.findByIdAndUpdate(
      id,
      createContactFormDTO,
      { new: true },
    );

    return updateForm;
  }
}
