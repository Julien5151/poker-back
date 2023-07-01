import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BroadcastService } from './services/broadcast.service';
import { PokerService } from './services/poker.service';
import { RoomEffectsService } from './services/room-effects.service';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [WebsocketGateway, PokerService, RoomService, UserService, BroadcastService, RoomEffectsService],
})
export class PokerModule {}
