import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Producto extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ type: String, ref: 'Marca', required: true })
  marca: string;

}

export const ProductoSchema = SchemaFactory.createForClass(Producto);