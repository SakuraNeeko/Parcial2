import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from '../dto/create-orden.dto';
import { UpdateOrdenDto } from '../dto/update-orden.dto';

@Controller('ordenes')
export class OrdenesController {
  constructor(private ordenesService: OrdenesService) {}

  @Get()
  async findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const orden = await this.ordenesService.findOne(id);
    if (!orden) {
      throw new NotFoundException(`Orden with ID ${id} not found.`);
    }
    return orden;
  }

  @Post()
  async create(@Body() createOrdenDto: CreateOrdenDto) {
    // Agregar la fecha actual al DTO de la orden
    createOrdenDto.fecha = new Date();
    return this.ordenesService.create(createOrdenDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
    const updatedOrden = await this.ordenesService.update(id, updateOrdenDto);
    if (!updatedOrden) {
      throw new NotFoundException(`Orden with ID ${id} not found.`);
    }
    return updatedOrden;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ordenesService.delete(id);
  }
}
