import { Controller, Get, Req, Res } from '@nestjs/common';
import * as fs from 'fs/promises'; // Import fs.promises

@Controller('/')
export class IndexController {
    @Get()
    mainApi(@Req() req, @Res() res) {
        res.status(200).send('Up and running');
    }

    @Get('version')
    async version(@Req() req, @Res() res) {
        const data = await fs.readFile('./.version', 'utf8')
        res.status(200).send(data);
    }

}