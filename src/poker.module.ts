import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [WebsocketGateway, RoomService, UserService],
})
export class PokerModule {}
