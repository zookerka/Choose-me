import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaServiceDevs, PrismaServiceUsers } from '@app/common';
import { CreateDevDto } from './dto/create.dev.dto';
// import { Achievements, dev } from 'prisma.db/generated/clientDevs';
// import { Skills } from 'prisma.db/generated/clientUsers';

@Injectable()
export class DevsNewCardService {
  constructor(
    private readonly prismaServiceDevs: PrismaServiceDevs,
    private readonly PrismaServiceUsers: PrismaServiceUsers,
    private readonly logger: Logger,
  ) {}
  /**
   * This function creates Dev-card
   * @param createDevDto Dto with name and body
   * @param userId UserId by Access Token
   * @returns created Dev-card
   */
  async createDev(createDevDto: CreateDevDto, userId: string) {
    try {
      const userProfile = await this.PrismaServiceUsers.profile.findUnique({
        where: {
          userId: userId,
        },
      });

      const newDev = await this.prismaServiceDevs.dev.create({
        data: {
          name: createDevDto.name,
          body: createDevDto.body,
          authorId: userId,
          unProvedSkills: userProfile.provedSkills,
          provedSkills: userProfile.provedSkills,
          achievements: userProfile.achievements,
        },
      });
      if (!newDev) {
        throw new BadRequestException('Failed to create your developer card');
      }
      return newDev;
    } catch (error) {
      this.logger.error('Error in createDev:');
      throw new error('Access denied');
    }
  }

  async testFunction() {
    return 'Hello';
  }
}
