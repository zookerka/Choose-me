import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
} from '@nestjs/common';
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

      // check for duplicate to avoid more than one card for each user
      const duplicate_check = await this.prismaServiceDevs.dev.findUnique({
        where: {
          userId: userId,
        },
      });
      if (duplicate_check) {
        throw new ConflictException('You already have a card');
      }

      const newDev = await this.prismaServiceDevs.dev.create({
        data: {
          name: createDevDto.name,
          body: createDevDto.body,
          userId: userId,
          unProvedSkills: userProfile.provedSkills,
          provedSkills: userProfile.provedSkills,
          positions: userProfile.positions,
          workExp: userProfile.workExp,
          workPlaces: userProfile.workPlaces,
          otherLinks: userProfile.otherLinks,
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
}
