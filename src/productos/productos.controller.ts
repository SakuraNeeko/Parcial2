import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ProductosService } from './productos.service'; // Importa el servicio de productos
import { CreateProductoDto } from '../dto/create-producto.dto'; // Importa el DTO de creación de productos
import { UpdateProductoDto } from '../dto/update-producto.dto'; // Importa el DTO de actualización de productos
import { Producto } from '../schemas/producto.schema'; // Importa el esquema de productos

@Controller('productos') 
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto> {
    const producto = await this.productosService.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto not found');
    }
    return producto;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    const updatedProducto = await this.productosService.update(id, updateProductoDto);
    if (!updatedProducto) {
      throw new NotFoundException(`Producto with ID ${id} not found.`);
    }
    return updatedProducto;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productosService.delete(id);
  }
}
