import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from '../dto/create-marca.dto'; // Importa el DTO para crear una marca
import { UpdateMarcaDto } from '../dto/update-marca.dto'; // Importa el DTO para actualizar una marca
import { Marca } from '../schemas/marca.schema'; // Importa el esquema de marcas

@Controller('marcas') // Cambia la ruta a '/marcas'
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Get()
  async findAll(): Promise<Marca[]> {
    return this.marcasService.findAll();
  }

  @Post()
  async create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcasService.create(createMarcaDto);
  }

  @Get(':id') // Agrega esta ruta para obtener una marca por su ID
  async findOne(@Param('id') id: string) {
    const marca = await this.marcasService.findOne(id);
    if (!marca) {
      throw new NotFoundException(`Marca with ID ${id} not found.`);
    }
    return marca;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    const updatedMarca = await this.marcasService.update(id, updateMarcaDto);
    if (!updatedMarca) {
      throw new NotFoundException(`Marca with ID ${id} not found.`);
    }
    return updatedMarca;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.marcasService.delete(id);
  }
}