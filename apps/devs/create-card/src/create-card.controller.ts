import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateDevDto } from './dto/create.dev.dto';
import { GetCurrentUserId } from '@app/common';
import { DevsNewCardService } from './create-card.service';

@Controller('devs')
export class DevsNewCardController {
  constructor(private readonly devsNewCardService: DevsNewCardService) {}

  @Post('new')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  async createDev(
    @Body() createDevDto: CreateDevDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.devsNewCardService.createDev(createDevDto, userId);
  }
}
