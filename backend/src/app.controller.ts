import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async url(@Res() res: Response){
    res.sendFile(path.join(process.cwd(), 'frontend/index.html'));
  }
}
