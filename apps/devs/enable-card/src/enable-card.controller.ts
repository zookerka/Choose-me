import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EnableCardService } from './enable-card.service';
import { GetCurrentUserId } from '@app/common';

@Controller()
export class EnableCardController {
  constructor(private readonly enableCardService: EnableCardService) {}
  @Post('enable')
  @HttpCode(HttpStatus.OK)
  async enableDev(@GetCurrentUserId() userId: string) {
    return this.enableCardService.enableDev(userId);
  }
}
