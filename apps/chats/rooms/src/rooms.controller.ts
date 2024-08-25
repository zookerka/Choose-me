import { Controller, Get, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { GetCurrentUserId } from '@app/common/index';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post('/create')
  async createRoom(toId: string, @GetCurrentUserId() fromId: string) {
    return this.roomsService.createRoom([toId, fromId]);
  }

  async deleteRoom(roomId: string) {
    return this.roomsService.deleteRoom(roomId);
  }
}
