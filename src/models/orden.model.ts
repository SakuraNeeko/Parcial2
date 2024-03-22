import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Orden extends Document {
  @Prop({ type: String, ref: 'Plato', required: true })
  plato: string;

  @Prop({ type: Date, default: Date.now })
  fecha: Date;
}

export const OrdenSchema = SchemaFactory.createForClass(Orden);
