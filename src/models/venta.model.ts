import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Venta extends Document {
  @Prop({ type: String, ref: 'Producto', required: true })
  producto: string;

  @Prop({ type: String, ref: 'Cliente', required: true })
  cliente: string;

  @Prop({ type: Date, default: Date.now })
  fecha: Date;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);
