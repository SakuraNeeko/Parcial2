import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orden } from '../models/orden.model';
import { CreateOrdenDto } from '../dto/create-orden.dto';
import { UpdateOrdenDto } from '../dto/update-orden.dto';

@Injectable()
export class OrdenesService {
  constructor(@InjectModel(Orden.name) private ordenModel: Model<Orden>) {}

  async findAll(): Promise<Orden[]> {
    return this.ordenModel.find().populate('plato').exec();
  }

  async findOne(id: string): Promise<Orden | null> {
    return this.ordenModel.findById(id).exec();
  }

  async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    const createdOrden = new this.ordenModel(createOrdenDto);
    return createdOrden.save();
  }

  async update(id: string, updateOrdenDto: UpdateOrdenDto): Promise<Orden | null> {
    const updatedOrden = await this.ordenModel.findByIdAndUpdate(id, updateOrdenDto, { new: true });
    return updatedOrden;
  }

  async delete(id: string): Promise<Orden | null> {
    const deletedOrden = await this.ordenModel.findByIdAndDelete(id);
    if (!deletedOrden) {
      throw new NotFoundException(`Orden with ID ${id} not found.`);
    }
    return deletedOrden;
  }
}
