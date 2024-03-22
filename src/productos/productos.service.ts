import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from '../schemas/producto.schema'; 
import { CreateProductoDto } from '../dto/create-producto.dto'; 
import { UpdateProductoDto } from '../dto/update-producto.dto'; 

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<Producto>) {}

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }

  async findOne(id: string): Promise<Producto | null> {
    return this.productoModel.findById(id).exec();
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const createdProducto = new this.productoModel(createProductoDto);
    return createdProducto.save();
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto | null> {
    const updatedProducto = await this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true });
    return updatedProducto;
  }

  async delete(id: string): Promise<Producto | null> {
    const deletedProducto = await this.productoModel.findByIdAndDelete(id);
    if (!deletedProducto) {
      throw new NotFoundException(`Producto with ID ${id} not found.`);
    }
    return deletedProducto;
  }
}
