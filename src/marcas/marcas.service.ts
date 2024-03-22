import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marca } from '../schemas/marca.schema'; // Importa el esquema de marcas
import { CreateMarcaDto } from '../dto/create-marca.dto'; // Importa el DTO de creación de marcas
import { UpdateMarcaDto } from '../dto/update-marca.dto'; // Importa el DTO de actualización de marcas

@Injectable()
export class MarcasService {
  constructor(@InjectModel(Marca.name) private marcaModel: Model<Marca>) {}

  async findAll(): Promise<Marca[]> {
    return this.marcaModel.find().exec();
  }

  async findOne(id: string): Promise<Marca | null> {
    const marca = await this.marcaModel.findById(id).exec();
    return marca;
  }

  async create(createMarcaDto: CreateMarcaDto): Promise<Marca> {
    const createdMarca = new this.marcaModel(createMarcaDto);
    return createdMarca.save();
  }

  async update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<Marca | null> {
    const updatedMarca = await this.marcaModel.findByIdAndUpdate(id, updateMarcaDto, { new: true });
    return updatedMarca;
  }

  async delete(id: string): Promise<Marca | null> {
    const deletedMarca = await this.marcaModel.findByIdAndDelete(id);
    if (!deletedMarca) {
      throw new NotFoundException(`Marca with ID ${id} not found.`);
    }
    return deletedMarca;
  }
}