import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatosController } from './platos.controller';
import { PlatosService } from './platos.service';
import { Plato, PlatoSchema } from '../models/plato.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plato.name, schema: PlatoSchema }])
  ],
  controllers: [PlatosController],
  providers: [PlatosService],
})
export class PlatosModule {}
