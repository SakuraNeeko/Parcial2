import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosController } from './productos.controller'; // Importa el controlador de productos
import { ProductosService } from './productos.service'; // Importa el servicio de productos
import { Producto, ProductoSchema } from '../schemas/producto.schema'; // Importa el esquema y el modelo de productos

@Module({
  imports: [MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])], // Usa el esquema y modelo de productos
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
