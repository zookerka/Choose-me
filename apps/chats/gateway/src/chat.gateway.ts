import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@WebSocketGateway({
  namespace: '/chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');

  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3901 },
    });
  }

  @SubscribeMessage('msgToServer')
  async handleMessage(
    client: Socket,
    payload: { sender: string; message: string; room: string },
  ): Promise<void> {
    const response = await this.client
      .send('send_message', payload)
      .toPromise();

    this.server.to(payload.room).emit('msgToClient', response);
  }

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Метод для обработки присоединения к комнате
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, payload: { room: string }): void {
    client.join(payload.room);
    this.logger.log(`Client ${client.id} joined room: ${payload.room}`);
  }
}
