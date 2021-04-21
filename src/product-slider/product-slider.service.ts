import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductSlider } from './product-slider.interface';
import { CreateProductSliderDTO } from './dto/create-product-slider.dto';

@Injectable()
export class ProductSliderService {
  constructor(
    @InjectModel('ProductSlider')
    private readonly ProductSliderModel: Model<ProductSlider>,
  ) {}

  async getAllProductSlider(): Promise<ProductSlider[]> {
    const productSlider = await this.ProductSliderModel.find().exec();
    return productSlider;
  }

  async createProductSlider(
    createProductSliderDTO: CreateProductSliderDTO,
  ): Promise<ProductSlider> {
    const newSlider = await new this.ProductSliderModel(createProductSliderDTO);
    return newSlider.save();
  }

  async deleteProductSlider(id): Promise<any> {
    const deleteSlider = await this.ProductSliderModel.findByIdAndRemove(id);
    return deleteSlider;
  }
  async updateCat(
    catId,
    createProductSliderDTO: CreateProductSliderDTO,
  ): Promise<ProductSlider> {
    const updateSlider = await this.ProductSliderModel.findByIdAndUpdate(
      catId,
      createProductSliderDTO,
      { new: true },
    );

    return updateSlider;
  }
}
