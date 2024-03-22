import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Producto extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ type: String, required: true }) // Cambia a tipo String
  idMarca: string; // Cambia el nombre de la propiedad
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);