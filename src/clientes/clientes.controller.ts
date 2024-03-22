import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  async findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const cliente = await this.clientesService.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found.`);
    }
    return cliente;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    const updatedCliente = await this.clientesService.update(id, updateClienteDto);
    if (!updatedCliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found.`);
    }
    return updatedCliente;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedCliente = await this.clientesService.delete(id);
    if (!deletedCliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found.`);
    }
    return deletedCliente;
  }
}
