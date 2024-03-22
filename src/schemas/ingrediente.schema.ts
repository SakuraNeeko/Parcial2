import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Proveedor } from './proveedor.schema';

@Schema()
export class Ingrediente extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Proveedor', required: true })
  proveedor: Proveedor; // Referencia al proveedor
}

export const IngredienteSchema = SchemaFactory.createForClass(Ingrediente);
