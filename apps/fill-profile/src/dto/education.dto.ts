import { ArrayNotEmpty, IsArray, IsString, MaxLength } from 'class-validator';

export class EducationDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MaxLength(63, { each: true })
  education: string[];
}
