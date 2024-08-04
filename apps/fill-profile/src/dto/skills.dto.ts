import { IsEnum, IsNotEmpty } from 'class-validator';
import { Skills } from 'prisma.db/generated/clientUsers';

export class SkillsDto {
  @IsNotEmpty()
  @IsEnum(Skills, { each: true })
  skills: Skills[];
}
