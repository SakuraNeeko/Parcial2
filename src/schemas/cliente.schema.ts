import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cliente extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  cedula: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
