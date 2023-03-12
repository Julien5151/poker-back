import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { PokerModule } from './poker.module';

async function bootstrap() {
  const app = await NestFactory.create(PokerModule);
  const configService = app.get(ConfigService);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(configService.get('PORT') | 8080);
}
bootstrap();
