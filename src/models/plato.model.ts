import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Plato extends Document {
  @Prop({ required: true })
  nombre: string;
}

export const PlatoSchema = SchemaFactory.createForClass(Plato);
