import { IsNotEmpty, IsString, Max } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  //   @Max(4096)
  body: string;
}
