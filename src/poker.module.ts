import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BroadcastService } from './services/broadcast.service';
import { RoomService } from './services/room.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [WebsocketGateway, RoomService, BroadcastService],
})
export class PokerModule {}
