import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdenesController } from './ordenes.controller';
import { OrdenesService } from './ordenes.service';
import { Orden, OrdenSchema } from '../models/orden.model'; // Importa el modelo de orden

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Orden.name, schema: OrdenSchema }]), // Registra el modelo de orden en MongooseModule
  ],
  controllers: [OrdenesController],
  providers: [OrdenesService],
})
export class OrdenesModule {}
