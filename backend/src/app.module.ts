import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { urlShortenerModule } from './UrlShortener/urlShortener.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    urlShortenerModule,
    MongooseModule.forRoot('mongodb+srv://lucasjacchetti:i80GA1LmbvYJ8WTY@cluster0.g3fqyzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
