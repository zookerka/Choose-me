import { IsEnum, IsOptional } from 'class-validator';
import { Achievements, Skills } from 'prisma.db/generated/clientUsers';

export class UpdateTagsDto {
  @IsOptional()
  @IsEnum(Skills, { each: true })
  unProvedSkills: Skills[];

  @IsOptional()
  @IsEnum(Skills, { each: true })
  provedSkills: Skills[];

  @IsOptional()
  @IsEnum(Achievements, { each: true })
  achievements: Achievements[];
}
