import { Module } from '@nestjs/common';
import { UrlShortenerController } from './urlShortener.controller';
import { UrlShortenerService } from './urlShortener.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from 'src/schemas/url.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Url.name, schema: UrlSchema}])],
    controllers: [UrlShortenerController],
    providers: [UrlShortenerService],
})
export class urlShortenerModule {}
