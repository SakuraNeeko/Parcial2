import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Orden extends Document {
  @Prop({ required: true })
  platoId: string;

  @Prop({ required: true, default: Date.now })
  fecha: Date;
}

export const OrdenSchema = SchemaFactory.createForClass(Orden);
