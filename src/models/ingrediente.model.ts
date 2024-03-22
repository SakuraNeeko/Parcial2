import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProveedorSchema } from './proveedor.model';

@Schema()
export class Ingrediente extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ type: ProveedorSchema, required: true })
  proveedor: { _id: string, nombre: string };
}

export const IngredienteSchema = SchemaFactory.createForClass(Ingrediente);
