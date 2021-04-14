import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactFormSchema } from './contact-form.schema';
import { ContactFormService } from './contact-form.service';
import { ContactFormController } from './contact-form.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ContactForm', schema: ContactFormSchema },
    ]),
  ],
  providers: [ContactFormService],
  controllers: [ContactFormController],
})
export class ContactFormModule {}
