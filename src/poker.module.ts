import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoomService } from './room.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [WebsocketGateway, RoomService],
})
export class PokerModule {}
