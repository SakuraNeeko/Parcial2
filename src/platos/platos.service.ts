import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plato } from '../models/plato.model';
import { CreatePlatoDto } from '../dto/create-plato.dto';
import { UpdatePlatoDto } from '../dto/update-plato.dto';

@Injectable()
export class PlatosService {
  constructor(@InjectModel(Plato.name) private platoModel: Model<Plato>) {}

  async findAll(): Promise<Plato[]> {
    return this.platoModel.find().exec();
  }

  async findOne(id: string): Promise<Plato | null> {
    const plato = await this.platoModel.findById(id).exec();
    return plato;
  }

  async create(createPlatoDto: CreatePlatoDto): Promise<Plato> {
    const createdPlato = new this.platoModel(createPlatoDto);
    return createdPlato.save();
  }

  async update(id: string, updatePlatoDto: UpdatePlatoDto): Promise<Plato | null> {
    const updatedPlato = await this.platoModel.findByIdAndUpdate(id, updatePlatoDto, { new: true });
    return updatedPlato;
  }

  async delete(id: string): Promise<Plato | null> {
    const deletedPlato = await this.platoModel.findByIdAndDelete(id);
    if (!deletedPlato) {
      throw new NotFoundException(`Plato with ID ${id} not found.`);
    }
    return deletedPlato;
  }
}
