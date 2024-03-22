import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientesController } from './ingredientes.controller';
import { IngredientesService } from './ingredientes.service';
import { Ingrediente, IngredienteSchema } from '../schemas/ingrediente.schema'; // Importa el modelo Ingrediente y su esquema

@Module({
  imports: [MongooseModule.forFeature([{ name: Ingrediente.name, schema: IngredienteSchema }])], // Importa el modelo y su esquema usando MongooseModule
  controllers: [IngredientesController],
  providers: [IngredientesService]
})
export class IngredientesModule {}
