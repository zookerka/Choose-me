import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Public } from '@app/common';
import { UpdateTagsDto } from './dto/update.tags.dto';

import { DevsSearchService } from './search.service';

@Controller('devs')
export class DevsSearchController {
  constructor(private readonly devsSearchService: DevsSearchService) {}

  @Public()
  @Get('search')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.FOUND)
  async searchDevs(@Body() updateTagsDto: UpdateTagsDto) {
    return this.devsSearchService.searchDevs(updateTagsDto);
  }
}
