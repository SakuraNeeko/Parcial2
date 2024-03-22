import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarcasController } from './marcas.controller'; // Importa el controlador de marcas
import { MarcasService } from './marcas.service'; // Importa el servicio de marcas
import { Marca, MarcaSchema } from '../schemas/marca.schema'; // Importa el esquema y el modelo de marcas

@Module({
  imports: [MongooseModule.forFeature([{ name: Marca.name, schema: MarcaSchema }])], // Usa el esquema y modelo de marcas
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}