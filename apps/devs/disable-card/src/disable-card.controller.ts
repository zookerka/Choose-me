import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { DisableCardService } from './disable-card.service';
import { GetCurrentUserId } from '@app/common';

@Controller()
export class DisableCardController {
  constructor(private readonly disableCardService: DisableCardService) {}
  @Post('disable')
  @HttpCode(HttpStatus.OK)
  async disableDev(@GetCurrentUserId() userId: string) {
    return this.disableCardService.disableDev(userId);
  }
}
