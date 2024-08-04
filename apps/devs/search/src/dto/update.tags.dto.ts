import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Skills } from 'prisma.db/generated/clientUsers';

export class UpdateTagsDto {
  @IsOptional()
  @IsEnum(Skills, { each: true })
  unProvedSkills: Skills[];

  @IsOptional()
  @IsEnum(Skills, { each: true })
  provedSkills: Skills[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  education: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  positions: string[];

  @IsOptional()
  workExp: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  workPlaces: string[];
}
