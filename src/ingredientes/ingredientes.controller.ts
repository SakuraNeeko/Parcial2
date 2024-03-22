import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from '../dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from '../dto/update-ingrediente.dto';
import { Ingrediente } from '../schemas/ingrediente.schema';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post()
  async create(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredientesService.create(createIngredienteDto);
  }

  @Get()
  async findAll(): Promise<Ingrediente[]> {
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ingrediente> {
    const ingrediente = await this.ingredientesService.findOne(id);
    if (!ingrediente) {
      throw new NotFoundException('Ingrediente not found');
    }
    return ingrediente;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    const updatedIngrediente = await this.ingredientesService.update(id, updateIngredienteDto);
    if (!updatedIngrediente) {
      throw new NotFoundException(`Ingrediente with ID ${id} not found.`);
    }
    return updatedIngrediente;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ingredientesService.delete(id);
  }
}
