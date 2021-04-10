import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HomeSlider } from './home-slider.interface';
import { CreateHomeSliderDTO } from './dto/create-slider.dto';

@Injectable()
export class HomeSliderService {
  constructor(
    @InjectModel('HomeSlider')
    private readonly HomeSliderModel: Model<HomeSlider>,
  ) {}

  async getAllSlider(): Promise<HomeSlider[]> {
    const homeSlider = await this.HomeSliderModel.find().exec();
    return homeSlider;
  }

  async createHomeSlider(
    createHomeSliderDTO: CreateHomeSliderDTO,
  ): Promise<HomeSlider> {
    const newSlider = await new this.HomeSliderModel(createHomeSliderDTO);

    return newSlider.save();
  }

  async deleteSlider(id): Promise<any> {
    const deleteSlider = await this.HomeSliderModel.findByIdAndRemove(id);
    return deleteSlider;
  }
}
