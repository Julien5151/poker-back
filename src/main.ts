import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { PokerModule } from './poker.module';

async function bootstrap() {
  const app = await NestFactory.create(PokerModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(8080);
}
bootstrap();
