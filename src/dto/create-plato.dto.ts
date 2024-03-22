import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlatoDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
}
