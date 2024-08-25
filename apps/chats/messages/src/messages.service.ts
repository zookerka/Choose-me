import { PrismaServiceChats } from '@app/database/chats/prisma.chats.service';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateMessageDto } from '../dto/create.message.dto';
import * as crypto from 'crypto';

@Injectable()
export class MessagesService {
  constructor(
    private readonly prismaServiceChats: PrismaServiceChats,
    private readonly logger: Logger,
  ) {}
  async encryptMessage(message: string) {
    const cipher = crypto.createCipher(
      'aes-256-cbc',
      process.env.ENCRYPTION_KEY,
    );
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  async decryptMessage(encryptedMessage: string) {
    const decipher = crypto.createDecipher(
      'aes-256-cbc',
      process.env.ENCRYPTION_KEY,
    );
    let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  async createMessage(
    roomId: string,
    fromId: string,
    toId: string,
    isImage: boolean,
    createMessageDto: CreateMessageDto,
  ) {
    const message = await this.encryptMessage(createMessageDto.body);
    return this.prismaServiceChats.message.create({
      data: {
        message: message,
        from_id: fromId,
        to_id: toId,
        room: { connect: { id: roomId } },
        image: isImage,
      },
    });
  }
  async getMessages(roomId: string) {
    const messages = await this.prismaServiceChats.message.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: { createdAt: 'asc' },
    });

    return messages.map((message) => ({
      ...message,
      message: this.decryptMessage(message.message),
    }));
  }
}
