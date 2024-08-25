import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create.message.dto';
import { GetCurrentUserId } from '@app/common/index';

@Controller()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async createMessage(
    @Body() roomId: string,
    @GetCurrentUserId() fromId: string,
    @Body() toId: string,
    @Body() isImage: boolean,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    return await this.messagesService.createMessage(
      roomId,
      fromId,
      toId,
      isImage,
      createMessageDto,
    );
  }

  @Get()
  async getMessages(roomId: string) {
    return await this.messagesService.getMessages(roomId);
  }
}
