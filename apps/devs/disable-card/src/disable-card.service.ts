import { PrismaServiceDevs } from '@app/database/devs/prisma.devs.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DisableCardService {
  constructor(
    private readonly prismaServiceDevs: PrismaServiceDevs,
    private readonly logger: Logger,
  ) {}
  /**
   * This functions disables dev-card, in otherwords deleting from search
   * @param userId UserId from Access Token
   * @returns Disabled Dev
   */
  async disableDev(userId: string) {
    try {
      const disabledDev = await this.prismaServiceDevs.dev.update({
        where: {
          userId: userId,
        },
        data: {
          enabled: false,
        },
      });
      return disabledDev;
    } catch (error) {
      this.logger.error('Error in createDev:');
      throw new error('Access denied');
    }
  }
}
