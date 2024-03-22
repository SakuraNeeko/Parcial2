import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Marca extends Document {
  @Prop({ required: true })
  nombre: string;
}

export const MarcaSchema = SchemaFactory.createForClass(Marca);