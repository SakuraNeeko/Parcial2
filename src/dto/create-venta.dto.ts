import { IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';

export class CreateVentaDto {
  @IsNotEmpty()
  @IsMongoId()
  producto: string;

  @IsNotEmpty()
  @IsMongoId()
  cliente: string;

  @IsDateString()
  fecha: Date;
}