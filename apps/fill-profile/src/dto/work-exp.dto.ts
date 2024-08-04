import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class WorkExperienceDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MaxLength(63, { each: true })
  positions: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MaxLength(63, { each: true })
  workPlaces: string[];

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(60)
  workExp: number;
}
