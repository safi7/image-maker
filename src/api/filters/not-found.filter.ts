// filters/not-found.filter.ts
import { Catch, NotFoundException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        // Handle the 404 error here
        response.status(404).json({ message: 'Not Found' });
    }
}
