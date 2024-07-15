import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaServiceDevs, PrismaServiceUsers } from '@app/common';
import { UpdateTagsDto } from './dto/update.tags.dto';
import { Achievements, dev } from 'prisma.db/generated/clientDevs';
import { Skills } from 'prisma.db/generated/clientUsers';

@Injectable()
export class DevsSearchService {
  constructor(
    private readonly prismaServiceDevs: PrismaServiceDevs,
    private readonly logger: Logger,
  ) {}
  /**
   * This function searches for devs with some tags
   * @param updateTagsDto Tags that user choose
   * @returns Array with Devs
   */
  async searchDevs(updateTagsDto: UpdateTagsDto): Promise<dev[]> {
    try {
      const unProvedSkills = updateTagsDto.unProvedSkills?.length
        ? updateTagsDto.unProvedSkills
        : [Skills.noSkills];
      const provedSkills = updateTagsDto.provedSkills?.length
        ? updateTagsDto.provedSkills
        : [Skills.noSkills];
      const achievements = updateTagsDto.achievements?.length
        ? updateTagsDto.achievements
        : [Achievements.noAchievements];

      const devs = await this.prismaServiceDevs.dev.findMany({
        where: {
          enabled: true,
          unProvedSkills: {
            hasEvery: unProvedSkills,
          },
          provedSkills: {
            hasEvery: provedSkills,
          },
          achievements: {
            hasEvery: achievements,
          },
        },
      });
      return devs.slice(0, 1000); //slice for first 1000 cards to avoid bugs and enhance performance
    } catch (error) {
      this.logger.error('Error in createDev:');
      throw new error('Access denied');
    }
  }
}
