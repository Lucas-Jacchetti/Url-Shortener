import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { UrlShortenerService } from "./urlShortener.service";
import { Response } from 'express';



@Controller('url')
export class UrlShortenerController {
    constructor(private readonly urlService: UrlShortenerService) {}

    @Post('shorten')
        async shorten(@Body('originalUrl') originalUrl: string) {
        return this.urlService.shorten(originalUrl);
    }

    @Get(':shortUrl')
    async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
        const url = await this.urlService.find(shortUrl);

        if (url) {
            console.log("Redirected success")
            return res.redirect(302, url.originalUrl); // Temporary Redirect
        } else {
            return res.status(404).json({ error: "URL not found" });
        }
    }



}
