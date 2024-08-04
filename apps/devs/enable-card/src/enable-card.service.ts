import { PrismaServiceDevs } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EnableCardService {
  constructor(
    private readonly prismaServiceDevs: PrismaServiceDevs,
    private readonly logger: Logger,
  ) {}
  /**
   * This function is enabling Dev, in other words returns to search
   * @param userId UserId by Access Token
   * @returns enbaledDev
   */
  async enableDev(userId: string) {
    try {
      const disabledDev = await this.prismaServiceDevs.dev.update({
        where: {
          userId: userId,
        },
        data: {
          enabled: true,
        },
      });
      return disabledDev;
    } catch (error) {
      this.logger.error('Error in createDev:');
      throw new error('Access denied');
    }
  }
}
