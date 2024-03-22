import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private ventasService: VentasService) {}

  @Get()
  async findAll() {
    return this.ventasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const venta = await this.ventasService.findOne(id);
    if (!venta) {
      throw new NotFoundException(`Venta with ID ${id} not found.`);
    }
    return venta;
  }

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto) {
    // Agregar la fecha actual al DTO de la venta
    createVentaDto.fecha = new Date();
    return this.ventasService.create(createVentaDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    const updatedVenta = await this.ventasService.update(id, updateVentaDto);
    if (!updatedVenta) {
      throw new NotFoundException(`Venta with ID ${id} not found.`);
    }
    return updatedVenta;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ventasService.delete(id);
  }
}
