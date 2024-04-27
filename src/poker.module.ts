import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BroadcastService } from './services/broadcast.service';
import { PokerService } from './services/poker.service';
import { RoomEffectsService } from './services/room-effects.service';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  providers: [WebsocketGateway, PokerService, RoomService, UserService, BroadcastService, RoomEffectsService],
})
export class PokerModule {}
