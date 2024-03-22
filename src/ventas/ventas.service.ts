import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venta } from '../models/venta.model';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';

@Injectable()
export class VentasService {
  constructor(@InjectModel(Venta.name) private ventaModel: Model<Venta>) {}

  async findAll(): Promise<Venta[]> {
    return this.ventaModel.find().exec();
  }

  async findOne(id: string): Promise<Venta | null> {
    return this.ventaModel.findById(id).exec();
  }

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const createdVenta = new this.ventaModel(createVentaDto);
    return createdVenta.save();
  }

  async update(id: string, updateVentaDto: UpdateVentaDto): Promise<Venta | null> {
    const updatedVenta = await this.ventaModel.findByIdAndUpdate(id, updateVentaDto, { new: true });
    return updatedVenta;
  }

  async delete(id: string): Promise<Venta | null> {
    const deletedVenta = await this.ventaModel.findByIdAndDelete(id);
    if (!deletedVenta) {
      throw new NotFoundException(`Venta with ID ${id} not found.`);
    }
    return deletedVenta;
  }
}