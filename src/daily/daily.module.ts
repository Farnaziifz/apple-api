import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyService } from './daily.service';
import { DailyController } from './daily.controller';
import { DailySchema } from './daily.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Daily', schema: DailySchema }]),
  ],
  providers: [DailyService],
  controllers: [DailyController],
})
export class DailyModule {}
