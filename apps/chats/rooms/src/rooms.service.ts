import { PrismaServiceChats } from '@app/database/chats/prisma.chats.service';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RoomsService {
  constructor(
    private readonly prismaServiceChats: PrismaServiceChats,
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
    private configService: ConfigService,
  ) {}
  async createRoom(userIds: string[]) {
    return this.prismaServiceChats.room.create({
      data: {
        users: userIds,
      },
    });
  }
  async deleteRoom(roomId: string) {
    return this.prismaServiceChats.room.delete({
      where: {
        id: roomId,
      },
    });
  }
}
