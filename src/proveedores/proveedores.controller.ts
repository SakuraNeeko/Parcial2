import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private proveedoresService: ProveedoresService) {}

  @Post()
  async create(@Body() createProveedoresDto: CreateProveedoresDto) {
    return this.proveedoresService.create(createProveedoresDto);
  }

  @Get()
  async findAll() {
    return this.proveedoresService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const proveedor = await this.proveedoresService.findById(id);
    if (!proveedor) {
      throw new NotFoundException(`Proveedor with ID ${id} not found.`);
    }
    return proveedor;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProveedoresDto: UpdateProveedoresDto) {
    const updatedProveedor = await this.proveedoresService.update(id, updateProveedoresDto);
    if (!updatedProveedor) {
      throw new NotFoundException(`Proveedor with ID ${id} not found.`);
    }
    return updatedProveedor;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedProveedor = await this.proveedoresService.delete(id);
    if (!deletedProveedor) {
      throw new NotFoundException(`Proveedor with ID ${id} not found.`);
    }
    return deletedProveedor;
  }
}
