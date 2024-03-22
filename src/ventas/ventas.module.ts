import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { Venta, VentaSchema } from '../models/venta.model'; // Importa el modelo de venta

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Venta.name, schema: VentaSchema }]), // Registra el modelo de venta en MongooseModule
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}