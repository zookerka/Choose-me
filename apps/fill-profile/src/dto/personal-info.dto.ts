import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class PersonalInfoDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(16)
  @Max(86)
  age: number;

  @MaxLength(63)
  @IsNotEmpty()
  @IsString()
  name: string;

  @MaxLength(63)
  @IsNotEmpty()
  @IsString()
  surname: string;
}
