import { Controller, Get, Req, Res } from '@nestjs/common';
import { BaseController } from './base.controller';
import * as dbimagemaker from '../../lib/db/models/index';
import * as helpers from '../../lib/helpers/index.helper';

@Controller('users')
export class UserController extends BaseController {
    @Get('/list')
    async getAllUsers(@Req() req, @Res() res) {
        return this.run(req, res, async () => {
            const data = await dbimagemaker.User.findAll({});
            res.status(200).send(data);
        });
    }

    @Get('/:id')
    async getUser(@Req() req, @Res() res) {
        return this.run(req, res, async () => {
            const { id } = req.params;
            const { email } = req.query;
            helpers.validator.ensure({ id, email }, ['id', 'email'])
            const data = await dbimagemaker.User.findOne({ where: { id, email } });
            res.status(200).send(data);
        });
    }
}