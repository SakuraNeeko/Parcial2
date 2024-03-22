import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { PlatosService } from './platos.service';
import { CreatePlatoDto } from '../dto/create-plato.dto';
import { UpdatePlatoDto } from '../dto/update-plato.dto'; // Importa el DTO para actualizar un plato

@Controller('platos')
export class PlatosController {
  constructor(private platosService: PlatosService) {}

  @Get()
  async findAll() {
    return this.platosService.findAll();
  }

  @Post()
  async create(@Body() createPlatoDto: CreatePlatoDto) {
    return this.platosService.create(createPlatoDto);
  }

  @Get(':id') // Agrega esta ruta para obtener un plato por su ID
  async findOne(@Param('id') id: string) {
    const plato = await this.platosService.findOne(id);
    if (!plato) {
      throw new NotFoundException(`Plato with ID ${id} not found.`);
    }
    return plato;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePlatoDto: UpdatePlatoDto) {
    const updatedPlato = await this.platosService.update(id, updatePlatoDto);
    if (!updatedPlato) {
      throw new NotFoundException(`Plato with ID ${id} not found.`);
    }
    return updatedPlato;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.platosService.delete(id);
  }
}
