import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { Proveedor, ProveedorSchema } from '../schemas/proveedor.schema'; // Importa el modelo de Proveedor

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Proveedor.name, schema: ProveedorSchema }]), // Importa el modelo de Proveedor aquí
  ],
  controllers: [ProveedoresController],
  providers: [ProveedoresService],
})
export class ProveedoresModule {}
