import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  providers: [WebsocketGateway, RoomService],
})
export class PokerModule {}
