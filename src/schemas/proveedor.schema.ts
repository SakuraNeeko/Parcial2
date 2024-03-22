import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Proveedor extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  compañia: string;
}

export const ProveedorSchema = SchemaFactory.createForClass(Proveedor);
