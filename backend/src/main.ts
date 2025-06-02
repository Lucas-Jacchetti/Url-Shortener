import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://url-shortener-1xqw.vercel.app'],
    methods: ['GET', 'POST'],
    credentials: false, // deixe true se for usar cookies/autenticação
  });

  // Garante resposta a OPTIONS (preflight)
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
    } else {
      next();
    }
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: http://${process.env.HOST || '0.0.0.0'}:${port}`);
}
bootstrap();