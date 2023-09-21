// base.controller.ts
import { Controller } from '@nestjs/common';
import * as CommonError from '../../lib/errors/common';

@Controller()
export class BaseController {
    async run(req, res, fn: () => Promise<any>) {
        try {
            return await fn();
        } catch (error) {
            console.error('base.error', error);
            const body = {
                statusCode: error.status ?? 500,
                message: error.status ? error.message : 'Unexpected error'
            }
            res.status(body.statusCode).json(body)
        }
    }

}