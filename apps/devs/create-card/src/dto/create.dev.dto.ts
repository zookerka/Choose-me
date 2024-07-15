import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDevDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  body: string;
}
