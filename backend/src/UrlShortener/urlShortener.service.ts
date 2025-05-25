import { Injectable, Redirect } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Url } from 'src/schemas/url.schema';


@Injectable()
export class UrlShortenerService {
    constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}


    async shorten(originalUrl: string): Promise<Url> {
        let shortUrl: string;
        let existingUrl: any;

        do {
            shortUrl = Math.random().toString(36).substring(2, 8);
            existingUrl = await this.urlModel.findOne({ shortUrl }).exec();
        } while (existingUrl);
        
        console.log(`The original url is: ${originalUrl}`)
        console.log(`The short url is: https://localhost:3000/url/${shortUrl}`)

        const newUrl = new this.urlModel({ originalUrl, shortUrl });
        await newUrl.save();

        return newUrl;
    }

    async find(shortUrl: string) {
        return await this.urlModel.findOne({ shortUrl }).exec();
    }


}
