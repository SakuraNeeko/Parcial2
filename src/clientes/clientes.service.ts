import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from '../models/cliente.model';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<Cliente>) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const { nombre, cedula } = createClienteDto;
    const createdCliente = new this.clienteModel({ nombre, cedula });
    return createdCliente.save();
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  async findById(id: string): Promise<Cliente | null> {
    return this.clienteModel.findById(id).exec();
  }

  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente | null> {
    const existingCliente = await this.clienteModel.findByIdAndUpdate(id, updateClienteDto, { new: true });
    return existingCliente;
  }

  async delete(id: string): Promise<Cliente | null> {
    const deletedCliente = await this.clienteModel.findByIdAndDelete(id);
    return deletedCliente;
  }
}
