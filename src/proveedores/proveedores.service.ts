import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proveedor } from '../models/proveedor.model';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';

@Injectable()
export class ProveedoresService {
  constructor(@InjectModel(Proveedor.name) private proveedorModel: Model<Proveedor>) {}

  async create(createProveedoresDto: CreateProveedoresDto): Promise<Proveedor> {
    const { nombre, compañia } = createProveedoresDto;
    const createdProveedor = new this.proveedorModel({ nombre, compañia });
    return createdProveedor.save();
  }

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorModel.find().exec();
  }

  async findById(id: string): Promise<Proveedor | null> {
    return this.proveedorModel.findById(id).exec();
  }

  async update(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedor | null> {
    const existingProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, { new: true });
    return existingProveedor;
  }

  async delete(id: string): Promise<Proveedor | null> {
    const deletedProveedor = await this.proveedorModel.findByIdAndDelete(id);
    return deletedProveedor;
  }
}
