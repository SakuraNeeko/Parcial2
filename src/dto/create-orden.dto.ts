import { IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';

export class CreateOrdenDto {
  @IsNotEmpty()
  @IsMongoId()
  plato: string;

  @IsDateString()
  fecha: Date;
}
