import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingrediente } from '../schemas/ingrediente.schema';
import { CreateIngredienteDto } from '../dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from '../dto/update-ingrediente.dto';

@Injectable()
export class IngredientesService {
  constructor(@InjectModel(Ingrediente.name) private ingredienteModel: Model<Ingrediente>) {}

  async findAll(): Promise<Ingrediente[]> {
    return this.ingredienteModel.find().populate('proveedor').exec();
  }

  async findOne(id: string): Promise<Ingrediente | null> {
    return this.ingredienteModel.findById(id).populate('proveedor').exec();
  }

  async create(createIngredienteDto: CreateIngredienteDto): Promise<Ingrediente> {
    const createdIngrediente = new this.ingredienteModel(createIngredienteDto);
    return createdIngrediente.save();
  }

  async update(id: string, updateIngredienteDto: UpdateIngredienteDto): Promise<Ingrediente | null> {
    const updatedIngrediente = await this.ingredienteModel.findByIdAndUpdate(id, updateIngredienteDto, { new: true });
    return updatedIngrediente;
  }

  async delete(id: string): Promise<Ingrediente | null> {
    const deletedIngrediente = await this.ingredienteModel.findByIdAndDelete(id);
    if (!deletedIngrediente) {
      throw new NotFoundException(`Ingrediente with ID ${id} not found.`);
    }
    return deletedIngrediente;
  }
}
