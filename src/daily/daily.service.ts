import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Daily } from './daily.interface';
import { CreateDailyDTO } from './dto/create-daily.dto';

@Injectable()
export class DailyService {
  constructor(
    @InjectModel('Daily')
    private readonly DailyModel: Model<Daily>,
  ) {}

  async getAllDaily(): Promise<Daily[]> {
    const daily = await this.DailyModel.find().exec();
    return daily;
  }

  async createDaily(createDailyDTO: CreateDailyDTO): Promise<Daily> {
    const newDaily = await new this.DailyModel(createDailyDTO);
    return newDaily.save();
  }

  async getDailyById(id): Promise<Daily> {
    const daily = await this.DailyModel.findById(id).exec();
    return daily;
  }
  async updateDaily(id, createDailyDTO: CreateDailyDTO): Promise<Daily> {
    const updateDaily = await this.DailyModel.findByIdAndUpdate(
      id,
      createDailyDTO,
      { new: true },
    );

    return updateDaily;
  }
}
